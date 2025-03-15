// ==UserScript==
// @name         Advanced YouTube Age Restriction Bypass
// @namespace    http://tampermonkey.net/
// @version      3.0
// @author       Your Name
// @match        *://www.youtube.com/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Advanced20YouTube20Age20Restriction20Bypass.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Advanced20YouTube20Age20Restriction20Bypass.meta.js
// ==/UserScript==
(function(){function b(a){console.log(`[YouTube Bypass]: ${a}`)}function d(){const a=document.createElement("script");a.innerHTML="(function() {\n      const originalPlayer = window.ytPlayerConfig;\n      if (originalPlayer && originalPlayer.args) {\n        originalPlayer.args.raw_player_response.playabilityStatus.status = 'OK';\n        console.log('[YouTube Bypass]: Player configuration modified.');\n      }\n    })();";document.body.appendChild(a)}(function(){const a=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(f,e){e.includes("/youtubei/v1/player")&&(b("Intercepted request to /youtubei/v1/player"),this.addEventListener("load",function(){const c=JSON.parse(this.responseText);"restricted"===c.playabilityStatus.status&&(c.playabilityStatus.status="OK",b("Bypassed age restriction!"))}));return a.apply(this,arguments)}})();(new MutationObserver(()=>{document.querySelector("ytd-watch-flexy[is-restricted]")&&(b("Detected restricted video player. Attempting bypass..."),setTimeout(d,
1E3))})).observe(document.body,{childList:!0,subtree:!0})})();
