// ==UserScript==
// @name         Twitter image viewing enhancement
// @icon         https://twitter.com/favicon.ico
// @namespace    https://moe.best/
// @version      1.4.0
// @author       Jindai Kirin
// @include      https://x.com/*
// @include      https://twitter.com/*
// @license      MIT
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Twitter20image20viewing20enhancement.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Twitter20image20viewing20enhancement.meta.js
// ==/UserScript==
(()=>{let g=GM_getValue("enableDragToSwitch",!1);GM_registerMenuCommand("Drag to switch images",()=>{g=confirm(`Do you want to enable drag to switch images?
Current: ${g?"Enabled":"Disabled"}

Please refresh to take effect after modification.`);GM_setValue("enableDragToSwitch",g)});g&&GM_addStyle("img{-webkit-user-drag:none}");const e={},l=a=>{a=(a||"").split(",");3===a.length&&(e.close=a[0],e.prev=a[1],e.next=a[2])};l(GM_getValue("labels_v1",""));GM_registerMenuCommand("Set aria-label",()=>{let a=!1;do{var c=GM_getValue("labels_v1","");var b=prompt(`Please input the aria-label of Close, Previous, Next button and join them by commas(,). Submit an empty string will disable it.${a?"\n\nINPUT ERROR":
""}`,b||c);if(null===b)return;b=b.trim();if(0===b.length){GM_setValue("labels_v1","");return}c=b.split(",").map(d=>d.trim());a=3!==c.length}while(a);b=c.join(",");l(b);GM_setValue("labels_v1",b)});if(!Object.values(e).length)try{const a={af8fa2ad:"close",af8fa2ae:"close",c4d53ba2:"prev",d70740d9:"next",d70740da:"next"},c=webpackChunk_twitter_responsive_web.find(([[b]])=>b.startsWith("i18n"));Object.values(c[1]).forEach(b=>{if(!(3>b.length))try{b(void 0,void 0,()=>({_register:()=>(d,h)=>{d in a&&(e[a[d]]=
h)}}))}catch(d){}})}catch(a){console.error(a)}const f=a=>(a=document.querySelector(`[aria-label="${e[a]}"]`))?(a.click(),!0):!1,k=a=>"IMG"==a.tagName&&a.baseURI.includes("/photo/");window.addEventListener("wheel",({deltaY:a,target:c})=>{if(k(c)||"swipe-to-dismiss"===c.dataset.testid)0>a?f("prev"):0<a&&f("next")},{passive:!0});if(g){let a=0,c=0;window.addEventListener("mousedown",({clientX:b,clientY:d})=>{a=b;c=d});window.addEventListener("mouseup",({button:b,clientX:d,clientY:h,target:p})=>{if(0===
b&&k(p)){var [m,n]=[d-a,h-c].map(Math.abs);b=d-a;10>=m&&10>=n&&f("close");n<=m&&(0<b?f("prev"):0>b&&f("next"))}},{passive:!0})}else document.addEventListener("click",a=>{k(a.target)&&(f("close"),a.stopPropagation())},{capture:!0,passive:!0})})();
