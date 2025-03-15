// ==UserScript==
// @name                Use YouTube AV1
// @namespace           http://tampermonkey.net/
// @version             2.4.3
// @author              CY Fung
// @match               https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @exclude             https://www.youtube.com/live_chat*
// @exclude             https://www.youtube.com/live_chat_replay*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant               none
// @run-at              document-start
// @license             MIT
//
// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          firefox FireMonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey
//
// @unwrap
// @allFrames           true
// @inject-into         page
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Use20YouTube20AV1.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Use20YouTube20AV1.meta.js
// ==/UserScript==
(function(f){function h(){try{Object.defineProperty(localStorage.constructor.prototype,"yt-player-av1-pref",{get(){return this===localStorage?"8192":this.getItem("yt-player-av1-pref")},set(a){this.setItem("yt-player-av1-pref",a);return!0},enumerable:!0,configurable:!0})}catch(a){}"8192"!==localStorage["yt-player-av1-pref"]?console.warn("Use YouTube AV1 is not supported in your browser."):(console.debug("force-youtube-av1","AV1 enabled"),k())}f=(async()=>{})().constructor;console.debug("force-youtube-av1",
"injected");const k=()=>{function a(l,m){return function(d){let b;if(void 0===d)b=!1;else a:{if("string"===typeof d&&d.startsWith("video/"))if(d.includes("av01")){if(/codecs[\x20-\x7F]+\bav01\b/.test(d)){b=!0;break a}}else if(d.includes("av1")&&/codecs[\x20-\x7F]+\bav1\b/.test(d)){b=!0;break a}b=void 0}return b=void 0===b?l.apply(this,arguments):m?b?"probably":"":b}}var c=(HTMLVideoElement||0).prototype;c&&"function"==typeof c.canPlayType&&(c.canPlayType=a(c.canPlayType,!0));(c=window.MediaSource)&&
"function"==typeof c.isTypeSupported&&(c.isTypeSupported=a(c.isTypeSupported))};let e=null;try{e=navigator.mediaCapabilities.decodingInfo({type:"file",video:{contentType:"video/mp4; codecs=av01.0.05M.08.0.110.05.01.06.0",height:1080,width:1920,framerate:30,bitrate:2826848},audio:{contentType:"audio/webm; codecs=opus",channels:"2.1",samplerate:44100,bitrate:255236}})}catch(a){e=null}const g=a=>{a&&a.supported&&a.smooth?h():console.warn("force-youtube-av1","Your browser does not support AV1. You might conside to use the latest version of Google Chrome or Mozilla FireFox.")};
(e||f.resolve(0)).catch(g).then(g)})(Promise);
