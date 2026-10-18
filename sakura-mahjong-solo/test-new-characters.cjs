const {createMatch}=require('./match.cjs'),vm=require('vm'),fs=require('fs'),assert=require('assert/strict');
const m=createMatch([{human:true,name:'You',characterId:0},...[4,5,1].map(characterId=>({human:false,name:'CPU',characterId}))],4),c=m.debug;
const run=s=>vm.runInContext(s,c);
try{
run(`clearTimeout(timer);tile=()=>'';render=()=>{};const q=document.querySelector;document.querySelector=s=>{const e=q(s);e.insertAdjacentHTML=()=>{};return e};`);
vm.runInContext(fs.readFileSync(__dirname+'/dist/abilities.js','utf8'),c);
vm.runInContext(fs.readFileSync(__dirname+'/dist/new-characters.js','utf8'),c);
run(`G.abilitiesEnabled=true;G.players.forEach(p=>{p.melds=[];p.river=[];p.riichi=false});G.turn=1;G.players[1].hand=[0,1,2,9,10,11,18,19,20,31,31,31,27];G.deck=[27,3,4,5];G.players[1].nyxFirstDraw=true;`);
assert.equal(run(`nyxDraw(G.deck);G.deck.at(-1)`),27);assert.equal(run('G.players[1].nyxFirstDraw'),false);
assert.deepEqual(Array.from(run('G.deck.slice().sort((a,b)=>a-b)')),[3,4,5,27]);
run(`G.deck=[3,4,5];G.players[1].nyxFirstDraw=true;nyxDraw(G.deck)`);assert.deepEqual(Array.from(run('G.deck')),[3,4,5]);
run(`G.turn=2;G.dealer=2;G.players[2].riichi=true;G.players[2].hand=[0,1,2,9,10,11,18,19,20,31,31,31,27,27];G.deck=[30,15];G.indicators[1]=16;G.uras=[16];G.ura=16;G.rinshan=false;G.pendingKan=null;G.afterCall=false`);
assert.equal(run(`(()=>{const r=evaluate(2,true,27);const n=feliciaUra(2,2,27,r);return n.han>r.han})()`),true);
assert.equal(run('G.indicators[1]'),30);assert.equal(run('G.uras[0]'),30);assert.equal(run('G.deck[0]'),16);
run('selectedCast=[1,4,5]');assert.deepEqual(Array.from(run('shuffledCast().slice(1).sort()')),[1,4,5]);
assert.equal(run('aiCall(1,0,31)'),null);
console.log('New characters passed: selection, Nyx first draw/no tile, Felicia ura scoring and physical tile swaps, closed-hand AI.');
}finally{m.close()}
