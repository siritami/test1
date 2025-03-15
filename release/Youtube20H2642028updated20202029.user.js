// ==UserScript==
// @name         Youtube H.264 (updated 2020)
// @namespace    http://www.youtube.com
// @version      1.1.2
// @match        *://youtube.com/*
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20H2642028updated20202029.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Youtube20H2642028updated20202029.meta.js
// ==/UserScript==
var h264ify=function(){var b=document.createElement("video"),c=b.canPlayType.bind(b);b.__proto__.canPlayType=function(a){return void 0===a||-1!=a.indexOf("webm")||-1!=a.indexOf("vp8")||-1!=a.indexOf("vp9")||-1!==a.indexOf("av01")?"":c(a)};b=window.MediaSource;var d=b.isTypeSupported.bind(b);b.isTypeSupported=function(a){return void 0===a||-1!=a.indexOf("webm")||-1!=a.indexOf("vp8")||-1!=a.indexOf("vp9")||-1!==a.indexOf("av01")?"":d(a)}};h264ify();
