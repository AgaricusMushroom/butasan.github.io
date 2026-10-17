'use strict';
let teamMode=false;
$('#team-mode').onchange=e=>{teamMode=e.target.checked};
function sameTeam(a,b){return a%2===b%2}
function teamTotals(){return [G.players[0].score+G.players[2].score,G.players[1].score+G.players[3].score]}
function teamAvoidCall(i){return !!G?.teamMode&&G.players[(i+2)%4].riichi}
// Reads only own concealed hand and public rivers/melds/scores/riichi declarations.
function teamDiscard(i,fallback){if(!G.teamMode)return fallback;const p=G.players[i],ally=G.players[(i+2)%4];if(p.riichi)return p.hand.length-1;
 const threats=G.players.filter((q,j)=>!sameTeam(i,j)&&q.riichi),totals=teamTotals(),ahead=totals[i%2]>=totals[1-i%2];
 const opts=p.hand.map((t,k)=>({t:MJ.base(t),k,sh:(G.forbidden||[]).includes(MJ.base(t))?99:MJ.shanten(p.hand.filter((_,j)=>j!==k),p.melds.length)})).filter(o=>o.sh<99);if(!opts.length)return fallback;
 const best=Math.min(...opts.map(o=>o.sh)),defend=threats.length&&(ahead||best>1);
 const allySuits=ally.melds.filter(m=>m.open).flatMap(m=>m.tiles).filter(t=>MJ.base(t)<27).map(t=>Math.floor(MJ.base(t)/9));const flushSuit=allySuits.length>=6&&allySuits.every(s=>s===allySuits[0])?allySuits[0]:-1;
 let candidates=opts.filter(o=>o.sh<=best+(defend?1:0));for(const o of candidates){const safe=threats.filter(q=>q.river.some(r=>MJ.base(r.t)===o.t)).length;let cost=o.sh*100+(MJ.isRed(p.hand[o.k])?8:0)+(o.k===fallback?-1:0);if(defend)cost+=(threats.length-safe)*180;else cost+=(threats.length-safe)*20;
 // Support a visible flush direction only among equally efficient, safe discards.
 if(!threats.length&&!ally.riichi&&flushSuit>=0&&o.t<27&&Math.floor(o.t/9)===flushSuit)cost-=5;
 if(ally.riichi&&!threats.length&&ally.river.some(r=>MJ.base(r.t)===o.t))cost-=4;
 o.cost=cost}candidates.sort((a,b)=>a.cost-b.cost||a.k-b.k);return candidates[0].k}
const teamRender=render;
render=function(){teamRender();if(!G)return;$('#team-score').hidden=!G.teamMode;if(!G.teamMode)return;const totals=teamTotals();$('#team-score').textContent='あなた ＆ '+G.players[2].name+'  '+fmt(totals[0])+'点　／　相手チーム  '+fmt(totals[1])+'点';$('#match-label').textContent=(G.mode===4?'東風戦':'半荘戦')+' · チーム戦';for(let i=1;i<4;i++)$('#seat'+i).insertAdjacentHTML('beforeend','<span class="team-badge '+(i===2?'ally':'enemy')+'">'+(i===2?'仲間':'相手チーム')+'</span>')};
function teamResultMarkup(){const scores=teamTotals(),outcome=scores[0]===scores[1]?'引き分け':scores[0]>scores[1]?'あなたのチームの勝利！':'相手チームの勝利';return '<span class="badge">TEAM RESULT</span><h2>'+outcome+'</h2>'+[0,1].map(t=>'<div class="team-result"><strong>'+[t,t+2].map(i=>escapeText(G.players[i].name)).join(' ＆ ')+'</strong><b>'+fmt(scores[t])+' 点</b><small>'+[t,t+2].map(i=>escapeText(G.players[i].name)+' '+fmt(G.players[i].score)+'点').join(' ＋ ')+'</small></div>').join('')+'<p>2人の最終持ち点の合計で判定します。</p>'}
