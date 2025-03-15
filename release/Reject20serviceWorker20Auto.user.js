// ==UserScript==
// @name        Reject serviceWorker Auto
// @namespace   rejectserviceWorkerAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @version     1.3
// @author      -
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Reject20serviceWorker20Auto.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Reject20serviceWorker20Auto.meta.js
// ==/UserScript==
var defaultvalue="none",name="rejectserviceWorkerAuto",prefix="autoinject"+name,value=GM_getValue("value"+name+document.domain,defaultvalue);console.log(value);var injectedStatus=!1,hostarray=[];function inject(){!1===injectedStatus&&(navigator.serviceWorker&&(navigator.serviceWorker.register=()=>new Promise((a,b)=>b("This method is not allowed!"))),injectedStatus=!0)}function addHost(){hostarray.push(location.hostname);GM_setValue(prefix,JSON.stringify(hostarray));0==injectedStatus&&inject}
function set(){var a=window.prompt("Enter "+name+document.domain+" value",defaultvalue);a=parseInt(a);if(void 0==a)return!1;GM_setValue("value"+name+document.domain,a)}function plus(){var a=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,a+1)}function minus(){var a=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,a-1)}
function removeHost(){var a=hostarray.indexOf(location.hostname);-1<a&&(hostarray.splice(a,1),GM_setValue(prefix,JSON.stringify(hostarray)))}
try{hostarray=JSON.parse(GM_getValue(prefix,"[]")),"number"==typeof value&&(GM_registerMenuCommand("+",plus),GM_registerMenuCommand("-",minus)),hostarray.includes(location.hostname)?(GM_registerMenuCommand("Inject "+name,inject),GM_registerMenuCommand("Auto-Inject on "+location.hostname,removeHost)):(inject(),injectedStatus=!0,GM_registerMenuCommand("Stop Auto-Injecting "+name,addHost))}catch(a){console.log("Error adding Inject menu items: "+name),console.log(a)};
