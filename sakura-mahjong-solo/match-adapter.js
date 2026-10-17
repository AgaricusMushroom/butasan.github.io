// Server-only adapter: clients can request legal actions but cannot set tiles or scores.
let networkWait=null,networkDeadline=null,networkNext=null,networkCallQueue=[];
function human(i){return roster[i].human}
seatPerson=i=>({...people[roster[i].characterId||0],name:roster[i].name});
castId=i=>roster[i].characterId||0;
save=()=>{};render=()=>{};showResult=()=>{networkWait={kind:'result',seat:0};networkDeadline=null};
showCutIn=(i,event,done)=>{if(done)done()};playSfx=()=>{};say=(i,event)=>{G.speech=roster[i].name+'「'+({ron:'ロン！',tsumo:'ツモ！',riichi:'リーチ！',pon:'ポン！',chi:'チー！',kan:'カン！',draw:'流局ですね。'}[event]||'よろしくお願いします。')+'」'};
initialAbilities=()=>{};heavenlyDraw=()=>{};teamDiscard=(i,k)=>k;teamAvoidCall=()=>false;announceRoundStart=()=>{G.speech='対局を始めます。'};
queue=(fn,delay=700)=>{if(fn===cpu&&human(G.turn))return;hostSchedule(()=>{fn()},delay)};
function waitFor(kind,seat,timeout){networkWait={kind,seat};networkDeadline=Date.now()+45000;hostSchedule(()=>{networkWait=null;networkDeadline=null;timeout()},45000)}
continueTurn=()=>{if(human(G.turn))waitFor('discard',G.turn,()=>cpu());else queue(cpu)};
const networkApplyCall=applyCall;applyCall=o=>{networkWait=null;networkApplyCall(o);if(G.phase==='discard')continueTurn()};
resolveRon=next=>{networkNext=next;const {i,t}=G.lastDiscard;G.ronCandidates=[];for(let n=1;n<4;n++){const seat=(i+n)%4;let r=canRon(seat,t);if(G.pendingKan?.kind==='ankan'&&!r?.yaku.some(y=>y[0].startsWith('国士無双')))r=null;if(r)G.ronCandidates.push({i:seat,r})}nextRon()};
function nextRon(){const c=G.ronCandidates.shift();if(!c){networkWait=null;networkNext();return}if(!human(c.i)){finishWin(c.i,G.lastDiscard.i,G.lastDiscard.t,c.r);return}G.networkRon=c;waitFor('ron',c.i,()=>passRon())}
function passRon(){const p=G.players[G.networkRon.i];p.tempFuriten=true;if(p.riichi)p.riichiFuriten=true;nextRon()}
offerCalls=()=>{const {i:from,t}=G.lastDiscard;networkCallQueue=[];for(let n=1;n<4;n++){const i=(from+n)%4;const options=human(i)?callOptions(i,from,t):[aiCall(i,from,t)].filter(Boolean);for(const o of options)networkCallQueue.push(o)}networkCallQueue.sort((a,b)=>b.priority-a.priority||((a.i-from+4)%4)-((b.i-from+4)%4));nextCall()};
function nextCall(){const o=networkCallQueue[0];if(!o){networkWait=null;G.turn=(G.lastDiscard.i+1)%4;G.phase='draw';queue(draw);return}if(!human(o.i)){queue(()=>applyCall(o),1100);return}G.networkCalls=networkCallQueue.filter(v=>v.i===o.i&&v.priority===o.priority);waitFor('call',o.i,()=>{networkCallQueue=networkCallQueue.filter(v=>v.i!==o.i||v.priority!==o.priority);nextCall()})}
finishMatch=()=>{clearTimeout(timer);G.finished=true;const rank=G.players.map((p,i)=>({...p,i})).sort((a,b)=>b.score-a.score||((a.i-G.initialDealer+4)%4)-((b.i-G.initialDealer+4)%4));if(G.pot){G.players[rank[0].i].score+=G.pot*1000;G.pot=0}networkWait=null;networkDeadline=null};
function legal(i){if(!networkWait||networkWait.seat!==i)return {};if(networkWait.kind==='result')return {next:true};if(networkWait.kind==='ron')return {ron:true,pass:true};if(networkWait.kind==='call')return {calls:G.networkCalls.map((o,k)=>({index:k,label:callLabel(o),tiles:o.tiles})),pass:true};const p=G.players[i];return {discard:p.hand.map((t,k)=>k).filter(k=>(!p.riichi||k===p.hand.length-1)&&!(G.forbidden||[]).includes(MJ.base(p.hand[k]))),riichi:!p.riichi&&!p.melds.some(m=>m.open)&&p.score>=1000&&G.deck.length>=4?p.hand.map((t,k)=>MJ.waits(p.hand.filter((_,j)=>j!==k),p.melds).length?k:-1).filter(k=>k>=0&&!(G.forbidden||[]).includes(MJ.base(p.hand[k]))):[],tsumo:!!evaluate(i,true,p.hand.at(-1)),kans:kanOptions(i).map((o,k)=>({index:k,label:callLabel(o),tiles:o.tiles}))}}
globalThis.networkAction=(i,a)=>{if(!human(i)||networkWait?.seat!==i)throw Error('現在はあなたの操作待ちではありません');const l=legal(i);const k=a.index;
 if(a.type==='discard'&&l.discard?.includes(k)){if(a.riichi&&!l.riichi.includes(k))throw Error('リーチできません');clearTimeout(timer);networkWait=null;networkDeadline=null;if(a.riichi){G.players[i].riichi=true;G.players[i].ippatsu=true;G.players[i].score-=1000;G.pot++}discard(k,!!a.riichi)}
 else if(a.type==='tsumo'&&l.tsumo){clearTimeout(timer);networkWait=null;finishWin(i,i,G.players[i].hand.at(-1),evaluate(i,true,G.players[i].hand.at(-1)))}
 else if(a.type==='ron'&&l.ron){clearTimeout(timer);networkWait=null;finishWin(i,G.lastDiscard.i,G.lastDiscard.t,G.networkRon.r)}
 else if(a.type==='pass'&&l.pass){clearTimeout(timer);const kind=networkWait.kind;networkWait=null;if(kind==='ron')passRon();else{const o=G.networkCalls[0];networkCallQueue=networkCallQueue.filter(v=>v.i!==i||v.priority!==o.priority);nextCall()}}
 else if(a.type==='call'&&l.calls?.some(o=>o.index===k)){clearTimeout(timer);applyCall(G.networkCalls[k])}
 else if(a.type==='kan'&&l.kans?.some(o=>o.index===k)){clearTimeout(timer);networkWait=null;declareKan(kanOptions(i)[k])}
 else if(a.type==='next'&&l.next){clearTimeout(timer);networkWait=null;advance()}
 else throw Error('この操作はできません')};
globalThis.networkState=i=>({seat:i,mode:G.mode,round:G.round,dealer:G.dealer,honba:G.honba,pot:G.pot,remaining:G.deck.length,doras:G.doras,finished:G.finished,turn:G.turn,phase:G.phase,waiting:networkWait?{...networkWait}:null,deadline:networkDeadline,players:G.players.map((p,j)=>({name:p.name,score:p.score,characterId:roster[j].characterId,human:human(j),riichi:p.riichi,handCount:p.hand.length,hand:j===i?p.hand:undefined,river:p.river,melds:p.melds})),actions:legal(i),speech:G.speech,log:G.log,result:G.phase==='result'?G.result:null});
const initialDealer=Math.floor(Math.random()*4);G={version:2,mode:matchMode,teamMode:false,abilitiesEnabled:false,round:0,dealer:initialDealer,initialDealer,honba:0,pot:0,players:roster.map(p=>({name:p.name,score:25000})),log:[],finished:false};newRound();
