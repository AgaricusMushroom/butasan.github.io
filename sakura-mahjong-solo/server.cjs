'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const root=path.join(__dirname,'dist');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.wav':'audio/wav','.txt':'text/plain; charset=utf-8'};
function createServer(){const rooms=require('./rooms.cjs').createRooms();const server=http.createServer(async(req,res)=>{
 if(await rooms.handle(req,res))return;
 const headers={'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache','Referrer-Policy':'same-origin'};
 const fail=(code,message)=>{res.writeHead(code,{...headers,'Content-Type':'text/plain; charset=utf-8'});res.end(message)};
 if(!['GET','HEAD'].includes(req.method)){res.setHeader('Allow','GET, HEAD');return fail(405,'Method not allowed')}
 let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{return fail(400,'Bad request')}
 if(url==='/' )url='/multiplayer.html';
 if(url.includes('\0')||url.includes('\\')||url.split('/').some(s=>s==='..'||s.startsWith('.'))||url.includes(':'))return fail(403,'Forbidden');
 const file=path.resolve(root,'.'+url);if(!file.startsWith(root+path.sep))return fail(403,'Forbidden');
 try{const real=await fs.promises.realpath(file);if(!real.startsWith(root+path.sep))return fail(403,'Forbidden');const stat=await fs.promises.stat(real);if(!stat.isFile())return fail(404,'Not found');
 let start=0,end=stat.size-1,status=200;const range=req.headers.range;
 if(range){const m=/^bytes=(\d+)-(\d*)$/.exec(range);if(!m)return fail(416,'Range not satisfiable');start=Number(m[1]);end=m[2]?Math.min(Number(m[2]),end):end;if(start>end||start>=stat.size){res.setHeader('Content-Range','bytes */'+stat.size);return fail(416,'Range not satisfiable')}status=206;headers['Content-Range']='bytes '+start+'-'+end+'/'+stat.size}
 res.writeHead(status,{...headers,'Content-Type':types[path.extname(real)]||'application/octet-stream','Accept-Ranges':'bytes','Content-Length':end-start+1});if(req.method==='HEAD')return res.end();fs.createReadStream(real,{start,end}).on('error',()=>res.destroy()).pipe(res);
 }catch(e){fail(e.code==='ENOENT'?404:500,e.code==='ENOENT'?'Not found':'Server error')}
});server.on('close',()=>rooms.close());return server}
if(require.main===module){const port=Number(process.env.PORT||8080),host=process.env.HOST||'0.0.0.0';const server=createServer();server.on('error',e=>{console.error(e.code==='EADDRINUSE'?'Port is in use. Set PORT to another number.':e.message);process.exitCode=1});server.listen(port,host,()=>{console.log('Sakura Mahjong — Multiplayer lobby');console.log('Local: http://localhost:'+port);if(host==='0.0.0.0')for(const list of Object.values(os.networkInterfaces()))for(const a of list||[])if(a.family==='IPv4'&&!a.internal)console.log('LAN: http://'+a.address+':'+port);console.log('Keep this window open. Ctrl+C stops the server.')});}
module.exports={createServer};
