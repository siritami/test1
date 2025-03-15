// ==UserScript==
// @name     Microsoft Store Direct Download
// @namespace    StephenP
// @version  2.0.2.1
// @author       StephenP
// @grant    GM.xmlHttpRequest
// @connect	 rg-adguard.net
// @match    https://apps.microsoft.com/*
// @match    https://apps.microsoft.com/*
// @contributionURL https://buymeacoffee.com/stephenp_greasyfork
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Microsoft20Store20Direct20Download.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Microsoft20Store20Direct20Download.meta.js
// ==/UserScript==
var dlBtn;(function(){setInterval(checkReload,1E3)})();
function checkReload(){let a=querySelectorAllShadows(".buy-box-container");0<a.length&&0==querySelectorAllShadows("#dlBtn").length&&(dlBtn=document.createElement("DIV"),dlBtn.id="dlBtn",dlBtn.setAttribute("aria-label","Download from AdGuard Store"),dlBtn.style.background="#00a686",dlBtn.style.font="initial",dlBtn.style.textAlign="center",dlBtn.style.borderRadius="var(--sl-input-border-radius-large)",dlBtn.style.marginTop="0.5em",dlBtn.innerText="",dlBtn.appendChild(document.createElement("P")),dlBtn.firstChild.innerText=
"\u25bc",dlBtn.addEventListener("click",function(){openLink(document.location.href,"url")}),a[0].appendChild(dlBtn))}
function openLink(a,d){try{dlBtn.firstChild.innerText="...",GM.xmlHttpRequest({method:"POST",url:"https://store.rg-adguard.net/api/GetFiles",data:"type="+d+"&url="+a+"&ring=RP&lang=it-IT",headers:{"Content-Type":"application/x-www-form-urlencoded"},onload:function(b){dlBtn.firstChild.innerText="\u25bc";try{var c=querySelectorAllShadows("#linkTable");c[0].parentNode.removeChild(c[0]);var f=querySelectorAllShadows("#messageFromServer");f[0].parentNode.removeChild(f[0])}catch(e){console.log(e)}try{output(b,
d)}catch(e){console.log(e),"ProductId"===d?output(e,d):(b=querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),openLink(b,"ProductId"))}}})}catch(b){console.log(b),"ProductId"===d?output(b,d):(a=querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),openLink(a,"ProductId"))}}
function output(a,d){var b=document.createElement("div");b.innerHTML=a.responseText;a=b.getElementsByTagName("TABLE")[0];b=b.getElementsByTagName("P")[0];b.id="messageFromServer";b.style.fontWeight="bold";if(void 0!==a){a.id="linkTable";d=a.getElementsByTagName("TR");for(var c of d)c.firstChild.firstChild&&c.firstChild.firstChild.innerText.match(/\.appx$|\.appxbundle$|\.msix$|\.msixbundle$/)&&(c.style.fontWeight="bold");c=querySelectorAllShadows("sl-card");0<c.length&&(c=c[0].parentNode,c.insertBefore(a,
c.querySelector("sl-card")),a.style.marginTop="2em",b.style.color="green",c.insertBefore(b,c.querySelector("sl-card")))}else void 0===a&&"url"===d?(a=querySelectorAllShadows("[product-id]")[0].getAttribute("product-id"),openLink(a,"ProductId")):(b.style.color="red",dlBtn.parentNode.parentNode.parentNode.appendChild(b))}
function querySelectorAllShadows(a,d=document.body){const b=Array.from(d.querySelectorAll("*")).map(c=>c.shadowRoot).filter(Boolean).map(c=>querySelectorAllShadows(a,c));return Array.from(d.querySelectorAll(a)).concat(b).flat()};
