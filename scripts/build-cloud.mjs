import {readFileSync,writeFileSync,readdirSync,mkdirSync,rmSync} from 'node:fs';
import path from 'node:path';
const files={};function walk(dir){for(const d of readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,d.name);if(d.isDirectory())walk(p);else files['/'+path.relative('web',p).split(path.sep).join('/')]={body:readFileSync(p).toString('base64'),type:p.endsWith('.html')?'text/html; charset=utf-8':p.endsWith('.js')?'text/javascript; charset=utf-8':p.endsWith('.css')?'text/css; charset=utf-8':p.endsWith('.json')?'application/json; charset=utf-8':p.endsWith('.jpg')?'image/jpeg':'application/octet-stream'};}}walk('web');
rmSync('dist',{recursive:true,force:true});mkdirSync('dist/server',{recursive:true});mkdirSync('dist/.openai',{recursive:true});
writeFileSync('dist/server/index.js','const assets='+JSON.stringify(files)+';\n'+readFileSync('worker/index.js','utf8'));
writeFileSync('dist/.openai/hosting.json',readFileSync('.openai/hosting.json'));
