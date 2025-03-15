// ==UserScript==
// @name    🔥🔥🔥文本选中复制(通用)🔥🔥🔥
// @name:en Text Copy Universal
// @namespace  https://github.com/WindrunnerMax/TKScript
// @version    1.1.3
// @author     Czy
// @match      http://*/*
// @match      https://*/*
// @supportURL https://github.com/WindrunnerMax/TKScript/issues
// @license    GPL License
// @run-at     document-end
// @grant      GM_registerMenuCommand
// @grant      GM_unregisterMenuCommand
// @grant      GM_notification
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/F09F94A5F09F94A5F09F94A5E69687E69CACE98089E4B8ADE5A48DE588B628E9809AE794A829F09F94A5F09F94A5F09F94A5.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/F09F94A5F09F94A5F09F94A5E69687E69CACE98089E4B8ADE5A48DE588B628E9809AE794A829F09F94A5F09F94A5F09F94A5.meta.js
// ==/UserScript==
(function(){(function(a,d){void 0===d&&(d={});d=d.insertAt;if(a&&"undefined"!==typeof document){var b=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css";"top"===d?b.firstChild?b.insertBefore(c,b.firstChild):b.appendChild(c):b.appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}})('.__copy-currency-container{background-color:#4c98f7;border-radius:3px;bottom:0;display:flex;flex-direction:column;left:-150px;position:fixed;transition:all .3s;width:150px;z-index:9999999999}.__copy-currency-container:before{background-color:#4c98f7;border-radius:20px;content:"";cursor:pointer;height:20px;position:absolute;right:-6px;top:calc(50% - 10px);width:20px}.__copy-currency-container:hover{left:0}.__copy-currency-container>.__copy-currency-button{border:1px solid #fff;border-radius:3px;color:#fff!important;cursor:pointer;font-size:12px!important;margin:5px;padding:5px 3px 5px 4px;text-align:center;user-select:none;z-index:9999999999}');
var f=(a=>{a[a.OPEN=0]="OPEN";a[a.CLOSE=1]="CLOSE";return a})(f||{});const h={insertCSS:(a,d)=>{const b=document.createElement("style");b.id=a;b.innerText=d;[a]=document.getElementsByTagName("body");a?a.appendChild(b):window.addEventListener("DOMContentLoaded",()=>document.body.appendChild(b))},removeCSS:a=>{(a=document.getElementById(a))&&a.remove()}},e=a=>a.stopPropagation();(a=>{const d=document.createElement("div");d.className="__copy-currency-container";document.body.appendChild(d);a.forEach(b=>
{const c=document.createElement("div");c.className="__copy-currency-button";var g=localStorage.getItem("copy-currency--"+b.storageKey);b.status="true"===g?1:0;g=()=>{1===b.status?(b.openFunction(),b.status=0,c.textContent=b.closeName,localStorage.setItem("copy-currency--"+b.storageKey,"true")):(b.closeFunction(),b.status=1,c.textContent=b.openName,localStorage.setItem("copy-currency--"+b.storageKey,"false"))};g();c.addEventListener("click",g);d.appendChild(c)})})([{status:f.CLOSE,storageKey:"selectstart-and-copy",
openName:"\u2705 \u542f\u52a8\u89e3\u9664\u590d\u5236\u9650\u5236",closeName:"\u274c \u5173\u95ed\u89e3\u9664\u590d\u5236\u9650\u5236",openFunction:()=>{window.addEventListener("selectstart",e,!0);window.addEventListener("copy",e,!0);h.insertCSS("copy-currency--selectstart-and-copy","*{user-select: auto !important;-webkit-user-select: auto !important;}")},closeFunction:()=>{window.removeEventListener("selectstart",e,!0);window.removeEventListener("copy",e,!0);h.removeCSS("copy-currency--selectstart-and-copy")}},
{status:f.CLOSE,storageKey:"contextmenu",openName:"\u2705 \u542f\u52a8\u89e3\u9664\u53f3\u952e\u9650\u5236",closeName:"\u274c \u5173\u95ed\u89e3\u9664\u53f3\u952e\u9650\u5236",openFunction:()=>window.addEventListener("contextmenu",e,!0),closeFunction:()=>window.removeEventListener("contextmenu",e,!0)},{status:f.CLOSE,storageKey:"keydown",openName:"\u2705 \u542f\u52a8\u89e3\u9664\u952e\u76d8\u9650\u5236",closeName:"\u274c \u5173\u95ed\u89e3\u9664\u952e\u76d8\u9650\u5236",openFunction:()=>window.addEventListener("keydown",
e,!0),closeFunction:()=>window.removeEventListener("keydown",e,!0)}])})();
