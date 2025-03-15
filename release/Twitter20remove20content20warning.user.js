// ==UserScript==
// @name         Twitter remove content warning
// @icon         https://twitter.com/favicon.ico
// @namespace    https://github.com/Tsuk1ko
// @version      1.0.2
// @author       神代綺凛
// @include      https://x.com/*
// @include      https://twitter.com/*
// @include      https://mobile.twitter.com/*
// @license      MIT
// @grant        GM_addStyle
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Twitter20remove20content20warning.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Twitter20remove20content20warning.meta.js
// ==/UserScript==
(async()=>{const c=await ((b,a=1E4)=>new Promise((d,h)=>{const e=b();if(e)d(e);else var k=setTimeout(()=>{clearInterval(f);h()},a),f=setInterval(()=>{const g=b();g&&(clearTimeout(k),clearInterval(f),d(g))},500)}))(()=>{for(const b of document.styleSheets)for(const a of b.cssRules)if(a instanceof CSSStyleRule&&"blur(30px)"===a.style.filter)return a});c?(((b,...a)=>GM_addStyle(String.raw({raw:b},...a)))`
    ${c.selectorText} {
      filter: none !important;
    }
    ${c.selectorText} + div {
      display: none !important;
    }
  `,console.log("[trcw] done",c.selectorText)):console.warn("[trcw] css rule not found")})();
