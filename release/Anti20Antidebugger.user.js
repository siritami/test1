// ==UserScript==
// @name         Anti Anti-debugger
// @namespace    https://greasyfork.org/en/users/670188-hacker09?sort=daily_installs
// @version      4
// @author       hacker09
// @include      *
// @grant        unsafeWindow
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Anti20Antidebugger.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Anti20Antidebugger.meta.js
// ==/UserScript==
(function(){var b=setInterval(function(){unsafeWindow.console.clear=()=>{}},0);window.onload=function(){clearInterval(b)};if(null===location.href.match(/vidstream.pro|mcloud.to/)){var c=unsafeWindow.Function.prototype.constructor;unsafeWindow.Function.prototype.constructor=function(){var a=arguments[0];return a&&a.includes("debugger")?(a=Function.prototype.constructor.caller.toString(),"string"===typeof a&&a.includes("debugger")&&(a=a.replace(/\bdebugger\b/gi,""),eval("caller = "+a)),function(){}):
c.apply(this,arguments)}}})();
