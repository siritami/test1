// ==UserScript==
// @name         Quillbot Premium Unlocker
// @namespace    quillbot.taozhiyu.gitee.io
// @version      0.3.1
// @author       longkidkoolstar
// @match        https://quillbot.com/*
// @icon         https://quillbot.com/favicon.png
// @require      https://greasyfork.org/scripts/455943-ajaxhooker/code/ajaxHooker.js?version=1124435
// @run-at       document-start
// @grant        none
// @license      none
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Quillbot20Premium20Unlocker.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Quillbot20Premium20Unlocker.meta.js
// ==/UserScript==
(function(){ajaxHooker.hook(a=>{a.url.endsWith("get-account-details")&&(a.response=b=>{const c=JSON.parse(b.responseText),d="data"in c?c.data:c;d.profile.accepted_premium_modes_tnc=!0;d.profile.premium=!0;b.responseText=JSON.stringify("data"in c?(c.data=d,c):d)})});window.addEventListener("load",()=>{const a=document.createElement("div");a.style.position="fixed";a.style.bottom="20px";a.style.right="20px";a.style.padding="15px";a.style.backgroundColor="#f9f9f9";a.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)";
a.style.border="1px solid #ccc";a.style.borderRadius="8px";a.style.zIndex="10000";a.style.fontFamily="Arial, sans-serif";a.style.color="#333";a.style.textAlign="center";var b=document.createElement("p");b.textContent="Join our Discord community for a WORKING SCRIPT with CONTINUOUS UPDATES and more features which now unlocks everything in Quillbot, not only the paraphrasing tool!";b.style.margin="0 0 10px";const c=document.createElement("a");c.href="https://discord.gg/JrweGzdjwA";c.textContent="Join Discord";
c.style.color="#007bff";c.style.textDecoration="none";c.style.fontWeight="bold";c.target="_blank";c.addEventListener("mouseover",()=>c.style.textDecoration="underline");c.addEventListener("mouseout",()=>c.style.textDecoration="none");a.appendChild(b);a.appendChild(c);b=document.createElement("button");b.textContent="\u2716";b.style.position="absolute";b.style.top="5px";b.style.right="5px";b.style.background="none";b.style.border="none";b.style.cursor="pointer";b.style.fontSize="16px";b.style.color=
"#333";b.addEventListener("click",()=>{document.body.removeChild(a)});a.appendChild(b);document.body.appendChild(a)})})();
