// ==UserScript==
// @name        4chan Archive Image Downloader
// @namespace   Violentmonkey Scripts
// @match       https://archive.4plebs.org/*/thread/*
// @match       https://desuarchive.org/*/thread/*
// @match       https://boards.fireden.net/*/thread/*
// @match       https://archived.moe/*/thread/*
// @match       https://thebarchive.com/*/thread/*
// @match       https://archiveofsins.com/*/thread/*
// @match       https://archive.alice.al/*/thread/*
// @match       https://arch.b4k.co/*/thread/*
// @match       https://archive.palanq.win/*/thread/*
// @grant       GM_download
// @grant       GM_registerMenuCommand
// @version     1.4.2
// @license     The Unlicense
// @author      ImpatientImport
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/4chan20Archive20Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/4chan20Archive20Image20Downloader.meta.js
// ==/UserScript==
var indiv_button_enabled=!0,api_button_enabled=!1,keep_original_filenames=!0,archive_filenames=!0,confirm_download=!0,download_limit=3E3,named_poster_media_download_only=!1,named_poster_tag_in_filename=!1;
(function(){function p(a){console.log(a);var t=window.getComputedStyle(a).backgroundColor;const l={indiv_btn:"Indiv DL"};var g={indiv_btn:u};const d={backgroundColor:"rgb(255, 64, 64)",color:"white"},b={backgroundColor:"rgb(238, 210, 2)",color:"black"},h={backgroundColor:"rgb(46, 139, 87)",color:"white"};g={backgroundColor:g[a.id].backgroundColor,color:g[a.id].color};switch(t){case "rgba(0, 0, 0, 0)":var c=d;a.innerText="Confirm?";break;case "rgb(255, 64, 64)":c=b;a.innerText="Processing";break;case "rgb(238, 210, 2)":c=
h;a.innerText="Done";break;case "rgb(46, 139, 87)":c=g,a.innerText=l[a.id]}Object.assign(a.style,c)}function x(a){function t(c){return new Promise(m=>setTimeout(m,c))}var l=[],g=[],d=a[n].op.media,b=keep_original_filenames?d.media_filename:d.media_orig;b=!keep_original_filenames&&archive_filenames?d.media:b;b=named_poster_tag_in_filename&&named_poster_media_download_only?String(a[n].op.name+"_-_"+b):b;d=null==d.media_link?d.remote_media_link:d.media_link;if(!named_poster_media_download_only||named_poster_media_download_only&&
"Anonymous"!=a[n].op.name)l.push(d),g.push(b);if(void 0!=a[n].posts){const c=a[n].posts,m=Object.keys(c),y=m.length;for(a=0;a<y;a++)if(b=c[m[a]].media,null!==b&&(!named_poster_media_download_only||named_poster_media_download_only&&"Anonymous"!=c[m[a]].name)){d=null==b.media_link?b.remote_media_link:b.media_link;var h=keep_original_filenames?b.media_filename:b.media_orig;h=!keep_original_filenames&&archive_filenames?b.media:h;h=named_poster_tag_in_filename&&named_poster_media_download_only?String(c[m[a]].name+
"_-_"+h):h;l.push(d);g.push(h)}}(async function(){for(var c=0;c<l.length;c++)await t(download_limit),GM_download(l[c],g[c])})();confirm_download&&(p(k),setTimeout(p(k),3E3))}async function q(){const a=await (await fetch(v)).json();console.log(a);x(a)}function z(){p(k);setTimeout(function(){"rgb(255, 64, 64)"==window.getComputedStyle(e).backgroundColor&&(e.removeEventListener("click",p),e.addEventListener("click",q),setTimeout(function(){e.removeEventListener("click",q);e.addEventListener("click",
p);Object.assign(k.style,u);e.innerText="Indiv DL"},5E3))},501)}const w=document.getElementsByClassName("post_controls")[0];var r=document.URL,f=r.toString().split("/")[2];r=(new URL(r)).pathname.toString().split("/");const n=r[3],v="https://"+f+"/_/api/chan/thread/?board="+r[1]+"&num="+n;if(indiv_button_enabled){var e=document.createElement("a");e.id="indiv_btn";e.classList.add("btnr","parent");e.innerText="Indiv DL";w.append(e);var k=document.getElementById("indiv_btn");f=window.getComputedStyle(e);
var u={backgroundColor:f.backgroundColor,color:f.color}}api_button_enabled&&(f=document.createElement("a"),f.id="api_btn",f.href=v,f.target="new",f.classList.add("btnr","parent"),f.innerText="Thread API",w.append(f),document.getElementById("api_btn"));GM_registerMenuCommand("Download all thread images individually",q);confirm_download?(k.addEventListener("click",z),k.addEventListener("dblclick",q)):k.addEventListener("click",q)})();
