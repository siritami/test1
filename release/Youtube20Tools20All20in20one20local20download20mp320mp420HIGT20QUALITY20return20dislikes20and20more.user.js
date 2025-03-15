// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.3.2
// @author       MDCM
// @match        https://*.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/DeveloperMDCM/ 
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.meta.js
// ==/UserScript==
(function(){function F(a,e){const h=/\.0+$|(\.[0-9]*[1-9])0+$/,c=[{value:1,symbol:""},{value:1E3,symbol:" K"},{value:1E6,symbol:" M"}].slice().reverse().find(l=>a>=l.value);return c?(a/c.value).toFixed(e).replace(h,"$1")+c.symbol:"0"}async function G(){r=document.location.href;if(void 0!=document.querySelector("#below > ytd-watch-metadata > div")&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){r=(new URLSearchParams(window.location.search)).get("v");var a=`${"https://returnyoutubedislikeapi.com/Votes?videoId="}${r}`;
try{const e=await (await fetch(a)).json();({dislikes:a}=e);const h=document.querySelector("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");void 0!==h&&(h.style="width: 90px",h.innerHTML=`
            <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
            ${F(a,0)}`)}catch(e){console.log(e)}}}async function H(){r=document.location.href;const a=document.querySelectorAll("#dislike-button > yt-button-shape > label > div > span");if(void 0!=a&&"shorts"===document.location.href.split("/")[3]){r=document.location.href.split("/")[4];var e=`${"https://returnyoutubedislikeapi.com/Votes?videoId="}${r}`;try{var h=await (await fetch(e)).json();({dislikes:e}=h);for(h=0;h<a.length;h++)a[h].textContent=`${F(e,0)}`}catch(c){console.log(c)}}}function P(){const a=
{theme:document.querySelector('input[name="theme"]:checked').value,bgColorPicker:document.getElementById("bg-color-picker").value,progressbarColorPicker:document.getElementById("progressbar-color-picker").value,primaryColorPicker:document.getElementById("primary-color-picker").value,secondaryColorPicker:document.getElementById("secondary-color-picker").value,headerColorPicker:document.getElementById("header-color-picker").value,iconsColorPicker:document.getElementById("icons-color-picker").value,
menuColorPicker:document.getElementById("menu-color-picker").value,lineColorPicker:document.getElementById("line-color-picker").value,timeColorPicker:document.getElementById("time-color-picker").value,dislikes:document.getElementById("dislikes-toggle").checked,themes:document.getElementById("themes-toggle").checked,translation:document.getElementById("translation-toggle").checked,reverseMode:document.getElementById("reverse-mode-toggle").checked,hideComments:document.getElementById("hide-comments-toggle").checked,
hideSidebar:document.getElementById("hide-sidebar-toggle").checked,disableAutoplay:document.getElementById("autoplay-toggle").checked,disableSubtitles:document.getElementById("subtitles-toggle").checked,playerSize:document.getElementById("player-size-slider").value,selectVideoQuality:document.getElementById("select-video-qualitys-select").value,menuBgColor:document.getElementById("menu-bg-color-picker").value,menuTextColor:document.getElementById("menu-text-color-picker").value};GM_setValue("ytSettingsMDCM",
JSON.stringify(a))}function A(){document.getElementById("player-size-value").textContent=document.getElementById("player-size-slider").value}function t(){function a(){setTimeout(()=>{t()},1E3);clearInterval(y)}async function e(){const d=document.querySelectorAll("#content-text");let f=`?client=dict-chrome-ex&sl=auto&tl=${navigator.language}&q=`;for(let k=0;k<d.length;k++){const m=document.createElement("BUTTON");m.classList.add("buttons-tranlate");m.textContent="Translate";m.setAttribute("id",`btn${k}`);
d[k].insertAdjacentElement("afterend",m);const I=document.querySelectorAll(".buttons-tranlate");I[k].onclick=function(){z=f;u=z+d[k].textContent;fetch("https://translate.googleapis.com/translate_a/t"+u).then(B=>B.json()).then(B=>{d[k].textContent=B[0][0];I[k].textContent="Translated"})}}}function h(d){d=document.querySelectorAll(`${d}`);[].forEach.call(d,function(f){f.remove()});e()}var c=document.querySelector(".formulariodescarga"),l=document.querySelector(".formulariodescargaaudio");void 0!=c&&
(c.classList.add("ocultarframe"),l.classList.add("ocultarframe"));const b={theme:document.querySelector('input[name="theme"]:checked').value,bgColorPicker:document.getElementById("bg-color-picker").value,progressbarColorPicker:document.getElementById("progressbar-color-picker").value,primaryColorPicker:document.getElementById("primary-color-picker").value,secondaryColorPicker:document.getElementById("secondary-color-picker").value,headerColorPicker:document.getElementById("header-color-picker").value,
iconsColorPicker:document.getElementById("icons-color-picker").value,menuColorPicker:document.getElementById("menu-color-picker").value,lineColorPicker:document.getElementById("line-color-picker").value,timeColorPicker:document.getElementById("time-color-picker").value,dislikes:document.getElementById("dislikes-toggle").checked,themes:document.getElementById("themes-toggle").checked,translation:document.getElementById("translation-toggle").checked,reverseMode:document.getElementById("reverse-mode-toggle").checked,
hideComments:document.getElementById("hide-comments-toggle").checked,hideSidebar:document.getElementById("hide-sidebar-toggle").checked,disableAutoplay:document.getElementById("autoplay-toggle").checked,disableSubtitles:document.getElementById("subtitles-toggle").checked,playerSize:document.getElementById("player-size-slider").value,selectVideoQuality:document.getElementById("select-video-qualitys-select").value,menuBgColor:document.getElementById("menu-bg-color-picker").value,menuTextColor:document.getElementById("menu-text-color-picker").value};
C();document.addEventListener("fullscreenchange",()=>{document.querySelector("#toggle-panel").style.opacity=null!==document.fullscreenElement?0:1});if(c=document.getElementById("comments"))c.style.display=b.hideComments?"none":"block";if(c=document.querySelector(".themes-hidden"))c.style.display=b.themes?"block":"none";if(c=document.querySelector("#secondary > #secondary-inner"))c.classList.add("side-moi"),document.querySelector(".side-moi").style.display=b.hideSidebar?"none":"block";if(c=document.querySelector(".ytp-autonav-toggle-button"))l=
"true"===c.getAttribute("aria-checked"),b.disableAutoplay&&l?c.click():b.disableAutoplay||l||c.click();if(c=document.querySelector(".ytp-subtitles-button"))l="true"===c.getAttribute("aria-pressed"),b.disableSubtitles&&l?c.click():b.disableSubtitles||l||c.click();if(c=document.querySelector("video"))c.style.transform=`scale(${b.playerSize/100})`;c=document.querySelector("div#movie_player");l=localStorage.getItem("yt-player-quality");document.querySelector("#select-video-qualitys-select").addEventListener("change",
()=>{t()});void 0!=c&&(l?(c=JSON.parse(l),c.data=JSON.stringify({quality:b.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(c))):(c={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536E6,creation:Date.now()},localStorage.setItem("yt-player-quality",JSON.stringify(c))));document.documentElement.style.setProperty("--yt-enhance-menu-bg",b.menuBgColor);document.documentElement.style.setProperty("--yt-enhance-menu-text",b.menuTextColor);
const g=J[b.theme];c=document.querySelector('input[name="theme"][value="custom"]').checked;l=document.querySelector('input[name="theme"][value="normal"]').checked;const v=document.querySelector(".theme-custom-options"),q=document.querySelector(".theme-selected-normal");void 0!=c&&(q.style.display="block",v.style.display="block",document.querySelector(".themes-options").style.display="none");l&&(document.querySelector('input[name="theme"][value="custom"]').checked=!1);b.themes?K&&!c?(document.querySelector(".themes-options").style.display=
"block",q.style.display="none",v.style.display="none","normal"===b.theme?document.querySelector('input[name="theme"][value="0"]').checked=!0:(document.documentElement.style.setProperty("--yt-spec-base-background",g.gradient),document.documentElement.style.setProperty("--yt-spec-text-primary",g.textColor),document.documentElement.style.setProperty("--yt-spec-text-secondary",g.textColor),document.documentElement.style.setProperty("--yt-spec-menu-background",g.gradient),document.documentElement.style.setProperty("--yt-spec-icon-inactive",
g.textColor),document.documentElement.style.setProperty("--yt-spec-brand-icon-inactive",g.textColor),document.documentElement.style.setProperty("--yt-spec-brand-icon-active",g.gradient),document.documentElement.style.setProperty("--yt-spec-static-brand-red",g.gradient),document.documentElement.style.setProperty("--yt-spec-raised-background",g.raised),document.documentElement.style.setProperty("--yt-spec-static-brand-red",g.CurrentProgressVideo),document.documentElement.style.setProperty("--yt-spec-static-brand-white",
g.textColor),document.documentElement.style.setProperty("--ytd-searchbox-background",g.gradient),document.documentElement.style.setProperty("--ytd-searchbox-text-color",g.textColor),document.documentElement.style.setProperty("--ytcp-text-primary",b.textColor),GM_addStyle(`
  
              .botones_div {
              background-color: transparent;
              border: none;
              color: #999999;
              user-select: none;
            }
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${g.gradient} !important;
              }
            #background.ytd-masthead { background: ${g.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${g.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${g.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${g.gradient}  !important;}
            .buttons-tranlate {
             background: ${g.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${g.videoDuration} !important;
             background: ${g.gradient} !important;
            }
             #logo-icon {
             color:  ${g.textLogo} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${g.iconsColor} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${g.iconsColor} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${g.iconsColor} !important;
          }
          .ytp-svg-fill {
            fill:  ${g.iconsColor} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${g.iconsColor} !important;
          }
  
  
            `))):(document.documentElement.style.setProperty("--yt-spec-base-background",b.bgColorPicker),document.documentElement.style.setProperty("--yt-spec-text-primary",b.primaryColorPicker),document.documentElement.style.setProperty("--yt-spec-text-secondary",b.secondaryColorPicker),document.documentElement.style.setProperty("--yt-spec-menu-background",b.menuColorPicker),document.documentElement.style.setProperty("--yt-spec-icon-inactive",b.iconsColorPicker),document.documentElement.style.setProperty("--yt-spec-brand-icon-inactive",
b.primaryColorPicker),document.documentElement.style.setProperty("--yt-spec-brand-icon-active",b.primaryColorPicker),document.documentElement.style.setProperty("--yt-spec-raised-background",b.headerColorPicker),document.documentElement.style.setProperty("--yt-spec-static-brand-red",b.lineColorPicker),document.documentElement.style.setProperty("--yt-spec-static-brand-white",b.timeColorPicker),document.documentElement.style.setProperty("--ytd-searchbox-background",b.primaryColorPicker),document.documentElement.style.setProperty("--ytd-searchbox-text-color",
b.secondaryColorPicker),document.documentElement.style.setProperty("--ytcp-text-primary",b.primaryColorPicker),GM_addStyle(`
            .html5-video-player {
                color: ${b.primaryColorPicker} !important;
              }
              .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
                background-color: ${b.iconsColorPicker} !important;
              }
                .ytp-autonav-toggle-button[aria-checked=true] {
                  background-color: ${b.iconsColorPicker} !important;
                }
                  .tp-yt-iron-icon {
                   fill: ${b.iconsColorPicker} !important;
                  }

            #columns.style-scope.ytd-watch-flexy {
              flex-direction: ${b.reverseMode?"row-reverse":"row"} !important;
            }
             .botones_div {
            background-color: transparent;
            border: none;
            color: ${b.iconsColorPicker} !important;
            user-select: none;
          }
            .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail){
              background-color:
            }
              #container.ytd-searchbox {
              color: red !important;
              }
            .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
            background:  ${b.primaryColorPicker} !important;
            }
            .yt-spec-icon-shape {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              color: ${b.iconsColorPicker} !important;
          }
            .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
              color: ${b.iconsColorPicker} !important;
            }
            #background.ytd-masthead { background: ${b.headerColorPicker}  !important; }
            .ytp-swatch-background-color {
            background: ${b.progressbarColorPicker} !important;
          }
        #shorts-container, #page-manager.ytd-app {
            background: ${b.bgColorPicker}36;
            }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${b.bgColorPicker}  !important;}
  
            .badge-shape-wiz--thumbnail-default {
            color: ${b.timeColorPicker} !important;
             background: ${b.secondaryColor} !important;
            }
             #logo-icon {
             color:  ${b.primaryColorPicker} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${b.iconsColorPicker} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${b.iconsColorPicker} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${b.iconsColorPicker} !important;
          }
          .ytp-svg-fill {
            fill:  ${b.iconsColorPicker} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${b.iconsColorPicker} !important;
          }
            `)):GM_addStyle("\n              .botones_div {\n            background-color: transparent;\n            border: none;\n            color: #ccc !important;\n            user-select: none;\n          }\n            ");let w=window.location.href,y=setInterval(function(){window.location.href!==w&&(w=window.location.href,a())},1E3),z,u;window.onscroll=()=>{const d=document.querySelector("#content-text"),f=document.querySelector("ytd-item-section-renderer[static-comments-header] #contents");
b.translation&&(void 0!=d||void 0!=f)&&h(".buttons-tranlate")};if(void 0!=document.querySelector("body")){const d=document.querySelector("ytd-item-section-renderer[static-comments-header] #contents");void 0!=d&&(f=>(new IntersectionObserver(k=>{k[0].isIntersecting&&(d.style.background=`${g.gradient??""}`)})).observe(document.querySelector(`${f}`)))("ytd-item-section-renderer[static-comments-header] #contents")}P()}function C(){var a=document.querySelector(".style-scope .ytd-watch-metadata"),e=document.querySelector("#contents");
void 0!=a&&L&&(L=!1,a.offsetWidth||a.offsetHeight||a.getClientRects().length?a.insertAdjacentHTML("beforebegin",'\n<main>\n<div class="container">\n<form>\n  <div class="containerButtons">\n  \n  <button title="Image video" class="botones_div" type="button" id="imagen">\n\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M15 8h.01"></path>\n    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>\n    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>\n    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>\n    <path d="M19 16v6"></path>\n    <path d="M22 19l-3 3l-3 -3"></path>\n  </svg>\n</button>\n  \n  \n  <button title="Buffer video" type="button" class="buffer_video botones_div">\n <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>\n</button>\n  \n  \n\n  <div style="position:relative; ">\n  <button title="Filter eyes" class="botones_div" type="button">\n    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"\n      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"\n      fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>\n      <path\n        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">\n      </path>\n    </svg>\n    <input id="eyes" list="presetColors" type="color" value="#ffffff">\n  <datalist id="presetColors">\n    <option value="#000000" />\n    <option value="#fbff00" />\n    <option value="#ff0000" />\n    <option value="#00ff00" />\n    <option value="#0000ff" />\n  </datalist>\n  <div id="ojosprotect"\n  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">\n  </div>\n</div>\n</button>\n  \n  \n  <button title="reset" class="botones_div" type="button" id="reset_button">\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>\n    <path d="M12 4l0 8"></path>\n  </svg>\n</button>\n  \n  \n  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">\n\n  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>\n    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>\n  </svg>\n</button>\n  \n  \n  <button title="MP4" type="button" class="btn1 botones_div">\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"\n    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>\n    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>\n    <path d="M12 17v-6"></path>\n    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>\n  </svg>\n</button>\n<button title="MP3" type="button" class="btn2 botones_div">\n\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>\n    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>\n    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>\n    <path d="M12 16l0 -5l2 1"></path>\n  </svg>\n</button>\n<button title="Close" type="button" class="btn3 botones_div">\n<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"\n  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n  stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>\n  <path d="M10 10l4 4m0 -4l-4 4"></path>\n</svg>\n</button>\n  \n  \n\n  <button title="External Download" type="button" class="external_link botones_div">\n\n  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>\n      <path d="M11 13l9 -9"></path>\n      <path d="M15 4h5v5"></path>\n   </svg>\n</button>\n\n  \n  \n\n  <button title="view External no cookie" type="button" class="view_external_link botones_div">\n\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>\n</button>\n\n  \n  \n  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">\n\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>\n</button>\n\n  \n  \n  <button title="Screenshot video" type="button" class="screenshot_video botones_div">\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>\n</button>\n\n  \n  \n  <button title="Check new updates" type="button" class="checked_updates botones_div">\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>\n</button>\n  \n  </div>\n  <div>\n  </div>\n</form>\n\n</div>\n<div class="content_collapsible_colors" style="margin-top: 10px">\n\n<form class="formulariodescarga" action="">\n<div class="containerall">\n<select class="selectcalidades  ocultarframe" required>\n  <option selected disabled>Calidad del video / Quality video</option>\n  <option value="360">360p Mp4</option>\n  <option value="480">480p Mp4</option>\n  <option value="720">720p HD Mp4 Default</option>\n  <option value="1080">1080p FULL HD Mp4</option>\n  <option value="4k">2160p 4K WEBM</option>\n  <option value="8k">4320p 8K WEBM</option>\n  </select>\n  <iframe id="descargando"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframe" src="" frameborder="0"></iframe>\n\n</div>\n</form>\n<form class="formulariodescargaaudio" action="">\n<div class="containerall">\n<select class="selectcalidadesaudio ocultarframeaudio" required>\n  <option selected disabled>Calidad del Audio / Quality Audio</option>\n  <option value="flac">Audio FLAC UHQ</option>\n  <option value="wav">Audio WAV UHQ</option>\n  <option value="mp3">Audio MP3 Default</option>\n  <option value="m4a">Audio M4A</option>\n  <option value="aac">Audio AAC</option>\n  <option value="opus">Audio OPUS</option>\n  <option value="ogg">Audio OGG</option>\n  </select>\n  <iframe id="descargandomp3"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframeaudio" src="" frameborder="0"></iframe>\n\n  </iframe>\n\n</div>\n</form>\n  </main>\n  </html>\n  '):
void 0!=e&&a.insertAdjacentHTML("beforebegin",'\n<main>\n<div class="container">\n<form>\n  <div class="containerButtons">\n  \n  <button title="Image video" class="botones_div" type="button" id="imagen">\n\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M15 8h.01"></path>\n    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>\n    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>\n    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>\n    <path d="M19 16v6"></path>\n    <path d="M22 19l-3 3l-3 -3"></path>\n  </svg>\n</button>\n  \n  \n  <button title="Buffer video" type="button" class="buffer_video botones_div">\n <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>\n</button>\n  \n  \n\n  <div style="position:relative; ">\n  <button title="Filter eyes" class="botones_div" type="button">\n    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"\n      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"\n      fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>\n      <path\n        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">\n      </path>\n    </svg>\n    <input id="eyes" list="presetColors" type="color" value="#ffffff">\n  <datalist id="presetColors">\n    <option value="#000000" />\n    <option value="#fbff00" />\n    <option value="#ff0000" />\n    <option value="#00ff00" />\n    <option value="#0000ff" />\n  </datalist>\n  <div id="ojosprotect"\n  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">\n  </div>\n</div>\n</button>\n  \n  \n  <button title="reset" class="botones_div" type="button" id="reset_button">\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>\n    <path d="M12 4l0 8"></path>\n  </svg>\n</button>\n  \n  \n  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">\n\n  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>\n    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>\n  </svg>\n</button>\n  \n  \n  <button title="MP4" type="button" class="btn1 botones_div">\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"\n    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>\n    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>\n    <path d="M12 17v-6"></path>\n    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>\n  </svg>\n</button>\n<button title="MP3" type="button" class="btn2 botones_div">\n\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"\n    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n    stroke-linecap="round" stroke-linejoin="round">\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>\n    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>\n    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>\n    <path d="M12 16l0 -5l2 1"></path>\n  </svg>\n</button>\n<button title="Close" type="button" class="btn3 botones_div">\n<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"\n  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n  stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>\n  <path d="M10 10l4 4m0 -4l-4 4"></path>\n</svg>\n</button>\n  \n  \n\n  <button title="External Download" type="button" class="external_link botones_div">\n\n  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>\n      <path d="M11 13l9 -9"></path>\n      <path d="M15 4h5v5"></path>\n   </svg>\n</button>\n\n  \n  \n\n  <button title="view External no cookie" type="button" class="view_external_link botones_div">\n\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>\n</button>\n\n  \n  \n  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">\n\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>\n</button>\n\n  \n  \n  <button title="Screenshot video" type="button" class="screenshot_video botones_div">\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>\n</button>\n\n  \n  \n  <button title="Check new updates" type="button" class="checked_updates botones_div">\n  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>\n</button>\n  \n  </div>\n  <div>\n  </div>\n</form>\n\n</div>\n<div class="content_collapsible_colors" style="margin-top: 10px">\n\n<form class="formulariodescarga" action="">\n<div class="containerall">\n<select class="selectcalidades  ocultarframe" required>\n  <option selected disabled>Calidad del video / Quality video</option>\n  <option value="360">360p Mp4</option>\n  <option value="480">480p Mp4</option>\n  <option value="720">720p HD Mp4 Default</option>\n  <option value="1080">1080p FULL HD Mp4</option>\n  <option value="4k">2160p 4K WEBM</option>\n  <option value="8k">4320p 8K WEBM</option>\n  </select>\n  <iframe id="descargando"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframe" src="" frameborder="0"></iframe>\n\n</div>\n</form>\n<form class="formulariodescargaaudio" action="">\n<div class="containerall">\n<select class="selectcalidadesaudio ocultarframeaudio" required>\n  <option selected disabled>Calidad del Audio / Quality Audio</option>\n  <option value="flac">Audio FLAC UHQ</option>\n  <option value="wav">Audio WAV UHQ</option>\n  <option value="mp3">Audio MP3 Default</option>\n  <option value="m4a">Audio M4A</option>\n  <option value="aac">Audio AAC</option>\n  <option value="opus">Audio OPUS</option>\n  <option value="ogg">Audio OGG</option>\n  </select>\n  <iframe id="descargandomp3"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerall ocultarframeaudio" src="" frameborder="0"></iframe>\n\n  </iframe>\n\n</div>\n</form>\n  </main>\n  </html>\n  '));
const h=document.querySelector(".formulariodescarga"),c=document.querySelector(".formulariodescargaaudio"),l=document.querySelector("#descargando"),b=document.querySelector("#descargandomp3");h&&c&&(h.addEventListener("click",d=>{d.preventDefault()}),c.addEventListener("click",d=>{d.preventDefault()}));a=document.querySelector(".btn1");e=document.querySelector(".btn2");const g=document.querySelector(".btn3"),v=document.querySelector(".selectcalidades"),q=document.querySelector(".selectcalidadesaudio");
void 0!=v&&v.addEventListener("change",d=>{l.src=`https://loader.to/api/button/?url=${window.location.href}&f=${d.target.value}&color=0af`;l.classList.remove("ocultarframe")});void 0!=q&&q.addEventListener("change",d=>{b.src=`https://loader.to/api/button/?url=${window.location.href}&f=${d.target.value}&color=049c16`;b.classList.remove("ocultarframeaudio")});void 0!=g&&(g.onclick=()=>{h.style.display="none";c.style.display="none"});void 0!=a&&(a.onclick=()=>{v.classList.remove("ocultarframe");l.classList.add("ocultarframe");
h.classList.remove("ocultarframe");h.style.display="";q.classList.add("ocultarframeaudio");c.classList.add("ocultarframe");h.reset()});void 0!=e&&(e.onclick=()=>{c.classList.remove("ocultarframe");h.classList.add("ocultarframe");b.classList.remove("ocultarframeaudio");c.style.display="";q.classList.remove("ocultarframeaudio");b.classList.add("ocultarframeaudio");c.reset()});a=document.querySelector("#imagen");const w=document.querySelector("#eyes");setInterval(function(){const d=document.querySelector(".buffer_video");
d?d.dataset.listenerAdded||(d.addEventListener("click",()=>{const f=document.querySelector("video");if(f){var k=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});f.dispatchEvent(k);setTimeout(()=>{const m=document.querySelector("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");m?m.click():console.log("Opci\u00f3n no encontrada, intenta aumentar el tiempo de espera.")},1E3)}else console.log("No se encontr\u00f3 el video en la p\u00e1gina.")}),d.dataset.listenerAdded="true",
console.log("Evento registrado con \u00e9xito.")):console.log("Bot\u00f3n no encontrado, esperando...")},2E3);let y=0;e=document.querySelector("#repeatvideo");const z=document.querySelector(".icon-tabler-repeat"),u=document.querySelector("#movie_player > div.html5-video-container > video");void 0!=e&&(e.onclick=()=>{if(void 0!=document.querySelector("#cinematics > div")||void 0!=u)y+=1,setInterval(()=>{switch(y){case 1:document.querySelector("#movie_player > div.html5-video-container > video").setAttribute("loop",
"true");z.innerHTML='  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                      <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>\n                      <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>\n                      <path d="M3 3l18 18"></path>\n                   </svg> ';
break;case 2:y=0,document.querySelector("#movie_player > div.html5-video-container > video").removeAttribute("loop"),z.innerHTML=' <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"\n                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"\n                      stroke-linecap="round" stroke-linejoin="round">\n                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                      <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>\n                      <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>\n                    </svg>'}},
1E3)});e=document.querySelector("#cinematics > div");void 0!=e&&(e.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");e=document.querySelector("#reset_button");void 0!=e&&e.addEventListener("click",function(){null!=localStorage.getItem("colores")&&(localStorage.removeItem("colores"),document.querySelector("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))});void 0!=a&&(a.onclick=()=>{if(void 0!=document.querySelector("#cinematics > div")||
void 0!=u){let d=(new URLSearchParams(window.location.search)).get("v");fetch(`https://i.ytimg.com/vi/${d}/maxresdefault.jpg`).then(f=>{if(!f.ok)throw Error(`HTTP error! Status: ${f.status}`);return f.blob()}).then(f=>{if(20<=f.size/1024){window.open(`https://i.ytimg.com/vi/${d}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");f=URL.createObjectURL(f);const k=document.createElement("a");
k.href=f;const m=document.querySelector("h1.style-scope.ytd-watch-metadata").innerText;k.download=`${m}_maxresdefault.jpg`;k.click();URL.revokeObjectURL(f)}else console.log("La imagen no excede los 20 KB. No se descargar\u00e1.")}).catch(f=>{alert("No found image");console.error("Error al obtener la imagen:",f)})}});a=document.querySelector(".external_link");void 0!=a&&(a.onclick=()=>{let d;d=(new URLSearchParams(window.location.search)).get("v");window.open(`https://www.y2mate.com/es/convert-youtube/${d}`,
"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});a=document.querySelector(".view_external_link");void 0!=a&&(a.onclick=()=>{document.querySelector("video").click();let d;d=(new URLSearchParams(window.location.search)).get("v");window.open(`https://www.youtube.com/embed/${d}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});a=document.querySelector(".video_picture_to_picture");
void 0!=a&&(a.onclick=()=>{const d=document.querySelector("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||d.requestPictureInPicture().then(()=>{}).catch(f=>{console.error("Error al activar el modo Picture-in-Picture:",f)}):alert("Picture-in-Picture not supported")},void 0!=w&&w.addEventListener("input",function(){if(void 0!=document.querySelector("#cinematics > div")||void 0!=u)document.querySelector("#ojosprotect").style.backgroundColor=w.value}),clearInterval(C));
a=document.querySelector(".checked_updates");void 0!=a&&(a.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});a=document.querySelector(".screenshot_video");void 0!=a?a.onclick=()=>{const d=document.querySelector("video");var f=document.createElement("canvas");f.width=d.videoWidth;f.height=d.videoHeight;f.getContext("2d").drawImage(d,0,0,f.width,f.height);
var k=f.toDataURL("image/png");f=document.createElement("a");f.href=k;k=document.querySelector("h1.style-scope.ytd-watch-metadata").innerText;f.download=`${d.currentTime.toFixed(0)}s_${k}.png`;f.click()}:(a=document.querySelector(".containerButtons"),void 0!=a&&(a.innerHTML=""));clearInterval(C)}let r=document.location.href,D,M=!1;setInterval(()=>{const a=document.querySelector(".svg-dislike-ico"),e=window.location.href;void 0!==D&&e!==D&&!a&&M&&setTimeout(async()=>{await G();await H()},2E3);D=e},
1E3);var n=window.trustedTypes?.createPolicy("default",{createHTML:a=>a});GM_addStyle("\n  #cinematics {\n    position: absolute !important;\n    width: 90vw !important;\n    height: 100vh ;\n  }\n    #cinematics div {\n        position: fixed;\n      inset: 0px;\n      pointer-events: none;\n      transform: scale(1.5, 2);\n  }\n      #cinematics > div > div > canvas:nth-child(1), #cinematics > div > div > canvas:nth-child(2) {\n   position: absolute !important;\n    width: 90vw !important;\n    height: 100vh ;\n      }\n\n    // .html5-video-player.unstarted-mode {\n    //  background-image: url('https://avatars.githubusercontent.com/u/54366580?v=4');\n    // background-repeat: no-repeat;\n    // background-position: 50% 50%;\n    // display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // }\n    \n        #yt-enhancement-panel {\n            position: fixed;\n            top: 60px;\n            right: 20px;\n            background-color: var(--yt-enhance-menu-bg, #ffffff);\n            color: var(--yt-enhance-menu-text, #000000);\n            border: 1px solid #cccccc;\n            border-radius: 8px;\n            padding: 15px;\n            z-index: 9999;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n            width: 300px;\n            max-height: 80vh;\n            overflow-y: auto;\n            font-size: var(--yt-enhance-menu-font-size, 14px);\n        }\n        #yt-enhancement-panel h3 {\n            margin-top: 0;\n            color: #ff0000;\n        }\n        .enhancement-option {\n            margin-bottom: 10px;\n        }\n        .color-picker {\n            width: 100%;\n            margin: 0;\n            padding: 0;\n            border: none;\n            background: none;\n        }\n        .slider {\n            width: 100%;\n        }\n         #toggle-panel {\n            position: fixed;\n            top: 10px;\n            right: 115px;\n            z-index: 10000;\n            color: white;\n            padding: 5px;\n            border: none;\n            cursor: pointer;\n            display: flex;\n            justify-content: center;\n            transition: all 0.5s ease;\n            width: 43px;\n            border-radius: 100px;\n        }\n             #toggle-panel:hover {\n             background-color: #fff;\n             border-radius: 100px;\n             opacity: 1 !important;\n        }\n        #icon-menu-settings {\n        width: 24px;\n        height: 24px;\n        cursor: pointer;\n        user-select: none;\n        }\n\n        .tab-buttons {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 15px;\n        }\n        .tab-button {\n            background-color: #f0f0f0;\n            border: none;\n            padding: 5px 10px;\n            cursor: pointer;\n            border-radius: 4px;\n        }\n        .tab-button.active {\n            background-color: #ff0000;\n            color: white;\n        }\n        .tab-button-active {\n            background-color: #ff0000;\n            color: white;\n            border: none;\n            border-radius: 2px;\n        }\n        .tab-content {\n            display: none;\n        }\n        .tab-content.active {\n            display: block;\n        }\n        #import-export {\n            margin-top: 15px;\n        }\n        #import-export textarea {\n            width: 100%;\n            height: 100px;\n        }\n        #menu-settings-icon {\n            cursor: pointer;\n            float: right;\n            font-size: 20px;\n        }\n        .theme-option {\n            margin-bottom: 15px;\n        }\n        .theme-option label {\n            display: flex;\n            align-items: center;\n        }\n       .theme-option {\n    position: relative;\n    width: auto;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.theme-preview {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 10px;\n    border: 1px solid #000;\n    z-index: 1;\n}\n\n.theme-option input[type=\"radio\"] {\n    position: relative;\n    z-index: 2;\n    margin-right: 10px;\n    cursor: pointer;\n}\n\n.theme-name {\n    position: relative;\n    z-index: 2;\n    font-size: 15px;\n    color: #fff;\n}\n\n.theme-option label {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n    z-index: 2;\n}\n\n  .buttons-tranlate {\n        background: #000;\n        font-size: 10px;\n        border: none;\n        color: #fbf4f4 !important;\n        padding: 3px 0;\n        margin-left: 10px;\n        width: 70px;\n        border-radius: 10px;}\n        .buttons-tranlate:hover {\n        cursor: pointer;\n        background-color: #6b6b6b;}\n\n         button.botones_div {\n      margin: 0;\n      padding: 0;\n\n    }\n\n    .tab-button:hover {\n      background-color: #ec3203 !important;\n      color: #ffffff !important;\n      cursor: pointer;\n    }\n\n        #eyes {\n      opacity: 0;\n      position: absolute;\n      height: 24px;\n      left: 0;\n      width: 24px;\n    }\n\n    /* width */\n    ::-webkit-scrollbar {\n      width: 4px;\n      height: 10px;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n      background: ##d5d5d5;\n\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n      background: #000;\n\n    }\n\n    .containerButtons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      gap: 10px;\n    }\n    .containerButtons > button:hover {\n      cursor: pointer;\n    }\n      #container.ytd-masthead {\n      height: 56px;\n      padding: 0 16px;\n      display: flexbox;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: start;\n      }\n      body {\n      padding: 0;\n      margin: 0;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      }\n      .style-scope.ytd-comments {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: auto;\n      max-height: 100vh;\n      }\n      ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer {\n        --ytd-item-section-item-margin: 8px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        height: auto;\n        max-height: 130vh;\n      }\n      .right-section.ytcp-header {\n      display: flex;\n      flex: 1;\n      align-items: center;\n      gap: 45px;\n      justify-content: end;\n    }\n      #meta.ytd-playlist-panel-video-renderer {\n    min-width: 0;\n    padding: 0 8px;\n    display: flexbox;\n    display: flex;\n    flex-direction: column-reverse;\n    flex: 1;\n    flex-basis: 0.000000001px;\n}\n\n    .containerall {\n        display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 50%;\n    margin: auto;\n}\n    }\n    .container .botoncalidades {\n      margin: 3px 2px;\n      width: 24.6%;\n    }\n\n    .botoncalidades:first-child {\n      background-color: #0af;\n    }\n\n    .botoncalidades:last-child {\n      background-color: red;\n      width: 100px;\n    }\n\n    .selectcalidades,\n    .botoncalidades,\n    .selectcalidadesaudio {\n      width: 50%;\n      height: 27.8px;\n      background-color: #fff;\n      color: #000;\n      font-size: 25px;\n      text-align: center;\n      border: none;\n      font-size: 20px;\n      margin: 2px 2px;\n    }\n\n    .botoncalidades {\n      width: 70px;\n      height: 30px;\n      background-color: rgb(4, 156, 22);\n      border: 0px solid #000;\n      color: #fff;\n      font-size: 20px;\n      border-radius: 10px;\n      margin: 2px 2px;\n    }\n\n    .botoncalidades:hover,\n    .bntcontainer:hover {\n      cursor: pointer;\n    }\n\n   .ocultarframe,\n    .ocultarframeaudio {\n      display: none;\n    }\n      .checked_updates {\n      cursor: pointer;\n      }\n\n      #export-config, #import-config {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        background-color: #ec3203;\n        color: #ffffff;\n        border: none;\n        padding: 5px;\n      }\n        #export-config:hover, #import-config:hover {\n          background-color: #ff0000;\n          color: #ffffff;\n          cursor: pointer;\n        }\n    ");
const J=[{name:"Default / Reload Page",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",
btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",
textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind ",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b) 100%",
textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",
videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f  0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"}],
p=document.createElement("div");p.id="yt-enhancement-panel";var x=J.map((a,e)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${a.gradient};"></div>
          <input type="radio" name="theme" value="${e}" ${0===e?"checked":""}>
              <span style="${"Default / Reload Page"===a.name?"color: red; ":""}" class="theme-name">${a.name}</span>
              </div>
        </label>
    `).join("");const K=document.querySelector("html").hasAttribute("dark");let N=K;n=n?n.createHTML(`
      <div style="display: flex;justify-content: space-between;align-items: center;gap: 3px;margin-bottom: 10px;">
      <h4 style="display: flex;align-items: center;gap: 10px;">YouTube Tools v2.3.2  <a target="_blank" href="https://github.com/DeveloperMDCM/Youtube-tools-extension">
      <svg style="background-color: white; border-radius: 5px;color: #000;" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
      </a></h4>
      <div style="display: flex; gap: 5px;">
      <span id="menu-settings-icon">\u2699\ufe0f</span>
      <a href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js" target="_blank" class="checked_updates">\ud83d\udd04\ufe0f</a>
      <span style="cursor: pointer" class="close_menu_settings">\u274e</span>
      </div>
      </div>
        <div class="tab-buttons">
            <button class="tab-button active" data-tab="general">General</button>
            <button class="tab-button" data-tab="themes">Themes</button>
            <button class="tab-button" data-tab="sidebar">Sidebar</button>
            <button class="tab-button" data-tab="headers">Header</button>
        </div>
        <div id="general" class="tab-content active">
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="hide-comments-toggle"> Hide Comments
                </label>
            </div>
             <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="hide-sidebar-toggle"> Hide Sidebar
                </label>
            </div>
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="autoplay-toggle"> Disable Autoplay
                </label>
            </div>
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="subtitles-toggle"> Disable Subtitles
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="dislikes-toggle"> Show Dislikes / Reload page
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="themes-toggle"> Active Themes / Reload page
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="translation-toggle"> Translate comments / Reload page
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="reverse-mode-toggle"> Reverse mode
                </label>
            </div>
           
             <div class="enhancement-option">
                <label>Video Player Size: <span id="player-size-value">100</span>%</label> <button class="tab-button-active" id="reset-player-size">Reset video size</button>
                <input type="range" id="player-size-slider" class="slider" min="50" max="150" value="100">
            </div>
             <div class="enhancement-option">
                <label>Default video player quality: </label>
                <select class="tab-button-active" id="select-video-qualitys-select">
                  <option value="144">144</option>
                  <option value="240">240</option>
                  <option value="360">360</option>
                  <option value="480">480</option>
                  <option value="720">720</option>
                  <option value="1080">1080</option>
                  <option value="1440">1440</option>
                  <option value="2160">2160</option>
                </select>
            </div>
        </div>

        <div id="themes" class="tab-content" style="height: auto; max-height: 350px; overflow-y: auto;">
        <div class="themes-hidden">
        <h4>Choose a Theme</h4>
        <p>Disable cinematic Lighting</p>
              <label>
          <div class="theme-option">
          <div class="theme-preview" style="background: dark;"></div>
          <input type="radio" name="theme" value="custom">
              <span class="theme-name">Custom</span>
              </div>
              </label>
              <label>
              <div class="theme-option theme-selected-normal">
              <div class="theme-preview" style="background: dark;"></div>
              <input type="radio" name="theme" value="normal">
                  <span class="theme-name">Selected Themes</span>
                  </div>
              </label>
            <p>${N?"":"activate dark mode to use themes"}</p>
            <div class="themes-options">
              ${x}
            </div>
            <div class="theme-custom-options">
            <div class="enhancement-option">
                <label>Progressbar Video:</label>
                <input type="color" id="progressbar-color-picker" class="color-picker" value="#ff0000">
            </div>
            <div class="enhancement-option">
                <label>Background Color:</label>
                <input type="color" id="bg-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Primary Color:</label>
                <input type="color" id="primary-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Secondary Color:</label>
                <input type="color" id="secondary-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Header Color:</label>
                <input type="color" id="header-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Icons Color:</label>
                <input type="color" id="icons-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Menu Color:</label>
                <input type="color" id="menu-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Line Color Preview:</label>
                <input type="color" id="line-color-picker" class="color-picker" value="#ff0000">
            </div>
            <div class="enhancement-option">
                <label>Time Color Preview:</label>
                <input type="color" id="time-color-picker" class="color-picker" value="#ffffff">
            </div>
            </div>
        </div>
          
        </div>

        <div id="sidebar" class="tab-content">
            <h4>Available in next update</h4>
        </div>
        <div id="headers" class="tab-content">
           <h4>Available in next update</h4>
        </div>
        <div id="menu-settings" class="tab-content">
            <h4 style="margin: 10px 0">Menu Appearance</h4>
            <div class="enhancement-option">
                <label>Menu Background Color:</label>
                <input type="color" id="menu-bg-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Menu Text Color:</label>
                <input type="color" id="menu-text-color-picker" class="color-picker" value="#ff0000">
            </div>
        "
        </div>
        <div id="import-export">
        <div style="display: flex;width: 100%;justify-content: space-between;">
        <button id="export-config">Export
        <svg width="20" height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 15h6" /><path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" /></svg>
        </button>
       <button id="import-config">Import
        <svg width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M15 15h-6" /><path d="M11.5 17.5l-2.5 -2.5l2.5 -2.5" /></svg>
        </button>
        </div>
            <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
        </div>
    `):`
        <div style="display: flex;justify-content: space-between;align-items: center;gap: 3px;margin-bottom: 10px;">
      <h4 style="display: flex;align-items: center;gap: 10px;">YouTube Tools v2.2.92  <a target="_blank" href="https://github.com/DeveloperMDCM/Youtube-tools-extension">
      <svg style="background-color: white; border-radius: 5px;color: #000;" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
      </a></h4>
      <div style="display: flex; gap: 5px;">
      <span id="menu-settings-icon">\u2699\ufe0f</span>
      <a href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js" target="_blank" class="checked_updates">\ud83d\udd04\ufe0f</a>
      <span style="cursor: pointer" class="close_menu_settings">\u274e</span>
      </div>
      </div>
        <div class="tab-buttons">
            <button class="tab-button active" data-tab="general">General</button>
            <button class="tab-button" data-tab="themes">Themes</button>
            <button class="tab-button" data-tab="sidebar">Sidebar</button>
            <button class="tab-button" data-tab="headers">Header</button>
        </div>
        <div id="general" class="tab-content active">
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="hide-comments-toggle"> Hide Comments
                </label>
            </div>
             <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="hide-sidebar-toggle"> Hide Sidebar
                </label>
            </div>
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="autoplay-toggle"> Disable Autoplay
                </label>
            </div>
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="subtitles-toggle"> Disable Subtitles
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="dislikes-toggle"> Show Dislikes / Reload page
                </label>
            </div>
              <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="themes-toggle"> Active Themes / Reload page
                </label>
            </div>
            <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="translation-toggle"> Translate comments / Reload page
                </label>
            </div>
             <div class="enhancement-option">
                <label>
                    <input type="checkbox" id="reverse-mode-toggle"> Reverse mode
                </label>
            </div>
           
             <div class="enhancement-option">
                <label>Video Player Size: <span id="player-size-value">100</span>%</label> <button class="tab-button-active" id="reset-player-size">Reset video size</button>
                <input type="range" id="player-size-slider" class="slider" min="50" max="150" value="100">
            </div>
             <div class="enhancement-option">
                <label>Default video player quality: </label>
                <select class="tab-button-active" id="select-video-qualitys-select">
                  <option value="144">144</option>
                  <option value="240">240</option>
                  <option value="360">360</option>
                  <option value="480">480</option>
                  <option value="720">720</option>
                  <option value="1080">1080</option>
                  <option value="1440">1440</option>
                  <option value="2160">2160</option>
                </select>
            </div>
        </div>

        <div id="themes" class="tab-content" style="height: auto; max-height: 350px; overflow-y: auto;">
        <div class="themes-hidden">
        <h4>Choose a Theme</h4>
        <p>Disable cinematic Lighting</p>
              <label>
          <div class="theme-option">
          <div class="theme-preview" style="background: dark;"></div>
          <input type="radio" name="theme" value="custom">
              <span class="theme-name">Custom</span>
              </div>
              </label>
              <label>
              <div class="theme-option theme-selected-normal">
              <div class="theme-preview" style="background: dark;"></div>
              <input type="radio" name="theme" value="normal">
                  <span class="theme-name">Selected Themes</span>
                  </div>
              </label>
            <p>${N?"":"activate dark mode to use themes"}</p>
            <div class="themes-options">
              ${x}
            </div>
            <div class="theme-custom-options">
            <div class="enhancement-option">
                <label>Progressbar Video:</label>
                <input type="color" id="progressbar-color-picker" class="color-picker" value="#ff0000">
            </div>
            <div class="enhancement-option">
                <label>Background Color:</label>
                <input type="color" id="bg-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Primary Color:</label>
                <input type="color" id="primary-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Secondary Color:</label>
                <input type="color" id="secondary-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Header Color:</label>
                <input type="color" id="header-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Icons Color:</label>
                <input type="color" id="icons-color-picker" class="color-picker" value="#ffffff">
            </div>
            <div class="enhancement-option">
                <label>Menu Color:</label>
                <input type="color" id="menu-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Line Color Preview:</label>
                <input type="color" id="line-color-picker" class="color-picker" value="#ff0000">
            </div>
            <div class="enhancement-option">
                <label>Time Color Preview:</label>
                <input type="color" id="time-color-picker" class="color-picker" value="#ffffff">
            </div>
            </div>
        </div>
          
        </div>

        <div id="sidebar" class="tab-content">
            <h4>Available in next update</h4>
        </div>
        <div id="headers" class="tab-content">
           <h4>Available in next update</h4>
        </div>
        <div id="menu-settings" class="tab-content">
            <h4 style="margin: 10px 0">Menu Appearance</h4>
            <div class="enhancement-option">
                <label>Menu Background Color:</label>
                <input type="color" id="menu-bg-color-picker" class="color-picker" value="#000000">
            </div>
            <div class="enhancement-option">
                <label>Menu Text Color:</label>
                <input type="color" id="menu-text-color-picker" class="color-picker" value="#ff0000">
            </div>
        
        </div>
        <div id="import-export">
        <div style="display: flex;width: 100%;justify-content: space-between;">
        <button id="export-config" style="width: 100%;display: flex;align-items: center;justify-content: center;">Export
        <svg width="20" height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 15h6" /><path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" /></svg>
        </button>
       <button id="import-config" style="width: 100%;display: flex;align-items: center;justify-content: center;">Import
        <svg width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M15 15h-6" /><path d="M11.5 17.5l-2.5 -2.5l2.5 -2.5" /></svg>
        </button>
        </div>
            <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
        </div>
    `;p.innerHTML=n;document.body.appendChild(p);n=document.createElement("div");n.id="toggle-panel";x=document.createElement("img");x.id="icon-menu-settings";x.src="https://cdn.iconscout.com/icon/premium/png-512-thumb/settings-782-1095915.png?f=webp&w=256";n.appendChild(x);document.body.appendChild(p);document.body.appendChild(n);n.addEventListener("click",()=>{p.style.display="none"===p.style.display?"block":"none"});document.querySelector(".close_menu_settings").addEventListener("click",()=>{p.style.display=
"none"===p.style.display?"block":"none"});const E=document.querySelectorAll(".tab-button"),O=document.querySelectorAll(".tab-content");E.forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-tab");E.forEach(h=>h.classList.remove("active"));O.forEach(h=>h.classList.remove("active"));a.classList.add("active");document.getElementById(e).classList.add("active")})});document.getElementById("menu-settings-icon").addEventListener("click",()=>{E.forEach(a=>a.classList.remove("active"));
O.forEach(a=>a.classList.remove("active"));document.getElementById("menu-settings").classList.add("active")});document.getElementById("reset-player-size").addEventListener("click",()=>{document.getElementById("player-size-slider").value=100;A();t()});let L=!0;console.log("Scrip en ejecuci\u00f3n by: DeveloperMDCM  MDCM");console.log("%cYoutube Tools Extension NEW UI\n%cRun %c(v2.3.2)\nBy: DeveloperMDCM.","color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;",
"color: #00aaff; font-size: 16px; font-family: sans-serif;");document.querySelectorAll("input").forEach(a=>{a.addEventListener("change",t);"range"===a.type&&a.addEventListener("change",()=>{A();t()})});document.getElementById("export-config").addEventListener("click",()=>{const a=GM_getValue("ytSettingsMDCM","{}");document.getElementById("config-data").value=a;try{JSON.parse(a),GM_setValue("ytSettingsMDCM",a),alert("Configuration export successfully!")}catch(e){alert("Invalid configuration data. Please check and try again.")}});
document.getElementById("import-config").addEventListener("click",()=>{const a=document.getElementById("config-data").value;try{JSON.parse(a),GM_setValue("ytSettingsMDCM",a),alert("Configuration imported successfully!"),window.location.reload()}catch(e){alert("Invalid configuration data. Please check and try again.")}});p.style.display="none";(function(a,e){const h=setInterval(()=>{document.querySelector(a)&&(clearInterval(h),e())},100)})("ytd-topbar-menu-button-renderer",function(){const a=JSON.parse(GM_getValue("ytSettingsMDCM",
"{}"));a.theme&&(document.querySelector(`input[name="theme"][value="${a.theme}"]`).checked=!0);document.getElementById("bg-color-picker").value=a.bgColorPicker||"#000000";document.getElementById("progressbar-color-picker").value=a.progressbarColorPicker||"#ff0000";document.getElementById("primary-color-picker").value=a.primaryColorPicker||"#ffffff";document.getElementById("secondary-color-picker").value=a.secondaryColorPicker||"#ffffff";document.getElementById("header-color-picker").value=a.headerColorPicker||
"#000";document.getElementById("icons-color-picker").value=a.iconsColorPicker||"#ffffff";document.getElementById("menu-color-picker").value=a.menuColorPicker||"#000";document.getElementById("line-color-picker").value=a.lineColorPicker||"#ff0000";document.getElementById("time-color-picker").value=a.timeColorPicker||"#ffffff";document.getElementById("dislikes-toggle").checked=a.dislikes||!0;document.getElementById("themes-toggle").checked=a.themes||!1;document.getElementById("translation-toggle").checked=
a.translation||!1;document.getElementById("reverse-mode-toggle").checked=a.reverseMode||!1;document.getElementById("hide-comments-toggle").checked=a.hideComments||!1;document.getElementById("hide-sidebar-toggle").checked=a.hideSidebar||!1;document.getElementById("autoplay-toggle").checked=a.disableAutoplay||!1;document.getElementById("subtitles-toggle").checked=a.disableSubtitles||!1;document.getElementById("player-size-slider").value=a.playerSize||100;document.getElementById("select-video-qualitys-select").value=
a.selectVideoQuality||"720";document.getElementById("menu-bg-color-picker").value=a.menuBgColor||"#000000";document.getElementById("menu-text-color-picker").value=a.menuTextColor||"#ffffff";A();setTimeout(()=>{t();a.dislikes&&(G(),H(),M=!0)},500)})})();
