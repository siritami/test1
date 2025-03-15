// ==UserScript==
// @name Select text inside a link like Opera
// @version 6.0.0
// @homepageURL https://github.com/eight04/select-text-inside-a-link-like-opera#readme
// @supportURL https://github.com/eight04/select-text-inside-a-link-like-opera/issues
// @license MIT
// @author eight <eight04@gmail.com> (http://eight04.blogspot.tw)
// @namespace eight04.blogspot.com
// @include *
// @grant GM_addStyle
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/Select20text20inside20a20link20like20Opera.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/Select20text20inside20a20link20like20Opera.meta.js
// ==/UserScript==
const tracker=createMovementTracker(),selection=window.getSelection();let state="WAITING",preState,mousemoves=0,linkTarget;const initPos=[0,0];let selectType;
const EVENTS={mousedown:a=>{if("WAITING"===state&&!(a.altKey||a.button||/img/i.test(a.target.nodeName))){var b=findLinkTarget(a.target);b&&b.href&&(selectType=a.ctrlKey?"add":a.shiftKey?"extend":"new",initPos[0]=a.pageX,initPos[1]=a.pageY,"new"!==selectType||selection.isCollapsed||!inSelect(getInitPos(),selection))&&(mousemoves=0,state="STARTING",linkTarget=b,linkTarget.classList.add("select-text-inside-a-link"))}},mousemove:a=>{"STARTING"===state&&(mousemoves++,3<=mousemoves&&startSelecting(a));
"STARTED"===state&&(a=caretPositionFromPoint(a.pageX-window.scrollX,a.pageY-window.scrollY),selection.extend(a.offsetNode,a.offset))},mouseup:()=>{"WAITING"!==state&&(preState=state,state="ENDING",setTimeout(startWaiting))},click:a=>{"ENDING"===state&&("STARTED"===preState&&findLinkTarget(a.target)===linkTarget&&(a.preventDefault(),a.stopImmediatePropagation()),startWaiting())},dragstart:a=>{"STARTED"===state?a.preventDefault():"STARTING"===state&&startSelecting(a)}};
for(const a in EVENTS)document.addEventListener(a,EVENTS[a],!0);document.contentType&&document.contentType.endsWith("/xml")||document.addEventListener("DOMContentLoaded",function(){GM_addStyle(".select-text-inside-a-link{ -moz-user-select: text!important; }")});
function startSelecting(a){if(shouldStart(a)){"dragstart"===a.type&&a.preventDefault();if("new"===selectType)a=getInitPos(),selection.collapse(a.offsetNode,a.offset);else if("add"===selectType){a=new Range;const b=getInitPos();a.setStart(b.offsetNode,b.offset);selection.addRange(a)}state="STARTED"}else startWaiting()}function getInitPos(){return caretPositionFromPoint(initPos[0]-window.scrollX,initPos[1]-window.scrollY)}
function shouldStart(a){a=tracker?tracker():[Math.abs(a.pageX-initPos[0]),Math.abs(a.pageY-initPos[1])];return a[0]>=a[1]}function startWaiting(){linkTarget&&linkTarget.classList.remove("select-text-inside-a-link");state="WAITING";linkTarget=null}
function createMovementTracker(){const a=[[0,0],[0,0],[0,0]];let b=0;document.addEventListener("mousemove",c=>{a[b][0]=c.pageX;a[b][1]=c.pageY;b=(b+1)%3});return()=>{const c=[];for(let d=0;2>d;d++)c.push(Math.abs(a[b][d]-a[(b+1)%3][d])+Math.abs(a[(b+1)%3][d]-a[(b+2)%3][d]));return c}}function caretPositionFromPoint(a,b){if(document.caretPositionFromPoint)return document.caretPositionFromPoint(a,b);a=document.caretRangeFromPoint(a,b);return{offsetNode:a.startContainer,offset:a.startOffset}}
function inSelect(a,b){var c,d=b.rangeCount;for(c=0;c<d;c++){var e=b.getRangeAt(c);if(e.isPointInRange(a.offsetNode,a.offset))return!0}return!1}function findLinkTarget(a){for(;a&&"A"!==a.nodeName&&"a"!==a.nodeName;)a=a.parentNode;return a};
