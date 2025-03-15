// ==UserScript==
// @name         Download protected PDF file from Google Drive
// @namespace    Download protected PDF file
// @version      1.1
// @match        https://drive.google.com/*
// @grant        GM_registerMenuCommand
// @require      https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Download20protected20PDF20file20from20Google20Drive.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Download20protected20PDF20file20from20Google20Drive.meta.js
// ==/UserScript==
(function(){GM_registerMenuCommand("Download PDF file",function(){try{let a=new window.jspdf.jsPDF,e=a.internal.pageSize.getWidth(),f=a.internal.pageSize.getHeight();var b=document.getElementsByTagName("img");for(let c of b){if(!/^blob:/.test(c.src))continue;console.log("adding image",c.src);b=c;let d=document.createElement("canvas"),h=d.getContext("2d");d.width=b.naturalWidth;d.height=b.naturalHeight;h.drawImage(b,0,0,b.naturalWidth,b.naturalHeight);let k=d.toDataURL("image/png",1);{let g=c.naturalWidth/
c.naturalHeight;var l=e/f<=g?[e,e/g]:[f*g,f]}let [m,n]=l;a.addImage(k,"png",0,0,m,n);a.addPage()}a.deletePage(a.internal.getNumberOfPages());a.save("download.pdf")}catch(a){console.log(a)}},"d")})();
