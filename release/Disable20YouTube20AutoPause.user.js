// ==UserScript==
// @name                Disable YouTube AutoPause
// @name:en             Disable YouTube AutoPause
// @namespace           http://tampermonkey.net/
// @version             2024.02.21.0
// @license             MIT License
// @author              CY Fung
// @match               https://www.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Disable20YouTube20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Disable20YouTube20AutoPause.meta.js
// ==/UserScript==
(function(y){function t(...a){Date.now()<n||(n=Date.now()+280,console.log(...a))}function p(a,b,c,d,f,l,e){Object.defineProperty(a,b,{enumerable:!0,configurable:!0,get(){q.resolve(new Date).then(f).catch(console.warn);return 2===c?`${d}`:d},set(g){const h=e.get(this);q.resolve([h,g,new Date]).then(l).catch(console.warn);e.set(this,g);return!0}})}function x(a,b,c){Object.defineProperty(a,b,{enumerable:!0,configurable:!0,get(){const d=this[c];1<=(d||0).length&&(d.length=0);return d},set(d){return!0}})}
function u(a){if(a&&!r.has(a)){var b=a.playbackPauseDelayMs,c=a.promptDelaySec,d=a.lactThresholdMs,f=Math.floor(.1*Number.MAX_SAFE_INTEGER),l=Math.floor(f/1E3);"playbackPauseDelayMs"in a&&0<=b&&b<4*f&&(r.set(a,b),b="string"===typeof b?2:+("number"===typeof b),1<=b&&p(a,"playbackPauseDelayMs",b,5*f,e=>{t("YouTube is trying to pause video...",e.toLocaleTimeString())},e=>{const [g,h,k]=e;console.log(`${"YouTube"} is trying to change value 'playbackPauseDelayMs' from ${g} to ${h} ...`,k.toLocaleTimeString())},
r),"number"!==typeof(a.showPausedActions||0).length||a.tvTyh||(a.tvTyh=[],x(a,"showPausedActions","tvTyh")));"promptDelaySec"in a&&0<=c&&c<4*l&&(v.set(a,c),c="string"===typeof c?2:+("number"===typeof c),1<=c&&p(a,"promptDelaySec",c,5*l,e=>{t("YouTube is trying to pause video...",e.toLocaleTimeString())},e=>{const [g,h,k]=e;console.log(`${"YouTube"} is trying to change value 'promptDelaySec' from ${g} to ${h} ...`,k.toLocaleTimeString())},v));"lactThresholdMs"in a&&0<=d&&d<4*f&&(w.set(a,d),d="string"===
typeof d?2:+("number"===typeof d),1<=d&&p(a,"lactThresholdMs",d,5*f,e=>{},e=>{const [g,h,k]=e;console.log(`${"YouTube"} is trying to change value 'lactThresholdMs' from ${g} to ${h} ...`,k.toLocaleTimeString())},w))}}function m(){1===arguments.length&&(n=Date.now()+3400);q.resolve(0).then(()=>{var a=null,b=document.querySelector("#page-manager")||0;b=b?b.polymerController||b.inst||b||0:b||0;try{a=b.data.playerResponse.messages}catch(d){}if(a&&0<a.length)for(var c of a)if((c||0).youThereRenderer){a=
null;try{a=c.youThereRenderer.configData.youThereData}catch(d){}a&&u(a);a=null;break}if(c=(a=document.querySelector("ytd-watch-flexy")||0)?a.polymerController||a.inst||a||0:a||0)(a=(c.youThereManager_||a.youThereManager_||0).youThereData_||0)&&u(a),a=c.youthereDataChanged_,"function"!==typeof a||a.lq2S7||(c.youthereDataChanged_=function(d){return function(){console.log("youthereDataChanged_()");const f=d.apply(this,arguments);m();return f}}(a),c.youthereDataChanged_.lq2S7=1)}).catch(console.warn)}
const q=(async()=>{})().constructor,r=new WeakMap,v=new WeakMap,w=new WeakMap;let n=0;document.addEventListener("yt-page-data-updated",m,!1);document.addEventListener("yt-navigate-finish",m,!1);document.addEventListener("spfdone",m,!1)})(Promise);
