// ==UserScript==
// @name                Selection and Copying Restorer (Universal)
// @version             1.21.0.2
// @namespace           https://greasyfork.org/users/371179
// @author              CY Fung
// @supportURL          https://github.com/cyfung1031/userscript-supports
// @run-at              document-start
// @match               http://*/*
// @match               https://*/*
// @exclude             /^https?://\S+\.(txt|png|jpg|jpeg|gif|xml|svg|manifest|log|ini)[^\/]*$/
// @exclude             https://github.dev/*
// @exclude             https://vscode.dev/*
// @exclude             https://www.photopea.com/*
// @exclude             https://www.google.com/maps/*
// @exclude             https://docs.google.com/*
// @exclude             https://drive.google.com/*
// @exclude             https://mail.google.com/*
// @exclude             https://www.dropbox.com/*
// @exclude             https://outlook.live.com/mail/*
// @exclude             https://www.terabox.com/*
// @exclude             https://leetcode.cn/*
// @icon                https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/selection-copier.png
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM.setValue
// @grant               GM.getValue
// @grant               GM_addValueChangeListener
// @grant               unsafeWindow
// @inject-into         page

// @compatible          firefox Violentmonkey
// @compatible          firefox Tampermonkey
// @compatible          chrome Violentmonkey
// @compatible          chrome Tampermonkey
// @compatible          opera Violentmonkey
// @compatible          opera Tampermonkey
// @compatible          safari Stay
// @compatible          edge Violentmonkey
// @compatible          edge Tampermonkey
// @compatible          brave Violentmonkey
// @compatible          brave Tampermonkey


// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Selection20and20Copying20Restorer2028Universal29.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Selection20and20Copying20Restorer2028Universal29.meta.js
// ==/UserScript==
(async function(K){function G(){if("_b1850"in b)return b._b1850;let a=0;document.createAttribute("z").addEventListener("nil",H,{get passive(){a|=1},get once(){a|=2}});return b._b1850=a}function P(){const a=window.getSelection();return a.rangeCount?a.getRangeAt(0).cloneRange():!1}const {console:L}=K,D=new Proxy({},{get(a,c){return a[c]||L[c]},set(a,c,d){a[c]=d.bind(L);return!0}});for(const a of["log","debug","dir"])D[a]=L[a];const r="undefined"!==typeof unsafeWindow?unsafeWindow:window;if(r instanceof
Window){var x=(async()=>{})().constructor,M=r.getSelection.bind(r)||Error()(),E=r.requestAnimationFrame.bind(r)||Error()(),Q=r.getComputedStyle.bind(r)||Error()(),R=new WeakMap,F=a=>{let c=R.get(a);c||(c=Q(a),R.set(a,c));return c},B=HTMLElement.prototype.focus;for(K=16;!document||!document.documentElement;)if(await new x(E),0>--K)return;var H=()=>{},N=await (async()=>{await x.resolve();return{}})()||{},S={gm_remain_focus_on_mousedown:["https://codi.link"],gm_no_custom_context_menu:"https://www.youtube.com https://m.youtube.com https://accounts.youtube.com https://github.dev https://vscode.dev https://www.photopea.com https://www.google.com https://docs.google.com https://drive.google.com https://www.dropbox.com https://www.terabox.com https://outlook.live.com https://mail.yahoo.co.jp https://gmail.com https://www.gmail.com https://chat.openai.com https://openai.com https://github.com https://www.github.com".split(" "),
gm_highlight_color_check:"https://www.youtube.com https://m.youtube.com https://accounts.youtube.com https://github.dev https://vscode.dev https://www.photopea.com https://www.google.com https://docs.google.com https://drive.google.com https://www.dropbox.com https://www.terabox.com https://outlook.live.com https://mail.yahoo.co.jp https://gmail.com https://www.gmail.com https://chat.openai.com https://openai.com https://github.com https://www.github.com https://facebook.com https://www.facebook.com https://twitter.com https://www.twitter.com https://x.com".split(" ")},
T=function*(...a){for(let c of a)yield*c},O=(()=>{const a={};var c=T(Object.keys(N),Object.keys(S));for(const f of c)if(!a[f]){c=a[f]=new Set;var d=S[f];if(d&&1<=d.length)for(const h of d)c.add(h);if((d=N[f])&&1<=d.length)for(const h of d)"~"===h.charAt(0)?c.delete(h.substring(1)):c.add(h)}return new Proxy(a,{get(f,h){return b[h]?(f=f[h])&&f.has(location.origin)?!1:!0:!1},set(f,h,g){return!1}})})(N),I=0;(function(){try{({$nil:H})?.$nil(),null?.$nil()}catch(a){}return!0})()||D.warn("Selection and Copying Restorer (Universal): Browser version before 2020-01-01 is not recommended. Please update to the latest version.");
var U="function"===typeof WeakRef?a=>a?new WeakRef(a):null:a=>a||null,y=null,b={utSelectionColorHack:"msmtwejkzrqa",utTapHighlight:"xfcklblvkjsj",utLpSelection:"gykqyzwufxpz",utHoverBlock:"meefgeibrtqx",utNonEmptyElmPrevElm:"jttkfplemwzo",utHoverTextWrap:"oseksntfvucn",utAltPage:"vzhwnfgxnool",ksFuncReplacerCounter:"___dqzadwpujtct___",ksEventReturnValue:" ___ndjfujndrlsx___",ksSetData:"___rgqclrdllmhr___",ksNonEmptyPlainText:"___grpvyosdjhuk___",eh_capture_passive:()=>1===(G()&1)?b._eh_capture_passive=
b._eh_capture_passive||{capture:!0,passive:!0}:!0,eh_capture_active:()=>1===(G()&1)?b._eh_capture_passive=b._eh_capture_passive||{capture:!0,passive:!1}:!0,mAlert_DOWN:H,mAlert_UP:H,gm_no_custom_context_menu:!0,gm_highlight_color_check:!0,lpKeyPressing:!1,lpKeyPressingPromise:x.resolve(),weakMapFuncReplaced:new WeakMap,ksFuncReplacerCounterId:0,isStackCheckForFuncReplacer:!1,isGlobalEventCheckForFuncReplacer:!1,enableReturnValueReplacment:!1,rangeOnKeyDown:null,eyEvts:"keydown keyup copy contextmenu select selectstart dragstart beforecopy".split(" "),
delayMouseUpTasks:0,isNum:a=>0<a||0>a||0===a,getNodeType:a=>a instanceof Node?a.nodeType:-1,isAnySelection:function(){const a=M();return a?"boolean"===typeof a.isCollapsed?!a.isCollapsed:0<a.toString().length:null},updateIsWindowEventSupported:function(){let a=document.createElement("noscript");a.onclick=function(c){b.isGlobalEventCheckForFuncReplacer=window.event===c};a.dispatchEvent(new Event("click"));a=null},createCSSElement:function(a,c){const d=document.createElement("style");d.textContent=
a;c&&c.appendChild(d);return d},createFakeAlert:function(a){function c(d){c.__isDisabled__()?D.log("alert msg disabled: ",d):a.apply(this,arguments)}if("function"!==typeof a)return null;c.toString=a.toString.bind(a);return c},createFuncReplacer:function(a){const c=++b.ksFuncReplacerCounterId,d=function(f){var h=a.apply(this,arguments);if(!1===h){if(!this||!f)return!1;const g=this["on"+f.type];if("function"!==typeof g||g[b.ksFuncReplacerCounter]!==c)return!1;if(!1!==f.cancelable&&b.shouldDenyPreventDefault(f))return!0===
b.isGlobalEventCheckForFuncReplacer&&window.event!==f||!0===b.isStackCheckForFuncReplacer&&(h=Error().stack,h.indexOf("\n")===h.lastIndexOf("\n")===!1)?!1:!0}return h};d[b.ksFuncReplacerCounter]=c;d.toString=a.toString.bind(a);b.weakMapFuncReplaced.set(a,d);return d},onceCssHighlightSelection:async()=>{if(!document.documentElement.hasAttribute(b.utLpSelection)){b.onceCssHighlightSelection=null;await x.resolve();var a=[...document.querySelectorAll("a,p,div,span,b,i,strong,li")].filter(d=>0===d.childElementCount);
a=a.length?a[a.length>>1]:document.body;await x.resolve();var c=Q(a,"::selection").getPropertyValue("background-color")||"";9<c.length&&/^rgba\(\d+,\s*\d+,\s*\d+,\s*0\)$/.test(c)?document.documentElement.setAttribute(b.utSelectionColorHack,""):(F(document.body).getPropertyValue("background-color")||"")===c&&document.documentElement.setAttribute(b.utSelectionColorHack,"");await x.resolve();a=F(a).getPropertyValue("-webkit-tap-highlight-color")||"";9<a.length&&/^rgba\(\d+,\s*\d+,\s*\d+,\s*0\)$/.test(a)&&
document.documentElement.setAttribute(b.utTapHighlight,"");document.documentElement.setAttribute(b.utTapHighlight,"")}},clipDataProcess:function(a){if(a){var c;if((c=(c=a[b.ksSetData])&&c.deref?c.deref():c)&&c.clipboardData===a&&(a=a[b.ksNonEmptyPlainText])&&!1!==c.cancelable&&!0!==c.defaultPrevented){var d=b.rangeOnKeyDown||0,f=!1;if("function"===typeof d.compareBoundaryPoints){var h=P();h&&0===d.compareBoundaryPoints(Range.START_TO_END,h)&&h.collapsed&&(f=!0)}d=null;h=!0;if(!f){f=M();if(!f)return;
var g=f.toString();let t=g.trim();if(0<g.length&&g.length<a.length){g=t.replace(/[\r\n\t\b\x20\xA0\u200b\uFEFF\u3000]+/g,"");g=a.replace(/[\r\n\t\b\x20\xA0\u200b\uFEFF\u3000]+/g,"").indexOf(g);if(g=0<=g&&g<a.length/2+1){let u=b.getNodeType(f.anchorNode);var m=b.getNodeType(f.focusNode);(m=3===u&&3===m)||(m=f.anchorNode===f.focusNode&&1===u);g=g&&m}g&&(d={msg:"copy event - clipboardData replacement is NOT allowed as the text node(s) is/are selected.",oldText:t,newText:a},h=!1)}h&&(d=t?{msg:"copy event - clipboardData replacement is allowed and the selection is not empty",
oldText:t,newText:a}:{msg:"copy event - clipboardData replacement is allowed and the selection is empty",oldText:t,newText:a})}h&&(b.bypass=!0,c.preventDefault(),b.bypass=!1);d&&D.log(d)}}},shouldDenyPreventDefault:function(a){if(!a||b.bypass)return!1;var c=b.eyEvts.indexOf(a.type);const d=a.target;switch(c){case 6:return null===y&&(y=!1),y||b.enableDragging?!1:d instanceof Element&&d.hasAttribute("draggable")?(b.enableDragging=!0,!1):!0;case 3:if(!O.gm_no_custom_context_menu)return!1;null===y&&(y=
!1);if(y)return!1;if(d instanceof Element){switch(d.nodeName){case "IMG":case "SPAN":case "P":case "BODY":case "HTML":case "A":case "B":case "I":case "PRE":case "CODE":case "CENTER":case "SMALL":case "SUB":case "SAMP":return!0;case "VIDEO":case "AUDIO":return b.gm_native_video_audio_contextmenu?!0:!1}if(0===(d.textContent||"").trim().length&&d.querySelector("video, audio"))return!1}return!0;case -1:return!1;case 0:case 1:return null===y&&(y=!1),y?!1:67===a.keyCode&&(a.ctrlKey||a.metaKey)&&!a.altKey&&
!a.shiftKey&&!0===b.isAnySelection();case 2:null===y&&(y=!1);if(y||!(d instanceof Node||d instanceof Window||d instanceof Document)||d instanceof HTMLTextAreaElement||d instanceof HTMLInputElement||d instanceof HTMLElement&&d.closest("[contenteditable]")||d.parentNode instanceof HTMLElement&&d.parentNode.closest("[contenteditable]"))return!1;if(!("clipboardData"in a&&"setData"in DataTransfer.prototype)||!1===a.cancelable||!0===a.defaultPrevented||(c=(c=a.clipboardData[b.ksSetData])&&c.deref?c.deref():
c)&&c!==a)return!0;a.clipboardData[b.ksSetData]=U(a);b.clipDataProcess(a.clipboardData);return!0;default:return!0}},enableSelectClickCopy:function(){!function(d){DataTransfer.prototype.setData=function(){"text/plain"===arguments[0]&&"string"===typeof arguments[1]&&(0<arguments[1].trim().length?this[b.ksNonEmptyPlainText]=arguments[1]:this[b.ksNonEmptyPlainText]&&(arguments[1]=this[b.ksNonEmptyPlainText]));b.clipDataProcess(this);return d.apply(this,arguments)}}(DataTransfer.prototype.setData);Object.defineProperties(DataTransfer.prototype,
{[b.ksSetData]:{value:null,writable:!0,enumerable:!1,configurable:!0},[b.ksNonEmptyPlainText]:{value:null,writable:!0,enumerable:!1,configurable:!0}});Event.prototype.preventDefault=function(d){function f(){!1===this.cancelable||b.shouldDenyPreventDefault(this)||d.call(this)}f.toString=d.toString.bind(d);return f}(Event.prototype.preventDefault);(()=>{const d=Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(Event.prototype,"returnValue"):{},{get:f,set:h}=d;if(f&&h){const g=new Set(b.eyEvts);
Object.defineProperty(Event.prototype,"returnValue",{get(){return g.has(this.type)?b.ksEventReturnValue in this?this[b.ksEventReturnValue]:!0:f.call(this)},set(m){if(!g.has(this.type))return h.call(this,m);m=!!m;!1===m&&this.preventDefault();!1!==this[b.ksEventReturnValue]&&(this[b.ksEventReturnValue]=m)},enumerable:!0,configurable:!0})}else Object.defineProperty(Event.prototype,"returnValue",{get(){return b.ksEventReturnValue in this?this[b.ksEventReturnValue]:!0},set(g){!1===g&&this.preventDefault();
this[b.ksEventReturnValue]=g},enumerable:!0,configurable:!0})})();b.enableReturnValueReplacment=!0;let a=r;if(a){var c=a.alert;if("function"===typeof c){if(c=b.createFakeAlert(c)){let d=0;c.__isDisabled__=()=>d>+new Date;b.mAlert_DOWN=()=>d=+new Date+50;b.mAlert_UP=()=>d=+new Date+20;a.alert=c}c=null}c=null}a=null},lpCheckPointer:function(a){return a instanceof Element&&a.matches("*:hover")&&"pointer"===F(a).getPropertyValue("cursor")&&a.textContent?!0:!1},eventCancel:function(a,c){b.bypass=!0;!c||
a.preventDefault();a.stopPropagation();a.stopImmediatePropagation();b.bypass=!1},lpHoverBlocks:[],lpKeyAltLastPressAt:0,lpKeyAltPressInterval:0,noPlayingVideo:function(){let a=!0;for(const c of document.querySelectorAll("video[src]"))if(!1===c.paused){a=!1;break}return a},lpKeyDown:a=>{if(b.gm_lp_enable)if("Alt"!==a.key||!a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)!0===b.lpKeyPressing&&b.lpCancelKeyPressAlt();else{b.lpKeyAltLastPressAt=+new Date;let c=a.target;if(!1===b.lpKeyPressing&&c instanceof
Node&&c.parentNode&&!a.repeat&&b.noPlayingVideo()){b.lpKeyPressing=!0;document.documentElement.setAttribute(b.utAltPage,"");const d=b.rootHTML(c);if(d){let f=null,h=new WeakMap;b.lpKeyPressingPromise=b.lpKeyPressingPromise.then(()=>{for(const g of b.lpHoverBlocks)g.removeAttribute(b.utNonEmptyElmPrevElm),g.removeAttribute(b.utHoverTextWrap);b.lpHoverBlocks.length=0}).then(()=>{f=new WeakMap;const g=[...d.querySelectorAll("*:not(button, textarea, input, script, noscript, style, link, img, br)")].filter(m=>
0===m.childElementCount&&0<(m.textContent||"").trim().length);for(const m of g)f.set(m,1);return g}).then(g=>{let m=[],t=[],u=n=>{if(null===h.get(n)){var w=[...n.children].some(e=>{e=F(e).getPropertyValue("z-index")||"";return 0<e.length?b.isNum(+e):!1});h.set(n,w);w&&(b.lpHoverBlocks.push(n),n.setAttribute(b.utHoverTextWrap,""))}};for(const n of g){g=n;let w=1;for(;;){let e=g.previousElementSibling,k=!1;for(;e&&!(0<f.get(e));)!e.matches("button, textarea, input, script, noscript, style, link, img, br")&&
0===(e.textContent||"").length&&0<e.clientWidth*e.clientHeight&&(m.push(e),k=!0),e=e.previousElementSibling;k&&!h.has(g.parentNode)&&(h.set(g.parentNode,null),t.push(x.resolve(g.parentNode).then(u)));g=g.parentNode;if(!g||g===d)break;w++;if(0<f.get(g))break;f.set(g,w)}}f=null;x.all(t).then(()=>{t.length=0;u=t=null;for(const n of m)!0===h.get(n.parentNode)&&(b.lpHoverBlocks.push(n),n.setAttribute(b.utNonEmptyElmPrevElm,""));m.length=0;h=m=null})})}}}},lpCancelKeyPressAlt:()=>{b.lpKeyPressing=!1;document.documentElement.removeAttribute(b.utAltPage);
b.lpKeyPressingPromise=b.lpKeyPressingPromise.then(()=>{for(const a of b.lpHoverBlocks)a.removeAttribute(b.utNonEmptyElmPrevElm),a.removeAttribute(b.utHoverTextWrap);b.lpHoverBlocks.length=0});setTimeout(function(){1===b.lpMouseActive&&(b.lpMouseUpClear(),b.lpMouseActive=0)},32)},lpKeyUp:a=>{b.gm_lp_enable&&!0===b.lpKeyPressing&&b.lpCancelKeyPressAlt()},lpAltRoots:[],lpMouseDown:a=>{b.gm_lp_enable&&(b.lpMouseActive=0,a.altKey&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&0===a.button&&a.target instanceof
Node&&b.noPlayingVideo()&&(b.lpMouseActive=1,b.eventCancel(a,!1),a=b.rootHTML(a.target),b.lpAltRoots.push(a),a.setAttribute(b.utLpSelection,"")))},lpMouseUpClear:function(){for(const a of b.lpAltRoots)a.removeAttribute(b.utLpSelection);b.lpAltRoots.length=0;"function"===typeof b.onceCssHighlightSelection&&O.gm_highlight_color_check&&E(b.onceCssHighlightSelection)},lpMouseUp:a=>{b.gm_lp_enable&&1===b.lpMouseActive&&(b.lpMouseActive=2,b.eventCancel(a,!1),b.lpMouseUpClear())},lpClick:a=>{b.gm_lp_enable&&
2===b.lpMouseActive&&b.eventCancel(a,!1)},lpEnable:function(){const a=b.eh_capture_passive();document.addEventListener("keydown",b.lpKeyDown,a);document.addEventListener("keyup",b.lpKeyUp,a);document.addEventListener("mousedown",b.lpMouseDown,a);document.addEventListener("mouseup",b.lpMouseUp,a);document.addEventListener("click",b.lpClick,a)},rootHTML:a=>{if(!(a instanceof Node))return null;if(!a.ownerDocument)return a;var c=a.getRootNode?a.getRootNode():null;if(!c){c=a;for(let d;d=c.parentNode;)c=
d}return c=c.querySelector("html")||a.ownerDocument.documentElement||null},customCSSPerSite:{"https://www.suto.co.kr":"\n                #no_copy::after {\n                    pointer-events: none;\n                }\n            "},injectCSSRules:()=>{const a=`

            html {
                --sac-user-select: auto;
            }
            [role="slider"], input, textarea, video[src], :empty {
                --sac-user-select: nil;
            }
            label:not(:empty) {
                --sac-user-select: auto;
            }

            html, html *,
            html *[style], html *[class] {
                -webkit-touch-callout: default !important; -moz-user-select: var(--sac-user-select) !important; -webkit-user-select: var(--sac-user-select) !important; user-select: var(--sac-user-select) !important;
            }

            html *:hover, html *:link, html *:visited, html *:active {
                -webkit-touch-callout: default !important; -moz-user-select: var(--sac-user-select) !important; -webkit-user-select: var(--sac-user-select) !important; user-select: var(--sac-user-select) !important;
            }

            html *::before, html *::after {
                -webkit-touch-callout: default !important; -moz-user-select: auto !important; -webkit-user-select: auto !important; user-select: auto !important;
            }

            *:hover>img[src]{pointer-events:auto !important;}

            [${b.utSelectionColorHack}] :not(input):not(textarea)::selection{ background-color: Highlight !important; color: HighlightText !important;}
            [${b.utSelectionColorHack}] :not(input):not(textarea)::-moz-selection{ background-color: Highlight !important; color: HighlightText !important;}
            [${b.utTapHighlight}] *{ -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18) !important;}

            [${b.utHoverTextWrap}]>[${b.utNonEmptyElmPrevElm}]{pointer-events:none !important;}
            [${b.utHoverTextWrap}]>*{z-index:inherit !important;}

            html[${b.utLpSelection}] *:hover, html[${b.utLpSelection}] *:hover * { cursor:text !important;}
            html[${b.utLpSelection}] :not(input):not(textarea)::selection {background-color: rgba(255, 156, 179, 0.5) !important;}
            html[${b.utLpSelection}] :not(input):not(textarea)::-moz-selection {background-color: rgba(255, 156, 179, 0.5) !important;}

            img[${b.utHoverBlock}="4"]{display:none !important;}
            [${b.utHoverBlock}="7"]{padding:0 !important;overflow:hidden !important;}
            [${b.utHoverBlock}="7"]>img[${b.utHoverBlock}="4"]:first-child{
                display:inline-block !important;
                position: relative !important;
                top: auto !important;
                left: auto !important;
                bottom: auto !important;
                right: auto !important;
                opacity: 0 !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
                outline: 0 !important;
                border: 0 !important;
                box-sizing: border-box !important;
                transform: initial !important;
                -moz-user-select: none !important;
                -webkit-user-select: none !important;
                user-select: none !important;
                z-index:1 !important;
                float: left !important;
                cursor:inherit !important;
                pointer-events:inherit !important;
                border-radius: inherit !important;
                background:none !important;
            }

            html[${b.utAltPage}] *::before, html[${b.utAltPage}] *::after {
                pointer-events: none !important;
            }

            ${b.customCSSPerSite[location.origin]||""}

            `.trim();b.createCSSElement(a,document.documentElement)},overrideComputedStyle:()=>{if("function"===typeof r.getComputedStyle&&"function"!==typeof r.getComputedStyle591){var a=r.getComputedStyle591=r.getComputedStyle;r.getComputedStyle=function(d,f){return(this||0).getComputedStyle591?this.getComputedStyle591(d,f):a.call(r,d,f)};var c="function"===typeof r.CSSStyleDeclaration?r.CSSStyleDeclaration.prototype:null;c&&"function"===typeof c.getPropertyValue&&"function"!==typeof c.getPropertyValue591&&
(c.getPropertyValue591=c.getPropertyValue,c.getPropertyValue=function(d){let f=this.getPropertyValue591(d);"userSelect"!==d||"auto"!==f&&""!==f||(f="none");return f});c&&Object.defineProperty(c,"userSelect",{get(){return"none"}})}},disableHoverBlock:()=>{function a(e){let k=f.get(e);k||f.set(e,k={});return k}function c(e,k){var l=e.left,q=e.top,p=e.right,z=e.bottom,v=k.left,A=k.top,C=k.right,J=k.bottom;k=Math.abs(l-p)*Math.abs(q-z);e=Math.abs(v-C)*Math.abs(A-J);l=Math.min(p,C)-Math.max(l,v);q=Math.min(z,
J)-Math.max(q,A);p=0;0<l&&0<q&&(p=l*q);return{area1:k,area2:e,areaI:p}}function d(){for(var e of g)if(e.lastTime+800<+new Date)return e.lastTime=+new Date,e.elm;e=document.createElement("img");e.setAttribute("title","\u3000");e.setAttribute("alt","\u3000");e.onerror=function(){this.parentNode instanceof Node&&this.parentNode.removeChild(this)};e.setAttribute(b.utHoverBlock,"4");const k=function(l){this===l.target&&(2!==l.button&&(this.parentNode.dispatchEvent(new l.constructor(l.type,l)),"wheel"!==
l.type&&l.preventDefault(),l.stopPropagation()),m(this))};e.addEventListener("click",k,!0);e.addEventListener("mousedown",k,!0);e.addEventListener("mouseup",k,!0);e.addEventListener("mousemove",k,!0);e.addEventListener("mouseover",k,!0);e.addEventListener("mouseout",k,!0);e.addEventListener("mouseenter",k,!0);e.addEventListener("mouseleave",k,!0);g.push({elm:e,lastTime:+new Date,cid_fade:0});return e}const f=new WeakMap,h=new WeakMap;let g=[];const m=async e=>{await x.resolve();for(const k of g)k.elm===
e&&(k.lastTime=+new Date)},t=new WeakMap;let u=null,n=0,w=0;document.addEventListener("mouseenter",async e=>{if(b.gm_disablehover_enable&&(u=e.target,n=+new Date,!w)){w=1;do await new x(C=>setTimeout(C,82));while(30>+new Date-n);w=0;e=u;await x.resolve();if(e&&e.parentNode)if(h.get(e)){var k=null;if("7"===e.getAttribute(b.utHoverBlock)&&(k=t.get(e))&&null===e.querySelector(`[${b.utHoverBlock}]`)){var l=d();l.parentNode!==e&&(l.setAttribute("src",k),e.insertBefore(l,e.firstChild))}}else if(h.set(e,
1),await x.resolve(),e instanceof Element&&!(0<="|SVG|IMG|HTML|BODY|VIDEO|AUDIO|BR|HEAD|NOSCRIPT|SCRIPT|STYLE|TEXTAREA|AREA|INPUT|FORM|BUTTON|".indexOf(`|${e.nodeName}|`))){var q=e.clientWidth*e.clientHeight;if(0<q){k=null;l=F(e);var p=l.getPropertyValue("background-image")||"",z=null;if(8<p.length&&(z=/^\s*url\s*\("?([^"\)]+\b(\.gif|\.png|\.jpeg|\.jpg|\.webp)\b[^"\)]*)"?\)\s*$/i.exec(p))){if(0<(e.textContent||"").trim().length)return;k=z[1]}else{if(!("absolute"===l.getPropertyValue("position")&&
0<+l.getPropertyValue("z-index"))||0<(e.textContent||"").trim().length)return;l=[];for(var v of document.querySelectorAll("img[src]"))p=a(v),p.area||(z=v.clientWidth*v.clientHeight,0<z&&(p.area=z)),0<p.area&&q>.9*p.area&&l.push(v);v=q=0;for(var A of l){p=e.compareDocumentPosition(A);if(p&8||p&16)return;if(p&2)v++;else if(p&4)break;q++}q=v-1;A=v;0>q&&(q=0);A>l.length-1&&(A=l.length-1);for(v=q;v<=A;v++){q=l[v];const {area2:C,areaI:J}=c(e.getBoundingClientRect(),q.getBoundingClientRect());if(J>.9*C){k=
q.getAttribute("src");break}}}"string"===typeof k&&(l=d(),l.parentNode!==e&&(l.setAttribute("src",k),e.insertBefore(l,e.firstChild),t.set(e,k),e.setAttribute(b.utHoverBlock,"7")))}}}},b.eh_capture_passive())},acrAuxDown:a=>{if(b.gm_prevent_aux_click_enable&&1===a.button){let c=b.dmmMouseUpLast>b.dmmMouseDownLast&&40>a.timeStamp-b.dmmMouseUpLast;b.dmmMouseDownLast=a.timeStamp;c&&b.eventCancel(a,!0)}},acrAuxUp:a=>{if(b.gm_prevent_aux_click_enable&&1===a.button){let c=b.dmmMouseDownLast>b.dmmMouseUpLast&&
40>a.timeStamp-b.dmmMouseDownLast;b.dmmMouseUpLast=a.timeStamp;c&&(b.dmmMouseUpCancel=a.timeStamp,b.eventCancel(a,!0))}},acrAuxClick:a=>{b.gm_prevent_aux_click_enable&&1===a.button&&40>a.timeStamp-b.dmmMouseUpCancel&&b.eventCancel(a,!0)},mousedownFocus:a=>{I=Date.now()+4},mouseupFocus:a=>{I=0},MenuEnable:class{constructor(a,c,d,f){this.h=null;this.textToEnable=a;this.textToDisable=c;this.callback=d;this.gx=this.gx.bind(this)}unregister(){null!==this.h?(GM_unregisterMenuCommand(this.h),this.h=null):
null}register(a){"string"===typeof a&&(this.showText=a);a=this.showText;"string"===typeof a&&(this.h=GM_registerMenuCommand(a,this.gx))}a(a){if(this.enabled!==a.bEnable){this.enabled=a.bEnable;this.unregister();var c=0;if(b.gm_status_fn_store&&0<=b.gm_status_fn_store.indexOf(this)){let f=b.gm_status_fn_store;var d=f.indexOf(this);let h=f.length;if(0<=d&&d<=h-2){for(c=d+1;c<h;c++)f[c].unregister();this.register(a.bText);for(d+=1;d<h;d++)f[d].register();c=1}}c||this.register(a.bText);this.callback(this.enabled,
a.byUserInput)}}enableNow(a){this.a({bEnable:!0,bText:this.textToDisable,byUserInput:a})}gx(){this.enabled?this.disableNow(!0):this.enableNow(!0)}disableNow(a){this.a({bEnable:!1,bText:this.textToEnable,byUserInput:a})}toggle(a,c){a?this.enableNow(c):this.disableNow(c)}},gm_status_fn:async function(a,c,d,f){function h(u){b[a]=u;const n=b[g];n&&n.toggle(u);f(u)}const g=a+"$menuEnable",m=await GM.getValue(a,!1);h(!!m);GM_addValueChangeListener(a,function(u,n,w,e){n!==w&&w!==b[a]&&h(w)});try{var t=window.self!==
window.top}catch(u){t=!0}t||(b.gm_status_fn_store=b.gm_status_fn_store||[],b[g]=new b.MenuEnable(c,d,u=>{GM.setValue(a,!!u)}),b.gm_status_fn_store.push(b[g]),c=await GM.getValue(a,!1),b[g].toggle(!!c))},copyRangeCheckKeyDown(a){!a.isTrusted||"Control"!==a.key&&"Meta"!==a.key?a.isTrusted&&("KeyC"===a.code&&!0===b.rangeOnKeyDown||"Copy"===a.key)&&(b.rangeOnKeyDown=P()):M()+""?b.rangeOnKeyDown=!0:b.rangeOnKeyDown=!1},copyRangeCheckKeyUp(a){!a.isTrusted||"Control"!==a.key&&"Meta"!==a.key||(b.rangeOnKeyDown=
!1)},genericEventHandlerLevel2:a=>{b.gm_absolute_mode&&(a.stopPropagation(),a.stopImmediatePropagation());const c=(a||0).type;"keydown"===c?b.copyRangeCheckKeyDown(a):"keyup"===c&&b.copyRangeCheckKeyUp(a);if(c&&!0===b.enableReturnValueReplacment){let d=a.target;const f="on"+c;let h=99;for(;d instanceof Node&&!(4>--h);){const g=d[f];if("function"===typeof g){if(0<g[b.ksFuncReplacerCounter])break;d[f]=b.weakMapFuncReplaced.get(g)||b.createFuncReplacer(g)}d=d.parentNode}}"contextmenu"===c&&!0!==a.defaultPrevented&&
b.mainListenerPress(a)},genericEventHandlerLevel1:a=>{b.gm_absolute_mode&&(a.stopPropagation(),a.stopImmediatePropagation());const c=(a||0).type;"mousedown"===c?(b.mousedownFocus(a),b.acrAuxDown(a),!0!==a.defaultPrevented&&b.mainListenerPress(a)):"mouseup"===c&&(b.mouseupFocus(a),b.acrAuxUp(a),!0!==a.defaultPrevented&&b.mainListenerRelease(a))},eventsInjection:function(){for(const a of"keydown keyup copy contextmenu select selectstart dragstart beforecopy".split(" "))document.addEventListener(a,b.genericEventHandlerLevel2,
!0);for(const a of"cut paste mouseup mousedown drag select".split(" "))document.addEventListener(a,b.genericEventHandlerLevel1,!0);document.addEventListener("auxclick",b.acrAuxClick,!0)},delayMouseUpTasksHandler:()=>{if(0<b.delayMouseUpTasks){const a=b.delayMouseUpTasks;b.delayMouseUpTasks=0;1===(a&1)&&b.mAlert_UP();2===(a&2)&&!0===b.enableDragging&&(b.enableDragging=!1)}},mainListenerPress:a=>{b.onceCssHighlightSelection&&E(b.onceCssHighlightSelection);const c="contextmenu"===a.type;(2===a.button||
c)&&b.mAlert_DOWN();c&&0===b.delayMouseUpTasks&&(b.delayMouseUpTasks|=1,E(b.delayMouseUpTasksHandler))},mainListenerRelease:a=>{0===b.delayMouseUpTasks&&(2===a.button&&(b.delayMouseUpTasks|=1),!0===b.enableDragging&&(b.delayMouseUpTasks|=2),0<b.delayMouseUpTasks&&E(b.delayMouseUpTasksHandler))}};b.eventsInjection();b.enableSelectClickCopy();b.injectCSSRules();"novelpia.com"===location.host&&b.overrideComputedStyle();3===(G()&3)&&b.lpEnable();b.disableHoverBlock();D.log("userscript running - Selection and Copying Restorer (Universal)");
b.updateIsWindowEventSupported();"function"===typeof GM_registerMenuCommand&&"function"===typeof GM_unregisterMenuCommand&&(3===(G()&3)&&b.gm_status_fn("gm_lp_enable","To Enable `Enhanced build-in Alt Text Selection`","To Disable `Enhanced build-in Alt Text Selection`",()=>{}),b.gm_status_fn("gm_disablehover_enable","To Enable `Hover on Image`","To Disable `Hover on Image`",()=>{}),b.gm_status_fn("gm_prevent_aux_click_enable","To Enable `Repetitive AuxClick Prevention`","To Disable `Repetitive AuxClick Prevention`",
()=>{}),b.gm_status_fn("gm_absolute_mode","To Enable `Absolute Mode`","To Disable `Absolute Mode`",()=>{}),b.gm_status_fn("gm_remain_focus_on_mousedown","To Enable `Remain Focus On MouseDown`","To Disable `Remain Focus On MouseDown`",()=>{}),b.gm_status_fn("gm_native_video_audio_contextmenu","To Enable Native Video Audio Context Menu","To Disable Native Video Audio Context Menu",()=>{}));"function"===typeof B&&HTMLElement.prototype.focus===B&&0===B.length&&((HTMLElement.prototype.focus=function(){if(!(I&&
O.gm_remain_focus_on_mousedown&&I>Date.now()))return B.apply(this,arguments)}).toString=B.toString.bind(B))}})({console});
