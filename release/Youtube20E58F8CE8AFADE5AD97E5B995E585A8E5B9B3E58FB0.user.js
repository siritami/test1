// ==UserScript==
// @name                Youtube dual subtitle
// @version             2.1
// @author              Coink & jk278
// @namespace           https://github.com/jk278/youtube-dual-subtitle
// @match               *://www.youtube.com/*
// @match               *://m.youtube.com/*
// @require             https://unpkg.com/ajax-hook@latest/dist/ajaxhook.min.js
// @grant               none
// @run-at              document-start
// @icon                https://www.youtube.com/s/desktop/b9bfb983/img/favicon_32x32.png
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20E58F8CE8AFADE5AD97E5B995E585A8E5B9B3E58FB0.meta.js
// ==/UserScript==
(function(){function n(){ah.proxy({onRequest:(f,l)=>{l.next(f)},onResponse:(f,l)=>{if(f.config.url.includes("/api/timedtext")&&!f.config.url.includes("&translate_h00ked")){var b=new XMLHttpRequest,c=f.config.url.replace(/(^|[&?])tlang=[^&]*/g,"");c=`${c}&tlang=${p}&translate_h00ked`;b.open("GET",c,!1);b.send();c=null;if(f.response){var d=JSON.parse(f.response);d.events&&(c=d)}b=JSON.parse(b.response);d=!0;for(var h of c.events)if(h.segs&&1<h.segs.length){d=!1;break}if(d)for(let e=0,m=c.events.length;e<
m;e++){var a=c.events[e];if(a.segs){var k=b.events[e];`${a.segs[0].utf8}`.trim()!==`${k.segs[0].utf8}`.trim()&&(a.segs[0].utf8+="\n"+k.segs[0].utf8)}}else{h=b.events.filter(e=>1!==e.aAppend&&e.segs);for(a of c.events){if(!a.segs)continue;let e=a.tStartMs,m=e+a.dDurationMs;d=h.filter(g=>e<=g.tStartMs&&g.tStartMs<m);b="";for(k of d){for(const g of k.segs)b+=g.utf8;b+="\ufeff"}d="";for(const g of a.segs)d+=g.utf8;a.segs[0].utf8=d+"\n"+b;a.segs=[a.segs[0]]}}f.response=JSON.stringify(c)}l.resolve(f)}})}
const p=navigator.language.split("-")[0]||"en";"complete"===document.readyState?n():window.addEventListener("load",n)})();
