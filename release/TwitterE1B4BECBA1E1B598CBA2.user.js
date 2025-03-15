// ==UserScript==
// @name        Twitterᴾˡᵘˢ
// @namespace   https://github.com/Pixmi/twitter-plus
// @version     0.4.8
// @author      Pixmi
// @homepage    https://github.com/Pixmi/twitter-plus
// @supportURL  https://github.com/Pixmi/twitter-plus/issues
// @icon        https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @match       https://x.com/*
// @match       https://twitter.com/*
// @match       https://mobile.twitter.com/*
// @match       https://pbs.twimg.com/media/*
// @require     https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @license     MPL-2.0
// @noframes
// @compatible  Chrome
// @compatible  Firefox
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/TwitterE1B4BECBA1E1B598CBA2.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/TwitterE1B4BECBA1E1B598CBA2.meta.js
// ==/UserScript==
GM_addStyle("\niframe#twitter_plus_setting {\n    max-width: 300px !important;\n    max-height: 300px !important;\n}");
(function(){const g=d=>{let b=d.match(/https:\/\/(pbs\.twimg\.com\/media\/[a-zA-Z0-9\-_]+)(\?format=|.)(jpg|jpeg|png|webp)/);if(!b)return!1;"webp"==b[3]&&(b[3]="jpg");return"?format="!=b[2]&&/name=orig/.test(d)?!1:`https://${b[1]}.${b[3]}?name=orig`},e=window.location.href;if(e.includes("twimg.com")){let d=g(e);d&&window.location.replace(d)}if(e.includes("twitter.com")||e.includes("x.com")){if(!document.evaluate('//div[@id="react-root"]',document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue)return!1;
const d=GM_getValue("MAX_HASHTAGS",20),b=GM_getValue("OUT_HASHTAGS","#tag1,#tag2").split(","),k=a=>["tweet"==a.dataset.testid,"tweetPhoto"==a.dataset.testid,"css-175oi2r r-1pi2tsx r-u8s1d r-13qz1uu"==a.className].some(h=>h);(new MutationObserver((a,h)=>{for(const l of a)if(a=l.target,k(a)){if("ARTICLE"==a.nodeName)try{const c=Array.from(a.querySelectorAll('a[href^="/hashtag/"]'),f=>f.textContent);if(c.length>=d)throw a;if(c.some(f=>b.find(m=>m==f)))throw a;}catch(c){c instanceof HTMLElement&&(c.closest('div[data-testid="cellInnerDiv"]').style.display=
"none");continue}for(const c of a.querySelectorAll("img"))if(a=g(c.src))c.src=a}})).observe(document.body,{attributes:!0,childList:!0,subtree:!0})}})();GM_registerMenuCommand("Setting",()=>config.open());
const config=new GM_config({id:"twitter_plus_setting",css:"\n        #twitter_plus_setting_wrapper {\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n        }\n        #twitter_plus_setting_section_0 {\n            flex: 1;\n        }\n        #twitter_plus_setting_buttons_holder {\n            text-align: center;\n        }\n        .config_var {\n            display: flex;\n            flex-direction: column;\n            margin-bottom: 1rem !important;\n        }\n    ",title:"Remove Spam",
fields:{MAX_HASHTAGS:{label:"When exceeding how many hashtags?",type:"number",title:"input 0 to disable",min:0,max:100,"default":20},OUT_HASHTAGS:{label:"When containing which hashtags?",type:"textarea",title:"Must include # and separated by commas.","default":"#tag1,#tag2"}},events:{init:()=>{config.set("MAX_HASHTAGS",GM_getValue("MAX_HASHTAGS",20));config.set("OUT_HASHTAGS",GM_getValue("OUT_HASHTAGS","#tag1,#tag2"))},save:()=>{GM_setValue("OUT_HASHTAGS",config.get("OUT_HASHTAGS"));GM_setValue("MAX_HASHTAGS",
config.get("MAX_HASHTAGS"));config.close()}}});
