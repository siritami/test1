// ==UserScript==
// @name                YouTube CPU Tamer by DOMMutation
// @namespace           http://tampermonkey.net/
// @version             2025.02.24.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @match               https://www.youtube.com/live_chat*
// @match               https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-cpu-tamper-by-animationframe.webp
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page


// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20CPU20Tamer20by20DOMMutation.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20CPU20Tamer20by20DOMMutation.meta.js
// ==/UserScript==
(D=>{const p=this instanceof Window?this:window;if(p.nzsxclvflluv)throw Error("Duplicated Userscript Calling");p.nzsxclvflluv=!0;const v=(async()=>{})().constructor,y=((h,d)=>{const g=(b,l)=>{h=b;d=l};return class extends v{constructor(b=g){super(b);b===g&&(this.resolve=h,this.reject=d)}}})(),{_setAttribute:z,_insertBefore:A,_hasAttribute:B}=(()=>{let h=Element.prototype.setAttribute;try{h=ShadyDOM.nativeMethods.setAttribute||h}catch(b){}let d=Element.prototype.hasAttribute;try{d=ShadyDOM.nativeMethods.hasAttribute||
d}catch(b){}let g=Node.prototype.insertBefore;try{g=ShadyDOM.nativeMethods.insertBefore||g}catch(b){}return{_setAttribute:h,_insertBefore:g,_hasAttribute:d}})();(async h=>{var d=requestAnimationFrame;try{let g=16,b=document.getElementById("vanillajs-iframe-v1"),l=null;if(!b){b=document.createElement("iframe");b.id="vanillajs-iframe-v1";const e="function"===typeof webkitCancelAnimationFrame&&"undefined"===typeof kagi?b.src=URL.createObjectURL(new Blob([],{type:"text/html"})):null;b.sandbox="allow-same-origin";
let f=document.createElement("noscript");for(f.appendChild(b);!document.documentElement&&0<g--;)await new v(d);document.documentElement.appendChild(f);e&&v.resolve().then(()=>URL.revokeObjectURL(e));l=m=>{const q=n=>{n&&h.removeEventListener("DOMContentLoaded",q,!1);n=f;f=h=l=0;m?m(()=>n.remove(),200):n.remove()};m&&"loading"===document.readyState?h.addEventListener("DOMContentLoaded",q,!1):q()}}for(;!b.contentWindow&&0<g--;)await new v(d);const x=b.contentWindow;if(!x)throw"window is not found.";
try{const {requestAnimationFrame:e,setInterval:f,setTimeout:m,clearInterval:q,clearTimeout:n}=x;d={requestAnimationFrame:e,setInterval:f,setTimeout:m,clearInterval:q,clearTimeout:n};for(let r in d)d[r]=d[r].bind(h);l&&v.resolve(d.setTimeout).then(l);return d}catch(e){return l&&l(),null}}catch(g){return console.warn(g),null}})(p).then(h=>{if(!h)return null;const {setTimeout:d,setInterval:g,clearTimeout:b,clearInterval:l}=h,x=(()=>{var e=document.getElementById("d-m");e||(e=document.createElementNS("http://www.w3.org/2000/svg",
"defs"),e.id="d-m",A.call(document.documentElement,e,document.documentElement.firstChild));const f=e;f._setAttribute=z;f._hasAttribute=B;let m=0;for(;f._hasAttribute(e=`dm-${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`););const q=e;let n=null;(new MutationObserver(()=>{const r=n;null!==r&&(n=null,8<m&&(m=0),r.resolve())})).observe(document,{childList:!0,subtree:!0,attributes:!0});return()=>n||=(f._setAttribute(q,++m),new y)})();(()=>{let e,f;e=f={resolved:!0};let m=0;const q=
async c=>{await x();c.resolved=!0;const a=m=(m&1073741823)+1;return c.resolve(a),a},n=async()=>{var c=e.resolved?null:e,a=f.resolved?null:f;let k=0;if(c&&a)c=await c,a=await a,k=0===(c-a&536870912)?c:a;else{const t=c?null:e=new y,u=a?null:f=new y;a?await a:c&&await c;t&&(k=await q(t));u&&(k=await q(u))}return k},r=new Set,C=async(c,a)=>{try{const k=Date.now();if(800>k-a.dt){const t=a.cid;r.add(t);const u=await n();if(!r.delete(t)||u===a.lastExecution)return;a.lastExecution=u}a.dt=k;c()}catch(k){throw console.error(k),
k;}};var w=c=>(a,k=0,...t)=>{if("function"===typeof a){const u={dt:Date.now()};return u.cid=c(C,k,0<t.length?a.bind(null,...t):a,u)}return c(a,k,...t)};p.setTimeout=w(d);p.setInterval=w(g);w=c=>a=>{a&&(r.delete(a)||c(a))};p.clearTimeout=w(b);p.clearInterval=w(l);try{p.setTimeout.toString=d.toString.bind(d),p.setInterval.toString=g.toString.bind(g),p.clearTimeout.toString=b.toString.bind(b),p.clearInterval.toString=l.toString.bind(l)}catch(c){console.warn(c)}})()})})(null);
