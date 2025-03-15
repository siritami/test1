// ==UserScript==
// @name        PreventPageVisibilityAuto
// @namespace   PreventPageVisibilityAuto
// @match       *://*/*
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @version     1.1
// @author      -
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/PreventPageVisibilityAuto.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/PreventPageVisibilityAuto.meta.js
// ==/UserScript==
var defaultvalue="none",name="PreventPageVisibilityAuto",prefix="autoinject"+name,value=GM_getValue("value"+name+document.domain,defaultvalue);console.log(value);var injectedStatus=!1,hostarray=[];
function inject(){if(!1===injectedStatus){var a="visibilitychange webkitvisibilitychange mozvisibilitychange hasFocus blur focus mouseleave".split(" ");for(event_name of a)document.addEventListener(event_name,function(b){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation()},!0);for(event_name of a)window.addEventListener(event_name,function(b){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation()},!0);document.hasFocus=function(){return!0};document.onvisibilitychange=
null;Object.defineProperty(document,"visibilityState",{value:"visible"});Object.defineProperty(document,"hidden",{value:!1});Object.defineProperty(document,"mozHidden",{value:!1});Object.defineProperty(document,"webkitHidden",{value:!1});Object.defineProperty(document,"webkitVisibilityState",{value:"visible"});injectedStatus=!0}}function addHost(){hostarray.push(location.hostname);GM_setValue(prefix,JSON.stringify(hostarray));0==injectedStatus&&inject}
function set(){var a=window.prompt("Enter "+name+document.domain+" value",defaultvalue);a=parseInt(a);if(void 0==a)return!1;GM_setValue("value"+name+document.domain,a)}function plus(){var a=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,a+1)}function minus(){var a=GM_getValue("value"+name+document.domain,defaultvalue);GM_setValue("value"+name+document.domain,a-1)}
function removeHost(){var a=hostarray.indexOf(location.hostname);-1<a&&(hostarray.splice(a,1),GM_setValue(prefix,JSON.stringify(hostarray)))}
try{hostarray=JSON.parse(GM_getValue(prefix,"[]")),"number"==typeof value&&(GM_registerMenuCommand("+",plus),GM_registerMenuCommand("-",minus)),GM_registerMenuCommand("Set "+name,set),hostarray.includes(location.hostname)?(inject(),injectedStatus=!0,GM_registerMenuCommand("Stop Auto-Injecting "+name,removeHost)):(GM_registerMenuCommand("Inject "+name,inject),GM_registerMenuCommand("Auto-Inject on "+location.hostname,addHost))}catch(a){console.log("Error adding Inject menu items: "+name),console.log(a)};
