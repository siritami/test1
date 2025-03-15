// ==UserScript==
// @name         Better Google
// @namespace    google
// @version      0.1.16.9
// @author       aligo, adambh, tejaslodaya, drwonky, yut23
// @license      MIT
// @homepageURL   https://github.com/aligo/better-google
// @match        https://*.google.com/search?*
// @include      /^https?://(?:www|encrypted|ipv[46])\.google\.[^/]+/(?:$|[#?]|search|webhp)/
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Better20Google.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Better20Google.meta.js
// ==/UserScript==
(function(){var p=function(b){var a=b.querySelectorAll(".TbwUpd, .HGLrXd");if(0<a.length){var f=[".yuRUbf > a",".yuRUbf > div > a",".yuRUbf > div > span > a"];for(var c of f){var g=b.querySelector(c);if(g)break}c=g.nextSibling;c||(c=g.parentElement.nextSibling);f=document.createElement("div");f.className="btrAdd";if(c){for(var d=0;d<c.children.length;d++){var e=c.children[d];e.className.includes("TbwUpd")||e.className.includes("HGLrXd")||f.appendChild(e)}c=document.createElement("div");c.className=
"btrG";c.appendChild(f);b.appendChild(c);d=document.createElement("a");d.href=g.href;d.target="_blank";d.className="btrLink";e=document.createElement("cite");e.innerText=g.href;e.className="iUh30 bc";d.appendChild(e);e=b.clientWidth-f.offsetWidth-10;c.insertBefore(d,f);d.offsetWidth>e&&(d.style.width=e.toString()+"px");b=b.querySelectorAll(".csDOgf");0<b.length&&c.appendChild(b[0]);a.forEach(function(n){n.remove()});g.querySelector("br:first-child").remove()}else f.remove()}},k=0,l=!1,m=function(){k!=
document.querySelectorAll(".g .yuRUbf").length&&(document.querySelectorAll(".g .yuRUbf").forEach(p),k=document.querySelectorAll(".g .yuRUbf").length);if(!l){if(void 0!=MutationObserver){var b=document.getElementById("rcnt");(new MutationObserver(m)).observe(b,{childList:!0,subtree:!0})}l=!0}},h=function(b,a){null==document.querySelector(b)?void 0!=window.requestAnimationFrame?window.requestAnimationFrame(function(){h(b,a)}):document.addEventListener("readystatechange",function(f){"complete"==document.readyState&&
a()}):a()};h("head",function(){var b="#006621",a=document.querySelector('meta[name="color-scheme"]');void 0!=a&&a.content.includes("dark")&&(b="#40965b");a=document.createElement("style");a.setAttribute("media","screen");a.appendChild(document.createTextNode(""));document.head.appendChild(a);a.sheet.insertRule(`:root { --btrG-link-color: ${b}; }`);a.sheet.insertRule(".btrG { word-break: normal; line-height: 18px; }");a.sheet.insertRule(".btrG .btrAdd { display: inline-block; vertical-align: top; line-height: 0; }");
a.sheet.insertRule(".btrG .btrLink { display: inline-block; vertical-align: top; line-height: 18px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none !important; color: var(--btrG-link-color); }");a.sheet.insertRule(".btrG .btrLink cite.iUh30 { color: var(--btrG-link-color); font-size: 16px; }");a.sheet.insertRule(".yuRUbf h3.DKV0Md { margin-top: 0px; }")});h("#rcnt",m)})();
