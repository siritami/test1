// ==UserScript==
// @name              InstantPage Super Lite
// @namespace         Need4Speed
// @version           1.4.6
// @author            -
// @match             *://*/*
// @noframes
// @run-at            document-idle
// @grant             none
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/InstantPage20Super20Lite.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/InstantPage20Super20Lite.meta.js
// ==/UserScript==
var EXCLUDE=new RegExp(/login|logout|register|signin|signup|signout|pay|create|edit|download|del|reset|submit|doubleclick|googleads|exit|unread/);let t,e,n,o,i,a=null,s=65,c=new Set;const r=1111;function d(b){o=performance.now();b=b.target.closest("a");m(b)&&p(b.href,"high")}function u(b){if(!(performance.now()-o<r)&&"closest"in b.target){var g=b.target.closest("a");m(g)&&(g.addEventListener("mouseout",f,{passive:!0}),i=setTimeout(()=>{p(g.href,"high");i=void 0},s))}}
function l(b){b=b.target.closest("a");m(b)&&p(b.href,"high")}function f(b){b.relatedTarget&&b.target.closest("a")==b.relatedTarget.closest("a")||i&&(clearTimeout(i),i=void 0)}function h(b){if(!(performance.now()-o<r)){var g=b.target.closest("a");1<b.which||b.metaKey||b.ctrlKey||!g||(g.addEventListener("click",function(k){1337!=k.detail&&k.preventDefault()},{capture:!0,passive:!1,once:!0}),b=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337}),g.dispatchEvent(b))}}
function m(b){if(!b.href.match(EXCLUDE)&&b&&b.href&&(!n||"instant"in b.dataset)&&(b.origin==location.origin||(e||"instant"in b.dataset)&&a)&&["http:","https:"].includes(b.protocol)&&("http:"!=b.protocol||"https:"!=location.protocol)&&(t||!b.search||"instant"in b.dataset)&&!(b.hash&&b.pathname+b.search==location.pathname+location.search||"noInstant"in b.dataset))return!0}
function p(b,g="auto"){if(!c.has(b)){var k=document.createElement("link");k.rel="prefetch";k.href=b;k.fetchPriority=g;k.as="document";document.head.appendChild(k);c.add(b)}}
!function(){if(document.createElement("link").relList.supports("prefetch")){var b="instantVaryAccept"in document.body.dataset||"Shopify"in window,g=navigator.userAgent.indexOf("Chrome/");-1<g&&(a=parseInt(navigator.userAgent.substring(g+7)));if(!(b&&a&&110>a)){b="instantMousedownShortcut"in document.body.dataset;t="instantAllowQueryString"in document.body.dataset;e="instantAllowExternalLinks"in document.body.dataset;n="instantWhitelist"in document.body.dataset;g={capture:!0,passive:!0};var k=!1,z=
!1,y=!1;if("instantIntensity"in document.body.dataset){var q=document.body.dataset.instantIntensity;if(q.startsWith("mousedown"))k=!0,"mousedown-only"==q&&(z=!0);else if(q.startsWith("viewport")){const v=navigator.connection&&navigator.connection.saveData,w=navigator.connection&&navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g");v||w||("viewport"==q?45E4>document.documentElement.clientWidth*document.documentElement.clientHeight&&(y=!0):"viewport-all"==q&&(y=!0))}else q=
parseInt(q),isNaN(q)||(s=q)}z||document.addEventListener("touchstart",d,g);k?b||document.addEventListener("mousedown",l,g):document.addEventListener("mouseover",u,g);b&&document.addEventListener("mousedown",h,g);y&&((b=window.requestIdleCallback)||(b=v=>{v()}),b(function(){const v=new IntersectionObserver(w=>{w.forEach(x=>{x.isIntersecting&&(x=x.target,v.unobserve(x),p(x.href))})});document.querySelectorAll("a").forEach(w=>{m(w)&&v.observe(w)})},{timeout:1500}))}}}();
