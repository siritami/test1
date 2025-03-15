// ==UserScript==
// @name         YouTube Minimal on PC
// @version      0.5
// @namespace    http://tampermonkey.net/
// @author       CY Fung
// @license      MIT
// @supportURL   https://github.com/cyfung1031/userscript-supports
// @run-at       document-start
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-minimal.png
// @grant        GM_registerMenuCommand
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js#sha512=wT7uPE7tOP6w4o28u1DN775jYjHQApdBnib5Pho4RB0Pgd9y7eSkAV1BTqQydupYDB9GBhTcQQzyNMPMV3cAew==
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20Minimal20on20PC.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20Minimal20on20PC.meta.js
// ==/UserScript==
(function(){function k(b,f){"string"===typeof b&&(b+=(0<b.indexOf("?")?"&":"?")+f);return b}function h(){return location.href.replace(/(?<=[&?])(persist_app|app)=\w+(&|$)/g,"").replace(/[?&]$/,"")}function c(b,f,l){GM_registerMenuCommand(b,function(){if(g){let d=h();d=l?d.replace("https://www.youtube.com/","https://m.youtube.com/"):d.replace("https://m.youtube.com/","https://www.youtube.com/");Cookies.set("userjs-ym-url",d,{domain:"youtube.com",secure:!0})}location.replace(f)})}var a=Cookies.get("userjs-ym-url",
{domain:"youtube.com",secure:!0});if(a)Cookies.remove("userjs-ym-url",{domain:"youtube.com",secure:!0}),a=k(a,"app="+("w"===a.charAt(8)?"desktop":"m")),location.replace(a);else{a=h()||"";var e=a.charAt(8)||"",m="w"===e;e="m"===e;var g=!1;0<=a.indexOf(".youtube.com/watch")?g=!0:a.endsWith("youtube.com/")&&(g=!0);m?(c("Switch to YouTube Mobile persistently","https://m.youtube.com/?persist_app=1&app=m",!0),c("Switch to YouTube Moble temporarily","https://m.youtube.com/?persist_app=0&app=m",!0)):e&&(c("Switch to YouTube Dekstop persistently",
"http://www.youtube.com/?persist_app=1&app=desktop",!1),c("Switch to YouTube Dekstop temporarily","http://www.youtube.com/?persist_app=0&app=desktop",!1));c=null}})();
