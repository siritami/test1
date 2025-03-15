// ==UserScript==
// @name        Lazyloadfier Userscript
// @namespace   Lazyloadfier Userscript - Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @run-at      document-start
// @author      -
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Lazyloadfier20Userscript.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Lazyloadfier20Userscript.meta.js
// ==/UserScript==
const SRC_ATTRIBUTE_NAME="src",SRCSET_ATTRIBUTE_NAME="srcset",POSTER_ATTRIBUTE_NAME="poster",LOADING_ATTRIBUTE_NAME="loading",LAZY_LOADING_ATTRIBUTE_VALUE="lazy",IMG_TAG_NAME="IMG",VIDEO_TAG_NAME="VIDEO",AUDIO_TAG_NAME="AUDIO",SOURCE_TAG_NAME="SOURCE",IFRAME_TAG_NAME="IFRAME",FRAME_TAG_NAME="FRAME",EMBED_TAG_NAME="EMBED",TAG_NAMES_WITH_SRC_ATTRIBUTE=new Set([IMG_TAG_NAME,VIDEO_TAG_NAME,AUDIO_TAG_NAME,SOURCE_TAG_NAME,IFRAME_TAG_NAME,FRAME_TAG_NAME,EMBED_TAG_NAME]),TAG_NAMES_WITH_SRCSET_ATTRIBUTE=new Set([IMG_TAG_NAME,
SOURCE_TAG_NAME]),TAG_NAMES_WITH_POSTER_ATTRIBUTE=new Set([VIDEO_TAG_NAME]),OBSERVED_TAGS_SELECTOR=Array.from(TAG_NAMES_WITH_SRC_ATTRIBUTE).join(","),UNSENT_READY_STATE=0,DOM_CONTENT_LOADED_EVENT="DOMContentLoaded",EMPTY_DEFAULT_DATA_URI="data:,",EMPTY_IMAGE_DATA_URI="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",EMPTY_TEXT_DATA_URI="data:text/plain,",EMPTY_DATA_URI=new Map([[VIDEO_TAG_NAME,EMPTY_DEFAULT_DATA_URI],[AUDIO_TAG_NAME,EMPTY_DEFAULT_DATA_URI],[SOURCE_TAG_NAME,
EMPTY_IMAGE_DATA_URI],[IMG_TAG_NAME,EMPTY_IMAGE_DATA_URI],[IFRAME_TAG_NAME,EMPTY_TEXT_DATA_URI],[FRAME_TAG_NAME,EMPTY_TEXT_DATA_URI],[EMBED_TAG_NAME,EMPTY_TEXT_DATA_URI]]),MUTATION_OBSERVER_OPTIONS={childList:!0,subtree:!0},MINIMUM_INTERSECTION_RATIO=0,MUTATION_OBSERVER_TIMEOUT=2500;observeDocumentMutations();
function observeDocumentMutations(){function a(){deferDisconnectObserver(c,b)}const b={},c=new MutationObserver(d=>mutationObserverCallback(d,a));c.observe(document,MUTATION_OBSERVER_OPTIONS);addEventListener(DOM_CONTENT_LOADED_EVENT,a)}function deferDisconnectObserver(a,b){b.id&&clearTimeout(b.id);b.id=setTimeout(()=>a.disconnect(),MUTATION_OBSERVER_TIMEOUT)}function mutationObserverCallback(a,b){a=getObservedNodes(a);a.length&&(a.forEach(observeNodeIntersection),b(a))}
function getObservedNodes(a){const b=[];a.forEach(c=>{const d=new Set(c.addedNodes);d.forEach(e=>{e.querySelectorAll&&e.querySelectorAll(OBSERVED_TAGS_SELECTOR).forEach(f=>d.add(f))});b.splice(0,0,...Array.from(d).filter(matchObservedNode))});return b}function matchObservedNode(a){return TAG_NAMES_WITH_SRC_ATTRIBUTE.has(a.tagName)&&nodeIsHidden(a)&&a[LOADING_ATTRIBUTE_NAME]!=LAZY_LOADING_ATTRIBUTE_VALUE}
function nodeIsHidden(a){a=a.getBoundingClientRect();return 0>a.bottom||a.top>innerHeight||0>a.left||a.right>innerWidth}function observeNodeIntersection(a){const b=resetSource(a,SRC_ATTRIBUTE_NAME),c=resetSource(a,SRCSET_ATTRIBUTE_NAME),d=resetSource(a,POSTER_ATTRIBUTE_NAME);(new IntersectionObserver((e,f)=>intersectionObserverCallback(e,a,f,{src:b,srcset:c,poster:d}))).observe(a.tagName==SOURCE_TAG_NAME?a.parentElement:a)}
function intersectionObserverCallback(a,b,c,d){(a=a[0])&&a.intersectionRatio>MINIMUM_INTERSECTION_RATIO&&(replaceSource(b,d),c.disconnect())}function replaceSource(a,b){setSource(a,SRC_ATTRIBUTE_NAME,b.src);TAG_NAMES_WITH_SRCSET_ATTRIBUTE.has(a.tagName)&&setSource(a,SRCSET_ATTRIBUTE_NAME,b.srcset);TAG_NAMES_WITH_POSTER_ATTRIBUTE.has(a.tagName)&&setSource(a,POSTER_ATTRIBUTE_NAME,b.poster)}function resetSource(a,b){const c=a[b];if(c)return a[b]=EMPTY_DATA_URI.get(a.tagName),c}
function setSource(a,b,c){a[b]==EMPTY_DATA_URI.get(a.tagName)&&(c?a[b]=c:(a.removeAttribute(b),a.readyState===UNSENT_READY_STATE&&a.load()))};
