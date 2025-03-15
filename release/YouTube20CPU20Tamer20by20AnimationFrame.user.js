// ==UserScript==
// @name                YouTube CPU Tamer by AnimationFrame
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


// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20CPU20Tamer20by20AnimationFrame.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20CPU20Tamer20by20AnimationFrame.meta.js
// ==/UserScript==
(E=>{const m=this instanceof Window?this:window;if(m.nzsxclvflluv)throw Error("Duplicated Userscript Calling");m.nzsxclvflluv=!0;const v=(async()=>{})().constructor,z=((d,g)=>{const n=(c,l)=>{d=c;g=l};return class extends v{constructor(c=n){super(c);c===n&&(this.resolve=d,this.reject=g)}}})();if(!(()=>{try{const d=document.createElement("canvas");return!(!d.getContext("webgl")&&!d.getContext("experimental-webgl"))}catch(d){return!1}})())throw Error("Your browser does not support GPU Acceleration. YouTube CPU Tamer by AnimationFrame is skipped.");
const B=(()=>{window.__j6YiAc__=1;document.addEventListener("timeupdate",()=>{window.__j6YiAc__=Date.now()},!0);let d=-1;try{d=top.__j6YiAc__}catch(g){}return 1<=d?()=>top.__j6YiAc__:()=>window.__j6YiAc__})();(async d=>{var g=requestAnimationFrame;try{let n=16,c=document.getElementById("vanillajs-iframe-v1"),l=null;if(!c){c=document.createElement("iframe");c.id="vanillajs-iframe-v1";const p="function"===typeof webkitCancelAnimationFrame&&"undefined"===typeof kagi?c.src=URL.createObjectURL(new Blob([],
{type:"text/html"})):null;c.sandbox="allow-same-origin";let t=document.createElement("noscript");for(t.appendChild(c);!document.documentElement&&0<n--;)await new v(g);document.documentElement.appendChild(t);p&&v.resolve().then(()=>URL.revokeObjectURL(p));l=q=>{const f=e=>{e&&d.removeEventListener("DOMContentLoaded",f,!1);e=t;t=d=l=0;q?q(()=>e.remove(),200):e.remove()};q&&"loading"===document.readyState?d.addEventListener("DOMContentLoaded",f,!1):f()}}for(;!c.contentWindow&&0<n--;)await new v(g);const w=
c.contentWindow;if(!w)throw"window is not found.";try{const {requestAnimationFrame:p,setInterval:t,setTimeout:q,clearInterval:f,clearTimeout:e}=w;g={requestAnimationFrame:p,setInterval:t,setTimeout:q,clearInterval:f,clearTimeout:e};for(let k in g)g[k]=g[k].bind(d);l&&v.resolve(g.setTimeout).then(l);return g}catch(p){return l&&l(),null}}catch(n){return console.warn(n),null}})(m).then(d=>{if(!d)return null;const {requestAnimationFrame:g,setTimeout:n,setInterval:c,clearTimeout:l,clearInterval:w}=d;let p=
null;const t=(()=>{const f=document.createElement("a-f");if(!("onanimationiteration"in f))return k=>g(p=k);f.id="a-f";let e=null;f.onanimationiteration=function(){null!==e&&(e=(e(),null))};if(!document.getElementById("afscript")){const k=document.createElement("style");k.id="afscript";k.textContent="\n          @keyFrames aF1 {\n            0% {\n              order: 0;\n            }\n            100% {\n              order: 1;\n            }\n          }\n          #a-f[id] {\n            visibility: collapse !important;\n            position: fixed !important;\n            display: block !important;\n            top: -100px !important;\n            left: -100px !important;\n            margin:0 !important;\n            padding:0 !important;\n            outline:0 !important;\n            border:0 !important;\n            z-index:-1 !important;\n            width: 0px !important;\n            height: 0px !important;\n            contain: strict !important;\n            pointer-events: none !important;\n            animation: 1ms steps(2, jump-none) 0ms infinite alternate forwards running aF1 !important;\n          }\n        ";
(document.head||document.documentElement).appendChild(k)}document.documentElement.insertBefore(f,document.documentElement.firstChild);return k=>e=p=k})();(()=>{let f,e;f=e={resolved:!0};let k=0;const A=async b=>{await new v(t);b.resolved=!0;const a=k=(k&1073741823)+1;return b.resolve(a),a},C=async()=>{var b=f.resolved?null:f,a=e.resolved?null:e;let h=0;if(b&&a)b=await b,a=await a,h=0===(b-a&536870912)?b:a;else{const r=b?null:f=new z,u=a?null:e=new z;a?await a:b&&await b;r&&(h=await A(r));u&&(h=await A(u))}return h},
y=new Set,D=async(b,a)=>{try{const h=Date.now();if(800>h-B()&&800>h-a.dt){const r=a.cid;y.add(r);const u=await C();if(!y.delete(r)||u===a.lastExecution)return;a.lastExecution=u}a.dt=h;b()}catch(h){throw console.error(h),h;}};var x=b=>(a,h=0,...r)=>{if("function"===typeof a){const u={dt:Date.now()};return u.cid=b(D,h,0<r.length?a.bind(null,...r):a,u)}return b(a,h,...r)};m.setTimeout=x(n);m.setInterval=x(c);x=b=>a=>{a&&(y.delete(a)||b(a))};m.clearTimeout=x(l);m.clearInterval=x(w);try{m.setTimeout.toString=
n.toString.bind(n),m.setInterval.toString=c.toString.bind(c),m.clearTimeout.toString=l.toString.bind(l),m.clearInterval.toString=w.toString.bind(w)}catch(b){console.warn(b)}})();let q=null;c(()=>{q===p?null!==q&&(p=q=(q(),null)):q=p},125)})})(null);
