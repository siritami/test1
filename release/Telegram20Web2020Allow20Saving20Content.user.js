// ==UserScript==
// @name         Telegram Web - Allow Saving Content
// @namespace    c0d3r
// @license      MIT
// @version      0.5
// @author       c0d3r
// @match        https://web.telegram.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// @grant        unsafeWindow
// @grant        GM_addStyle
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Telegram20Web2020Allow20Saving20Content.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Telegram20Web2020Allow20Saving20Content.meta.js
// ==/UserScript==
function downloadMediaFromMessage(a){var b;a.media&&(b=a.media.document||a.media.photo);b&&unsafeWindow.appDownloadManager.downloadToDisc({media:b})}function slowDown(a,b,c,f,g){setTimeout(function(){c.disabled=!0;c.style.opacity=.6;f.textContent=".."+(a+1)+"..";g.textContent="\ud83d\udd54";downloadMediaFromMessage(b)},1E3*a)}async function downloadSingleMedia(a,b){a=await unsafeWindow.mtprotoMessagePort.getMessageByPeer(a,b);downloadMediaFromMessage(a)}
async function downloadSelectedMedia(){var a=await unsafeWindow.appImManager.chat.selection.getSelectedMessages(),b=0,c=document.querySelector("#batch-btn"),f=c.querySelector(".i18n"),g=c.querySelector(".mytgico");a.forEach(function(h,e){h.media&&(h.media.document||h.media.photo)&&(slowDown(b,h,c,f,g),b++);e===a.length-1&&setTimeout(function(){c.disabled=!1;c.style.opacity=1;f.textContent="D/L";g.textContent="\ud83d\udce5"},1E3*b)})}
(function(){if(window.location.pathname.startsWith("/a/"))window.location.replace(window.location.href.replace(".org/a/",".org/k/"));else{var a=document.querySelector("#column-center"),b="photo audio video voice-message media-round grouped-item document-container sticker".split(" "),c=!1,f,g;GM_addStyle(".no-forwards .bubbles, .bubble, .bubble-content { -webkit-user-select: text!important; -moz-user-select: text!important; user-select: text!important; }");var h=EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener=function(e){"copy"!==e&&h.apply(this,arguments)};a.addEventListener("mouseup",function(e){if(2===e.button&&(c=!1,document.querySelector(".no-forwards"))){var k=e.target.closest("[data-mid]");k&&b.some(function(d){return k.classList.contains(d)})&&(f=k.dataset.mid,g=k.dataset.peerId,c=!0)}});(new MutationObserver(function(e){e.forEach(function(k){k.addedNodes.forEach(function(d){"bubble-contextmenu"===d.id&&c&&(d.querySelector(".btn-menu-item").insertAdjacentHTML("beforebegin",
'<div class="btn-menu-item rp-overflow" id="down-btn"><span class="mytgico btn-menu-item-icon" style="font-size: 16px;">\ud83d\udce5</span><span class="i18n btn-menu-item-text">Download</span></div>'),d.querySelector("#down-btn").addEventListener("click",function(){downloadSingleMedia(g,f)}));d.classList&&d.classList.contains("selection-wrapper")&&(d.querySelector(".selection-container-left").insertAdjacentHTML("beforeend",'&nbsp;&nbsp;<button class="btn-primary btn-transparent text-bold" id="batch-btn" title="Download Media"><span class="mytgico" style="padding-bottom: 2px;">\ud83d\udce5</span>&nbsp;<span class="i18n">D/L</span></button>'),
d.querySelector("#batch-btn").addEventListener("click",function(){downloadSelectedMedia()}))})})})).observe(a,{subtree:!0,childList:!0})}})();
