// ==UserScript==
// @name                Unhold YouTube Resource Locks
// @name:en             Unhold YouTube Resource Locks
// @namespace           http://tampermonkey.net/
// @version             2024.03.27.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match               https://m.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-unlock-indexedDB.png
// @supportURL          https://github.com/cyfung1031/userscript-supports

// @compatible          edge
// @compatible          chrome
// @compatible          firefox
// @compatible          opera

// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Unhold20YouTube20Resource20Locks.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Unhold20YouTube20Resource20Locks.meta.js
// ==/UserScript==
(function(y){const u=(async()=>{})().constructor,n=[];let g=0;const p=new Set,z="function"===typeof WeakRef?e=>e?new WeakRef(e):null:e=>e||null,A=e=>e&&e.deref?e.deref():e;(function(e,B){try{var f=(new Function("return [window];"))()[0]}catch(k){}f=f||y;"function"===typeof(((f||0).navigator||0).locks||0).request&&(f.navigator.locks.query=function(){e.log(arguments);return new u(k=>{})},f.navigator.locks.request=function(){e.log(arguments);return new u(k=>{})});const v="IDBFactory"===(((f||0).indexedDB||
0).constructor||0).name;if(v){const k=Symbol(),r=Symbol(),w=Symbol(),t=new WeakMap;let l=0;const h=[];let m=0;async function x(){if(g){g=0;for(var c of[...p.values()])try{let a=c.result,b=a.name;a.close();a=null;l--;h.push({databaseId:b,action:"close",time:Date.now()})}catch(a){}p.clear();for(const a of n){let [b,d]=a;a.length=0;c=A(b);b=null;c.close();c=null;l--;h.push({databaseId:d,action:"close",time:Date.now()})}n.length=0;0===l&&0<h.length&&(0<m&&(clearTimeout(m),m=0),m=setTimeout(()=>{m=0;if(0===
l&&0<h.length){let a=[...h];h.length=0;a.sort((b,d)=>b.databaseId.localeCompare(d.databaseId)||b.time-d.time);B.dir(a)}},300))}}function C(c,a,b){return function(d){c.call(this,arguments);var q=(d||0).target;if(p.delete(q)){q=q.result;var D=d.type;0<g&&clearTimeout(g);n.push([z(q),a,b,D]);g=setTimeout(x,18E3);e.log("releaseOnIdle",n.length,a)}}}function E(c){return function(a,b){if(2===arguments.length&&"error"===a||"success"===a){let d=t.get(b);d||(d=C(b,c,a),t.set(b,d));return this[k](a,d)}return this[k](...arguments)}}
function F(c){return function(a,b){if(2===arguments.length&&"error"===a||"success"===a){const d=t.get(b);return this[r](a,d||b)}return this[r](...arguments)}}f.indexedDB.constructor.prototype[w]=f.indexedDB.constructor.prototype.open;f.indexedDB.constructor.prototype.open=function(){return function(c){const a=this[w](c);a[k]=a.addEventListener;a.addEventListener=E(c);a[r]=a.removeEventListener;a.removeEventListener=F(c);l++;p.add(a);0<g&&clearTimeout(g);g=setTimeout(x,18E3);h.push({databaseId:c,action:"open",
time:Date.now()});return a}}()}return v})(Object.assign({},console,{log:function(){}}),console)})(this instanceof Window?this:self instanceof Window?self:window);
