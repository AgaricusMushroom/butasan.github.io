'use strict';
let abilitiesEnabled=false;
try{abilitiesEnabled=localStorage.getItem('sakura-abilities')==='true'}catch{}
$('#abilities-mode').checked=abilitiesEnabled;
$('#abilities-mode').onchange=e=>{abilitiesEnabled=e.target.checked;try{localStorage.setItem('sakura-abilities',String(abilitiesEnabled))}catch{}};
const abilityNames=['野生の勘','天の恵み','元気いっぱい','最後の抵抗'];
function abilityNotice(i){const text=G.players[i].name+'【'+abilityNames[castId(i)]+'】発動';G.abilityNotice=text;log(text)}
// Exchange physical tiles. Never create a fifth copy or lose a red five.
function swapInto(hand,index,predicate,pools){for(const pool of pools){const k=pool.findIndex(predicate);if(k>=0){[hand[index],pool[k]]=[pool[k],hand[index]];return true}}return false}
function initialAbilities(repeat){G.abilityNotice='';G.players.forEach(p=>p.aiCirceAwakened=false);if(!G.abilitiesEnabled)return;G.abilityUsed??={};const kirke=G.players.findIndex((p,i)=>castId(i)===3),lapis=G.players.findIndex((p,i)=>castId(i)===2);const dora=MJ.nextDora(G.dora);
 if(kirke>=0&&(G.players[kirke].score<10000||G.abilityPendingCirce)&&!G.abilityUsed.circe){const p=G.players[kirke],pools=[G.deck,...G.players.filter((_,i)=>i!==kirke).map(p=>p.hand)],counts=MJ.counts([...p.hand,...pools.flat()]);const own=MJ.counts(p.hand);let kinds=Array.from({length:34},(_,t)=>t).filter(t=>t!==dora&&counts[t]>=3).sort((a,b)=>own[b]-own[a]||a-b).slice(0,3);if(kinds.length===3){const wanted=kinds.flatMap(t=>[t,t,t]);for(let k=0;k<9;k++){if(MJ.base(p.hand[k])===wanted[k])continue;let j=p.hand.findIndex((t,j)=>j>k&&MJ.base(t)===wanted[k]);if(j>=0)[p.hand[k],p.hand[j]]=[p.hand[j],p.hand[k]];else swapInto(p.hand,k,t=>MJ.base(t)===wanted[k],pools)}p.aiCirceAwakened=true;G.abilityUsed.circe=true;G.abilityPendingCirce=false;abilityNotice(kirke)}}
 if(repeat&&G.dealer===lapis){const p=G.players[lapis],isDora=t=>MJ.base(t)===dora||MJ.isRed(t),pools=[G.deck,...G.players.filter((_,i)=>i!==lapis&&i!==kirke).map(p=>p.hand)];while(p.hand.filter(isDora).length<2){const index=p.hand.findIndex(t=>!isDora(t));if(!swapInto(p.hand,index,isDora,pools))break}if(p.hand.filter(isDora).length>=2)abilityNotice(lapis)}
 G.players.forEach(p=>p.hand.sort((a,b)=>a-b))}
function heavenlyDraw(){if(!G.abilitiesEnabled||castId(G.turn)!==1)return;const p=G.players[G.turn],waits=MJ.waits(p.hand,p.melds);if(!waits.length)return;const index=G.replacements.length-1;if(index<0)return;const wins=t=>waits.includes(MJ.base(t));if(wins(G.replacements[index])){abilityNotice(G.turn);return}
 // Wall and unexposed dead-wall slots are the only sources; other players' hands stay intact.
 const pools=[G.deck,G.deadUsed];if(swapInto(G.replacements,index,wins,pools)){abilityNotice(G.turn);return}
 for(let k=0;k<index;k++)if(wins(G.replacements[k])){[G.replacements[index],G.replacements[k]]=[G.replacements[k],G.replacements[index]];abilityNotice(G.turn);return}
 for(let k=(G.kanCount+1)*2;k<G.indicators.length;k++)if(wins(G.indicators[k])){[G.replacements[index],G.indicators[k]]=[G.indicators[k],G.replacements[index]];abilityNotice(G.turn);return}
 log(p.name+'【天の恵み】山に当たり牌が残っていません')}
function instinctActive(){return !!G?.abilitiesEnabled&&G.players[0].score<10000}
function instinctTargets(){return [1,2,3]}
function instinctWaits(i){const p=G.players[i];if(p.hand.length%3===1)return MJ.waits(p.hand,p.melds);if(p.hand.length%3===2){const result=new Set();for(let k=0;k<p.hand.length;k++)for(const t of MJ.waits(p.hand.filter((_,j)=>j!==k),p.melds))result.add(t);return [...result]}return []}
function instinctDanger(t){if(!instinctActive())return [];return instinctTargets().filter(i=>canRon(i,t))}
const abilityTile=tile;
tile=function(t,kind='mini',extra='',attrs=''){const danger=kind==='big'?instinctDanger(t):[];if(danger.length){extra+=' ability-danger';attrs+=' data-danger="true"'}let html=abilityTile(t,kind,extra,attrs);if(danger.length)html=html.replace('title="','title="野生の勘：'+danger.map(i=>G.players[i].name).join('・')+'のロン当たり牌 ／ ');return html};
const abilityRender=render;
render=function(){abilityRender();if(!G)return;if(G.abilitiesEnabled&&!G.abilityUsed?.circe&&!G.abilityPendingCirce&&G.players.some((p,i)=>castId(i)===3&&p.score<10000)){G.abilityPendingCirce=true;save()}const box=$('#ability-status');box.hidden=!G.abilitiesEnabled;if(!G.abilitiesEnabled)return;box.textContent=(instinctActive()?'【野生の勘】 '+instinctTargets().map(i=>G.players[i].name+'：'+(instinctWaits(i).length?'テンパイ':'未テンパイ')).join(' ／ ')+'　赤枠＝ロン当たり牌':G.abilityNotice||'固有能力 ON')};

$('#ability-help').onclick=()=>{openModal('<h2>固有能力</h2><p>対局開始時のON/OFFを対局終了まで維持します。</p><p><b>あなた【野生の勘】</b><br>10,000点未満で相手のテンパイ状況を表示。現在ロンされる手牌を赤枠で表示します（役・フリテンを考慮）。チーム戦でも味方を含む他の3人全員が対象です。</p><p><b>ハイデ【天の恵み】</b><br>カン後にテンパイしていれば当たり牌を嶺上ツモします。ただし当たり牌がすべて他家の手牌・公開済みの牌にある場合は通常のツモです。</p><p><b>ラピス【元気いっぱい】</b><br>自身が親で連荘した局の配牌にドラを2枚以上含めます。赤ドラも対象です。</p><p><b>キルケー【最後の抵抗】</b><br>10,000点未満になった後の配牌を、暗刻3組を含む形にします。1対局につき1回。配牌だけで和了にはなりません。</p><button id="ability-close" class="primary">閉じる</button>');$('#ability-close').onclick=()=>$('#modal').close()};


