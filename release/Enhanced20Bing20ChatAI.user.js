// ==UserScript==
// @name        Enhanced Bing ChatAI
// @namespace   EnhancedBingChatAI
// @version     1.4.2
// @author      CriDos
// @grant       GM_setClipboard
// @match       https://*.bing.com/*
// @match       https://copilot.microsoft.com/*
// @license     MIT
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Enhanced20Bing20ChatAI.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Enhanced20Bing20ChatAI.meta.js
// ==/UserScript==
window.addEventListener("wheel",a=>{a.target.className.includes("cib-serp-main")&&a.stopPropagation()});var increaseCharacterLimit=async()=>{for(;;)try{const a=queryElementsInShadowRoots(document.body,"#searchbox");for(let b=0;b<a.length;b++){let c=a[b];if(1E5>c.maxLength){console.log("Fixing input character limit to 100000");c.maxLength=1E5;const d=queryElementsInShadowRoots(document.body,".letter-counter");0<d.length&&(d[0].children[0].nextSibling.nextSibling.textContent=1E5)}}}catch(a){console.error(a)}finally{await qWait(1E3)}};
increaseCharacterLimit();function queryElementsInShadowRoots(a,b){function c(f){f.shadowRoot?(f.shadowRoot.querySelectorAll(b).forEach(e=>{d.push(e)}),f.shadowRoot.childNodes.forEach(e=>{c(e)})):f.childNodes.forEach(e=>{c(e)})}let d=[];c(a);return d}function waitForElement(a,b,c=1E3){const d=setInterval(()=>{document.querySelector(a)&&(clearInterval(d),b())},c)}async function qWait(a){await new Promise(b=>setTimeout(b,a))};
