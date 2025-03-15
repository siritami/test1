// ==UserScript==
// @name         SearchJumper
// @namespace    hoothin
// @version      1.9.33
// @author       hoothin
// @license      MPL-2.0
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAD+/v7////+/v7+/v7////+/v79/f3////////+/v7////////////+/v79/f3////+/v7/rP8zMzP/2f/R0dHAwMD/zf+vr69ZWVlKSkry8vL/vv/+5/7r6+uRkZGcnJx8fHxwcHD+7/7f39+kpKTMxXKjAAAAEXRSTlMA4wrL9ICvkxk56nVVI9WgZNxdEUkAAAE2SURBVDjLfdPZloMgDAZgFtHR2uU3LnWrXd//FUfIHKRT7XfhUYIkhINYqPyoM0SZTnIlPu2PEbwo2f8LqwTvIvMW/9H4oH+WeCqxQu79/xKr5N8aSmOD5gkGm3YuQYRNkU3CG+ynCYH6VsEycwW8wJXoDK8narlOIXI4Z6IKi47ucNI5A6vCOC41mBEaX8VCAuVQFEXzQODRzENDaVsRoSwYAgUrIecJI38MCAw8NkLaFCibphyDMusKox0DoJci+6615fcA2q5fikz8b/QC0HWuKTX8NnM/wbWSyL86qW01u1D3xEQ04dLSE0z6w3ILz9rWPq/hefslUN3uL+B6v/kKMiVmO2w6CSfGhqNg6oBVWvlbxTO+XAy1kiVWInTK8EZyfQFlZBDeKbEiNfFBSh2bNBj8BZ8mNsZysMSsAAAAAElFTkSuQmCC
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM.deleteValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @grant        GM.openInTab
// @grant        GM_openInTab
// @grant        GM.info
// @grant        GM_info
// @grant        unsafeWindow
// @compatible   edge tested with tm
// @compatible   Chrome tested with tm
// @compatible   Firefox tested with tm
// @compatible   Opera untested
// @compatible   Safari untested
// @compatible   ios tested with userscript
// @compatible   android tested with kiwi
// @supportURL   https://github.com/hoothin/SearchJumper/issues
// @homepage     https://github.com/hoothin/SearchJumper
// @require      https://update.greasyfork.org/scripts/484118/searchJumperDefaultConfig.js
// @connect      global.bing.com
// @connect      suggestqueries.google.com
// @connect      api.bing.com
// @connect      suggestion.baidu.com
// @connect      webdav.hoothin.com
// @connect      search.hoothin.com
// @connect      *
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/SearchJumper.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/SearchJumper.meta.js
// ==/UserScript==
(async function(){function Lc(){var eb,Pb,kc;function C(a,b){return kb[a]?b?kb[a].replace(/#t#/g,b).replace(/#t1#/g,b[0]).replace(/#t2#/g,b[1]):kb[a]:a}function ba(a=""){return lc?lc.createHTML(a):a}async function Qb(a,b){if(!za){var d=await O.getItem("searchData");d&&(l=d);if(!lb)return a&&a();if(!b&&((b=await lb.read("lastModified"))&&(b=parseFloat(b)),b&&(!l.lastModified||b>l.lastModified))){l.lastModified=b;Ab=l.lastModified;if(b=await lb.read("sitesConfig.json"))try{b=JSON.parse(b),l.sitesConfig=
b}catch(c){oa(c)}if(b=await lb.read("inPageRule.json"))try{b=JSON.parse(b),l.prefConfig.inPageRule=b}catch(c){oa(c)}}a&&a();await lb.write("lastModified",""+l.lastModified);await lb.write("sitesConfig.json",JSON.stringify(l.sitesConfig));await lb.write("inPageRule.json",JSON.stringify(l.prefConfig.inPageRule))}}function R(a){return a.body||a.querySelector("body")}function rb(a){return 0===a.type.indexOf("touch")?a.changedTouches?a.changedTouches[0].clientX:0:a.clientX}function sb(a){return 0===a.type.indexOf("touch")?
a.changedTouches?a.changedTouches[0].clientY:0:a.clientY}function kd(a){return 0===a.type.indexOf("touch")?a.changedTouches?a.changedTouches[0].pageX:0:a.pageX}function ld(a){return 0===a.type.indexOf("touch")?a.changedTouches?a.changedTouches[0].pageY:0:a.pageY}function md(a,b,d){d=d||document;b=b||d;try{let c=(g,e,h)=>{g=e.evaluate(g,h,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return g.singleNodeValue&&1===g.singleNodeValue.nodeType&&g.singleNodeValue},f=a.split(" =>> ");if(2===f.length){let g=
c(f[0],d,b);if(g&&g.shadowRoot)return c(f[1],g.shadowRoot,g.shadowRoot)}else return c(a,d,b)}catch(c){return oa(`Invalid xpath: ${a}`),!1}}function Mc(a){return a?/^\(*(descendant::|\.\/|\/\/|id\()/.test(a):!1}function mc(a,b,d){b||=document;try{if(!Mc(a))return b.querySelectorAll(a)}catch(e){oa(e,"Error selector")}var c=b||document;b=[];try{var f=c.evaluate(a,d||c,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(d=0;d<f.snapshotLength;d++){var g=f.snapshotItem(d);1===g.nodeType&&b.push(g)}}catch(e){oa(`Invalid xpath: ${a}`)}return b}
function xb(a,b){b||=document;try{if(!Mc(a)){let d=a.split(" =>> ");if(2===d.length){let c=b.querySelector(d[0]);return c&&c.shadowRoot&&c.shadowRoot.querySelector(d[1])}return b.querySelector(a)}}catch(d){oa(d)}return md(a,b,b)}function nd(a,b){var d=a.offsetTop;for(a=a.offsetParent;a;)d+=a.offsetTop,a=a.offsetParent;if(b){for(a=b;a;)d+=a.offsetTop,a=a.offsetParent;try{let c=b.contentWindow.parent;for(b=c.frameElement;b;){for(a=b;a;)d+=a.offsetTop,a=a.offsetParent;c=c.parent;b=c.frameElement}}catch(c){}}return d}
function nc(a){return(a=a.activeElement)?a.shadowRoot?nc(a.shadowRoot):a:null}function Nc(a){if(a&&(/INPUT|TEXTAREA/i.test(a.nodeName)&&"true"!=a.getAttribute("aria-readonly")||"true"==a.contentEditable))return!0;for(;a&&a.nodeName;){if("true"==a.contentEditable)return!0;if("BODY"==a.nodeName.toUpperCase())break;a=a.parentNode}return!1}function Bb(a){a=nc(a);return Nc(a)}async function od(a){for(;document.hidden;)await Ma(500);var b=100,d=function(){--b;var c=document.createElement("canvas");c.width=
20;c.height=20;c=c.getContext("2d",{willReadFrequently:!0});c.fillStyle="rgba(0,0,0,1.0)";c.fillRect(0,0,20,20);c.font="16pt FontAwesome";c.textAlign="center";c.fillStyle="rgba(255,255,255,1.0)";c.fillText("\uf0c8",10,18);var f=c.getImageData(2,10,1,1).data;0==f[0]&&0==f[1]&&0==f[2]?(c.font='16pt "Font Awesome 6 Free"',c.fillText("\uf0c8",10,18),f=c.getImageData(2,10,1,1).data,0==f[0]&&0==f[1]&&0==f[2]?0<b&&setTimeout(d,150):"function"===typeof a&&a()):"function"===typeof a&&a()};setTimeout(d,100)}
function pd(a,b,d){function c(k){return k&15?k&15:!1}function f(k){return c(k)?k&983040?30:29:0}function g(k){let p=0;for(let v=32768;8<v;v>>=1)p+=k&v?30:29;c(k)&&(p+=f(k));return p}function e(k){let p=[];for(let v=32768;8<v;v>>=1)p.push(k&v?30:29);c(k)&&p.splice(c(k),0,f(k));return p}a||b||d||(d=new Date,d.getFullYear(),d.getMonth(),d.getDate(),a=d.getFullYear(),b=d.getMonth()+1,d=d.getDate());let h=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,
86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,
54560];return function(k,p,v){k=(Date.UTC(k,p-1,v)-Date.UTC(2E3,1,5))/864E5+1;let q;for(p=0;p<h.length;p++)if(k-=g(h[p]),0>=k){var n=2E3+p;var m=h[p];k+=g(m);break}if(!m)return null;for(p=0;p<e(m).length;p++)if(k-=e(m)[p],0>=k){q=c(m)&&c(m)<=p?c(m)<p?p:c(m)===p?"\u95f0"+p:p+1:p+1;k+=e(m)[p];break}q=c(m)&&"string"===typeof q&&-1<q.indexOf("\u95f0")?`\u95f0${"\u6b63\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u51ac\u81d8"[/\d/.exec(q)-1]}`:"\u6b63\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u51ac\u81d8"[q-
1];m=(n-3)%10;0===m&&(m=10);m="\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678"[m-1];n=(n-3)%12;0===n&&(n=12);n--;n=m+("\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5"[n]+` (${"\u9f20\u725b\u864e\u5154\u9f8d\u86c7\u99ac\u7f8a\u7334\u96de\u72d7\u8c6c"[n]}) `);11>k?k=`${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[10]}${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[k-1]}`:10<k&&20>k?k=`${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[9]}${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[k-
11]}`:20===k?k=`${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[1]}${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[9]}`:20<k&&30>k?k=`${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[11]}${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[k-21]}`:30===k&&(k=`${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[2]}${"\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u521d\u5eff"[9]}`);
return{lunarYear:n,lunarMonth:q,lunarDay:k}}(a,b,d)}function qd(a){if(D){var b=a||{key:"Enter",keyCode:13,bubbles:!0},d=new KeyboardEvent("keydown",b);D.dispatchEvent(d);d=new KeyboardEvent("keyup",b);D.dispatchEvent(d);d=new KeyboardEvent("keypress",b);D.dispatchEvent(d);oa(D,`press ${a||"Enter"}`)}}async function Rb(a){return new Promise(b=>{let d=setInterval(()=>{let c;c=a?"@"===a?D:xb(a):"complete"===document.readyState;if(!1===c)return null;c&&(clearInterval(d),b(c))},100)})}async function rd(a){return a?
new Promise(b=>{let d=setInterval(()=>{xb(a)||(clearInterval(d),b(null))},100)}):null}async function Oc(a,b){if(!a)return!0;D=a;var d=new FocusEvent("focusin",{bubbles:!0});a.dispatchEvent(d);d=new Event("focus",{bubbles:!0});a.dispatchEvent(d);var c=window.getSelection();d=c.rangeCount?c.getRangeAt(0):new Range;d.selectNode(a);c.removeAllRanges();c.addRange(d);await Ma(1);"file"!==a.type&&a.click&&a.click();c=a.value;if("file"==a.type)0==b.indexOf("data:")?b=Pc(b):(b=new Blob([b],{type:"text/plain"}),
b=new File([b],"noname.txt",{type:b.type})),d=new DataTransfer,d.items.add(b),a.files=d.files;else if(/INPUT/i.test(a.nodeName))Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(a,b);else if(/SELECT/i.test(a.nodeName))Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set.call(a,b);else if("TEXTAREA"==a.nodeName.toUpperCase())Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set.call(a,b);else{for(d=a;d&&"true"!==
d.contentEditable;)d=d.parentNode;d?(d.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:b})),await Ma(1),a.innerText!==b&&(a.innerHTML=ba(b))):(d=b,0==d.indexOf("data:")?d=Pc(d):(b=new Blob([d],{type:"text/plain"}),d=new File([b],"noname.txt",{type:b.type})),b=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer}),b.clipboardData.items.add(d),a.dispatchEvent(b))}d=new Event("input",{bubbles:!0});(b=a._valueTracker)&&b.setValue(c);a.dispatchEvent(d);
d=new Event("change",{bubbles:!0});a.dispatchEvent(d);oa(a,"input")}async function Cb(a,b=-1){mb=!1;if(0<=b){0===b&&await Rb(a);let d=mc(a);if(0===d.length)return!0;if(1===d.length)a=d[0],mb=!0;else{if(d.length<=b)return!0;a=d[b];d.length===b+1&&(mb=!0)}}else if(a=await Rb(a),!a)return!0;return a}async function sd(a,b,d=-1){a=await Cb(a,d);if(!0===a)return!0;await Oc(a,b);return mb}async function Qc(a,b=-1){let d=await Cb(a,b);if(!0===d)return!0;D=d;if(!PointerEvent)return d.click();b={isTrusted:!0,
altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};d.focus();var c=new PointerEvent("mouseover",b);d.dispatchEvent(c);c=new PointerEvent("pointerover",b);d.dispatchEvent(c);c=new PointerEvent("mousedown",b);d.dispatchEvent(c);
c=new PointerEvent("pointerdown",b);d.dispatchEvent(c);c=new PointerEvent("mouseup",b);d.dispatchEvent(c);c=new PointerEvent("pointerup",b);d.dispatchEvent(c);b=(f,g)=>{let e;try{e=document.createEvent("TouchEvent"),e.initTouchEvent(g,!0,!0)}catch(h){try{e=document.createEvent("UIEvent"),e.initUIEvent(g,!0,!0)}catch(k){e=document.createEvent("Event"),e.initEvent(g,!0,!0)}}try{e.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:d}],e.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:d}],
e.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:d}]}catch(h){}f.dispatchEvent(e)};b(d,"touchstart");b(d,"touchend");d.click();oa(d,`click ${a}`);return mb}async function td(a,b=-1){b=await Cb(a,b);if(!0===b)return!0;D=b;let d={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",
pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};b.focus();var c=new PointerEvent("mouseover",d);b.dispatchEvent(c);c=new PointerEvent("pointerover",d);b.dispatchEvent(c);c=new PointerEvent("mousedown",d);b.dispatchEvent(c);c=new PointerEvent("pointerdown",d);b.dispatchEvent(c);c=new PointerEvent("mouseup",d);b.dispatchEvent(c);c=new PointerEvent("pointerup",d);b.dispatchEvent(c);b.click();b.click();c=new MouseEvent("dblclick",{...d,view:va});b.dispatchEvent(c);
oa(b,`dblclick ${a}`);return mb}async function ud(a,b=-1){b=await Cb(a,b);if(!0===b)return!0;D=b;let d={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};b.focus();var c=new PointerEvent("mouseover",
d);b.dispatchEvent(c);c=new PointerEvent("pointerover",d);b.dispatchEvent(c);c=new PointerEvent("mousedown",d);b.dispatchEvent(c);c=new PointerEvent("pointerdown",d);b.dispatchEvent(c);c=new PointerEvent("mouseup",d);b.dispatchEvent(c);c=new PointerEvent("pointerup",d);b.dispatchEvent(c);c=new PointerEvent("contextmenu",d);b.dispatchEvent(c);oa(b,`rclick ${a}`);return mb}async function Sb(a,b){if(D)if(D.focus(),"undefined"!==typeof a.value){var d=a.selectionStart,c=a.selectionEnd;c=a.value.substring(0,
d)+b+a.value.substring(c,a.value.length);await Oc(a,c);a.selectionStart=d+b.length;a.selectionEnd=d+b.length}else d=window.getSelection(),c=d.getRangeAt(0),d.toString()||c.selectNode(1===a.childNodes.length?a.firstChild:a),c.deleteContents(),c.insertNode(document.createTextNode(b)),d.removeAllRanges(),d.addRange(c)}function oc(a,b,d){b=b.replace(/#(j(umpFrom|f)?|from){(.*?)}/,"");eb=a;Pb=b;kc=d;if(-1!==b.indexOf("#submitBySearchJumper"))eb=a,Pb=b.replace("#submitBySearchJumper",""),kc=d,Rc();else{var c=
document.getElementById("searchJumper_form");c||(c=document.createElement("form"),c.id="searchJumper_form",c.style.display="none",document.documentElement.appendChild(c));var f=b.match(/[:%]p{(.*?)}/),g=b;f?(g=b.replace(f[0],""),f=f[1],c.method="post",b=new URLSearchParams(f)):(c.method="get",b=new URLSearchParams((new URL(g)).search));a&&(c.acceptCharset=a);c.innerHTML=ba();c.target=d;c.action=g;b.forEach((e,h)=>{let k=document.createElement("input");k.name=h;k.value=e;c.appendChild(k)});return c.submit()}}
function Pc(a){try{for(var b=a.split(","),d=b[0].match(/:(.*?);/)[1],c=atob(b[1]),f=c.length,g=new Uint8Array(f);f--;)g[f]=c.charCodeAt(f)}catch(e){oa(e)}a=d.split("/");a=1<a.length?a[1]:a[0];return new File([g],"image."+a,{type:d})}async function Sc(a){if(!a)return null;a.dataset.src&&(a.src=a.dataset.src);if(!a.src)return null;if(a.src.split("/")[2]==document.domain){let c=getComputedStyle(a);var b=document.createElement("canvas"),d=b.getContext("2d");if(a.complete){b.width=a.naturalWidth||a.width||
parseInt(c.width);b.height=a.naturalHeight||a.height||parseInt(c.height);d.drawImage(a,0,0);try{return b.toDataURL("image/png")}catch(f){return await Tb(a.src)}}else return await new Promise(f=>{a.addEventListener("load",async g=>{b.width=a.naturalWidth||a.width||parseInt(c.width);b.height=a.naturalHeight||a.height||parseInt(c.height);d.drawImage(a,0,0);try{f(b.toDataURL("image/png"))}catch(e){f(await Tb(a.src))}})})}else return await Tb(a.src)}async function Tb(a){let b=a.split("/");return new Promise(d=>
{Na({method:"GET",url:a,responseType:"blob",headers:{origin:b[0]+"//"+b[2],referer:location.href,accept:"*/*"},onload:function(c){try{var f=c.response,g=new FileReader;g.readAsDataURL(f);g.onload=function(e){d(e.target.result)}}catch(e){d(null)}},onerror:function(){d(null)},ontimeout:function(){d(null)}})})}function vd(a){let b=a.className.trim().replace("fa fa-","").replace(/ /g,"_");if(!ta[b]){{let f=getComputedStyle(a),g=getComputedStyle(a,":before").content.replace(/"/g,"");if(g){var d=document.createElement("canvas");
d.width=a.clientWidth||parseInt(f.lineHeight);d.height=a.clientHeight||parseInt(f.lineHeight);a=d.getContext("2d");a.font=f.font;a.strokeStyle=f.color||"black";a.fillStyle=f.color||"black";a.textBaseline="top";var c=a.measureText(g);a.fillText(g,(d.width-c.width)/2,(d.height-parseInt(f.fontSize))/2);d=d.toDataURL("image/png")}else d=!1}"data:,"!=d&&d&&(ta[b]=d,O.setItem("cacheIcon",ta))}}async function pc(a){if("IMG"==a.nodeName.toUpperCase()){let b=a.src||a.dataset.src;if(b){if(ta[b])return;a=await Sc(a);
"data:,"!=a&&a||(a="fail");ta[b]=a;O.setItem("cacheIcon",ta);oa(b+" cached, left "+Ra.length+" icons")}}else vd(a);await new Promise(b=>{setTimeout(()=>{b(!0)},1)})}async function Db(){for(;0<Ra.length;)await pc(Ra.shift())}async function Tc(a){if(l.prefConfig.cacheSwitch){let b=0<Ra.length;await Promise.all([Db(),Db(),Db(),Db(),Db()]);b&&(a&&Ea(C("cacheOver")),oa(C("cacheOver")))}}async function Uc(a){if(!fb){A.con.classList.add("in-input");A.con.style.visibility="hidden";A.con.style.display="";
A.appendBar();for(a=0<Ub.length;0<Ub.length;)await pc(Ub.shift());a&&oa("All font icons cached!")}}function Pa(){let a=Eb||Ca.getPickerStr()||window.getSelection().toString();setTimeout(()=>{Eb=""},1);if(!a){let b=nc(document);if(b&&/^(TEXTAREA|INPUT)$/i.test(b.nodeName)){let d=b.selectionStart,c=b.selectionEnd;if(d||c)a=b.value.substring(d,c)}}if(a){if(a=a.trim())return a}else if(D&&"searchJumper"===D.className&&/^MARK$/i.test(D.nodeName))return D.dataset.matched||D.innerText;return""}function Vb(a,
b,d){d||=/\w$/.test(a)?"(\\b|$)":"";return new RegExp(a.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+d,b)}function qc(a,b,d,c){if(-1!==a.indexOf(b+".replace(/")){let f=a.match(Vb(b,"","\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*[\"'](.*?[^\\\\])??[\"']\\)"));if(!f)return a.replace(Vb(b,"g"),c?c(d):d);d=d.replace(new RegExp(f[1],f[2]),f[3]||"");a=a.replace(f[0],b);return qc(a,b,d,c)}return a.replace(Vb(b,"g"),c?c(d.replace(/\$/g,"$$$$")):d.replace(/\$/g,"$$$$"))}function gb(){var a=Pa();
if(a)return a;if(!na)return Wa||"";let b;a="";let d=!na.charset||"UTF-8"==na.charset;try{if(na.keywords){let c=na.keywords.split("\n");for(let f=0;f<c.length;f++){let g=c[f];if(!g||!g.trim())continue;let e=c[f].match(/^(.*?)\.replace\(\//);e&&(g=e[1]);if(d)if(/^\w[\w\|]*$/.test(g)){let h=g.split("|"),k=new URLSearchParams(location.search);for(let p=0;p<h.length&&!(a=k.get(h[p]));p++);}else if(/\(.+\)/.test(g)&&0!==g.indexOf("@"))try{(b=pa.match(new RegExp(g)))&&(a=b[1]),a&&=decodeURIComponent(a)}catch(h){a=
""}if(!a&&R(document))try{let h=xb(g);h&&(a=h.value||h.innerText)}catch(h){a=""}a&&e&&(a=qc(c[f],g,a));if(a)break}}else if(d&&tb.test(na.url)&&!/[#:%]p{/.test(na.url)&&(-1!=pa.indexOf("?")&&(b=na.url.match(RegExp("[\\?&]([^&]*?)=%s[lurest]?\\b.*")))&&(a=(new URLSearchParams(location.search)).get(b[1])),!a&&(b=na.url.match(RegExp("https?://[^/]*/(.*)%s[lurest]?\\b"))))&&((b=pa.match(new RegExp((b[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")))&&(a=b[1]),a))try{a=decodeURIComponent(a)}catch(c){a=
""}if(""==a&&R(document)){let c=R(document).querySelector("input[type=text]:not([readonly]),input:not([type])");c&&(a=c.value)}a&&(Wa=a)}catch(c){oa(c)}return Wa||""}function Vc(a,b){b=b||document.createElement("div");a="on"+a;var d=a in b;if(!d){b.setAttribute||(b=document.createElement("div"));if(!b.hasAttribute(a)){var c=!0;b.setAttribute(a,"return;")}d="function"==typeof b[a];c&&b.removeAttribute(a)}return d}function Fb(){var a="DOMMouseScroll";Vc("wheel")?a="wheel":Vc("mousewheel")&&(a="mousewheel");
return a}function wd(){Wb(C("settings"),()=>{wa(Oa,{active:!0,insert:!0})});Wb(C("searchInPage"),()=>{A.showInPage();A.showInPageSearch()});Wb(C("search"),()=>{A.searchAuto(0,{})});Wb(C("addSearchEngine"),()=>{var m=document.head.querySelector('[rel="search"]');m?Wc(m.href,(w,t)=>{"load"!=w&&(t&&oa(t.statusText||t.error||t.response||t),w=R(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||R(document).querySelector("textarea"),rc(w))}):
(m=R(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||R(document).querySelector("textarea"),rc(m))});document.addEventListener("searchJumper",m=>{switch(m.detail.action){case "search":m.detail.name?A.searchBySiteName(m.detail.name,m.detail.key||{}):A.searchAuto(m.detail.index,m.detail.key||{});break;case "show":A.setFuncKeyCall(!1);A.showInPage();l.prefConfig.disableInputOnWords&&!A.inInput&&Pa()||A.showSearchInput();break;case "showAll":A.appendBar(),
A.showAllSites()}});D=R(document);let a=nb.children[0],b=0,d,c=!1,f=m=>{clearTimeout(d);A.bar.classList.remove("grabbing");document.removeEventListener("mouseup",f,!1);document.removeEventListener("mousemove",h,!1);document.removeEventListener("touchend",f,!1);document.removeEventListener("touchmove",h,!1);A.bar.style.marginLeft="";A.bar.style.marginTop="";A.bar.style.transform="";if(1===b)b=0,A.showAllSites();else{b=0;var w=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||
document.documentElement.clientHeight,y=w/3,W=rb(m);m=sb(m);W<y?(y="left",w=0<parseInt(A.bar.style.left)?parseInt(A.bar.style.left):0):W<2*y?(y="center",w=parseInt(A.bar.style.left)-w/2):(y="right",w=w-parseInt(A.bar.style.left)-A.bar.scrollWidth);m<t/2?(m="top",t=parseInt(A.bar.style.top)):(m="bottom",t=t-parseInt(A.bar.style.top)-A.bar.scrollHeight,0>t&&(t=0));a.style.cursor="";A.closeOpenType();A.initPos(y,m,w,t);O.setItem("searchData",l)}};var g=0,e=0;let h=m=>{let w=rb(m);m=sb(m);50>Math.abs(g-
w)+Math.abs(e-m)||(1===b&&(clearTimeout(d),a.style.cursor="grabbing",A.bar.style.position="fixed",A.bar.style.marginLeft="0",A.bar.style.marginTop="0",A.bar.style.right="",A.bar.style.bottom="",A.bar.style.transform="unset",A.con.classList.remove("search-jumper-scroll"),A.bar.className="search-jumper-searchBar grabbing"),b=2,A.bar.style.left=w-A.bar.scrollWidth+20+"px",A.bar.style.top=m-A.bar.scrollHeight+20+"px")};nb.oncontextmenu=function(m){A.bar.style.display="none";m.preventDefault()};nb.addEventListener("mousedown",
m=>{c?c=!1:2===m.button?(l.prefConfig.resizePage&&("undefined"!=typeof A.initBodyStyle&&(R(document).style.cssText=A.initBodyStyle),A.con.classList.remove("resizePage")),document.removeEventListener("mouseup",f,!1),document.removeEventListener("mousemove",h,!1),document.removeEventListener("touchend",f,!1),document.removeEventListener("touchmove",h,!1)):(m.preventDefault(),m.stopPropagation(),A.inInput||1===m.button||m.altKey||m.ctrlKey||m.shiftKey||m.metaKey?wa(Oa,{active:!0,insert:!0}):(b=1,g=rb(m),
e=sb(m),document.addEventListener("mouseup",f,!1),setTimeout(()=>{1===b&&document.addEventListener("mousemove",h,!1)},100),d=setTimeout(()=>{A.bar.style.display="none";document.removeEventListener("mouseup",f,!1);document.removeEventListener("mousemove",h,!1)},2E3)))},!1);nb.addEventListener("touchstart",m=>{m.preventDefault();m.stopPropagation();c=!0;b=1;g=rb(m);e=sb(m);document.addEventListener("touchend",f,!1);setTimeout(()=>{1===b&&document.addEventListener("touchmove",h,!1)},100);d=setTimeout(()=>
{A.bar.style.display="none";l.prefConfig.resizePage&&("undefined"!=typeof A.initBodyStyle&&(R(document).style.cssText=A.initBodyStyle),A.con.classList.remove("resizePage"));document.removeEventListener("touchend",f,!1);document.removeEventListener("touchmove",h,!1)},1500)},{passive:!1,capture:!1});A.bar.addEventListener(Fb(),m=>{if(!m.target.parentNode||!("sitelistCon"==m.target.parentNode.className||m.target.parentNode.parentNode&&"sitelistCon"==m.target.parentNode.parentNode.className)){var w=A.con.classList;
!w.contains("search-jumper-scroll")||w.contains("search-jumper-left")||w.contains("search-jumper-right")||("wheel"!==m.type?(w=0,"number"==typeof m.axis?2==m.axis&&(w=m.detail):("undefined"==typeof m.wheelDeltaY||0!=m.wheelDeltaY)&&(w=-m.wheelDelta/40)):w=m.deltaY,m.preventDefault(),m.stopPropagation(),A.con.scrollLeft+=w)}},{passive:!1,capture:!1});if(l.prefConfig.shortcut&&(l.prefConfig.switchSitesPreKey||l.prefConfig.switchSitesNextKey||l.prefConfig.shortcutKey||l.prefConfig.showAllShortcutKey)){let m=
-1,w=!1,t=(y,W,Q,B,E,F)=>{if(W&&!y.altKey||Q&&!y.ctrlKey||B&&!y.shiftKey||E&&!y.metaKey)return!1;w||=(y.key||String.fromCharCode(y.keyCode)).toLowerCase();if(F!=w&&F!=y.code||!l.prefConfig.enableInInput&&-1==m&&(m=1,!(Q||W||B||E)&&Bb(document)))return!1;m=0;y.preventDefault();y.stopPropagation();return!0};document.addEventListener("mouseenter",y=>{y.target&&!A.contains(y.target)&&(sc=y.target)},!0);document.addEventListener("keydown",y=>{"searchJumperInput"!==y.target.id&&(m=-1,w=!1,l.prefConfig.shortcutKey&&
t(y,l.prefConfig.callBarAlt,l.prefConfig.callBarCtrl,l.prefConfig.callBarShift,l.prefConfig.callBarMeta,l.prefConfig.shortcutKey)&&(A.setFuncKeyCall(!1),A.showInPage(),l.prefConfig.disableInputOnWords&&!A.inInput&&Pa()||A.showSearchInput()),1!=m&&(l.prefConfig.showAllShortcutKey&&t(y,l.prefConfig.showAllAlt,l.prefConfig.showAllCtrl,l.prefConfig.showAllShift,l.prefConfig.showAllMeta,l.prefConfig.showAllShortcutKey)&&(A.appendBar(),A.showAllSites()),na&&"none"!==A.bar.style.display&&(l.prefConfig.switchSitesPreKey&&
t(y,l.prefConfig.switchSitesAlt,l.prefConfig.switchSitesCtrl,l.prefConfig.switchSitesShift,l.prefConfig.switchSitesMeta,l.prefConfig.switchSitesPreKey)?A.switchSite():l.prefConfig.switchSitesNextKey&&t(y,l.prefConfig.switchSitesAlt,l.prefConfig.switchSitesCtrl,l.prefConfig.switchSitesShift,l.prefConfig.switchSitesMeta,l.prefConfig.switchSitesNextKey)&&A.switchSite(!0))))},!0)}let k;if(l.prefConfig.enableInPage){let m=!1,w,t=!1,y;document.addEventListener("selectionchange",E=>{if(l.prefConfig.leftMouse||
l.prefConfig.middleMouse)y=window.getSelection().toString()?window.getSelection().getRangeAt(0).getBoundingClientRect():null});let W=!1;k=E=>{m&&E.preventDefault();m=!1;document.removeEventListener("click",k,!0)};function Q(E){let F=!1;if(Bb(document))F=!0;else{let Z=!1;for(;E&&!(Z="true"==E.contentEditable)&&"BODY"!=E.nodeName.toUpperCase();)E=E.parentNode;Z&&(F=!0)}return F}let B=E=>{if(!(W&&"mousedown"===E.type&&0===E.button||E.target.classList&&E.target.classList.contains("search-jumper-btn")||
A.contains(E.target)||A.bar.classList.contains("grabbing"))){var F=Q(E.target),Z=!l.prefConfig.enableInInput&&F;if(!Z||"dblclick"!==E.type)if(2==l.prefConfig.minPopup&&(F?A.con.classList.add("targetInput"):A.con.classList.remove("targetInput")),"touchstart"===E.type)l.prefConfig.selectToShow&&setTimeout(()=>{Pa()?A.showInPage(!0,E):A.waitForHide(0)},0);else{W=!0;setTimeout(()=>{W=!1},500);m=!1;D=E.target;A.closePopupWindow();var S=!1;!(l.prefConfig.altKey||l.prefConfig.ctrlKey||l.prefConfig.shiftKey||
l.prefConfig.metaKey)||l.prefConfig.altKey&&!E.altKey||l.prefConfig.ctrlKey&&!E.ctrlKey||l.prefConfig.shiftKey&&!E.shiftKey||l.prefConfig.metaKey&&!E.metaKey||(S=!0);if(l.prefConfig.selectToShow||(0!==E.button||l.prefConfig.leftMouse)&&(1!==E.button||l.prefConfig.middleMouse)){var H=E.clientX,J=E.clientY,X=!1,V=z=>{2<Math.abs(H-z.clientX)+Math.abs(J-z.clientY)&&(clearTimeout(w),document.removeEventListener("mousemove",V,!0),z.target.removeEventListener("scroll",ea),X=!0)},ea=z=>{clearTimeout(w);document.removeEventListener("mousemove",
V,!0);z.target.removeEventListener("scroll",ea)},r=z=>{ub=!1;A.contains(z.target)||m?z.preventDefault():setTimeout(()=>{m||(F=Q(z.target),Z=!l.prefConfig.enableInInput&&F,!Z&&(S&&2===z.button||(X||t)&&0===z.button&&l.prefConfig.selectToShow&&Pa())?A.showInPage(!0,z):(W=!1,A.waitForHide(0)))},0);clearTimeout(w);document.removeEventListener("mouseup",r,!0);document.removeEventListener("mousemove",V,!0);z.target.removeEventListener("scroll",ea)};if("dblclick"===E.type)""!==Pa()?(m=!0,ub=!1,document.removeEventListener("mouseup",
r,!0),document.removeEventListener("mousemove",V,!0),E.target.removeEventListener("scroll",ea),clearTimeout(w),setTimeout(()=>{A.showInPage(!0,E)},200)):(t=!0,setTimeout(()=>{t=!1},200));else{w&&clearTimeout(w);w=setTimeout(()=>{ub||D!=E.target||1===E.button&&!l.prefConfig.middleMouse||2===E.button&&!l.prefConfig.rightMouse||0===E.button&&!l.prefConfig.leftMouse||(l.prefConfig.longPressTile?A.showInPage(!0,E):(A.setFuncKeyCall(!1),A.showInPage()),m=!0)},parseInt(l.prefConfig.longPressTime));var G=
!1;2===E.button?S&&(G=!0):(0===E.button?l.prefConfig.leftMouse&&(G=!0):1===E.button&&l.prefConfig.middleMouse&&(G=!0),G&&(Z?G=!1:y?E.clientX<y.left?G=!1:E.clientX>y.left+y.width?G=!1:E.clientY<y.top?G=!1:E.clientY>y.top+y.height&&(G=!1):G=!1));if(G)return setTimeout(()=>{ub||A.showInPage(!0,E);document.removeEventListener("mousemove",V,!0);E.target.removeEventListener("scroll",ea)},200),m=!0,document.addEventListener("mouseup",r,!0),document.addEventListener("click",k,!0),!1;document.addEventListener("mousemove",
V,!0);document.addEventListener("mouseup",r,!0);E.target.addEventListener("scroll",ea)}}else A.waitForHide(0)}}};document.addEventListener("mousedown",B);document.addEventListener("dblclick",B);if(l.prefConfig.selectToShow){let E,F,Z=S=>{clearTimeout(E);E=setTimeout(()=>{window.getSelection().toString()&&(B(F),document.removeEventListener("selectionchange",Z))},300)};document.addEventListener("touchstart",S=>{!1!==S.isTrusted&&(F=S,document.addEventListener("selectionchange",Z))})}document.addEventListener("contextmenu",
E=>{m&&E.preventDefault();m=!1})}l.prefConfig.dragToSearch&&!ob&&R(document).addEventListener("dragstart",m=>{!m.isTrusted||l.prefConfig.dragAlt&&!m.altKey||l.prefConfig.dragCtrl&&!m.ctrlKey||l.prefConfig.dragShift&&!m.shiftKey||l.prefConfig.dragMeta&&!m.metaKey||!(l.prefConfig.enableInInput||m.altKey||m.ctrlKey||m.shiftKey||m.metaKey)&&Bb(document)||(D=m.target,1!==D.nodeType&&(D=D.parentNode),D.shadowRoot&&(D=D.shadowRoot.activeElement||D),D.getAttribute&&"true"==D.getAttribute("draggable")||D.parentNode&&
D.parentNode.getAttribute&&"true"==D.parentNode.getAttribute("draggable")||(A.waitForHide(0),setTimeout(()=>{xd(m.clientX,m.clientY)},2),k&&document.removeEventListener("click",k,!0),ub=!0))});l.prefConfig.quickAddRule&&document.addEventListener("click",m=>{((m.ctrlKey||m.metaKey)&&m.shiftKey||(m.ctrlKey||m.metaKey)&&m.altKey||m.altKey&&m.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(m.target.nodeName)&&(/^INPUT$/i.test(m.target.nodeName)&&m.target.type&&"text"!=m.target.type&&"search"!=m.target.type||rc(m.target))},
!0);let p=m=>{setTimeout(()=>{A.refresh()},100)};document.addEventListener("fullscreenchange",m=>{document.fullscreenElement&&(A.bar.style.display="none")});let v=!1;var q=m=>{v||(v=!0,setTimeout(()=>{v=!1},300),m=m.target,na&&m&&(m.nodeName&&m.nodeName.toLowerCase&&"a"==m.nodeName.toLowerCase()?A.updateCacheKeywords():(m=m.parentNode)&&m.nodeName&&m.nodeName.toLowerCase&&"a"==m.nodeName.toLowerCase()&&A.updateCacheKeywords()))};R(document).addEventListener("auxclick",q,!0);R(document).addEventListener("click",
q,!0);q=function(m){var w=history[m];return function(){var t=w.apply(this,arguments),y=location.href.slice(0,500);pa!=y&&(pa=y,y=new Event("sj_"+m),y.arguments=arguments,window.dispatchEvent(y));return t}};history.pushState=q("pushState");history.replaceState=q("replaceState");window.addEventListener("sj_pushState",p);window.addEventListener("sj_replaceState",p);window.addEventListener("yt-navigate-finish",p);window.addEventListener("securitypolicyviolation",m=>{"form-action"===m.violatedDirective&&
Rc()});let n=0;(new MutationObserver((m,w)=>{if(A.lockWords&&!(A.initHighlight&&100<n)){for(let t of m){if("characterData"===t.type){m=t.target.parentNode;if(!m||t.target.previousElementSibling&&"searchJumper"===t.target.previousElementSibling.className||t.target.nextElementSibling&&"searchJumper"===t.target.nextElementSibling.className)return;A.checkCharacterData(m);A.initHighlight&&n++}t.removedNodes.length&&[].forEach.call(t.removedNodes,y=>{1===y.nodeType&&(y.classList&&y.classList.contains("searchJumper")?
A.removeMark(y):y.children.length&&[].forEach.call(y.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),W=>{A.removeMark(W)}))});if(t.addedNodes.length)for(m=0;m<t.addedNodes.length;m++){w=t.addedNodes[m];let y;if(1===w.nodeType){if(/^searchJumper$/.test(w.className))continue;y=w}else{if(w.previousElementSibling&&/^searchJumper$/.test(w.previousElementSibling.className))continue;else if(w.nextElementSibling&&/^searchJumper$/.test(w.nextElementSibling.className))continue;
y=w.parentNode}y&&(setTimeout(()=>{A.highlight("insert",y)},0),A.initHighlight&&n++)}}A.appendBar()}})).observe(R(document),{childList:!0,characterData:!0,subtree:!0})}function Xc(a,b){if(!a)return"";if(b)var d=b.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1");else{if("#"==a.charAt(0))return location.href+a;if("?"==a.charAt(0))return location.href.replace(/^([^\?#]+).*/,"$1"+a);d=location.protocol+"//"+location.host;b=(b=document.querySelector("base"))?b.href:location.href}b=(b||d).replace(/(\?|#).*/,"");
/https?:\/\/[^\/]+$/.test(b)&&(b+="/");0!==b.indexOf("http")&&(b=d+b);d=/^[^\?#]*\//.exec(b)[0];for(b=/^\w+:\/\/\/?[^\/]+/.exec(d)[0];0===a.indexOf("../");)a=a.substr(3),d=d.replace(/\/[^\/]+\/$/,"/");a=a.replace(/\.\//,"");/^\/\/\/?/.test(a)&&(a=location.protocol+a);return/^\w+:\/\//.test(a)?a:("/"==a.charAt(0)?b:d)+a}function rc(a){if(!za){var b,d=location.href;if(a&&a.name)for(b=a.parentNode;b;){if("FORM"===b.nodeName.toUpperCase()){var c=b.target;if(c&&"string"==typeof c&&"_blank"!=c&&"_self"!=
c&&"_parent"!=c&&"_top"!=c&&!R(document).querySelector(c)){b=null;break}break}b=b.parentNode}c=()=>window.confirm(C("noValidItemAsk"))?!1:!0;if(b){d=Xc(b.getAttribute("action")||d);let g=[];c=new FormData(b);for(let [e,h]of c)h=a.name===e?"%s":encodeURIComponent(h),g.push(e+"="+h);if("post"==b.method.toLowerCase())d+="%p{"+g.join("&")+"}",0==b.action.indexOf(location.origin)&&location.pathname&&"/"!==location.pathname&&(d+=`#from{${location.pathname.slice(1)}}`);else{if(b=d.match(/\?(.*)/))d=d.replace(b[0],
""),b[1].split("&").forEach(e=>{e=e.split("=");let h=e[0];-1===g.findIndex(k=>0===k.indexOf(h+"="))&&(e=e[1],e==a.value&&(e="%s"),g.push(h+"="+e))});d+="?"+g.join("&")}}else if(a&&a.value)if(-1!==location.href.indexOf(a.value))d=location.href.replace(a.value,"%s");else if(b=encodeURIComponent(a.value),-1!==location.pathname.indexOf(b)||-1!==location.search.indexOf(b))d=location.origin+location.pathname.replace(b,"%s")+location.search.replace(b,"%s");else if((b=escape&&escape(a.value))&&-1!==location.pathname.indexOf(b)||
-1!==location.search.indexOf(b))d=location.origin+location.pathname.replace(b,"%se")+location.search.replace(b,"%se");else{if(c())return}else if(c())return;var f=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),g=>{f.indexOf&&-1!==f.indexOf(g.href)||f.push(g.href)});Xb(document.title.replace(a?a.value:"","").replace(/^\s*[-_]\s*/,""),"",d,f,document.characterSet)}}function Rc(){let a=`${"https://hoothin.github.io/SearchJumper/jump.html"}#jump{url=${encodeURIComponent(Pb)}&charset=${eb}}`;
"_self"==kc?location.href=a:wa(a,{active:!0,insert:!0})}async function yd(){if(0===pa.indexOf(Oa)||("SearchJumper"===document.title||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){za=document.querySelector('[name="engines"]');let b=document.getElementById("spotlight");if(za)try{if(za=za.getAttribute("content"),0===za.indexOf("http")){if(b){const d=C("loadingCollection");b.innerText=d;b.setAttribute("spotlight",d)}var a=
await new Promise(d=>{Na({method:"GET",url:za,onload:function(c){var f=null;try{f=JSON.parse(c.responseText),d(f)}catch(g){console.log(g),d(!1)}},onerror:function(c){console.log(c);d(!1)},ontimeout:function(c){console.log(c);d(!1)}})});a?(l.sitesConfig=a,za=!0):za=!1}else l.sitesConfig=JSON.parse(decodeURI(za)),za=!0}catch(d){za=!1}(a=0===pa.indexOf(Oa.replace(/\/config.*/,""))||0===pa.indexOf("https://search.hoothin.com/")||0===pa.indexOf("https://hoothin.github.io/SearchJumper")||"localhost"===
location.hostname)&&(fb=!!za||/all(\.html)?$/.test(location.pathname));b?b.style.display="none":setTimeout(()=>{if(b=document.getElementById("spotlight"))b.style.display="none"},500);return a}return!1}async function zd(){ob=await yd();!ob&&l.webdavConfig&&(lb=new Ad(l.webdavConfig.host+"/SearchJumper"+(l.webdavConfig.path||"").replace(/^\/*/,"/").replace(/\/*$/,"/"),l.webdavConfig.username,l.webdavConfig.password));if(ob&&!fb){let a,b=!1,d=()=>{a=setTimeout(()=>{b||d()},50);window.postMessage({searchData:l,
cacheIcon:ta,version:Yb.script.version||0,command:"loadConfig"},"*")},c=setTimeout(()=>{b||location.reload()},3E3);document.addEventListener("received",e=>{b=!0;clearTimeout(a);clearTimeout(c);0<Ra.length&&l.prefConfig.cacheSwitch&&(oa(`Start cache ${Ra.length} icons!`),Tc())});document.addEventListener("downloadCache",e=>{e=document.createElement("a");e.download="searchJumperCache.json";e.target="_blank";var h=[JSON.stringify({sortTypeNames:Ga,cacheIcon:ta,sortSiteNames:Ha},null,4)];h=new Blob(h,
{type:"application/json"});e.href=window.URL.createObjectURL(h);e.click()});document.addEventListener("importCache",e=>{e=e.detail?e.detail.cacheData:e.cacheData;e.cacheIcon&&(ta=e.cacheIcon,O.setItem("cacheIcon",ta),Ra=[],l.prefConfig.cacheSwitch=!0,O.setItem("searchData",l));e.sortTypeNames&&(Ga=e.sortTypeNames,O.setItem("sortTypeNames",Ga));e.sortSiteNames&&(Ha=e.sortSiteNames,O.setItem("sortSiteNames",Ha));Ea("Cache imported successfully!")});document.addEventListener("showSiteAdd",e=>{(e=e.detail?
e.detail.site:e.site)&&(e.url?Xb(e.name,e.description,e.url,e.icon?[e.icon]:[],e.charset,e.kwFilter,e.match,e.hideNotMatch):Yc.open(e))});d();document.addEventListener("dataChanged",e=>{d()});let f=(e,h,k,p)=>{window.postMessage({url:e,name:h,status:k,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",e=>{let h=e.detail?e.detail.url:e.url,k=e.detail?e.detail.name:e.name;Na({method:"GET",url:h,headers:{referer:h,"User-Agent":navigator.userAgent},onload:function(p){f(h,k,
p&&p.status,p&&p.finalUrl)},onerror:function(p){f(h,k,"error","")},ontimeout:function(p){f(h,k,"timeout","")}})});let g=l.prefConfig.cacheSwitch;document.addEventListener("saveConfig",e=>{l=(e.detail?e.detail.searchData:e.searchData)||va.searchData;O.setItem("searchData",l);let h={},k=ta?Object.keys(ta).length:0;g==l.prefConfig.cacheSwitch?(l.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let v=p.icon.trim().replace(/ /g,"_"),q=ta[v];q&&(h[v]=q)}p.sites.forEach(v=>
{let q=v.icon;q||=v.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico");/^http/.test(q)&&(v=ta[q])&&(h[q]=v)})}),k!==Object.keys(h).length&&(ta=h,O.setItem("cacheIcon",h))):(l.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){var v=ta[p.icon];v&&("fail"===v?(v=document.createElement("img"),v.src=p.icon,Ra.push(v)):h[p.icon]=v)}p.sites.forEach(q=>{let n=q.icon;n||=q.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,
"$1favicon.ico");/^http/.test(n)&&(q=ta[n])&&("fail"===q?(q=document.createElement("img"),q.src=n,Ra.push(q)):h[n]=q)})}),O.setItem("cacheIcon",h),l.prefConfig.cacheSwitch&&(0<Ra.length&&(Ea(C("startCache")),Tc(!0)),Uc()));g=l.prefConfig.cacheSwitch;(e.notification||e.detail&&e.detail.notification)&&Ea("Configuration imported successfully!")});document.addEventListener("copyConfig",e=>{e=l.sitesConfig.filter(h=>h&&!(/^BM/.test(h.type)&&"bookmark"===h.icon));pb(JSON.stringify(e,null,2));Ea("Configuration copied successfully!")})}else if(Zc.test(pa)){let a=
Ja("\n                    #import-btns-con {\n                        position: absolute;\n                        display: block;\n                        font-size: 20px;\n                        left: 0px;\n                        top: 0px;\n                        width: 100%;\n                        height: 100%;\n                    }\n                    #import-btns-con.hide {\n                        pointer-events: none;\n                    }\n                    #import-btns-con>button {\n                        opacity: 0.5;\n                    }\n                    #import-btns-con>button:hover {\n                        opacity: 0.9;\n                    }\n                    #import-btn {\n                        position: absolute;\n                        display: block;\n                        font-size: 20px;\n                        right: 45px;\n                        top: 45px;\n                        pointer-events: all;\n                    }\n                    #filter-btn {\n                        position: absolute;\n                        display: none;\n                        font-size: 20px;\n                        left: 45px;\n                        top: 45px;\n                        pointer-events: all;\n                    }\n                    .filter>#filter-btn {\n                        display: block;\n                    }\n                    #import-btns-con>h3 {\n                        float: left;\n                        margin-left: 20px;\n                    }\n                    #import-btns-con.hide>h3 {\n                        display: none;\n                    }\n                "),
b,d=0,c=document.createElement("button");c.id="import-btn";c.className="btn Button--secondary Button";let f=document.createElement("button");f.id="filter-btn";f.className="btn Button--secondary Button";let g=document.createElement("h3"),e=document.createElement("div");e.id="import-btns-con";e.appendChild(a);e.appendChild(c);e.appendChild(f);e.appendChild(g);e.addEventListener("click",k=>{b&&(b.style.filter="");e.classList.add("hide")});c.innerText=C("import");c.addEventListener("click",k=>{if(!za&&
b&&(k=b.innerText.trim(),k)){try{var p=JSON.parse(k)}catch(v){Ea(v.toString());return}switch(d){case 0:window.confirm(C("importOrNot"))&&(e.parentNode&&e.parentNode.removeChild(e),Qb(()=>{l.sitesConfig=p;l.lastModified=(new Date).getTime();O.setItem("searchData",l);Ea(C("siteAddOver"));A.refreshEngines()},!0));break;case 1:Xb(p.name,"",p.url,p.icon?[p.icon]:[],p.charset,p.kwFilter,p.match,p.hideNotMatch);break;case 2:l.prefConfig.inPageRule||(l.prefConfig.inPageRule={}),Object.keys(p).forEach(v=>
{let q=p[v];if(q)if(0===v.indexOf("@"))l.prefConfig.inPageRule[v]=q;else if(q.words&&0!==q.words.length){var n="",m=q.sep||"";m?n="$c"+m:(m=" ",1===q.words.length&&-1!==q.words[0].indexOf(" ")&&(m="",n="$o"));l.prefConfig.inPageRule[v]=n+q.words.join(m)}}),O.setItem("searchData",l),Ea("Over!")}}});f.innerText=C("filter");f.addEventListener("click",k=>{if(b){e.parentNode&&e.parentNode.removeChild(e);k=b.innerText.trim();let p;if(k&&0===k.indexOf("["))try{p=JSON.parse(k),Yc.open(p)}catch(v){Ea(v.toString())}}});
let h=k=>{if(k!=b||!e.parentNode){var p=k.offsetTop+"px",v=k.innerText.trim();if(v){g.innerText="";if(/^\[/.test(v))d=0,e.style.top=p,e.classList.add("filter");else if(/^\{\s*"name"/.test(v))d=1,e.style.top=p,e.classList.remove("filter"),g.innerText=v.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(v))d=2,e.style.top=p,e.classList.remove("filter");else return;b&&(b.style.filter="");k.parentNode.appendChild(e);k.style.filter="blur(5px)";b=k;e.classList.remove("hide")}}};window.addEventListener("load",
k=>{b||(k=document.querySelector(".highlight>pre"))&&h(k)});document.addEventListener("mouseover",k=>{Zc.test(pa)&&("PRE"===k.target.nodeName?h(k.target):(k=k.target.children[0])&&"PRE"===k.nodeName&&h(k))})}}function xd(a,b){if(A&&A.bar){var d=A.bar.querySelector(".search-jumper-type.search-jumper-open"),c=()=>{document.removeEventListener("dragend",tc,!0);document.removeEventListener("dragenter",uc,!0);Qa.parentNode&&(Qa.parentNode.removeChild(Qa),Da.style.opacity="",Da.style.transform="");ub=!1;
clearTimeout(Zb);if(na&&!na.hideNotMatch&&!l.prefConfig.hideOnSearchEngine||A.con.classList.contains("resizePage")){if(d&&!d.classList.contains("search-jumper-open"))if(d.children[0].onmousedown)d.children[0].onmousedown();else{let w=new PointerEvent("mousedown");d.children[0].dispatchEvent(w)}}else A.bar.style.display="none"};$b||ac||(bc=(l.prefConfig.zoomDrag||100)/100,$b=190*bc,ac=190*bc);if(!Da){var f=Ja(`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${bc});
                      z-index: 2147483647;
                      -moz-transition:left 0.3s ease, top 0.3s;
                      -webkit-transition:left 0.3s ease, top 0.3s;
                      transition:left 0.3s ease, top 0.3s;
                    }
                    #searchJumperWrapper * {
                      margin: 0;
                      padding: 0;
                      border: none;
                      outline: none;
                      user-select: none;
                      box-sizing: content-box;
                      font-size: 12px;
                      line-height: normal;
                      overflow: visible;
                      background-image: initial;
                      float: initial;
                    }
                    #searchJumperWrapper {
                      position: fixed;
                      height: 300px;
                      width: 300px;
                      padding: 20px;
                      margin: 20px;
                      background-color: #000000${l.prefConfig.hideDragHistory?"10":"9e"};
                      box-shadow: #000000 0px 0px 10px;
                      border-radius: 50%;
                      z-index: 2147483647;
                      box-sizing: content-box;
                      opacity: 0;
                      transform: scale(.5);
                      -moz-transition:opacity 0.3s ease, transform 0.15s;
                      -webkit-transition:opacity 0.3s ease, transform 0.15s;
                      transition:opacity 0.3s ease, transform 0.15s;
                    }
                    #searchJumperWrapper>.panel {
                      position: relative;
                    }
                    #searchJumperWrapper .sector:nth-child(2n+1) .sector-inner {
                      background: #454545;
                      color: white;
                    }
                    #searchJumperWrapper .sector:nth-child(2n) .sector-inner {
                      background: #ffffff;
                      color: black;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n+1) .sector-inner {
                      background: #353535;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n) .sector-inner {
                      background: #eeeeee;
                    }
                    #searchJumperWrapper .sector {
                      position: absolute;
                      left: 150px;
                      top: 50px;
                      width: 100px;
                      height: 200px;
                      font-size: 14px;
                      border-radius: 0px 100px 100px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 1;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                      pointer-events: none;
                    }
                    #searchJumperWrapper .sector.out {
                      left: 150px;
                      top: 0px;
                      width: 150px;
                      height: 300px;
                      font-size: 14px;
                      border-radius: 0px 150px 150px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 0;
                      ${l.prefConfig.hideDragHistory?"display: none;":""}
                    }
                    #searchJumperWrapper .sector-inner {
                      text-align: center;
                      display: block;
                      width: 40px;
                      padding: 5px 3px 0 57px;
                      height: 195px;
                      transform: translateX(-100px) rotate(60deg);
                      transform-origin: right center;
                      border-radius: 100px 0 0 100px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner {
                      text-align: center;
                      display: block;
                      width: 90px;
                      height: 295px;
                      transform: translateX(-150px) rotate(36deg);
                      transform-origin: right center;
                      border-radius: 150px 0 0 150px;
                    }
                    #searchJumperWrapper .sector-inner span {
                      transform-origin: center;
                      padding: 20px 0;
                      pointer-events: all;
                      opacity: 0.8;
                      word-break: break-word;
                      height: 55px;
                      font-size: 12px;
                      font-weight: bold;
                      font-family: Arial, sans-serif;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                    }
                    #searchJumperWrapper .sector-inner span {
                      width: 70px;
                      margin-left: -15px;
                    }
                    #searchJumperWrapper .sector-inner span>p {
                      max-width: 58px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner span {
                      width: unset;
                      margin-left: unset;
                    }
                    #searchJumperWrapper .over>.sector-inner span {
                      opacity: 1;
                    }
                    #searchJumperWrapper .sector-inner span>img {
                      width: 25px;
                      height: 25px;
                    }
                    #searchJumperWrapper .sector-inner span:hover {
                      opacity: 1;
                    }
                    #searchJumperWrapper .dragLogo {
                      position: absolute;
                      left: 150px;
                      top: 150px;
                      border-radius: 50%;
                      box-shadow: #000000 0px 0px 10px;
                      z-index: 10;
                      font-size: 0;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                    }
                    .dragLogo>svg {
                      width: 40px;
                      height: 40px;
                      pointer-events: none;
                    }
                `);vc=[];wc=[];Da=document.createElement("div");Da.id="searchJumperWrapper";Da.innerHTML=ba(`
                <div class="panel"></div>
                <div class="dragLogo">${xc}</div>
                `);Xa||Da.appendChild(f);let w=Da.querySelector(".panel"),t,y=Da.querySelector(".dragLogo"),W;y.addEventListener("dragover",Q=>{Q.preventDefault()},!0);y.addEventListener("dragenter",Q=>{clearTimeout(W);t&&(t.style.transform=`rotate(${t.dataset.deg}deg) ${l.prefConfig.hideDragHistory?"scale(1.2)":""}`,t.classList.remove("over"));t=null;y.style.transform="scale(1.35)";Q.preventDefault();clearTimeout(Zb);Zb=setTimeout(()=>{c();A.appendBar();A.showAllSites()},1E3)},!0);f=(Q,B,E)=>{let F=
document.createElement("div");F.className=Q;Q=document.createElement("div");Q.className="sector-inner";let Z=document.createElement("span");Q.appendChild(Z);F.appendChild(Q);let S=`rotate(${B}deg)`;Z.style.transform=E;F.style.transform=S+(l.prefConfig.hideDragHistory?"scale(1.2)":"");F.dataset.deg=B;w.appendChild(F);Z.addEventListener("dragover",H=>{50>H.clientX?Qa.style.left="0px":H.clientX>document.documentElement.clientWidth-50&&(Qa.style.left=document.documentElement.clientWidth-($b<<1)+"px");
50>H.clientY?Qa.style.top="0px":H.clientY>document.documentElement.clientHeight-50&&(Qa.style.top=document.documentElement.clientHeight-(ac<<1)+"px");H.preventDefault()},!0);Z.addEventListener("dragenter",H=>{clearTimeout(W);Z.innerText&&(t&&(t.style.transform=`rotate(${t.dataset.deg}deg) ${l.prefConfig.hideDragHistory?"scale(1.2)":""}`,t.classList.remove("over")),y.style.transform="",F.style.transform=`scale(${l.prefConfig.hideDragHistory?"1.6":"1.25"}) ${S}`,F.classList.add("over"),t=F,clearTimeout(Zb))},
!0);return Z};for(var g=0;6>g;g++){var e=f("sector",-30+60*g,`translateX(-10px) translateY(-10px) rotate(${-30-60*g}deg)`);vc.push(e)}for(g=0;10>g;g++)e=f("sector out",-18+36*g,`translateX(12px) translateY(-15px) rotate(${-18-36*g}deg)`),wc.push(e);tc=Q=>{c()};Da.addEventListener("click",Q=>{c()});Da.addEventListener("drop",Q=>{Q.target===y?(A.setFuncKeyCall(!1),A.showInPage()):t&&(c(),A.searchBySiteName(t.children[0].dataset.name,Q),t.style.transform=`rotate(${t.dataset.deg}deg)`,t.classList.remove("over"),
t=null);Q.preventDefault()});uc=Q=>{clearTimeout(W);Da.contains(Q.target)||(W=setTimeout(()=>{c()},300))};Qa=document.createElement("div");Qa.id="dragCon";Qa.appendChild(Da)}A.recoveHistory();f=A.autoGetFirstType();var h=f.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),k=0,p=()=>{let w=null;for(let t=k;t<h.length;t++){let y=h[t];if("none"!==y.style.display){w=y;k=t+1;break}}return w},v=(w,t)=>{w.parentNode.dataset.name=t.dataset.name;let y=document.createElement("p");y.innerText=t.dataset.name.substr(0,
10).trim();if(!/^\w+$/.test(y.innerText)){let Q="",B=0;for(let E of y.innerText)if(Q+=E,/^\w+$/.test(E)?B++:B+=2,10<B){Q+="...";break}y.innerText=Q}let W=document.createElement("img");W.style.display="none";w.appendChild(W);w.appendChild(y);W.onload=Q=>{W.style.display=""};if(w=t.querySelector("img"))if(w=w.src||w.dataset.src)W.src=w};vc.forEach((w,t)=>{w.innerHTML=ba();(t=p())?(w.parentNode.parentNode.style.filter="",v(w,t)):w.parentNode.parentNode.style.filter="contrast(0.5)"});var q=0;if(f.classList.contains("search-jumper-needInPage"))var n=
A.txtHistorySiteBtns;else if(f.classList.contains("search-jumper-targetImg"))n=A.imgHistorySiteBtns;else if(f.classList.contains("search-jumper-targetAudio"))n=A.audioHistorySiteBtns;else if(f.classList.contains("search-jumper-targetVideo"))n=A.videoHistorySiteBtns;else if(f.classList.contains("search-jumper-targetLink")||f.classList.contains("search-jumper-targetPage"))n=A.linkHistorySiteBtns;n?(n=n.concat(A.historySiteBtns),n=n.filter((w,t,y)=>y.indexOf(w)===t)):n=A.historySiteBtns;var m=()=>{if(l.prefConfig.reuseDragHistory)return p();
if(l.prefConfig.hideDragHistory)return!1;let w=null;for(let t=q;t<n.length;t++){let y=n[t];if("none"!==y.style.display){w=y;q=t+1;break}}return w};wc.forEach((w,t)=>{t=new DragEvent("dragleave");w.dispatchEvent(t);w.innerHTML=ba();w.parentNode.parentNode.style.opacity=.6;if(t=m()){var y=t.querySelector("img");y&&y.dataset.src&&(y.src=y.dataset.src,delete y.dataset.src);w.parentNode.parentNode.style.opacity=1;v(w,t)}});Qa.style.left=a-$b+"px";Qa.style.top=b-ac+"px";Da.style.opacity="";Da.style.transform=
"";setTimeout(()=>{document.addEventListener("dragend",tc,!0);A.addToShadow(Qa);setTimeout(()=>{Da.style.opacity=1;Da.style.transform="scale(1)"},10);setTimeout(()=>{"2147483647"!=getComputedStyle(Da).zIndex?c():document.addEventListener("dragenter",uc,!0)},100)},0)}}function Xb(a,b,d,c,f,g,e,h){self.kwFilter=g;self.charset=f;self.hideNotMatch=h;self.match=e;if(!Y){g=Ja("\n                    .searchJumperFrame-body,\n                    .searchJumperFrame-crawlBody {\n                        width: 300px;\n                        min-height: 300px;\n                        position: fixed;\n                        text-align: left;\n                        left: 50%;\n                        top: 45%;\n                        margin-top: -250px;\n                        margin-left: -150px;\n                        z-index: 100000;\n                        background-color: #ffffff;\n                        border: 1px solid #afb3b6;\n                        border-radius: 10px;\n                        opacity: 0.95;\n                        filter: alpha(opacity=95);\n                        box-shadow: 5px 5px 20px 0px #000;\n                        color: #6e7070;\n                        transition: all 0.25s ease;\n                        border: 0;\n                        font-size: initial;\n                    }\n                    .searchJumperFrame-title {\n                        background: #458bd1!important;\n                        display: flex!important;\n                        align-items: center!important;\n                        justify-content: center!important;\n                        color: white!important;\n                        font-weight: bold;\n                        font-size: 18px!important;\n                        border-radius: 10px 10px 0 0!important;\n                    }\n                    .draging .searchJumperFrame-body,\n                    .draging .searchJumperFrame-crawlBody {\n                        transition: none;\n                        pointer-events: none;\n                    }\n                    .searchJumperFrame-title>img {\n                        margin: 5px;\n                        height: 32px;\n                        width: 32px;\n                    }\n                    .searchJumperFrame-input-title {\n                        font-size: 9pt;\n                        font-family: Arial, sans-serif;\n                        display: inline-block;\n                        background-color: white;\n                        position: relative;\n                        left: 20px;\n                        padding: 0px 4px;\n                        text-align: left;\n                        color: #646464;\n                    }\n                    .searchJumperFrame-inputs>input,\n                    .searchJumperFrame-inputs>textarea,\n                    .searchJumperFrame-inputs>select,\n                    .searchJumperFrame-body select {\n                        resize: both;\n                        font-size: 11pt;\n                        font-weight: normal;\n                        border-radius: 4px;\n                        border: 1px solid rgba(0, 0, 0, 0.23);\n                        margin: 4px;\n                        font-family: inherit;\n                        background-color: #FFF;\n                        width: calc(100% - 8px);\n                        min-width: calc(100% - 8px);\n                        max-width: calc(100% - 8px);\n                        color: #4A4A4A;\n                        margin-top: -8px;\n                        padding: 4px;\n                        padding-top: 8px;\n                        box-sizing: border-box;\n                        height: 36px;\n                        word-break: break-all;\n                    }\n                    .searchJumperFrame-inputs>input:focus,\n                    .searchJumperFrame-inputs>textarea:focus,\n                    .searchJumperFrame-inputs>select:focus,\n                    .searchJumperFrame-body select:focus {\n                        background-color: #FFF;\n                    }\n                    .searchJumperFrame-buttons {\n                        text-align: center;\n                        margin-bottom: 5px;\n                        display: flex;\n                        justify-content: space-evenly;\n                    }\n                    .searchJumperFrame-buttons>button {\n                        width: 32%;\n                        font-size: 16px;\n                        cursor: pointer;\n                        border: 1px solid #1976d2;\n                        border-radius: 4px;\n                        transition: all .3s;\n                        color: #fff;\n                        background-color: #458bd1;\n                        line-height: 25px;\n                        padding: 3px;\n                    }\n                    .searchJumperFrame-buttons>button:hover {\n                        color: #e3f2fd;\n                    }\n                    .searchJumperFrame-inputs>.sideIcon {\n                        float: right;\n                        margin-top: -38px;\n                        position: relative;\n                        right: 20px;\n                        opacity: 0.8;\n                        background: rgb(0 0 0 / 50%);\n                        border-radius: 5px;\n                        pointer-events: none;\n                        width: 27px;\n                        height: 27px;\n                    }\n                    .searchJumperFrame-inputs>svg.sideIcon {\n                        fill: white;\n                        pointer-events: all;\n                        cursor: pointer;\n                        transition: transform 0.25s ease;\n                    }\n                    .searchJumperFrame-inputs>svg.sideIcon:hover {\n                        transform: scale(1.2);\n                        opacity: 1;\n                        background: rgb(0 0 0);\n                    }\n                    .searchJumperFrame-body>.iconsCon {\n                        max-height: 150px;\n                        overflow: auto;\n                        width: 100%;\n                        border-top: 1px solid rgba(0, 0, 0, 0.23);\n                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);\n                    }\n                    .searchJumperFrame-body>.iconsCon>img {\n                        margin: 5px;\n                        cursor: pointer;\n                        max-width: 120px;\n                        border: 2px solid #ffffff;\n                        box-sizing: border-box;\n                        background: #80808030;\n                        transition: background 0.25s ease;\n                    }\n                    .searchJumperFrame-body>.iconsCon>img:hover {\n                        border: 2px solid #4e91d3;\n                        background: gray;\n                    }\n                    .maxContent .searchJumperFrame-inputs {\n                        width: 50%;\n                        float: left;\n                    }\n                    .searchJumperFrame-body>.moreItem {\n                        display: none;\n                    }\n                    .maxContent>.searchJumperFrame-body>.moreItem {\n                        display: block;\n                    }\n                    .maxContent>.searchJumperFrame-body {\n                        width: 600px;\n                        margin-left: -300px;\n                    }\n                    .searchJumperFrame-maxBtn,\n                    .searchJumperFrame-closeBtn {\n                        position: absolute;\n                        right: 5px;\n                        top: 5px;\n                        color: white;\n                        width: 25px;\n                        cursor: pointer;\n                        transition:transform 0.25s ease;\n                    }\n                    .searchJumperFrame-maxBtn:hover,\n                    .searchJumperFrame-closeBtn:hover {\n                        transform: scale(1.2);\n                    }\n                    .searchJumperFrame-maxBtn>#maxBtn {\n                        display: block;\n                    }\n                    .searchJumperFrame-maxBtn>#minBtn {\n                        display: none;\n                    }\n                    .maxContent .searchJumperFrame-maxBtn>#maxBtn {\n                        display: none;\n                    }\n                    .maxContent .searchJumperFrame-maxBtn>#minBtn {\n                        display: block;\n                    }\n                    .crawling>.searchJumperFrame-body {\n                        display: none;\n                    }\n                    .searchJumperFrame-crawlBody {\n                        display: none;\n                    }\n                    .crawling>.searchJumperFrame-crawlBody {\n                        display: block;\n                    }\n                    .searchJumperFrame-buttons>button#submitCrawl,\n                    .searchJumperFrame-buttons>button#record,\n                    .searchJumperFrame-buttons>button#copy,\n                    .searchJumperFrame-buttons>button#loop {\n                        width: 100%;\n                        margin: 0 3px;\n                    }\n                    .searchJumperFrame-crawlBody>.actionCon {\n                        height: 200px;\n                        background: gray;\n                        border-radius: 10px;\n                        margin: 10px;\n                        padding: 0 10px 10px 10px;\n                        resize: auto;\n                        box-sizing: border-box;\n                        overflow: auto;\n                    }\n                    .searchJumperFrame-crawlBody>.actionCon>div {\n                        width: 100%;\n                        font-size: 16px;\n                        background: #000000cc;\n                        border-radius: 8px;\n                        color: white;\n                        margin: 3px 0;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        cursor: pointer;\n                        white-space: nowrap;\n                    }\n                    .searchJumperFrame-crawlBody>.actionCon>div>span {\n                        background: #275f90;\n                        border-radius: 5px;\n                        max-width: 40px;\n                        text-overflow: ellipsis;\n                        overflow: hidden;\n                        display: inline-block;\n                        margin: 0 3px;\n                        white-space: nowrap;\n                    }\n                    @media (prefers-color-scheme: dark) {\n                      .searchJumperFrame-body,\n                      .searchJumperFrame-crawlBody,\n                      .searchJumperFrame-input-title,\n                      .searchJumperFrame-inputs>input,\n                      .searchJumperFrame-inputs>textarea,\n                      .searchJumperFrame-inputs>select,\n                      .searchJumperFrame-body select {\n                        background-color: black!important;\n                        color: #d5d5d5!important;\n                      }\n                      .searchJumperFrame-inputs>input:focus,\n                      .searchJumperFrame-inputs>textarea:focus,\n                      .searchJumperFrame-inputs>select:focus,\n                      .searchJumperFrame-body select:focus {\n                        background-color: #1e1e1e!important;\n                      }\n                      .searchJumperFrame-inputs>input,\n                      .searchJumperFrame-inputs>textarea,\n                      .searchJumperFrame-inputs>select,\n                      .searchJumperFrame-body select {\n                        border: 1px solid rgb(255 255 255 / 36%);\n                      }\n                      .searchJumperFrame-title,\n                      .searchJumperFrame-buttons>button {\n                        background: #245d8f!important;\n                      }\n                      .searchJumperFrame-body>.iconsCon>img {\n                        border: 2px solid #000000;\n                      }\n                    }\n                    @media screen and (max-height: 600px) {\n                      .searchJumperFrame-body,\n                      .searchJumperFrame-crawlBody {\n                        top: 10px;\n                        margin-top: 0px;\n                      }\n                    }\n                ");
Y=document.createElement("div");Y.innerHTML=ba(`
                <div class="searchJumperFrame-body">
                    <a href="${Oa}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg=="}" />${C("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${C("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${C("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${C("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${C("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${C("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${C("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${C("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${C("openInDefault")}</option>
                            <option value="true">${C("openInNewTab")}</option>
                            <option value="false">${C("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${C("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${C("siteTest")}</button>
                        <button id="cancel" type="button">${C("siteCancel")}</button>
                        <button id="add" type="button">${C("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${Oa}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg=="}" />${C("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${'<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>'}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${C("emuInputTips")}">${C("inputAction")}</button>
                        <button id="click" type="button" title="${C("emuClickTips")}">${C("clickAction")}</button>
                        <button id="sleep" type="button" title="${C("emuWaitTips")}">${C("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${C("emuCopyTips")}">${C("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${C("emuRecordTips")}">${C("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${C("emuLoopTips")}">${C("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${C("emuStopTips")}">${C("submitCrawl")}</button>
                    </div>
                </div>
                `);Xa||Y.appendChild(g);let k=Y.children[0];cc=Y.querySelector("[name='siteName']");Gb=Y.querySelector("[name='description']");Sa=Y.querySelector("[name='url']");vb=Y.querySelector("[name='icon']");Ta=Y.querySelector(".searchJumperFrame-inputs>img");Hb=Y.querySelector(".iconsCon");$c=Y.querySelector("#test");ad=Y.querySelector("#cancel");bd=Y.querySelector("#add");Ib=Y.querySelector("select[name='typeSelect']");dc=Y.querySelector("[name='siteKeywords']");ec=Y.querySelector("[name='siteMatch']");
fc=Y.querySelector("select[name='openSelect']");let p,v,q=!1,n=z=>{q||(Y.classList.add("draging"),q=!0);let x=z.clientY-p.y+v.y;k.style.marginLeft=z.clientX-p.x+v.x+"px";k.style.marginTop=x+"px"},m=z=>{z.preventDefault();z.stopPropagation();Y.classList.remove("draging");document.removeEventListener("mousemove",n);document.removeEventListener("mouseup",m)};Y.querySelector(".searchJumperFrame-title").addEventListener("mousedown",z=>{z.preventDefault();z.stopPropagation();q=!1;p={x:z.clientX,y:z.clientY};
z=getComputedStyle(k);v={x:parseInt(z.marginLeft||0),y:parseInt(z.marginTop||0)};document.addEventListener("mousemove",n);document.addEventListener("mouseup",m)});Ta.onload=z=>{Ta.style.display=""};Y.querySelector("#maxBtn").addEventListener("click",z=>{Y.classList.add("maxContent")});Y.querySelector("#minBtn").addEventListener("click",z=>{Y.classList.remove("maxContent")});for(g=0;g<l.sitesConfig.length;g++)e=l.sitesConfig[g],h=document.createElement("option"),h.value=g,""!==yc&&yc==g&&(h.selected=
"selected"),h.innerText=e.type,Ib.appendChild(h);$c.addEventListener("click",z=>{if(/#p{/.test(Sa.value)){if(z=Sa.value.match(/#p{(.*)}/)){var x=[];z[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(K=>{K=K.trim();if(/^loopStart\(\d+\)$/.test(K)){var M=K.match(/loopStart\((.*)\)/);x.push(["@loopStart",M[1]])}else"loopEnd"==K?x.push(["@loopEnd",""]):K.startsWith("click(")&&K.endsWith(")")?(M=K.slice(6,K.length-1))&&x.push(["@click",M.replace(/\\([=&])/g,"$1").trim()]):K.startsWith("dblclick(")&&
K.endsWith(")")?(M=K.slice(9,K.length-1))&&x.push(["@dblclick",M.replace(/\\([=&])/g,"$1").trim()]):K.startsWith("rclick(")&&K.endsWith(")")?(M=K.slice(7,K.length-1))&&x.push(["@rclick",M.replace(/\\([=&])/g,"$1").trim()]):K.startsWith("copy(")&&K.endsWith(")")?(M=K.slice(5,K.length-1))&&x.push(["@copy",M.replace(/\\([=&])/g,"$1").trim()]):K.startsWith("call(")&&K.endsWith(")")?(M=K.slice(5,K.length-1))&&x.push(["@call",M.replace(/\\([=&])/g,"$1").trim()]):K.startsWith("wait(")&&K.endsWith(")")?(M=
K.slice(5,K.length-1),x.push(["@wait",M.replace(/\\([=&])/g,"$1").trim()])):/^sleep\(\d+\)$/.test(K)?(M=K.match(/sleep\((.*)\)/))&&x.push(["@sleep",M[1]]):/^reload\(\d?\)$/.test(K)?(M=K.match(/reload\((.*)\)/),x.push(["@reload",M[1]])):(K=K.replace(/([^\\])=/g,"$1SJ^PARAM").replace(/\\([=&])/g,"$1"),M=K.split("SJ^PARAM"),2===M.length?(K=M[0],M=M[1].replace(/\\([=&])/g,"$1"),x.push([K,M])):(K.endsWith(".click()")||K.endsWith(".click"))&&x.push(["@"+K.replace(/\.click(\(\))?$/,""),"click"]))});Ya=x;
A.submitAction(x)}}else/[:%]p{/.test(Sa.value)||f&&"utf-8"!=f.toLowerCase()?oc(f,Sa.value.replace(/%se?\b/g,"searchJumper"),"_blank"):wa(Sa.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})});ad.addEventListener("click",z=>{Y.parentNode&&Y.parentNode.removeChild(Y)});bd.addEventListener("click",z=>{za||Qb(()=>{let x=null;for(let K=0;K<l.sitesConfig.length;K++){let M=l.sitesConfig[K];for(let N=0;N<M.sites.length;N++){let ca=M.sites[N];if(ca.url==Sa.value){if(K==parseInt(Ib.value)){alert("Already added!");
return}if(window.confirm(C("siteExist")))x={name:ca.name+" - "+M.type,url:`["${ca.name}"]`};else return}}}null==x&&(x={name:cc.value,url:Sa.value},vb.value&&vb.value!=Sa.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(x.icon=vb.value),Gb.value&&Gb.value!=cc.value&&(x.description=Gb.value),dc.value&&(x.keywords=dc.value),ec.value&&(x.match=ec.value),fc.value&&"-1"!=fc.value&&(x.openInNewTab="true"===fc.value),self.charset&&"utf-8"!=f.toLowerCase()&&(x.charset=self.charset),
self.kwFilter&&(x.kwFilter=self.kwFilter),self.match&&(x.match=self.match),self.hideNotMatch&&(x.hideNotMatch=self.hideNotMatch));l.sitesConfig[Ib.value].sites.push(x);l.lastModified=(new Date).getTime();O.setItem("lastAddType",Ib.value);O.setItem("searchData",l);Ea(C("siteAddOver"));Y.parentNode&&Y.parentNode.removeChild(Y);window.postMessage({searchData:l,version:Yb.script.version||0,command:"loadConfig"},"*");A.refreshEngines()})});cd=Y.querySelector("#crawlBtn");g=Y.querySelector(".searchJumperFrame-closeBtn");
let w=Y.querySelector(".actionCon");e=Y.querySelector("#input");h=Y.querySelector("#click");let t=Y.querySelector("#sleep"),y=Y.querySelector("#copy"),W=Y.querySelector("#submitCrawl"),Q=Y.querySelector("#record"),B=Y.querySelector("#loop"),E,F=(z,x="",K="")=>{let M=document.createElement("div"),N=z;switch(z){case "input":N=C("inputOutput",[x,K]);break;case "click":N=C("clickOutput",x);break;case "dblclick":N=C("dblclickOutput",x);break;case "rclick":N=C("rclickOutput",x);break;case "copy":N=C("copyOutput",
x);break;case "loopStart":N=C("loopStart",K);break;case "loopEnd":N=C("loopEnd");break;case "sleep":N=C("sleepOutput",K)}N&&(M.innerHTML=ba(N),M.dataset.type=z,M.dataset.sel=x,M.dataset.val=K,M.draggable="true",M.ondragover=ca=>{ca.preventDefault()},M.ondragstart=ca=>{E=M},M.ondrop=ca=>{w.insertBefore(E,M)},M.onclick=ca=>{let ia=ca.target;if("SPAN"==ia.nodeName.toUpperCase())if("element"==ia.className)Ca.getSelector(ra=>{ia.innerText=ra;ia.title=ra;Y.style.display="";M.dataset.sel=ra}),Y.style.display=
"none";else{if(ca=prompt(C("inputNewValue"),ia.innerText))ia.innerText=ca,ia.title=ca,M.dataset.val=ca}else confirm(C("deleteConfirm"))&&w.removeChild(M)},M.oncontextmenu=ca=>{let ia=ca.target;if("SPAN"==ia.nodeName.toUpperCase())if(ca.preventDefault(),"element"==ia.className){if(ca=prompt("Selector",ia.innerText))ia.innerText=ca,ia.title=ca,M.dataset.sel=ca}else if(ca=prompt(C("inputNewValue"),ia.innerText))ia.innerText=ca,ia.title=ca,M.dataset.val=ca},w.appendChild(M))},Z=()=>{w.innerHTML=ba();
let z=Sa.value.match(/#p{(.*)}/);z&&z[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(x=>{x=x.trim();if(/^loopStart\(\d+\)$/.test(x))x=x.match(/loopStart\((.*)\)/),F("loopStart","",x[1]);else if("loopEnd"==x)F("loopEnd");else if(x.startsWith("click(")&&x.endsWith(")"))(x=x.slice(6,x.length-1))&&F("click",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("dblclick(")&&x.endsWith(")"))(x=x.slice(9,x.length-1))&&F("dblclick",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("rclick(")&&
x.endsWith(")"))(x=x.slice(7,x.length-1))&&F("rclick",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("copy(")&&x.endsWith(")"))(x=x.slice(5,x.length-1))&&F("copy",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("call(")&&x.endsWith(")"))(x=x.slice(5,x.length-1))&&F("call","",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("wait(")&&x.endsWith(")"))(x=x.slice(5,x.length-1))&&F("wait","",x.replace(/\\([=&])/g,"$1").trim());else if(x.startsWith("open(")&&x.endsWith(")"))(x=
x.slice(5,x.length-1))&&F("open","",x.replace(/\\([=&])/g,"$1").trim());else if(/^sleep\(\d+\)$/.test(x))(x=x.match(/sleep\((.*)\)/))&&F("sleep","",x[1]);else if(/^reload\(\d?\)$/.test(x))x=x.match(/reload\((.*)\)/),F("reload","",x[1]);else{x=x.replace(/([^\\])=/g,"$1SJ^PARAM").replace(/\\([=&])/g,"$1");let K=x.split("SJ^PARAM");2===K.length?F("input",K[0],K[1].replace(/\\([=&])/g,"$1")):(x.endsWith(".click()")||x.endsWith(".click"))&&F("click",x.replace(/\.click(\(\))?$/,""))}})},S=()=>{let z=[];
[].forEach.call(w.children,x=>{if(x){var K=x.dataset.sel,M=x.dataset.val||"";switch(x.dataset.type){case "click":z.push(`click(${K.replace(/([=&])/g,"\\$1")})`);break;case "dblclick":z.push(`dblclick(${K.replace(/([=&])/g,"\\$1")})`);break;case "rclick":z.push(`rclick(${K.replace(/([=&])/g,"\\$1")})`);break;case "copy":z.push(`copy(${K.replace(/([=&])/g,"\\$1")})`);break;case "input":z.push(`${K.replace(/([=&])/g,"\\$1")}=${M}`);break;case "sleep":z.push(`sleep(${M})`);break;case "loopEnd":z.push("loopEnd");
break;default:z.push(`${x.dataset.type}(${M.replace(/([=&])/g,"\\$1")})`)}}});return z.join("&")};cd.addEventListener("click",z=>{Z();Y.classList.add("crawling")});g.addEventListener("click",z=>{Y.classList.remove("crawling")});let H,J=z=>{""===Y.style.display||/INPUT|TEXTAREA|SELECT|OPTION/i.test(z.target.nodeName)||(clearTimeout(H),H=setTimeout(()=>{F("click",Ca.geneSelector(z.target,!0))},300))},X=z=>{""===Y.style.display||/INPUT|TEXTAREA|SELECT|OPTION/i.test(z.target.nodeName)||(clearTimeout(H),
F("dblclick",Ca.geneSelector(z.target,!0)))},V=z=>{""===Y.style.display||/INPUT|TEXTAREA|SELECT|OPTION/i.test(z.target.nodeName)||(z.preventDefault(),clearTimeout(H),F("rclick",Ca.geneSelector(z.target,!0)))},ea=z=>{""!==Y.style.display&&F("input",Ca.geneSelector(z.target,!0),z.target.value)},r=z=>{if(""!==Y.style.display){var x=!1;27==z.keyCode?x=!0:13==z.keyCode&&(z.preventDefault(),z.stopPropagation(),z.target&&z.target.blur&&z.target.blur(),x=!0);x&&(Y.style.display="",document.removeEventListener("keydown",
r,!0),document.removeEventListener("click",J),document.removeEventListener("dblclick",X),document.removeEventListener("contextmenu",V),document.removeEventListener("change",ea))}};Q.addEventListener("click",z=>{alert(C("startRecord"));Y.style.display="none";setTimeout(()=>{document.addEventListener("keydown",r,!0);document.addEventListener("click",J);document.addEventListener("dblclick",X);document.addEventListener("contextmenu",V);document.addEventListener("change",ea)},100)});let G=!1;B.addEventListener("click",
z=>{if(G)F("loopEnd"),B.innerText=C("loopAction");else{z=prompt(C("loopTimes"),1);if(!z)return;F("loopStart","",z||"1");B.innerText=C("loopActionEnd")}G=!G});e.addEventListener("click",z=>{Ca.getSelector(x=>{F("input",x,"%s");Y.style.display=""},!G);Y.style.display="none"});y.addEventListener("click",z=>{Ca.getSelector(x=>{F("copy",x,"%s");Y.style.display=""},!G);Y.style.display="none"});h.addEventListener("dblclick",z=>{clearTimeout(H);z.preventDefault();z.stopPropagation();Ca.getSelector(x=>{F("dblclick",
x);Y.style.display=""},!G);Y.style.display="none"});h.addEventListener("contextmenu",z=>{clearTimeout(H);z.preventDefault();z.stopPropagation();Ca.getSelector(x=>{F("rclick",x);Y.style.display=""},!G);Y.style.display="none"});h.addEventListener("click",z=>{clearTimeout(H);H=setTimeout(()=>{Ca.getSelector(x=>{F("click",x);Y.style.display=""},!G);Y.style.display="none"},250)});t.addEventListener("click",z=>{(z=(z=prompt(C("sleepPrompt"),1E3))&&parseInt(z))&&F("sleep","",z)});W.addEventListener("click",
z=>{if(z=S())Sa.value=location.href+"#p{"+z+"}";Y.classList.remove("crawling")})}A.addToShadow(Y);dc.value="";ec.value="";cc.value=a||"";Gb.value=b||"";Sa.value=d||"";c&&c[0]?(Ta.style.display="",0===d.indexOf(location.origin)?(Ta.onerror=k=>{Ta.onerror=null;vb.value=c[0];Ta.src=c[0]},Ta.src=location.origin+"/favicon.ico"):(vb.value=c[0],Ta.src=c[0])):(Ta.style.display="none",Ta.src=(/^(showTips:)?https?:/.test(d)?d.split("\n")[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):
location.origin)+"/favicon.ico");Hb.innerHTML=ba();c&&1<c.length?(Hb.style.opacity="",c.forEach(k=>{let p=document.createElement("img");p.src=k;p.addEventListener("click",v=>{vb.value=k;Ta.src=k});p.onload=v=>{p.title=p.naturalWidth+" x "+p.naturalHeight+"\n"+k.replace(/.*\/([^\/]+)/,"$1")};Hb.appendChild(p)})):Hb.style.opacity=0}function Wc(a,b){Na({method:"GET",url:a,headers:{referer:a,origin:a},onload:d=>{var c=d&&d.responseXML&&d.responseXML.querySelector('Url[type="text/html"]');if(c){var f=
d.responseXML.querySelector("ShortName"),g=d.responseXML.querySelector("Description"),e=d.responseXML.querySelector("Image"),h=d.responseXML.querySelector("InputEncoding"),k=c.querySelectorAll("Param");f=f&&f.textContent;g=g&&g.textContent;c=c.getAttribute("template");e=e&&e.textContent;h=h&&h.textContent;if(0<k.length){let p=[];[].forEach.call(k,v=>{p.push(`${v.getAttribute("name")}=${v.getAttribute("value")}`)});c+=`%p{${p.join("&")}}`}Xb(f,g,c.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,
"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[e],h);b("load",d)}else b("error",d)},onerror:d=>{b("error",d)},ontimeout:d=>{b("error",d)}})}function Bd(){if("mycroftproject.com"===location.hostname){Ja("\n                 .searchJumper-loading {\n                     animation-name: changeScale;\n                     animation-duration: 2.5s;\n                     animation-iteration-count: infinite;\n                 }\n                 @keyframes changeScale {\n                     0% {\n                         -webkit-transform:rotate(0deg) scale(1);\n                         -moz-transform:rotate(0deg) scale(1);\n                         transform:rotate(0deg) scale(1);\n                     }\n                     50% {\n                         -webkit-transform:rotate(180deg) scale(1.5);\n                         -moz-transform:rotate(180deg) scale(1.5);\n                         transform:rotate(180deg) scale(1.5);\n                     }\n                     100% {\n                         -webkit-transform:rotate(360deg) scale(1);\n                         -moz-transform:rotate(360deg) scale(1);\n                         transform:rotate(360deg) scale(1);\n                     }\n                 }\n            ");
var a=()=>{let d=document.querySelectorAll("img.icon~a[href^='/install']");if(!(0>=d.length)){var c=!1;[].forEach.call(d,f=>{if(!(f.previousElementSibling&&f.previousElementSibling.classList.contains("searchJumperIcon")||f.previousElementSibling&&f.previousElementSibling.previousElementSibling&&f.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))){var g=f.href.match(/\?id=(\d+)&basename=(.+?)&/);if(null!==g){var e=document.createElement("img");e.className="icon searchJumperIcon";
e.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;";e.title="Add to SearchJumper";e.src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==";
f.parentNode.insertBefore(e,f);e.onclick=h=>{c||(c=!0,e.classList.add("searchJumper-loading"),Wc(`https://mycroftproject.com/installos.php/${g[1]}/${g[2]}.xml`,(k,p)=>{c=!1;e.classList.remove("searchJumper-loading");"load"!=k&&Ea(p.statusText||p.error)}))}}}})}};a();var b=setInterval(()=>{a()},1E3);window.addEventListener("load",d=>{clearInterval(b);a()})}}function Cd(){if(fb){A.appendBar();A.showAllSites();setTimeout(()=>{A.con.style.zIndex=0},5);if(location.hash){let a=location.hash.slice(1);try{a=
decodeURIComponent(a)}catch(b){}A.searchJumperInputKeyWords.value=a}else if(location.search){let a,b,d;location.search.slice(1).split("&").forEach(c=>{var f=c.split("=");c=f[0];f=f[1];try{f=decodeURIComponent(f)}catch(g){}switch(c){case "kw":a=f;break;case "engine":b=f;break;case "self":d=f}});a&&(A.searchJumperInputKeyWords.value=a||"");b&&A.searchBySiteName(b,{},!!d)}R(document).style.cssText="\n                    zoom: 1;\n                    margin: 0;\n                    padding: 0;\n                    width: 100vw;\n                    height: 100vh;\n                    background-position: center 0;\n                    background-repeat: no-repeat;\n                    background-size: cover;\n                    -webkit-background-size: cover;\n                    -o-background-size: cover;\n                    overflow: hidden;\n                ";
if(l.prefConfig.bgUrl&&(Za=l.prefConfig.bgUrl,Za.length)){R(document).style.backgroundImage=`url("${Za}")`;return}O.getItem("allPageBg",a=>{a?(Za=a.url,R(document).style.backgroundImage=`url("${a.base64||Za}")`):a={url:""};Na({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(b){var d=null;try{d=JSON.parse(b.responseText);var c=d.images[0].url;/^https?:\/\//.test(c)||(c="https://global.bing.com"+c);Za=c;c!=a.url&&(Na({method:"GET",url:c,
responseType:"blob",onload:function(f){f=f.response;var g=new FileReader;g.readAsDataURL(f);g.onload=function(e){a={url:c,base64:e.target.result};O.setItem("allPageBg",a)}}}),a.base64||(R(document).style.backgroundImage=`url("${c}")`))}catch(f){console.log(f)}}})})}}async function Dd(){await A.initRun();wd();Cd()}async function Ma(a){await new Promise(b=>{setTimeout(()=>{b()},a)})}async function Ed(){let a=await new Promise(b=>{O.getItem("searchData",d=>{b(d)})});Fa=await new Promise(b=>{O.getItem("cacheKeywords",
d=>{b(d||"")})});yb=await new Promise(b=>{O.getItem("cacheFilter",d=>{b(d||"")})});zc=await new Promise(b=>{O.getItem("disableState",d=>{b(d||!1)})});hb=await new Promise(b=>{O.getItem("tipsStorage",d=>{b(d||[])})});Jb=await new Promise(b=>{O.getItem("lastSign",d=>{b(d||!1)})});O.setItem("lastSign",!1);Ya=await O.getListItem("inPagePostParams",location.hostname);ta=await new Promise(b=>{O.getItem("cacheIcon",d=>{b(d||{})})});$a=await new Promise(b=>{O.getItem("historySites",d=>{b(d||[])})});Kb=await new Promise(b=>
{O.getItem("historyType",d=>{b(d||"")})});Ga=await new Promise(b=>{O.getItem("sortTypeNames",d=>{b(d||{})})});Ha=await new Promise(b=>{O.getItem("sortSiteNames",d=>{b(d||{})})});Ia=await new Promise(b=>{O.getItem("globalInPageWords",d=>{b(d||"")})});ab=await new Promise(b=>{O.getItem("navEnable",d=>{b("undefined"===typeof d?!0:d)})});gc=await new Promise(b=>{O.getItem("referrer",d=>{b(d||"")})});hc=await new Promise(b=>{O.getItem("disableHighlight",d=>{b(d||"")})});dd=await new Promise(b=>{O.getItem("lastHighlight",
d=>{b(d||"")})});ed=await new Promise(b=>{O.getItem("allPageNewMode",d=>{b(d||!1)})});yc=await new Promise(b=>{O.getItem("lastAddType",d=>{b(d||"")})});a&&(l=a,Ab=l.lastModified);l.lastModified||(l.sitesConfig=sitesConfig);l.prefConfig.lang&&"0"!=l.prefConfig.lang&&(Lb=l.prefConfig.lang);switch(Lb){case "zh-CN":case "zh-SG":kb={import:"\u5bfc\u5165",filter:"\u7b5b\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662f\u5426\u5bfc\u5165\u914d\u7f6e\uff1f",settings:"\u914d\u7f6e\u811a\u672c",batchOpen:"\u6279\u91cf\u6253\u5f00",
batchOpenConfirm:"\u786e\u5b9a\u8981\u6279\u91cf\u6253\u5f00\u5417\uff1f",postOver:"\u53d1\u9001\u6210\u529f\uff1a",postError:"\u53d1\u9001\u5931\u8d25\uff1a",copyOver:"\u590d\u5236\u6210\u529f",keywords:"\u8bf7\u8f93\u5165\u641c\u7d22\u8bcd",targetUrl:"\u8bf7\u8f93\u5165\u641c\u7d22URL",siteName:"\u7ad9\u540d",siteDesc:"\u63cf\u8ff0",siteUrl:"\u5730\u5740",siteIcon:"\u56fe\u6807",siteTest:"\u6d4b\u8bd5",siteCancel:"\u53d6\u6d88",siteAdd:"\u6dfb\u52a0",siteType:"\u5206\u7c7b",siteExist:"\u5df2\u5b58\u5728\u76f8\u540c\u89c4\u5219\uff0c\u662f\u5426\u6dfb\u52a0\u4e3a\u514b\u9686\u9879\uff1f",
siteAddOver:"\u7ad9\u70b9\u6dfb\u52a0\u6210\u529f",multiline:"\u662f\u5426\u4ee5\u6362\u884c\u7b26\u5206\u9694\u591a\u884c\u641c\u7d22\uff1f",multilineTooMuch:"\u884c\u6570\u8d85\u8fc710\u884c\uff0c\u662f\u5426\u7ee7\u7eed\u641c\u7d22\uff1f",inputPlaceholder:"\u7b5b\u9009\u5f15\u64ce",inputTitle:"\u7b5b\u9009\u5f15\u64ce\uff0c\u652f\u6301 * ? \u901a\u914d\u7b26\uff0c$\u4ee3\u8868\u672b\u5c3e\uff0c^\u4ee3\u8868\u5f00\u5934\uff0c\u5206\u7ec4**\u7ad9\u70b9 \u53ef\u7b5b\u9009\u6307\u5b9a\u5206\u7ec4\uff0c\u4f8b\u5982 \u56fe\u7247**baidu\uff0ctab \u4e0b\u4e00\u9879",
inputKeywords:"\u8f93\u5165\u641c\u7d22\u5173\u952e\u8bcd",inPageTips:"\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff1a$c \u52a0\u5206\u9694\u7b26\uff0c\u4f8b\u5982 $c| search | jumper\uff0c\u9ed8\u8ba4\u7a7a\u683c\u4f5c\u4e3a\u5206\u9694\u7b26\n\u539f\u59cb\u6587\u672c\u4e0d\u5206\u9694\uff1a$o \u52a0\u6587\u672c\uff0c\u4f8b\u5982$oopai liked by hero\n\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a/re/\uff0c\u4f8b\u5982 $c, /google/i , /aPPle/\n\u6dfb\u52a0\u63d0\u793a\u6587\u672c\uff1a\u641c\u7d22\u6587\u672c$t{\u63d0\u793a\u6587\u672c}\uff0c\u4f8b\u5982 linux$t{linux is not unix}\n\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6837\u5f0f\uff1a\u641c\u7d22\u6587\u672c$s{\u80cc\u666f;\u5176\u4ed6}\uff0c\u4f8b\u5982 google$s{#333333;color:red;}\n\u5de6\u952e\u70b9\u51fb\u5173\u952e\u8bcd\u8df3\u8f6c\u81f3\u4e0b\u4e00\u4e2a\uff0c\u53f3\u952e\u70b9\u51fb\u5173\u952e\u8bcd\u8df3\u8f6c\u81f3\u4e0a\u4e00\u4e2a",
inPagePlaceholder:"\u8f93\u5165\u6587\u5b57\uff0c\u6309\u4e0b\u56de\u8f66\u8fdb\u884c\u9875\u5185\u67e5\u627e",pickerBtn:"\u6293\u53d6\u5143\u7d20",multiPickerBtn:"\u6293\u53d6\u5143\u7d20\uff0c\u6309\u4f4f Ctrl \u6216 Command \u8fde\u7eed\u6293\u53d6",editBtn:"\u7f16\u8f91\u67e5\u627e\u6587\u5b57",emptyBtn:"\u6e05\u7a7a\u67e5\u627e\u6587\u5b57",copyInPageBtn:"\u590d\u5236\u67e5\u627e\u6587\u5b57",wordModeBtn:"\u5355\u8bcd\u6a21\u5f0f",copyEleBtn:"\u590d\u5236\u9009\u4e2d\u5143\u7d20",openLinkBtn:"\u6253\u5f00\u9009\u4e2d\u94fe\u63a5",
maxEleBtn:"\u5c55\u5f00\u9009\u4e2d\u5143\u7d20",minEleBtn:"\u6536\u8d77\u9009\u4e2d\u5143\u7d20",expandAll:"\u5168\u90e8\u5c55\u5f00",collapseAll:"\u5168\u90e8\u5408\u8d77",rename:"\u91cd\u547d\u540d",recoverBtn:"\u6062\u590d\u67e5\u627e\u6587\u5b57",pinBtn:"\u56fa\u5b9a\u67e5\u627e\u6587\u5b57\uff0c\u5728\u6240\u6709\u6807\u7b7e\u9875\u4e2d\u641c\u7d22",locBtn:"\u5b9a\u4f4d\u4fa7\u8fb9\u680f",filterSites:"\u7b5b\u9009\u641c\u7d22\u5f15\u64ce",searchInPage:"\u9875\u5185\u67e5\u627e",removeBtn:"\u79fb\u9664\u641c\u7d22\u8bcd",
saveRuleBtn:"\u4fdd\u5b58\u5f53\u524d\u7ad9\u70b9\u7684\u641c\u7d22\u8bcd",wordContent:"\u641c\u7d22\u8bcd\u5185\u5bb9",wordHide:"\u9690\u85cf\u7236\u7ea7\u5143\u7d20",wordHideTips:"\u5143\u7d20\u6df1\u5ea6\uff0c0\u4e3a\u5f53\u524d\u7236\u7ea7",wordStyle:"\u641c\u7d22\u8bcd\u6837\u5f0f",wordTitle:"\u641c\u7d22\u8bcd\u6ce8\u91ca",re:"\u6b63\u5219",ignoreCase:"\u4e0d\u533a\u5206\u5927\u5c0f\u5199",filterLink:"\u7b5b\u9009\u94fe\u63a5",modify:"\u4fee\u6539",cancel:"\u53d6\u6d88",modifyWord:"\u4fee\u6539\u9875\u5185\u641c\u7d22\u8bcd",
addSearchEngine:"\u6dfb\u52a0\u641c\u7d22\u5f15\u64ce",noValidItemAsk:"\u672a\u627e\u5230\u6709\u6548\u5143\u7d20\uff0c\u662f\u5426\u624b\u52a8\u7f16\u8f91\u89c4\u5219\u5e76\u6dfb\u52a0\uff1f",expand:"\u5c55\u5f00\u5269\u4f59\u7ad9\u70b9",add:"\u6dfb\u52a0",addWord:"\u6dfb\u52a0\u65b0\u8bcd\u8bed",wordRange:"\u751f\u6548\u8303\u56f4",customInputFrame:"\u81ea\u5b9a\u4e49\u641c\u7d22\u53c2\u6570",customSubmit:"\u63d0\u4ea4\u641c\u7d22",finalSearch:"\u76ee\u6807\u641c\u7d22\u5b57\u4e32",search:"\u641c\u7d22\u6b64\u9879",
siteKeywords:"\u5173\u952e\u8bcd(\u591a\u4e2a\u5173\u952e\u8bcd\u4ee5|\u5206\u9694)",siteMatch:"\u7ad9\u70b9 URL \u5339\u914d\u6b63\u5219",openSelect:"\u6253\u5f00\u9009\u9879",openInDefault:"\u9ed8\u8ba4",openInNewTab:"\u65b0\u6807\u7b7e\u9875\u6253\u5f00",openInCurrent:"\u5f53\u524d\u9875\u6253\u5f00",currentType:"\u5f53\u524d\u5206\u7c7b",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8fd8\u539f",addAction:"\u6dfb\u52a0\u64cd\u4f5c",crawlInfo:"\u6a21\u62df\u8f93\u5165\u641c\u7d22",inputAction:"\u8f93\u5165",
clickAction:"\u70b9\u51fb",sleepAction:"\u7b49\u5f85",copyAction:"\ud83d\udcc4\u590d\u5236\u5143\u7d20",submitCrawl:"\u2611\ufe0f\u5b8c\u6210\u64cd\u4f5c",inputOutput:'\u5728\u5143\u7d20<span title="#t1#" class="element">#t1#</span>\u5185\u8f93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70b9\u51fb\u5143\u7d20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53cc\u51fb\u5143\u7d20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53f3\u51fb\u5143\u7d20<span title="#t#" class="element">#t#</span>',
copyOutput:'\u590d\u5236\u5143\u7d20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4f11\u7720<span title="#t#">#t#</span>\u6beb\u79d2',inputNewValue:"\u8bf7\u8f93\u5165\u65b0\u503c",deleteConfirm:"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u9879\u5417\uff1f",sleepPrompt:"\u7b49\u5f85\u65f6\u95f4\uff08\u6beb\u79d2\uff09",startCache:"\u5f00\u59cb\u7f13\u5b58\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u7f13\u5b58\u5b8c\u6bd5\uff0c\u52ff\u5173\u95ed\u914d\u7f6e\u9875\uff01",cacheOver:"\u6240\u6709\u56fe\u6807\u90fd\u5df2\u7f13\u5b58\u5b8c\u6bd5\uff01",
cspDisabled:"\u811a\u672c\u6837\u5f0f\u88ab\u5f53\u524d\u7ad9\u70b9\u7684 CSP \u963b\u6b62\uff0c\u56e0\u6b64\u65e0\u6cd5\u663e\u793a\uff0c\u8bf7\u5c1d\u8bd5\u5b89\u88c5 Allow CSP: Content-Security-Policy \u6269\u5c55\u83b7\u53d6\u6743\u9650",Sunday:"\u661f\u671f\u65e5 (\u65e5)",Monday:"\u661f\u671f\u4e00 (\u6708)",Tuesday:"\u661f\u671f\u4e8c (\u706b)",Wednesday:"\u661f\u671f\u4e09 (\u6c34)",Thursday:"\u661f\u671f\u56db (\u6728)",Friday:"\u661f\u671f\u4e94 (\u91d1)",Saturday:"\u661f\u671f\u516d (\u571f)",
template:"\u8bf7\u8bbe\u7f6e\u3010#t#\u3011\u7684\u503c",recordAction:"\u23fa\ufe0f\u5f55\u5236\u64cd\u4f5c",startRecord:"\u5f00\u59cb\u5f55\u5236\u64cd\u4f5c\uff0c\u6309\u56de\u8f66\u952e\u7ed3\u675f\u5f55\u5236",loopAction:"\ud83d\udd01\u5f00\u59cb\u5faa\u73af",loopActionEnd:"\u23f9\ufe0f\u5faa\u73af\u7ed3\u675f",loopStart:'\u5f00\u59cb\u5faa\u73af\uff0c\u5faa\u73af\u6b21\u6570\u4e3a<span title="#t#">#t#</span>',loopEnd:"\u7ed3\u675f\u5faa\u73af",loopTimes:"\u5faa\u73af\u6b21\u6570\uff0c\u5c06\u904d\u5386\u6240\u6709\u5339\u914d\u5143\u7d20\u5e76\u987a\u5e8f\u6267\u884c",
loadingCollection:"\u6b63\u5728\u52a0\u8f7d\u5408\u96c6\uff0c\u8bf7\u7a0d\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5b9a\u9875\u9762\u5143\u7d20\uff08\u4f8b\u5982\u8f93\u5165\u6846\uff09\u5185\u8f93\u5165\u641c\u7d22\u8bcd",emuClickTips:"\u5355\u51fb\u6307\u5b9a\u9875\u9762\u5143\u7d20\uff08\u4f8b\u5982\u6309\u94ae\uff09",emuWaitTips:"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u540e\u7ee7\u7eed\u6267\u884c\uff0c\u5f53\u67d0\u4e2a\u64cd\u4f5c\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u65f6\u5f88\u6709\u7528",
emuCopyTips:"\u590d\u5236\u6307\u5b9a\u5143\u7d20\u7684\u6587\u672c\u5230\u526a\u8d34\u677f",emuRecordTips:"\u5f55\u5236\u63a5\u4e0b\u6765\u7684\u70b9\u51fb\u548c\u8f93\u5165\u64cd\u4f5c",emuLoopTips:"\u5f00\u59cb\u5faa\u73af\uff0c\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u5c06\u904d\u5386\u6240\u6709\u627e\u5230\u7684\u5143\u7d20\u5e76\u4e14\u91cd\u590d\u6307\u5b9a\u6b21\u6570",emuStopTips:"\u7ed3\u675f\u64cd\u4f5c\u5e76\u751f\u6210\u89c4\u5219"};break;case "zh":case "zh-TW":case "zh-HK":kb={import:"\u5c0e\u5165",
filter:"\u7be9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662f\u5426\u5c0e\u5165\u914d\u7f6e\uff1f",settings:"\u914d\u7f6e\u811a\u672c",batchOpen:"\u6279\u91cf\u6253\u958b",batchOpenConfirm:"\u78ba\u5b9a\u8981\u6279\u91cf\u6253\u958b\u55ce\uff1f",postOver:"\u767c\u9001\u6210\u529f\uff1a",postError:"\u767c\u9001\u5931\u6557\uff1a",copyOver:"\u8907\u88fd\u6210\u529f",keywords:"\u8acb\u8f38\u5165\u641c\u5c0b\u8a5e",targetUrl:"\u8acb\u8f38\u5165\u641c\u5c0bURL",siteName:"\u7ad9\u540d",siteDesc:"\u63cf\u8ff0",
siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6a19",siteTest:"\u6e2c\u8a66",siteCancel:"\u53d6\u6d88",siteAdd:"\u6dfb\u52a0",siteType:"\u5206\u985e",siteExist:"\u5df2\u5b58\u5728\u76f8\u540c\u898f\u5247\uff0c\u662f\u5426\u6dfb\u52a0\u70ba\u514b\u9686\u9805\uff1f",siteAddOver:"\u7ad9\u9ede\u6dfb\u52a0\u6210\u529f",multiline:"\u662f\u5426\u4ee5\u63db\u884c\u7b26\u5206\u9694\u591a\u884c\u641c\u5c0b\uff1f",multilineTooMuch:"\u884c\u6578\u8d85\u904e10\u884c\uff0c\u662f\u5426\u7e7c\u7e8c\u641c\u5c0b\uff1f",
inputPlaceholder:"\u7be9\u9078\u5f15\u64ce",inputTitle:"\u7be9\u9078\u5f15\u64ce\uff0c\u652f\u63f4 * ? \u901a\u914d\u7b26\uff0c$\u4ee3\u8868\u672b\u5c3e\uff0c^\u4ee3\u8868\u958b\u982d\uff0c\u5206\u7d44**\u7ad9\u9ede \u53ef\u7be9\u9078\u6307\u5b9a\u5206\u7d44\uff0c\u4f8b\u5982 \u5716\u7247**google\uff0ctab \u4e0b\u4e00\u9805",inputKeywords:"\u8f38\u5165\u641c\u5c0b\u95dc\u9375\u8a5e",inPageTips:"\u81ea\u5b9a\u7fa9\u5206\u9694\u7b26\uff1a$c \u52a0\u5206\u9694\u7b26\uff0c\u4f8b\u5982 $c| search | jumper\uff0c\u9ed8\u8a8d\u7a7a\u683c\u4f5c\u70ba\u5206\u9694\u7b26\n\u539f\u59cb\u6587\u672c\u4e0d\u5206\u9694\uff1a$o \u52a0\u6587\u672c\uff0c\u4f8b\u5982$oopai liked by hero\n\u6b63\u5247\u8868\u9054\u5f0f\uff1a/re/\uff0c\u4f8b\u5982 $c, /google/i , /aPPle/\n\u6dfb\u52a0\u63d0\u793a\u6587\u672c\uff1a\u641c\u5c0b\u6587\u672c$t{\u63d0\u793a\u6587\u672c}\uff0c\u4f8b\u5982 linux$t{linux is not unix}\n\u6dfb\u52a0\u81ea\u5b9a\u7fa9\u6a23\u5f0f\uff1a\u641c\u5c0b\u6587\u672c$s{\u80cc\u666f;\u5176\u4ed6}\uff0c\u4f8b\u5982 google$s{#333333;color:red;}\n\u5de6\u9375\u9ede\u64ca\u95dc\u9375\u8a5e\u8df3\u8f49\u81f3\u4e0b\u4e00\u500b\uff0c\u53f3\u9375\u9ede\u64ca\u95dc\u9375\u8a5e\u8df3\u8f49\u81f3\u4e0a\u4e00\u500b",
inPagePlaceholder:"\u8f38\u5165\u6587\u5b57\uff0c\u6309\u4e0b\u56de\u8eca\u9032\u884c\u9801\u5167\u67e5\u627e",pickerBtn:"\u6293\u53d6\u5143\u7d20",multiPickerBtn:"\u6293\u53d6\u5143\u7d20\uff0c\u6309\u4f4f Ctrl \u6216 Command \u9023\u7e8c\u6293\u53d6",editBtn:"\u7de8\u8f2f\u67e5\u627e\u6587\u5b57",emptyBtn:"\u6e05\u7a7a\u67e5\u627e\u6587\u5b57",copyInPageBtn:"\u8907\u88fd\u67e5\u627e\u6587\u5b57",wordModeBtn:"\u55ae\u8a5e\u6a21\u5f0f",copyEleBtn:"\u8907\u88fd\u9078\u4e2d\u5143\u7d20",openLinkBtn:"\u6253\u958b\u9078\u4e2d\u9023\u7d50",
maxEleBtn:"\u5c55\u958b\u9078\u4e2d\u5143\u7d20",minEleBtn:"\u6536\u8d77\u9078\u4e2d\u5143\u7d20",expandAll:"\u5168\u90e8\u5c55\u958b",collapseAll:"\u5168\u90e8\u5408\u8d77",rename:"\u91cd\u547d\u540d",recoverBtn:"\u6062\u5fa9\u67e5\u627e\u6587\u5b57",pinBtn:"\u56fa\u5b9a\u67e5\u627e\u6587\u5b57\uff0c\u5728\u6240\u6709\u6a19\u7c64\u9801\u4e2d\u641c\u5c0b",locBtn:"\u5b9a\u4f4d\u5074\u908a\u6b04",filterSites:"\u7be9\u9078\u641c\u5c0b\u5f15\u64ce",searchInPage:"\u9801\u5167\u67e5\u627e",removeBtn:"\u79fb\u9664\u641c\u5c0b\u8a5e",
saveRuleBtn:"\u4fdd\u5b58\u7576\u524d\u7ad9\u9ede\u7684\u641c\u5c0b\u8a5e",wordContent:"\u641c\u5c0b\u8a5e\u5167\u5bb9",wordHide:"\u96b1\u85cf\u7236\u7d1a\u5143\u7d20",wordHideTips:"\u5143\u7d20\u6df1\u5ea6\uff0c0\u70ba\u7576\u524d\u7236\u7d1a",wordStyle:"\u641c\u5c0b\u8a5e\u6a23\u5f0f",wordTitle:"\u641c\u5c0b\u8a5e\u6ce8\u91cb",re:"\u6b63\u5247",ignoreCase:"\u4e0d\u5340\u5206\u5927\u5c0f\u5beb",filterLink:"\u7be9\u9078\u93c8\u63a5",modify:"\u4fee\u6539",cancel:"\u53d6\u6d88",modifyWord:"\u4fee\u6539\u9801\u5167\u641c\u5c0b\u8a5e",
addSearchEngine:"\u6dfb\u52a0\u641c\u5c0b\u5f15\u64ce",noValidItemAsk:"\u672a\u627e\u5230\u6709\u6548\u5143\u7d20\uff0c\u662f\u5426\u624b\u52d5\u7de8\u8f2f\u898f\u5247\u4e26\u6dfb\u52a0\uff1f",expand:"\u5c55\u958b\u5269\u9918\u7ad9\u9ede",add:"\u6dfb\u52a0",addWord:"\u6dfb\u52a0\u65b0\u8a5e\u8a9e",wordRange:"\u751f\u6548\u7bc4\u570d",customInputFrame:"\u81ea\u5b9a\u7fa9\u641c\u5c0b\u53c3\u6578",customSubmit:"\u63d0\u4ea4\u641c\u5c0b",finalSearch:"\u76ee\u6a19\u641c\u5c0b\u5b57\u4e32",search:"\u641c\u5c0b\u6b64\u9805",
siteKeywords:"\u95dc\u9375\u8a5e(\u591a\u500b\u95dc\u9375\u8a5e\u4ee5|\u5206\u9694)",siteMatch:"\u7ad9\u9ede URL \u5339\u914d\u6b63\u5247",openSelect:"\u6253\u958b\u9078\u9805",openInDefault:"\u9ed8\u8a8d",openInNewTab:"\u65b0\u6a19\u7c64\u9801\u6253\u958b",openInCurrent:"\u7576\u524d\u9801\u6253\u958b",currentType:"\u7576\u524d\u5206\u985e",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539f",addAction:"\u6dfb\u52a0\u64cd\u4f5c",crawlInfo:"\u6a21\u64ec\u8f38\u5165\u641c\u5c0b",inputAction:"\u8f38\u5165",
clickAction:"\u9ede\u64ca",sleepAction:"\u7b49\u5f85",copyAction:"\ud83d\udcc4\u8907\u88fd\u5143\u7d20",submitCrawl:"\u2611\ufe0f\u5b8c\u6210\u64cd\u4f5c",inputOutput:'\u5728\u5143\u7d20<span title="#t1#" class="element">#t1#</span>\u5167\u8f38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9ede\u64ca\u5143\u7d20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96d9\u64ca\u5143\u7d20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53f3\u64ca\u5143\u7d20<span title="#t#" class="element">#t#</span>',
copyOutput:'\u8907\u88fd\u5143\u7d20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4f11\u7720<span title="#t#">#t#</span>\u6beb\u79d2',inputNewValue:"\u8acb\u8f38\u5165\u65b0\u503c",deleteConfirm:"\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u9805\u55ce\uff1f ",sleepPrompt:"\u7b49\u5f85\u6642\u9593\uff08\u6beb\u79d2\uff09",startCache:"\u958b\u59cb\u7de9\u5b58\uff0c\u8acb\u8010\u5fc3\u7b49\u5f85\u7de9\u5b58\u5b8c\u7562\uff0c\u52ff\u95dc\u9589\u914d\u7f6e\u9801\uff01",cacheOver:"\u6240\u6709\u5716\u6a19\u90fd\u5df2\u7de9\u5b58\u5b8c\u7562\uff01",
cspDisabled:"\u8173\u672c\u6a23\u5f0f\u88ab\u7576\u524d\u7ad9\u9ede\u7684 CSP \u963b\u6b62\uff0c\u56e0\u6b64\u7121\u6cd5\u986f\u793a\uff0c\u8acb\u5617\u8a66\u5b89\u88dd Allow CSP: Content-Security-Policy \u64f4\u5c55\u7372\u53d6\u6b0a\u9650",Sunday:"\u661f\u671f\u65e5 (\u65e5)",Monday:"\u661f\u671f\u4e00 (\u6708)",Tuesday:"\u661f\u671f\u4e8c (\u706b)",Wednesday:"\u661f\u671f\u4e09 (\u6c34)",Thursday:"\u661f\u671f\u56db (\u6728)",Friday:"\u661f\u671f\u4e94 (\u91d1)",Saturday:"\u661f\u671f\u516d (\u571f)",
template:"\u8acb\u8a2d\u7f6e\u3010#t#\u3011\u7684\u503c",recordAction:"\u23fa\ufe0f\u9304\u88fd\u52d5\u4f5c",startRecord:"\u958b\u59cb\u9304\u88fd\u64cd\u4f5c\uff0c\u6309\u4e0b\u56de\u8eca\u9375\u7d50\u675f\u9304\u88fd",loopAction:"\ud83d\udd01\u958b\u59cb\u5faa\u74b0",loopActionEnd:"\u23f9\ufe0f\u5faa\u74b0\u7d50\u675f",loopStart:'\u958b\u59cb\u5faa\u74b0\uff0c\u5faa\u74b0\u6b21\u6578\u70ba<span title="#t#">#t#</span>',loopEnd:"\u7d50\u675f\u5faa\u74b0",loopTimes:"\u5faa\u74b0\u6b21\u6578\uff0c\u5c07\u904d\u6b77\u6240\u6709\u5339\u914d\u5143\u7d20\u4e26\u9806\u5e8f\u57f7\u884c",
loadingCollection:"\u6b63\u5728\u8f09\u5165\u5408\u96c6\uff0c\u8acb\u7a0d\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5b9a\u9801\u9762\u5143\u7d20\uff08\u4f8b\u5982\u8f38\u5165\u6846\uff09\u5167\u8f38\u5165\u641c\u5c0b\u5b57\u8a5e",emuClickTips:"\u9ede\u64ca\u6307\u5b9a\u9801\u9762\u5143\u7d20\uff08\u4f8b\u5982\u6309\u9215\uff09",emuWaitTips:"\u7b49\u5f85\u4e00\u6bb5\u6642\u9593\u5f8c\u7e7c\u7e8c\u57f7\u884c\uff0c\u7576\u67d0\u500b\u64cd\u4f5c\u9700\u8981\u4e00\u6bb5\u6642\u9593\u624d\u80fd\u5b8c\u6210\u6642\u5f88\u6709\u7528",
emuCopyTips:"\u8907\u88fd\u6307\u5b9a\u5143\u7d20\u7684\u6587\u5b57\u5230\u526a\u8cbc\u7c3f",emuRecordTips:"\u9304\u88fd\u63a5\u4e0b\u4f86\u7684\u9ede\u64ca\u548c\u8f38\u5165\u64cd\u4f5c",emuLoopTips:"\u958b\u59cb\u5faa\u74b0\uff0c\u63a5\u4e0b\u4f86\u7684\u64cd\u4f5c\u5c07\u904d\u6b77\u6240\u6709\u627e\u5230\u7684\u5143\u7d20\u4e26\u4e14\u91cd\u8907\u6307\u5b9a\u6b21\u6578",emuStopTips:"\u7d50\u675f\u64cd\u4f5c\u4e26\u7522\u751f\u898f\u5247"};break;case "ja":kb={import:"\u30a4\u30f3\u30dd\u30fc\u30c8",
filter:"\u30d5\u30a3\u30eb\u30bf\u30fc",selectAll:"\u3059\u3079\u3066\u9078\u629e",importOrNot:"\u8a2d\u5b9a\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u304b? ",settings:"\u69cb\u6210\u30b9\u30af\u30ea\u30d7\u30c8",batchOpen:"\u30d0\u30c3\u30c1\u30aa\u30fc\u30d7\u30f3",batchOpenConfirm:"\u30d0\u30c3\u30c1\u30aa\u30fc\u30d7\u30f3\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b? ",postOver:"\u6b63\u5e38\u306b\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f:",postError:"\u9001\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f:",
copyOver:"\u30b3\u30d4\u30fc\u306b\u6210\u529f\u3057\u307e\u3057\u305f",keywords:"\u691c\u7d22\u8a9e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",targetUrl:"\u691c\u7d22 URL \u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",siteName:"\u30b5\u30a4\u30c8\u540d",siteDesc:"\u8aac\u660e",siteUrl:"\u30a2\u30c9\u30ec\u30b9",siteIcon:"\u30a2\u30a4\u30b3\u30f3",siteTest:"\u30c6\u30b9\u30c8",siteCancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",siteAdd:"\u8ffd\u52a0",siteType:"\u30ab\u30c6\u30b4\u30ea",
siteExist:"\u540c\u3058\u30eb\u30fc\u30eb\u304c\u3059\u3067\u306b\u5b58\u5728\u3057\u307e\u3059\u3002\u30af\u30ed\u30fc\u30f3\u3068\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u304b? ",siteAddOver:"\u30b5\u30a4\u30c8\u306f\u6b63\u5e38\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f",multiline:"\u8907\u6570\u884c\u306e\u691c\u7d22\u306f\u6539\u884c\u3067\u533a\u5207\u308b\u3079\u304d\u3067\u3059\u304b? ",multilineTooMuch:"\u884c\u6570\u304c 10 \u884c\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002\u691c\u7d22\u3092\u7d9a\u3051\u307e\u3059\u304b? ",
inputPlaceholder:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0 \u30a8\u30f3\u30b8\u30f3",inputTitle:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0 \u30a8\u30f3\u30b8\u30f3\u3001*? \u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3001$ \u306f\u7d42\u308f\u308a\u3092\u8868\u3057\u3001^ \u306f\u59cb\u307e\u308a\u3092\u8868\u3057\u307e\u3059\u3001\u30b0\u30eb\u30fc\u30d7 ** \u30b5\u30a4\u30c8\u306f\u5199\u771f\u306a\u3069\u306e\u6307\u5b9a\u3055\u308c\u305f\u30b0\u30eb\u30fc\u30d7\u3092\u30d5\u30a3\u30eb\u30bf\u30fc\u3067\u304d\u307e\u3059 ** Google\u3001\u6b21\u306e\u9805\u76ee\u3092\u30bf\u30d6\u3057\u307e\u3059",
inputKeywords:"\u691c\u7d22\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",inPageTips:"\u30ab\u30b9\u30bf\u30e0\u533a\u5207\u308a\u6587\u5b57: $c \u3068\u533a\u5207\u308a\u6587\u5b57 ($c| \u691c\u7d22 | \u30b8\u30e3\u30f3\u30d1\u30fc\u306a\u3069)\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b9\u30da\u30fc\u30b9\u3092\u533a\u5207\u308a\u6587\u5b57\u3068\u3057\u3066\u4f7f\u7528\n\u5143\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u5206\u96e2\u3055\u308c\u3066\u3044\u307e\u305b\u3093: $o \u3068\u6587\u5b57 (\u30d2\u30fc\u30ed\u30fc\u304c\u597d\u3093\u3060 $oopai \u306a\u3069)\n\u6b63\u898f\u8868\u73fe \uff1a/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306a\u3069\n\u30d7\u30ed\u30f3\u30d7\u30c8 \u30c6\u30ad\u30b9\u30c8\u306e\u8ffd\u52a0: \u691c\u7d22\u30c6\u30ad\u30b9\u30c8 $t{\u30d7\u30ed\u30f3\u30d7\u30c8 \u30c6\u30ad\u30b9\u30c8}\u3001\u305f\u3068\u3048\u3070 linux$t{Linux \u306f Unix \u3067\u306f\u3042\u308a\u307e\u305b\u3093}\n\u30ab\u30b9\u30bf\u30e0 \u30b9\u30bf\u30a4\u30eb\u306e\u8ffd\u52a0: \u691c\u7d22\u30c6\u30ad\u30b9\u30c8 $s{\u80cc\u666f;other}\u3001\u4f8b: google$s{#333333;color:red;}\n\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5de6\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u6b21\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u30b8\u30e3\u30f3\u30d7\u3057\u3001\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u524d\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u306b\u30b8\u30e3\u30f3\u30d7\u3057\u307e\u3059",
inPagePlaceholder:"\u30da\u30fc\u30b8\u5185\u3092\u691c\u7d22\u3059\u308b\u306b\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3057\u3066 Enter \u30ad\u30fc\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044",pickerBtn:"\u8981\u7d20\u306e\u53d6\u5f97",multiPickerBtn:"\u8981\u7d20\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001Ctrl \u307e\u305f\u306f Command \u3092\u62bc\u3057\u305f\u307e\u307e\u7d99\u7d9a\u7684\u306b\u53d6\u5f97\u3057\u307e\u3059",editBtn:"\u691c\u7d22\u30c6\u30ad\u30b9\u30c8\u3092\u7de8\u96c6",
emptyBtn:"\u7a7a\u306e\u691c\u7d22\u30c6\u30ad\u30b9\u30c8",copyInPageBtn:"\u691c\u7d22\u30c6\u30ad\u30b9\u30c8\u3092\u30b3\u30d4\u30fc",wordModeBtn:"\u30ef\u30fc\u30c9\u30e2\u30fc\u30c9",copyEleBtn:"\u9078\u629e\u3057\u305f\u8981\u7d20\u3092\u30b3\u30d4\u30fc",openLinkBtn:"\u9078\u629e\u3057\u305f\u30ea\u30f3\u30af\u3092\u958b\u304f",maxEleBtn:"\u9078\u629e\u3057\u305f\u8981\u7d20\u3092\u5c55\u958b",minEleBtn:"\u9078\u629e\u3057\u305f\u8981\u7d20\u3092\u6298\u308a\u305f\u305f\u3080",expandAll:"\u3059\u3079\u3066\u5c55\u958b",
collapseAll:"\u3059\u3079\u3066\u6298\u308a",rename:"\u540d\u524d\u3092\u5909\u66f4",reverseBtn:"\u691c\u7d22\u30c6\u30ad\u30b9\u30c8\u3092\u5fa9\u5143",pinBtn:"\u691c\u7d22\u30c6\u30ad\u30b9\u30c8\u3092\u4fee\u6b63\u3001\u3059\u3079\u3066\u306e\u30bf\u30d6\u3067\u691c\u7d22",locBtn:"\u30b5\u30a4\u30c9\u30d0\u30fc\u3092\u691c\u7d22",filterSites:"\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",searchInPage:"\u30da\u30fc\u30b8\u5185\u3092\u691c\u7d22",removeBtn:"\u691c\u7d22\u8a9e\u3092\u524a\u9664",
saveRuleBtn:"\u73fe\u5728\u306e\u30b5\u30a4\u30c8\u306e\u691c\u7d22\u8a9e\u3092\u4fdd\u5b58",wordContent:"\u5358\u8a9e\u306e\u5185\u5bb9\u3092\u691c\u7d22",wordHide:"\u89aa\u8981\u7d20\u3092\u975e\u8868\u793a",wordHideTips:"\u8981\u7d20\u306e\u6df1\u3055\u30010 \u304c\u73fe\u5728\u306e\u89aa",wordStyle:"\u691c\u7d22\u30ef\u30fc\u30c9\u30b9\u30bf\u30a4\u30eb",wordTitle:"\u691c\u7d22\u5358\u8a9e\u306e\u6ce8\u91c8",re:"RegExp",ignoreCase:"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306f\u533a\u5225\u3055\u308c\u307e\u305b\u3093",
filterLink:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30ea\u30f3\u30af",modify:"\u5909\u66f4",cancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",modifyWord:"\u30da\u30fc\u30b8\u4e0a\u306e\u691c\u7d22\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059",addSearchEngine:"\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u3092\u8ffd\u52a0",noValidItemAsk:"\u6709\u52b9\u306a\u8981\u7d20\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u30eb\u30fc\u30eb\u3092\u624b\u52d5\u3067\u7de8\u96c6\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3059\u304b? ",
expand:"\u6b8b\u308a\u306e\u30b5\u30a4\u30c8\u3092\u5c55\u958b\u3057\u307e\u3059",add:"\u8ffd\u52a0",addWord:"\u65b0\u3057\u3044\u5358\u8a9e\u3092\u8ffd\u52a0",wordRange:"\u6709\u52b9\u7bc4\u56f2",customInputFrame:"\u30ab\u30b9\u30bf\u30e0\u691c\u7d22\u30d1\u30e9\u30e1\u30fc\u30bf",customSubmit:"\u691c\u7d22\u3092\u9001\u4fe1",finalSearch:"\u5bfe\u8c61\u306e\u691c\u7d22\u6587\u5b57\u5217",search:"\u3053\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u691c\u7d22",siteKeywords:"\u30ad\u30fc\u30ef\u30fc\u30c9 (| \u3067\u533a\u5207\u3089\u308c\u305f\u8907\u6570\u306e\u30ad\u30fc\u30ef\u30fc\u30c9)",
siteMatch:"\u901a\u5e38\u306e\u30b5\u30a4\u30c8 URL \u3068\u4e00\u81f4",openSelect:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u958b\u304f",openInDefault:"\u30c7\u30d5\u30a9\u30eb\u30c8",openInNewTab:"\u65b0\u3057\u3044\u30bf\u30d6\u304c\u958b\u304d\u307e\u3059",openInCurrent:"\u73fe\u5728\u306e\u30da\u30fc\u30b8\u304c\u958b\u3044\u3066\u3044\u307e\u3059",currentType:"\u73fe\u5728\u306e\u30ab\u30c6\u30b4\u30ea",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5fa9\u5143",addAction:"\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0",
rollInfo:"\u5165\u529b\u691c\u7d22\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8",inputAction:"\u5165\u529b",clickAction:"\u30af\u30ea\u30c3\u30af",sleepAction:"\u5f85\u6a5f",copyAction:"\ud83d\udcc4\u8981\u7d20\u306e\u30b3\u30d4\u30fc",submitCrawl:"\u2611\ufe0f\u64cd\u4f5c\u3092\u5b8c\u4e86",inputOutput:'\u8981\u7d20 <span title="#t1#" class="element">#t1#</span> \u5185\u306b <span title="#t2#">#t2#</span> \u3092\u5165\u529b\u3057\u307e\u3059',clickOutput:'\u30af\u30ea\u30c3\u30af<span title="#t#" class="element">#t#</span>',
dblclickOutput:'\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53f3\u30af\u30ea\u30c3\u30af<span title="#t#" class="element">#t#</span>',copyOutput:'\u30b3\u30d4\u30fc\u8981\u7d20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30b9\u30ea\u30fc\u30d7<span title="#t#">#t#</span> \u30df\u30ea\u79d2',inputNewValue:"\u65b0\u3057\u3044\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",deleteconfirm:"\u3053\u306e\u9805\u76ee\u3092\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b? ",
sleepPrompt:"\u5f85\u6a5f\u6642\u9593 (\u30df\u30ea\u79d2)",startCache:"\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u8f9b\u62b1\u5f37\u304f\u5f85\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u8a2d\u5b9a\u30da\u30fc\u30b8\u306f\u9589\u3058\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306e\u30a2\u30a4\u30b3\u30f3\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3057\u305f! ",
cspDisabled:"\u30b9\u30af\u30ea\u30d7\u30c8 \u30b9\u30bf\u30a4\u30eb\u306f\u73fe\u5728\u306e\u30b5\u30a4\u30c8\u306e CSP \u306b\u3088\u3063\u3066\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002\u8a31\u53ef\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001Allow CSP: Content-Security-Policy \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044",Sunday:"\u65e5\u66dc\u65e5",
Monday:"\u6708\u66dc\u65e5",Tuesday:"\u706b\u66dc\u65e5",Wednesday:"\u6c34\u66dc\u65e5",Thursday:"\u6728\u66dc\u65e5",Friday:"\u91d1\u66dc\u65e5",Saturday:"\u571f\u66dc\u65e5",template:"[#t#]\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",recordAction:"\u23fa\ufe0f\u8a18\u9332\u64cd\u4f5c",startRecord:"\u8a18\u9332\u64cd\u4f5c\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u8a18\u9332\u3092\u7d42\u4e86\u3059\u308b\u306b\u306f Enter \u30ad\u30fc\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044",
loopAction:"\ud83d\udd01\u30eb\u30fc\u30d7\u306e\u958b\u59cb",loopActionEnd:"\u23f9\ufe0f\u30eb\u30fc\u30d7\u306e\u7d42\u4e86",loopStart:'\u30eb\u30fc\u30d7\u3092\u958b\u59cb\u3002\u30eb\u30fc\u30d7\u6570\u306f <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30eb\u30fc\u30d7\u306e\u7d42\u4e86",loopTimes:"\u30eb\u30fc\u30d7\u306e\u6570\u3002\u4e00\u81f4\u3059\u308b\u3059\u3079\u3066\u306e\u8981\u7d20\u304c\u8d70\u67fb\u3055\u308c\u3001\u9806\u756a\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059",loadingCollection:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8aad\u307f\u8fbc\u307f\u4e2d...",
emuInputTips:"\u6307\u5b9a\u3055\u308c\u305f\u30da\u30fc\u30b8\u8981\u7d20 (\u5165\u529b\u30dc\u30c3\u30af\u30b9\u306a\u3069) \u306b\u691c\u7d22\u8a9e\u3092\u5165\u529b\u3057\u307e\u3059",emuClickTips:"\u6307\u5b9a\u3055\u308c\u305f\u30da\u30fc\u30b8\u8981\u7d20 (\u30dc\u30bf\u30f3\u306a\u3069) \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059",emuWaitTips:"\u7d9a\u884c\u3059\u308b\u524d\u306b\u3057\u3070\u3089\u304f\u5f85\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u64cd\u4f5c\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059",
emuCopyTips:"\u6307\u5b9a\u3055\u308c\u305f\u8981\u7d20\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059",emuRecordTips:"\u6b21\u306e\u30af\u30ea\u30c3\u30af\u3068\u5165\u529b\u64cd\u4f5c\u3092\u8a18\u9332\u3057\u307e\u3059",emuLoopTips:"\u30eb\u30fc\u30d7\u3092\u958b\u59cb\u3057\u307e\u3059\u3002\u6b21\u306e\u64cd\u4f5c\u306f\u898b\u3064\u304b\u3063\u305f\u3059\u3079\u3066\u306e\u8981\u7d20\u3092\u8d70\u67fb\u3057\u3001\u6307\u5b9a\u3055\u308c\u305f\u56de\u6570\u3060\u3051\u7e70\u308a\u8fd4\u3057\u307e\u3059",
emuStopTips:"\u64cd\u4f5c\u3092\u7d42\u4e86\u3057\u3066\u30eb\u30fc\u30eb\u3092\u751f\u6210"};break;case "ru":kb={import:"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",filter:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c",selectAll:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0451",importOrNot:"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e?",
settings:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",batchOpen:"\u0413\u0440\u0443\u043f\u043f\u043e\u0432\u043e\u0439 \u043f\u043e\u0438\u0441\u043a",batchOpenConfirm:"\u0418\u0441\u043a\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0433\u0440\u0443\u043f\u043f\u044b?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e",
keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",siteDesc:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043a\u043e\u043d\u043a\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",siteAdd:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",siteType:"\u0413\u0440\u0443\u043f\u043f\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043e\u043a \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a \u043a\u043b\u043e\u043d?",
siteAddOver:"\u0414\u0432\u0438\u0436\u043e\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d",multiline:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a?",multilineTooMuch:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 10. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a?",
inputPlaceholder:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u043f\u043e\u0438\u0441\u043a\u0430",inPageTips:"Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default\nOriginal text without delimited: $o + text, such as $oopai liked by hero\nRegular expression: /re/, such as $c, /google/i , /aPPle/\nTips text: search text$t{tips text}, such as linux$t{linux is not unix}\nCustom style: Search text$s{background;other}, such as google$s{#333333;color:red;}\nLeft-click keyword to jump to the next, right-click keyword to jump to the previous",
inPagePlaceholder:"\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0431\u043b\u0430\u0441\u0442\u044c",multiPickerBtn:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Ctrl \u0438\u043b\u0438 Command",
editBtn:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0438\u0441\u043a\u0430",emptyBtn:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430",copyInPageBtn:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0438\u043a\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043c \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0441\u043b\u043e\u0432\u0430\u043c. \u0412 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043b\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435 \u0441\u043b\u043e\u0432\u0430 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
copyEleBtn:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",openLinkBtn:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",
minEleBtn:"\u0421\u0436\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u0445",
locBtn:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u0441\u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u0438",filterSites:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0438\u0436\u043a\u0438",searchInPage:"\u0418\u0441\u043a\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u0438\u0441\u043a\u0430",
saveRuleBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043b\u043e\u0432\u043e \u0438\u043b\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043b\u0443\u0431\u0438\u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, 0 - \u044d\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
wordStyle:"\u0421\u0442\u0438\u043b\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430",wordTitle:"\u0410\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044f \u043a \u0438\u0441\u043a\u043e\u043c\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
modify:"\u0413\u043e\u0442\u043e\u0432\u043e",cancel:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",modifyWord:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",addSearchEngine:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0432\u0438\u0436\u043e\u043a",noValidItemAsk:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442. \u0425\u043e\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0430\u0439\u0442?",
expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044b",add:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",addWord:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e",wordRange:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043f\u043e\u0438\u0441\u043a\u0430",customInputFrame:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0438\u0441\u043a\u0430",
customSubmit:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",finalSearch:"\u0426\u0435\u043b\u0435\u0432\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430",search:"\u0418\u0441\u043a\u0430\u0442\u044c \u044d\u0442\u043e",siteKeywords:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c |)",siteMatch:"Regexp \u0434\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f URL \u0441\u0430\u0439\u0442\u0430",
openSelect:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432",openInDefault:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",openInNewTab:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",openInCurrent:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",
minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c",addAction:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",crawlInfo:"\u0421\u0438\u043c\u0443\u043b\u044f\u0446\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043e\u0434",clickAction:"\u041a\u043b\u0438\u043a \u043c\u044b\u0448\u0438",sleepAction:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435",
copyAction:"\ud83d\udcc4\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",submitCrawl:"\u2611\ufe0f\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043e\u0434 <span title="#t2#">#t2#</span> \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041a\u043b\u0438\u043a \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 <span title="#t#" class="element">#t#</span>',
dblclickOutput:'\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u043a\u043b\u0438\u043a <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u041f\u041a\u041c <span title="#t#" class="element">#t#</span>',copyOutput:'\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044c <span title="#t#">#t#</span> \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434',
inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",deleteConfirm:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f (\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445)",startCache:"\u041d\u0430\u0447\u0430\u043b\u043e\u0441\u044c \u043a\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!",
cacheOver:"\u0412\u0441\u0435 \u0438\u043a\u043e\u043d\u043a\u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u044b!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 "#t#"',recordAction:"\u23fa\ufe0f\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043d\u0430\u0436\u043c\u0438\u0442\u0435 Enter, \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u043e\u043a\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.",
loopAction:"\ud83d\udd01\u041d\u0430\u0447\u0430\u0442\u044c \u0446\u0438\u043a\u043b",loopActionEnd:"\u23f9\ufe0f\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0446\u0438\u043a\u043b",loopStart:'\u041d\u0430\u0447\u0430\u0442\u044c \u0446\u0438\u043a\u043b <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0446\u0438\u043a\u043b",loopTimes:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0438\u043a\u043b\u043e\u0432, \u0432\u0441\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u044b \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e",
loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430).",emuClickTips:"\u041a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435)",
emuWaitTips:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c. \u041f\u043e\u043b\u0435\u0437\u043d\u043e, \u043a\u043e\u0433\u0434\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f",
emuCopyTips:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430",emuRecordTips:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043e\u0434\u0430",
emuLoopTips:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0446\u0438\u043a\u043b, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0445\u043e\u0434\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437",
emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e"};break;default:kb={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",
targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',
inputKeywords:"Enter search keywords",inPageTips:"Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default\nOriginal text without delimited: $o + text, such as $oopai liked by hero\nRegular expression: /re/, such as $c, /google/i , /aPPle/\nTips text: search text$t{tips text}, such as linux$t{linux is not unix}\nCustom style: Search text$s{background;other}, such as google$s{#333333;color:red;}\nLeft-click keyword to jump to the next, right-click keyword to jump to the previous",
inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",
pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Filter search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",
addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",
currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\ud83d\udcc4Copy element",submitCrawl:"\u2611\ufe0fComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',
rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",
template:'Please set the value of "#t#"',recordAction:"\u23fa\ufe0fRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\ud83d\udd01Start loop",loopActionEnd:"\u23f9\ufe0fStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",
emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"}}l.prefConfig.firstRun&&O.supportCrossSave()&&
(l.prefConfig.firstRun=!1,O.setItem("searchData",l),setTimeout(()=>{O.getItem("searchData",b=>{!1===b.prefConfig.firstRun&&wa("https://search.hoothin.com/firstRun",{active:!0,insert:!0})})},100));"undefined"===typeof l.prefConfig.customSize&&(l.prefConfig.customSize=100);"undefined"===typeof l.prefConfig.tilesZoom&&(l.prefConfig.tilesZoom=100);"undefined"===typeof l.prefConfig.tipsZoom&&(l.prefConfig.tipsZoom=100);"undefined"===typeof l.prefConfig.typeOpenTime&&(l.prefConfig.typeOpenTime=250);"undefined"===
typeof l.prefConfig.longPressTime&&(l.prefConfig.longPressTime=500);"undefined"===typeof l.prefConfig.cacheSwitch&&(l.prefConfig.cacheSwitch=!1);"undefined"===typeof l.prefConfig.noIcons&&(l.prefConfig.noIcons=!1);"undefined"===typeof l.prefConfig.noAni&&(l.prefConfig.noAni=!1);"undefined"===typeof l.prefConfig.quickAddRule&&(l.prefConfig.quickAddRule=!0);"undefined"===typeof l.prefConfig.multiline&&(l.prefConfig.multiline=2);"undefined"===typeof l.prefConfig.multilineGap&&(l.prefConfig.multilineGap=
1E3);"undefined"===typeof l.prefConfig.historyLength&&(l.prefConfig.historyLength=0);"undefined"===typeof l.prefConfig.dragToSearch&&(l.prefConfig.dragToSearch=!0);"undefined"===typeof l.prefConfig.firstFiveWordsColor&&(l.prefConfig.firstFiveWordsColor=[]);"undefined"===typeof l.prefConfig.inPageWordsStyles&&(l.prefConfig.inPageWordsStyles=[]);"undefined"===typeof l.prefConfig.rightMouse&&(l.prefConfig.rightMouse=!0);"undefined"===typeof l.prefConfig.mouseLeaveToHide&&(l.prefConfig.mouseLeaveToHide=
!0);"undefined"===typeof l.prefConfig.currentTypeFirst&&(l.prefConfig.currentTypeFirst=!0);"undefined"===typeof l.prefConfig.disableAddon&&(l.prefConfig.disableAddon={});"undefined"===typeof l.prefConfig.suggestType&&(l.prefConfig.suggestType="zh-CN"===Lb?"baidu":"google");"undefined"===typeof l.prefConfig.syncBuild&&(l.prefConfig.syncBuild=!0);l.prefConfig.minSizeMode&&(l.prefConfig.disableAutoOpen=!1,l.prefConfig.disableTypeOpen=!1);l.prefConfig.configPage?Oa=l.prefConfig.configPage:l.prefConfig.configPage=
Oa}function ic(a,b){return"*"===a||0==a.length&&0==b.length?!0:1<a.length&&"*"==a[0]&&0==b.length?!1:1<a.length&&"?"==a[0]||0!=a.length&&0!=b.length&&a[0]==b[0]?ic(a.substring(1),b.substring(1)):0<a.length&&"*"==a[0]?ic(a.substring(1),b)||ic(a,b.substring(1)):!1}async function Ac(a){if(fd)a&&a();else{fd=!0;if(-1!=pa.indexOf("https://hoothin.github.io/SearchJumper/jump.html")){var b=pa.match(/#jump{url=(.*)&charset=(.*)}/);b&&oc(b[2],decodeURIComponent(b[1]),"_self")}await Ed();if(!zc){if(l.prefConfig.blacklist&&
0<l.prefConfig.blacklist.length){b=!1;for(let c=0;c<l.prefConfig.blacklist.length;c++){var d=l.prefConfig.blacklist[c];if(d&&0!=d.indexOf("//"))if(b)/\*\/$/.test(d)&&(b=!1);else if(0==d.indexOf("/*"))b=!0;else if(0==d.indexOf("/")){if((d=d.match(/^\/(.*)\/(\w*)$/))&&(new RegExp(d[1],d[2])).test(pa))return}else if(ic(d,pa))return}}A=new Fd;await zd();Bd();Dd();a&&a();wb=document.title}}}function Gd(){document.hidden?A&&(A.closeShowAll(),l.prefConfig.globalSearchNow&&(Bc=setInterval(async()=>{let a=
Ia;Ia=await O.getItem("globalInPageWords");(a||"")!=(Ia||"")&&(A.refreshPageWords(),A.navMarks.innerHTML&&(clearInterval(Bc),clearInterval(Cc),wb=document.title,Cc=setInterval(()=>{document.title=document.title==wb?"\ud83d\udea9":wb},500)))},parseInt(500+500*Math.random())))):Ac(async()=>{if(ob||l.prefConfig.syncBuild)l=await O.getItem("searchData"),A&&l.lastModified&&Ab!=l.lastModified&&(A.refreshEngines(),document.dispatchEvent(new Event("dataChanged")));let a=Ia||"";O.getItem("globalInPageWords",
d=>{Ia=d||"";a!=Ia&&A&&A.refreshPageWords()});let b=ab||!1;O.getItem("navEnable",d=>{ab="undefined"===typeof d?!0:d;b!=ab&&A&&A.refreshNav()})})}function Hd(){document.head&&R(document)&&!Mb&&!zc&&(l.prefConfig.globalSearchNow&&(clearInterval(Bc),clearInterval(Cc),document.hidden?wb=document.title:wb&&(document.title=wb)),Dc||(Dc=!0,setTimeout(()=>{Gd();Dc=!1},500)))}let Lb="Netscape"===navigator.appName?navigator.language:navigator.userLanguage,kb={};const jc="ontouchstart"in document.documentElement;
var oa=(a,b)=>{console.log(`%c\u3010SearchJumper v.${Yb.script.version}\u3011 ${b?b:"debug"}`,"color: orange;font-size: large;font-weight: bold;",a)},Xa=!1,ob=!1,Ec;if("undefined"!=typeof GM_xmlhttpRequest){var Na=GM_xmlhttpRequest;var qb=!0}else if("undefined"!=typeof GM&&"undefined"!=typeof GM.xmlHttpRequest)Na=GM.xmlHttpRequest,qb=!0;else{let a;Na=b=>{fetch(b.url,{method:b.method||"GET",body:b.data,headers:b.headers}).then(d=>{a=d;return"blob"===b.responseType?d.blob():d.text()}).then(d=>{let c=
document.implementation.createHTMLDocument("");c.documentElement.innerHTML=ba(d);b.onload&&b.onload({status:a.status,response:d,responseXML:c})}).catch(d=>b.onerror&&b.onerror(d))}}qb=qb?async(a,b)=>{if(!a)return null;Ec=a;return new Promise((d,c)=>{var f=b&&/^post$/i.test(b.method);f={method:b&&b.method||"GET",url:a,headers:b&&b.headers||{referer:a,origin:a,"Content-Type":f?"application/x-www-form-urlencoded":"","X-Requested-With":f?"XMLHttpRequest":""},onload:function(g){if(Ec==a){var e=g.response;
if(400<=g.status||!e)e="";d({text:()=>new Promise(h=>{h(e)}),json:()=>new Promise(h=>{try{h(JSON.parse(e))}catch(k){h(null)}}),finalUrl:g.finalUrl||a})}},onerror:function(g){oa(g);c(g)},ontimeout:function(g){oa(g);c(g)}};b&&b.body&&(f.data=b.body);b&&"stream"===b.responseType&&(f.responseType="stream",delete f.onload,f.onloadstart=g=>{if(g&&g.response&&g.response.getReader){var e=[],h,k=g.response.getReader(),p=()=>{let v="";try{return h&&(v=h.trim(),/^data:/.test(v)?v="["+v.replace(/^data:\s+\[DONE\]\s*/m,
"").trim().replace(/\n+/g,"\n").split("\n").map(q=>q.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(v)?v=v.split("\n").pop():/^\[[\s\S]+[^\]]$/.test(v)&&(v+="]")),JSON.parse(v)}catch(q){return null}};k.read().then(function m({done:q,value:n}){if(Ec==a)if(q)d({text:h,json:p,finalUrl:g.finalUrl||a});else{e="standalone"===b.streamMode?Array.from(n):e.concat(Array.from(n));try{h=(new TextDecoder("utf-8")).decode(new Uint8Array(e)),b.onstream({text:h,json:p,finalUrl:g.finalUrl||a})}catch(w){console.log(w)}return k.read().then(m)}})}});
Na(f)})}:fetch;var Wb=Mb?(a,b)=>{}:"undefined"!=typeof GM_registerMenuCommand?GM_registerMenuCommand:"undefined"!=typeof GM&&"undefined"!=typeof GM.registerMenuCommand?GM.registerMenuCommand:(a,b)=>{};var wa="undefined"!=typeof GM_openInTab?GM_openInTab:"undefined"!=typeof GM&&"undefined"!=typeof GM.openInTab?GM.openInTab:(a,b)=>{window.open(a)};var Ea="undefined"!=typeof GM_notification?a=>GM_notification({text:a,onclick:b=>wa(Oa,{active:!0})}):"undefined"!=typeof GM&&"undefined"!=typeof GM.notification?
a=>GM.notification({text:a,onclick:b=>wa(Oa,{active:!0})}):a=>{};var pb="undefined"!=typeof GM_setClipboard?GM_setClipboard:"undefined"!=typeof GM&&"undefined"!=typeof GM.setClipboard?GM.setClipboard:(a,b)=>{try{Id.writeText(a).then(()=>{console.log("Text copied to clipboard")}).catch(d=>{document.execCommand("copy");console.error("Failed to copy text: ",d)})}catch(d){document.execCommand("copy")}};var Ja=a=>{a=a.replace(/\n\s*/g,"");if("undefined"!=typeof GM_addStyle)return GM_addStyle(a);let b=
document.createElement("style");b.innerHTML=ba(a);document.head.appendChild(b);return b};var Yb="undefined"!=typeof GM_info?GM_info:"undefined"!=typeof GM&&"undefined"!=typeof GM.info?GM.info:{script:{name:"SearchJumper",version:0}};va.searchJumperAddons||(va.searchJumperAddons=[]);const gd=document.referrer;let pa=location.href.slice(0,500);var Jd="function"==typeof GM_getValue&&"undefined"!=typeof GM_getValue("a","b"),Kd="undefined"!=typeof GM&&"function"==typeof GM.getValue&&"undefined"!=typeof GM.getValue("a",
"b");a:{try{var hd=window.external.mxGetRuntime().storage;break a}catch(a){}hd=void 0}var Ld=hd;a:{try{var id=window.opera.scriptStorage;break a}catch(a){}id=void 0}var O={supportGM:Jd,supportGMPromise:Kd,supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:Ld,operaUJSStorage:id,setItem:function(a,b){this.supportGMPromise?(GM.setValue(a,b),""===b&&"undefined"!=typeof GM&&"undefined"!=typeof GM.deleteValue&&GM.deleteValue(a)):this.supportGM?(GM_setValue(a,
b),""===b&&"undefined"!=typeof GM_deleteValue&&GM_deleteValue(a)):this.operaUJSStorage?this.operaUJSStorage.setItem(a,b):this.mxAppStorage?this.mxAppStorage.setConfig(a,b):window.localStorage&&window.localStorage.setItem(a,b)},getItem:async function(a,b){var d;this.supportGMPromise?d=await GM.getValue(a):this.supportGM?d=GM_getValue(a):this.operaUJSStorage?d=this.operaUJSStorage.getItem(a):this.mxAppStorage?d=this.mxAppStorage.getConfig(a):window.localStorage&&(d=window.localStorage.getItem(a));b&&
b(d);return d},getListItem:async function(a,b){var d=this.listItemCache[a];"undefined"===typeof d&&(d=await this.getItem(a),this.listItemCache[a]=d||null);if(!d)return null;for(a=0;a<d.length;a++){let c=d[a];if(c.k==b)return c.v}return null},setListItem:async function(a,b,d){var c=this.listItemCache[a];"undefined"===typeof c&&(c=await this.getItem(a));c||=[];c=c.filter(f=>f&&f.k!=b);d&&(c.unshift({k:b,v:d}),50<c.length&&c.pop());this.setItem(a,c);this.listItemCache[a]=c}};class Ad{constructor(a,b,
d){this.webDAVUrl=a;this.username=b;this.password=d}init(){this.inited||(this.inited=!0,this.auth=btoa(`${this.username}:${this.password}`))}request(a,b,d,c,f,g){this.init();d=this.webDAVUrl+d;let e={referer:d,origin:d,"Content-Type":"text/xml; charset=UTF-8",Authorization:`Basic ${this.auth}`};for(let h in g)e[h]=g[h];Na({method:a,url:d,data:b,headers:e,onload:function(h){let k=h.response;if(400<=h.status||!k)k="";"xml"==c&&(h=h.responseXML)&&(k=h.firstChild.nextSibling?h.firstChild.nextSibling:
h.firstChild);f&&f(k)},onerror:function(h){oa(h);f&&f(h)},ontimeout:function(h){oa(h);f&&f(h)}})}GET(a,b){return this.request("GET",null,a,"text",b,{})}PROPFIND(a,b){return this.request("PROPFIND",null,a,"xml",b,{Depth:"1"})}MKCOL(a,b){return this.request("MKCOL",null,a,"text",b,{})}DELETE(a,b){return this.request("DELETE",null,a,"text",b,{})}PUT(a,b,d){return this.request("PUT",b,a,"text",d,{})}async read(a){let b=this;return new Promise(d=>{b.GET(a,d)})}async write(a,b){let d=this;return new Promise(c=>
{d.PUT(a,b,c)})}async rm(a){let b=this;return new Promise(d=>{b.DELETE(a,d)})}}var lb,lc;va.trustedTypes&&va.trustedTypes.createPolicy&&(lc=va.trustedTypes.createPolicy("searchjumper_default",{createHTML:(a,b)=>a}));const Fc=Object.getPrototypeOf(async function(){}).constructor;"function"!=typeof String.prototype.replaceAll&&(String.prototype.replaceAll=function(a,b){return this.split(a).join(b)});"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(a,b){if(void 0===b||
b>this.length)b=this.length;return this.substring(b-a.length,b)===a});"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(a,b){return this.slice(b||0,a.length)===a});var nb,A,xa=[],na=!1,zc=!1,Fa,yb,hb,Wa,Jb,Ya,ta,$a,Kb,Ga,Ha,Ra=[],Ub=[],Ia,ab,gc,hc,dd,yc,ed=!1,Ab=0,Za;const xc=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${Yb.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,
tb=RegExp("%s[lurest]?\\b");var D,sc,Nb,bb,jd=!1;class Fd{constructor(){let a=this;this.scale=l.prefConfig.customSize/100;this.tilesZoom=l.prefConfig.tilesZoom/100;this.tipsZoom=l.prefConfig.tipsZoom/100;Nb=`
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper-root {
                     font-size: initial;
                 }
                 #search-jumper.search-jumper-showall {
                     overflow-y: hidden;
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     flex-direction: unset;
                     max-width: unset;
                     max-height: unset;
                     text-align: center;
                     top: 0;
                     bottom: unset;
                     height: 100%;
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-searchBar {
                     display: none;
                 }
                 #search-jumper>.search-jumper-searchBar.grabbing>.search-jumper-type {
                     display: none!important;
                 }
                 #search-jumper.search-jumper-showall #filterSites {
                     background-color: #f5f5f5e0;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: #ddd 0px 0px 3px;
                     outline: none;
                     box-sizing: border-box;
                     cursor: default;
                     user-select: none;
                     -webkit-user-select: none;
                     -moz-user-select: none;
                     -khtml-user-select: none;
                     -ms-user-select: none;
                     position: fixed;
                     width: 80%;
                     left: calc(10% - 10px);
                     top: 1%;
                     border-radius: 20px;
                     pointer-events: all;
                 }
                 #search-jumper.search-jumper-showall #filterSites>input,
                 #search-jumper.search-jumper-showall #filterSites>textarea {
                     background-color: white;
                     color: black;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 20px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1!important;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 130px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon>p {
                     pointer-events: all;
                     cursor: pointer;
                     margin: 0 auto;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist .sitelist>.sitelistCon a {
                     display: flex!important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall.search-jumper-searchBarCon {
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                     overflow: hidden;
                 }
                 #search-jumper-alllist {
                     display: none;
                     top: 101px;
                     position: absolute;
                     width: 100%;
                     overflow-x: auto;
                     overflow-y: hidden;
                     height: calc(100% - 101px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper-alllist>.search-jumper-btn {
                     position: fixed;
                     top: 1%;
                     right: 10%;
                     filter: drop-shadow(1px 1px 3px #00000060);
                     cursor: pointer;
                     pointer-events: all;
                     z-index: 1;
                     width: 32px;
                     height: 32px;
                 }
                 #search-jumper-alllist>.search-jumper-btn>svg {
                     cursor: pointer;
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-showallBg {
                     display: none;
                     position: fixed;
                     left: 0;
                     top: 0;
                     width: 100%;
                     height: 100%;
                     z-index: -1;
                     transform: translateZ(0);
                     ${l.prefConfig.noAni?"background-color: rgba(0, 0, 0, 0.1);":"background-color: rgba(0, 0, 0, 0.1);transition:background-color .6s ease;"}
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist:hover~.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     display: block;
                 }
                 #search-jumper>.groupTab {
                     position: fixed;
                     background: #ffffffee !important;
                     left: 0;
                     top: 0;
                     overflow: hidden;
                     height: 100%;
                     overflow: auto;
                     scrollbar-width: none;
                     padding: 20px 0;
                     box-sizing: border-box;
                     display: none;
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                     display: block;
                 }
                 #search-jumper.search-jumper-showall>.groupTab::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span {
                     display: block;
                     width: ${42*this.scale}px;
                     transition: all 0.25s ease;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span>span.search-jumper-word {
                     opacity: 0.8;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span {
                     width: ${42*this.scale+150}px;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span:hover{
                     background: #f5f7fa !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                     content: attr(data-type);
                     color: #6b6e74;
                     position: absolute;
                     margin-top: -${21*this.scale+10}px;
                     left: ${42*this.scale+5}px;
                     white-space: nowrap;
                     font-weight: bold;
                 }
                 .search-jumper-historylistcon {
                     display: flex;
                     position: fixed;
                     width: 100%;
                     max-width: 100%;
                     overflow: auto;
                     justify-content: center;
                     left: 0;
                     top: 60px;
                     background: #ffffffee;
                     border-bottom: 1px solid #ddd;
                     pointer-events: all;
                     min-height: 40px;
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                 }
                 .search-jumper-historylistcon::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-historylist {
                     display: flex;
                     max-width: 100%;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist {
                     display: block;
                 }
                 #search-jumper-alllist>.sitelistBox {
                     display: flex;
                     min-width: 100%;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                     transition: all 0.3s ease;
                 }
                 #search-jumper-alllist>.timeInAll,
                 #search-jumper-alllist>.dayInAll {
                     position: fixed;
                     bottom: 0;
                     line-height: 1.5;
                     color: white;
                     opacity: 0.45;
                     font-weight: bold;
                     font-family: Arial,sans-serif,\u5fae\u8f6f\u96c5\u9ed1;
                     overflow-wrap: normal;
                     white-space: nowrap;
                     margin: 20px;
                     pointer-events: none;
                     text-shadow: 0 0 5px black;
                     background-image: initial;
                 }
                 #search-jumper-alllist>.dayInAll {
                     left: 50px;
                     font-size: ${0==Lb.indexOf("zh")?"1.5":"2"}vw;
                 }
                 #search-jumper-alllist>.timeInAll {
                     right: 50px;
                     font-size: 2vw;
                 }
                 #search-jumper-alllist>.modeSwitch {
                     position: fixed;
                     top: 5px;
                     right: 5px;
                     width: 45px;
                     height: 45px;
                     border-radius: 50%;
                     box-shadow: 0px 0px 5px 0px #7a7a7a;
                     cursor: pointer;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper-alllist>.modeSwitch>* {
                     pointer-events: none;
                 }
                 #search-jumper-alllist>.modeSwitch:hover {
                     transform: scale(1.1);
                 }
                 #search-jumper-alllist.new-mode {
                     overflow-x: hidden;
                     overflow-y: auto;
                     scrollbar-width: none;
                 }
                 #search-jumper-alllist.new-mode>.sitelistBox {
                     flex-wrap: wrap;
                     flex-direction: column;
                     align-items: center;
                     justify-content: flex-start;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                     width: 78%;
                     max-height: unset;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                     display: flex;
                     flex-wrap: wrap;
                     padding: 0;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                     text-align: left;
                     font-size: large;
                     padding: 10px 30px;
                     display: table-caption;
                     width: 100%;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                     width: 240px;
                     height: 100px;
                     display: block!important;
                     padding: 10px 8%;
                     box-sizing: border-box;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist.new-mode .sitelist>.sitelistCon a {
                     display: block!important;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                     border-radius: 5px;
                     transition: transform 0.25s ease, box-shadow 0.25s ease;
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #9e9e9e1a, 0 1px 2px -1px #9e9e9e1a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:hover {
                     transform: translateY(-6px);
                     -webkit-transform: translateY(-6px);
                     -moz-transform: translateY(-6px);
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #0000001a, 0 1px 2px -1px #0000001a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                     content: attr(title);
                     margin-left: 41px;
                     color: #abb0bd;
                     font-size: 12px;
                     height: 3em;
                     line-height: 1.5em;
                     overflow: hidden;
                     display: -webkit-box;
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     margin-left: 62px;
                     margin-top: 35px;
                     width: 185px;
                     position: absolute;
                     pointer-events: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                     width: 48px;
                     height: 48px;
                     float: left;
                     margin-left: -20px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     display: block;
                     font-size: 16px;
                     height: 21px;
                     line-height: 21px;
                     margin-bottom: 8px;
                     margin-top: 0px;
                     margin-left: 40px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                 }
                 #search-jumper .sitelist a+p {
                     display: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                     position: absolute;
                     margin-top: -28px;
                     color: white;
                     width: 250px;
                     max-width: calc(100% - 20px);
                     display: flex;
                     justify-content: space-evenly;
                     overflow: hidden;
                     opacity: 0;
                     transition: .3s;
                     border-top: 1px solid rgba(136,136,136,.2);
                     padding-top: 3px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span {
                     flex-shrink: 0;
                     font-size: 14px;
                     padding: 2px 6px;
                     background: rgb(160 160 160 / 10%);
                     color: #888;
                     border-radius: 10px;
                     transition: .3s;
                     cursor: pointer;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span:hover {
                     color: white;
                     background: rgb(160 160 160 / 30%);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelistCon>div:hover>p {
                     opacity: 1;
                 }
                 #search-jumper #search-jumper-alllist.showbg>.inputGroup,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-btn,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-historylistcon,
                 #search-jumper #search-jumper-alllist.showbg+.groupTab,
                 #search-jumper #search-jumper-alllist.showbg>.sitelistBox {
                     transition: .3s;
                     opacity: 0;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.showbg:hover~.search-jumper-showallBg {
                     background: unset;
                 }
                 .search-jumper-searchBarCon {
                     all: unset;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     z-index: 2147483646;
                     pointer-events: none;
                     text-align: center;
                     overflow: scroll;
                     display: block;
                     -ms-overflow-style: none;
                     scrollbar-width: none;
                     box-sizing: border-box;
                     z-index: 2147483647;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483647;
                     overflow-wrap: break-word;
                     background: #505050cc;
                     border-radius: ${21*this.scale}px!important;
                     border: 1px solid #b3b3b3;
                     display: inline-flex;
                     pointer-events: all;
                     margin-top: -${25*this.scale}px;
                     vertical-align: top;
                     ${l.prefConfig.noAni?"":"opacity: 0.8;"}
                     ${l.prefConfig.noAni?"":"transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;"}
                     user-select: none;
                     text-align: center;
                     position: relative;
                     box-sizing: border-box;
                 }
                 .hideAll>.search-jumper-searchBar {
                     margin-top: -${40*this.scale}px;
                 }
                 .search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll>.search-jumper-searchBar {
                     pointer-events: all;
                 }
                 .search-jumper-scroll.search-jumper-bottom {
                     overflow-y: hidden;
                 }
                 .search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
                     position: absolute !important;
                     top: 0;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-searchBar:hover {
                     margin-top: 0;
                     opacity: 1;
                     ${l.prefConfig.noAni?"":"transition:margin-top 0.1s ease, margin-left 0.1s, right 0.1s, opacity 0.1s, transform 0.1s;"}
                 }
                 .search-jumper-searchBar.initShow,
                 .resizePage>.search-jumper-searchBar {
                     margin-top: 0;
                     ${l.prefConfig.noAni?"":"transition:margin-top 0.25s ease, margin-left 0.25s, right 0.25s, opacity 0.25s, transform 0.25s;"}
                 }
                 .funcKeyCall>.search-jumper-searchBar.initShow {
                     ${l.prefConfig.noAni?"":"transition:opacity 0.15s ease-out;"}
                 }
                 #search-jumper.funcKeyCall {
                     overflow: visible;
                     position: absolute;
                     max-width: 100%;
                     width: 100%;
                     top: 0;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     position: absolute!important;
                     background: none;
                     border: none;
                     max-width: unset!important;
                     margin: unset;
                     ${l.prefConfig.minPopup&&!l.prefConfig.noAni?"transition: transform 0.25s ease;":""}
                     ${l.prefConfig.minPopup?"transform: scale(0.7);":""}
                 }
                 .funcKeyCall>.search-jumper-searchBar:hover {
                     ${l.prefConfig.minPopup?"transform: scale(1);":""}
                 }
                 .in-input>.search-jumper-searchBar,
                 .funcKeyCall>.search-jumper-searchBar {
                     opacity: 1;
                     display: inline-flex!important;
                 }
                 .in-input.in-find {
                     pointer-events: none;
                 }
                 .in-input.in-find>.searchJumperNavBar,
                 .in-input.in-find>.search-jumper-input {
                     pointer-events: all;
                 }
                 .in-input.in-find>.search-jumper-searchBar, .in-input>.rectSelecting.search-jumper-searchBar {
                     opacity: 0!important;
                     pointer-events: none;
                     transition: none;
                 }
                 .in-input.in-find>.search-jumper-searchBar:hover {
                     opacity: 1!important;
                 }
                 .in-input.in-find>.search-jumper-input {
                     opacity: 0.6;
                     transition:opacity 0.25s ease;
                 }
                 .in-input.in-find>.search-jumper-input:hover,
                 .in-input.in-find>.search-jumper-input.active {
                     opacity: 1;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     flex-direction: column;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type {
                     height: ${l.prefConfig.minPopup?24*this.tilesZoom+"px":"auto"}!important;
                     max-width: ${l.prefConfig.minPopup?24*this.tilesZoom:40*(l.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                     width: auto!important;
                     width: max-content!important;
                     max-height: ${108*this.tilesZoom+10}px;
                     flex-wrap: wrap!important;
                     flex-direction: row;
                     padding: 5px;
                     box-shadow: #000000 0px 0px 10px;
                     overflow: auto;
                     scrollbar-width: none;
                     transition: none;
                     background: #d0d0d0d0;
                     box-sizing: content-box;
                 }
                 ${l.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:before {
                     content: attr(data-type);
                     position: absolute;
                     background: #ffffffd0;
                     color: black;
                     margin-top: -${22*this.tilesZoom}px;
                     line-height: 1.2;
                     font-size: ${13*this.tilesZoom}px;
                     font-weight: bold;
                     border-radius: ${20*this.tilesZoom}px;
                     padding: 3px 6px;
                     box-shadow: #000000 0px 0px 10px;
                     opacity: 0;
                     pointer-events: none;
                     transition: all 0.5s ease;
                     left: 50%;
                     transform: translate(-50%, 0);
                     z-index: 1;
                     max-width: 100%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>span.search-jumper-btn:first-child {
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${(l.prefConfig.expandTypeLength||12)+1}) {
                     display: grid!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover:before {
                     opacity: 1;
                 }
                 `:""}
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overflow: visible;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: fit-content!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open:not(.not-expand) {
                     overflow: auto;
                 }
                 #search-jumper.search-jumper-left>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover,
                 #search-jumper.search-jumper-right>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: 100%!important;
                     height: fit-content!important;
                 }
                 #search-jumper.search-jumper-bottom>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     align-items: flex-end;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     overflow: auto;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist {
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon {
                     margin: 0;
                     padding: 5px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>div {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>div:nth-of-type(${l.prefConfig.expandTypeLength||12})~div {
                     display: block;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>p {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon a>img {
                     width: 20px;
                     height: 20px;
                 }
                 ${l.prefConfig.minPopup&&!l.prefConfig.hideTileType?"\n                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn,\n                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.searchJumperExpand {\n                     display: none;\n                 }\n                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn,\n                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>.searchJumperExpand {\n                     display: grid;\n                 }\n                 ":
""}
                 ${2==l.prefConfig.minPopup?`
                 .funcKeyCall:not(.targetInput)>.search-jumper-searchBar {
                     transform: scale(1);
                 }
                 #search-jumper.funcKeyCall:not(.targetInput)>.search-jumper-searchBar>.search-jumper-type {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(l.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: grid;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: none;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     display: grid;
                 }
                 `:""}
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(l.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-left,
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right .search-jumper-type,
                 .search-jumper-right>.search-jumper-searchBar {
                     flex-direction: column;
                     max-width: ${42*this.scale}px;
                     max-height: unset;
                 }
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-right .search-jumper-type {
                     max-width: ${40*this.scale}px;
                 }
                 .search-jumper-left,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right>.search-jumper-searchBar {
                     max-width: 100%;
                 }
                 .search-jumper-searchBar.grabbing {
                     max-width: ${42*this.scale}px;
                 }
                 .search-jumper-right .search-jumper-type {
                     align-items: flex-end;
                 }
                 .search-jumper-left {
                     height: 100%;
                     text-align: initial;
                 }
                 .search-jumper-left:not(.search-jumper-showall) {
                     width: initial;
                     width: -webkit-fill-available;
                 }
                 .search-jumper-right {
                     left: unset;
                     right: 0;
                     height: 100%;
                 }
                 .searchJumperExpand {
                     opacity: 0.8;
                 }
                 .searchJumperExpand:hover {
                     opacity: 1;
                 }
                 .searchJumperExpand>svg {
                     transform: rotate(-90deg);
                     border-radius: 20px;
                     filter: drop-shadow(0px 0px 2px black);
                     width: unset;
                     height: unset;
                     color: black;
                     fill: black;
                 }
                 .search-jumper-type.search-jumper-open>span.search-jumper-word,
                 #search-jumper.funcKeyCall .search-jumper-type>span.search-jumper-word {
                     filter: drop-shadow(0px 0px 2px black);
                 }
                 .search-jumper-left .searchJumperExpand>svg,
                 .search-jumper-right .searchJumperExpand>svg {
                     transform: unset;
                 }
                 .search-jumper-bottom {
                     top: unset;
                     bottom: 0;
                     height: ${84*this.scale}px;
                     max-height: ${86*this.scale}px;
                     overflow-y: hidden;
                 }
                 .search-jumper-left>.search-jumper-searchBar {
                     width: fit-content;
                     margin-top: 0;
                     margin-left: -${20*this.scale}px;
                 }
                 .hideAll.search-jumper-left>.search-jumper-searchBar {
                     margin-left: -${40*this.scale}px;
                 }
                 .search-jumper-right>.search-jumper-searchBar {
                     margin-top: 0;
                     right: -${20*this.scale}px;
                     position: fixed;
                 }
                 .hideAll.search-jumper-right>.search-jumper-searchBar {
                     right: -${40*this.scale}px;
                 }
                 .search-jumper-left>.search-jumper-searchBar:hover,
                 .search-jumper-left>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-left.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
                     margin-top: unset;
                     margin-left: 0;
                     opacity: 1;
                 }
                 .search-jumper-right>.search-jumper-searchBar:hover,
                 .search-jumper-right>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-right>.search-jumper-searchBar,
                 .search-jumper-right.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
                     margin-top: unset;
                     right: 0;
                     opacity: 1;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar {
                     position: relative;
                     margin-top: 0px;
                     top: ${42*this.scale}px;
                 }
                 .hideAll.search-jumper-bottom>.search-jumper-searchBar {
                     opacity: 0;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                     opacity: 1;
                 }
                 .search-jumper-btn {
                     position: relative;
                     display: grid;
                     --scale: 1;
                     padding: ${1*this.scale}px!important;
                     margin: ${3*this.scale}px!important;
                     cursor: pointer;
                     box-sizing: content-box;
                     ${l.prefConfig.noAni?"":"transition:margin-left 0.25s ease, width 0.25s, height 0.25s, transform 0.25s, background 0.25s;"}
                     width: calc(${32*this.scale}px * var(--scale));
                     height: calc(${32*this.scale}px * var(--scale));
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     text-decoration:none;
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     text-align: center;
                     background-image: initial;
                     filter: drop-shadow(1px 1px 3px #00000030);
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn {
                     padding: ${1*this.tilesZoom}px!important;
                     margin: ${3*this.tilesZoom}px!important;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     filter: drop-shadow(1px 1px 3px #00000060);
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-btn:not(.search-jumper-word)>span {
                     position: absolute;
                     text-align: center;
                     width: 100%;
                     bottom: 0px;
                     color: black!important;
                     font-family: Arial, sans-serif;
                     text-shadow: 0 1px white, 1px 0 white, -1px 0 white, 0 -1px white;
                     font-size: ${12*this.scale}px;
                     font-weight: normal;
                     opacity: 0.8;
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: ${12*this.tilesZoom}px;
                 }
                 .search-jumper-type>a.search-jumper-btn.historySite {
                     box-shadow: 0px 0px 8px 0px #00000080;
                 }
                 .search-jumper-btn>img {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     border: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     border-radius: unset;
                 }
                 .search-jumper-btn>b {
                     line-height: ${32*this.scale}px;
                     font-size: ${14*this.scale}px;
                     letter-spacing: 0;
                     color: white;
                     opacity: 0.9;
                     text-shadow: 0 0 1px #d9d9d9cc;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>b {
                     line-height: ${32*this.tilesZoom}px;
                     font-size: ${14*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover>b {
                     opacity: 1;
                 }
                 .search-jumper-btn>div {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     line-height: ${32*this.scale}px;
                     background: black;
                     border-radius: ${20*this.scale}px;
                     font-size: ${30*this.scale}px;
                     color: wheat;
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>div {
                     line-height: ${32*this.tilesZoom}px;
                     border-radius: ${20*this.tilesZoom}px;
                     font-size: ${30*this.tilesZoom}px;
                 }
                 .search-jumper-isInPage .search-jumper-btn>div,
                 .search-jumper-isTargetImg .search-jumper-btn>div,
                 .search-jumper-isTargetAudio .search-jumper-btn>div,
                 .search-jumper-isTargetVideo .search-jumper-btn>div,
                 .search-jumper-isTargetLink .search-jumper-btn>div,
                 .search-jumper-isTargetPage .search-jumper-btn>div {
                     animation-name: changeOpacity;
                     animation-duration: 2s;
                     animation-iteration-count: 3;
                     animation-delay: 0.1s;
                     display: block;
                     opacity: 0;
                 }
                 @keyframes changeOpacity {
                     0%   {opacity: 0;}
                     10%  {opacity: 0;}
                     50%  {opacity: 0.75;}
                     80%  {opacity: 0;}
                     100% {opacity: 0;}
                 }
                 @-webkit-keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 @keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 .search-jumper-tips>.loader {
                     border-width: 5px;
                     border-style: solid;
                     border-color: gainsboro gainsboro dodgerblue gainsboro;
                     border-radius: 50%;
                     display: block;
                     width: 25px;
                     float: left;
                     height: 25px;
                     margin-right: 10px;
                     margin-top: 5px;
                     -webkit-animation: loader-rotate 1.5s linear infinite;
                     animation: loader-rotate 1.5s linear infinite;
                 }
                 .search-jumper-tips>.loader+font {
                     font-size: 25px;
                     line-height: 40px;
                 }
                 .search-jumper-tips>div {
                     font-size: initial;
                     line-height: initial;
                     font-weight: normal;
                     padding: 5px;
                     cursor: initial;
                 }
                 .search-jumper-tips>div [data-read],
                 .search-jumper-tips>div [data-close],
                 .search-jumper-tips>div [data-paste],
                 .search-jumper-tips>div [data-copy] {
                     cursor: pointer;
                 }
                 .search-jumper-tips>div [data-search] {
                     cursor: help;
                 }
                 .search-jumper-tips>div [data-close] {
                     position: absolute;
                     top: 0px;
                     right: 0px;
                     width: 20px;
                     height: 20px;
                     color: white;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-close]:hover {
                     color: red;
                 }
                 .search-jumper-tips>div [data-read] {
                     color: #f9690e;
                 }
                 .search-jumper-tips>div [data-drag] {
                     cursor: grab;
                 }
                 .search-jumper-tips.draging {
                     cursor: grabbing;
                     transition: none;
                 }
                 .search-jumper-tips.draging * {
                     pointer-events: none;
                 }
                 .search-jumper-logoBtnSvg {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     overflow: hidden;
                     vertical-align: top;
                     cursor: grab;
                 }
                 #search-jumper.funcKeyCall .search-jumper-logoBtnSvg {
                     height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                 }
                 .search-jumper-type.search-jumper-targetImg,
                 .search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-type.search-jumper-targetLink,
                 .search-jumper-type.search-jumper-targetPage,
                 .search-jumper-isTargetImg>.search-jumper-type,
                 .search-jumper-isTargetAudio>.search-jumper-type,
                 .search-jumper-isTargetVideo>.search-jumper-type,
                 .search-jumper-isTargetLink>.search-jumper-type,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
                     display: none;
                 }
                 #search-jumper.in-input .search-jumper-type.search-jumper-open {
                     width: auto!important;
                     height: auto!important;
                 }
                 #search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
                     display: flex!important;
                 }
                 #search-jumper .input-hide,
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist.input-hide {
                     display: none!important;
                 }
                 #search-jumper.in-input .search-jumper-type:not(.input-hide) {
                     display: inline-flex!important;
                     flex-wrap: nowrap!important;
                 }
                 #search-jumper.in-input .search-jumper-btn:not(.input-hide) {
                     display: grid!important;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-logo {
                     display: inline-flex;
                     background: unset;
                     padding: 0px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
                     display: none;
                 }
                 .search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
                     display: inline-flex;
                 }
                 .search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-isTargetPage>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
                     display: inline-flex;
                 }
                 .search-jumper-type,
                 .search-jumper-logo {
                     display: inline-flex;
                     box-sizing: border-box;
                     background: #d0d0d0;
                     border-radius: ${20*this.scale}px!important;
                     overflow: hidden;
                     padding: 0.2px;
                     height: ${40*this.scale}px;
                     width: ${40*this.scale}px;
                     max-height: ${40*this.scale}px;
                     min-height: ${40*this.scale}px;
                     min-width: ${40*this.scale}px;
                     ${l.prefConfig.noAni?"":`transition:width ${l.prefConfig.typeOpenTime}ms ease, height ${l.prefConfig.typeOpenTime}ms;`}
                 }
                 #search-jumper.funcKeyCall .search-jumper-type,
                 #search-jumper.funcKeyCall .search-jumper-logo {
                     border-radius: ${20*this.tilesZoom}px!important;
                     height: ${40*this.tilesZoom}px;
                     width: ${40*this.tilesZoom}px;
                     max-height: ${40*this.tilesZoom}px;
                     min-height: ${40*this.tilesZoom}px;
                     min-width: ${40*this.tilesZoom}px;
                 }
                 .search-jumper-right>.searchJumperNavBar {
                     right: unset;
                     left: 0;
                 }
                 .search-jumper-right>.searchJumperNavBar>#navMarks+div.navPointer {
                     right: unset;
                     left: 20px;
                     transform: rotate(180deg);
                 }
                 .search-jumper-bottom>.search-jumper-input {
                     bottom: unset;
                     top: 80px;
                 }
                 #search-jumper .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${l.prefConfig.expandTypeLength||12})~a {
                     display: none!important;
                 }
                 #search-jumper .sitelist {
                     position: fixed;
                     text-align: left;
                     background: #00000000;
                     max-height: calc(100vh - ${42*this.scale}px);
                     overflow: scroll;
                     border: 0;
                     pointer-events: none;
                     opacity: 0;
                     ${l.prefConfig.noAni?"":"transition:opacity 0.25s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     z-index: 1;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                     padding: 0 0 10px 0;
                     background: #ffffffee;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                 }
                 #search-jumper .sitelist>.sitelistCon>div:hover {
                     background: #f5f7fa;
                 }
                 #search-jumper .sitelist a {
                     display: flex;
                     align-items: center;
                     text-decoration: none;
                     cursor: pointer;
                 }
                 #search-jumper .sitelist a>img {
                     width: 20px;
                     height: 20px;
                     margin-right: 10px;
                     margin-top: unset;
                     max-width: unset;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a>p {
                     display: inline-block;
                     font-size: 15px;
                     font-family: Arial, sans-serif;
                     line-height: 25px;
                     margin: 5px auto;
                     color: #6b6e74;
                     flex: 1;
                     text-align: left;
                     white-space: nowrap;
                     transform-origin: left;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a.dragTarget>img {
                     -webkit-transform:scale(1.5);
                     -moz-transform:scale(1.5);
                     transform:scale(1.5);
                 }
                 #search-jumper .sitelist a.dragTarget>p {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform: scale(1.2);
                 }
                 #search-jumper .sitelist a * {
                     pointer-events: none;
                 }
                 #search-jumper .sitelist>.sitelistCon>p {
                     color: #565656;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif;
                     font-weight: bold;
                     background: #f6f6f6;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                     padding: 3px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                     margin: -1px 0 0 0;
                 }
                 .search-jumper-searchBar.disable-pointer>.search-jumper-type {
                     pointer-events: none;
                 }
                 .search-jumper-word {
                     background: black;
                     color: #ffffff!important;
                     font-family: Arial, sans-serif;
                     font-weight: 500;
                     font-size: ${13*this.scale}px;
                     line-height: calc(${32*this.scale}px * var(--scale));
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     letter-spacing: 0px;
                     text-shadow: unset;
                     text-decoration: none;
                 }
                 span.search-jumper-word {
                     border-radius: ${20*this.scale}px!important;
                 }
                 a.search-jumper-word>span {
                     border-radius: 50%!important;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     background: white;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word {
                     border-radius: ${10*this.tilesZoom}px!important;
                     font-size: ${14*this.tilesZoom}px;
                     line-height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word>span {
                     background: unset;
                 }
                 .search-jumper-word:hover {
                     font-weight: bold;
                     text-shadow: 0px 0px 5px #d0d0d0;
                 }
                 a.search-jumper-word {
                     color: #111111!important;
                     background: unset;
                 }
                 .funcKeyCall a.search-jumper-word {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-word>span {
                     color: #222!important;
                     border-radius: 20px;
                     line-height: unset;
                     text-align: center;
                     text-shadow: 0 0 0.7px #787878dd;
                     background-image: initial;
                 }
                 .search-jumper-type img {
                     width: 100%;
                     height: 100%;
                     margin-top: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                 }
                 .funcKeyCall>.search-jumper-tips {
                     position: absolute;
                 }
                 .search-jumper-tips {
                     z-index: 2147483647;
                     pointer-events: none;
                     position: fixed;
                     font-size: ${35*this.tipsZoom}px;
                     background: #f5f5f5f0;
                     border-radius: ${10*this.tipsZoom}px!important;
                     padding: 6px;
                     box-shadow: 0px 0px 10px 0px #000;
                     font-weight: bold;
                     ${l.prefConfig.noAni?"":"transition: all 0.2s ease;"}
                     color: black;
                     white-space: normal;
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     width: max-content;
                     line-height: ${35*this.tipsZoom}px;
                     word-break: break-all;
                     text-align: center;
                     box-sizing: content-box;
                     overflow: hidden;
                     font-family: Roboto,arial,sans-serif;
                     cursor: grab;
                     max-height: 80vh;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-tips:hover {
                     overflow: auto;
                 }
                 .search-jumper-tips * {
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     margin: auto;
                 }
                 .search-jumper-tips .markdown {
                     white-space: pre-wrap;
                     line-height: 1.2;
                     text-align: initial;
                     margin: 10px;
                     display: block;
                     user-select: text;
                     cursor: auto;
                 }
                 .search-jumper-tips iframe {
                     border: unset;
                     display: block;
                 }
                 .search-jumper-searchBar>.search-jumper-type {
                     padding: 0px;
                     ${l.prefConfig.disableTypeOpen?"background: unset;":""}
                 }
                 .search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     background: unset;
                     border-radius: unset!important;
                 }
                 .minSizeMode.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open),
                 .minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                 }
                 .minSizeModeClose.minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-targetImg,.search-jumper-targetLink,.search-jumper-targetPage,.search-jumper-targetVideo,.search-jumper-targetAudio) {
                     display: inline-flex;
                 }
                 .funcKeyCall>.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                     border-radius: ${20*this.tilesZoom}px!important;
                 }
                 span.search-jumper-word>img {
                     width: ${20*this.scale}px;
                     height: ${20*this.scale}px;
                     margin: auto;
                 }
                 #search-jumper.funcKeyCall span.search-jumper-word>img {
                     width: ${20*this.tilesZoom}px;
                     height: ${20*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     color: white;
                     text-decoration:none;
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-btn:active {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     transition:unset;
                     filter: drop-shadow(1px 1px 5px #000000a0);
                 }
                 .search-jumper-searchBar .search-jumper-btn.current {
                     overflow: visible;
                 }
                 .search-jumper-searchBar .search-jumper-btn.current::before {
                     content: '';
                     position: absolute;
                     right: -2px;
                     top: -2px;
                     border: 1px solid #00000099;
                     display: inline-block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: white;
                     box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
                     ${l.prefConfig.noAni?"":"opacity: 0.8;"}
                 }
                 .in-input .search-jumper-input {
                     display: block;
                     box-sizing: content-box;
                 }
                 .lock-input .search-jumper-lock-input {
                     float: left;
                     font-size: 20px;
                     top: 14px;
                     left: 25px;
                     color: darkgrey;
                     position: absolute;
                     border-right: 2px solid #32373a;
                     padding-right: 10px;
                     display: block;
                 }
                 .search-jumper-input {
                     width: 50%;
                     min-width: 500px;
                     bottom: 2%;
                     left: 50%;
                     margin: 0 0 0 -25%;
                     margin-left: min(-25%, -250px);
                     position: fixed;
                     font-family: Arial, sans-serif;
                     text-align: left;
                     box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 10%);
                     border-radius: 28px;
                     background-color: rgb(51 56 59 / 90%);
                     padding: 5px;
                     display: none;
                     z-index: 2139999999;
                     font-size: 20px;
                     height: 36px;
                     touch-action: none;
                 }
                 .inputGroup {
                     cursor: grab;
                     display: flex;
                 }
                 .inputGroup * {
                     cursor: default;
                 }
                 .search-jumper-input input,
                 .search-jumper-input textarea {
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 16px;
                     height: 35px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     border-radius: 3px;
                     box-shadow: #333 0px 0px 2px;
                     width: calc(100% - 20px);
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                 }
                 #searchJumperInput,
                 #searchJumperInputKeyWords {
                     width: calc(100% - 11px);
                     float: left;
                     transition: 0.25s width ease;
                 }
                 #searchJumperInput {
                     margin: 0 5px 0 10px;
                 }
                 #searchJumperInputKeyWords {
                     margin: 0 10px 0 1px;
                 }
                 #searchJumperInputKeyWords:disabled {
                     opacity: 0.5;
                     max-width: 20%;
                     min-width: 20%;
                 }
                 #filterSites>input:focus,
                 #filterSites>textarea:focus {
                     width: calc(400% - 20px);
                     color: white;
                 }
                 .search-jumper-input * {
                     box-sizing: border-box;
                 }
                 .search-jumper-input input[type="radio"] {
                     display: none;
                 }
                 .search-jumper-input input:checked + label {
                     background: #3a444add;
                     opacity: 0.9;
                     color: white;
                     font-size: 14px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .line {
                     left: 27px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .line {
                     left: 233px;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input label {
                     display: inline-block;
                     font-size: 12px;
                     height: 32px;
                     line-height: 32px;
                     width: 200px;
                     text-align: center;
                     background: #2a343acc;
                     color: #959595;
                     position: relative;
                     transition: 0.25s background ease, 0.25s opacity ease;
                     cursor: pointer;
                     position: relative;
                     top: -38px;
                     left: 22px;
                     border-radius: 5px 5px 0 0;
                     user-select: none;
                     pointer-events: all;
                     max-width: 40%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     opacity: 0.6;
                 }
                 .search-jumper-input input:checked + label:hover,
                 .search-jumper-input label:hover {
                     background: #3a444a;
                     opacity: 1;
                 }
                 .search-jumper-input label::after {
                     content: "";
                     height: 1px;
                     width: 100%;
                     position: absolute;
                     display: block;
                     background: #ccc;
                     bottom: 0;
                     opacity: 0;
                     left: 0;
                     transition: 0.25s ease;
                 }
                 .search-jumper-input label:hover::after {
                     opacity: 1;
                 }
                 .search-jumper-input .line {
                     background: #1E88E5;
                     width: 200px;
                     height: 1px;
                     top: -2px;
                     left: 0;
                     transition: 0.25s ease;
                     position: absolute;
                 }
                 .inputGroup>.svgBtns {
                     right: 16px;
                     top: 5px;
                     height: 35px;
                     position: absolute;
                     user-select: none;
                     background: #212022;
                     white-space: nowrap;
                     overflow: hidden;
                     display: flex;
                     align-items: center;
                 }
                 .inputGroup>#addons {
                     position: absolute;
                     bottom: 41px;
                     right: 110px;
                     display: none;
                     flex-direction: column;
                     background: #212022;
                     border-radius: 10px;
                     opacity: 0;
                     transition: 0.5s opacity ease;
                 }
                 .inputGroup>#addons>div {
                     padding: 10px;
                 }
                 .inputGroup>#addons>div>input {
                     float: left;
                     width: 20px;
                     height: 20px;
                     margin: 0 10px 0 0;
                     cursor: pointer;
                 }
                 .inputGroup:hover>#addons {
                     display: flex;
                 }
                 .inputGroup>#addons:hover {
                     opacity: 1;
                 }
                 .inputGroup>.svgBtns:hover+#addons {
                     opacity: 1;
                 }
                 .inputGroup>#addons>div>label {
                     color: white;
                     display: inline;
                     background: none;
                     top: unset;
                     left: unset;
                     font-size: unset;
                     line-height: 20px;
                     max-width: unset;
                 }
                 .inputGroup>.svgBtns:hover {
                     width: auto;
                 }
                 .inputGroup>.svgBtns>svg {
                     margin: 0 2px;
                 }
                 .inputGroup svg.checked {
                     fill: #1E88E5;
                 }
                 @media screen and (max-width: 2048px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1580px;
                     }
                 }
                 @media screen and (max-width: 1920px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1320px;
                     }
                 }
                 @media screen and (max-width: 1600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1060px;
                     }
                 }
                 @media screen and (max-width: 1300px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 800px;
                     }
                 }
                 @media screen and (max-width: 900px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 540px;
                     }
                 }
                 @media screen and (max-width: 600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 95vw;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                         width: calc(100% - 20px);
                     }
                     #search-jumper-alllist>.timeInAll, #search-jumper-alllist>.dayInAll {
                         margin: 10px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(50vw - 45px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: 100px;
                         margin-left: 68px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                         margin-left: 0;
                     }
                 }
                 @media screen and (max-width: 380px) {
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(100vw - 60px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: calc(100vw - 150px);
                         margin-left: 85px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                         width: calc(100vw - 60px);
                     }
                 }
                 @media screen and (max-width: 800px) {
                     .search-jumper-input .line {
                         display: none;
                     }
                     .search-jumper-input {
                         min-width: 300px;
                         margin-left: min(-25%, -150px);
                     }
                     .inputGroup>.svgBtns {
                         width: 25px;
                     }
                     #search-jumper-alllist>.modeSwitch {
                         width: 36px;
                         height: 36px;
                         right: 2px;
                         top: 10px;
                     }
                 }
                 @media screen and (max-width: 650px) {
                     #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                         display: none;
                     }
                 }
                 .search-jumper-input .content-container {
                     background: #eee;
                     position: static;
                     font-size: 16px;
                 }
                 .search-jumper-input .content-container .inputGroup {
                     position: absolute;
                     padding: 5px;
                     width: 100%;
                     top: 0;
                     left: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s ease;
                     color: #333;
                 }
                 .search-jumper-input svg,
                 .searchJumperNavBar svg {
                     width: 25px;
                     height: 25px;
                     fill: white;
                     cursor: pointer;
                     opacity: 0.8;
                     transition: 0.25s all ease;
                     font-size: 0px;
                 }
                 .search-jumper-input .inputGroup:hover svg,
                 .searchJumperNavBar.sjNavShow svg {
                     pointer-events: all;
                 }
                 .search-jumper-input svg *,
                 .searchJumperNavBar svg * {
                     cursor: pointer;
                 }
                 .search-jumper-input svg:hover,
                 .searchJumperNavBar svg:hover,
                 .search-jumper-input>.closeBtn:hover,
                 .searchJumperNavBar>div.minNavBtn:hover,
                 .searchJumperNavBar>div.maxNavBtn:hover {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform:scale(1.2);
                     opacity: 1;
                 }
                 #search-jumper.selectedEle #filterSites>.svgBtns>svg {
                     display: inline-block!important;
                 }
                 .search-jumper-input>.closeBtn {
                     position: absolute;
                     right: 0px;
                     top: -35px;
                     width: 30px;
                     height: 30px;
                     vertical-align: middle;
                     overflow: hidden;
                     background: rgb(51 56 59 / 90%);
                     color: white;
                     text-align: center;
                     line-height: 30px;
                     border-radius: 20px;
                     pointer-events: all;
                     transition: 0.25s all ease;
                     opacity: 0.6;
                     font-size: 26px;
                     box-shadow: 0px 0px 2px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 20%);
                     cursor: pointer;
                     user-select: none;
                 }
                 #searchInPage>.lockWords {
                     max-width: 50%;
                     position: absolute;
                     bottom: 4px;
                     left: 16px;
                     color: white;
                     font-size: 18px;
                     display: flex;
                     flex-wrap: wrap-reverse;
                     max-height: 38px;
                     overflow: hidden;
                 }
                 #searchInPage>.lockWords:hover {
                     overflow-y: auto;
                     height: auto;
                     max-height: 90vh;
                 }
                 #searchInPage>.lockWords>span {
                     position: relative;
                     padding: 5px;
                     cursor: pointer;
                     user-select: none;
                     background: yellow;
                     color: black;
                     border: 1px solid;
                     margin: 2px;
                     display: flex;
                     align-items: center;
                     white-space: nowrap;
                     max-width: 100%;
                     line-height: initial;
                 }
                 #searchInPage>.lockWords>span>em {
                     cursor: alias;
                 }
                 #searchInPage>.lockWords .lockWordTool {
                     position: absolute;
                     right: 0;
                     top: 0;
                     display: none;
                     opacity: 0.3;
                     height: 15px;
                     width: 15px;
                     text-align: center;
                     line-height: 15px;
                     border-radius: 50%;
                     background: black;
                     color: white;
                 }
                 #searchInPage>.lockWords .lockWordTool>span {
                     cursor: pointer;
                     font-size: 15px;
                 }
                 #searchInPage>.lockWords .modifyBtn {
                     top: unset;
                     bottom: 0;
                 }
                 #searchInPage>.lockWords .lockWordTool:hover {
                     opacity: 1;
                 }
                 #searchInPage>.lockWords>span:hover .lockWordTool {
                     display: block;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords .lockWordTool>svg {
                     width: 15px;
                     height: 15px;
                     fill: black;
                     color: black;
                     border: 1px solid white;
                     border-radius: 10px;
                     background: white;
                 }
                 #searchInPage>.lockWords>span>em {
                     font-size: 12px;
                     margin-right: 5px;
                     color: unset;
                 }
                 .searchJumperNavBar {
                     all: unset;
                     top: 0px;
                     bottom: 0px;
                     right: 0px;
                     position: fixed;
                     width: 20px;
                     z-index: 2147483647;
                     background: #00000026;
                     text-align: center;
                     pointer-events: none;
                     font-size: 0px;
                     opacity: 0;
                     transition: width 0.3s, background 0.3s;
                 }
                 .searchJumperNavBar:hover {
                     width: 25px;
                     background: #00000066;
                 }
                 .searchJumperNavBar.sjNavShow {
                     pointer-events: all;
                     opacity: 1;
                 }
                 .search-jumper-showall > .searchJumperNavBar.sjNavShow {
                     opacity: 0;
                 }
                 .searchJumperNavBar>.closeNavBtn {
                     width: 16px;
                     height: 16px;
                     fill: white;
                     cursor: pointer;
                     display: inline-block;
                 }
                 .searchJumperNavBar>.minNavBtn,
                 .searchJumperNavBar>.maxNavBtn {
                     font-size: 12px;
                     font-weight: bold;
                     font-family: system-ui;
                     line-height: 16px;
                     opacity: 0.1;
                     background: white;
                     color: black;
                     border-radius: 10px;
                     width: 16px;
                     height: 16px;
                     display: inline-block;
                     cursor: pointer;
                     transition: 0.25s opacity ease, 0.25s transform ease;
                 }
                 .searchJumperNavBar:hover>.minNavBtn,
                 .searchJumperNavBar:hover>.maxNavBtn {
                     opacity: 0.8;
                 }
                 #search-jumper>.searchJumperNavBar.minimize {
                     background: transparent;
                     pointer-events: none;
                 }
                 .searchJumperNavBar.minimize>.closeNavBtn,
                 .searchJumperNavBar.minimize>.navPointer,
                 .searchJumperNavBar.minimize>.maxNavBtn,
                 .searchJumperNavBar.minimize>#navMarks {
                     display: none;
                 }
                 .searchJumperNavBar.minimize>.minNavBtn {
                     opacity: 1;
                     box-shadow: 0px 0px 3px 1px #000;
                     margin-left: -50px;
                     margin-top: 5px;
                     pointer-events: all;
                 }
                 .search-jumper-right>.searchJumperNavBar.minimize>.minNavBtn {
                     margin-left: unset;
                     margin-right: -50px;
                 }
                 #navMarks+.navPointer {
                     pointer-events: none;
                     position: absolute;
                     right: 20px;
                     text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
                     font-size: 30px;
                     font-family: system-ui;
                     line-height: 0px;
                     border: 0;
                     margin-top: 0;
                     opacity: 0.8;
                     color: black;
                     transition: top 0.25s ease;
                     animation-name: changeHor;
                     animation-duration: 1s;
                     animation-iteration-count: infinite;
                     animation-timing-function: ease-in-out;
                 }
                 @keyframes changeHor {
                     0%   {right: 20px;}
                     10%  {right: 18px;}
                     80%  {right: 25px;}
                     100% {right: 20px;}
                 }
                 #navMarks {
                     height: calc(100% - 50px);
                     width: 100%;
                     position: relative;
                 }
                 #navMarks>span {
                     height: 0.5vh;
                     width: 100%;
                     position: absolute;
                     border: 1px solid #cccccc;
                     min-height: 5px;
                     box-sizing: border-box;
                     left: 0;
                     border-radius: 0px!important;
                     cursor: alias;
                 }
                 .searchJumperPosBar {
                     background: rgba(29, 93, 163, 0.3);
                     position: absolute;
                     min-height: 10px;
                     min-width: 10px;
                     animation-duration: 2s;
                     z-index: 2147483647;
                     margin: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s all ease;
                 }
                 .searchJumperPosBar.searchJumperPosW {
                     width: 100%;
                     left: 0;
                 }
                 .searchJumperPosBar.searchJumperPosH {
                     height: 100%;
                     top: 0;
                     position: fixed;
                 }
                 @keyframes fadeit {
                     0% {opacity: 1;}
                     50% {opacity: 0.8;}
                     100% {opacity: 0;}
                 }
                 #rightSizeChange {
                     top: 0;
                     opacity: 0;
                     height: 45px;
                     width: 15px;
                     position: absolute;
                     cursor: e-resize;
                     right: 0;
                     pointer-events: all;
                 }
                 .searchJumper-hide {
                     display: none!important;
                 }
                 .search-jumper-historylist>a.search-jumper-btn {
                     filter: drop-shadow(0px 0px 3px #00000050);
                     width: 32px;
                     height: 32px;
                     line-height: 32px;
                     min-width: auto;
                     min-height: auto;
                     flex-shrink: 0;
                 }
                 .search-jumper-historylist>a.search-jumper-btn>img {
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-historylist>a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: 12px;
                     line-height: normal;
                 }
                 #search-jumper .listArrow {
                     width: 0;
                     height: 0;
                     border: 10px solid transparent;
                     pointer-events: none;
                     border-bottom-color: white;
                     position: fixed;
                     opacity: 0;
                     visibility: hidden;
                     z-index: 2147483647;
                     transition: opacity .3s ease, top .15s, bottom .15s, left .15s, right .15s;
                 }
                 #search-jumper.search-jumper-left .listArrow {
                     border-bottom-color: transparent;
                     border-right-color: white;
                 }
                 #search-jumper.search-jumper-right .listArrow {
                     border-bottom-color: transparent;
                     border-left-color: white;
                 }
                 #search-jumper.search-jumper-bottom .listArrow {
                     border-bottom-color: transparent;
                     border-top-color: white;
                 }
                 @media (prefers-color-scheme: dark) {
                     /* \u7ad9\u70b9\u5217\u8868 */
                     #search-jumper .sitelist > .sitelistCon > p {
                         background-color: #252B32 !important;
                     }
                     #search-jumper.search-jumper-showall #filterSites {
                         background-color: #2a282cc0;
                     }
                     #search-jumper.search-jumper-showall #filterSites>input,
                     #search-jumper.search-jumper-showall #filterSites>textarea {
                         background-color: #000000;
                         color: white;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127ee !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #DADADA !important;
                     }
                     #search-jumper .listArrow {
                         border-bottom-color: #1C2127;
                     }
                     #search-jumper.search-jumper-left .listArrow {
                         border-bottom-color: transparent;
                         border-right-color: #1C2127;
                     }
                     #search-jumper.search-jumper-right .listArrow {
                         border-bottom-color: transparent;
                         border-left-color: #1C2127;
                     }
                     #search-jumper.search-jumper-bottom .listArrow {
                         border-bottom-color: transparent;
                         border-top-color: #1C2127;
                     }

                     /* \u5386\u53f2\u5217\u8868 */
                     .search-jumper-historylistcon {
                         background-color: #181C20e0 !important;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 3px #ffffff50);
                     }

                     .search-jumper-showall a.search-jumper-word,
                     .search-jumper-showall a.search-jumper-word > span {
                         background-color: #292A2D !important;
                         border-radius: 20px !important;
                     }

                     .search-jumper-tips {
                         background-color: #3F4042f0;
                         color: #DADADA;
                     }
                     .search-jumper-tips>*:not(font) {
                         color: white;
                     }

                     .search-jumper-showall a.search-jumper-word > span {
                         color: #DADADA !important;
                     }

                     .search-jumper-showall .search-jumper-word:hover {
                         text-shadow: 0px 0px 5px #2374FF !important;
                     }

                     /* \u7c7b\u522b */
                     .search-jumper-showall .search-jumper-type,
                     .search-jumper-showall .search-jumper-logo {
                         background-color: #181C20 !important;
                     }

                     #search-jumper.search-jumper-showall>.groupTab {
                         background: #1C2127ee !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab>span:hover{
                         background: #283C57 !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                         color: white;
                     }
                 }
                 `;this.inPageCss="\n                 mark.searchJumper,\n                 a.searchJumper {\n                     visibility: inherit;\n                     font-style: normal;\n                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;\n                     border-radius: 3px;\n                     text-decoration: none;\n                     padding: 1px 0;\n                     -webkit-text-fill-color: initial;\n                     text-shadow: initial;\n                     min-width: initial;\n                     display: inline;\n                 }\n                 mark.searchJumper:before,\n                 a.searchJumper:before,\n                 mark.searchJumper:after,\n                 a.searchJumper:after {\n                     all: unset;\n                     content: none!important;\n                 }\n                 mark.searchJumper[data-current=true],\n                 a.searchJumper[data-current=true] {\n                     border-bottom: 0.2em solid;\n                     border-bottom-left-radius: 0;\n                     border-bottom-right-radius: 0;\n                     animation: 0.5s linear 0s 5 normal none running currentMark;\n                 }\n                 @keyframes currentMark {\n                     from {border-color: unset}\n                     to {border-color: transparent;}\n                 }\n                ";
l.prefConfig.cssText&&(Nb+=l.prefConfig.cssText);var b=document.createElement("span");b.className="search-jumper-logo";nb=document.createElement("span");nb.innerHTML=ba(xc);nb.className="search-jumper-btn";b.addEventListener("mouseenter",t=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")});b.appendChild(nb);let d=document.createElement("span");d.className="search-jumper-searchBar";d.appendChild(b);b=document.createElement("div");b.id="search-jumper";b.style.display=
"none";b.className="search-jumper-searchBarCon";b.appendChild(d);b.setAttribute("translate","no");let c=document.createElement("div");c.id="search-jumper-alllist";b.appendChild(c);this.alllist=c;var f=document.createElement("span");f.className="groupTab";b.appendChild(f);this.groupTab=f;let g=document.createElement("div");g.className="search-jumper-showallBg";b.appendChild(g);let e=document.createElement("div");e.className="sitelistBox";c.appendChild(e);this.sitelistBox=e;const h=/#[^\s#]+/g;e.addEventListener("mouseover",
t=>{if(c.classList.contains("new-mode")){t=t.target;t.parentNode&&t.parentNode.dataset.name&&(t=t.parentNode);var y=t.title;if(t.dataset.name&&y&&!t.initedTag){var W=document.createElement("p");if(y=y.match(h))y.forEach(Q=>{let B=document.createElement("span");B.innerText=Q.slice(1);B.addEventListener("click",E=>{a.searchInput.value=Q;a.searchInput.dispatchEvent(new CustomEvent("input"))});W.appendChild(B)}),t.appendChild(W);t.initedTag=!0}}});f=document.createElement("span");f.className="timeInAll";
c.appendChild(f);this.timeInAll=f;this.modeSwitch=document.createElement("div");this.modeSwitch.className="modeSwitch";this.modeSwitch.innerHTML=ba('<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>');
c.appendChild(this.modeSwitch);this.modeSwitch.addEventListener("click",t=>{t.preventDefault();t.stopPropagation();c.classList.toggle("new-mode");c.classList.remove("showbg");O.setItem("allPageNewMode",c.classList.contains("new-mode"))});this.modeSwitch.addEventListener("mouseenter",t=>{Za&&(t.preventDefault(),t.stopPropagation(),c.classList.add("showbg"))});this.modeSwitch.addEventListener("mouseleave",t=>{Za&&(t.preventDefault(),t.stopPropagation(),c.classList.remove("showbg"))});this.modeSwitch.addEventListener("contextmenu",
t=>{Za&&(t.preventDefault(),t.stopPropagation(),c.classList.remove("showbg"),wa(Za,{active:!0,insert:!0}))});ed&&c.classList.add("new-mode");f=document.createElement("span");f.className="dayInAll";c.appendChild(f);this.dayInAll=f;c.addEventListener(Fb(),t=>{a.tips.style.display="none";clearTimeout(a.requestShowTipsTimer);if((t.target==c||t.target==g||t.target==e)&&!c.classList.contains("new-mode")){if("wheel"!==t.type){var y=0;"number"==typeof t.axis?2==t.axis&&(y=t.detail):("undefined"==typeof t.wheelDeltaY||
0!=t.wheelDeltaY)&&(y=-t.wheelDelta/40)}else y=t.deltaY;t.preventDefault();t.stopPropagation();c.scrollLeft+=y}},{passive:!1,capture:!1});f=document.createElement("span");f.innerHTML=ba(xc);f.className="search-jumper-btn";f.addEventListener("click",t=>{wa(Oa,{active:!0,insert:!0})});c.appendChild(f);f=document.createElement("div");f.className="search-jumper-historylistcon";c.appendChild(f);var k=document.createElement("div");k.className="search-jumper-historylist";f.appendChild(k);this.historylist=
k;d.addEventListener("mouseenter",t=>{d.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),l.prefConfig.mouseLeaveToHide&&d.classList.remove("initShow"))},!1);d.addEventListener("mouseleave",t=>{if(l.prefConfig.mouseLeaveToHide){if(d.classList.contains("grabbing"))return;a.waitForHide()}a.preList&&(a.preList.style.visibility="hidden",a.listArrow.style.cssText="")},!1);this.touched=!0;l.prefConfig.initShow?d.classList.add("initShow"):this.touched=
!1;l.prefConfig.minSizeMode&&(d.classList.add("minSizeMode"),d.classList.add("minSizeModeClose"));jc&&!l.prefConfig.resizePage&&(R(document).addEventListener("touchstart",t=>{this.touched=!1;d.classList.remove("initShow")},{passive:!0,capture:!1}),d.addEventListener("touchstart",t=>{this.touched||this.funcKeyCall||(this.touched=!0,d.classList.add("disable-pointer"),t.stopPropagation(),setTimeout(()=>{d.classList.remove("disable-pointer")},250))},{passive:!1,capture:!0}));this.bar=d;this.con=b;let p=
document.createElement("span");p.className="search-jumper-tips";p.style.opacity=0;b.appendChild(p);p.addEventListener("mouseenter",t=>{a.hideTimeout&&clearTimeout(a.hideTimeout)},!1);p.addEventListener("click",t=>{let y=t.target.dataset;t=t.target.innerText;if(y){if("undefined"!==typeof y.read){let W=new SpeechSynthesisUtterance("");W.volume=y.volume||1;W.rate=y.rate||1;W.pitch=y.pitch||1;W.lang=y.lang||"";W.text=y.read||t;window.speechSynthesis.speak(W)}"undefined"!==typeof y.copy&&pb(y.copy||t);
y.search&&(Eb=t,a.searchBySiteName(y.search));"undefined"!==typeof y.paste&&D&&(/INPUT|TEXTAREA/i.test(D.nodeName)&&"true"!=D.getAttribute("aria-readonly")||"true"==D.contentEditable)&&Sb(D,y.paste||t);"undefined"!==typeof y.close&&(a.tips.style.opacity=0,a.tips.style.display="none",a.tips.innerHTML=ba(""))}},!1);let v,q,n=t=>{let y=rb(t)-v.x;t=sb(t)-v.y;5>Math.abs(y)+Math.abs(t)||(""===p.style.right?p.style.setProperty("left",q.left+y+"px","important"):p.style.setProperty("right",q.right-y+"px",
"important"),""===p.style.bottom?p.style.setProperty("top",q.top+t+"px","important"):p.style.setProperty("bottom",q.bottom-t+"px","important"),p.classList.add("draging"))},m=t=>{document.removeEventListener("mouseup",m,!1);document.removeEventListener("mousemove",n,!1);document.removeEventListener("touchend",m,!1);document.removeEventListener("touchmove",n,!1);p.classList.remove("draging")},w=(t,y)=>{!t.target||t.target!==p&&"undefined"===typeof t.target.dataset.drag||(t.preventDefault(),t.stopPropagation(),
v={x:rb(t),y:sb(t)},t=getComputedStyle(p),q={left:parseFloat(t.left),right:parseFloat(t.right),top:parseFloat(t.top),bottom:parseFloat(t.bottom)},y&&y())};p.addEventListener("mousedown",t=>{w(t,()=>{document.addEventListener("mouseup",m,!1);document.addEventListener("mousemove",n,!1)})},!1);p.addEventListener("touchstart",t=>{w(t,()=>{document.addEventListener("touchend",m,!1);document.addEventListener("touchmove",n,!1)})},{passive:!1,capture:!1});this.tips=p;f=document.createElement("div");f.className=
"searchJumperNavBar";f.style.display="none";f.innerHTML=ba('\n                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>\n                  <div class="minNavBtn" title="Minimize navigation">-</div>\n                  <div id="navMarks"></div>\n                  <div class="maxNavBtn" title="Restore input"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==" /></div>\n                  <div class="navPointer">></div>\n                ');
b.appendChild(f);k=document.createElement("span");k.title=C("expand");k.className="searchJumperExpand search-jumper-btn";k.innerHTML=ba('\n                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>\n                ');this.searchJumperExpand=
k;this.navMarks=f.querySelector("#navMarks");this.closeNavBtn=f.querySelector(".closeNavBtn");this.minNavBtn=f.querySelector(".minNavBtn");this.maxNavBtn=f.querySelector(".maxNavBtn");this.searchJumperNavBar=f;this.navPointer=f.querySelector(".navPointer");this.navPointer.style.display="none";f=document.createElement("div");f.className="search-jumper-input";f.innerHTML=ba(`<span class="closeBtn">\u00d7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${l.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${C("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${l.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${C("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${C("inputTitle")}" placeholder="${C("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${C("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${C("inPageTips")}" placeholder="${C("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `);b.appendChild(f);this.searchInputDiv=f;this.searchInput=f.querySelector("#searchJumperInput");this.searchJumperInputKeyWords=f.querySelector("#searchJumperInputKeyWords");this.searchLockInput=f.querySelector(".search-jumper-lock-input");this.searchJumperInPageInput=f.querySelector("#searchJumperInPageInput");this.pickerBtn=f.querySelector("#pickerBtn");this.minEleBtn=f.querySelector("#minEleBtn");this.maxEleBtn=f.querySelector("#maxEleBtn");this.copyEleBtn=f.querySelector("#copyEleBtn");
this.openLinkBtn=f.querySelector("#openLinkBtn");this.editBtn=f.querySelector("#editBtn");this.addWord=f.querySelector("#addWord");this.recoverBtn=f.querySelector("#recoverBtn");this.wordModeBtn=f.querySelector("#wordModeBtn");this.saveRuleBtn=f.querySelector("#saveRuleBtn");this.pinBtn=f.querySelector("#pinBtn");this.locBtn=f.querySelector("#locBtn");this.emptyBtn=f.querySelector("#emptyBtn");this.copyInPageBtn=f.querySelector("#copyInPageBtn");this.closeBtn=f.querySelector(".closeBtn");this.filterSites=
f.querySelector("#filterSites");this.filterSitesTab=f.querySelector("#filterSitesTab");this.searchInPageTab=f.querySelector("#searchInPageTab");this.searchInPageLockWords=f.querySelector("#searchInPage>.lockWords");this.contentContainer=f.querySelector(".content-container");this.rightSizeChange=f.querySelector("#rightSizeChange");this.filterGlob=f.querySelector("#filterGlob");this.suggestDatalist=f.querySelector("#suggest");this.addonsList=f.querySelector("#addons");this.fakeTextareas=new Map;this.addonCheckboxDict=
{}}showInPageSearch(){this.searchInPageTab.checked=!0;this.showSearchInput();this.initSetInPageWords();this.searchJumperInPageInput.value="";this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0;this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let a=Pa()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||gb();if(a)try{a=decodeURIComponent(a)}catch(b){}this.lockWords&&-1!==this.lockWords.indexOf(a)||(this.searchJumperInPageInput.value=
a||Ia,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value))}}anylizeInPageWords(a,b){if(!a)return[];let d=this,c=[];this.lockWords||(0===a.indexOf("$c")&&2<a.length?a=a.substr(3).trim():0===a.indexOf("$o")&&(a=a.substr(2).trim()));if(this.splitSep){let f=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;a.split(f).sort((g,e)=>e.length-g.length).forEach(g=>{let e=g;if((g=g.trim())&&(!b||!(g.length<(l.prefConfig.limitInPageLen||1)||
(l.prefConfig.ignoreWords||[]).includes(g.toLowerCase())))){var h="",k=!1,p=!1,v="";var q=/\$t{(.*?)}($|\$)/;var n=g.match(q),m=0;if(n)if(h=n[1],g=g.replace(q,"$2"),"\\$popup"==h)h="$popup";else if("\\@popup"==h)h="@popup";else if(q=h.match(/^[\$@]popup(\((.*)\))?$/))h="",k=!0,q[1]&&(m=q[2]||"1");q=/\$p{(.*?)}($|\$)/;if(n=g.match(q)){var w=parseInt(n[1])||0;g=g.replace(q,"$2")}q=/\$in{(.*?)}($|\$)/;if(n=g.match(q)){var t=n[1]||"";g=g.replace(q,"$2")}n=/\$s{(.*?)}($|\$)/;if(q=g.match(n)){var y=q[1];
let Q="";if(q=q[1].match(/(.*?);(.*)/))y=q[1],Q=q[2];q=d.getHighlightStyle(d.curWordIndex,y,Q);g=g.replace(n,"$2")}else q=d.getHighlightStyle(d.curWordIndex,"","");n="";0===g.indexOf("@")?(n=g,(y=l.prefConfig.inPageRule&&l.prefConfig.inPageRule[g])&&(g=y)):g=g.replace(/^\\@/,"@");if(y=g.match(/^\/(.*)\/([il]*)($|\$)/)){p=!0;g=y[1];v=-1!=y[2].indexOf("i")?"i":"";var W=-1!=y[2].indexOf("l")}n||=g;d.highlightSpans[n]||(c.push({content:g,showWords:n,isRe:p,link:W,reCase:v,title:h,style:q,oriWord:e,hideParent:w,
inRange:t,popup:k,showTips:m,init:b}),d.curWordIndex++)}})}else this.curWordIndex=0,a=(this.lockWords||"").replace(/^\$o/,"")+a,c=[{content:a,showWords:a,isRe:!1,reCase:"",title:"",style:d.getHighlightStyle(d.curWordIndex,"",""),init:b}];return c}submitInPageWords(a){let b=this.searchJumperInPageInput.value,d=[];if(!b){if(this.lockWords){this.highlight("insert");for(let c in this.highlightSpans)this.setHighlightSpan(this.highlightSpans[c],0,this.marks[c])}else this.highlight("");return d}(this.initHighlight=
!!a)&&setTimeout(()=>{this.initHighlight=!1},500);this.lockWords||(0===b.indexOf("$c")&&2<b.length?this.splitSep=b.substr(2,1):0===b.indexOf("$o")?this.splitSep=null:this.splitSep="\u25ce",this.curWordIndex=0);this.searchJumperInPageInput.value="";a=this.anylizeInPageWords(b,this.initHighlight);if(!a||0==a.length)return d;this.lockWords=this.lockWords?this.lockWords+((this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+b):b;this.splitSep||(this.searchInPageLockWords.innerHTML=
ba(),this.highlight(""));this.highlight(a);a.forEach(c=>{if(c){var f=document.createElement("span");f.innerHTML=ba(c.showWords);f.title=c.title?JSON.parse('"'+c.title+'"'):c.showWords;var g=c.style.match(/background: *(#?\w+)/);g&&-1===g[1].indexOf("unset")&&(f.style.background=g[1]);if(g=c.style.match(/color: *(#?\w+)/))f.style.color=g[1];f.addEventListener("click",h=>{h.stopPropagation();h.preventDefault();return!1});f.oncontextmenu=h=>{h.preventDefault()};f.addEventListener("dblclick",h=>{h.stopPropagation();
h.preventDefault();"EM"!==h.target.nodeName.toUpperCase()&&(h.ctrlKey||h.shiftKey||h.altKey||h.metaKey||-1!==this.lockWords.indexOf(c.oriWord)&&this.showModifyWindow(c,f))},!0);f.addEventListener("mousedown",h=>{0===h.button?this.focusHighlightByText(c.showWords,!0,f):2===h.button&&this.focusHighlightByText(c.showWords,!1,f)});var e=!1;f.addEventListener(Fb(),h=>{h.preventDefault();h.stopPropagation();if(!e){e=!0;setTimeout(()=>{e=!1},100);if("wheel"!==h.type){let k=0;if("number"==typeof h.axis)2==
h.axis&&(k=h.detail);else if("undefined"==typeof h.wheelDeltaY||0!=h.wheelDeltaY)k=-h.wheelDelta/40;h=k}else h=h.deltaY;this.focusHighlightByText(c.showWords,0<h,f)}},{passive:!1,capture:!1});f.addEventListener("editword",h=>{f.parentNode.removeChild(f);this.removeHighlightWord(c);this.searchJumperInPageInput.value=c.content});g=document.createElement("div");g.addEventListener("mousedown",h=>{h.stopPropagation();h.preventDefault();f.parentNode.removeChild(f);this.removeHighlightWord(c)});g.className=
"lockWordTool";g.innerHTML=ba(`<span title="${C("removeBtn")}">\u00d7</span>`);f.appendChild(g);g=document.createElement("div");g.addEventListener("mousedown",h=>{h.stopPropagation();h.preventDefault();-1!==this.lockWords.indexOf(c.oriWord)&&this.showModifyWindow(c,f)});g.className="lockWordTool modifyBtn";g.innerHTML=ba("<span>+</span>");f.appendChild(g);this.setHighlightSpan(f,-1,this.marks[c.showWords]);this.highlightSpans[c.showWords]=f;this.searchInPageLockWords.appendChild(f);d.push(f)}});0>=
this.searchInPageLockWords.scrollTop&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight);this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px";this.navMarks.innerHTML&&"none"===this.con.style.display&&(this.con.style.display="");return d}async showCustomInputWindow(a,b){return new Promise(d=>{this.customInputCallback=b;let c=()=>{let v=this.finalSearch.dataset.url;[].forEach.call(this.customGroup.children,q=>{let n=q.value;if("select"==
q.className)n=q.children[0].value;else if(/^DIV$/i.test(q.nodeName))return;v=v.replace("\u25ce",n||"")});this.finalSearch.value=v};if(!this.customInputFrame){var f=Ja('\n                         .customInputFrame-body {\n                             width: 300px;\n                             min-height: 200px;\n                             position: fixed;\n                             text-align: left;\n                             left: 50%;\n                             top: 50%;\n                             margin-top: -160px;\n                             margin-left: -150px;\n                             z-index: 2147483647;\n                             background-color: #ffffff;\n                             border: 1px solid #afb3b6;\n                             border-radius: 10px;\n                             opacity: 0.95;\n                             filter: alpha(opacity=95);\n                             box-shadow: 5px 5px 20px 0px #000;\n                             color: #6e7070;\n                             font-size: initial;\n                         }\n                         .customInputFrame-body #customGroup {\n                             max-height: 50vh;\n                             overflow: auto;\n                             scrollbar-width: none;\n                         }\n                         .customInputFrame-body #customGroup::-webkit-scrollbar {\n                             width: 0 !important;\n                             height: 0 !important;\n                         }\n                         .customInputFrame-title {\n                             background: #458bd1!important;\n                             display: flex!important;\n                             align-items: center!important;\n                             justify-content: center!important;\n                             color: white!important;\n                             font-weight: bold;\n                             font-size: 18px!important;\n                             border-radius: 10px 10px 0 0!important;\n                         }\n                         .customInputFrame-title>img {\n                             margin: 5px;\n                             height: 32px;\n                             width: 32px;\n                         }\n                         .customInputFrame-input-title {\n                             font-size: 9pt;\n                             font-family: Arial, sans-serif;\n                             display: inline-block;\n                             background-color: white;\n                             position: relative;\n                             left: 20px;\n                             padding: 0px 4px;\n                             text-align: left;\n                             color: #646464;\n                             word-break: break-all;\n                             max-width: 85%;\n                             z-index: 1;\n                         }\n                         .customInputFrame-body input[type=text],\n                         .customInputFrame-body input[type=number],\n                         .customInputFrame-body textarea,\n                         .customInputFrame-body .select {\n                             resize: both;\n                             font-size: 11pt;\n                             font-weight: normal;\n                             border-radius: 4px;\n                             border: 1px solid rgba(0, 0, 0, 0.23);\n                             margin: 4px;\n                             font-family: inherit;\n                             background-color: #FFF;\n                             width: calc(100% - 8px);\n                             color: #4A4A4A;\n                             margin-top: -8px;\n                             padding: 4px;\n                             padding-top: 8px;\n                             box-sizing: border-box;\n                         }\n                         .customInputFrame-buttons {\n                             text-align: center;\n                             margin-bottom: 5px;\n                             display: flex;\n                             justify-content: space-evenly;\n                         }\n                         .customInputFrame-buttons>button {\n                             width: 32%;\n                             font-size: 16px;\n                             cursor: pointer;\n                             border: 1px solid #1976d2;\n                             border-radius: 4px;\n                             transition: all .3s;\n                             color: #fff;\n                             background-color: #458bd1;\n                             line-height: 25px;\n                         }\n                         .customInputFrame-buttons>button:hover {\n                             color: #e3f2fd;\n                         }\n                         .customInputFrame-body .select {\n                             height: 30px;\n                             position: relative;\n                         }\n                         .customInputFrame-body .select>input[type=text] {\n                             top: 0px;\n                             left: -7px;\n                             position: relative;\n                             border: unset!important;\n                             width: calc(100% - 25px);\n                             padding-bottom: 3px;\n                             margin-bottom: -30px;\n                             float: left;\n                             background: unset;\n                             height: 28px;\n                         }\n                         .customInputFrame-body .select>p {\n                             padding: 0;\n                             margin: 0;\n                             position: absolute;\n                             pointer-events: none;\n                         }\n                         .customInputFrame-body .select>.options {\n                             position: absolute;\n                             visibility: hidden;\n                             opacity: 0;\n                             transition: opacity .1s;\n                             background-color: #FFF;\n                             color: #4A4A4A;\n                             border: 1px solid rgba(0, 0, 0, 0.23);\n                             border-radius: 4px;\n                             z-index: 10;\n                             width: auto;\n                             max-width: 35%;\n                             right: calc(50% - 147px);\n                             margin-top: -10px;\n                             position: fixed;\n                         }\n                         .customInputFrame-body .select>input:focus+p {\n                             display: none;\n                         }\n                         .customInputFrame-body .select:hover>.options {\n                             visibility: visible;\n                             opacity: 1;\n                         }\n                         .customInputFrame-body .select>.options>p {\n                             cursor: pointer;\n                             min-height: 20px;\n                             padding: 3px 0;\n                             margin: 0;\n                         }\n                         .customInputFrame-body .select>.options>p:hover {\n                             background: aliceblue;\n                         }\n                         .customInputFrame-body div.select:after {\n                             content: "\u25bc";\n                             position: absolute;\n                             right: 6px;\n                             top: 8px;\n                             font-size: 9px;\n                         }\n                         @media (prefers-color-scheme: dark) {\n                           .customInputFrame-body,\n                           .customInputFrame-input-title,\n                           .customInputFrame-body input,\n                           .customInputFrame-body textarea,\n                           .customInputFrame-body .select {\n                             background-color: black!important;\n                             color: #d5d5d5!important;\n                           }\n                           .customInputFrame-body input:focus,\n                           .customInputFrame-body textarea:focus,\n                           .customInputFrame-body .select:focus {\n                             background-color: #1e1e1e!important;\n                           }\n                           .customInputFrame-body input,\n                           .customInputFrame-body textarea,\n                           .customInputFrame-body .select {\n                             border: 1px solid rgb(255 255 255 / 36%)!important;\n                             background-color: #0c0c0c!important;\n                           }\n                           .customInputFrame-title,\n                           .customInputFrame-buttons>button {\n                             background: #245d8f!important;\n                           }\n                           .customInputFrame-body .select>.options {\n                             border: 1px solid rgb(255 255 255 / 36%)!important;\n                             background-color: black;\n                             color: #d5d5d5;\n                           }\n                           .customInputFrame-body .select>.options>p:hover {\n                             background: #1e1e1e;\n                           }\n                         }\n                        ');
let v=document.createElement("div");this.customInputFrame=v;v.innerHTML=ba(`
                         <div class="customInputFrame-body">
                             <a href="${Oa}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg=="}" />${C("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${C("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${C("cancel")}</button>
                                 <button id="customSubmit" type="button">${C("customSubmit")}</button>
                             </div>
                         </div>
                        `);Xa||v.appendChild(f);v.querySelector("#cancel").addEventListener("click",m=>{v.parentNode&&v.parentNode.removeChild(v);d("")});v.addEventListener("keydown",m=>{13==m.keyCode&&n.click()});this.customGroup=this.customInputFrame.querySelector("#customGroup");let q=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=q;q.addEventListener("click",m=>{c()});let n=v.querySelector("#customSubmit");n.addEventListener("click",m=>{c();q.value&&this.customInputCallback&&
this.customInputCallback(q.value);d(q.value);v.parentNode&&v.parentNode.removeChild(v)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame);this.customGroup.innerHTML=ba();f=a;let g=f.match(/%input{(.*?[^\\])}/);for(;g;){var e=g[1];e=/^".*","/.test(e)?e.substr(1,e.length-2).split('","'):e.replace(/\\,/g,"\u25ceSJ").split(",").map(v=>v.replace(/\u25ceSJ/g,","));if(1===e.length){e=e[0].replace(/\\\|/g,"\u25ceSJ").split("|").map(v=>v.replace(/\u25ceSJ/g,
"|"));var h=document.createElement("div");h.className="customInputFrame-input-title";h.innerText=e[0];this.customGroup.appendChild(h);h=document.createElement("input");h.type="text";1<e.length&&(h.title=e[1]);this.customGroup.appendChild(h)}else if(2<=e.length){h=e[0].replace(/\\}/g,"}");h=/^'.*'\/'/.test(h)?h.substr(1,h.length-2).split("'/'"):h.replace(/\\\//g,"\u25ceSJ").split("/").map(t=>t.replace(/\u25ceSJ/g,"/"));e=e.slice(1).join(",");e=/^'.*'\/'/.test(e)?e.substr(1,e.length-2).split("'/'"):
e.replace(/\\\//g,"\u25ceSJ").split("/").map(t=>t.replace(/\u25ceSJ/g,"/"));let v=h.length===e.length+1;var k=document.createElement("div");k.className="customInputFrame-input-title";k.innerText=h[0];this.customGroup.appendChild(k);let q=document.createElement("input");q.type="text";let n=document.createElement("div");n.className="select";n.appendChild(q);let m=document.createElement("p");m.innerText="Select option";n.appendChild(m);let w=document.createElement("div");w.className="options";n.appendChild(w);
k=document.createElement("p");k.setAttribute("value","");k.innerHTML=ba("<b>Select option</b>");w.appendChild(k);k.addEventListener("click",t=>{w.style.visibility="hidden";setTimeout(()=>{w.style.visibility=""},0);q.value="";m.innerText="Select option";c()});for(k=0;k<e.length;k++){var p=e[k];let t=document.createElement("p");t.setAttribute("value",p);v?(p=h[k+1],p=p.replace(/\\\|/g,"\u25ceSJ").split("|").map(y=>y.replace(/\u25ceSJ/g,"|")),t.innerText=p[0],1<p.length&&(t.title=p[1])):t.innerText=
p;t.addEventListener("click",y=>{w.style.visibility="hidden";setTimeout(()=>{w.style.visibility=""},0);q.value=t.getAttribute("value");m.innerText="";c()});w.appendChild(t)}q.addEventListener("change",t=>{m.innerText=""});n.addEventListener("mouseenter",t=>{n.focus();w.style.marginTop=-this.customGroup.scrollTop+20+"px"});this.customGroup.appendChild(n)}f=f.replace(g[0],"\u25ce");g=f.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=f;this.finalSearch.value=f.replace(/\u25ce/g,"");this.addToShadow(this.customInputFrame);
f=this.customInputFrame.children[0];f.style.marginTop=-f.offsetHeight/2+"px"})}showModifyWindow(a,b){this.modifyWord={};this.addNew=!a&&!b;if(!this.addNew){var d=a.oriWord;if(!d)return;this.modifyWord=a;this.modifySpan=b}if(!this.modifyFrame){b=Ja("\n                    .searchJumperModify-body {\n                        width: 300px;\n                        min-height: 200px;\n                        position: fixed;\n                        text-align: left;\n                        left: 50%;\n                        top: 50%;\n                        margin-top: -160px;\n                        margin-left: -150px;\n                        z-index: 100000;\n                        background-color: #ffffff;\n                        border: 1px solid #afb3b6;\n                        border-radius: 10px;\n                        opacity: 0.95;\n                        filter: alpha(opacity=95);\n                        box-shadow: 5px 5px 20px 0px #000;\n                        color: #6e7070;\n                    }\n                    .searchJumperModify-title {\n                        background: #458bd1!important;\n                        display: flex!important;\n                        align-items: center!important;\n                        justify-content: center!important;\n                        color: white!important;\n                        font-weight: bold;\n                        font-size: 18px!important;\n                        border-radius: 10px 10px 0 0!important;\n                    }\n                    .searchJumperModify-title>img {\n                        margin: 5px;\n                        height: 32px;\n                        width: 32px;\n                    }\n                    .searchJumperModify-input-title {\n                        font-size: 9pt;\n                        font-family: Arial, sans-serif;\n                        display: inline-block;\n                        background-color: white;\n                        position: relative;\n                        left: 20px;\n                        padding: 0px 4px;\n                        text-align: left;\n                        color: #646464;\n                    }\n                    .searchJumperModify-body>input[type=text],\n                    .searchJumperModify-body>input[type=number],\n                    .searchJumperModify-body>textarea {\n                        resize: both;\n                        font-size: 11pt;\n                        font-weight: normal;\n                        border-radius: 4px;\n                        border: 1px solid rgba(0, 0, 0, 0.23);\n                        margin: 4px;\n                        font-family: inherit;\n                        background-color: #FFF;\n                        width: calc(100% - 8px);\n                        color: #4A4A4A;\n                        margin-top: -8px;\n                        padding: 4px;\n                        padding-top: 8px;\n                        box-sizing: border-box;\n                    }\n                    .searchJumperModify-buttons {\n                        text-align: center;\n                        margin-bottom: 5px;\n                        display: flex;\n                        justify-content: space-evenly;\n                    }\n                    .searchJumperModify-buttons>button {\n                        width: 32%;\n                        font-size: 16px;\n                        cursor: pointer;\n                        border: 1px solid #1976d2;\n                        border-radius: 4px;\n                        transition: all .3s;\n                        color: #fff;\n                        background-color: #458bd1;\n                        line-height: 25px;\n                    }\n                    .searchJumperModify-buttons>button:hover {\n                        color: #e3f2fd;\n                    }\n                    #rangePickerBtn {\n                        width: 28px;\n                        float: right;\n                        margin-top: -33px;\n                        margin-right: 6px;\n                        position: sticky;\n                        display: block;\n                        cursor: pointer;\n                        background: rgb(255 255 255 / 80%);\n                    }\n                    .searchJumperModify-checkGroup {\n                        margin: 5px;\n                    }\n                    #searchJumperModify-re + label ~ * {\n                        display: none;\n                    }\n                    #searchJumperModify-re:checked + label ~ * {\n                        display: inline;\n                    }\n                    @media (prefers-color-scheme: dark) {\n                      .searchJumperModify-body,\n                      .searchJumperModify-input-title,\n                      .searchJumperModify-body>input[type=text],\n                      .searchJumperModify-body>input[type=number],\n                      .searchJumperModify-body>textarea,\n                      .searchJumperModify-body>select {\n                        background-color: black!important;\n                        color: #d5d5d5!important;\n                      }\n                      .searchJumperModify-body>input:focus,\n                      .searchJumperModify-body>textarea:focus,\n                      .searchJumperModify-body>select:focus {\n                        background-color: #1e1e1e!important;\n                      }\n                      .searchJumperModify-body>input[type=text],\n                      .searchJumperModify-body>input[type=number],\n                      .searchJumperModify-body>textarea {\n                        border: 1px solid rgb(255 255 255 / 36%)!important;\n                      }\n                      .searchJumperModify-title,\n                      .searchJumperModify-buttons>button {\n                        background: #245d8f!important;\n                      }\n                      #rangePickerBtn {\n                        background: rgb(0 0 0 / 80%);\n                        fill: white;\n                      }\n                    }\n                    ");
let q=document.createElement("div");this.modifyFrame=q;q.id="searchJumperModifyWord";q.innerHTML=ba(`
                     <div class="searchJumperModify-body">
                         <a href="${Oa}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg=="}" />${C("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${C("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${C("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${C("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${C("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${C("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${C("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${C("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${C("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${C("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${C("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${C("cancel")}</button>
                             <button id="modify" type="button">${C("modify")}</button>
                         </div>
                     </div>
                    `);Xa||q.appendChild(b);q.querySelector("#cancel").addEventListener("click",n=>{q.parentNode&&q.parentNode.removeChild(q)});q.querySelector("#rangePickerBtn").addEventListener("click",n=>{Ca.getSelector(m=>{e.value=m;q.style.display=""});q.style.display="none"});this.modifyBtn=b=q.querySelector("#modify");b.addEventListener("click",n=>{n=c.value;this.splitSep&&(n=n.replaceAll(this.splitSep,""));if(n){var m=n!==this.modifyWord.showWords||p.checked!==this.modifyWord.isRe||v.checked!==
this.modifyWord.link;k.checked&&0!==n.indexOf("@")&&(n=`/${n}/${p.checked?"i":""}${v.checked?"l":""}`);var w=h.value;w&&(this.splitSep&&(w=w.replaceAll(this.splitSep,"")),n+=`$p{${0<=w?w:0}}`);if(w=f.value)this.splitSep&&(w=w.replaceAll(this.splitSep,"")),n+=`$s{${w}}`;if(w=JSON.stringify(g.value).replace(/^"|"$/g,""))this.splitSep&&(w=w.replaceAll(this.splitSep,"")),n+=`$t{${w}}`;if(w=e.value)this.splitSep&&(w=w.replaceAll(this.splitSep,"")),w!==this.modifyWord.inRange&&(m=!0),n+=`$in{${w}}`;this.addNew?
(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=n,this.submitInPageWords()):this.replaceWord(this.modifyWord,n,this.modifySpan,m);q.parentNode&&q.parentNode.removeChild(q)}})}let c=this.modifyFrame.querySelector("[name='wordContent']"),f=this.modifyFrame.querySelector("[name='wordStyle']"),g=this.modifyFrame.querySelector("[name='wordTitle']"),e=this.modifyFrame.querySelector("[name='wordRange']"),
h=this.modifyFrame.querySelector("[name='wordHide']"),k=this.modifyFrame.querySelector("#searchJumperModify-re"),p=this.modifyFrame.querySelector("#searchJumperModify-case"),v=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)c.value="",f.value="",e.value="",h.value="",g.value="",k.checked=!1,p.checked=!1,v.checked=!1,this.modifyBtn.innerText=C("add");else{this.modifyBtn.innerText=C("modify");b="";(d=d.match(/\$s{(.*?)}($|\$)/))&&(b=d[1]);c.value=a.showWords||"";f.value=b||
"";e.value=a.inRange||"";k.checked=!!a.isRe;p.checked=!!a.reCase;v.checked=!!a.link;"undefined"!==typeof a.hideParent&&(h.value=a.hideParent);try{a.popup?(g.value="@popup",a.showTips&&(g.value=`@popup(${a.showTips})`)):g.value=a.title!==a.showWords?JSON.parse('"'+a.title+'"'):""}catch(q){oa(q)}}this.addToShadow(this.modifyFrame)}replaceWord(a,b,d,c){if(c)d.parentNode&&d.parentNode.removeChild(d),this.removeHighlightWord(a),this.searchJumperInPageInput.value=b,this.submitInPageWords();else{let f="",
g="",e=-1;if(c=b.match(/\$t{(.*?)}($|\$)/))f=c[1],f=JSON.parse('"'+f+'"');a.title=f;d.title=f;if(c=b.match(/\$s{(.*?)}($|\$)/)){let k=c[1],p="";if(c=c[1].match(/(.*?);(.*)/))k=c[1],p=c[2];g=this.getHighlightStyle(this.curWordIndex,k,p);a.style=g;d.style=g}let h=!1;(d=b.match(/\$p{(.*?)}($|\$)/))?(e=parseInt(d[1])||0,h=e!=a.hideParent):h="undefined"!==typeof a.hideParent;h&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),k=>{k.dataset.content===a.showWords&&(k.classList.remove("searchJumper-hide"),
k.style.display="",k.removeAttribute("data-content"))});this.marks[a.showWords].forEach(k=>{if(k&&(k.title=f,g&&(k.style=g),h&&-1!=e)){let p=e;for(k=k.parentElement;0<p--&&k;)k=k.parentElement;k&&(k.dataset.content=a.showWords,k.classList.add("searchJumper-hide"),k.innerHTML=ba(""))}});-1==e?delete a.hideParent:a.hideParent=e;this.lockWords=this.lockWords.replace(a.oriWord,b);a.oriWord=b}}removeHighlightWord(a){if(this.lockWords&&(this.splitSep||this.emptyInPageWords(),a.oriWord&&-1!==this.lockWords.indexOf(a.oriWord))){var b=
this.lockWords.match(/^\$(c.|o)/),d=0;b=b?b[0]:"";var c=this.lockWords.replace(b,"").split(this.splitSep);var f=c.indexOf(a.oriWord);if(this.wordModeBtn.classList.contains("checked")){-1!=f&&(c.splice(f,1),d=1);for(let g=0;g<c.length;g++){let e=c[g].split(/[ ]/);f=e.indexOf(a.oriWord);if(-1!=f)if(d++,1==d)e.splice(f,1),c[g]=e.join(" ");else break}}else{if(0>f)return;c.splice(f,1);d=-1!=c.indexOf(a.oriWord)?2:1}this.lockWords=b+c.join(this.splitSep);delete this.highlightSpans[a.showWords];f=this.curHighlightWords.indexOf(a);
0>f||(this.curHighlightWords.splice(f,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",1<d||(this.marks[a.showWords].forEach(g=>{if(g.parentNode)if(g.dataset.block)g.parentNode&&g.parentNode.removeChild(g);else if(/^MARK$/i.test(g.nodeName)){let e=document.createTextNode(g.firstChild.data);g.parentNode.replaceChild(e,g);e.parentNode.normalize()}else g.classList.remove("searchJumper"),g.style.cssText=g.dataset.css||"",delete g.dataset.css}),delete this.marks[a.showWords],
b=[].slice.call(this.navMarks.children),[].forEach.call(b,g=>{g.dataset.content==a.showWords&&g.parentNode.removeChild(g)})))}}emptyInPageWords(){this.searchInPageLockWords.innerHTML=ba();this.highlight("")}focusHighlightByText(a,b,d){let c=this.marks[a];if(c&&0!==c.length){a!=this.focusText?(this.focusIndex=0,this.focusText=a):this.focusIndex=b?this.focusIndex!=c.length-1?this.focusIndex+1:0:0!=this.focusIndex?this.focusIndex-1:c.length-1;a=this.focusIndex;a>=c.length&&(a=0);if(b)for(;(!c[a].offsetParent||
c[a].dataset.type)&&(a=a!=c.length-1?a+1:0,a!=this.focusIndex););else for(;(!c[a].offsetParent||c[a].dataset.type)&&(a=0!=a?a-1:c.length-1,a!=this.focusIndex););this.focusIndex=a;this.focusHighlight(c[this.focusIndex]);this.setHighlightSpan(d,this.focusIndex,c)}}getRect(a){var b=a.getBoundingClientRect();b={left:b.left,top:b.top,width:b.width,height:b.height};for(var d=(a=a.ownerDocument&&a.ownerDocument.defaultView)&&a.frameElement;d;)d=d.getBoundingClientRect(),b.left+=d.left,b.top+=d.top,a=a.parent,
d=a.frameElement;return b}focusHighlight(a){if(a){this.focusMark&&this.focusMark.removeAttribute("data-current");this.focusMark=a;this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH");this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));var b=this.getRect(a);this.wPosBar.style.top=b.top+document.documentElement.scrollTop+
R(document).scrollTop+"px";this.wPosBar.style.height=b.height+"px";this.hPosBar.style.left=b.left+"px";this.hPosBar.style.width=b.width+"px";this.wPosBar.style.animationName="";this.hPosBar.style.animationName="";var d=this;setTimeout(async()=>{function c(){if(d.focusMark==a){var g=d.getRect(a);d.wPosBar.style.top=g.top+document.documentElement.scrollTop+R(document).scrollTop+"px";d.hPosBar.style.left=g.left+"px";if(!(g.top>f/3&&g.top<f/3*2)){if(5==++d.fixTimes)a.scrollIntoView({behavior:"smooth",
block:"center",inline:"nearest"});else if(10<d.fixTimes){a.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});d.wPosBar.style.animationName="";d.hPosBar.style.animationName="";return}setTimeout(()=>{c()},200)}}}a.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});a.dataset.current=!0;d.wPosBar.style.animationName="fadeit";d.hPosBar.style.animationName="fadeit";d.fixTimes=0;let f=window.innerHeight||document.documentElement.clientHeight;c()},0)}}getHighlightSpanByText(a){return this.highlightSpans[a]}setHighlightSpan(a,
b,d){if(a){var c=a.querySelector("em");c||(c=document.createElement("em"),a.insertBefore(c,a.firstChild));b++;var f=0;d&&d.length&&(f=0,d.forEach(g=>{g.dataset.type||f++}));c.innerHTML=ba("["+b+"/"+f+"]")}}getHighlightStyle(a,b,d){function c(){let g,e,h;g=Math.floor(256*Math.random());e=Math.floor(256*Math.random());h=Math.floor(256*Math.random());g=g.toString(16);1===g.length&&(g="0"+g);e=e.toString(16);1===e.length&&(e="0"+e);h=h.toString(16);1===h.length&&(h="0"+h);return"#"+g+e+h}function f(g){if(0!==
g.indexOf("#"))return"";if("#ffff00"===g)return"black";g=g.substr(1);let e,h;e=parseInt(g.substr(0,2),16);h=parseInt(g.substr(2,2),16);g=parseInt(g.substr(4,2),16);let k=.299*e+.587*h+.114*g;e=255-e;h=255-h;g=255-g;if(128>=Math.abs(.299*e+.587*h+.114*g-k))return 158<k?"#000000":"#FFFFFF";e=e.toString(16);1===e.length&&(e="0"+e);h=h.toString(16);1===h.length&&(h="0"+h);g=g.toString(16);1===g.length&&(g="0"+g);return"#"+e+h+g}if(!b&&!d){let g=l.prefConfig.inPageWordsStyles[a];if(g)return g}d=d||"";
b||=l.prefConfig.firstFiveWordsColor[a];if(!b)switch(a){case 0:b="#ffff00";break;case 1:b="#e91e63";break;case 2:b="#00bcd4";break;case 3:b="#008000";break;case 4:b="#800080";break;default:b=c()}b&&((a=f(b))&&(a="color:"+a+"!important;"),b=`background:${b}!important;${a}`);return`${b}${d}`}createNavMark(a,b,d,c,f){let g=this,e=document.createElement("span"),h=nd(a,g.targetIframe);e.title=b.title||b.showWords;e.dataset.top=h;e.dataset.content=b.showWords;e.style.top=h/f*100+"%";e.style.background=
a.style.background||"yellow";e.addEventListener("click",k=>{k.stopPropagation();k.preventDefault();g.focusIndex=d;g.focusHighlight(a);g.setHighlightSpan(g.getHighlightSpanByText(b.showWords),d,c);g.navPointer.style.display="";g.navPointer.style.top=e.offsetTop+33+"px";return!1},!0);g.navMarks.appendChild(e)}anylizeDomWithTextPos(a,b){b||={text:"",data:{}};if(!a||!a.childNodes||!a.childNodes.length||1==a.nodeType&&!a.offsetParent&&!a.offsetHeight)return b;a.childNodes.forEach(d=>{if(d.classList&&d.classList.contains("searchJumper")||
/^(img|svg|picture|br|hr|textarea)$/i.test(d.nodeName)){var c=b.text.length;b.text+="\n";b.data[c]={node:d,text:"\n"}}else d.offsetParent||d.offsetHeight?/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(d.nodeName)?(c=b.text.length,b.text+="\n",b.data[c]={node:{},text:"\n"},b=this.anylizeDomWithTextPos(d,b),c=b.text.length,b.text+="\n",b.data[c]={node:{},text:"\n"}):b=this.anylizeDomWithTextPos(d,b):3===d.nodeType&&(c=1==d.parentNode.nodeType&&1==d.parentNode.childNodes.length?
d.parentNode.innerText||d.data:d.data)&&c.trim()&&(b.text+=c,b.data[b.text.length-1]={node:d,text:c})});return b}highlightPopup(a,b){let d=this,c,f=g=>{c&&d.clingPos(a,d.tips)};a.addEventListener("mouseenter",g=>{a.addEventListener("mousemove",f);if(D!=a||!d.funcKeyCall){c=null;D=a;if(b.showTips)if(/^\d+$/.test(b.showTips)){let e=d.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),h=parseInt(b.showTips)-1;c=e[h]}else c=d.getTargetSitesByName([b.showTips])[0];
d.setFuncKeyCall(!0);c?(d.bar.style.setProperty("display","none","important"),c.dispatchEvent(new CustomEvent("showTips"))):d.showInPage(!0,g)}});a.addEventListener("mouseleave",g=>{a.removeEventListener("mousemove",f)})}createHighlightMark(a,b,d){let c=this,f=document.createElement("mark");f.className="searchJumper";a.title&&(f.title=JSON.parse('"'+a.title+'"'));a.popup&&this.highlightPopup(f,a);f.style.cssText=a.style;f.addEventListener("click",g=>{if(g.altKey)return g.stopPropagation(),g.preventDefault(),
!1});f.dataset.content=a.showWords;f.addEventListener("mousedown",g=>{if(g.altKey){for(var e,h=b;(!e||e.dataset.type)&&(0===g.button?h!=d.length-1?(h++,c.focusIndex=h):c.focusIndex=0:2===g.button&&(0!=h?(h--,c.focusIndex=h):c.focusIndex=d.length-1),e=d[c.focusIndex],h!=b););c.focusHighlight(e);c.setHighlightSpan(c.getHighlightSpanByText(a.showWords),c.focusIndex,d);c.focusText=a.showWords}});return f}createAddonSpan(a,b){let d="addon_"+this.addonsList.children.length,c=this,f=document.createElement("div"),
g=document.createElement("input");g.type="checkbox";g.id=d;g.checked=!b.disable;g.addEventListener("change",h=>{l.prefConfig.disableAddon[a]=!g.checked;b.disable=!g.checked;g.checked&&c.findInpageAddons.forEach(k=>{k!=b&&k.sort==b.sort&&(k.disable=!0,k=k.name||"addon"+d++,c.addonCheckboxDict[k].checked=!1,l.prefConfig.disableAddon[k]=!0)});O.setItem("searchData",l);c.lockWords&&c.refreshPageWords(c.lockWords)});f.appendChild(g);f.title=b.title||"";let e=document.createElement("label");e.setAttribute("for",
d);e.innerText=a;f.appendChild(e);this.addonCheckboxDict[a]=g;this.addonsList.appendChild(f)}findAccentedWord(a,b,d){const c=b.length;let f=0,g=-1;for(let e=0;e<a.length;e++){const h=d[e];if(""!==h)if(h===b[f]){if(0===f&&(g=e),f++,f===c)return{pos:g,len:e-g+1}}else f=0,g=-1,h===b[0]&&(g=e,f=1)}g=a.indexOf(b);return{len:b.length,pos:g}}findPosInStr(a,b,d,c,f){if(!a)return{len:0,pos:-1};let g=0,e=-1,h=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){var k=this.findInpageAddons[p];
if(k&&k.run&&!k.disable&&(h=!0,(k=k.run(a,b))&&k.matched)){g=k.len;e=k.pos;break}}return-1!=e||h?{len:g,pos:e}:this.findAccentedWord(d,c,f)}highlight(a,b,d,c){function f(n,m,w){let t,y=-1,W,Q;if(1==n.nodeType&&n.className&&n.className.indexOf&&-1!=n.className.indexOf("searchJumper"))return 0;if(w&&(1==n.nodeType||11==n.nodeType)){let S=k.anylizeDomWithTextPos(n),H=S.text,J=H.toUpperCase(),X=[];for(w=0;w<J.length;w++){var B=J[w].normalize("NFD").replace(/[\u0300-\u036f]/g,"");X.push(B)}let V=m.content.toUpperCase(),
ea=0,r=[],G=(m.init||g)&&/^[a-z]+$/i.test(m.content);function z(){y=-1;if(m.isRe){var x=H.match(new RegExp(m.content,m.reCase));x&&(t=x[0].length,y=x.index)}else x=k.findPosInStr(H,m.content,J,V,X),t=x.len,y=x.pos;if(-1<y){var K=H.slice(y,y+t);H=H.slice(y+t);J=J.slice(y+t);X=X.slice(y+t);y+=ea;ea=y+t;x=y;var M=t;let ca=Object.keys(S.data),ia="",ra="",I="";for(let fa=0;fa<ca.length;fa++){var N=parseInt(ca[fa]);let u=S.data[N];if(x>N)continue;N=x-(N-u.text.length)-1;let L="full";0>N?L=u.text.length<
M?"middle":"end":u.text.length-N<M&&(L="start");"full"===L&&(K="");if(G&&("full"==L?(ia=0==N?"\n":u.text[N-1],ra=N+M==u.text.length?"\n":u.text[N+M],"\n"!==ra&&(I=N+M+1==u.text.length?"\n":u.text[N+M+1])):"start"!=L||ia?"end"!=L&&"full"!=L||ra||(ra=N+M==u.text.length?"\n":u.text[N+M],"\n"!==ra&&(I=N+M+1==u.text.length?"\n":u.text[N+M+1])):ia=0==N?"\n":u.text[N-1],ia&&ra&&(/[a-z]/i.test(ia)||/[a-rt-z]/i.test(ra)||"s"==ra.toLowerCase()&&/[a-z]/i.test(I))))break;0>N&&(N=0);let T=Math.min(M,u.text.length-
N);M-=T;if(!u.text.trim()){"start"===L&&(x+=u.text.length);continue}let ha;for(let U=0;U<r.length;U++)if(r[U].node==u.node){ha=r[U];break}ha?ha.match.push({pos:N,len:T,type:L,matched:K}):r.push({node:u.node,text:u.text,match:[{pos:N,len:T,type:L,matched:K}]});if(0>=M)break}z()}}z();r.length&&r.forEach(x=>{if("undefined"!==typeof m.hideParent){var K=m.hideParent;for(x=x.node.parentElement;0<K--&&x;)x=x.parentElement;x&&x.classList&&!x.classList.contains("searchJumper-hide")&&(x.innerHTML=ba(""),x.dataset.content=
m.showWords,x.classList.add("searchJumper-hide"))}else{let M=k.marks[m.showWords],N=M.length,ca,ia;K="";1==x.node.parentNode.nodeType&&(K=getComputedStyle(x.node.parentNode).display);-1!=K.indexOf("flex")||-1!=K.indexOf("grid")||-1!=K.indexOf("layer")?(ia=document.createElement("span"),ia.style.all="unset"):ia=document.createDocumentFragment();let ra=document.createTextNode(x.text);ia.appendChild(ra);let I=[];x.match.reverse().forEach(fa=>{ca=k.createHighlightMark(m,N,M);switch(fa.type){case "start":ca.style.borderTopRightRadius=
0;ca.style.borderBottomRightRadius=0;break;case "middle":ca.style.borderRadius=0;break;case "end":ca.style.borderTopLeftRadius=0,ca.style.borderBottomLeftRadius=0}W=ra.splitText(fa.pos);"start"!=fa.type&&"middle"!=fa.type&&W.data.length&&W.splitText(fa.len);Q=W.cloneNode(!0);ca.appendChild(Q);"full"!=fa.type&&"start"!=fa.type&&(ca.dataset.type=fa.type);fa.matched&&(ca.dataset.matched=fa.matched);ia.replaceChild(ca,W);I.unshift(ca)});x.node.parentNode.replaceChild(ia,x.node);k.marks[m.showWords].push(...I);
I.forEach(fa=>{fa.dataset.type||q.push([fa,m,N,M,v])})}})}w=!0;if(m.link){if(1==n.nodeType&&n.href&&n.href.match&&(w=!1,n.href.match(new RegExp(m.content,m.reCase))))if("undefined"!==typeof m.hideParent){B=m.hideParent;for(var E=n;0<B--&&E;)E=E.parentElement;if(E)return E.innerHTML=ba(""),E.dataset.content=m.showWords,E.classList.add("searchJumper-hide"),0}else{let S=k.marks[m.showWords],H=S.length;n.classList.add("searchJumper");m.title&&(n.title=JSON.parse('"'+m.title+'"'));m.popup&&k.highlightPopup(n,
m);n.dataset.css||(n.dataset.css=n.style.cssText);m.style&&(n.style.cssText+=m.style);n.addEventListener("click",J=>{if(J.altKey)return J.stopPropagation(),J.preventDefault(),!1});n.dataset.content=m.showWords;n.addEventListener("mousedown",J=>{J.altKey&&(0===J.button?k.focusIndex=H!=S.length-1?H+1:0:2===J.button&&(k.focusIndex=0!=H?H-1:S.length-1),k.focusHighlight(S[k.focusIndex]),k.setHighlightSpan(k.getHighlightSpanByText(m.showWords),k.focusIndex,S),k.focusText=m.showWords)});k.marks[m.showWords].push(n);
q.push([n,m,H,S,v])}}else{let S="";1==n.nodeType&&n.value&&(n.offsetParent||n.offsetHeight)&&!m.init&&/^(button|select|input|textarea)$/i.test(n.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(n.type)&&(S=n.value);if(S){var F=w=!1;B=0;let H=k.fakeTextareas.get(n);if(p&&H)return 0;let J=getComputedStyle(n),X=n.offsetLeft,V=n.offsetTop;E=S.toUpperCase();let ea=[];for(var Z=0;Z<E.length;Z++)F=E[Z].normalize("NFD").replace(/[\u0300-\u036f]/g,""),ea.push(F);for(Z=m.content.toUpperCase();;){if(m.isRe){if(F=
S.match(new RegExp(m.content,m.reCase)))y=F.index,F=F[0]}else F=k.findPosInStr(S,m.content,E,Z,ea),t=F.len,y=F.pos,(m.init||g)&&0<=y&&/^[a-z]+$/i.test(m.content)&&(0!==y&&/[a-z]/i.test(S[y-1])&&(y=-1),y+m.content.length!==S.length&&/[a-z]/i.test(S[y+t])&&(y=-1)),F=0<=y?S.slice(y,y+t):!1;if(F)r(F,B+y),B+=y+F.length,S=S.slice(y+F.length),E=E.slice(y+F.length),ea=ea.slice(y+F.length);else break}function r(G,z){if(G){if(!H){H=document.createElement("pre");H.className="searchJumper";var x=document.createTextNode(S);
H.appendChild(x);x=/^(number|string)$/;let N=[];var K=n.style;for(M in K)if(!/^(content|outline|outlineWidth)$/.test(M)&&(K=J[M],""!==K&&x.test(typeof K))){var M=M.replace(/([A-Z])/g,"-$1").toLowerCase();N.push(M);N.push(":");N.push(K);N.push(";")}N=N.join("");H.style.cssText=N;H.style.position="fixed";H.style.left="0px";H.style.top="0px";H.style.margin="0";n.nodeName&&n.nodeName.toLowerCase&&"textarea"!==n.nodeName.toLowerCase()&&(H.style.display="inline-grid",H.style.lineHeight=H.style.height,"border-box"==
H.style.boxSizing&&(H.style.paddingTop=0));k.fakeTextareas.set(n,H)}document.body.appendChild(H);M=document.createRange();M.setStart(H.firstChild,Math.min(H.firstChild.length,z));M.setEnd(H.firstChild,Math.min(H.firstChild.length,z+1));z=M.getBoundingClientRect();document.body.removeChild(H);if("undefined"!==typeof m.hideParent){G=m.hideParent;for(z=n.parentElement;0<G--&&z;)z=z.parentElement;if(z)return z.innerHTML=ba(""),z.dataset.content=m.showWords,z.classList.add("searchJumper-hide"),0}else{M=
k.marks[m.showWords];x=M.length;let N=document.createElement("mark");N.className="searchJumper";N.dataset.block=!0;m.title&&(N.title=JSON.parse('"'+m.title+'"'));N.style.cssText=m.style;N.dataset.content=m.showWords;N.innerText=G;N.style.padding="0";N.style.position="absolute";N.style.fontSize=H.style.fontSize;N.style.fontFamily=H.style.fontFamily;N.style.lineHeight="1";N.style.pointerEvents="none";n.parentNode.appendChild(N);let ca=z.left+X,ia=z.top+V;N.style.left=ca+"px";N.style.top=ia+"px";k.marks[m.showWords].push(N);
q.push([N,m,x,M,v]);if(n.nodeName&&n.nodeName.toLowerCase&&"textarea"==n.nodeName.toLowerCase()){let ra=I=>{N.parentNode?(N.style.left=ca-n.scrollLeft+"px",N.style.top=ia-n.scrollTop+"px"):(N.parentNode.removeChild(N),n.removeEventListener("scroll",ra))};n.addEventListener("scroll",ra)}}}}}}if(!(!w||d&&n!==b||1!=n.nodeType&&11!=n.nodeType||!n.childNodes||/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(n.nodeName)||m.init&&("true"==n.ariaHidden||"search"==n.role||n.hasAttribute&&0!=n.hasAttribute("jsname"))))if(!h&&
/^(PRE|CODE)$/i.test(n.nodeName))e.push(n);else{for(w=0;w<n.childNodes.length;++w)w+=f(n.childNodes[w],m);try{n.shadowRoot&&(w+=f(n.shadowRoot,m,!0))}catch(S){oa(S)}}return 0}if(a||this.curHighlightWords&&0!==this.curHighlightWords.length)if(b){if([].forEach.call(b.getElementsByTagName("iframe"),n=>{if(n.offsetParent&&!(100>n.offsetHeight||100>n.offsetWidth)){try{var m=n.contentDocument||n.contentWindow.document}catch(w){return}m&&R(m)&&this.highlight(a,R(m),d,n)}}),this.targetIframe=c||!1,"searchJumperModifyWord"!=
b.id){b=b||R(document);var g=this.wordModeBtn.classList.contains("checked"),e=[],h=!1,k=this;if(""===a)this.highlightSpans={},Object.values(this.marks).forEach(async n=>{if(n){var m=new Set;for(let w of n)w.parentNode&&(w.dataset.block?w.parentNode&&w.parentNode.removeChild(w):/^MARK$/i.test(w.nodeName)?(n=document.createTextNode(w.firstChild.data),w.parentNode.replaceChild(n,w),m.add(n.parentNode)):(w.classList.remove("searchJumper"),w.style.cssText=w.dataset.css||"",delete w.dataset.css));m.forEach(w=>
{w.normalize()})}}),[].forEach.call(b.querySelectorAll(".searchJumper-hide"),n=>{n.classList.remove("searchJumper-hide");n.style.display="";n.removeAttribute("data-content")}),this.navMarks.innerHTML=ba(),this.marks={},this.curHighlightWords=[];else{this.inPageStyle||(this.inPageStyle=Ja(this.inPageCss));this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);var p="insert"===a;p?(a=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(a);
this.fakeTextareas=new Map;var v=Math.max(document.documentElement.scrollHeight,R(document).scrollHeight);this.navMarks.style.display="none";var q=[];a.forEach(n=>{k.marks[n.showWords]||(k.marks[n.showWords]=[]);if(n.inRange){let m=b;b.parentNode&&(m=b.parentNode);[].forEach.call(m.querySelectorAll(n.inRange),w=>{(w==b||b.contains(w))&&f(w,n,!0)})}else f(b,n,!0)});q.forEach(n=>{k.createNavMark(...n)});this.navMarks.style.display="";setTimeout(()=>{k.navMarks.style.display="none";q=[];h=!0;a.forEach(n=>
{k.marks[n.showWords]||(k.marks[n.showWords]=[]);e.forEach(m=>{f(m,n,!0)})});q.forEach(n=>{k.createNavMark(...n)});k.navMarks.style.display=""},1E3);""!=this.navMarks.innerHTML&&(this.searchJumperNavBar.classList.add("sjNavShow"),ab&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}}}else this.highlight(a,R(document),d)}refreshPageWords(a){this.lockWords="";this.searchJumperInPageInput.value="";this.searchInPageLockWords.innerHTML=ba();this.searchJumperInPageInput.style.paddingLeft=
"";this.submitInPageWords();if(a=a||Ia)this.searchJumperInPageInput.value=a,this.submitInPageWords(a==this.lastSearchEngineWords),this.appendBar()}refreshNav(){this.setNav(ab)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer);this.refreshNavMarksTimer=setTimeout(()=>{let a=Math.max(document.documentElement.scrollHeight,R(document).scrollHeight);this.navPointer.style.display="none";this.navMarks.style.display="none";[].forEach.call(this.navMarks.children,b=>{b.style.top=
b.dataset.top/a*100+"%"});this.navMarks.style.display=""},1E3)}checkCharacterData(a){setTimeout(()=>{this.highlight("insert",a,!0)},0)}removeMark(a){var b=a.dataset.content;let d=this.marks[b];d&&(a=d.indexOf(a),-1!==a&&(d.splice(a,1),this.marks[b]=d,(b=this.navMarks.querySelectorAll(`span[data-content="${b}"]`)[a])&&this.navMarks.removeChild(b)))}submitIgnoreSpace(a){a&&(this.lockWords||0===a.indexOf("$c")||0===a.indexOf("$o")||-1===a.indexOf(" ")||(this.splitSep="\u25ce"),this.searchJumperInPageInput.value=
a,this.submitInPageWords())}siteBtnReturnHome(a){a.parentNode&&a.parentNode.removeChild(a)}closeShowAll(){if(this.con.classList.contains("search-jumper-showall")&&!fb){this.clearInputHide();clearInterval(this.showAllTimeTimer);document.removeEventListener("mousedown",self.showAllMouseHandler);document.removeEventListener("keydown",self.showAllKeydownHandler);this.con.classList.remove("search-jumper-showall");document.documentElement.style.scrollbarWidth=this.preScrollbarWidth;this.searchJumperInputKeyWords.value=
"";this.historylist.innerHTML=ba();this.touched=!1;this.initPos();this.funcKeyCall&&this.setFuncKeyCall(!1);if(!l.prefConfig.disableAutoOpen&&!l.prefConfig.disableTypeOpen){let a=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(a&&!a.classList.contains("search-jumper-open"))if(a.onmousedown)a.onmousedown();else{let b=new PointerEvent("mousedown");a.dispatchEvent(b)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar();this.con&&this.con.parentNode&&(this.con.classList.contains("search-jumper-showall")?
this.closeShowAll():this.showAllSites())}showAllSites(){if(this.con&&this.con.parentNode&&!this.con.classList.contains("search-jumper-showall")){this.con.style.display="";this.clearInputHide();this.alllist.appendChild(this.filterSites);this.filterGlob.innerHTML=ba();var a=this;this.setFuncKeyCall(!1);this.hideSearchInput();this.con.classList.add("search-jumper-showall");this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"";document.documentElement.style.scrollbarWidth="none";clearInterval(this.showAllTimeTimer);
1E3>window.innerWidth?(a.timeInAll.style.fontSize="15px",a.dayInAll.style.fontSize="15px"):(a.timeInAll.style.fontSize="",a.dayInAll.style.fontSize="");var b=new Date,d=b.getFullYear(),c=b.getMonth(),f=b.getDate();b=C("Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")[b.getDay()])+"<br/>"+d+"-"+(10>++c?"0"+c:c)+"-"+(10>f?"0"+f:f);0==Lb.indexOf("zh")&&(d=pd(d,c,f))&&(b=b+"<br/>"+`${d.lunarYear}\u5e74${d.lunarMonth}\u6708${d.lunarDay}`);a.dayInAll.innerHTML=ba(b);d=()=>{var g=new Date;
let e=g.getHours(),h=g.getMinutes();g=g.getSeconds();a.timeInAll.innerText=(10>e?"0"+e:e)+":"+(10>h?"0"+h:h)+":"+(10>g?"0"+g:g)};this.showAllTimeTimer=setInterval(d,1E3);d();xa.forEach(g=>{"none"!=g.style.display&&(g=g.querySelector(".sitelist"))&&(a.sitelistBox.appendChild(g),a.initList(g))});this.historySiteBtns.slice(0,20).forEach(g=>{let e=g.querySelector("img");e&&e.dataset.src&&(e.src=e.dataset.src,delete e.dataset.src);a.historylist.appendChild(g)});d="";D&&("A"==D.nodeName.toUpperCase()||
D.parentNode&&"A"==D.parentNode.nodeName.toUpperCase())&&(d=D.textContent.trim());d=gb()||d||Fa;this.searchJumperInputKeyWords.value=d;setTimeout(()=>{a.showAllMouseHandler||(a.showAllMouseHandler=g=>{0!=g.isTrusted&&"sitelistBox"!==g.target.className&&"search-jumper-showallBg"!==g.target.className||a.closeShowAll()});a.con.addEventListener("mousedown",a.showAllMouseHandler);a.showAllKeydownHandler||(a.showAllKeydownHandler=g=>{27==g.keyCode&&a.closeShowAll()});document.addEventListener("keydown",
a.showAllKeydownHandler,!0);this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}}switchSite(a){if(na&&"none"!=this.bar.style.display){var b=this.con.querySelector(".search-jumper-btn.current");if(a)for(b=b.nextElementSibling;b&&(b.classList.contains("notmatch")||"none"==b.style.display||"true"==b.dataset.current||"true"!=b.dataset.isPage);)b=b.nextElementSibling;else for(b=b.previousElementSibling;b&&(b.classList.contains("notmatch")||
"none"==b.style.display||"true"==b.dataset.current||"true"!=b.dataset.isPage);)b=b.previousElementSibling;b&&this.openSiteBtn(b,"_self")}}clearInputHide(){xa.forEach(a=>{a.classList.remove("input-hide")});this.allSiteBtns.forEach(a=>{a[0].classList.remove("input-hide")});this.allListBtns.forEach(a=>{a.classList.remove("input-hide")});this.allLists.forEach(a=>{a.classList.remove("input-hide")})}showSearchInput(){if(!this.con||!this.con.classList.contains("search-jumper-showall")){this.recoveHistory();
this.con.classList.add("in-input");this.searchInput.value="";this.contentContainer.appendChild(this.filterSites);var a=Pa();a&&(this.searchJumperInputKeyWords.value=a);if(this.filterSitesTab.checked){this.con.classList.remove("in-find");l.prefConfig.defaultPicker&&this.togglePicker();this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=gb()||Fa);let b=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(b&&!b.parentNode.classList.contains("search-jumper-open"))if(b.onmousedown)b.onmousedown();
else{let d=new PointerEvent("mousedown");b.dispatchEvent(d)}yb&&(this.searchInput.value=yb,this.searchInput.dispatchEvent(new Event("input")));this.searchJumperInputKeyWords.focus();this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{a&&-1==this.lockWords.indexOf(a)?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=a,this.submitInPageWords()):
this.submitIgnoreSpace(a)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Fa&&this.lockWords!==Fa&&(this.searchJumperInPageInput.value=Fa,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0;this.clearInputHide();this.searchJumperInPageInput.style.paddingLeft=this.lockWords?this.searchInPageLockWords.clientWidth+3+"px":"";l.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",
this.checkSelHandler))}}togglePicker(){this.pickerBtn.classList.toggle("checked");this.con.classList.toggle("in-pick");this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled;Ca.toggle(!0);this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1;this.clearInputHide();this.con.classList.remove("in-find");this.con.classList.remove("in-input");this.con.classList.remove("lock-input");this.bar.classList.remove("initShow");
this.searchInput.value="";this.searchJumperInputKeyWords.value="";this.pickerBtn.classList.remove("checked");this.searchJumperInputKeyWords.disabled=!1;Ca.close();document.removeEventListener("mouseup",this.checkSelHandler);this.setFuncKeyCall(!1);this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer);this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let a=d=>{d.violatedDirective&&
-1!=d.violatedDirective.indexOf("style-src")&&(Xa=!0)};window.addEventListener("securitypolicyviolation",a);let b=Ja("html {color: #000;}");this.addToShadow(b);await Ma(0);window.removeEventListener("securitypolicyviolation",a);b.parentNode&&b.parentNode.removeChild(b)}addToShadow(a){this.shadowContainer||(this.shadowContainer=document.createElement("div"));this.shadowContainer.parentNode||(za?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));
if(Xa){if(/^style$/i.test(a.nodeName))return!0;var b=this.shadowContainer}else if(this.shadowRoot)b=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";b=Ja("\n                         .search-jumper-shadow {\n                          display: block !important;\n                          width: 0px !important;\n                          height: 0px !important;\n                          margin: 0px !important;\n                          padding: 0px !important;\n                          border-width: initial !important;\n                          border-style: none !important;\n                          border-color: initial !important;\n                          border-image: initial !important;\n                          outline: none !important;\n                          position: unset !important;\n                         }\n                        ");
this.shadowContainer.appendChild(b);let d=this.shadowContainer.attachShadow({mode:"closed"});b=document.createElement("div");b.id="search-jumper-root";b.style.display="none";b.setAttribute("contenteditable","false");let c=document.createElement("style");c.innerHTML=ba("#search-jumper-root{display: block!important;}");b.appendChild(c);d.appendChild(b);this.shadowRoot=b}a.parentNode!=b&&b.appendChild(a);return!0}contains(a){return a==this.shadowContainer||this.bar.contains(a)}appendBar(){bb&&bb.parentNode||
(bb=Ja(Nb),Xa||this.addToShadow(bb));if(this.addToShadow(this.con)){let a=this,b=()=>{setTimeout(()=>{a.shadowContainer&&!a.shadowContainer.parentNode?(za?document.body.appendChild(a.shadowContainer):document.documentElement.appendChild(a.shadowContainer),b()):!fb&&a.con.parentNode&&"2147483647"!=getComputedStyle(a.con).zIndex&&(this.removeBar(),Xa?oa(C("cspDisabled")):(Xa=!0,bb=Ja(Nb),a.shadowContainer.parentNode.removeChild(a.shadowContainer),a.shadowContainer=document.createElement("div"),a.shadowContainer.setAttribute("contenteditable",
"false"),document.documentElement.appendChild(a.shadowContainer),a.appendBar()))},100)};b()}}async searchBySiteName(a,b,d){b||={};b&&"drop"===b.type&&this.closeShowAll();for(var [c]of this.allSiteBtns)if(c.dataset.name==a){if(c.dataset.showTips){c.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(c,{button:b.button,altKey:b.altKey,ctrlKey:b.ctrlKey,shiftKey:b.shiftKey,metaKey:b.metaKey});(a=/^(https?|ftp):/.test(c.href))&&c.setAttribute("target",d?"_self":"_blank");c.click();
a&&c.setAttribute("target",1==c.dataset.target?"_blank":"_self");return}for(d=xa.length-1;0<=d;d--)if(c=xa[d],c.dataset.type==a){c.firstChild.onmousedown({button:2});break}}async searcAllhByTypeName(a){for(let b=xa.length-1;0<=b;b--){let d=xa[b];if(d.dataset.type==a){d.firstChild.onmousedown({button:2});break}}}autoGetFirstType(){D||=R(document);let a;switch(D.nodeName.toUpperCase()){case "IMG":a=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case "AUDIO":a=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");
break;case "VIDEO":a=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case "A":a=Pa()?this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:a=Pa()?this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):"A"===D.parentNode.nodeName.toUpperCase()?this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)")}a||=
this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type");if(a){this.setFuncKeyCall(!1);let b=new PointerEvent("mousedown");if(a.classList.contains("search-jumper-open"))if(a.children[0].onmousedown)a.children[0].onmousedown();else a.children[0].dispatchEvent(b);if(a.children[0].onmousedown)a.children[0].onmousedown();else a.children[0].dispatchEvent(b)}return a}searchAuto(a,b){a||=0;var d=this.autoGetFirstType();d&&(d=d.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),
a<d.length&&this.searchBySiteName(d[a].dataset.name,b))}setNav(a,b){b||ab==a||(O.setItem("navEnable",a||""),ab=a);a?(b||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(b||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(a){this.lockSiteKeywords=!0;this.searchLockInput.innerText=a;this.con.classList.add("lock-input");this.searchInput.value="";this.searchInput.style.paddingLeft=
`${15+this.searchLockInput.scrollWidth}px`;this.searchInput.placeholder=C("inputKeywords")}async initRun(){let a=this;this.siteIndex=1;this.customInput=!1;this.fontPool=[];this.allSiteBtns=[];this.allListBtns=[];this.allLists=[];this.dockerScaleBtns=[];this.bar.style.visibility="hidden";var b=0;let d=[];this.checkSelHandler=r=>{r.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()};this.splitSep="\u25ce";this.lockWords="";this.marks={};this.initInPageWords=
[];this.highlightSpans={};this.curHighlightWords=[];this.curWordIndex=0;let c=()=>{this.searchJumperInPageInput.focus();this.highlight("");let r=this.lockWords.trim();r?(this.searchJumperInPageInput.value&&(r+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=r,this.searchInPageLockWords.innerHTML=ba(),this.searchJumperInPageInput.style.paddingLeft=""):this.submitInPageWords()};document.addEventListener("keydown",r=>{27===r.keyCode&&(fb?(this.searchInput.value=
"",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",this.searchInPageLockWords.innerHTML=ba(),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0);this.searchJumperInPageInput.addEventListener("focus",r=>{this.searchInputDiv.classList.add("active")});this.searchJumperInPageInput.addEventListener("blur",r=>{this.searchInputDiv.classList.remove("active")});
this.searchJumperInPageInput.addEventListener("keydown",r=>{r.stopPropagation();switch(r.keyCode){case 8:if(!this.searchJumperInPageInput.value){var G=this.searchInPageLockWords.lastChild;G&&(G.dispatchEvent(new CustomEvent("editword")),r.preventDefault())}break;case 9:r.preventDefault();this.filterSitesTab.checked=!0;this.con.classList.remove("in-find");this.searchInput.focus();break;case 13:(G=this.searchJumperInPageInput.value?this.submitInPageWords():[])&&0<G.length?(G=G.pop(),this.currentSearchInPageLockWords&&
(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=G,r=new PointerEvent("mousedown",{button:r.shiftKey?2:0}),G.dispatchEvent(r)):this.lockWords&&(this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"),r=new PointerEvent("mousedown",{button:r.shiftKey?2:0}),this.currentSearchInPageLockWords.dispatchEvent(r));break;case 37:""==
this.searchJumperInPageInput.value&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform=
"scale(1.1)"));break;case 39:""==this.searchJumperInPageInput.value&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform=
"scale(1.1)"))}},!0);this.editBtn.addEventListener("click",r=>{c()});this.addWord.addEventListener("click",r=>{this.showModifyWindow()});this.searchInPageTab.addEventListener("change",r=>{this.initSetInPageWords();this.searchJumperInPageInput.focus();this.con.classList.add("in-find")});this.filterSitesTab.addEventListener("change",r=>{this.searchInput.focus();this.con.classList.remove("in-find")});Ia?(this.recoverBtn.addEventListener("click",r=>{this.lockWords="";this.searchJumperInPageInput.value=
Ia;this.searchInPageLockWords.innerHTML=ba();this.highlight("");this.submitInPageWords();this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none";this.pinBtn.addEventListener("click",r=>{this.submitInPageWords();this.pinBtn.classList.contains("checked")?(Ia="",this.pinBtn.classList.remove("checked")):this.lockWords&&(Ia=this.lockWords,this.pinBtn.classList.add("checked"));O.setItem("globalInPageWords",Ia)});this.wordModeBtn.addEventListener("click",
r=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked");this.lockWords&&this.refreshPageWords(this.lockWords)});this.saveRuleBtn.addEventListener("click",r=>{this.lockWords&&(za||Qb(()=>{let G=l.prefConfig.inPageRule||{};G[this.inPageRuleKey||pa.replace(/([&\?]_i=|#).*/,"")]=this.lockWords;l.prefConfig.inPageRule=G;l.lastModified=(new Date).getTime();Ab=l.lastModified;O.setItem("searchData",l);Ea(C("save completed"))}))});
this.emptyBtn.addEventListener("click",r=>{this.lockWords="";this.searchJumperInPageInput.value="";this.searchInPageLockWords.innerHTML=ba();this.searchJumperInPageInput.style.paddingLeft="";this.submitInPageWords();this.searchJumperInPageInput.focus()});this.copyInPageBtn.addEventListener("click",r=>{this.lockWords&&(pb(this.lockWords.replace(/\u25ce/g,"\n")),Ea("Copied successfully!"))});this.setNav(ab);this.locBtn.addEventListener("click",r=>{this.setNav(!this.locBtn.classList.contains("checked"))});
this.closeNavBtn.addEventListener("click",r=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",this.searchInPageLockWords.innerHTML=ba(),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),O.setItem("disableHighlight",location.hostname),"none"===this.bar.style.display&&this.removeBar()):this.setNav(!1)});this.minNavBtn.addEventListener("click",r=>{if(this.searchJumperNavBar.classList.contains("minimize"))this.searchJumperNavBar.classList.remove("minimize"),
this.lockWords.trim()||this.submitInPageWords();else if(this.searchJumperNavBar.classList.add("minimize"),this.highlight(""),r=this.lockWords.trim())this.searchJumperInPageInput.value&&(r+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=r,this.searchInPageLockWords.innerHTML=ba(),this.searchJumperInPageInput.style.paddingLeft=""});this.maxNavBtn.addEventListener("click",r=>{a.showInPage();a.showInPageSearch()});this.navMarks.addEventListener("click",
r=>{r=r.offsetY/this.navMarks.clientHeight*100;var G=[].slice.call(this.navMarks.querySelectorAll("span"));G.sort((K,M)=>{K=parseFloat(K.style.top);M=parseFloat(M.style.top);return K>M?1:K<M?-1:0});let z;for(var x=0;x<G.length;x++){z=G[x];let K=parseFloat(z.style.top);if(K>r){0<x&&(G=G[x-1],x=parseFloat(G.style.top),K-r>r-x&&(z=G));break}}z&&z.click()});this.bar.addEventListener("mousedown",r=>{r&&r.stopPropagation&&r.stopPropagation();r&&r.preventDefault&&r.preventDefault()});this.con.addEventListener("dblclick",
r=>{r.stopPropagation();r.preventDefault()});let f=r=>{r.stopPropagation();r.preventDefault();let G=a.searchJumperExpand.parentNode;if(G&&G.classList.contains("not-expand")){G.classList.remove("not-expand");G.classList.remove("search-jumper-move");r=a.con.classList.contains("search-jumper-left")||a.con.classList.contains("search-jumper-right");G.removeChild(a.searchJumperExpand);var z=Math.max(G.scrollWidth,G.scrollHeight)+5+"px";r?(G.style.height=z,G.style.width=""):(G.style.width=z,G.style.height=
"");setTimeout(()=>{a.checkScroll();G.classList.add("search-jumper-move")},251)}},g;this.searchJumperExpand.addEventListener("click",f,!0);this.searchJumperExpand.addEventListener("contextmenu",f,!0);this.searchJumperExpand.addEventListener("mouseenter",r=>{l.prefConfig.overOpen&&(clearTimeout(g),g=setTimeout(()=>{f(r)},500));let G=new CustomEvent("sitelist",{detail:{bind:r.currentTarget}});r.currentTarget.parentNode.dispatchEvent(G)},!1);l.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",
r=>{clearTimeout(g)},!1);this.pickerBtn.addEventListener("click",r=>{this.togglePicker()});this.maxEleBtn.addEventListener("click",r=>{Ca.expand()});this.minEleBtn.addEventListener("click",r=>{Ca.collapse()});this.copyEleBtn.addEventListener("click",r=>{Ca.copy()});this.openLinkBtn.addEventListener("click",r=>{Ca.openLinks()});var e=document.createElement("div");e.className="listArrow";this.listArrow=e;this.con.appendChild(e);for(let r of l.sitesConfig)r.bookmark||100<r.sites.length||/^BM/.test(r.type)&&
"bookmark"===r.icon?d.push(r):(await this.createType(r),b+=r.sites.length,100<b&&(await Ma(1),b=0));this.initHistorySites();this.initSort();this.bar.style.visibility="";this.bar.style.display="none";this.searchInPageRule();na&&tb.test(na.url)?this.inSearchEngine():!l.prefConfig.alwaysShow||Mb||ob||(this.bar.style.display="",this.initPos(),this.appendBar());Jb&&(D=Jb.target,this.batchOpen(Jb.sites,{button:2}));Jb=!1;Ya&&(this.submitAction(Ya),setTimeout(()=>{O.setListItem("inPagePostParams",location.hostname,
"")},1E4));let h=r=>{clearTimeout(k);let G,z;na&&!a.searchInput.value?(G=a.con.querySelector(".search-jumper-btn.current"),z="_self"):(G=a.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||a.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||a.con.querySelector("a.search-jumper-btn:not(.input-hide)"),z="_blank");G&&a.openSiteBtn(G,z,!r.ctrlKey)},k;this.inInput=!1;let p=()=>{yb!==a.searchInput.value&&(yb=a.searchInput.value,
O.setItem("cacheFilter",yb))};this.searchInput.addEventListener("input",r=>{clearTimeout(k);k=setTimeout(()=>{a.searchSiteBtns(a.searchInput.value)},500)});this.searchInput.addEventListener("click",r=>{a.searchInput.select()});this.searchInput.addEventListener("blur",r=>{p()});this.searchInput.addEventListener("keydown",r=>{r.stopPropagation();switch(r.keyCode){case 9:r.shiftKey&&(r.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),
this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(k);let G,z;na&&!a.searchInput.value?(G=a.con.querySelector(".search-jumper-btn.current"),z="_self"):(G=a.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||a.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||a.con.querySelector("a.search-jumper-btn:not(.input-hide)"),z="_blank");G&&a.openSiteBtn(G,z,!r.ctrlKey)}else this.searchJumperInputKeyWords.value?
h(r):this.searchJumperInputKeyWords.focus(),p()}});this.searchJumperInputKeyWords.addEventListener("input",r=>{clearTimeout(k);k=setTimeout(()=>{a.getSuggest(a.searchJumperInputKeyWords.value)},200)});this.searchJumperInputKeyWords.addEventListener("keydown",r=>{27!==r.keyCode&&r.stopPropagation();switch(r.keyCode){case 9:this.inInput?r.shiftKey||(r.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(r.preventDefault(),
this.searchInput.focus());break;case 13:h(r)}},!0);this.closeBtn.addEventListener("mousedown",r=>{a.hideSearchInput();l.prefConfig.emptyAfterCloseInput&&(a.highlight(""),a.searchJumperInPageInput.value=a.lockWords||"",a.lockWords="",a.searchInPageLockWords.innerHTML=ba(),a.setNav(!1,!0))});let v=window.innerWidth/2,q,n,m,w,t=r=>0===r.type.indexOf("mouse")?r.clientX:r.changedTouches[0].clientX,y=r=>0===r.type.indexOf("mouse")?r.clientY:r.changedTouches[0].clientY,W=r=>{let G=.25*window.innerWidth,
z=v+t(r)-m;a.searchInputDiv.style.top="unset";a.searchInputDiv.style.left=z+"px";a.searchInputDiv.style.bottom=q-(y(r)-w)+"px";z>window.innerWidth/2?a.searchInputDiv.style.maxWidth=window.innerWidth-z+G-50+"px":(z<G&&(a.searchInputDiv.style.left=z+(G-z)+"px"),a.searchInputDiv.style.maxWidth=z+G+"px");r.stopPropagation();r.preventDefault()},Q=r=>{document.removeEventListener("mouseup",Q);document.removeEventListener("mousemove",W);document.removeEventListener("touchend",Q);document.removeEventListener("touchmove",
W);n.style.cursor="";v+=t(r)-m;q-=y(r)-w},B=()=>{q||=a.con.classList.contains("search-jumper-bottom")?.95*window.innerHeight-60:.03*window.innerHeight},E=!1;this.searchInputDiv.addEventListener("touchstart",r=>{E=!0;if("inputGroup"===r.target.className||"LABEL"===r.target.nodeName.toUpperCase())B(),n=r.target,n.style.cursor="grabbing",m=t(r),w=y(r),document.addEventListener("touchend",Q),document.addEventListener("touchmove",W)},{passive:!0,capture:!1});this.searchInputDiv.addEventListener("mousedown",
r=>{if(E)E=!1;else if("inputGroup"===r.target.className||"LABEL"===r.target.nodeName.toUpperCase())B(),n=r.target,n.style.cursor="grabbing",m=r.clientX,w=r.clientY,document.addEventListener("mouseup",Q),document.addEventListener("mousemove",W),r.stopPropagation(),r.preventDefault()});let F,Z,S=r=>{this.searchInputDiv.style.width=r.clientX-Z+F+20+"px"},H=r=>{document.removeEventListener("mousemove",S);document.removeEventListener("mouseup",H)};this.rightSizeChange.addEventListener("mousedown",r=>{Z=
r.clientX;F=2*this.searchInput.clientWidth+2;document.addEventListener("mousemove",S);document.addEventListener("mouseup",H);r.stopPropagation();r.preventDefault()});let J,X=r=>{this.contains(r.target)||((r=/^(https?|ftp):/.test(J.href))&&J.setAttribute("target","_blank"),r?wa(J.href,{active:!1,insert:!0}):J.click(),r&&J.setAttribute("target",1==J.dataset.target?"_blank":"_self"));R(document).removeEventListener("dragover",V);document.removeEventListener("drop",X);document.removeEventListener("dragover",
V)},V=r=>{r.preventDefault()},ea=r=>{R(document).removeEventListener("dragover",V);document.removeEventListener("drop",X);document.removeEventListener("dragover",V)};this.bar.addEventListener("dragstart",r=>{r=r.target;let G=r.parentNode;if("IMG"===r.nodeName.toUpperCase()||"A"===r.nodeName.toUpperCase())r.classList&&r.classList.contains("search-jumper-btn")?(J=r,R(document).addEventListener("dragover",V),document.addEventListener("drop",X),document.addEventListener("dragend",ea)):G&&G.classList&&
G.classList.contains("search-jumper-btn")&&(J=G,R(document).addEventListener("dragover",V),document.addEventListener("drop",X),document.addEventListener("dragend",ea))},!0);b=0;e=!1!==na;for(let r of d)await this.createType(r),b+=r.sites.length,200<b&&(await Ma(1),b=0);if(!this.findInpageAddons){this.findInpageAddons=va.searchJumperAddons.filter(x=>"findInPage"==x.type).sort((x,K)=>(x.sort||0)-(K.sort||0));let r=this,G=0,z={};this.findInpageAddons.forEach(x=>{let K=x.name||"addon"+G++;x.disable=z[x.sort]?
!0:!0===l.prefConfig.disableAddon[K]?!0:!1;z[x.sort]=!0;r.createAddonSpan(K,x)})}0<this.fontPool.length||ob?(b=document.createElement("link"),b.rel="stylesheet",b.href=l.prefConfig.fontAwesomeCss||"https://lib.baomitu.com/font-awesome/6.1.2/css/all.css",document.documentElement.insertBefore(b,document.documentElement.children[0]),this.addToShadow(b.cloneNode()),od(()=>{let r=!1;this.fontPool.forEach(G=>{G.innerText="";G.style.fontSize="";G.style.color="";r=!0;Ub.unshift(G)});r&&(ob||"https://search.hoothin.com/firstRun"===
pa)&&setTimeout(()=>{Uc()},3E3);this.buildAllPageGroupTab()})):this.buildAllPageGroupTab();fb||(hc&&hc!=location.hostname&&window.top==window.self&&O.setItem("disableHighlight",""),await this.testCSP(),b=na&&tb.test(na.url),!e&&b?this.inSearchEngine():na||window.top!=window.self||this.checkSearchJump(),b=this.initInPageWords&&this.initInPageWords.length,!jd&&("none"!==this.bar.style.display||ab&&b)||this.removeBar())}buildAllPageGroupTab(){let a=this;this.groupTab.innerHTML=ba();xa.forEach(b=>{if(!b.classList.contains("notmatch")){var d=
b.dataset.type;b=b.firstElementChild.cloneNode(!0);var c=document.createElement("span");c.appendChild(b);c.dataset.type=d;c.addEventListener("click",f=>{(f=a.sitelistBox.querySelector(`[data-type="${d}"]`))&&f.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})});a.groupTab.appendChild(c)}})}async refreshEngines(){if(l&&!this.refreshing){this.refreshing=!0;setTimeout(()=>{this.refreshing=!1},500);Ab=l.lastModified;this.removeBar();xa&&xa.length&&xa.forEach(a=>{a.parentNode&&a.parentNode.removeChild(a)});
xa=[];this.allSiteBtns=[];this.allListBtns=[];this.allLists=[];this.historyTypeEle=null;for(let a of l.sitesConfig)await this.createType(a);this.initHistorySites();this.initSort();this.buildAllPageGroupTab();fb&&this.appendBar()}}waitForHide(a){let b=this;if(!this.bar.classList.contains("grabbing")){this.touched=!1;var d=()=>{b.bar.classList.remove("search-jumper-isTargetImg");b.bar.classList.remove("search-jumper-isTargetAudio");b.bar.classList.remove("search-jumper-isTargetVideo");b.bar.classList.remove("search-jumper-isTargetLink");
b.bar.classList.remove("initShow");b.tips.style.opacity=0;b.tips.style.display="none";b.tips.innerHTML=ba("");if(b.funcKeyCall)if(b.setFuncKeyCall(!1),na&&!na.hideNotMatch&&!l.prefConfig.hideOnSearchEngine||b.con.classList.contains("resizePage")){b.initPos();let c=b.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(c&&!c.classList.contains("search-jumper-open"))if(c.onmousedown)c.onmousedown();else{let f=new PointerEvent("mousedown");c.dispatchEvent(f)}}else b.bar.style.display="none";
l.prefConfig.autoClose&&b.closeOpenType();b.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);(a="undefined"===typeof a?this.funcKeyCall?500:l.prefConfig.autoDelay||1E3:a)?this.hideTimeout=setTimeout(d,a):d();this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}}searchEngineWords(a){a=a.replace(/( |^)-\S+/g,"");/".+"/.test(a)&&(a=a.replace(/"(.+)"/g,(b,d,c,f)=>`\u25ce${d}\u25ce`).replace(/^\u25ce|\u25ce$/g,""));return this.lastSearchEngineWords=a.replace(/['";]/g,
" ")}setInPageWords(a,b){this.initInPageWords.push(a);this.con.classList.add("in-find");let d=()=>{setTimeout(async()=>{"none"===R(document).style.display&&(R(document).style.display="");if(this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await Ma(1E3);O.setItem("lastHighlight",location.hostname);let c=this.initInPageWords.shift();for(;c;)this.searchJumperInPageInput.value=c,this.submitInPageWords(!0),c=this.initInPageWords.shift()}b&&b();await Ma(100);O.setItem("lastHighlight","")},
300)};if("complete"!=document.readyState){let c=f=>{"complete"==document.readyState&&(document.removeEventListener("readystatechange",c),window.removeEventListener("load",c),d())};document.addEventListener("readystatechange",c);window.addEventListener("load",c)}else d()}searchInPageRule(){if(l.prefConfig.disableAutoHighlight){var a=l.prefConfig.disableAutoHighlight.trim().split("\n");for(var b=0;b<a.length;b++){var d=a[b],c=!1;0===d.indexOf("/")?(d=d.match(/^\/(.*)\/([igm]*)$/))&&(c=(new RegExp(d[1],
d[2])).test(pa)):c=this.globMatch(d,pa);if(c){this.disableAutoHighlight=!0;return}}}dd===location.hostname&&(this.disableAutoHighlight=!0);if(l.prefConfig.inPageRule)for(a=Object.keys(l.prefConfig.inPageRule),b=0;b<a.length;b++)if(c=a[b]){d=!1;if(0===c.indexOf("/")){let f=c.match(/^\/(.*)\/([igm]*)$/);f&&(d=(new RegExp(f[1],f[2])).test(pa))}else d=this.globMatch(c,pa);if(d&&(d=l.prefConfig.inPageRule[c])){this.inPageRuleKey=c;this.disableAutoHighlight=!0;this.setInPageWords(d);break}}}checkSearchJump(){if(!this.inPageRuleKey&&
!this.disableAutoHighlight){if(l.prefConfig.showInSearchJumpPage&&gc&&!hc&&-1!=gd.indexOf(gc)){Fa&&this.wordModeBtn.classList.add("checked");var a=Fa;try{a=decodeURIComponent(a),a=this.searchEngineWords(a)}catch(b){}}if(a=a||Ia){this.appendBar();let b=this;this.setInPageWords(a,()=>{b.navMarks.innerHTML||"none"!==b.bar.style.display||b.removeBar()})}else if(!this.searchJumperInPageInput.value&&-1!=gd.indexOf(gc)&&Fa){a=Fa;this.wordModeBtn.classList.add("checked");try{a=decodeURIComponent(a)}catch(b){}this.searchJumperInPageInput.value=
a}}}inSearchEngine(){if(this.currentType&&na&&!Mb&&!this.inPageRuleKey&&!this.disableAutoHighlight){if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(na.url)||na.keywords)){this.appendBar();if(this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||
this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;l.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0);this.wordModeBtn.classList.add("checked");var a=l.prefConfig.showInSearchEngine?this.searchEngineWords(Wa):Ia;a&&this.setInPageWords(a)}}getSuggest(a){let b=this.suggestDatalist;b.innerHTML=
ba();if(a){var d=(c,f,g)=>{Na({method:"GET",url:c,responseType:g?"blob":"",headers:{referer:c,origin:c},onload:function(e){let h=e.response;if(!(400<=e.status)&&h)if(g){let k=new FileReader;k.onload=()=>{f(k.result)};k.readAsText(h,g)}else f(h)},onerror:function(e){oa(e)},ontimeout:function(e){oa(e)}})};switch(l.prefConfig.suggestType){case "google":d("https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s",a),c=>{if(c=c.match(/window.google.ac.h\((.*)\)$/,
"$1")){c=JSON.parse(c[1])[1];for(let f in c){let g=document.createElement("option");g.value=c[f][0];b.appendChild(g)}}});break;case "baidu":d("https://suggestion.baidu.com/su?wd=%s&cb=".replace("%s",a),c=>{if(c=c.match(/.*,s:(.*)}\);$/,"$1")){c=JSON.parse(c[1]);for(let f in c){let g=document.createElement("option");g.value=c[f];b.appendChild(g)}}},"GBK");break;case "bing":d("https://api.bing.com/qsonhs.aspx?type=json&q=%s".replace("%s",a),c=>{if(c){c=JSON.parse(c).AS.Results;for(let f in c){let g=
c[f].Suggests;for(let e in g){let h=document.createElement("option");h.value=g[e].Txt;b.appendChild(h)}}}})}}}searchSiteBtns(a){var b=a.indexOf("**");let d="",c=!1;0<b&&(d=a.slice(0,b),a=a.slice(b+2));0===a.indexOf("^")?c=!0:(d=d.toLowerCase(),a=a.toLowerCase());a?this.con.classList.add("searching"):this.con.classList.remove("searching");let f=!/[^\w\.\/:\*\?\^\$]/.test(a);this.allListBtns.forEach(e=>{e.classList.add("input-hide")});xa.forEach(e=>{e.classList.add("input-hide")});let g=0;this.filterGlob.innerHTML=
ba();this.allSiteBtns.forEach(e=>{var h=e[0],k=e[1],p=h.parentNode,v=h.dataset.type,q=h.dataset.name;let n=h.title;c||(v=v.toLowerCase(),q=q.toLowerCase(),n=n.toLowerCase());e="";if(d){if(!this.globMatch(d,v))return;e=h.dataset.type+"**"}v=!1;h.dataset.clone||(this.globMatch(a,q)?(v=!0,e+="^"+h.dataset.name+"$"):h.title&&this.globMatch(a,n)&&(v=!0,e+="^"+h.title+"$"));v||(f&&(h.dataset.host||(q=/^https?:\/\/([^\/]*)\/[\s\S]*$/,k=k.url,h.dataset.host=q.test(k)?k.replace(q,"$1"):k,h.dataset.host&&(h.dataset.host=
h.dataset.host.toLowerCase())),v=this.globMatch(a,h.dataset.host)),v?e+="^"+h.dataset.host+"$":h.classList.add("input-hide"));if(v){h.classList.remove("input-hide");p&&p.classList.remove("input-hide");let m;for(p=0;p<this.allListBtns.length;p++)if(this.allListBtns[p].id=="list"+h.dataset.id){m=this.allListBtns[p];break}m&&m.classList.remove("input-hide");50>g&&a&&this.searchInput.value!==e&&(g++,h=document.createElement("option"),h.value=e,this.filterGlob.appendChild(h))}});xa.forEach(e=>{let h;for(let k=
0;k<this.allLists.length;k++)if(this.allLists[k].dataset.type==e.dataset.type){h=this.allLists[k];break}h&&(e.classList.contains("input-hide")?h.classList.add("input-hide"):h.classList.remove("input-hide"))});if(b=this.bar.querySelector(".search-jumper-type:not(.input-hide)")){if(!b.classList.contains("search-jumper-open")){let e=b.querySelector("span.search-jumper-btn");if(e.onmousedown)e.onmousedown();else{let h=new PointerEvent("mousedown");e.dispatchEvent(h)}}this.searchJumperExpand.parentNode==
b&&(b=new PointerEvent("click"),this.searchJumperExpand.dispatchEvent(b))}}globMatch(a,b,d){if(500<b.length)return!1;try{if(0==a.length||"*"===a)return!0;if(1===a.length&&"$"===a[0])return!b||0===b.length;if(1<a.length&&"*"===a[0]&&(!b||0===b.length))return!1;if(!d)if(d=!0,1<a.length&&"^"===a[0]&&b&&0!==b.length){if(a=a.substring(1),a[0]!==b[0])return!1}else"*"!==a[0]&&(a="*"+a);if(1<a.length&&"?"===a[0]||0!=a.length&&b&&0!==b.length&&a[0]===b[0])return this.globMatch(a.substring(1),b.substring(1),
!!d);if(0<a.length&&"*"===a[0])return this.globMatch(a.substring(1),b,!!d)||this.globMatch(a,b&&b.substring(1),!!d)}catch(c){oa(c)}return!1}setCurrentSite(a,b){na=a;b.classList.add("current");Wa="";!/#p{|^(showTips|find)/.test(a.url)&&tb.test(a.url)&&(this.updateCacheKeywords(),O.setItem("referrer",location.hostname))}updateCacheKeywords(){let a=gb();a&&a!=Fa&&(Fa=a,O.setItem("cacheKeywords",a))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer);this.refreshInPageTimer=setTimeout(()=>
{var a=this.curHighlightWords;this.highlight("");this.highlight(a);if("none"==this.bar.style.display){na=null;var b;for(var d in l.sitesConfig){if(na)break;if(b=l.sitesConfig[d]){a=b.sites;for(let g in a){if(na)break;var c=a[g];if(!c||!c.url)continue;let e;if("0"!==c.match)if(c.match)(new RegExp(c.match)).test(pa)&&(e=c);else if(-1!=c.url.indexOf(location.hostname))if(-1!=c.url.indexOf("site")){var f=c.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);f&&-1!=pa.indexOf(f[2])&&-1!=c.url.replace(f[0],"").indexOf(location.hostname)&&
(e=c)}else!na&&c.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")&&(f=c.url.match(/[^\/\?&]+(?=%[stb])/g))&&(f=f.join(".*"),(new RegExp(f)).test(pa)&&(e=c));e&&(c=this.getTargetSitesByName([e.name])[0],this.currentType=c.parentNode,this.setCurrentSite(e,c))}}}if(!(!na||!tb.test(na.url)||/#p{/.test(na.url)&&!na.keywords||l.prefConfig.hideOnSearchEngine||this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||
this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage")||(this.appendBar(),this.bar.style.display="",this.initPos(),!(b=this.bar.querySelector(`.search-jumper-type[data-type="${b.type}"]>span`))||b.classList.contains("search-jumper-open")||(this.bar.insertBefore(b.parentNode,this.bar.children[0]),
l.prefConfig.disableAutoOpen||l.prefConfig.disableTypeOpen))))if(b.onmousedown)b.onmousedown();else d=new PointerEvent("mousedown"),b.dispatchEvent(d)}},500)}initSort(){l.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(na?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0]));if(l.prefConfig.sortType){xa.sort((d,c)=>(Ga[c.dataset.type]||0)-(Ga[d.dataset.type]||0));let a=!1,b=!this.bar.children[0].classList.contains("search-jumper-open");
for(let d=xa.length-1;0<=d;d--){let c=xa[d],f=Ga[c.dataset.type]||0;if(d==xa.length-1)0<f&&(a=!0,Ga[c.dataset.type]=0);else{let g=Ga[xa[d+1].dataset.type]||0;10<f-g&&(a=!0,Ga[c.dataset.type]=g+10)}this.bar.insertBefore(c,this.bar.children[b?0:1])}a&&O.setItem("sortTypeNames",Ga)}}initHistorySites(){this.historySiteBtns=[];this.txtHistorySiteBtns=[];this.imgHistorySiteBtns=[];this.linkHistorySiteBtns=[];this.videoHistorySiteBtns=[];this.audioHistorySiteBtns=[];let a=this;$a.forEach(async b=>{for(let c of l.sitesConfig){var d=
!1;let f=c.bookmark||100<c.sites.length||/^BM/.test(c.type)&&"bookmark"===c.icon;for(let g=0;g<c.sites.length;g++){let e=c.sites[g];if(e.name==b){d=await a.createSiteBtn(l.prefConfig.noIcons?"0":e.icon,e,!0,f,c,!0);d.classList.add("historySite");a.historySiteBtns.push(d);c.selectImg||c.selectLink||c.selectPage||c.selectVideo||c.selectAudio||a.txtHistorySiteBtns.push(d);c.selectImg&&a.imgHistorySiteBtns.push(d);(c.selectLink||c.selectPage)&&a.linkHistorySiteBtns.push(d);c.selectVideo&&a.videoHistorySiteBtns.push(d);
c.selectAudio&&a.audioHistorySiteBtns.push(d);d=!0;break}}if(d)break}})}insertHistory(a,b){if(l.prefConfig.historyLength){a.style.width="auto";a.style.height="auto";this.historyInserted=!0;var d=0;b=!b&&l.prefConfig.historyInsertFirst;var c=!1,f=0;!b&&(c=this.searchJumperExpand.parentNode==a&&!l.prefConfig.expandType)&&(f=(l.prefConfig.numPerLine||7)-1,f=l.prefConfig.historyLength<f?f+f-l.prefConfig.historyLength:f,l.prefConfig.hideTileType&&f++);var g=this.historySiteBtns;if(a.classList.contains("search-jumper-needInPage"))g=
this.txtHistorySiteBtns;else if(a.classList.contains("search-jumper-targetImg"))g=this.imgHistorySiteBtns;else if(a.classList.contains("search-jumper-targetAudio"))g=this.audioHistorySiteBtns;else if(a.classList.contains("search-jumper-targetVideo"))g=this.videoHistorySiteBtns;else if(a.classList.contains("search-jumper-targetLink")||a.classList.contains("search-jumper-targetPage"))g=this.linkHistorySiteBtns;for(let h=0;h<g.length;h++){let k=g[h];if("none"!=k.style.display){var e=k.querySelector("img");
e&&e.dataset.src&&(e.src=e.dataset.src,delete e.dataset.src);if(k.parentNode!=a){e=a.querySelectorAll("a.search-jumper-btn");let p=!1;for(let v=0;v<e.length;v++){let q=e[v];if((q.dataset.oriName||q.dataset.name)==(k.dataset.oriName||k.dataset.name)){p=!0;break}}if(!p&&(b?1<a.children.length?a.insertBefore(k,a.children[1]):a.appendChild(k):c?(e=a.querySelectorAll("a.search-jumper-btn"),e.length>f?a.insertBefore(k,e[f]):a.insertBefore(k,this.searchJumperExpand)):a.appendChild(k),++d>=l.prefConfig.historyLength))break}else b&&
(1<a.children.length?a.insertBefore(k,a.children[1]):a.appendChild(k))}}a.style.width=a.scrollWidth+"px";a.style.height=a.scrollHeight+"px"}}recoveHistory(){if(l.prefConfig.historyLength&&this.historyInserted){this.historyInserted=!1;for(let b=0;b<this.historySiteBtns.length;b++){let d=this.historySiteBtns[b];if(d.classList.contains("historySite")){var a=d.parentNode;this.siteBtnReturnHome(d)}}a&&a.classList.contains("search-jumper-open")&&(a.style.width="auto",a.style.height="auto",a.style.width=
a.scrollWidth+"px",a.style.height=a.scrollHeight+"px")}}bindSite(a,b){if(!a.getAttribute("bind")){a.setAttribute("bind",!0);var d=this;b.href&&(a.href=b.href);a.style.display=b.style.display;a.addEventListener("mousedown",async c=>{b.dataset.showTips?(d.con.classList.contains("search-jumper-showall")?D=a.parentNode:d.waitForHide(0),b.dispatchEvent(new CustomEvent("showTips"))):(await d.siteSetUrl(b,{button:c.button,altKey:c.altKey,ctrlKey:c.ctrlKey,shiftKey:c.shiftKey,metaKey:c.metaKey}),b.href&&
(a.href=b.href),a.setAttribute("target",b.target));a.onclick||(a.onclick=f=>{b.dataset.showTips||b.click();f.stopPropagation();f.preventDefault();return!1})},!1);a.addEventListener("dragover",c=>{c.preventDefault()},!0);a.addEventListener("dragenter",c=>{d.dragTarget&&d.dragTarget.classList.remove("dragTarget");d.dragTarget=a;d.dragTarget.classList.add("dragTarget");clearTimeout(d.dragTimer);d.dragTimer=setTimeout(()=>{a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1E3)},!0);
a.addEventListener("dragleave",c=>{a.classList.remove("dragTarget")},!0);a.addEventListener("drop",c=>{clearTimeout(d.dragTimer);d.dragTarget&&d.dragTarget.classList.remove("dragTarget");d.searchBySiteName(b.dataset.name,c)},!0)}}async createList(a,b,d){function c(k,p){let v=document.createElement("div");v.id="list"+p;var q=k.querySelector("img");p=document.createElement("a");p.setAttribute("ref","noopener noreferrer");f.bindSite(p,k);v.appendChild(p);f.allListBtns.push(v);if(q&&!l.prefConfig.noIcons){q=
q.src||q.dataset.src;let n=document.createElement("img");p.appendChild(n);n.onload=m=>{n.style.width="";n.style.height="";n.style.display=""};n.onerror=m=>{n.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+"};
n.style.width="1px";n.style.height="1px";n.style.display="none";q?(/^data:/.test(q)||(n.\u03bfnerr\u03bfr=m=>{n.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+";
n.onerror=null;n.style.width="";n.style.height="";n.style.display=""}),n.dataset.src=q):n.dataset.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+"}q=
document.createElement("p");q.innerText=k.dataset.name;v.title=k.title;v.dataset.name=k.dataset.name;p.appendChild(q);e.appendChild(v)}let f=this,g=document.createElement("div");g.className="sitelist";g.style.visibility="hidden";let e=document.createElement("div");e.className="sitelistCon";g.appendChild(e);g.addEventListener("mouseenter",k=>{f.listArrow.style.cssText=""});var h=document.createElement("p");h.innerText=b.dataset.title;h.title=C("batchOpen");h.addEventListener("click",k=>{f.batchOpen(d,
{ctrlKey:k.ctrlKey,shiftKey:k.shiftKey,altKey:k.altKey,metaKey:k.metaKey,button:k.ctrlKey||k.shiftKey||k.altKey||k.metaKey?0:2})});g.dataset.type=b.dataset.type;e.appendChild(h);try{for(let [k,p]of a.entries())c(p,p.dataset.id),49===k%50&&await Ma(1)}catch(k){for(b=0;b<a.length;b++)h=a[b],c(h,h.dataset.id)}this.allLists.push(g);return g}async initList(a){a.dataset.inited||(a.style.display="none",a.dataset.inited=!0,[].forEach.call(a.querySelectorAll("div>a>img"),b=>{b.dataset.src&&(b.src=b.dataset.src,
delete b.dataset.src)}),await Ma(0))}async listPos(a,b){await this.initList(b);b.style="";this.preList=b;var d=a.clientWidth,c=a.clientHeight;let f=a.offsetLeft+d/2-this.con.scrollLeft;for(var g=a.offsetTop+c/2-this.con.scrollTop,e=a.offsetParent;null!==e;)f+=e.offsetLeft,g+=e.offsetTop,e=e.offsetParent;e=window.innerWidth||document.documentElement.clientWidth;let h=window.innerHeight||document.documentElement.clientHeight,k=this.listArrow.style;k.visibility="visible";k.opacity=1;this.funcKeyCall?
(b.style.display="block",k.opacity=0,g=a.getBoundingClientRect(),f=g.x+d/2-this.con.scrollLeft,g=g.y+c/2-this.con.scrollTop,f-=b.clientWidth/2,d=a.getBoundingClientRect().top,d>h/2?(d<b.clientHeight+10&&(b.style.height=d-20+"px"),g-=b.clientHeight+c/2+5):(g+=c/2+5,d+b.clientHeight+c+10>h&&(b.style.height=h-d-c-20+"px")),20>f&&(f=20),c=e-b.clientWidth-30,f>c&&(f=c),b.style.left=f+"px",b.style.top=g+"px",b.style.display=""):this.bar.clientWidth>this.bar.clientHeight?(d=f,30>f?d=30:f>e-40&&(d=e-40),
k.left=d-10+"px",100>g-c/2?(b.style.top=this.bar.clientHeight+"px",k.top=this.bar.clientHeight-10+"px"):(b.style.bottom=this.bar.clientHeight+"px",k.bottom=this.bar.clientHeight-9+"px"),f-=b.scrollWidth/2,f>e-b.scrollWidth-10&&(f=e-b.scrollWidth-10),0>f&&(f=0),b.style.left=f+"px"):(c=g,30>g?c=30:g>h-30&&(c=h-30),k.top=c-10+"px",100>f-d/2?(b.style.left=this.bar.clientWidth+"px",k.left=this.bar.clientWidth-9+"px"):(b.style.right=this.bar.clientWidth+"px",k.right=this.bar.clientWidth-9+"px"),g-=b.scrollHeight/
2,g>h-b.scrollHeight&&(g=h-b.scrollHeight),0>g&&(g=0),b.style.top=g+"px",b.style.maxHeight="100vh")}clingPos(a,b,d){var c=a.clientWidth||a.offsetWidth,f=a.clientHeight||a.offsetHeight,g=a.getBoundingClientRect();var e=this.con&&this.con.classList.contains("search-jumper-showall");let h=window.innerWidth||document.documentElement.clientWidth,k=window.innerHeight||document.documentElement.clientHeight;this.tips.style.position="";b.style.height="";if(!a||/^(body|html)$/i.test(a.nodeName))this.tips.style.transition=
"none",this.tips.style.position="fixed",b.style.right="",b.style.bottom="",b.style.left=(h-b.clientWidth)/2+"px",b.style.top="min(11%,110px)";else if(e)e=g.x+c/2,g=g.y+f/2,e-=b.clientWidth/2-this.con.scrollLeft,g+=this.con.scrollTop,g=g>k/2?g-(b.clientHeight+f/2+10):g+(f/2+10),b.style.right="",b.style.bottom="",b.style.left=e+"px",b.style.top=g+"px";else if(this.funcKeyCall){let p=window.pageYOffset||document.documentElement.scrollTop||R(document).scrollTop;d=window.pageXOffset||document.documentElement.scrollLeft||
R(document).scrollLeft;e=g.x+c/2-this.con.scrollLeft+d;g=g.y+f/2-this.con.scrollTop+p;e-=b.clientWidth/2;c=a.getBoundingClientRect().top;c>k/2?(c<b.clientHeight+10&&(b.style.height=c-20+"px"),g-=b.clientHeight+f/2+5):(g+=f/2+5,c+b.clientHeight+f+10>k&&(b.style.height=k-c-f-20+"px"));20>e&&(e=20);f=h+d-b.clientWidth-30;e>f&&(e=f);b.style.right="";b.style.bottom="";b.style.left=e+"px";b.style.top=g+"px"}else{e=a.offsetLeft+c/2-this.con.scrollLeft-a.parentNode.scrollLeft;g=a.offsetTop+f/2-this.con.scrollTop-
a.parentNode.scrollTop;for(a=a.offsetParent;null!==a;)e+=a.offsetLeft,g+=a.offsetTop,a=a.offsetParent;g<f?(e-=b.clientWidth/2,5>e?(b.style.left="5px",b.style.right=""):e>h-b.clientWidth?(b.style.left="",b.style.right="5px"):(b.style.left=e+"px",b.style.right=""),b.style.bottom="",b.style.top=(d?f:f+20)+"px"):g>k-f-10?(e-=b.clientWidth/2,5>e?(b.style.left="5px",b.style.right=""):e>h-b.clientWidth?(b.style.left="",b.style.right="5px"):(b.style.left=e+"px",b.style.right=""),b.style.top="",b.style.bottom=
(d?f:f+20)+"px"):(e>h-c-10?(b.style.left="",b.style.bottom="",g-=b.clientHeight/2,5>g&&(g=5),b.style.right=(d?c:c+20)+"px"):e<c?(b.style.right="",b.style.bottom="",g-=b.clientHeight/2,5>g&&(g=5),b.style.left=(d?c:c+20)+"px"):(b.style.right="",b.style.bottom="",b.style.left=e+"px"),b.style.top=g+"px")}}tipsPos(a,b){this.tips.innerHTML=ba(b);this.tips.style.pointerEvents="";this.tips.style.display="";this.tips.style.opacity=1;this.clingPos(a,this.tips);clearTimeout(this.hideTips);this.tips.style.transition&&
setTimeout(()=>{this.tips.style.transition=""},1);let d=this;[].forEach.call(this.tips.querySelectorAll("iframe"),c=>{let f=c.innerHTML;if(f)if(c.innerHTML=ba(),c.src)c.addEventListener("load",g=>{try{if(c&&c.parentNode){var e=c.contentDocument||c.contentWindow.document,h=e.createElement("div");e.body.appendChild(h);h.outerHTML=ba(f)}}catch(k){}});else try{let g=c.contentDocument||c.contentWindow.document;g.open();g.write(f);g.close()}catch(g){}});[].forEach.call(this.tips.querySelectorAll("img,video"),
c=>{c.addEventListener("load",f=>{d.clingPos(a,d.tips)})});window.markdownit&&(d.md||(d.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),c=>{c.innerHTML=ba(d.md.render(c.innerHTML))}))}checkKwFilter(a,b){600<b.length&&(b=b.slice(0,500)+b.slice(b.length-10));var d=a.match(/^@{(.*?)}/);if(d){if(!D||![].some.call(mc(d[1],document),c=>c===D))return!1;a=a.replace(d[0],"")}d=a.match(/^\/(.*)\/(\w*)$/);return(d?new RegExp(d[1],d[2]):new RegExp(a,"i")).test(b||"")}async createType(a){var b,
d,c,f;async function g(I,fa){I.name&&(fa=await e.createSiteBtn(ra||l.prefConfig.noIcons?"0":I.icon,I,W,S,a))&&(fa.classList.contains("notmatch")||V++,fa.dataset.type=h,fa.dataset.id=e.siteIndex,e.siteIndex++,e.allSiteBtns.push([fa,I]),B.appendChild(fa),Q.push(fa),I.nobatch||"0"===I.match||J.push(I.name),ia||na||!fa.dataset.current&&!y||B.classList.contains("notmatch")||(ia=!0,fa.dataset.current&&(l.prefConfig.showCurrent||(fa.style.display="none"),e.setCurrentSite(I,fa)),e.currentType=B))}let e=this,
h=a.type;var k=a.icon;let p=a.selectTxt,v=a.selectImg,q=a.selectAudio,n=a.selectVideo,m=a.selectLink,w=a.selectPage,t=a.sites,y=!1,W="undefined"===typeof a.openInNewTab?l.prefConfig.openInNewTab:a.openInNewTab,Q=[],B=document.createElement("span");B.className="search-jumper-type";!l.prefConfig.expandType&&10<t.length&&B.classList.add("not-expand");"0"===a.match?(B.style.display="none",B.classList.add("notmatch")):a.match&&(0==(new RegExp(a.match)).test(pa)?(B.style.display="none",B.classList.add("notmatch")):
y=!0);B.dataset.title="undefined"!==typeof a.description?h+" - "+a.description:h;B.dataset.type=h;let E=document.createElement("span"),F=document.createElement("img"),Z=document.createElement("b");3<=h.length?(Z.innerText=h.trim().substr(0,4),/^[\w \-]+$/.test(Z.innerText.substr(0,3))||(Z.innerText=Z.innerText.substr(0,2))):Z.innerText=h;E.appendChild(Z);F.style.display="none";B.appendChild(E);E.classList.add("search-jumper-word");E.classList.add("search-jumper-btn");E.classList.add("noIcon");let S=
/^BM/.test(h)&&"bookmark"===a.icon;if(k){E.classList.remove("noIcon");let I=/^[a-z\- ]+$/.test(k);F.onload=fa=>{F.style.display="";Z.innerText="";Z.style.display="none";I||E.classList.remove("search-jumper-word")};if(I){var H=ta[k.trim().replace(/ /g,"_")];"fail"!==H&&H?(F.src=H,F.style.width="100%",F.style.height="100%",E.appendChild(F)):(Z.className=0===k.indexOf("fa")?k:"fa fa-"+k,this.fontPool.push(Z))}else/^data:/.test(k)?F.src=k:(H=l.prefConfig.cacheSwitch&&ta[k],"fail"!==H&&(H?F.src=H:(F.src=
k,ta[k]||S||Ra.push(F)))),E.appendChild(F)}B.addEventListener("mouseleave",I=>{e.listArrow.style.cssText="";e.dockerScaleBtns.forEach(fa=>{fa.style.setProperty("--scale",1)})});let J=[],X=I=>{switch(l.prefConfig.batchOpenConfirm){case 1:window.confirm(C("batchOpenConfirm"))&&e.batchOpen(J,I);break;case 2:e.batchOpen(J,I);break;default:(B.classList.contains("search-jumper-open")||I.shiftKey||I.altKey||I.ctrlKey||I.metaKey||window.confirm(C("batchOpenConfirm")))&&e.batchOpen(J,I)}};l.prefConfig.shortcut&&
a.shortcut&&!B.classList.contains("notmatch")&&(k=a.shortcut.replace("Key","").replace("Digit","").toUpperCase(),1==k.length&&(B.dataset.title+=` (${k})`),document.addEventListener("keydown",I=>{if("searchJumperInput"!==I.target.id&&!a.ctrl!=I.ctrlKey&&!a.alt!=I.altKey&&!a.shift!=I.shiftKey&&!a.meta!=I.metaKey&&(l.prefConfig.enableInInput||a.ctrl||a.alt||a.shift||a.meta||!Bb(document))){var fa=(I.key||String.fromCharCode(I.keyCode)).toLowerCase();if(a.shortcut==I.code||a.shortcut==fa)X(I),I.stopPropagation()}}));
let V=0,ea=40*this.scale,r=(I,fa)=>{fa?(I.style.display="",2<B.children.length&&B.insertBefore(I,B.children[2])):(I.style.display="none",e.searchJumperExpand.parentNode==B?B.insertBefore(I,e.searchJumperExpand):B.appendChild(I))},G=I=>{if(I){if(2===I.button)return X(I),!1;if(0===I.button&&(I.shiftKey||I.altKey||I.ctrlKey))return!1}if(e.funcKeyCall)return e.showAllSites(),!1;let fa=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");e.preList&&(e.preList.style.visibility=
"hidden",e.listArrow.style.cssText="");B.classList.remove("search-jumper-move");if(B.classList.contains("search-jumper-open"))l.prefConfig.minSizeMode&&e.bar.classList.add("minSizeModeClose"),B.classList.remove("search-jumper-open"),fa?(B.style.height=ea+"px",B.style.width=""):(B.style.height="",B.style.width=ea+"px"),B.style.flexWrap="",l.prefConfig.disableTypeOpen&&(N.style.visibility="hidden");else{e.recoveHistory();B.classList.add("search-jumper-open");l.prefConfig.minSizeMode&&e.bar.classList.remove("minSizeModeClose");
let u=!1;D&&(u=Nc(D));let L=D&&(D.href||D.src),T=gb();V=0;Q.forEach((U,da)=>{da=t[da];let ja=!0;da.kwFilter&&(ja=e.checkKwFilter(da.kwFilter,U.dataset.link?L||T:U.dataset.txt?T||D&&D.innerText||"":L||T||location.href));ja&&U.dataset.paste?(ja=u,r(U,ja)):da.kwFilter&&r(U,ja);da=U.querySelector("img");"none"!=U.style.display&&V++;da&&!da.src&&da.dataset.src&&(da.src=da.dataset.src,delete da.dataset.src)});V>(l.prefConfig.expandTypeLength||12)&&!l.prefConfig.expandType&&(B.classList.add("not-expand"),
B.appendChild(e.searchJumperExpand));let ha=Math.max(B.scrollWidth,B.scrollHeight)+5+"px";l.prefConfig.disableTypeOpen&&(ha=ea+"px",I&&e.listPos(B.children[0],N));fa?(B.style.height=ha,B.style.width=""):(B.style.width=ha,B.style.height="");setTimeout(()=>{B.classList.contains("search-jumper-open")&&(B.style.flexWrap="nowrap",B.classList.add("search-jumper-move"))},l.prefConfig.typeOpenTime);xa.forEach(U=>{B!=U&&(U.classList.remove("search-jumper-open"),U.style.width=ea+"px",U.style.height=ea+"px",
U.style.flexWrap="")})}l.prefConfig.disableTypeOpen||setTimeout(()=>{e.checkScroll()},l.prefConfig.typeOpenTime)},z=!1,x=I=>{document.removeEventListener("mouseup",x);document.removeEventListener("mousemove",K);z||G(I);z=!1},K=I=>{z?(e.bar.style.left=b+I.clientX-c+"px",e.bar.style.top=d+I.clientY-f+"px"):(e.tips.style.opacity=0,z=!0,c=I.clientX,f=I.clientY,b=parseInt(e.bar.style.left),d=parseInt(e.bar.style.top))};E.onmouseup=function(I){!I||!e.funcKeyCall||0!==I.button||I.shiftKey||I.altKey||I.ctrlKey?
G(I):(z=!1,I.preventDefault&&I.preventDefault(),document.addEventListener("mouseup",x),document.addEventListener("mousemove",K))};E.oncontextmenu=function(I){I.preventDefault()};E.addEventListener("click",I=>{e.batchOpen(J,I);return!1},!1);E.addEventListener("dblclick",I=>{I.stopPropagation();I.preventDefault()},!0);let M,N;k=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth;H=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight;let ca=
!jc||600<k&&600<H;B.addEventListener("sitelist",async I=>{B.appendChild(N);await e.listPos(I.detail.bind,N);N.style.display="block"},!1);E.addEventListener("mouseenter",I=>{z||(e.funcKeyCall||!l.prefConfig.showSiteLists||!l.prefConfig.alwaysShowSiteLists&&B.classList.contains("search-jumper-open")?ca&&e.tipsPos(E,B.dataset.title):(B.appendChild(N),e.listPos(B.children[0],N)),l.prefConfig.overOpen&&!B.classList.contains("search-jumper-open")&&(clearTimeout(M),M=setTimeout(()=>{G(I)},500)))},!1);E.addEventListener("mouseleave",
I=>{e.tips.style.opacity=0;l.prefConfig.overOpen&&clearTimeout(M)},!1);let ia=!1,ra=t&&200<t.length;B.dataset.id=e.siteIndex;e.stopInput=!1;try{for(let [I,fa]of t.entries())await g(fa,I),99===I%100&&await Ma(1)}catch(I){for(k=0;k<t.length;k++)g(t[k],k);await Ma(1)}if(l.prefConfig.sortSite&&1<B.children.length){Q.sort((I,fa)=>(Ha[fa.dataset.name]||0)-(Ha[I.dataset.name]||0));k=!1;for(H=Q.length-1;0<=H;H--){let I=Q[H],fa=Ha[I.dataset.name]||0;if(H==Q.length-1)0<fa&&(k=!0,Ha[I.dataset.name]=0);else{let u=
Ha[Q[H+1].dataset.name]||0;10<fa-u&&(k=!0,Ha[I.dataset.name]=u+10)}B.insertBefore(I,B.children[1])}k&&O.setItem("sortSiteNames",Ha)}Q.forEach(I=>{I.classList.contains("notmatch")&&B.appendChild(I)});N=await e.createList(Q,B,J);if(ia){if(l.prefConfig.currentTypeFirst?e.bar.insertBefore(B,e.bar.children[0]):e.bar.insertBefore(B,e.bar.children[e.bar.children.length-1]),!l.prefConfig.disableAutoOpen&&!l.prefConfig.disableTypeOpen){B.classList.add("search-jumper-open");B.classList.add("search-jumper-move");
V>(l.prefConfig.expandTypeLength||12)&&!l.prefConfig.expandType&&(B.classList.add("not-expand"),B.appendChild(e.searchJumperExpand));let I=-1,fa=[];if("complete"!==document.readyState){I=3;let u=L=>{"complete"===document.readyState&&(document.removeEventListener("readystatechange",u),window.removeEventListener("load",u),fa.forEach(T=>{T&&!T.src&&T.dataset.src&&(T.src=T.dataset.src,delete T.dataset.src)}),fa=[])};document.addEventListener("readystatechange",u);window.addEventListener("load",u)}Q.forEach((u,
L)=>{let T=u.querySelector("img");(L=t[L])&&Wa&&L.kwFilter&&(e.checkKwFilter(L.kwFilter,Wa)?u.style.display="":(u.style.display="none",e.searchJumperExpand.parentNode==B?B.insertBefore(u,e.searchJumperExpand):B.appendChild(u)));if("none"!=u.style.display&&T&&!T.src&&T.dataset.src){if(0<=I&&!/^data/.test(T.dataset.src))if(0!==I)I--;else{fa.push(T);return}T.src=T.dataset.src;delete T.dataset.src}})}}else e.historyTypeEle||Kb!=h||(e.historyTypeEle=B),e.bar.insertBefore(B,e.bar.children[e.bar.children.length-
1]);B.style.width=B.scrollHeight+"px";B.style.height=B.scrollHeight+"px";N.style.display="none";B.appendChild(N);p&&v&&q&&n&&m&&w?B.classList.add("search-jumper-targetAll"):(p&&B.classList.add("search-jumper-needInPage"),v&&B.classList.add("search-jumper-targetImg"),q&&B.classList.add("search-jumper-targetAudio"),n&&B.classList.add("search-jumper-targetVideo"),m&&B.classList.add("search-jumper-targetLink"),w&&B.classList.add("search-jumper-targetPage"));xa.push(B);return B}async openSiteBtn(a,b,d=
!1){await this.siteSetUrl(a);let c=a.dataset.isPage;b||="_blank";c&&a.setAttribute("target",b);c&&"_blank"==b&&a.href?wa(a.href,{active:d,insert:!0}):a.click();a.setAttribute("target",1==a.dataset.target?"_blank":"_self")}async batchOpen(a,b,d){let c=this;c.batchOpening=!0;c.customInput=!1;if(b.altKey&&b.shiftKey){a=c.getTargetSitesByName(a);var f=window.innerWidth||document.documentElement.clientWidth,g="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>";
let e=window.open("","_blank");b=1;for(let h of a)if(h.dataset.isPage){await c.siteSetUrl(h);if(c.stopInput)return;if(!h.href)continue;let k=document.createElement("iframe");k.width=2>=a.length||1280>=f?"50%":"33%";k.height="100%";k.frameBorder="0";k.sandbox="allow-same-origin allow-scripts allow-popups allow-forms";k.id="searchJumper"+b++;k.style.display="none";g+=k.outerHTML;Na({method:"GET",url:h.href,headers:{referer:h.href,origin:h.href,"User-Agent":navigator.userAgent},onload:function(p){let v=
e.document.querySelector("iframe#"+k.id),q=()=>{let n=v.contentDocument||v.contentWindow&&v.contentWindow.document;if(n)try{v.style.display="";v.src=h.href;let m=`<base href="${h.href.replace(/[^\/]*$/,"")}" />`,w=-1!==p.response.indexOf("<head")?p.response.replace(/(<head.*?>)/,"$1"+m):m+p.response;n.write(w)}catch(m){}else setTimeout(()=>{q()},500)};v&&q()},onerror:function(p){oa(p)},ontimeout:function(p){oa(p)}})}e.document.write(g);e.document.close()}else if((b.ctrlKey||b.metaKey)&&b.shiftKey){f=
c.getTargetSitesByName(a);for(let e of f){await c.siteSetUrl(e);if(c.stopInput)return;if(e.dataset.isPage&&e.href){f={};D&&(f={src:D.src||D.href||"",title:D.title||D.alt});a=a.filter(h=>h!==e.dataset.name);O.setItem("lastSign",{target:f,sites:a});setTimeout(()=>{wa(e.href,{incognito:!0})},300);setTimeout(()=>{O.setItem("lastSign",!1)},2E3);break}}}else if(b.altKey){g=c.getTargetSitesByName(a);a=[];for(f of g)if(f.dataset.isPage){await c.siteSetUrl(f);if(c.stopInput)return;f.href&&a.push(f.href)}g=
window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth;b=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight;f=parseInt(g/800);f>a.length&&(f=a.length);g=parseInt(g/f);b=b/(parseInt((a.length-1)/f)+1)-65;for(let e=0;e<a.length;e++){let h=e%f*g,k=parseInt(e/f)*(b+70);window.open(a[e]+"#searchJumperMin","_blank",`width=${g-10}, height=${b}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${h}, top=${k}`)}}else if(b.shiftKey){f=
c.getTargetSitesByName(a);for(let e of f){await c.siteSetUrl(e);if(c.stopInput)return;if(e.dataset.isPage&&e.href){f={};D&&(f={src:D.src||D.href||"",title:D.title||D.alt});a=a.filter(h=>h!==e.dataset.name);O.setItem("lastSign",{target:f,sites:a});window.open(e.href,"_blank");setTimeout(()=>{O.setItem("lastSign",!1)},2E3);break}}}else if(b.ctrlKey||b.metaKey){a=c.getTargetSitesByName(a).reverse();for(g of a)if(await c.siteSetUrl(g),g.dataset.isPage&&g.href)wa(g.href,{active:!1,insert:!0});else{if(c.stopInput)return;
g.click()}}else 2===b.button&&c.getTargetSitesByName(a).reverse().forEach(e=>{e.dataset.current||c.openSiteBtn(e,"_blank",!!d)});c.batchOpening=!1}async siteSetUrl(a,b){return new Promise(d=>{let c=g=>{a.removeEventListener("actionOver",c);d(!0)};a.addEventListener("actionOver",c);let f=new PointerEvent("mousedown",b);a.dispatchEvent(f)})}getTargetSitesByName(a,b){let d=this,c=[];a.forEach(f=>{for(let g=0;g<d.allSiteBtns.length;g++){let e=d.allSiteBtns[g][0];if(e.dataset.name==f){if(!b&&e.dataset.pointer){if(e.dataset.oriName&&
(f=d.getTargetSitesByName([e.dataset.oriName],!0),f.length)){c.push(...f);break}}else c.push(e);break}}});return c}async submitAction(a){a=a.slice();if("complete"!==document.readyState&&"interactive"!==document.readyState)await Ma(300),this.submitAction(a);else{var b,d=!1,c=this,f=!1;var g=0;var e=[],h=!1,k=[],p=await O.getItem("copyStore");p&&(k=JSON.parse(p));p=async(q,n)=>{let m=!0;if("sleep"===q[0]||"@sleep"===q[0])await Ma(q[1]),oa(`sleep ${q[1]}`);else if("@click"===q[0])d=!0,await Qc(q[1],
n)||(m=!1);else if("@dblclick"===q[0])d=!0,await td(q[1],n)||(m=!1);else if("@rclick"===q[0])d=!0,await ud(q[1],n)||(m=!1);else if("click"===q[1]&&0===q[0].indexOf("@"))d=!0,await Qc(q[0].substr(1),n)||(m=!1);else if("@copy"===q[0])(q=await Cb(q[1],n))&&!0!==q&&(k.push(q.innerText),mb||(m=!1));else if("@call"===q[0])(n=c.getTargetSitesByName([q[1]])[0])?(Eb=Eb||gb()||Fa,await c.siteSetUrl(n),n.click()):await (window[q[1]]||new Fc('"use strict";'+q[1]))();else if("@open"===q[0]){let t=await Rb(q[1]);
h?wa(t.href):(h=!0,setTimeout(()=>{location.href=t.href},50))}else if("@reload"!==q[0])if("@wait"===q[0])0===q[1].indexOf("!")?await rd(q[1].slice(1)):await Rb(q[1]);else{var w=q[1];Wa||=w;if(-1!==w.indexOf("%input{")&&(w=await c.showCustomInputWindow(w),!w))return O.setListItem("inPagePostParams",location.hostname,""),!0;await sd(q[0],w,n)||(m=!1);"@"!==q[0]&&(b=xb(q[0]))}return m};for(var v of a){if("@loopStart"===v[0])f=!0,e=[],g=parseInt(v[1])||1;else if("@loopEnd"===v[0])for(f=!1;0<g--;){a=!1;
let q=0;for(;!a;){a=!0;for(let n of e)await p(n,q)||(a=!1);q++}}else f?e.push(v):await p(v);if(Ya&&(Ya.shift(),Ya&&Ya.length?(O.setListItem("inPagePostParams",location.hostname,Ya),O.setItem("copyStore",JSON.stringify(k))):(pb(k.join("\n")),O.setListItem("inPagePostParams",location.hostname,""),O.setItem("copyStore","")),"@reload"===v[0])){location.reload(!!v[1]);return}}if(f)for(f=!1;0<g--;)for(f=!1,v=0;!f;){f=!0;for(let q of e)await p(q,v)||(f=!1);v++}if(!d&&b){for(g=b.parentNode;"FORM"!=g.nodeName.toUpperCase()&&
(g=g.parentNode,g););g?(e=g.querySelector("[type=submit]"))?e.click():g.submit():qd()}}}getCloneData(a){for(let b=0;b<l.sitesConfig.length;b++){let d=l.sitesConfig[b];for(let c=0;c<d.sites.length;c++){let f=d.sites[c];if(!/^\[/.test(f.url)&&f.name==a)return f}}return null}async createSiteBtn(a,b,d,c,f,g){let e=this,h=document.createElement("a");h.setAttribute("ref","noopener noreferrer");h.setAttribute("referrerPolicy","no-referrer");let k=b.name,p=b.match,v=!1,q;var n=!c&&/^\[/.test(b.url);let m=
b.description,w=b.shortcut;"undefined"!==typeof b.openInNewTab&&(d=b.openInNewTab);if(n){h.dataset.pointer=!0;var t=JSON.parse(b.url);1===t.length&&(h.dataset.clone=!0,t=this.getCloneData(t[0]))&&(h.dataset.oriName=t.name,b=t,b.icon&&"0"!==a&&(a=b.icon),b.description&&(m=b.description))}/^d:/.test(b.url)?(h.setAttribute("download",""),b.url=b.url.replace(/^d:/,"")):/^showTips:/.test(b.url)&&(v=!0,h.dataset.showTips=!0);/^paste:/.test(b.url)&&(h.dataset.paste=!0);let y=/^(https?|ftp):/.test(b.url);
y&&(h.dataset.isPage=y);h.className="search-jumper-btn";"undefined"!==typeof m&&(h.title=m);h.dataset.name=k;h.classList.add("search-jumper-word");h.dataset.inPagePost=-1!=b.url.indexOf("#p{")?"t":"f";let W="t"===h.dataset.inPagePost;"0"===p?(h.style.display="none",h.classList.add("notmatch")):c||na&&!b.hideNotMatch||window.top!=window.self||(p?(n=p.match(/^\/(.*)\/(\w*)$/),(n?new RegExp(n[1],n[2]):new RegExp(p,"i")).test(pa)&&(h.dataset.current=!0)):!n&&location.hostname&&-1!=b.url.indexOf(location.hostname)&&
(this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/),(n=b.url.match(this.inSiteMatch))?-1!=pa.indexOf(n[2])&&-1!=b.url.replace(n[0],"").indexOf(location.hostname)&&(h.dataset.current=!0):(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(b.url)?(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(b.url)?h.dataset.current=!0:(this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g),(n=b.url.match(this.paramMatch))?
(n=n.join(".*"),(new RegExp(n)).test(pa)&&(h.dataset.current=!0)):h.dataset.current=!0)):0===b.url.indexOf("http")&&-1===b.url.indexOf("?")&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),(new RegExp(b.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*"))).test(pa)&&(h.dataset.current=!0)))),!h.dataset.current&&b.hideNotMatch&&(h.style.display="none",h.classList.add("notmatch")));let Q=document.createElement("span");!c&&3<=k.length?(Q.innerText=
k.substr(0,4),/^[\w \-]+$/.test(Q.innerText.substr(0,3))||(Q.innerText=Q.innerText.substr(0,2))):Q.innerText=k;h.appendChild(Q);let B=document.createElement("img");B.style.display="none";h.appendChild(B);g||!l.prefConfig.shortcut||!w||h.dataset.clone||h.classList.contains("notmatch")||(g=document.createElement("div"),n=w.replace("Key","").replace("Digit","").toUpperCase(),1==n.length&&(g.innerText=n,h.appendChild(g)),document.addEventListener("keydown",async u=>{if("searchJumperInput"!==u.target.id&&
(e.hideTimeout||!b.ctrl!=u.ctrlKey&&!b.alt!=u.altKey&&!b.shift!=u.shiftKey&&!b.meta!=u.metaKey)&&e.bar.contains(h)&&(l.prefConfig.enableInInput||b.ctrl||b.alt||b.shift||b.meta||!Bb(document))){var L=(u.key||String.fromCharCode(u.keyCode)).toLowerCase();if(w==u.code||w==L)u.stopPropagation(),sc&&(D=sc),v?h.dispatchEvent(new CustomEvent("showTips")):!1===await z()||e.customInput||h.click()}}));let E;"0"!=a&&(a?E=a:!c&&y?E=b.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):
/^showTips:https?:\/\//.test(b.url)&&(E=b.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")));E&&(B.onload=u=>{h.classList.remove("search-jumper-word");Q.parentNode&&!l.prefConfig.showEngineWords&&Q.parentNode.removeChild(Q);B.style.display=""},/^data:/.test(E)?B.dataset.src=E:(a=l.prefConfig.cacheSwitch&&ta[E],"fail"===a?h.dataset.current&&-1!=E.indexOf(location.host)&&(B.dataset.src=E,ta[E]="",c||setTimeout(()=>{pc(B)},0)):a?B.dataset.src=a:(B.dataset.src=
E,c||ta[E]||Ra.push(B))));y&&(d?(h.setAttribute("target","_blank"),h.dataset.target=1):h.setAttribute("target","_self"));let F=b.url,Z=tb.test(F);Z&&(h.dataset.txt=!0);/%[tb]\b/i.test(F)&&(h.dataset.link=!0);let S,H=async u=>{e.customInput=!1;F=b.url;S="";let L=u||e.searchJumperInputKeyWords.value||Pa();L||ub||e.bar.classList.contains("search-jumper-isTargetLink")||(L=gb());L&&!u&&(L!=Fa&&(e.keywordIndex=0,y&&(Fa=L,O.setItem("cacheKeywords",L))),S=L);let T;if(W||/^c(opy)?:|^paste:/.test(F))-1!==F.indexOf("%input{")&&
(F=await new Promise(P=>{e.showCustomInputWindow(F,ma=>{P(ma)})}),h.dataset.url=""),T=F.match(/#p{([\s\S]*[^\\])}/);let ha=location.host,U=location.href,da=(P,ma,aa,la)=>{if(-1!==P.indexOf(ma+"[")){let Ba=P.match(Vb(ma,"","\\[(.*?)(\\|(.+))?\\]")),qa;if(Ba){Ba[3]?qa=aa.split(Ba[3]):(qa=aa.split(/[\n\r]/),1===qa.length&&(qa=aa.split(" ")));e.keywordIndex||(e.keywordIndex=0);switch(Ba[1]){case "all":S=qa.join("\n");break;case "":aa=qa[e.keywordIndex];++e.keywordIndex>=qa.length&&(e.keywordIndex=0);
break;case "-1":0>--e.keywordIndex&&(e.keywordIndex=qa.length-1);aa=qa[e.keywordIndex];break;default:aa=qa[parseInt(Ba[1])||0]}P=P.replace(Ba[0],ma)}}return qc(P,ma,aa,la)},ja=!/^showTips:h/i.test(F)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(F),Va="",Ka="",ua="",Ob="",Gc="",Hc=P=>{P=da(P,"%su",Va);P=da(P,"%sl",Ka);P=da(P,"%sr",ua);P=da(P,"%S",Fa||ua);P=da(P,"%ss",Ob);P=da(P,"%st",Gc);P=da(P,"%se",escape?escape(ua):ua);P=da(P,"%s",ua,ma=>ja?ma:encodeURIComponent(ma));if(/%bd\b/.test(P))try{let ma=
atob(ua);P=da(P,"%bd",ma)}catch(ma){console.log(ma)}if(/%be\b/.test(P))try{let ma=btoa(ua);P=da(P,"%be",ma)}catch(ma){console.log(ma)}return P};if(!h.dataset.url){var ib=F;W&&(ib=ib.replace(T[0],""));h.dataset.url=ib.replace(/%e\b/g,document.characterSet).replace(/%c\b/g,jc?"mobile":"pc")}let ya="";ib="";let Ic=S||document.title,jb="",ka=(P=>{let ma=P.match(/%element{(.*?)}(\.prop\((.*?)\))?/),aa=0;for(;ma&&!(100<aa++);){var la=ma[1],Ba=ma[3],qa="";if(la)(la=xb(la))&&(qa=Ba?la.getAttribute(Ba)||la[Ba]:
la.innerText);else try{var cb=window.getSelection(),Aa=document.createElement("div");for(let sa=0,Ua=cb.rangeCount;sa<Ua;++sa)Aa.appendChild(cb.getRangeAt(sa).cloneContents());[].forEach.call(Aa.querySelectorAll("style,script,svg,canvas"),sa=>{let Ua=document.createTextNode("");sa.parentNode.replaceChild(Ua,sa)});document.body.appendChild(Aa);if(Ba)for(la=0;la<Aa.childNodes.length;la++){let sa=Aa.childNodes[la];3==sa.nodeType?(qa+=sa.nodeValue,qa+="\n"):1==sa.nodeType&&(qa+=sa.getAttribute(Ba)||sa[Ba]||
"",qa+="\n")}else[].forEach.call(Aa.querySelectorAll("img"),sa=>{if(sa.src){var Ua=document.createTextNode(` ![${(sa.alt||"").replace(/[\n\r]/g," ").trim()}](${sa.src||""}) `);sa.parentNode.replaceChild(Ua,sa)}}),[].forEach.call(Aa.querySelectorAll("a"),sa=>{if(sa.href){var Ua=(sa.innerText||"").replace(/[\n\r]+/g,"\n").trim();if(Ua){Ua=` [${Ua}](${sa.href||""}) `;if(-1==Ua.indexOf("\n"))var Jc=document.createTextNode(Ua);else Jc=document.createElement("pre"),Jc.innerHTML=ba(Ua);sa.parentNode.replaceChild(Jc,
sa)}}}),qa=Aa.innerText;qa&&=qa.replace(/[\n\r]\s*/g,"\n");document.body.removeChild(Aa)}catch(sa){console.error(sa)}P=da(P,ma[0],ja?qa:encodeURIComponent(qa));ma=P.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}ma=P.match(/%date({(.*?)})?/);aa=0;for(Ba=(new Date).getTime();ma&&!(100<aa++);){qa=ma[2];cb=Ba;if(qa)for(qa=qa.replace(/\s/g,""),Aa=qa.match(/(\D*)?(\d+)/);Aa;){switch(Aa[1]){case "-":cb-=parseInt(Aa[2]);break;case "*":cb*=parseInt(Aa[2]);break;case "/":Aa[2]&&"0"!=Aa[2]&&(cb=parseInt(cb/parseInt(Aa[2])));
break;default:cb+=parseInt(Aa[2])}qa=qa.replace(Aa[0],"");Aa=qa.match(/(\D*)?(\d+)/)}else cb=Ba;P=P.replace(ma[0],cb);ma=P.match(/%date({(.*?)})?/)}return P})(h.dataset.url);if(D&&D.nodeName){ib=(ya=D.href||D.parentNode&&D.parentNode.href||"")||D.parentNode&&D.parentNode.parentNode&&D.parentNode.parentNode.href||"";(f.selectImg||f.selectAudio||f.selectVideo)&&D.src&&(ya=D.src);if("VIDEO"==D.nodeName.toUpperCase()||"AUDIO"==D.nodeName.toUpperCase()){if(!ya){var La=D.querySelector("source");La&&(ya=
La.src)}ya&&=ya.replace(/^blob:/,"")}Ic=D.title||D.alt||document.title;"IMG"==D.nodeName.toUpperCase()&&/%i\b/.test(F)?D.src&&(/^data/.test(D.src)?jb=D.src:(e.tipsPos(h,"<span class='loader'></span><font>Loading...</font>"),jb=await Sc(D)),ka=ka.replace(/%i\b/g,jb)):("A"==D.nodeName.toUpperCase()||D.parentNode&&"A"==D.parentNode.nodeName.toUpperCase())&&Z&&!L&&D.textContent.trim()&&(L=D.textContent.trim())}for(;-1!==ka.indexOf("%template{");){La=ka.match(/%template{(.*?[^\\])}/);if(!La)return!1;var db=
La[1];l.prefConfig.templateData||(l.prefConfig.templateData={});let P=l.prefConfig.templateData[db];if(!P)if(!e.stopInput&&(P=window.prompt(C("template",db))||""))l.prefConfig.templateData[db]=P,O.setItem("searchData",l);else return!1;ka=ka.replace(La[0],P)}for(;-1!==ka.indexOf("%input{");){La=ka.match(/%input{(.*?[^\\])}/);if(!La)return!1;e.customInput=!0;if(e.stopInput)return!1;if(e.batchOpening){db=0===La[1].indexOf('"')&&-1!==La[1].indexOf('","')?La[1].substr(1,La[1].length-2).split('","'):La[1].split(",");
db=2===db.length?window.prompt(db[0],db[1]):window.prompt(La[1]);if(null===db)return!1;ka=ka.replace(La[0],db)}else break}ya&&=ya.replace(/%(\w{2})/g,(P,ma)=>`%${ma.toUpperCase()}`);ib&&=ib.replace(/%(\w{2})/g,(P,ma)=>`%${ma.toUpperCase()}`);let zb=ya.replace(/^https?:\/\//i,"");L||=na&&Fa;try{if("undefined"!==typeof navigator.clipboard.readText&&(!L&&Z&&(L=await navigator.clipboard.readText())&&!u&&(S=L),!jb&&/%i\b/.test(F))){if("denied"!==(await navigator.permissions.query({name:"clipboard-read"})).state){const P=
await navigator.clipboard.read();for(const ma of P)if(ma.types.includes("image/png")){const aa=await ma.getType("image/png");(jb=await new Promise(la=>{const Ba=new FileReader;Ba.onload=function(qa){la(qa.target&&qa.target.result)};Ba.readAsDataURL(aa)}))&&(ka=ka.replace(/%i\b/g,jb))}}if(!jb){e.customInput=!0;let P=window.prompt(C("targetUrl"),"https://www.google.com/favicon.ico");if(P)e.tipsPos(h,"<span class='loader'></span><font>Loading...</font>"),jb=await Tb(P);else return!1}}}catch(P){console.error(P.message)}if(!L&&
Z){e.customInput=!0;if(e.con.classList.contains("search-jumper-showall")||e.inInput||v||e.stopInput)return!1;u=window.prompt(C("keywords"));if(null===u)return!1;Wa=u;setTimeout(()=>{Wa=""},1);ua=L=u;Va=ua.toUpperCase();Ka=ua.toLowerCase();Ob=va.tc2sc?va.tc2sc(ua):ua;Gc=va.sc2tc?va.sc2tc(ua):ua;ja||(L=encodeURIComponent(L));ka=Hc(ka)}else!L||Va||Ka||ua||(ua=L,Va=ua.toUpperCase(),Ka=ua.toLowerCase(),Ob=va.tc2sc?va.tc2sc(ua):ua,Gc=va.sc2tc?va.sc2tc(ua):ua,ja||(L=encodeURIComponent(L)));if(""===ya)if(u=
Pa()||e.searchJumperInputKeyWords.value,!Z&&u&&/^(http|ftp)/i.test(u))ya=u,ya=ya.replace(/%(\w{2})/g,(P,ma)=>`%${ma.toUpperCase()}`);else{let P=!1;u=()=>{if(e.stopInput||v)return!1;!1===P&&(P=window.prompt(C("targetUrl"),"https://www.google.com/favicon.ico"))&&(P=P.replace(/%(\w{2})/g,(ma,aa)=>`%${aa.toUpperCase()}`),D={src:P});return null===P?!1:!0};if(/%t\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=da(ka,"%t",P)}if(/%T\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=ka.replace(/%T\b/g,
encodeURIComponent(P))}if(/%\u03c4\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=ka.replace(/%\u03c4\b/g,encodeURIComponent(encodeURIComponent(P)))}if(/%b\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=ka.replace(/%b\b/g,P.replace(/^https?:\/\//i,""))}if(/%B\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=ka.replace(/%B\b/g,encodeURIComponent(P.replace(/^https?:\/\//i,"")))}if(/%\u03b2\b/.test(ka)){e.customInput=!0;if(!1===u())return!1;ka=ka.replace(/%\u03b2\b/g,encodeURIComponent(encodeURIComponent(P.replace(/^https?:\/\//i,
""))))}}let Kc=ha;!ib&&!ya||h.dataset.link||(U=ib||ya,Kc=U.replace(/^\w+:\/\/([^\/]+).*/,"$1"));if(W){let P=[],ma=!1;T[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(aa=>{aa=aa.trim();if(/^loopStart\(\d+\)$/.test(aa)){var la=aa.match(/loopStart\((.*)\)/);P.push(["@loopStart",la[1]])}else if("loopEnd"==aa)P.push(["@loopEnd",""]);else if(aa.startsWith("click(")&&aa.endsWith(")"))(la=aa.slice(6,aa.length-1))&&P.push(["@click",la.replace(/\\([=&])/g,"$1").trim()]);else if(aa.startsWith("dblclick(")&&
aa.endsWith(")"))(la=aa.slice(9,aa.length-1))&&P.push(["@dblclick",la.replace(/\\([=&])/g,"$1").trim()]);else if(aa.startsWith("rclick(")&&aa.endsWith(")"))(la=aa.slice(7,aa.length-1))&&P.push(["@rclick",la.replace(/\\([=&])/g,"$1").trim()]);else if(aa.startsWith("copy(")&&aa.endsWith(")"))(la=aa.slice(5,aa.length-1))&&P.push(["@copy",la.replace(/\\([=&])/g,"$1").trim()]);else if(aa.startsWith("call(")&&aa.endsWith(")")){if(la=aa.slice(5,aa.length-1))P.push(["@call",la.replace(/\\([=&])/g,"$1").trim()]),
ma=!0}else aa.startsWith("reload(")&&aa.endsWith(")")?(la=aa.slice(7,aa.length-1),P.push(["@reload",la.trim()])):aa.startsWith("wait(")&&aa.endsWith(")")?(la=aa.slice(5,aa.length-1),P.push(["@wait",la.replace(/\\([=&])/g,"$1").trim()])):aa.startsWith("open(")&&aa.endsWith(")")?(la=aa.slice(5,aa.length-1))&&P.push(["@open",la.replace(/\\([=&])/g,"$1").trim()]):/^sleep\(\d+\)$/.test(aa)?(la=aa.match(/sleep\((.*)\)/))&&P.push(["@sleep",la[1]]):(aa=aa.replace(/([^\\])=/g,"$1SJ^PARAM").replace(/\\([=&])/g,
"$1"),la=aa.split("SJ^PARAM"),2===la.length?(aa=la[0],la=Hc(la[1].replace(/\\([=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,jb).replace(/%c\b/g,jc?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(U)).replace(/%\u03c5\b/g,encodeURIComponent(encodeURIComponent(U))).replace(/%h\b/g,Kc).replace(/%T\b/g,encodeURIComponent(ya)).replace(/%\u03c4\b/g,encodeURIComponent(encodeURIComponent(ya))).replace(/%b\b/g,zb).replace(/%B\b/g,encodeURIComponent(zb)).replace(/%\u03b2\b/g,encodeURIComponent(encodeURIComponent(zb))).replace(/%n\b/g,
Ic)),la=da(la,"%t",ya),la=da(la,"%u",U),P.push([aa,la])):(aa.endsWith(".click()")||aa.endsWith(".click"))&&P.push(["@"+aa.replace(/\.click(\(\))?$/,""),"click"]))});ma&&e.updateCacheKeywords();if(""===ka||ka===location.href)return Ya=P,this.submitAction(P),!1;O.setListItem("inPagePostParams",ka.replace(/^https?:\/\/([^\/:]+).*/,"$1"),P)}ka=da(ka,"%h",Kc);ka=da(ka,"%t",ya);ka=da(ka,"%u",U);ka=Hc(ka.replace(/%U\b/g,encodeURIComponent(U)).replace(/%\u03c5\b/g,encodeURIComponent(encodeURIComponent(U))).replace(/%T\b/g,
encodeURIComponent(ya)).replace(/%\u03c4\b/g,encodeURIComponent(encodeURIComponent(ya))).replace(/%b\b/g,zb).replace(/%B\b/g,encodeURIComponent(zb)).replace(/%\u03b2\b/g,encodeURIComponent(encodeURIComponent(zb))).replace(/%n\b/g,Ic));d&&/^(https?|ftp):/.test(ka)?(h.setAttribute("target","_blank"),h.dataset.target=1):h.dataset.target=0;return ka},J,X=!1,V,ea,r,G,z=async u=>{delete h.href;u||={};V=u.altKey;ea=u.ctrlKey;r=u.metaKey;G=u.shiftKey;V||ea||r||G||(1==u.button||2==u.button?(V=!1,ea=!0,G=r=
!1):2===d?(V=!1,ea=!0,r=!1,G=!0):3===d?(V=!0,G=r=ea=!1):4===d&&(V=!1,ea=!0,G=r=!1));if(v)h.removeAttribute("target"),q&&(/^(https?|ftp):/.test(q)?(J=q,h.href=J,d?h.setAttribute("target","_blank"):h.setAttribute("target","_self")):(/^copy:/.test(q)&&(q=q.replace(/^copy:/,"")),pb(q))),h.dispatchEvent(new Event("actionOver"));else{X=!1;J="";J=await H();/^(https?|ftp):/.test(J)&&u.stopPropagation&&u.stopPropagation();if(/^c(opy)?:|^paste:/.test(b.url)||/^javascript:/.test(b.url)||/^\[/.test(b.url)||/[:%]P{/.test(b.url)||
b.charset&&"utf-8"!=b.charset||/[:%]p{/.test(b.url)){if(1==u.button||2==u.button)X=!0}else{if(!J){e.stopInput||(e.stopInput=!0,setTimeout(()=>{e.stopInput=!1},1));return}h.href=J}e.customInput&&J&&(X=!0);h.dispatchEvent(new Event("actionOver"));X&&(u.preventDefault&&u.preventDefault(),h.click())}},x=()=>{let u=Math.max(l.prefConfig.historyLength,20);var L=h.dataset.current;b.hideNotMatch||b.kwFilter||h.dataset.clone||h.dataset.paste||"0"===p||!u||L||O.getItem("historySites",T=>{$a=T||[];$a=$a.filter(ha=>
ha&&ha!=k);$a.unshift(k);$a.length>u&&($a=$a.slice(0,u));O.setItem("historySites",$a)});l.prefConfig.shiftLastUsedType&&!L&&(L=h.parentNode,L&&(L.classList.contains("search-jumper-targetAll")||L.classList.contains("search-jumper-targetImg")||L.classList.contains("search-jumper-targetAudio")||L.classList.contains("search-jumper-targetVideo")||L.classList.contains("search-jumper-targetLink")||L.classList.contains("search-jumper-targetPage")||L.classList.contains("search-jumper-needInPage"))||Kb==h.dataset.type||
(Kb=h.dataset.type,O.setItem("historyType",Kb)));l.prefConfig.sortType&&O.getItem("sortTypeNames",T=>{Ga=T||{};Ga[h.dataset.type]=Ga[h.dataset.type]?Ga[h.dataset.type]+1:1;O.setItem("sortTypeNames",Ga)});l.prefConfig.sortSite&&O.getItem("sortSiteNames",T=>{Ha=T||{};Ha[h.dataset.name]=Ha[h.dataset.name]?Ha[h.dataset.name]+1:1;O.setItem("sortSiteNames",Ha)})},K=(u,L)=>{pb(L);L=h;u||(e.appendBar(),e.closeOpenType(),e.con.style.display="",e.setFuncKeyCall(!0),L=window.getSelection().toString()?D||h:R(document));
e.tipsPos(L,C("copyOver"));clearTimeout(e.hideTips);e.hideTips=setTimeout(()=>{"1"==e.tips.style.opacity&&(e.tips.style.opacity=0)},1500)};h.addEventListener("mousedown",z,!0);h.addEventListener("mouseup",u=>{u.stopPropagation&&u.stopPropagation()},!0);h.addEventListener("click",u=>{u&&u.stopPropagation&&u.stopPropagation();D&&D.focus&&D.focus();if(v&&e.waitForShowTips)return ra(h,0),u&&u.preventDefault&&u.preventDefault(),!1;X=!0;if(!J)return u&&u.preventDefault&&u.preventDefault(),!1;u||={};var L=
/^(https?|ftp):/.test(J);e.batchOpening||c||x();if((1==l.prefConfig.multiline||2==l.prefConfig.multiline)&&S&&tb.test(h.dataset.url)&&-1!==S.indexOf("\n")&&!/^(c|show)/.test(h.dataset.url)&&(1==l.prefConfig.multiline||confirm(C("multiline")))){let U=S.split("\n");if(10<U.length&&!confirm(C("multilineTooMuch")))return;let da=0,ja=h.target;h.target="_blank";let Va=async()=>{J=await H(U[da++]);h.href=J;h.click();da<U.length?setTimeout(()=>{Va()},l.prefConfig.multilineGap||1E3):h.target=ja};Va();h.href=
"";u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();return!1}if(-1!==J.indexOf("%input{"))e.showCustomInputWindow(J,U=>{J=U;h.href=U;h.click()}),u.preventDefault&&u.preventDefault(),u.stopPropagation&&u.stopPropagation();else{var T=J.match(/^find(\.addto\((.*?)\))?:(.*)/);if(T){u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();let U=T[2];if(u=T[3])U&&l.prefConfig.inPageRule&&0!==U.indexOf("@")&&(U="@"+U),-1!==u.indexOf("%input{")?e.showCustomInputWindow(u,
da=>{U?e.addToHighlightGroup(da,U):(e.searchJumperInPageInput.value=da,e.submitInPageWords(),e.waitForHide(0))}):U?e.addToHighlightGroup(u,U):(e.searchJumperInPageInput.value=u,e.submitInPageWords(),e.waitForHide(0));return!1}if(/^javascript:/.test(b.url)){u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();va.targetElement=D;va.keywords=gb();J=J.replace(/^javascript:/,"");try{J=decodeURIComponent(J)}catch(U){}(/^[_a-zA-Z0-9]+$/.test(J)&&va[J]||new Fc(J))();return!1}if(/^c(opy)?:/.test(b.url))return u.preventDefault&&
u.preventDefault(),u.stopPropagation&&u.stopPropagation(),J&&(-1!==J.indexOf("%input{")?e.showCustomInputWindow(J,U=>{K(!0,U.replace(/^c(opy)?:/,""))}):K(u.isTrusted,J.replace(/^c(opy)?:/,""))),!1;if(/^paste:/.test(b.url)){T=!1;if(D&&/INPUT|TEXTAREA/i.test(D.nodeName)&&"true"!=D.getAttribute("aria-readonly"))T=!0;else for(var ha=D;ha&&!(T="true"==ha.contentEditable)&&"BODY"!=ha.nodeName.toUpperCase();)ha=ha.parentNode;if(T){if(!J)return!1;J=J.replace(/^paste:/,"");-1!==J.indexOf("%input{")?e.showCustomInputWindow(J,
U=>{Sb(D,U)}):J?Sb(D,J):"undefined"!==typeof navigator.clipboard.readText&&navigator.clipboard.readText().then(U=>{Sb(D,U)})}}else{if(/^\[/.test(b.url))return u.preventDefault&&u.preventDefault(),u.stopPropagation&&u.stopPropagation(),L=JSON.parse(b.url),e.batchOpen(L,{button:2,altKey:V||u.altKey,ctrlKey:ea||u.ctrlKey,shiftKey:G||u.shiftKey,metaKey:r||u.metaKey},1===d),!1;if(/[:%]P{/.test(b.url)){u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();if(!1===J)return!1;let U=
da=>{let ja=da.match(/[:%]P{(.*)}/),Va="";if(ja)if(da=da.replace(ja[0],""),ja=ja[1],'"'===ja.charAt(0)&&'"'===ja.charAt(ja.length-1))Va=ja.substring(1,ja.length-1);else{ja=new URLSearchParams(ja);let Ka={};ja.forEach((ua,Ob)=>{Ka[Ob]=ua});Va=JSON.stringify(Ka)}Na({method:"POST",url:da,data:Va,onload:Ka=>{oa(Ka)},onerror:Ka=>{Ea(C("postError")+(Ka.statusText||Ka.error))},ontimeout:Ka=>{Ea(C("postError")+(Ka.statusText||Ka.error))}})};-1!==J.indexOf("%input{")?e.showCustomInputWindow(J,da=>{U(da)}):
U(J);return!1}if(b.charset&&"utf-8"!=b.charset||/[:%]p{/.test(b.url)){if(!1===J)return!1;let U=b.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),da=ja=>{U?(O.setItem("postUrl",[ja,b.charset]),U=U[3],0!==U.indexOf("http")&&(U=ja.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+U)),ja=U):(O.setItem("postUrl",[ja,b.charset]),ja=ja.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,""));return ja};if(-1!==J.indexOf("%input{")){e.showCustomInputWindow(J,ja=>{if(ja=da(ja))h.href=ja,"_blank"===h.target?wa(h.href,{active:!0,
insert:!0}):location.href=h.href});u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();return}J=da(J);if(!J)return;h.href=J}}if(!G||ea||r||V||!u.isTrusted){if(/^(chrome|edge|about|extension|moz-extension)/.test(J))return u.preventDefault&&u.preventDefault(),u.stopPropagation&&u.stopPropagation(),ea?wa(J,{active:!1,insert:!0}):wa(J,{active:!0,insert:!0,close:"_blank"!==h.getAttribute("target")}),!1;if((V||ea||r||G)&&L){if((ea||r)&&G)wa(J,{incognito:!0});else if(ea||r)wa(J,{active:!1,
insert:!0});else if(V){if(b.match)for(L=b.match.replace(/\\/g,""),T=L.match(/\((www)\|([^\)\|]+)/);T;)J=J.replace(T[1],T[2]),L=L.replace(T[0],""),T=L.match(/\(([^\)\|]+)\|([^\)\|]+)/);L=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth;T=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight;ha=l.prefConfig.popupWidth;let U=l.prefConfig.popupHeight,da=l.prefConfig.popupLeft,ja=l.prefConfig.popupTop;U?(U=parseFloat(U),U*=T/100):U=Math.max(T/
3*2,T-250);ha?(ha=parseFloat(ha),ha*=L/100):ha=Math.min(L,650);da?(da=parseFloat(da),da=L/100*da-ha/2):da=L-ha-30;ja?(ja=parseFloat(ja),ja=T/100*ja-U/2):ja=(T-U)/2;e.closePopupWindow();e.popupWindow=window.open(J+"#searchJumperMin"+(/#p{/.test(b.url)?"Post":""),"_blank",`width=${ha}, height=${U}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${da}, top=${ja}`)}else G&&wa(J,{active:!0,insert:!0});u.preventDefault&&u.preventDefault();u.stopPropagation&&u.stopPropagation();
return!1}if(L&&"_blank"===h.getAttribute("target")&&!(V||ea||r||G)&&0===u.button)return wa(J,{active:!0,insert:!0}),u.preventDefault&&u.preventDefault(),u.stopPropagation&&u.stopPropagation(),!1}}},!0);h.addEventListener("auxclick",u=>{if(X&&u.preventDefault)return u.preventDefault(),!1},!0);h.addEventListener("contextmenu",u=>{if(X&&u.preventDefault)return u.preventDefault(),!1},!0);let M=h.dataset.name;w&&(M+=` (${b.ctrl?"Ctrl + ":""}${b.shift?"Shift + ":""}${b.alt?"Alt + ":""}${b.meta?"Meta + ":
""}${w.replace("Key","")})`);let N=!1,ca=!1,ia=async(u,L,T)=>{e.tipsPos(u,'<span class="loader"></span><font>Loading...</font>');ca=!1;if(L)try{L=L.replace(/^showTips:/,"");N=!0;let ha=await e.anylizeShowTips(L,h.dataset.name,u);N=!1;0==e.tips.style.opacity||0!==e.tips.innerHTML.indexOf('<span class="loader">')?ca=!0:(Array&&Array.isArray&&Array.isArray(ha)&&(q=ha[1],ha=ha[0]),ha&&("null"!=ha&&"No result"!=ha&&(ha=`<div>${ha}</div>`,ca=!0),e.tipsPos(u,ha),x(),setTimeout(()=>{e.tips.style.pointerEvents=
"all"},100)))}catch(ha){oa(ha)}},ra=async(u,L=1E3)=>{if(u&&1===u.nodeType&&(e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText=""),q=null,clearTimeout(e.requestShowTipsTimer),e.waitForShowTips=!1,e.tipsPos(u,M),v)){e.stopInput=!0;let T=await H();e.stopInput=!1;T&&e.lastUrl===T?N?e.tipsPos(u,"<span class='loader'></span><font>Loading...</font>"):ia(u,T):(e.waitForShowTips=!0,e.requestShowTipsTimer=setTimeout(async()=>{if(T=T||await H())-1!==T.indexOf("%input{")?e.showCustomInputWindow(T,
ha=>{T=ha;ia(u,T)}):(e.lastUrl=T,ia(u,T),e.waitForShowTips=!1)},L))}},I=!1;h.addEventListener("touchend",u=>{u.stopPropagation&&u.stopPropagation();v&&(I=!0,e.waitForShowTips=!0)},!1);let fa=u=>{if(!e.funcKeyCall&&!l.prefConfig.noAni){var L=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right"),T=[],ha=h.getBoundingClientRect();u=L?Math.abs(u.clientY-ha.top)/ha.height:Math.abs(u.clientX-ha.left)/ha.width;h.style.setProperty("--scale",1.1+.1);T.push(h);(L=h.previousElementSibling)&&
/^A$/i.test(L.nodeName)&&(L.style.setProperty("--scale",1.1+.1*(1-u)),T.push(L),(L=L.previousElementSibling)&&/^A$/i.test(L.nodeName)&&(L.style.setProperty("--scale",1+.1*(1-u)),T.push(L)));(L=h.nextElementSibling)&&/^A$/i.test(L.nodeName)&&(L.style.setProperty("--scale",1.1+.1*u),T.push(L),(L=L.nextElementSibling)&&/^A$/i.test(L.nodeName)&&(L.style.setProperty("--scale",1+.1*u),T.push(L)));e.dockerScaleBtns.forEach(U=>{-1===T.indexOf(U)&&U.style.setProperty("--scale",1)});e.dockerScaleBtns=T}};h.addEventListener("mouseenter",
u=>{u.stopPropagation&&u.stopPropagation();if(!ca||e.lastTips!==h||1!=e.tips.style.opacity){e.lastTips=h;if(v){if(I){I=!1;return}if(Z&&!e.searchJumperInputKeyWords.value&&!gb()){e.waitForShowTips=!0;e.tipsPos(h,M);return}}ra(h)}},!0);h.addEventListener("mousemove",u=>{fa(u);e.clingPos(h,e.tips)},!1);h.addEventListener("showTips",u=>{e.appendBar();e.closeOpenType();e.con.style.display="";e.setFuncKeyCall(!0);ra(D,0)},!1);h.addEventListener("mouseleave",u=>{ca||(e.tips.style.opacity=0,clearTimeout(e.requestShowTipsTimer))},
!1);h.addEventListener("drop",u=>{e.searchBySiteName(k,u)},!1);h.addEventListener("dragover",u=>{u.preventDefault()},!1);return h}closePopupWindow(){l.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let a=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(a)if(this.funcKeyCall=!1,a.onmouseup)a.onmouseup();else{let b=new PointerEvent("mouseup");a.dispatchEvent(b)}}addToHighlightGroup(a,b){let d=l.prefConfig.inPageRule[b];
if(d){let c=d.match(/^\/(.*)\/([il]*)$/);d=c?`/${c[1]}|${a}/${c[2]||""}`:`/${d}|${a}/`}else d=`/${a}/`;l.prefConfig.inPageRule[b]=d;O.setItem("searchData",l);this.refreshPageWords(this.lockWords)}streamUpdate(a){this.streamUpdateCallBack&&this.streamUpdateCallBack(a)}async anylizeShowTips(a,b,d){let c,f=this;try{const e=/([^\\]|^)([\+\-*/])([\d\.]+)$/,h=/\|cache=(\d+)$/,k=/%p(\{+)/,p=/#headers({.*?})/;var g=/#stream({(.*?)})?/;const v=/.then{(.*?)}/;a=a.replace(/^showTips:/,"").replace(/{name}/g,
b).trim();if(/^https?:/.test(a)){let q=a.split("\n");1==q.length&&(q=a.split(" "));q=q[0];a=a.replace(q,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let n=q.match(h);n?(n=parseInt(n[1]),q=q.replace(h,"")):n=7200;let m=Date.now()/1E3,w=hb.filter(Q=>m<Q.time?(c||Q.url!=q||(c=Q.data),!0):!1);w.length!=hb.length&&(hb=w,O.setItem("tipsStorage",hb));let t=[],y=(Q,B)=>{let E=a,F=!0;for(;B;){var Z=B[1].replace(/\\\|/g,
"\u3010searchJumperJsonSplit\u3011").split("|"),S=Z[0].replace(/\u3010searchJumperJsonSplit\u3011/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split(".");let H=Q,J=null;S.shift();S.forEach(X=>{if(J){let V=[];for(let ea=0;ea<J.length;ea++){let r=J[ea];r&&=Array.isArray(r)?r.at?r.at(X):r[X]:r[X];V.push(r)}J=V}else if(H&&(Array.isArray(H)?"all"===X?J=H:H=H.at?H.at(X):H[X]:H=H[X]),!H)return null});J&&(H=J.join(""));if(1!=Z.length)if(Z=Z[1],S=Z.match(e)){let X=[];for(;S;)Z=Z.replace(e,
"$1"),X.unshift([S[2],S[3]]),S=Z.match(e);X.forEach(V=>{let ea=parseFloat(V[1]);switch(V[0]){case "+":H+=ea;break;case "-":H-=ea;break;case "*":H*=ea;break;case "/":H/=ea}});H=H.toFixed(2)}else S=Z.match(/^\/(.*)\/(\w?)$/),(Z=H.match(S?new RegExp(S[1],S[2]):new RegExp(Z)))&&(H=Z[1]);H?F=!1:H="";t.push(H);E=E.replace(B[0],H);B=E.match(/{(.*?)}/)}F&&console.log("Error:",Q);return E=E.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}")},W=a.match(/{(.*?)}/);if(c)W&&0===W[1].indexOf("json")&&
(a=a.replace(/\u3010SEARCHJUMPERURL\u3011/g,q),c=y(c,W),c=[c,"\n"+t.join(",")]);else{let Q,B=q.match(k),E={},F=q;if(B&&(B=q.match(new RegExp(`%p\{+(.*?)\}{${B[1].length}}`)))){let X=B[1];if(0===X.indexOf("%"))try{X=decodeURIComponent(X)}catch(V){}E.body=X;E.method="POST";F=F.replace(B[0],"")}let Z=q.match(p);if(Z){let X=Z[1];if(0===X.indexOf("%")||1===X.indexOf("%"))try{X=decodeURIComponent(X)}catch(V){}E.headers=JSON.parse(X);F=F.replace(Z[0],"")}b=!1;let S,H=W&&0===W[1].indexOf("json"),J=q.match(g);
if(J)E.responseType="stream",E.streamMode=J[2]||"concat",F=F.replace(J[0],""),c=await new Promise(X=>{E.onstream=V=>{if(H){V=V.json();if(!V)return;V=y(V,W)}else V=V.text;f.tipsPos(d,V);f.tips.style.pointerEvents="all";X&&X(V)};S=qb(F,E).then(V=>{a=a.replace(/\u3010SEARCHJUMPERURL\u3011/g,V.finalUrl);return H?V.json():V.text});S.then(V=>{if(V=H?V&&y(V,W):V)f.tipsPos(d,V),X&&X(V)})}),c||(c="No result",b=!0);else if(H)S=qb(F,E).then(X=>{a=a.replace(/\u3010SEARCHJUMPERURL\u3011/g,X.finalUrl);return X.json()}),
c=await S.then(X=>{if(!X)return null;Q=X;return y(X,W)}),c||(c="No result",b=!0),c=[c,"\n"];else{let X=!1,V=F.match(v);for(g=[];V;)g.push(V[1]),F=F.replace(V[0],""),V=F.match(v);for(S=qb(F,E).then(r=>{-1!=a.indexOf("\u3010SEARCHJUMPERURL\u3011")&&(a=a.replace(/\u3010SEARCHJUMPERURL\u3011/g,r.finalUrl),X=!0);return r.text()});g.length;){let r=g.shift(),G=await S.then(z=>{var x=document.implementation.createHTMLDocument("");x.documentElement.innerHTML=ba(z);z=xb(r,x);if(!z)return null;x=x.querySelector("base");
return Xc(z.getAttribute("href"),x?x.href:F)});if(G)S=qb(G).then(z=>z.text());else return"No result"}let ea;(c=await S.then(r=>{if(!a)return r;let G=document.implementation.createHTMLDocument("");G.documentElement.innerHTML=ba(r);ea=G.title;for(r=a;W;){let z="";if("title"==W[1])z=G.title;else{let x=W[1].split("|"),K=mc(x[0],G);if(K&&K.length)if(X=!0,1==x.length)z=K[0].innerText;else{let M=x[1],N=M.match(/\(.*?\)/g);N?[].forEach.call(K,ca=>{let ia=x[1];N.forEach(ra=>{"()"===ra?ia=ia.replace(ra,ca.innerText):
(M=ra.match(/\((.*)\)/)[1],ia=ia.replace(ra,ca.getAttribute(M)||ca[M]))});z+=ia}):z=K[0].getAttribute(M)||K[0][M]}}r=r.replace(W[0],z);W=r.match(/{(.*?)}/)}return X?r=r.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"):null}))?this.insertHistoryUrl(q,ea):(c="No result",b=!0);Q=c=[c,q]}b||(c=this.calcResult(c),hb.push({url:q,data:Q,time:Date.now()/1E3+n}),50<hb.length&&hb.shift(),O.setItem("tipsStorage",hb))}}else c=/\breturn\b/.test(a)?await (new Fc("fetch","storage","name",'"use strict";'+
a))(qb,O,b):a,c=this.calcResult(c),D&&D.href&&this.insertHistoryUrl(D.href,D.title||D.alt||D.innerText)}catch(e){oa(e)}return c}calcResult(a){let b="string"===typeof a,d=b?a:a[0];const c=/([\+\-*/])([\d\.]+)/;let f=d.match(/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/);if(f){let g=[],e=f[0],h=parseFloat(f[1]),k=f[2];for(f=k.match(c);f;)k=k.replace(f[0],""),g.push([f[1],f[2]]),f=k.match(c);g.forEach(p=>{let v=parseFloat(p[1]);switch(p[0]){case "+":h+=v;break;case "-":h-=v;break;case "*":h*=v;break;case "/":h/=
v}});h=h.toFixed(2);d=d.replace(e,h)}b?a=d:a[0]=d;return a}insertHistoryUrl(a,b){if(-1!==a.indexOf(location.host)){var d=location.href,c=document.title;va.history.pushState("",b,a);document.title=b;va.history.replaceState("",c,d);document.title=c}}checkScroll(a,b){if(!this.funcKeyCall&&"none"!=this.bar.style.display){var d=window.innerHeight||document.documentElement.clientHeight;this.bar.scrollWidth>(window.innerWidth||document.documentElement.clientWidth)||this.bar.scrollHeight>d?this.con.classList.contains("search-jumper-scroll")||
(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll"));if(!a){var c=this.bar.querySelector(".search-jumper-type.search-jumper-open");c&&("0px"===c.style.width&&(c.style.width="auto"),"0px"===c.style.height&&(c.style.height="auto"),c!=this.bar.firstElementChild&&setTimeout(()=>{c.scrollIntoView(b?{}:{behavior:"smooth"})},0))}}}reopenType(a){let b=
new PointerEvent("mouseup");if(a.parentNode.classList.contains("search-jumper-open"))if(a.onmouseup)a.onmouseup();else a.dispatchEvent(b);if(a.onmouseup)a.onmouseup();else a.dispatchEvent(b)}showInPage(a,b){if(!(this.contains(D)||this.inInput&&bb||!a&&this.funcKeyCall)){bb&&bb.parentNode||(bb=Ja(Nb),Xa||this.addToShadow(bb));var d=Pa();if(!(a&&d&&d.length<(l.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))){l.prefConfig.hidePopup&&(a=!1);if(!D)D=R(document);
else if(!(d||D==R(document)||"searchJumper"==D.className&&/^MARK$/i.test(D.nodeName))){for(var c=D,f;c&&c.nodeName&&!/^(img|audio|video|a)$/i.test(c.nodeName);){if(c.parentNode){if(/^(img|audio|video|a)$/i.test(c.parentNode.nodeName)){c=c.parentNode;break}(f=c.parentNode.querySelectorAll("audio,video"))&&1!==f.length&&(f=c.parentNode.querySelectorAll("img"));f&&1!==f.length&&(f=c.parentNode.querySelectorAll("a"));if(f&&1===f.length){f[0].scrollHeight&&2>c.scrollHeight/f[0].scrollHeight&&(c=f[0]);
break}}c=c.parentNode}c&&(D=c)}this.appendBar();var g=this;this.hideTimeout&&clearTimeout(this.hideTimeout);c=l.prefConfig.autoDelay||1E3;f=()=>{g.bar.classList.remove("search-jumper-isInPage");g.bar.classList.remove("search-jumper-isTargetImg");g.bar.classList.remove("search-jumper-isTargetAudio");g.bar.classList.remove("search-jumper-isTargetVideo");g.bar.classList.remove("search-jumper-isTargetLink");g.bar.classList.remove("search-jumper-isTargetPage");g.bar.classList.remove("initShow");g.hideTimeout=
null};l.prefConfig.autoHide&&(this.hideTimeout=setTimeout(f,c));this.bar.classList.remove("search-jumper-isInPage");this.bar.classList.remove("search-jumper-isTargetImg");this.bar.classList.remove("search-jumper-isTargetAudio");this.bar.classList.remove("search-jumper-isTargetVideo");this.bar.classList.remove("search-jumper-isTargetLink");this.bar.classList.remove("search-jumper-isTargetPage");this.bar.classList.remove("initShow");this.tips.style.opacity=0;this.tips.style.display="none";this.tips.style.transition=
"none";this.tips.innerHTML=ba("");setTimeout(()=>{this.bar.classList.add("initShow")},10);c=f="";if(d)if(this.bar.classList.add("search-jumper-isInPage"),"none"==this.bar.style.display||a)f="needInPage";else{if(d=this.bar.querySelector(".search-jumper-type.search-jumper-open"),!d||d.classList.contains("notmatch")||d.classList.contains("search-jumper-targetPage")||d.classList.contains("search-jumper-targetImg")||d.classList.contains("search-jumper-targetAudio")||d.classList.contains("search-jumper-targetVideo")||
d.classList.contains("search-jumper-targetLink"))f="needInPage"}else{1==D.children.length&&"A"===D.children[0].nodeName.toUpperCase()&&(D=D.children[0]);switch(D.nodeName.toUpperCase()){case "IMG":this.bar.classList.add("search-jumper-isTargetImg");f="targetImg";break;case "AUDIO":this.bar.classList.add("search-jumper-isTargetAudio");f="targetAudio";break;case "VIDEO":this.bar.classList.add("search-jumper-isTargetVideo");f="targetVideo";break;case "A":this.bar.classList.add("search-jumper-isTargetLink"),
f="targetLink"}(d=D.parentNode)&&"A"===d.nodeName.toUpperCase()&&(this.bar.classList.add("search-jumper-isTargetLink"),f?c="targetLink":f="targetLink");f||(this.bar.classList.add("search-jumper-isTargetPage"),f="targetPage");f||="targetAll"}"none"==this.bar.style.display&&(this.bar.style.display="");if(f){var e=this.bar.querySelector(`.search-jumper-${f}:not(.notmatch)>span`);var h=this.bar.querySelectorAll(`.search-jumper-${f}:not(.notmatch)>a>img`)}g.setFuncKeyCall(!1);e&&(!l.prefConfig.disableAutoOpen&&
!l.prefConfig.disableTypeOpen||a)&&(d=this.bar.querySelectorAll(`.search-jumper-${f}:not(.notmatch)>span:first-child`),[].forEach.call(d,k=>{k!==e&&g.reopenType(k)}),g.reopenType(e),g.insertHistory(e.parentNode),c&&(d=this.bar.querySelectorAll(`.search-jumper-${c}:not(.notmatch)>span:first-child`),[].forEach.call(d,k=>{k!==e&&g.reopenType(k)}),g.reopenType(e)));a||!l.prefConfig.disableAutoOpen&&!l.prefConfig.disableTypeOpen||this.closeOpenType();g.setFuncKeyCall(a);if(a){h&&[].forEach.call(h,p=>{"none"!=
p.parentNode.style.display&&p.dataset.src&&(p.src=p.dataset.src,delete p.dataset.src)});g.con.classList.remove("search-jumper-scroll");g.bar.style.cssText="";g.con.style.cssText="";a=window.innerWidth||document.documentElement.clientWidth;h=document.documentElement.scrollLeft||document.body.scrollLeft;d=window.innerHeight||document.documentElement.clientHeight;c=l.prefConfig.tileOffset||0;f=kd(b)-g.bar.clientWidth/2-("static"!==getComputedStyle(document.documentElement).position?document.documentElement.offsetLeft:
0);0>f?f=5:f+g.bar.clientWidth>a+h&&(f=a+h-g.bar.clientWidth-20);let k=ld(b);k=sb(b)>d/5?k-(g.bar.clientHeight+20+c):k+(20+c);rb(b)<a/2?(g.bar.style.left=f+h+"px",g.bar.style.transformOrigin="0 0"):(g.bar.style.right=a-f-g.bar.clientWidth-15+"px",g.bar.style.transformOrigin="100% 0");g.bar.style.top=k+"px";g.removeBar();g.bar.style.opacity=0;setTimeout(()=>{g.appendBar();setTimeout(()=>{g.bar.style.opacity=1;setTimeout(()=>{var p=document.querySelector("#saladict-saladbowl-root>.saladict-external");
p&&(p=p.shadowRoot.querySelector(".saladbowl"),p.style.transform=p.style.transform.replace(/\d+px\)/,`${b.clientY-15}px)`))},100)},1)},1)}else g.bar.style.display="",g.initPos()}}}setFuncKeyCall(a){this.funcKeyCall=a;this.con.classList.contains("search-jumper-showall")||(a?this.con.classList.add("funcKeyCall"):this.con.classList.remove("funcKeyCall"))}initPos(a,b,d,c){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText="");"undefined"===
typeof a&&(a=l.prefConfig.position.x);"undefined"===typeof b&&(b=l.prefConfig.position.y);"undefined"===typeof d&&(d=l.prefConfig.offset.x);"undefined"===typeof c&&(c=l.prefConfig.offset.y);let f=this,g=e=>{f.bar.style.cssText="";f.con.style.cssText="";f.con.className="search-jumper-searchBarCon "+e;if(l.prefConfig.resizePage)switch("undefined"==typeof f.initBodyStyle?f.initBodyStyle=R(document).style.cssText:R(document).style.cssText=f.initBodyStyle,f.con.classList.add("resizePage"),R(document).style.position=
"absolute",e){case "search-jumper-left":R(document).style.width=`calc(100vw - ${42*f.scale}px)`;R(document).style.right="0px";break;case "search-jumper-right":R(document).style.width=`calc(100vw - ${42*f.scale}px)`;R(document).style.left="0px";break;case "search-jumper-bottom":R(document).style.width="100%";R(document).style.height=`calc(100vh - ${42*f.scale}px)`;R(document).style.top="0px";R(document).style.overflow="auto";break;default:R(document).style.width="100%",R(document).style.height=`calc(100vh - ${42*
f.scale}px)`,R(document).style.bottom="0px",R(document).style.overflow="auto"}else l.prefConfig.autoHideAll&&f.con.classList.add("hideAll");let h=40*f.scale;setTimeout(()=>{let k=f.con.classList.contains("search-jumper-left")||f.con.classList.contains("search-jumper-right");xa.forEach(p=>{if(p.classList.contains("search-jumper-open")){let v=Math.max(p.scrollWidth,p.scrollHeight);v&&(v+="px",k?(p.style.width="",p.style.height=v):(p.style.width=v,p.style.height=""))}else k?(p.style.width="",p.style.height=
h+"px"):(p.style.width=h+"px",p.style.height="")})},1)};0>d&&(d=0);0>c&&(c=0);"center"==a&&"top"==b?(g(""),f.bar.style.position="relative"):"left"==a&&"top"==b?d>c?(g(""),f.bar.style.position="fixed",f.bar.style.left=d+"px"):(g("search-jumper-left"),f.bar.style.position="fixed",f.bar.style.top=c+"px"):"right"==a&&"top"==b?d>c?(g(""),f.bar.style.position="fixed",f.bar.style.right=d+"px"):(g("search-jumper-right"),f.bar.style.position="fixed",f.bar.style.top=c+"px"):"center"==a&&"bottom"==b?(g("search-jumper-bottom"),
f.bar.style.position="relative"):"left"==a&&"bottom"==b?d>c?(g("search-jumper-bottom"),f.bar.style.position="fixed",f.bar.style.left=d+"px",f.bar.style.bottom="0px",f.bar.style.top="unset"):(g("search-jumper-left"),f.bar.style.position="fixed",f.bar.style.bottom=c+"px"):"right"==a&&"bottom"==b?d>c?(g("search-jumper-bottom"),f.bar.style.position="fixed",f.bar.style.right=d+"px",f.bar.style.bottom="0px",f.bar.style.top="unset"):(g("search-jumper-right"),f.bar.style.position="fixed",f.bar.style.bottom=
c+"px"):"left"==a&&"center"==b?(g("search-jumper-left"),f.bar.style.position="relative",f.bar.style.marginTop=c+"px",f.con.style.display="flex",f.con.style.justifyContent="center"):"right"==a&&"center"==b&&(g("search-jumper-right"),f.bar.style.position="absolute",f.bar.style.marginTop=c+"px",f.con.style.display="flex",f.con.style.justifyContent="center",f.con.style.alignItems="flex-end");l.prefConfig.position.x=a;l.prefConfig.position.y=b;l.prefConfig.offset.x=d;l.prefConfig.offset.y=c;l.prefConfig.disableAutoOpen||
l.prefConfig.disableTypeOpen?f.checkScroll(!1,!0):setTimeout(()=>{let e=f.bar.querySelector(".search-jumper-type.search-jumper-open");e&&(e.style.transition="none",e.style.width="auto",e.style.height="auto",setTimeout(()=>{e.style.width=e.scrollWidth+"px";e.style.height=e.scrollHeight+"px";setTimeout(()=>{e.style.transition=""},1);f.checkScroll(!1,!0)},0))},251)}}class Md{constructor(){this.clickedIndex=0;this.signList=[];this.clickedEles={};this.exact=!0;this.accu=0;this.wheelScrolling=!1}getSelector(a,
b=!0){this.exact=b;this.close();this.toggle();this.callback=a}init(){if(!this.inited){this.inited=!0;var a=this;Ja("\n                 body.searchJumper-picker,\n                 body.searchJumper-picker *:hover,\n                 body.searchJumper-picker a:hover {\n                   cursor: crosshair !important;\n                 }\n                 .select-rect {\n                   position: fixed;\n                   z-index: 2147483647;\n                   background: none;\n                   border: 1px dashed rgba(120, 170, 210, 0.8);\n                 }\n                 .select-rect>.dot {\n                   width: 10px;\n                   height: 10px;\n                   border: 2px solid #000;\n                   border-radius: 50%;\n                   background-color: white;\n                   position: absolute;\n                 }\n                 .select-rect>.top-left {\n                   top: -5px;\n                   left: -5px;\n                 }\n                 .select-rect>.top-right {\n                   top: -5px;\n                   right: -5px;\n                 }\n                 .select-rect>.bottom-left {\n                   bottom: -5px;\n                   left: -5px;\n                 }\n                 .select-rect>.bottom-right {\n                   bottom: -5px;\n                   right: -5px;\n                 }\n                 .select-rect>.top {\n                   top: -5px;\n                   left: calc(50% - 5px);\n                 }\n                 .select-rect>.right {\n                   top: calc(50% - 5px);\n                   right: -5px;\n                 }\n                 .select-rect>.left {\n                   top: calc(50% - 5px);\n                   left: -5px;\n                 }\n                 .select-rect>.bottom {\n                   bottom: -5px;\n                   left: calc(50% - 5px);\n                 }\n                ");
var b=c=>{if(c)if(a.callback)c&&(c=a.geneSelector(c,a.exact),a.callback(c),a.close());else{var f=a.createSignDiv();a.clickedEles[a.clickedIndex]=c;a.appendSign(f,c,a.clickedIndex);a.clickedIndex++;A.con.classList.add("selectedEle")}},d;this.initSelectRect();this.mainSignDiv=this.createSignDiv();this.setImportant(this.mainSignDiv,"pointer-events","none");this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)");this.moveHandler=c=>{if(c.target!==document)if(a.inPicker&&c.preventDefault(),
a.rectSelecting)a.mainSignDiv.parentNode&&a.mainSignDiv.parentNode.removeChild(a.mainSignDiv),a.selectRect.parentNode||R(document).appendChild(a.selectRect),a.createSelectRect({x:c.clientX,y:c.clientY});else if(!a.creatingRect){let f=a.getTarget(c.target);a.mainSignDiv.parentNode!==f.parentNode&&f.parentNode.appendChild(a.mainSignDiv);a.adjustSignDiv(a.mainSignDiv,f);if(c.ctrlKey||c.metaKey)clearTimeout(d),d=setTimeout(()=>{let g=a.cleanTarget(c.target);b(g)},5)}};this.leaveHandler=c=>{a.mainSignDiv.parentNode&&
a.mainSignDiv.parentNode.removeChild(a.mainSignDiv)};this.clickHandler=c=>{a.inPicker&&(c.stopPropagation(),c.preventDefault());a.creatingRect||(a.rectSelecting?(a.selectRect.parentNode&&a.selectRect.parentNode.removeChild(a.selectRect),a.rectSelecting=!1,A.bar.classList.remove("rectSelecting")):(c=a.getTarget(c.target),b(c)))};this.mouseDownHandler=c=>{a.rectSelecting=!0;A.bar.classList.add("rectSelecting");a.rectInitPos={x:c.clientX,y:c.clientY};c.stopPropagation();c.preventDefault()};this.mouseUpHandler=
c=>{a.rectSelecting=!1;A.bar.classList.remove("rectSelecting");!a.creatingRect&&a.selectRect.parentNode&&(a.selectRect.parentNode.removeChild(a.selectRect),a.finishSelectRect(),c&&c.stopPropagation&&c.stopPropagation(),c&&c.preventDefault&&c.preventDefault())};this.wheelHandler=c=>{c.preventDefault();c.stopPropagation();if(!a.wheelScrolling){a.wheelScrolling=!0;setTimeout(()=>{a.wheelScrolling=!1},100);if("wheel"!==c.type){var f=0;if("number"==typeof c.axis)2==c.axis&&(f=c.detail);else if("undefined"==
typeof c.wheelDeltaY||0!=c.wheelDeltaY)f=-c.wheelDelta/40}else f=c.deltaY;0<f?a.accu--:a.accu++;0>a.accu?a.accu=0:8<a.accu&&(a.accu=8);c=a.getTarget(c.target);a.mainSignDiv.parentNode!==c.parentNode&&c.parentNode.appendChild(a.mainSignDiv);a.adjustSignDiv(a.mainSignDiv,c)}}}}initSelectRect(){this.waitToRemoveSigns=[];this.waitToAddSigns=[];let a=document.createElement("div");a.innerHTML=ba('\n                  <div class="dot top-left"></div>\n                  <div class="dot top-right"></div>\n                  <div class="dot bottom-left"></div>\n                  <div class="dot bottom-right"></div>\n                  <div class="dot top"></div>\n                  <div class="dot right"></div>\n                  <div class="dot left"></div>\n                  <div class="dot bottom"></div>\n                ');
a.className="select-rect";this.selectRect=a}createSelectRect(a){this.rectToPos=a;this.creatingRect||(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1;this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px";this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px";this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px";this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px";this.checkRectAndSign();this.rectSelecting||
this.mouseUpHandler()},100))}finishSelectRect(){let a=this;this.waitToRemoveSigns.forEach(b=>{a.removeSign(b)});this.waitToAddSigns.forEach(b=>{delete b.dataset.recttemp});this.waitToRemoveSigns=[];this.waitToAddSigns=[];this.signList.length?A.con.classList.add("selectedEle"):A.con.classList.remove("selectedEle")}checkRectAndSign(){if(this.domInfo){var a=this;this.waitToRemoveSigns.forEach(b=>{b.style.opacity=""});this.waitToRemoveSigns=[];this.signList.forEach(b=>{b=b[0];if(!b.dataset.recttemp){var d=
b.getBoundingClientRect(),c=a.selectRect.getBoundingClientRect();a.compareRect(d,c)?(b.style.opacity="0",a.waitToRemoveSigns.push(b)):b.style.opacity=""}});this.waitToAddSigns.forEach(b=>{a.removeSign(b)});this.waitToAddSigns=[];0===this.waitToRemoveSigns.length&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<
this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}}compareDomWithRect(a){if(a.children&&0<a.children.length){var b=0;for(let d=0;d<a.children.length;d++)this.compareDomWithRect(a.children[d])&&b++;if(b===a.children.length&&(b=a.target.getBoundingClientRect(),b.width&&b.height))return a.sign=!0}else if(this.compareRect(this.curRectInfo,
a.target.getBoundingClientRect()))return a.sign=!0;return a.sign=!1}signDomWithRect(a){if(a.sign){var b=this.createSignDiv();b.dataset.recttemp=1;a.target.parentNode.appendChild(b);this.adjustSignDiv(b,a.target);this.signList.push([b,a.target]);this.waitToAddSigns.push(b)}else if(a.children&&0<a.children.length)for(b=0;b<a.children.length;b++)this.signDomWithRect(a.children[b])}compareRect(a,b){return b.width&&b.height&&a.left<=b.right&&a.right>=b.left&&a.top<=b.bottom&&a.bottom>=b.top}cleanTarget(a){if(!a||
"searchJumperSign"==a.className)return null;a=this.getTarget(a);if(!a)return null;for(let b in this.clickedEles){let d=this.clickedEles[b];try{if(d==a||d.contains(a)||a.contains(d))return null}catch(c){return null}}return a}appendSign(a,b,d){b.dataset&&(b.dataset.signNum=parseInt(b.dataset.signNum||0)+1);a.dataset.target=d;b.parentNode.appendChild(a);this.adjustSignDiv(a,b);this.signList.push([a,b])}removeSign(a){a.parentNode&&a.parentNode.removeChild(a);for(var b=0;b<this.signList.length;b++)if(this.signList[b][0]===
a){this.signList.splice(b,1);break}a=a.dataset.target;if(b=this.clickedEles[a]){var d=parseInt(b.dataset.signNum||0)-1;b.dataset.signNum=d;0>=d&&delete this.clickedEles[a]}}getTarget(a){let b=this.accu;for(;a&&b;){let d=a.parentNode;if(!d)break;a=d;b--}for(;a.parentNode&&(0===a.offsetWidth||0===a.offsetHeight);)a=a.parentNode;return a}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=
!1),this.domInfo=this.callback=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),R(document).classList.remove("searchJumper-picker"),A.con.classList.remove("selectedEle"),A.con.removeEventListener("mouseenter",this.leaveHandler,!0),R(document).removeEventListener("mousemove",this.moveHandler,!0),R(document).removeEventListener("click",this.clickHandler,!0),R(document).removeEventListener("mousedown",this.mouseDownHandler,
!0),R(document).removeEventListener("mouseup",this.mouseUpHandler,!0),R(document).removeEventListener(Fb(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(a,b,d){a.style.setProperty(b,d,"important")}createSignDiv(){let a=document.createElement("div");this.setImportant(a,"position","absolute");this.setImportant(a,"z-index","2147483647");this.setImportant(a,"background","rgba(120, 170, 210, 0.6)");this.setImportant(a,"transition","all 0.15s ease-out");this.setImportant(a,"box-shadow",
"rgb(0 0 0) 0px 0px 3px 0px");this.setImportant(a,"cursor","pointer");a.className="searchJumperSign";a.addEventListener("mouseenter",b=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0);a.addEventListener("mousedown",b=>{b.stopPropagation();b.preventDefault();this.removeSign(a)},!0);return a}adjustSignDiv(a,b){this.setImportant(a,"width",b.offsetWidth+"px");this.setImportant(a,"height",b.offsetHeight+"px");let d=b.offsetLeft,c=b.offsetTop;if(b.offsetParent&&
a.offsetParent&&b.offsetParent!==a.offsetParent){let f=a.offsetParent.getBoundingClientRect();b=b.offsetParent.getBoundingClientRect();d+=b.left-f.left;c+=b.top-f.top}this.setImportant(a,"left",d+"px");this.setImportant(a,"top",c+"px")}geneSelector(a,b){let d=a.nodeName.toLowerCase();if("html"!==d&&"body"!==d)if(b&&a.id&&/^[a-z\-_][\w\-_]+$/i.test(a.id))d="#"+a.id;else{if(a.className){let f=a.classList.length;d+=[].map.call(a.classList,g=>/^[a-z][\w]+$/i.test(g)||3>f&&/^[a-z\-_][\w\-_]+$/i.test(g)?
"."+g:"").join("")}let c=a.parentElement;if(c&&(d=this.geneSelector(c,!!b)+" > "+d,b&&1<c.children.length&&!/^HTML$/i.test(c.nodeName))){let f=0,g=0;for(b=0;b<c.children.length&&!(c.children[b].nodeName==a.nodeName&&(g++,c.children[b]==a&&(f=g),0<f&&1<g));b++);d+=1==g?"":`:nth-of-type(${f})`}}return d}copy(){let a="",b="";this.signList.forEach(f=>{b+="\n"+f[1].innerText;a+=f[1].outerHTML});b=b.trim();const d=new Blob([a],{type:"text/html"}),c=new Blob([b],{type:"text/plain"});try{const f=new ClipboardItem({"text/html":d,
"text/plain":c});navigator.clipboard.write([f]).then(()=>{Ea("Copied successfully!")},g=>{pb(b);console.log(g)})}catch(f){pb(b)}}openLinks(){if(window.confirm(C("batchOpenConfirm"))){var a=[];this.signList.forEach(b=>{b=b[1];b.href?/^(http|ftp)/i.test(b.href)&&-1===a.indexOf(b.href)&&a.push(b.href):b.parentNode&&b.parentNode.href?/^(http|ftp)/i.test(b.parentNode.href)&&-1===a.indexOf(b.parentNode.href)&&a.push(b.parentNode.href):b.querySelectorAll&&[].forEach.call(b.querySelectorAll("a[href]"),d=>
{/^(http|ftp)/i.test(d.href)&&-1===a.indexOf(d.href)&&a.push(d.href)})});a.forEach(b=>{wa(b,{active:!1,insert:!0})})}}getPickerStr(){if(!this.inPicker)return"";let a="";this.signList.forEach(b=>{a+="\n"+b[1].innerText});return a.trim()}expand(){let a=this;this.clearSigns();Object.keys(this.clickedEles).forEach(b=>{let d=a.clickedEles[b],c=a.geneSelector(d);d.dataset.signNum=0;[].forEach.call(document.querySelectorAll(c),f=>{let g=a.createSignDiv();R(document).appendChild(g);a.appendSign(g,f,b)})})}collapse(){let a=
this;this.clearSigns();Object.keys(this.clickedEles).forEach(b=>{let d=a.clickedEles[b];d.dataset.signNum=0;let c=a.createSignDiv();R(document).appendChild(c);a.appendSign(c,d,b)})}clearSigns(){this.signList.forEach(a=>{a=a[0];a.parentNode&&a.parentNode.removeChild(a)});this.signList=[]}processNode(a,b){const d={};d.target=a;d.children=[];if(a.nodeType===Node.ELEMENT_NODE){var c=window.getComputedStyle(a);if("none"===c.display&&"hidden"===c.visibility||""===a.innerHTML.trim())return null}else if(a.nodeType!==
Node.TEXT_NODE||""===a.textContent.trim())return null;c=a.childNodes;if(0<c.length){d.target=a;b.children.push(d);for(var f of c)f.nodeType!==Node.ELEMENT_NODE&&f.nodeType!==Node.TEXT_NODE||this.processNode(f,d)}else if(a.nodeType===Node.TEXT_NODE){var g=a.textContent.split("\n");f=document.createRange();f.selectNodeContents(a);c=0;let e=a.parentNode,h=e.getBoundingClientRect();for(const k of g){if(""===k.trim()){c+=k.length+1;continue}f.setStart(a,c);c+=k.length;f.setEnd(a,c);c++;g=f.getBoundingClientRect();
let p=g.left-h.left,v=g.top-h.top,q=g.width,n=g.height;b.children.push({target:{innerText:k,outerHTML:k,parentNode:e,offsetLeft:p+e.offsetLeft,offsetTop:v+e.offsetTop,offsetWidth:q,offsetHeight:n,getBoundingClientRect:()=>{let m=e.getBoundingClientRect();return{left:m.left+p,top:m.top+v,right:m.left+p+q,bottom:m.top+v+n,width:q,height:n}}}})}}else a.nodeType===Node.ELEMENT_NODE&&(d.target=a,b.children.push(d));return d}toggle(a){this.init();this.inPicker?this.close():(this.rectSel=!!a,a?(this.domInfo=
this.processNode(R(document),{children:[]}),R(document).addEventListener("mousedown",this.mouseDownHandler,!0),R(document).addEventListener("mouseup",this.mouseUpHandler,!0)):R(document).addEventListener(Fb(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,R(document).classList.add("searchJumper-picker"),A.con.addEventListener("mouseenter",this.leaveHandler,!0),R(document).addEventListener("mousemove",this.moveHandler,!0),R(document).addEventListener("click",this.clickHandler,
!0))}}const Ca=new Md;let mb=!1,ub=!1,Eb="";var za;class Nd{constructor(){this.inited=!1}init(){if(!this.inited){this.inited=!0;var a=this;this.openList=[];this.filterCss="\n                    #searchJumperFilter {\n                        width: 100%;\n                        height: 100%;\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        z-index: 100000;\n                        background-color: rgba(255, 255, 255, 0.1);\n                        backdrop-filter: blur(10px);\n                        -webkit-backdrop-filter: blur(5px);\n                        transform: translateZ(0);\n                    }\n                    .searchJumperFrame-body {\n                        width: 350px;\n                        text-align: left;\n                        background-color: #ffffff;\n                        border: 1px solid #afb3b6;\n                        border-radius: 10px;\n                        opacity: 0.95;\n                        filter: alpha(opacity=95);\n                        box-shadow: 5px 5px 20px 0px #000;\n                        color: #6e7070;\n                        transition: all 0.25s ease;\n                        border: 0;\n                        font-size: initial;\n                    }\n                    .searchJumperFrame-title {\n                        background: #458bd1!important;\n                        display: flex!important;\n                        align-items: center!important;\n                        justify-content: center!important;\n                        color: white!important;\n                        font-weight: bold;\n                        font-size: 18px!important;\n                        border-radius: 10px 10px 0 0!important;\n                    }\n                    .searchJumperFrame-title>img {\n                        margin: 5px;\n                        height: 32px;\n                        width: 32px;\n                    }\n                    .searchJumperFrame-buttons {\n                        text-align: center;\n                        margin: 5px;\n                        display: flex;\n                        justify-content: space-evenly;\n                    }\n                    .searchJumperFrame-buttons>button {\n                        width: 32%;\n                        font-size: 16px;\n                        cursor: pointer;\n                        border: 1px solid #1976d2;\n                        border-radius: 4px;\n                        transition: all .3s;\n                        color: #fff;\n                        background-color: #458bd1;\n                        line-height: 25px;\n                        padding: 3px;\n                    }\n                    .searchJumperFrame-buttons>button:hover {\n                        color: #e3f2fd;\n                    }\n                    .searchJumperFrame-body>.sitesCon {\n                        max-height: 70vh;\n                        overflow: auto;\n                        width: 100%;\n                        border-top: 1px solid rgba(0, 0, 0, 0.23);\n                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);\n                        padding: 5px;\n                        user-select: none;\n                        white-space: nowrap;\n                    }\n                    .searchJumperFrame-body>.sitesCon>details>summary>span,\n                    .searchJumperFrame-body>.sitesCon>details>div>span {\n                        line-height: 25px;\n                        overflow: hidden;\n                        text-overflow: ellipsis;\n                        max-width: 180px;\n                        display: inline-block;\n                        vertical-align: middle;\n                    }\n                    .searchJumperFrame-body>.sitesCon>details>summary>button {\n                        display: none;\n                        position: absolute;\n                    }\n                    .searchJumperFrame-body>.sitesCon>details>summary:hover>button {\n                        display: inline-block;\n                    }\n                    .searchJumperFrame-body>.sitesCon input {\n                        margin: 2px 5px;\n                        width: 20px;\n                        height: 20px;\n                        vertical-align: sub;\n                    }\n                    .searchJumperFrame-body>.sitesCon div {\n                        margin-left: 32px;\n                    }\n                    .searchJumperFrame-body>.sitesCon div.exist {\n                        text-decoration:line-through;\n                    }\n                    @media (prefers-color-scheme: dark) {\n                      .searchJumperFrame-body,\n                      .searchJumperFrame-input-title,\n                      .searchJumperFrame-inputs>input,\n                      .searchJumperFrame-inputs>textarea,\n                      .searchJumperFrame-inputs>select,\n                      .searchJumperFrame-body select {\n                        background-color: black;\n                        color: #d5d5d5;\n                      }\n                      .searchJumperFrame-title,\n                      .searchJumperFrame-buttons>button {\n                        background: #245d8f!important;\n                      }\n                    }\n                ";
this.filterCssEle=Ja(this.filterCss);this.filterFrame=document.createElement("div");this.filterFrame.id="searchJumperFilter";this.filterFrame.innerHTML=ba(`
                <div class="searchJumperFrame-body">
                    <a href="${Oa}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg=="}" />${C("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${C("expandAll")}</button>
                        <button id="collapseAll" type="button">${C("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${C("siteCancel")}</button>
                        <button id="selectAll" type="button">${C("selectAll")}</button>
                        <button id="add" type="button">${C("import")}</button>
                    </div>
                </div>
                `);this.sitesCon=this.filterFrame.querySelector(".sitesCon");var b=this.filterFrame.querySelector("#add"),d=this.filterFrame.querySelector("#selectAll"),c=this.filterFrame.querySelector("#expandAll"),f=this.filterFrame.querySelector("#collapseAll"),g=!1;c.addEventListener("click",e=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),h=>{h.setAttribute("open","open")})});f.addEventListener("click",e=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),h=>{h.removeAttribute("open")})});
d.addEventListener("click",e=>{g=!g;[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),h=>{h.checked=g})});b.addEventListener("click",e=>{za||Qb(()=>{let h=!1;[].forEach.call(this.filterFrame.querySelectorAll("details"),k=>{let p=k.children[0].children[0],v=a.typeDict[p.title];v.type=p.innerText.trim();v.sites=[];[].forEach.call(k.querySelectorAll('div>[type="checkbox"]'),q=>{if(q.checked){h=!0;let n=a.siteDict[q.parentNode.title];q=q.nextElementSibling;n&&q&&("0"===q.value?
v.sites.push(n):(q=a.searchType(q.value),l.sitesConfig[q].sites.push(n)))}});v.sites.length&&(k=a.searchType(v.type),!1===k?l.sitesConfig.push(v):l.sitesConfig[k].sites=l.sitesConfig[k].sites.concat(v.sites))});h&&(l.lastModified=(new Date).getTime(),O.setItem("searchData",l),Ea(C("siteAddOver")),A.refreshEngines(),this.close())})});this.filterFrame.addEventListener("click",e=>{"searchJumperFilter"!=e.target.id&&"cancel"!=e.target.id||this.close()})}}searchType(a){for(let b=0;b<l.sitesConfig.length;b++)if(l.sitesConfig[b].type==
a)return b;return!1}searchUrl(a){for(let b=0;b<l.sitesConfig.length;b++){let d=l.sitesConfig[b].sites;for(let c=0;c<d.length;c++)if(d[c].url.replace(/^https?/,"")==a.replace(/^https?/,""))return!0}return!1}searchName(a){for(let b=0;b<l.sitesConfig.length;b++){let d=l.sitesConfig[b].sites;for(let c=0;c<d.length;c++)if(d[c].name==a)return this.searchName(a+"_1")}return a}anylizeType(a){let b=this,d=document.createElement("details");var c=document.createElement("summary");let f=document.createElement("span");
f.title=a.type;f.innerText=a.type;c.appendChild(f);let g=document.createElement("input");g.type="checkbox";c.appendChild(g);let e=document.createElement("button");e.innerText=C("rename");e.addEventListener("click",k=>{if(k=window.prompt(C("rename"),f.innerText))f.innerText=k});c.appendChild(e);d.appendChild(c);for(c=0;c<this.openList.length;c++)if(this.openList[c]==a.type){d.setAttribute("open","open");break}let h=[];this.typeDict[a.type]=a;a.sites&&a.sites.forEach(k=>{let p=document.createElement("div");
var v=document.createElement("span");v.innerText=k.name;k.name=b.searchName(k.name);p.appendChild(v);p.title=k.url;d.appendChild(p);if(b.searchUrl(k.url))p.classList.add("exist");else{var q=document.createElement("input");q.type="checkbox";q.onclick=m=>{if(q.checked){m=!0;for(let w=0;w<h.length;w++)if(!h[w].checked){m=!1;break}m&&(g.checked=!0)}else g.checked=!1};p.appendChild(q);p.addEventListener("click",m=>{"SPAN"==m.target.nodeName.toUpperCase()&&q.click()});v=document.createElement("select");
var n=document.createElement("option");n.value=0;n.innerText=C("currentType");v.appendChild(n);for(n=0;n<l.sitesConfig.length;n++){let m=l.sitesConfig[n];if(m.type!=a.type){let w=document.createElement("option");w.value=m.type;w.innerText=m.type;v.appendChild(w)}}p.appendChild(v);b.siteDict[k.url]=k;h.push(q)}});0==h.length&&(g.style.display="none",e.style.display="none");g.addEventListener("click",k=>{h.forEach(p=>{p.checked=g.checked})});this.sitesCon.appendChild(d)}close(){this.openList=[];[].forEach.call(this.sitesCon.querySelectorAll("details"),
a=>{a.hasAttribute("open")&&this.openList.push(a.querySelector("summary").innerText)});this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(a){this.init();let b=this;this.siteDict={};this.typeDict={};this.filterCssEle&&this.filterCssEle.parentNode||(this.filterCssEle=Ja(this.filterCss));document.documentElement.appendChild(this.filterFrame);this.sitesCon.innerHTML=ba("");a.forEach(d=>{b.anylizeType(d)})}}const Yc=new Nd;var Da,Qa,vc,wc,tc,uc,Zb,$b,ac,bc,Y,cc,
Gb,Sa,vb,Ta,Hb,Ib,$c,ad,bd,dc,ec,fc,cd;if(-1!=pa.indexOf("#searchJumperMin"))if(jd=!0,-1!=pa.indexOf("#searchJumperMinPost"))window.history.replaceState(null,"",pa.replace(/#searchJumperMin(Post)?/,""));else{if(-1!=pa.indexOf("#searchJumperMinMobile")){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"}});Na({method:"GET",
url:location.href,headers:{referer:location.href,"User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"},onload:function(a){document.open();document.write(a.response);document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if("SearchJumper Multi"!=document.title){var fd=!1,Bc,Cc,wb,Dc=!1;O.getItem("postUrl",
a=>{if(a&&-1!=a[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1")))O.setItem("postUrl",""),oc(a[1],a[0],"_self");else{if(document.head&&R(document))Ac();else{let b=()=>{document.head&&R(document)?Ac():setTimeout(()=>{b()},10)};b()}document.addEventListener("visibilitychange",Hd)}})}}const va="undefined"==typeof unsafeWindow?window:unsafeWindow;if(!va.searchJumperInited){va.searchJumperInited=!0;var Id=navigator&&navigator.clipboard,Mb=window.top!==window.self;if(Mb)try{if(0===window.self.innerWidth&&
0===window.self.innerHeight){if(await new Promise(eb=>{window.addEventListener("load",Pb=>{setTimeout(()=>{eb(300>window.self.innerWidth||300>window.self.innerHeight)},500)})}))return}else if(300>window.self.innerWidth||300>window.self.innerHeight)return}catch(eb){return}var Zc=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Oa="https://search.hoothin.com/config/",fb=!1,l={};l.sitesConfig=sitesConfig;
l.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1E3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1E3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,
showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:"a in into the to on among between and an of by with about under or at as".split(" "),inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!1,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,
selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};if(document&&document.documentElement)Lc();else{let eb=()=>{document&&document.documentElement?Lc():setTimeout(()=>{eb()},10)};eb()}}})();
