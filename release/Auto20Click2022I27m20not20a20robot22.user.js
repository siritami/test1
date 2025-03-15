// ==UserScript==
// @name         Auto Click "I'm not a robot"
// @namespace    http://tampermonkey.net/
// @version      0.9
// @author       JJJ
// @match        *://*/*
// @icon         https://pngimg.com/uploads/robot/robot_PNG96.png
// @grant        none
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Auto20Click2022I27m20not20a20robot22.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Auto20Click2022I27m20not20a20robot22.meta.js
// ==/UserScript==
(function(){function d(){(new MutationObserver(a=>{for(const b of a)"childList"===b.type&&0<b.addedNodes.length&&c.solve()})).observe(document.body,{childList:!0,subtree:!0})}function e(){c.solve();setInterval(()=>{c.solve()},1E3)}const f={findCheckboxElement(){return document.querySelector(".recaptcha-checkbox-border")||document.querySelector('[role="checkbox"][aria-labelledby="recaptcha-anchor-label"]')||document.querySelector("#checkbox")},solve(){const a=this.findCheckboxElement();a&&null!==a.offsetParent&&
"true"!==a.getAttribute("aria-checked")&&a.click()}},g={findCallbackFunction(){if("undefined"!==typeof ___grecaptcha_cfg){var a=Object.keys(___grecaptcha_cfg.clients).filter(b=>"load"!==b);for(const b of a)if((a=___grecaptcha_cfg.clients[b])&&"function"===typeof a.hl?.l?.callback)return a.hl.l.callback}return null},solve(){const a=this.findCallbackFunction();"function"===typeof a&&a()}},h={findEnterpriseCheckboxElement(){return document.querySelector(".enterprise-checkbox")||document.querySelector('[aria-labelledby="recaptcha-accessible-status"]')},
solve(){const a=this.findEnterpriseCheckboxElement();a&&null!==a.offsetParent&&"true"!==a.getAttribute("aria-checked")&&a.click()}},k={findCheckboxElement(){return document.querySelector(".hcaptcha-checkbox")||document.querySelector('[aria-labelledby="hcaptcha-anchor-label"]')},solve(){const a=this.findCheckboxElement();a&&null!==a.offsetParent&&"true"!==a.getAttribute("aria-checked")&&a.click()}},c={solve(){f.solve();g.solve();h.solve();k.solve()}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",
()=>{d();e()}):(d(),e());const l=navigator.userAgent.toLowerCase(),m=["chrome","edg","brave","firefox"].some(a=>l.includes(a));console.log(m?"Running on a compatible browser":"Running on an unsupported browser")})();
