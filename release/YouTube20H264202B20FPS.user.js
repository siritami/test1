// ==UserScript==
// @name YouTube H.264 + FPS
// @namespace https://www.youtube.com
// @version 2023.11.20.2
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.youtubekids.com/*
// @license MIT
// @grant none
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20H264202B20FPS.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/YouTube20H264202B20FPS.meta.js
// ==/UserScript==
const BLOCK_HIGH_FPS=!0,DISALLOWED_TYPES_REGEX=/webm|vp8|vp9|av01/i,FRAME_RATE_REGEX=/framerate=(\d+)/;(function(){const a=window.MediaSource;if(a){var d=a.isTypeSupported.bind(a);a.isTypeSupported=b=>{if("string"!==typeof b||DISALLOWED_TYPES_REGEX.test(b))return!1;const c=FRAME_RATE_REGEX.exec(b);return BLOCK_HIGH_FPS&&c&&30<c[1]?!1:d(b)}}})();
