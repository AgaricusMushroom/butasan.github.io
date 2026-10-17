const crypto=require('node:crypto'),{createMatch}=require('./match.cjs');
const cpuNames=['','ハイデ','ラピス','キルケー'];
function createRooms(){const rooms=new Map();const cleanName=n=>String(n||'ゲスト').trim().slice(0,16)||'ゲスト';
const token=()=>crypto.randomBytes(24).toString('hex');const code=()=>crypto.randomBytes(3).toString('hex').toUpperCase();
function join(room,name){if(room.match)throw Error('このルームは対局中です');if(room.members.length>=4)throw Error('満員です');const member={token:token(),name:cleanName(name),seen:Date.now()};room.members.push(member);return member}
function view(room,member){return {code:room.code,mode:room.mode,host:room.members[0]===member,members:room.members.map((m,i)=>({name:m.name,host:i===0,connected:Date.now()-m.seen<15000})),match:room.match?.state(room.members.indexOf(member))||null}}
async function body(req){let text='';for await(const c of req){text+=c;if(text.length>4096)throw Error('リクエストが大きすぎます')}try{return JSON.parse(text||'{}')}catch{throw Error('送信内容が正しくありません')}}
return {rooms,close(){for(const r of rooms.values())r.match?.close();rooms.clear()},async handle(req,res){let url;try{url=new URL(req.url,'http://localhost')}catch{return false}if(!url.pathname.startsWith('/api/'))return false;
const reply=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data))};try{
 if(req.headers.origin&&new URL(req.headers.origin).host!==req.headers.host)throw Error('接続元が一致しません');
 for(const [id,r] of rooms)if(Date.now()-Math.max(...r.members.map(m=>m.seen))>2*60*60*1000){r.match?.close();rooms.delete(id)}
 if(req.method==='POST'&&url.pathname==='/api/create'){if(rooms.size>=100)throw Error('ルーム数の上限です');const b=await body(req);let id;do{id=code()}while(rooms.has(id));const r={code:id,mode:b.mode===8?8:4,members:[],match:null};const m=join(r,b.name);rooms.set(id,r);reply(200,{token:m.token,...view(r,m)});return true}
 const b=req.method==='POST'?await body(req):{};const id=String(b.code||url.searchParams.get('code')||'').toUpperCase(),r=rooms.get(id);if(!r)throw Error('ルームが見つかりません');
 if(req.method==='POST'&&url.pathname==='/api/join'){const m=join(r,b.name);reply(200,{token:m.token,...view(r,m)});return true}
 const auth=(req.headers.authorization||'').replace(/^Bearer /,'');const m=r.members.find(m=>m.token===auth);if(!m)throw Error('参加情報がありません。ルームへ入り直してください');m.seen=Date.now();
 if(req.method==='GET'&&url.pathname==='/api/state'){reply(200,view(r,m));return true}
 if(req.method==='POST'&&url.pathname==='/api/start'){if(m!==r.members[0])throw Error('ルーム作成者のみ開始できます');if(r.match)throw Error('開始済みです');if(r.members.length<2)throw Error('2人以上参加すると開始できます');const ids=[1,2,3];for(let n=2;n>0;n--){const k=crypto.randomInt(n+1);[ids[n],ids[k]]=[ids[k],ids[n]]}const roster=r.members.map(m=>({name:m.name,human:true,characterId:null}));while(roster.length<4){const characterId=ids.pop();roster.push({name:cpuNames[characterId],human:false,characterId})}r.match=createMatch(roster,r.mode);reply(200,view(r,m));return true}
 if(req.method==='POST'&&url.pathname==='/api/action'){if(!r.match)throw Error('対局が始まっていません');r.match.action(r.members.indexOf(m),b);reply(200,view(r,m));return true}
 if(req.method==='POST'&&url.pathname==='/api/leave'){if(r.match)throw Error('対局中は再接続用に席を保持します。ページを閉じると操作は45秒後に自動処理されます');r.members=r.members.filter(x=>x!==m);if(!r.members.length)rooms.delete(id);reply(200,{left:true});return true}
 reply(404,{error:'APIが見つかりません'});
 }catch(e){reply(400,{error:e.message})}return true}}}
module.exports={createRooms};
