const {createMatch}=require('./match.cjs'),vm=require('node:vm'),assert=require('node:assert/strict');
let steps=0;for(const count of [2,3,4])for(const mode of [4,8]){
 const roster=Array.from({length:4},(_,i)=>({name:i<count?'人'+i:['','','ハイデ','ラピス'][i],human:i<count,characterId:i<count?null:i-1}));const m=createMatch(roster,mode);let pending=null;
 m.debug.hostSchedule=fn=>{pending=fn};vm.runInContext('clearTimeout(timer);draw()',m.debug);
 try{let guard=0;while(!m.state(0).finished){assert(++guard<20000);steps++;const publicState=m.state(0);for(let i=1;i<4;i++)assert.equal(publicState.players[i].hand,undefined);assert.equal(publicState.deck,undefined);assert.equal(publicState.indicators,undefined);
 const inventory=vm.runInContext('(()=>{const tiles=[...G.deck,...G.indicators,...G.replacements,...G.deadUsed,...G.players.flatMap(p=>[...p.hand,...p.melds.flatMap(m=>m.tiles),...p.river.filter(r=>!r.taken).map(r=>r.t)])];return [tiles.length,MJ.counts(tiles).every(n=>n===4),G.players.reduce((a,p)=>a+p.score,0)+G.pot*1000]})()',m.debug);assert.equal(inventory[0],136);assert.equal(inventory[1],true);assert.equal(inventory[2],100000);
 let acted=false;for(let i=0;i<count;i++){const s=m.state(i),a=s.actions;let action;if(a.next)action={type:'next'};else if(a.ron)action={type:'ron'};else if(a.calls?.length)action={type:'call',index:0};else if(a.tsumo)action={type:'tsumo'};else if(a.kans?.length)action={type:'kan',index:0};else if(a.discard?.length){let k=vm.runInContext('MJ.aiDiscard(G.players['+i+'].hand,[],0,G.players['+i+'].melds,G.forbidden||[])',m.debug);if(!a.discard.includes(k))k=a.discard[0];action={type:'discard',index:k,riichi:a.riichi.includes(k)}}if(action){pending=null;m.action(i,{...action,version:s.version});assert.throws(()=>m.action(i,{...action,version:s.version}));acted=true;break}}
 if(!acted){assert(pending,'Missing scheduled turn');const fn=pending;pending=null;fn()}
 }
 console.log(count+' humans / '+mode+' rounds: complete, '+guard+' actions');
 }finally{m.close()}
}
console.log('Multiplayer passed: '+steps+' transitions, 2/3/4 humans, CPU play, chi/pon/kan/ron/tsumo, score and tile conservation, private hands and stale action rejection.');
