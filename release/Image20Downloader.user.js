// ==UserScript==
// @name         Image Downloader
// @namespace       http://tampermonkey.net/
// @version         2.90
// @author          桃源隐叟-The hide oldman in taoyuan mountain
// @connect  *
// @connect  *://*/*
// @grant   GM_openInTab
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_getValue
// @grant   GM_deleteValue
// @grant   GM_xmlhttpRequest
// @grant   GM_download
// @require https://unpkg.com/hotkeys-js@3.9.4/dist/hotkeys.min.js
// @require https://cdn.bootcdn.net/ajax/libs/jszip/3.7.1/jszip.min.js
// @require https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @run-at  document-end
// @match   *://*/*
// @include *
// @match   https://www.bilibili.com/
// @match   https://588ku.com/
// @homepageURL https://github.com/taoyuancun123/modifyText/blob/master/modifyText.js
// @supportURL  https://greasyfork.org/zh-CN/scripts/419894/feedback
// @run-at      document-start
// @license GPLv3
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Image20Downloader.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Image20Downloader.meta.js
// ==/UserScript==
(function(){function P(){Object.defineProperty(HTMLImageElement.prototype,"src",{get:function(){return L.get.call(this)},set:function(e){B.includes(e)||B.push(e);L.set.call(this,e)}})}function F(){function e(){p=n;p=x.getBigImageArray(p);void 0!=GM_getValue("width-check")&&(document.querySelector(".width-check").checked=GM_getValue("width-check"));void 0!=GM_getValue("height-check")&&(document.querySelector(".height-check").checked=GM_getValue("height-check"));void 0!=GM_getValue("extra-grab-check")&&
(document.querySelector(".extra-grab-check").checked=GM_getValue("extra-grab-check"));GM_getValue("width-value-min")&&(document.querySelector(".width-value-min").value=GM_getValue("width-value-min"));GM_getValue("width-value-max")&&(document.querySelector(".width-value-max").value=GM_getValue("width-value-max"));GM_getValue("height-value-min")&&(document.querySelector(".height-value-min").value=GM_getValue("height-value-min"));GM_getValue("height-value-max")&&(document.querySelector(".height-value-max").value=
GM_getValue("height-value-max"));GM_getValue("shortCutString")&&(document.querySelector(".shortCutString").value=GM_getValue("shortCutString"));document.querySelector(".width-check").checked&&(p=p.filter(C));document.querySelector(".height-check").checked&&(p=p.filter(G));A=p;Q();y(p)}function d(){v=[];t=[];document.querySelector(".num-tip").innerText=`${h.fetchDoneTip1Type2}${t.length}/${n.length}${h.fetchDoneTip2}`;document.querySelector(".tyc-image-wrapper").innerHTML=""}function g(a){return"download-direct"==
a.className}function m(a){return"fullscreen-image"==a.className}function l(a,b){let c=[];b.forEach((f,k)=>{c.push(a[f])});return c}function y(a){a.forEach((b,c)=>{window.location.href.includes("huaban.com")&&b.includes("/webp")&&(b=b.replace(/\/webp/g,"/png"));b=`<div class="tyc-img-item-container-${c}" style="text-align:center;font-size:0px;
    margin:5px;border:1px solid #99d;border-radius:3px;
    ">
    <img class="tyc-image-preview" src="${b}"/ style="width:auto;height:200px;" data-value="${c}"></div>`;document.querySelector(".tyc-image-wrapper").insertAdjacentHTML("beforeend",b);var f=document.querySelector(`.tyc-img-item-container-${c} .tyc-image-preview`).naturalWidth,k=document.querySelector(`.tyc-img-item-container-${c} .tyc-image-preview`).naturalHeight;b=document.querySelector(`.tyc-img-item-container-${c}`);b.getBoundingClientRect();f=`
            <span style="font-size:16px;position:absolute;left:calc(50% - 80px);top:7px;">${f}X${k}</span>
            `;c=`
    <span style="position:absolute;right:calc(50% - 30px);top:2px;border:1px solid #333;
    width:26px;height:26px;border-radius:20px;" class="fullscreen-image" data-value="${c}">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16"  style="position:absolute;top:4px;right:4px;width:18px;height:18px;" data-value="${c}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
    </svg>
    </span>
    <span style="position:absolute;right:calc(50% - 60px);top:2px;border:1px solid #333;
    width:26px;height:26px;border-radius:20px;
    " class="download-direct">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style="position:absolute;top:5px;right:5px;">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>
    </span>

    `;b.insertAdjacentHTML("beforeend",'\n            <div class="tyc-image-info-container" style="font-size:0px;background-color:rgba(100,100,100,0.6);height:30px;position:relative;">\n\n\n    </div>\n            ');k=b.querySelector("div");b=parseInt(b.getBoundingClientRect().width);120<b?(k.insertAdjacentHTML("beforeend",f),k.insertAdjacentHTML("beforeend",c)):120>=b&&50<=b?(k.insertAdjacentHTML("beforeend",c),k.getElementsByClassName("fullscreen-image")[0].style.right="50%",k.getElementsByClassName("download-direct")[0].style.right=
"calc(50% - 30px)"):k.insertAdjacentHTML("beforeend",'\n            <span style="position:absolute;right:calc(50% - 15px);top:2px;border:1px solid #333;\n    width:26px;height:26px;border-radius:20px;\n    " class="download-direct">\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16" style="position:absolute;top:5px;right:5px;">\n      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>\n      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>\n    </svg>\n    </span>\n            ')})}
function C(a){let b=new Image;b.src=a;if(b.width>=parseInt(document.querySelector(".width-value-min").value)&&b.width<=parseInt(document.querySelector(".width-value-max").value))return a}function G(a){let b=new Image;b.src=a;if(b.height>=parseInt(document.querySelector(".height-value-min").value)&&b.height<=parseInt(document.querySelector(".height-value-max").value))return a}function Q(){A.forEach((a,b)=>{if(!a.includes("data:image"))try{GM_xmlhttpRequest({method:"get",url:a,headers:{referer:window.location.origin+
"/"},responseType:"blob",onload:function(c){c=c.response;let f=new FileReader;f.onloadend=function(k){k=k.target.result;k.startsWith("data:image")&&(A[b]=k)};f.readAsDataURL(c)}})}catch(c){}})}function M(a){let b=[];a.forEach((c,f)=>{c.startsWith("data:image")&&c.includes("base64")&&b.push(c)});return b}H=N[N.length-2];var q=(new Date).getTime().toString();H+=q.substring(7,q.length);try{document.querySelector(".tyc-image-container").remove()}catch{}var n=[];q=document.body.innerHTML;var t=[],I=[],
v=[],z=[],p=[],A=[];try{var E=new JSZip,O=E.folder("pics")}catch{}try{var u=document.getElementsByTagName("img");let a=document.getElementsByTagName("canvas");for(let c=0;c<u.length;c++)if(n.includes(u[c].src)||n.push(u[c].src),""!==u[c].srcset){let f=u[c].srcset.split(","),k=f[0].match(/\S+/gi)[0];for(let w=0;w<f.length-1;w++)if(parseInt(f[w].match(/\S+/gi)[1])>parseInt(f[w+1].match(/\S+/gi)[1])){k=f[w].match(/\S+/gi)[0];break}else k=f[w+1].match(/\S+/gi)[0];n.includes(k)||n.push(k)}for(u=0;u<B.length;u++)n.includes(B[u])||
n.push(B[u]);var r=q.match(/(?<=background-image:\s*url\()(\S+)(?=\))/g);try{for(q=0;q<r.length;q++)r[q].includes("&quot;")?n.push(r[q].replace(/&quot;/g,"")):r[q].includes("'")&&n.push(r[q].replace(/'/g,""))}catch(c){console.log(c)}if(window.location.href.includes("hathitrust.org")){let c=document.querySelectorAll(".image img");if(0<c.length){let f=document.createElement("canvas");n=[];for(r=0;r<c.length;r++)f.width=c[r].width,f.height=c[r].height,f.getContext("2d").drawImage(c[r],0,0),n.push(f.toDataURL("image/png"));
document.querySelector(".select-all").style="position:relative;width:15px;height:15px;"}}window.location.href.toString().includes("manga.bilibili.com/")&&null==document.getElementById("tyc-insert-iframe")&&(document.body.insertAdjacentHTML("afterbegin",'<iframe style="display:none;" id="tyc-insert-iframe"></iframe>'),document.getElementById("tyc-insert-iframe").contentDocument.body.insertAdjacentHTML("afterbegin",'<canvas id="tyc-insert-canvas"></canvas>'),document.body.getElementsByTagName("canvas")[0].__proto__.toBlob=
document.getElementById("tyc-insert-iframe").contentDocument.getElementById("tyc-insert-canvas").__proto__.toBlob);let b=n.length;if(0<a.length){var J=0;for(let c=0;c<a.length;c++){a[c].toBlob(f);function f(k){let w=new FileReader;w.onloadend=function(D){D=D.target.result;D.includes("data:image")&&(n.includes(D)||(n[b+c]=D),J++,document.querySelector(".num-tip").innerText=`${h.fetchCount1} ${J}/${a.length} ${h.fetchCount2}`,J===a.length&&(d(),e()))};w.readAsDataURL(k)}}}}catch(a){console.log(a)}document.body.insertAdjacentHTML("afterbegin",
`<style>
        .tyc-image-container{
            color:black;
            position:fixed;
            top:0px;
            left:10%;
            width:80vw;
            z-index:2147483645;
            background-color: #dedede;
            border: 1px solid #aaa;
            overflow:scroll;height:100%;
        }

        .tyc-image-container button{
            border:1px solid #aaa;
            border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }

        .tyc-image-container button:hover{
            background-color: #f50;
            color: #fff;
        }

        .control-section{
            width:80vw;
            z-index:2147483646;
            position:fixed;
            top:0px;
            left:10%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height:40px;
            background:#eee;border:1px solid #aaa;border-radius:2px;
        }

        .control-section-sub{
            display: flex;
            margin-bottom: 5px;
        }

        .tyc-normal-section{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: normal;
            justify-content: flex-start;
            font-size:10px;
        }

        .tyc-normal-section *{
            padding-top:2px;
        }

        .btn-download{
            border:1px solid #aaa;border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }
        .btn-zipDownload{
            border:1px solid #aaa;border-radius:5px;
            height:32px;line-height:32px;
            margin:0px;padding:0 5px;
        }
        .btn-close{
            font-size:20px;position:absolute;
            right:30px;top:4px;
            height:32px;line-height:32px;
            margin:0px;
            border-radius:10px;border:1px solid #aaa;
            width:30px;
        }

        .tyc-image-wrapper{
            margin-top:82px;display:flex;justify-content:center;
            align-items:center;flex-wrap:wrap;
        }

        .tyc-input-checkbox{
            background-color: initial;
            cursor: default;
            appearance: auto;
            box-sizing: border-box;
            margin: 3px 3px 3px 4px;
            padding: initial;
            border: initial;
        }

        .tyc-extend-set{
            padding: 10px;
            border-top: 1px solid rgba(100,100,100,0.1);
        }

        .tyc-extend-set{
            display: none;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            padding: 5px;
            width: auto;
        }

        .tyc-extend-set-container{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            border: 1px solid rgba(100,100,100,0.5);
            padding: 5px;
            margin-bottom: 5px;
        }

        .tyc-autobigimg-set{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            border: 1px solid rgba(100,100,100,0.5);
            padding: 5px;
        }

        .tyc-set-domain{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: nowrap;
            align-content: normal;
            margin: 5px;
            padding: 5px;
            border: 1px solid rgba(100,100,100,0.3);
            width: 95%;
            max-height: 150px;
            overflow: scroll;
        }

        .tyc-abi-title{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }

        .tyc-abi-domain-title{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 95%;
            border-bottom: 1px solid #ddd;
        }
        .tyc-set-replacerule{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 3px;
            flex-wrap: wrap;
        }

        .tyc-set-replacerule *,.tyc-set-replacerule button{
            margin-left: 5px;
        }

        .tyc-set-domain-default{
            height: 200px;
            overflow: scroll;
            display: none;
        }
    </style>
    <div class="tyc-image-container">
        <div class="control-section">
            <div class="control-section-sub tyc-normal-section">
                <input class="select-all tyc-input-checkbox" type="checkbox" name="select-all" value="select-all">${h.selectAll}
                <button class="btn-download" style="margin-left:5px;">${h.downloadBtn}</button>
                <button class="btn-zipDownload" style="margin-left:5px;">${h.zipDownloadBtn}</button>
                <span style="margin-left:10px;" class="num-tip">${h.fetchDoneTip1}${n.length}${h.fetchDoneTip2}</span>
                <input type="text" class="tyc-file-name" style="height:15px;width:80px;margin-left:25px;font-size:10px;" value="${H}">
                <input type="text" class="shortCutString" style="height:15px;width:80px;margin-left:25px;font-size:10px;" value="${K}">-ShortCut
                <button cstyle="margin-left:10px;" class="btn-close" >X</button>
            </div>


            <div style="line-height:12px;" class="control-section-sub tyc-normal-section">
                <div style="float:left;display:block;">
                <input type="checkbox" class="width-check img-check tyc-input-checkbox" name="width-check" value="width-check">Width:
                <input type="text" class="width-value-min" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="0">-
                    <input type="text" class="width-value-max" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="3000">
                </div>

                <div style="float:left;margin-left:30px;display:block;">
                    <input type="checkbox" class="height-check img-check tyc-input-checkbox" name="height-check" value="height-check">Height:
                    <input type="text" class="height-value-min" size="1" style="height:15px;width:50px;"
                        min="0" max="9999" value="0">-
                        <input type="text" class="height-value-max" size="1" style="height:15px;width:50px;"
                        min="0" max="9999" value="3000">
                </div>

                <div style="float:left;margin-left:30px;display:block;" class="tyc-extra-grab">
                    <input type="checkbox" class="extra-grab-check img-check tyc-input-checkbox" name="extra-grab-check" value="extra-grab-check">
                    <span>${h.extraGrab}</span>
                </div>

                <div style="float:left;margin-left:30px;display:block;" class="tyc-download-url">
                    <button class="tyc-download-url-btn">${h.downloadUrlFile}</button>
                </div>


                <div style="float:left;margin-left:30px;display:block;" class="tyc-extend-btn">
                    <span>${h.moreSetting} </span>
                    <span style="top: 3px;position: relative;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="tyc-extend-set control-section-sub">
                <div class="tyc-autobigimg-set tyc-extend-set-container">
                    <div class="tyc-abi-title">
                        <div>
                            ${h.autoBitImgModule}
                        </div>
                        <div>
                            <button class="tyc-default-rule-show">${h.defaultSettingRule}</button>
                        </div>

                        <div>
                        <button>${h.exportCustomRule}</button>
                    </div>

                        <div>
                            <input type="file" id="tycfileElem" multiple accept="text/plain" style="display:none">
                            <button id="tyc-file-select">${h.importCustomRule}</button>
                        </div>

                    </div>
                    <div class="tyc-set-domain tyc-set-domain-custom">
                    </div>
                    <div class="tyc-set-domain tyc-set-domain-default">
                    </div>
                </div>

            </div>
        </div>
        <div class="tyc-image-wrapper" >
        </div>
    </div>`);x.showDefaultRules();x.showRules("tyc-set-domain-custom","userRules","userRulesChecked","tyc-custom-active");document.querySelector(".tyc-image-wrapper").style=`margin-top:${document.querySelector(".control-section").clientHeight}px`;document.body.onclick=a=>{var b=a.path||a.composedPath&&a.composedPath();if("IMG"==a.target.nodeName&&"tyc-image-preview"===a.target.className){var c=b.find(k=>"tyc-image-preview"===k.classList[0]);let f=parseInt(c.dataset.value);b=b.find(k=>k.className===
`tyc-img-item-container-${f}`);c=b.getElementsByClassName("tyc-image-info-container")[0];t.includes(f)?(t.splice(t.indexOf(f),1),b.style.border="1px solid #99d",c.style.backgroundColor="rgba(100,100,100,0.6)"):(t.push(f),b.style.border="1px solid #f50",c.style.backgroundColor="rgba(88, 158, 255, 0.8)");I=t;document.querySelector(".num-tip").innerText=`${h.fetchDoneTip1Type2}${t.length}/${n.length}${h.fetchDoneTip2}`;v=l(p,t);z=l(A,I);z=M(z)}else if("show-big-image"===a.target.parentElement.className)try{document.querySelector(".show-big-image").remove()}catch{}else if("bi-download"==
a.target.classList[1]||void 0!=b.find(g))b=b.find(f=>{try{return f.className.includes("tyc-img-item-container")}catch{}}).getElementsByTagName("img")[0].src,0<b.indexOf("/")&&b.substring(b.lastIndexOf("/")+1,b.lastIndexOf(".")),c=document.querySelector(".tyc-file-name").value||"pic",saveAs(b,c);else if("bi-arrows-fullscreen"==a.target.classList[1]||void 0!=b.find(m)){b=b.find(f=>{try{return f.className.includes("tyc-img-item-container")}catch{}}).getElementsByTagName("img")[0].src;try{c=document.querySelector(".show-big-image");
if(c.getElementsByTagName("img")[0].src===b){c.remove();return}c.remove()}catch{}document.body.insertAdjacentHTML("beforeend",'\n        <div class="show-big-image" style="position:fixed;left:30%;top:30%;z-index:2147483647;">\n        </div>\n    ');b=`<img src="${b}"/>`;document.querySelector(".show-big-image").insertAdjacentHTML("beforeend",b);b=document.querySelector(".show-big-image img");c=(window.innerWidth-b.width)/2;a=(window.innerHeight-b.height)/2;document.querySelector(".show-big-image").style.left=
c+"px";document.querySelector(".show-big-image").style.top=a+"px";if(b.width>window.innerWidth||b.height>window.innerHeight)document.querySelector(".show-big-image").style.overflow="scroll",b.width>window.innerWidth&&(document.querySelector(".show-big-image").style.left="0px",document.querySelector(".show-big-image").style.width=window.innerWidth+"px"),b.height>window.innerHeight&&(document.querySelector(".show-big-image").style.top="0px",document.querySelector(".show-big-image").style.height=window.innerHeight+
"px")}};document.querySelector(".btn-close").onclick=a=>{document.querySelector(".tyc-image-container").remove()};document.querySelector(".btn-download").onclick=async a=>{if(1<=v.length){function b(){return new Promise((c,f)=>{setTimeout(()=>{c(1)},200)})}for(a=0;a<v.length;a++){await b();let c=document.querySelector(".tyc-file-name").value||"pic";console.log(`${c}-${a}`);saveAs(v[a],`${c}-${a}`)}}else alert(`${h.selectAlert}`)};document.querySelector(".btn-zipDownload").onclick=a=>{try{1<=z.length?
(z.forEach(async(b,c)=>{let f=b.substring(b.indexOf("image/")+6,b.indexOf(";"));f=f.includes("svg")?"svg":f;let k=document.querySelector(".tyc-file-name").value||"pic";O.file(`${k}-${c}.${f}`,b.split(",")[1],{base64:!0})}),E.generateAsync({type:"blob"}).then(function(b){let c=document.querySelector(".tyc-file-name").value||"pic";saveAs(b,`${c}.zip`);E.remove("pics");O=E.folder("pics")})):alert(`${h.selectAlert}`)}catch(b){}};document.body.onchange=a=>{a.target.className.includes("width-check")&&GM_setValue("width-check",
a.target.checked);a.target.className.includes("height-check")&&GM_setValue("height-check",a.target.checked);a.target.className.includes("extra-grab-check")&&(GM_setValue("extra-grab-check",a.target.checked),document.querySelector(".extra-grab-check"));if(a.target.className.includes("tyc-default-active"))x.oncheckChange();if(a.target.className.includes("tyc-custom-active"))x.oncheckChangeCustom();"INPUT"===a.target.nodeName&&"text"===a.target.type&&a.target.className.includes("value")&&GM_setValue(a.target.className,
a.target.value);"INPUT"===a.target.nodeName&&"text"===a.target.type&&a.target.className.includes("shortCutString")&&(GM_setValue(a.target.className,a.target.value),hotkeys(a.target.value,F));(a.target.className.includes("width-check")||a.target.className.includes("height-check")||"INPUT"===a.target.nodeName&&"text"===a.target.type&&a.target.className.includes("value"))&&(d(),e())};document.querySelector(".select-all").onchange=a=>{document.querySelector(".select-all").checked?(v=p,z=M(A)):(v=l(p,
t),z=l(A,I));document.querySelector(".num-tip").innerText=`${h.fetchDoneTip1Type2}${v.length}/${p.length}${h.fetchDoneTip2}`};document.querySelector(".tyc-extend-btn").onclick=a=>{document.querySelector(".tyc-extend-btn").classList.contains("extend-open")?(document.querySelector(".tyc-extend-btn").classList.remove("extend-open"),document.querySelector(".tyc-extend-set").style.display="none",document.querySelector(".tyc-extend-btn").style.color="black",document.querySelector(".tyc-extend-btn").innerHTML=
`<span>${h.moreSetting}</span>
                <span style="top: 3px;position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span> `):(document.querySelector(".tyc-extend-btn").classList.add("extend-open"),document.querySelector(".tyc-extend-set").style.display="flex",document.querySelector(".tyc-extend-btn").style.color="#f50",document.querySelector(".tyc-extend-btn").innerHTML=`<span>${h.fold} </span>
                <span style="top: 3px;position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </span> `)};document.querySelector(".tyc-default-rule-show").onclick=x.onclickShowDefaultBtn;document.querySelector("#tyc-file-select").onclick=a=>{document.querySelector("#tycfileElem").click()};document.querySelector("#tycfileElem").onchange=x.getCustomRules;document.querySelector(".tyc-download-url-btn").onclick=a=>{a=new Blob([v.join("\n")],{type:"text/plain",endings:"native"});saveAs(a,"urls.txt")};e()}var R={selectAll:"\u5168\u9009",downloadBtn:"\u4e0b\u8f7d",downloadMenuText:"\u6253\u5f00\u811a\u672c(Alt+w)",
zipDownloadBtn:"zip\u4e0b\u8f7d",selectAlert:"\u8bf7\u81f3\u5c11\u9009\u4e2d\u4e00\u5f20\u56fe\u7247\u3002",fetchTip:"\u51c6\u5907\u6293\u53d6canvas\u56fe\u7247",fetchCount1:"\u6293\u53d6canvas\u56fe\u7247\u7b2c",fetchCount2:"\u5f20",fetchDoneTip1:"\u5df2\u9009(0/",fetchDoneTip1Type2:"\u5df2\u9009(",fetchDoneTip2:")\u5f20\u56fe\u7247",regRulePlace:"\u8f93\u5165\u5f85\u66ff\u6362\u6b63\u5219",regReplacePlace:"\u8f93\u5165\u66ff\u6362\u5b83\u7684\u5b57\u7b26\u4e32\u6216\u8005\u51fd\u6570",zipOptionDesc:"\u52fe\u9009\u4f7f\u7528zip\u4e0b\u8f7d\u540e\uff0c\u4f1a\u8bf7\u6c42\u8de8\u57df\u6743\u9650\uff0c\u5426\u5219zip\u4e0b\u8f7d\u57fa\u672c\u4e0b\u8f7d\u4e0d\u5230\u56fe\u7247\u3002",
zipCheckText:"\u4f7f\u7528zip\u4e0b\u8f7d",downloadUrlFile:"\u4e0b\u8f7d\u56fe\u7247\u5730\u5740",moreSetting:"\u66f4\u591a\u8bbe\u7f6e",autoBitImgModule:"\u81ea\u52a8\u5927\u56fe\u8bbe\u7f6e\u6a21\u5757",defaultSettingRule:"\u8bbe\u7f6e\u9ed8\u8ba4\u89c4\u5219",exportCustomRule:"\u5bfc\u51fa\u81ea\u5b9a\u89c4\u5219",importCustomRule:"\u5bfc\u5165\u81ea\u5b9a\u89c4\u5219",fold:"\u6536\u8d77",inputFilenameTip:"\u8f93\u5165\u6587\u4ef6\u540d",extraGrab:"\u5f3a\u529b\u6293\u53d6"},S={selectAll:"selectAll",
downloadBtn:"download",downloadMenuText:"Open(Alt+w)",zipDownloadBtn:"zip Download",selectAlert:"Please at last select one image.",fetchTip:"Ready to fetch canvas image.",fetchCount1:"Fetch the",fetchCount2:" canvas image.",fetchDoneTip1:"(0/",fetchDoneTip1Type2:"(",fetchDoneTip2:") Images selected",regRulePlace:"enter reg express",regReplacePlace:"enter replace string or function",zipOptionDesc:"when zip option checked,will request cors right,otherwise zipDownload can not get pics",zipCheckText:"Use ZipDownload",
downloadUrlFile:"Download Imgs Url",moreSetting:"More Setting",autoBitImgModule:"AutoBigImageModule",defaultSettingRule:"SetDefaultRule",exportCustomRule:"exportCustomRule",importCustomRule:"importCustomRule",fold:"fold",inputFilenameTip:"input filename",extraGrab:"Extra Grab"};var h=("Netscape"==navigator.appName?navigator.language:navigator.userLanguage).toLowerCase().includes("zh-")?R:S;const x={bigImageArray:[],defaultRules:[{originReg:/(?<=(.+sinaimg\.(?:cn|com)\/))([\w\.]+)(?=(\/.+))/i,replacement:"large",
tip:"for weib.com"},{originReg:/(?<=(.+alicdn\.(?:cn|com)\/.+\.(jpg|jpeg|gif|png|bmp|webp)))_.+/i,replacement:"",tip:"for alibaba web"},{originReg:/(.+alicdn\.(?:cn|com)\/.+)(\.\d+x\d+)(\.(jpg|jpeg|gif|png|bmp|webp)).*/i,replacement:(e,d,g,m)=>d+m,tip:"for 1688"},{originReg:/(?<=(.+360buyimg\.(?:cn|com)\/))(\w+\/)(?=(.+\.(jpg|jpeg|gif|png|bmp|webp)))/i,replacement:"n0/",tip:"for jd"},{originReg:/(?<=(.+hdslb\.(?:cn|com)\/.+\.(jpg|jpeg|gif|png|bmp|webp)))@.+/i,replacement:"",tip:"for bilibili"},{originReg:/th(\.wallhaven\.cc\/)(?!full).+\/(\w{2}\/)([\w\.]+)(\.jpg)/i,
replacement:(e,d,g,m)=>"w"+d+"full/"+g+"wallhaven-"+m+".jpg",tip:"for wallhaven"},{originReg:/th(\.wallhaven\.cc\/)(?!full).+\/(\w{2}\/)([\w\.]+)(\.jpg)/i,replacement:(e,d,g,m)=>"w"+d+"full/"+g+"wallhaven-"+m+".png",tip:"for wallhaven"},{originReg:/(.*\.twimg\.\w+\/.+&name=*)(.*)/i,replacement:(e,d,g,m)=>d+"orig",tip:"for twitter"},{originReg:/(shonenjump\.com\/.*\/)poster_thumb(\/.*)/,replacement:"$1poster$2",tip:"for www.shonenjump.com"},{originReg:/(qzone\.qq\.com.*!!\/.*)$/,replacement:"$1/0",
tip:"for Qzone"},{originReg:/(.*wordpress\.com.*)(\?w=\d+)$/,replacement:"$1",tip:"for wordpress"}],defaultRulesChecked:[],userRules:[],userRulesChecked:[],replace(e){let d=this;d.bigImageArray=[];e=Array.from(new Set(e)).filter(g=>g&&g);d.setRulesChecked();e.forEach(function(g,m){g.includes("data:image/")?d.bigImageArray.push(g):(d.defaultRules.forEach((l,y)=>{"checked"!==d.defaultRulesChecked[y]?d.bigImageArray.push(g):(l=g.replace(l.originReg,l.replacement),l!==g?(d.bigImageArray.push(g),d.bigImageArray.push(l)):
d.bigImageArray.push(g))}),d.userRules.forEach((l,y)=>{"checked"!==d.userRulesChecked[y]?d.bigImageArray.push(g):(l=g.replace(l.originReg,l.replacement),l!==g?(d.bigImageArray.push(g),d.bigImageArray.push(l)):d.bigImageArray.push(g))}))})},getBigImageArray(e){this.replace(e);return Array.from(new Set(this.bigImageArray))},showDefaultRules(){let e=this,d=document.body.querySelector(".tyc-set-domain-default");e.setRulesChecked();this.defaultRules.forEach((g,m)=>{d.insertAdjacentHTML("beforeend",`<div class="tyc-set-replacerule">
                            <input type="checkbox" name="active" class="tyc-default-active" ${e.defaultRulesChecked[m]}>
                            <input type="text" name="regrule" placeholder="${h.regRulePlace}" class="tyc-search-title" value="${g.originReg}">
                            <input type="text" name="replace" placeholder="${h.regReplacePlace}" class="tyc-search-url" value="${g.replacement}">
                            <span class="tyc-default-tip">${g.tip}</span>
                    </div>
                `)})},showRules(e,d,g,m){let l=this,y=document.body.querySelector("."+e);l.setRulesChecked();l.setCustomRules();l[d].forEach((C,G)=>{y.insertAdjacentHTML("beforeend",`<div class="tyc-set-replacerule">
                            <input type="checkbox" name="active" class="${m}" ${l[g][G]}>
                            <input type="text" name="regrule" placeholder="${h.regRulePlace}" class="tyc-search-title" value="${C.originReg}">
                            <input type="text" name="replace" placeholder="${h.regReplacePlace}" class="tyc-search-url" value="${C.replacement}">
                            <span class="tyc-default-tip">${C.tip}</span>
                    </div>
                `)})},onclickShowDefaultBtn(){let e=document.body.querySelector(".tyc-set-domain-default");e.style.display="none"===e.style.display||""===e.style.display?"flex":"none"},oncheckChange(){let e=document.body.querySelectorAll(".tyc-default-active");this.defaultRulesChecked=[];e.forEach((d,g)=>{d.checked?this.defaultRulesChecked.push("checked"):this.defaultRulesChecked.push("")});GM_setValue("defaultRulesChecked",this.defaultRulesChecked)},oncheckChangeCustom(){let e=document.body.querySelectorAll(".tyc-custom-active");
this.userRulesChecked=[];e.forEach((d,g)=>{d.checked?this.userRulesChecked.push("checked"):this.userRulesChecked.push("")});GM_setValue("userRulesChecked",this.userRulesChecked)},setRulesChecked(){if(GM_getValue("defaultRulesChecked")){if(this.defaultRulesChecked=GM_getValue("defaultRulesChecked"),this.defaultRulesChecked.length<this.defaultRules.length){let e=this.defaultRules.length-this.defaultRulesChecked.length;for(let d=0;d<e;d++)this.defaultRulesChecked.push("checked")}}else this.defaultRules.forEach(e=>
{this.defaultRulesChecked.push("checked")}),GM_setValue("defaultRulesChecked",this.defaultRulesChecked);GM_getValue("userRulesChecked")&&0<GM_getValue("userRulesChecked").length?this.userRulesChecked=GM_getValue("userRulesChecked"):(this.userRules.forEach(e=>{this.userRulesChecked.push("checked")}),GM_setValue("userRulesChecked",this.userRulesChecked))},getCustomRules(e){let d=x;e=document.querySelector("#tycfileElem").files[0];let g=new FileReader;g.onload=m=>{m=m.target.result;d.userRules=eval(m);
GM_deleteValue("userRulesChecked");d.setRulesChecked();GM_setValue("userRules",m);document.body.querySelector(".tyc-set-domain-custom").innerHTML="";d.showRules("tyc-set-domain-custom","userRules","userRulesChecked","tyc-custom-active")};g.readAsText(e,"GB2312")},setCustomRules(){if(GM_getValue("userRules"))try{this.userRules=eval(GM_getValue("userRules"))}catch(e){GM_setValue("userRules","")}},exportCustomRules(){}};var B=[];let L=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,"src");
var N=document.domain.split("."),H,K="alt+W";void 0!=GM_getValue("shortCutString")&&(K=GM_getValue("shortCutString"));GM_registerMenuCommand(h.downloadMenuText,F);hotkeys(K,function(){if(null!=document.querySelector(".tyc-image-container"))try{document.querySelector(".tyc-image-container").remove()}catch{}else F()});GM_getValue("extra-grab-check")&&P()})();
