// ==UserScript==
// @name                Disable YouTube Music AutoPause
// @name:en             Disable YouTube Music AutoPause
// @namespace           http://tampermonkey.net/
// @version             2023.12.01.0
// @license             MIT License
// @author              CY Fung
// @match               https://music.youtube.com/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/disable-youtube-autopause.svg
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @grant               none
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Disable20YouTube20Music20AutoPause.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Disable20YouTube20Music20AutoPause.meta.js
// ==/UserScript==
(function(E){function x(...a){Date.now()<q||(q=Date.now()+280,console.log(...a))}function r(a,b,c,d,g,n,e){Object.defineProperty(a,b,{enumerable:!0,configurable:!0,get(){l.resolve(new Date).then(g).catch(console.warn);return 2===c?`${d}`:d},set(f){let h=e.get(this);l.resolve([h,f,new Date]).then(n).catch(console.warn);e.set(this,f);return!0}})}function B(a,b,c){Object.defineProperty(a,b,{enumerable:!0,configurable:!0,get(){const d=this[c];1<=(d||0).length&&(d.length=0);return d},set(d){return!0}})}
function C(a){if(a&&!t.has(a)){var b=a.playbackPauseDelayMs,c=a.promptDelaySec,d=a.lactThresholdMs,g=Math.floor(.1*Number.MAX_SAFE_INTEGER),n=Math.floor(g/1E3);"playbackPauseDelayMs"in a&&0<=b&&b<4*g&&(t.set(a,b),b="string"===typeof b?2:+("number"===typeof b),1<=b&&r(a,"playbackPauseDelayMs",b,5*g,e=>{x("YouTube Music is trying to pause video...",e.toLocaleTimeString())},e=>{const [f,h,m]=e;console.log(`${"YouTube Music"} is trying to change value 'playbackPauseDelayMs' from ${f} to ${h} ...`,m.toLocaleTimeString())},
t),"number"!==typeof(a.showPausedActions||0).length||a.tvTyh||(a.tvTyh=[],B(a,"showPausedActions","tvTyh")));"promptDelaySec"in a&&0<=c&&c<4*n&&(y.set(a,c),c="string"===typeof c?2:+("number"===typeof c),1<=c&&r(a,"promptDelaySec",c,5*n,e=>{x("YouTube Music is trying to pause video...",e.toLocaleTimeString())},e=>{const [f,h,m]=e;console.log(`${"YouTube Music"} is trying to change value 'promptDelaySec' from ${f} to ${h} ...`,m.toLocaleTimeString())},y));"lactThresholdMs"in a&&0<=d&&d<4*g&&(z.set(a,
d),d="string"===typeof d?2:+("number"===typeof d),1<=d&&r(a,"lactThresholdMs",d,5*g,e=>{},e=>{const [f,h,m]=e;console.log(`${"YouTube Music"} is trying to change value 'lactThresholdMs' from ${f} to ${h} ...`,m.toLocaleTimeString())},z))}}function A(a){if(1==a||3==a){1E9<p&&(p=9);let b=p;requestAnimationFrame(()=>{b===p&&u()})}}function u(){var a=null;const b=document.querySelector("#player")||0;try{a=((b?b.polymerController||b.inst||b||0:b||0).__data||b.__data||0).playerResponse_.messages}catch(c){}if(a&&
0<a.length)for(const c of a)if(c.youThereRenderer){a=null;try{a=c.youThereRenderer.configData.youThereData}catch(d){}a&&C(a);break}}function v(){u();var a=document.querySelector("#player")||0;a=(a?a.polymerController||a.inst||a||0:a||0).playerApi_||a.playerApi_||(a?a.polymerController||a.inst||a||0:a||0).playerApi||a.playerApi||0;"object"===typeof a&&("undefined"===typeof a[w]&&"function"===typeof a.getPlayerState&&(a[w]=a.getPlayerState,a.getPlayerState=function(){let b=this[w](...arguments);if(1==
b||3==b)try{u()}catch(c){}return b}),"removeEventListener"in a&&"addEventListener"in a&&(a.removeEventListener("onStateChange",A,!1),a.addEventListener("onStateChange",A,!1)))}async function D(){q=Date.now()+3400;k++;let a=k;1E9<k&&(k=9);await l.resolve(0);a===k&&(v(),await new l(b=>setTimeout(b,3200)),a===k&&(v(),await new l(b=>setTimeout(b,5400)),a===k&&v()))}const l=(async()=>{})().constructor,t=new WeakMap,y=new WeakMap,z=new WeakMap;let q=0,w=Symbol(),p=0,k=0;document.addEventListener("canplay",
function(a){"VIDEO"==a.target.nodeName&&a.target.closest("#player")&&D()},!0)})(Promise);
