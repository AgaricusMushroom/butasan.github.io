const {createMatch}=require('./match.cjs'),vm=require('node:vm'),assert=require('node:assert/strict');
const m=createMatch([{human:true,name:'You',characterId:0},...[1,2,3].map(characterId=>({human:false,name:'CPU',characterId}))],4);
try{vm.runInContext(`clearTimeout(timer);G.players.forEach((p,i)=>{p.characterId=i;p.melds=[];p.river=[];p.riichi=false});G.abilitiesEnabled=true;G.forbidden=[];G.afterCall=false;`,m.debug);
const run=s=>vm.runInContext(s,m.debug);
assert.equal(run('aiRiichi(1,[0,1,2,9,10,11,18,19,20,31,31,31,27])'),false,'yakuhai stays dama');
assert.equal(run('aiRiichi(1,[0,1,2,12,13,14,24,25,26,3,5,28,28])'),true,'no yaku riichi');
run('G.players[1].hand=[0,0,0,0,2,4,6,9,11,13,18,20,22,27]');
assert.equal(run('aiKanAllowed(1,{kind:"ankan",t:0,tiles:[0,0,0,0]})'),false,'wait for tenpai');
run('G.players[1].hand=[0,0,0,0,9,10,11,18,19,20,31,31,31,27]');
assert.equal(run('aiKanAllowed(1,{kind:"ankan",t:0,tiles:[0,0,0,0]})'),true,'tenpai kan');
run('G.players[3].aiCirceAwakened=true');assert.equal(run('aiCall(3,2,0)'),null,'preserve suuankou closed hand');
run('G.players[1].hand=[0,1,2,9,10,11,18,19,20,31,31,31,27,28];G.players[2].riichi=true;G.players[2].river=[{t:28}]');
assert.equal(run('MJ.base(G.players[1].hand[aiDiscardChoice(1)])'),28,'Heide chooses safe honor');
console.log('Character AI checks passed: dama, riichi, ability kan timing, closed suuankou and defensive discard.');
}finally{m.close()}

