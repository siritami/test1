// ==UserScript==
// @name         Tiktok Video & Slideshow Downloader 🎬🖼️
// @namespace    https://greasyfork.org/en/scripts/431826
// @version      2.9
// @author       YAD
// @match        *://*.tiktok.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js
// @icon         https://miro.medium.com/v2/resize:fit:512/1*KX6NTUUHWlCP4sCXz28TBA.png
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Tiktok20Video20DownloaderF09F8EAC.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Tiktok20Video20DownloaderF09F8EAC.meta.js
// ==/UserScript==
(function(){const l=document.createElement("style");l.innerHTML='\n        [id^="xgwrapper-"] {\n            height: 100% !important;\n        }\n    ';document.head.appendChild(l);const m=(b,c,a)=>{const e=document.createElement("div");Object.assign(e.style,{position:"absolute",right:"15px",top:"27%",transform:"translateY(-50%)",width:"50px",height:"50px",backgroundColor:c,color:"#ffffff",fontSize:"18px",textShadow:"3px 3px 0px #9C1331",textAlign:"center",lineHeight:"50px",borderRadius:"50%",cursor:"pointer",
zIndex:"999999"});e.textContent=b;e.onclick=a;return e},n=(b,c,a,e=!1)=>{b?(a.textContent="\u23f3",GM_xmlhttpRequest({method:"GET",url:b,responseType:"blob",onload:({response:d})=>{d?e?c.file("video",d):GM_download({url:URL.createObjectURL(d),name:c,onload:()=>{a.textContent="\u2714\ufe0f";setTimeout(()=>a.remove(),2E3)},onerror:()=>{a.textContent="\u2716\ufe0f";setTimeout(()=>a.remove(),1500)}}):(a.textContent="\u2716\ufe0f",setTimeout(()=>a.remove(),1500))},onerror:()=>{a.textContent="\u2716\ufe0f";
setTimeout(()=>a.remove(),1500)},ontimeout:()=>{a.textContent="\u2716\ufe0f";setTimeout(()=>a.remove(),1500)}})):a.textContent="\u2716\ufe0f"},p=b=>{const c=m("\ud83c\udf9e\ufe0f","#ff3b5c",async a=>{a.stopPropagation();a.preventDefault();c.textContent="\u23f3";a=b.src||b.querySelector("source")?.src;const e=b.closest('[id^="xgwrapper-"]')?.id.split("-")[2]||"default";if(a&&a.startsWith("blob:")){c.style.backgroundColor="#ffa700";a=`https://www.tiktok.com/@YAD/video/${e}`;const d=document.createElement("iframe");
d.style.position="fixed";d.style.width="80%";d.style.height="80%";d.style.top="10%";d.style.left="10%";d.style.border="2px solid #000";d.style.zIndex="10000";d.style.visibility="hidden";d.src=a;document.body.appendChild(d);const g=()=>{var f=d.contentDocument||d.contentWindow.document;const h=f.querySelector("video");f=f.querySelector("video source");h&&f&&f.src?(n(f.src,`TikTok_Video_${e}.mp4`,c),d.remove()):setTimeout(g,1E3)};d.onload=()=>{setTimeout(g,8E3)}}else c.style.backgroundColor="#ff3b5c",
n(a,`TikTok_Video_${e}.mp4`,c)});b.parentNode.style.position="relative";b.parentNode.appendChild(c);return c},q=b=>{let c;b.addEventListener("mouseover",()=>{c||=p(b)});b.addEventListener("mouseout",a=>{!c||b.contains(a.relatedTarget)||c.contains(a.relatedTarget)||"\u23f3"===c.textContent||(c.remove(),c=null)})},r=()=>new Promise(b=>{const c=confirm("Do you want to download images as a ZIP file? Cancel will download individually");b(c)}),u=b=>{if(!b.querySelector(".image-download-btn")){var c=m("\ud83d\uddbc\ufe0f",
"#16b1c6",async()=>{c.textContent="\u231b";var a=b.querySelectorAll("img");if(a.length){a=Array.from(a).map(d=>d.src);var e=[...(new Set(a))];if(await r()){const d=new JSZip;let g=0;e.forEach((f,h)=>{GM_xmlhttpRequest({method:"GET",url:f,responseType:"blob",onload:t=>{d.file(`image${h+1}.jpeg`,t.response);g++;g===e.length&&d.generateAsync({type:"blob"}).then(k=>{k=URL.createObjectURL(k);GM_download({url:k,name:"TikTok_Slideshow.zip"});c.textContent="\u2714\ufe0f"})}})})}else e.forEach((d,g)=>{GM_download({url:d,
name:`image${g+1}.jpeg`,onload:()=>{c.textContent="\u2714\ufe0f"}})})}else alert("No images found!"),c.textContent="\u2716\ufe0f"});b.style.position="relative";b.appendChild(c)}};(new MutationObserver(()=>{document.querySelectorAll('div[class*="DivPhotoVideoContainer"]:not(.processed)').forEach(b=>{b.classList.add("processed");u(b)})})).observe(document.body,{childList:!0,subtree:!0});(new MutationObserver(()=>{document.querySelectorAll("video:not(.processed)").forEach(b=>{b.classList.add("processed");
q(b)})})).observe(document.body,{childList:!0,subtree:!0})})();
