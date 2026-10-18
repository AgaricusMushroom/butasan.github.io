'use strict';
let selectedCast=[1,2,3];
try{const ids=JSON.parse(localStorage.getItem('sakura-selected-cast'));if(Array.isArray(ids)&&ids.length===3&&new Set(ids).size===3&&ids.every(i=>Number.isInteger(i)&&i>=1&&i<=5))selectedCast=ids}catch{}
function renderCastSelection(){const box=$('#characters');box.classList.add('selectable-cast');box.innerHTML=people.slice(1).map((p,k)=>{const id=k+1,on=selectedCast.includes(id);return `<button type="button" class="character cast-choice ${on?'chosen':''}" data-cast="${id}" aria-pressed="${on}"><div class="portrait">${portrait(id,null,true)}</div><div class="details"><small>${p.roman}</small><h3>${p.name}</h3><span class="personality">${p.tone}</span><p>「${escapeText(p.quote)}」</p></div><span class="choice-mark">${on?'✓':'＋'}</span></button>`}).join('');box.querySelectorAll('[data-cast]').forEach(b=>b.onclick=()=>{const id=+b.dataset.cast;if(selectedCast.includes(id))selectedCast=selectedCast.filter(i=>i!==id);else if(selectedCast.length<3)selectedCast.push(id);else{$('#cast-selection-status').textContent='選択中の1人を外してから、新しい相手を選んでください。';return}localStorage.setItem('sakura-selected-cast',JSON.stringify(selectedCast));renderCastSelection()});$('#start').disabled=selectedCast.length!==3;$('#cast-selection-status').textContent=`対戦相手を3人選択（${selectedCast.length} / 3）`;if(typeof fitViews==='function')requestAnimationFrame(fitViews)}
$('#characters').insertAdjacentHTML('beforebegin','<p id="cast-selection-status" role="status"></p>');
shuffledCast=function(){const ids=selectedCast.slice();for(let n=ids.length-1;n>0;n--){const j=Math.floor(Math.random()*(n+1));[ids[n],ids[j]]=[ids[j],ids[n]]}return [0,...ids]};
renderCastSelection();resumeButton();
abilityNames.push('天性の雀士','強力な伏兵');
const expandedInitialAbilities=initialAbilities;
initialAbilities=function(repeat){expandedInitialAbilities(repeat);G.players.forEach(p=>p.nyxFirstDraw=false)};
const expandedDiscard=discard;
discard=function(idx,newRiichi=false){const p=G.players[G.turn];if(newRiichi&&G.abilitiesEnabled&&castId(G.turn)===4&&p.score+1000<10000)p.nyxFirstDraw=true;return expandedDiscard(idx,newRiichi)};
function nyxDraw(pool){const i=G.turn,p=G.players[i];if(!p.nyxFirstDraw)return;p.nyxFirstDraw=false;if(!G.abilitiesEnabled||castId(i)!==4||!pool.length)return;const waits=MJ.waits(p.hand,p.melds),wins=t=>waits.includes(MJ.base(t));const end=pool.length-1;if(wins(pool[end])){abilityNotice(i);return}const k=G.deck.findIndex(wins);if(k>=0){[pool[end],G.deck[k]]=[G.deck[k],pool[end]];abilityNotice(i)}}
const expandedDraw=draw;
draw=function(){nyxDraw(G.deck);return expandedDraw()};
const expandedHeavenlyDraw=heavenlyDraw;
heavenlyDraw=function(){nyxDraw(G.replacements);expandedHeavenlyDraw()};
function feliciaUra(winner,from,t,r){const p=G.players[winner];if(!G.abilitiesEnabled||castId(winner)!==5||winner!==G.dealer||!p.riichi)return r;const hand=winner===from?p.hand:[...p.hand,t],all=[...hand,...p.melds.flatMap(m=>m.tiles)];if(G.uras.some(d=>all.some(v=>MJ.base(v)===MJ.nextDora(d)))){abilityNotice(winner);return r}const k=G.deck.findIndex(d=>all.some(v=>MJ.base(v)===MJ.nextDora(d)));if(k<0)return r;[G.indicators[1],G.deck[k]]=[G.deck[k],G.indicators[1]];G.uras[0]=G.indicators[1];G.ura=G.indicators[1];abilityNotice(winner);return MJ.score(hand,context(winner,winner===from,t))||r}
const expandedFinishWin=finishWin;
finishWin=function(winner,from,t,r){return expandedFinishWin(winner,from,t,feliciaUra(winner,from,t,r))};
const expandedAbilityHelp=$('#ability-help').onclick;
$('#ability-help').onclick=()=>{expandedAbilityHelp();$('#ability-close').insertAdjacentHTML('beforebegin','<p><b>ニュクス【天性の雀士】</b><br>リーチ宣言前の持ち点が10,000点未満なら、次の自分のツモで山に残っている当たり牌を引きます。鳴きで順番が変わっても、自分の最初のツモが対象です。</p><p><b>フェリシア【強力な伏兵】</b><br>親番でリーチして和了した際、山に適切な表示牌があれば裏ドラが必ず1枚以上乗ります。</p>')};

