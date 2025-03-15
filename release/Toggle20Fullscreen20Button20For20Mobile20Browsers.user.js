// ==UserScript==
// @name        Toggle Fullscreen Button For Mobile Browsers
// @namespace   Toggle Fullscreen Button For Mobile Browsers Scripts
// @include       http*://*/*
// @grant       none
// @version     1.5
// @author      -
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Toggle20Fullscreen20Button20For20Mobile20Browsers.meta.js
// ==/UserScript==
(function(){function d(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&
document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);this.parentNode.style.display="none"}function e(a){var b=document.createElement("div"),c=document.createElement("button");b.style.position="fixed";b.style.opacity="0";b.style.zIndex="999999";b.style.left=(a.clientX-20).toString()+"px";b.style.top=(a.clientY-10).toString()+"px";c.innerHTML="Fullscreen";c.addEventListener("click",d);b.appendChild(c);document.body.appendChild(b)}window.addEventListener("dblclick",function(a){e(a)});
window.addEventListener("touchstart",a=>{3==a.touches.length&&(d(),e(a))})})();
