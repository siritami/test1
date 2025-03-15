// ==UserScript==
// @name         Recaptcha Solver (Automatically solves Recaptcha in browser)
// @namespace    Recaptcha Solver
// @version      2.1
// @author       engageub
// @match        *://*/recaptcha/*
// @connect      engageub.pythonanywhere.com
// @connect      engageub1.pythonanywhere.com
// @grant        GM_xmlhttpRequest
/*

██████╗ ███████╗ ██████╗ █████╗ ██████╗ ████████╗ ██████╗██╗  ██╗ █████╗     ███████╗ ██████╗ ██╗    ██╗   ██╗███████╗██████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔══██╗    ██╔════╝██╔═══██╗██║    ██║   ██║██╔════╝██╔══██╗
██████╔╝█████╗  ██║     ███████║██████╔╝   ██║   ██║     ███████║███████║    ███████╗██║   ██║██║    ██║   ██║█████╗  ██████╔╝
██╔══██╗██╔══╝  ██║     ██╔══██║██╔═══╝    ██║   ██║     ██╔══██║██╔══██║    ╚════██║██║   ██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗
██║  ██║███████╗╚██████╗██║  ██║██║        ██║   ╚██████╗██║  ██║██║  ██║    ███████║╚██████╔╝███████╗╚████╔╝ ███████╗██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝        ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝
/*


/** Note: This script is solely intended for the use of educational purposes only and not to abuse any website.
This script uses audio in order to solve the captcha. Use it wisely and do not abuse any website.
*/
// ==/UserScript==
(function(){async function t(c){var k=1E5,d="";for(let b=0;b<l.length;b++)l[b]<=k&&(k=l[b],d=f[b]);p+=1;c=c.replace("recaptcha.net","google.com");1>m.length&&(console.log("Recaptcha Language is not recognized"),m="en-US");console.log("Recaptcha Language is "+m);GM_xmlhttpRequest({method:"POST",url:d,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"input="+encodeURIComponent(c)+"&lang="+m,timeout:6E4,onload:function(b){console.log("Response::"+b.responseText);try{if(b&&b.responseText){var g=
b.responseText;"0"==g||g.includes("<")||g.includes(">")||2>g.length||50<g.length?console.log("Invalid Response. Retrying.."):a("#audio-source")&&a("#audio-source").src&&h==a("#audio-source").src&&a("#audio-response")&&!a("#audio-response").value&&"none"==a("#recaptcha-audio-button").style.display&&a("#recaptcha-verify-button")?(a("#audio-response").value=g,a("#recaptcha-verify-button").click()):console.log("Could not locate text input box");e=!1}}catch(u){console.log(u.message),console.log("Exception handling response. Retrying.."),
e=!1}},onerror:function(b){console.log(b);e=!1},ontimeout:function(){console.log("Response Timed out. Retrying..");e=!1}})}async function v(c){var k=(new Date).getTime();GM_xmlhttpRequest({method:"GET",url:c,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"",timeout:8E3,onload:function(d){if(d&&d.responseText&&"0"==d.responseText){d=(new Date).getTime()-k;for(let b=0;b<f.length;b++)c==f[b]&&(l[b]=d)}},onerror:function(d){console.log(d)},ontimeout:function(){console.log("Ping Test Response Timed out for "+
c)}})}function a(c){return document.querySelector(c)}var q=!1,r=!1,e=!1,p=0,m=a("html").getAttribute("lang"),h="",w=a("#recaptcha-accessible-status")?a("#recaptcha-accessible-status").innerText:"",f=["https://engageub.pythonanywhere.com","https://engageub1.pythonanywhere.com"],l=Array(f.length).fill(1E4);if(a(".recaptcha-checkbox-border"))a(".recaptcha-checkbox-border").click();else if(window.location.href.includes("bframe"))for(let c=0;c<f.length;c++)v(f[c]);var n=setInterval(function(){try{!r&&
a(".recaptcha-checkbox-border")&&null!==a(".recaptcha-checkbox-border").offsetParent&&(a(".recaptcha-checkbox-border").click(),r=!0),a("#recaptcha-accessible-status")&&a("#recaptcha-accessible-status").innerText!=w&&(q=!0,console.log("SOLVED"),clearInterval(n)),5<p&&(console.log("Attempted Max Retries. Stopping the solver"),q=!0,clearInterval(n)),q||(a("#recaptcha-audio-button")&&null!==a("#recaptcha-audio-button").offsetParent&&a("#rc-imageselect")&&a("#recaptcha-audio-button").click(),!e&&a("#audio-source")&&
a("#audio-source").src&&0<a("#audio-source").src.length&&h==a("#audio-source").src&&a("#recaptcha-reload-button")||a(".rc-audiochallenge-error-message")&&0<a(".rc-audiochallenge-error-message").innerText.length&&a("#recaptcha-reload-button")&&!a("#recaptcha-reload-button").disabled?a("#recaptcha-reload-button").click():!e&&a(".rc-audiochallenge-response-field")&&null!==a(".rc-audiochallenge-response-field").offsetParent&&!a("#audio-response").value&&a("#audio-source")&&a("#audio-source").src&&0<a("#audio-source").src.length&&
h!=a("#audio-source").src&&5>=p&&(e=!0,h=a("#audio-source").src,t(h))),a(".rc-doscaptcha-body")&&0<a(".rc-doscaptcha-body").innerText.length&&(console.log("Automated Queries Detected"),clearInterval(n))}catch(c){console.log(c.message),console.log("An error occurred while solving. Stopping the solver."),clearInterval(n)}},5E3)})();
