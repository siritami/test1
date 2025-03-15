// ==UserScript==
// @name        Visited Lite
// @namespace   iFantz7E.VisitedLite
// @version     0.23
// @include     http*
// @icon        https://addons.cdn.mozilla.net/user-media/addon_icons/359/359581-64.png
// @run-at      document-start
// @grant       none
// @copyright	2015, 7-elephant
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Visited20Lite.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Visited20Lite.meta.js
// ==/UserScript==
(function(){(function(a){document.addEventListener("DOMContentLoaded",function(g){a()})})(function(){var a=document.documentURI;var g=""+" a:visited, a:visited * { color: %COLOR% !important; } ".replace(/%COLOR%/ig,"LightCoral");a:{for(var b=["mail.live.com",""],e=0;e<b.length;e++){var f=b[e].replace(/\s/ig,""),c=f;0!=c.indexOf(".")&&0!=c.indexOf("/")&&(c="."+c);var d=f;0!=d.indexOf("://")&&(d="://"+d);if(""!=f&&(-1<a.indexOf(c)||-1<a.indexOf(d))){a=!0;break a}}a=!1}a||(a=document.getElementById("visited-lite-7e-style"),
null==a&&(b=document.getElementsByTagName("head"),null!=b&&0<b.length&&(b=b[0],a=document.createElement("style"),null!=a&&(a.setAttribute("id","visited-lite-7e-style"),a.setAttribute("type","text/css"),b.appendChild(a)))),null!=a&&(a.textContent=String(g)))})})();
