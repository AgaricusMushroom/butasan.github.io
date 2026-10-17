const {createServer}=require('./server.cjs'),assert=require('node:assert/strict'),vm=require('node:vm');
(async()=>{const server=createServer();await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve)});const base='http://127.0.0.1:'+server.address().port;
try{let r=await fetch(base);assert.equal(r.status,200);const html=await r.text();assert(html.includes('対戦ロビー'));const paths=[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1]).filter(p=>!p.startsWith('http')&&p!=='/');let js='';for(const p of paths){r=await fetch(base+'/'+p);assert.equal(r.status,200,p);if(p.endsWith('.js')){assert(r.headers.get('content-type').includes('javascript'));js+=await r.text()+'\n'}}new vm.Script(js);
for(const key of ['heide','lapis','circe'])assert.equal((await fetch(base+'/assets/'+key+'-expressions.png',{method:'HEAD'})).status,200);
r=await fetch(base+'/assets/celtic-garden.wav',{headers:{Range:'bytes=0-43'}});assert.equal(r.status,206);assert.equal((await r.arrayBuffer()).byteLength,44);
assert.equal((await fetch(base+'/server.cjs')).status,404);assert.equal((await fetch(base+'/%2e%2e%5cserver.cjs')).status,403);assert.equal((await fetch(base+'/.openai/hosting.json')).status,403);assert.equal((await fetch(base,{method:'POST'})).status,405);
console.log('HTTP checks passed: page, all scripts/styles, portraits, WAV streaming, script syntax and file access boundaries.');
}finally{await new Promise(resolve=>server.close(resolve))}})().catch(e=>{console.error(e);process.exitCode=1});
