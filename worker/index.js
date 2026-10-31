const githubOrigin='https://ting11236.github.io';
const builtinId='maybe-you-should-talk';
function json(data,status=200,origin=null){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...(origin===githubOrigin?{'access-control-allow-origin':githubOrigin,'vary':'Origin'}:{})}});}
function owner(request,env){return Boolean(env.OWNER_EMAIL&&request.headers.get('oai-authenticated-user-id')&&request.headers.get('oai-authenticated-user-email')?.toLowerCase()===env.OWNER_EMAIL.toLowerCase());}
function year(value){return value===null||Number.isInteger(value)&&value>=1900&&value<=9999;}
function validUrl(value){if(!value)return '';try{const u=new URL(value);if(['https:','http:'].includes(u.protocol)&&u.href.length<=2000)return u.href;}catch{}return null;}
export default {
 async fetch(request,env){
  const url=new URL(request.url),origin=request.headers.get('origin');
  if(url.pathname.startsWith('/api/')){
   try{
    if(request.method==='OPTIONS')return json({error:'Cross-origin writes are not allowed'},403,origin);
    if(url.pathname==='/api/session'&&request.method==='GET')return json({canEdit:owner(request,env)},200,origin);
    if(url.pathname==='/api/library'&&request.method==='GET'){
     const result=await env.DB.prepare('SELECT id, data FROM library_books ORDER BY created_at, id').all();
     const rows=result.results.map(row=>JSON.parse(row.data));return json({books:rows.filter(row=>row.id!=='__shelf_order'),order:rows.find(row=>row.id==='__shelf_order')?.order||[]},200,origin);
    }
    if(!owner(request,env))return json({error:'請先以書房擁有者帳號登入'},403);
    if(origin!==url.origin||!request.headers.get('content-type')?.startsWith('application/json'))return json({error:'Invalid request origin or content type'},403);
    if(Number(request.headers.get('content-length')||0)>12000)return json({error:'Request too large'},413);
    const raw=await request.text();if(raw.length>12000)return json({error:'Request too large'},413);
    let body;try{body=JSON.parse(raw);}catch{return json({error:'Invalid JSON'},400);}
    if(!body||typeof body!=='object'||Array.isArray(body))return json({error:'Invalid data'},400);
    if(url.pathname==='/api/order'&&request.method==='PUT'){
     if(!Array.isArray(body.order)||body.order.length>1000||body.order.some(id=>typeof id!=='string'||!/^[a-zA-Z0-9-]{1,80}$/.test(id))||new Set(body.order).size!==body.order.length)return json({error:'排列資料不正確'},400);
     const rows=await env.DB.prepare('SELECT id FROM library_books').all();const known=new Set([builtinId,...rows.results.map(row=>row.id)]);if(body.order.some(id=>!known.has(id)))return json({error:'排列包含未知的書籍'},400);
     await env.DB.prepare('INSERT INTO library_books (id,data,created_at) VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data').bind('__shelf_order',JSON.stringify({id:'__shelf_order',order:body.order}),new Date().toISOString()).run();return json({order:body.order});
    }
    if(url.pathname==='/api/books'&&request.method==='POST'){
     if(typeof body.title!=='string'||!body.title.trim()||body.title.length>100||typeof body.author!=='string'||body.author.length>100||!year(body.readYear))return json({error:'書名、作者或閱讀年份不正確'},400);
     const cover=validUrl(body.cover);if(cover===null)return json({error:'封面網址不正確'},400);
     const count=await env.DB.prepare('SELECT count(*) AS count FROM library_books').first();if(count.count>=1000)return json({error:'書房已達藏書上限'},409);
     const data={id:crypto.randomUUID(),title:body.title.trim(),author:body.author.trim(),cover,readYear:body.readYear,accent:['#b78d70','#90a7a4','#a596b3','#c3aa76'][count.count%4],featured:false};
     await env.DB.prepare('INSERT INTO library_books (id,data,created_at) VALUES (?,?,?)').bind(data.id,JSON.stringify(data),new Date().toISOString()).run();
     return json({book:data},201);
    }
    const match=url.pathname.match(/^\/api\/books\/([a-zA-Z0-9-]{1,80})\/year$/);
    if(match&&request.method==='PUT'){
     if(!year(body.readYear))return json({error:'閱讀年份不正確'},400);
     const id=match[1],row=await env.DB.prepare('SELECT data FROM library_books WHERE id = ?').bind(id).first();
     if(!row&&id!==builtinId)return json({error:'找不到這本書'},404);
     if(row)await env.DB.prepare("UPDATE library_books SET data = json_set(data, '$.readYear', ?) WHERE id = ?").bind(body.readYear,id).run();
     else await env.DB.prepare('INSERT INTO library_books (id,data,created_at) VALUES (?,?,?)').bind(id,JSON.stringify({id,readYear:body.readYear}),new Date().toISOString()).run();
     return json({id,readYear:body.readYear});
    }
    return json({error:'Not found'},404);
   }catch{return json({error:'雲端資料暫時無法使用，請稍後再試。'},503,origin);}
  }
  const name=url.pathname==='/'?'/index.html':url.pathname;
  const asset=assets[name];if(!asset)return new Response('Not found',{status:404});
  const bytes=Uint8Array.from(atob(asset.body),x=>x.charCodeAt(0));
  return new Response(bytes,{headers:{'content-type':asset.type,'cache-control':'no-cache','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'}});
 }
};
