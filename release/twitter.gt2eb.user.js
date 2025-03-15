// ==UserScript==
// @name          GoodTwitter 2 - Electric Boogaloo
// @version       0.0.45
// @author        schwarzkatz
// @license       MIT
// @match         https://twitter.com/*
// @match         https://mobile.twitter.com/*
// @match         https://x.com/*
// @match         https://mobile.x.com/*
// @exclude       https://twitter.com/i/cards/*
// @exclude       https://twitter.com/i/release_notes
// @exclude       https://twitter.com/*/privacy
// @exclude       https://twitter.com/*/tos
// @exclude       https://twitter.com/account/access
// @exclude       https://x.com/i/cards/*
// @exclude       https://x.com/i/release_notes
// @exclude       https://x.com/*/privacy
// @exclude       https://x.com/*/tos
// @exclude       https://x.com/account/access
// @grant         GM_deleteValue
// @grant         GM_getResourceText
// @grant         GM_getResourceURL
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_info
// @grant         GM_xmlhttpRequest
// @connect       api.twitter.com
// @connect       api.x.com
// @resource      css https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.style.css
// @resource      emojiRegex https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/data/emoji-regex.txt
// @resource      pickrCss https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.i18n.js
// @require       https://github.com/Bl4Cc4t/GoodTwitter2/raw/master/twitter.gt2eb.polyfills.js
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require       https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.es5.min.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/twitter.gt2eb.meta.js
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/twitter.gt2eb.user.js
// ==/UserScript==
(function(b,m){function K(){if(A)return A;let a=null;try{for(let d of Array.from(document.querySelectorAll("#react-root ~ script")))if(d.textContent.includes("__INITIAL_STATE__")){let c=d.textContent.match(/__INITIAL_STATE__=(\{.*?\});window/);if(c){let e=JSON.parse(c[1]);a=Object.values(e?.entities?.users?.entities)[0]??null}break}}catch(d){console.error(d)}a?(A={bannerUrl:a.profile_banner_url,avatarUrl:a.profile_image_url_https,screenName:a.screen_name,name:a.name,id:a.id_str,stats:{tweets:a.statuses_count,
followers:a.followers_count,following:a.friends_count}},console.log("user info",A)):(console.error("match of __INITIAL_STATE__ unsuccessful, falling back to default values"),A={bannerUrl:"",avatarUrl:"https://abs.twimg.com/sticky/default_profile_images/default_profile.png",screenName:"youarenotloggedin",name:"Anonymous",id:"0",stats:{tweets:0,followers:0,following:0}});return A}function B(){return b("html").attr("lang").trim()}function w(){return document.cookie.match(/twid=u/)}function h(a){let d=
B();d=Object.keys(i18n).includes(d)?d:"en";return i18n[Object.keys(i18n[d]).includes(a)?d:"en"][a]}function q(){return window.location.href.replace(/.*?(twitter|x)\.com\//,"")}function t(a){return`
      <svg class="gt2-svg" viewBox="0 0 ${"google"==a?74:24} 24">
        ${({lightning:'<g><path d="M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"></path></g>',
caret:'<g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g>',tick:'<g><path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path></g>',moon:'<g><path d="M 13.277344 24 C 16.976562 24 20.355469 22.316406 22.597656 19.554688 C 22.929688 19.148438 22.566406 18.550781 22.054688 18.648438 C 16.234375 19.757812 10.886719 15.292969 10.886719 9.417969 C 10.886719 6.03125 12.699219 2.917969 15.644531 1.242188 C 16.097656 0.984375 15.984375 0.296875 15.46875 0.199219 C 14.746094 0.0664062 14.011719 0 13.277344 0 C 6.652344 0 1.277344 5.367188 1.277344 12 C 1.277344 18.625 6.644531 24 13.277344 24 Z M 13.277344 24 "/></g>',
x:'<g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g>',google:'<g><path d="M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z"></path></g>',
arrow:'<g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g>',location:'<g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g>',
url:'<g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g>',
calendar:'<g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g>',
balloon:'<g><path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path><path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path></g>'})[a]}
      </svg>`}function C(a){var d=window.document.cookie.match(/ct0=([^;]+)(;|$)/)[1];d={authorization:"Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",origin:"https://twitter.com",referer:window.location.href,"x-twitter-client-language":B(),"x-csrf-token":d,"x-twitter-active-user":"yes"};Object.assign(d,a);return d}function D(a,d){for(let [c,e]of Object.entries(d))"object"===typeof e&&(e=encodeURIComponent(JSON.stringify(e))),a+=`&${c}=${e}`;
return`${a.replace("&","?")}`}function G(a,d){GM_xmlhttpRequest({method:"GET",url:D("https://twitter.com/i/api/1.1/statuses/show.json",{id:a,tweet_mode:"extended",trim_user:!0,include_cards:1}),headers:C(),onload:function(c){"200"==c.status?d(JSON.parse(c.response)):console.warn(c)}})}function Y(a,d){GM_xmlhttpRequest({method:"GET",url:D("https://twitter.com/i/api/graphql/bRL1YYMraLIBpo1PGLeFcw/TweetDetail",{variables:{focalTweetId:a,includePromotedContent:!1,withBirdwatchNotes:!1,withDownvotePerspective:!1,
withReactionsMetadata:!1,withReactionsPerspective:!1,withSuperFollowsTweetFields:!1,withSuperFollowsUserFields:!1,withVoice:!1}}),headers:C(),onload:function(c){"200"==c.status?d(JSON.parse(c.response).data.threaded_conversation_with_injections.instructions.find(e=>"TimelineAddEntries"==e.type).entries.find(e=>e.entryId.startsWith("tweet-")).content.itemContent.tweet_results.result.legacy):console.warn(c)}})}function L(a,d){GM_xmlhttpRequest({method:"GET",url:D("https://twitter.com/i/api/graphql/jMaTS-_Ea8vh9rpKggJbCQ/UserByScreenName",
{variables:{screen_name:a,withHighlightedLabel:!0}}),headers:C(),onload:function(c){"200"==c.status?d(JSON.parse(c.response)):console.warn(c)}})}function O(a,d,c){GM_xmlhttpRequest({method:"POST",url:D(`https://api.twitter.com/1.1/blocks/${d?"create":"destroy"}.json`,{user_id:a,skip_status:!0}),headers:C(),onload:function(e){"200"==e.status?c():console.warn(e)}})}function Z(){b(".gt2-toggle-settings").length||b("main section[aria-labelledby=root-header] div[role=tablist],\n         main > div > div > div > div:last-child > div[role=tablist],\n         main div[data-testid=loggedOutPrivacySection]").append(`
        <a class="gt2-toggle-settings" href="/settings/gt2">
          <div>
            <span>GoodTwitter2</span>
            ${t("caret")}
          </div>
        </a>
      `)}function n(a,d=""){let c=`${a}Desc`;return`
      <div class="gt2-setting">
        <div>
          <span>${h(a)}</span>
          <div class="gt2-setting-toggle ${GM_getValue("opt_gt2")[a]?"gt2-active":""}" data-setting-name="${a}">
            <div></div>
            <div>
              ${t("tick")}
            </div>
          </div>
        </div>
        ${d}
        ${h(c)?`<span>${h(c)}</span>`:""}
      </div>`}function P(){if(!b(".gt2-settings").length){let a=`
        <div class="gt2-settings-header">
          <div class="gt2-settings-back">
            <div></div>
            ${t("arrow")}
          </div>
          GoodTwitter2 v${GM_info.script.version}
        </div>
        <div class="gt2-settings">
          <div class="gt2-settings-sub-header">${h("settingsHeaderTimeline")}</div>
          ${n("forceLatest")}
          ${n("biggerPreviews")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${h("statsTweets")}</div>
          ${n("hideTranslateTweetButton")}
          ${n("tweetIconsPullLeft")}
          ${n("hidePromoteTweetButton")}
          ${n("showMediaWithContentWarnings",`
            <div data-setting-name="showMediaWithContentWarningsBox" class="gt2-settings-multi-selection ${GM_getValue("opt_gt2").showMediaWithContentWarnings?"":"gt2-hidden"}">
              <div data-setting-name="showMediaWithContentWarningsSel">
                ${["Nudity","Violence","SensitiveContent"].map((c,e)=>{e=Math.pow(2,e);return`
                    <div>
                      <span>${h(`contentWarning${c}`)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").showMediaWithContentWarningsSel&e)==e?"gt2-active":""}" data-sel="${e}">
                        <div></div>
                        <div>${t("tick")}</div>
                      </div>
                    </div>`}).join("")}
              </div>
            </div>
          `)}
          ${n("hideTweetAnalytics")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${h("settingsHeaderSidebars")}</div>
          ${n("stickySidebars")}
          ${n("smallSidebars")}
          ${n("hideTrends")}
          ${n("leftTrends")}
          ${n("show5Trends")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${h("navProfile")}</div>
          ${n("legacyProfile")}
          ${n("squareAvatars")}
          ${n("disableHexagonAvatars")}
          ${n("enableQuickBlock")}
          ${n("leftMedia")}
          ${n("profileMediaRedirect")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${h("settingsHeaderGlobalLook")}</div>
          ${n("hideFollowSuggestions",`
            <div data-setting-name="hideFollowSuggestionsBox" class="gt2-settings-multi-selection ${GM_getValue("opt_gt2").hideFollowSuggestions?"":"gt2-hidden"}">
              ${h("hideFollowSuggestionsBox").replace("$type$",`
                <div data-setting-name="hideFollowSuggestionsSel">
                  ${["topics","users","navLists"].map((c,e)=>{e=Math.pow(2,e);return`<div>
                      <span>${h(c)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").hideFollowSuggestionsSel&e)==e?"gt2-active":""}" data-sel="${e}">
                        <div></div>
                        <div>${t("tick")}</div>
                      </div>
                    </div>
                  `}).join("")}
                </div>
              `).replace("$location$",`
                <div data-setting-name="hideFollowSuggestionsLocSel">
                  ${["Timeline","Sidebars"].map((c,e)=>{e=Math.pow(2,e);return`<div>
                      <span>${h(`settingsHeader${c}`)}</span>
                      <div class="gt2-setting-toggle ${(GM_getValue("opt_gt2").hideFollowSuggestionsLocSel&e)==e?"gt2-active":""}" data-sel="${e}">
                        <div></div>
                        <div>${t("tick")}</div>
                      </div>
                    </div>
                  `}).join("")}
                </div>
              `)}
            </div>
          `)}
          ${n("fontOverride",`
            <div class="gt2-setting-input" data-setting-name="fontOverrideValue">
              <input type="text" value="${GM_getValue("opt_gt2").fontOverrideValue}">
            </div>
          `)}
          ${n("colorOverride",'<div class="gt2-pickr"></div>')}
          ${n("hideMessageBox")}
          ${n("rosettaIcons")}
          ${n("favoriteLikes")}
          ${n("birdIcon")}
          <div class="gt2-settings-separator"></div>

          <div class="gt2-settings-sub-header">${h("settingsHeaderOther")}</div>
          ${n("updateNotifications")}
          ${n("expandTcoShortlinks")}
          ${n("mobileRedirect")}
        </div>
      `,d=b("main section[aria-labelledby=detail-header]");d.length?d.prepend(a):b("main > div > div > div").append(`
          <section>${a}</section>
        `);Pickr.create({el:".gt2-pickr",theme:"classic",lockOpacity:!0,useAsButton:!0,appClass:"gt2-color-override-pickr",inline:!0,default:`rgb(${GM_getValue("opt_gt2").colorOverrideValue})`,components:{preview:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!0,cmyk:!0,input:!0}}}).on("change",c=>{c=c.toRGBA().toString(0).slice(5,-4);GM_setValue("opt_gt2",Object.assign(GM_getValue("opt_gt2"),{colorOverrideValue:c}));document.documentElement.style.setProperty("--color-override",c)});Q()}}function R(){let a=
b("title").html();b("title").html(`${a.startsWith("(")?`${a.split(" ")[0]} `:""}GoodTwitter2 / Twitter`)}function Q(){b("div[data-setting-name=leftTrends], div[data-setting-name=show5Trends]")[GM_getValue("opt_gt2").hideTrends?"addClass":"removeClass"]("gt2-disabled");b("[data-setting-name=fontOverrideValue]")[GM_getValue("opt_gt2").fontOverride?"removeClass":"addClass"]("gt2-hidden");b(".gt2-color-override-pickr")[GM_getValue("opt_gt2").colorOverride?"removeClass":"addClass"]("gt2-hidden");b("[data-setting-name=hideFollowSuggestionsBox]")[GM_getValue("opt_gt2").hideFollowSuggestions?
"removeClass":"addClass"]("gt2-hidden");b("[data-setting-name=showMediaWithContentWarningsBox]")[GM_getValue("opt_gt2").showMediaWithContentWarnings?"removeClass":"addClass"]("gt2-hidden")}function S(){m('nav > a[href="/home"]',()=>{if(!b(".gt2-nav").length){b("main").before(`
        <nav class="gt2-nav">
          <div class="gt2-nav-left"></div>
          <div class="gt2-nav-center">
            <a href="/home"></a>
          </div>
          <div class="gt2-nav-right">
            <div class="gt2-search"></div>
            <div class="gt2-toggle-navbar-dropdown">
              <img src="${K().avatarUrl.replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_bigger")}" />
            </div>
            <div class="gt2-compose">${h("composeNewTweet")}</div>
          </div>
        </nav>
        <div class="gt2-search-overflow-hider"></div>
      `);for(let a of["Home","Notifications","Messages",1005>window.innerWidth?"Explore":null]){if(!a)continue;let d=`nav > a[href^="/${a.toLowerCase()}"]:not([data-testid=AppTabBar_Profile_Link]):not([href$="/lists"])`,c=document.querySelector(d);c&&(document.querySelector(".gt2-nav-left").insertAdjacentHTML("beforeend",c.outerHTML),document.querySelectorAll(".gt2-nav-left [data-testid]").forEach(e=>{e.addEventListener("click",f=>{f.ctrlKey||(f.preventDefault(),f=f.target.closest("[data-testid]").dataset.testid,
document.querySelector(`nav [data-testid=${f}]`).click())})}),aa(d,e=>{let f=document.querySelector(`.gt2-nav-left [data-testid=${e.dataset.testid}]`);f&&(f.innerHTML=e.innerHTML,f.firstElementChild.setAttribute("data-gt2-color-override-ignore",""),f.firstElementChild.insertAdjacentHTML("beforeend",`
            <div class="gt2-nav-header">
              ${h(`nav${a}`)}
            </div>
          `))}),b(`.gt2-nav a[href^="/${a.toLowerCase()}"] > div`).append(`
          <div class="gt2-nav-header">
            ${h(`nav${a}`)}
          </div>
        `).attr("data-gt2-color-override-ignore",""))}b(`.gt2-nav a[href^='/${q().split("/")[0]}']`).addClass("active");b("h1 a[href='/home'] svg").appendTo(".gt2-nav-center a")}})}function aa(a,d){m(a,c=>{let e=c[0];e&&(new MutationObserver(f=>{f.forEach(()=>d(e))})).observe(e,{attributes:!0,subtree:!0,childList:!0})})}function T(){m("nav > a[data-testid=AppTabBar_Explore_Link]",()=>{b(".gt2-nav").length||(b("body").prepend('\n        <nav class="gt2-nav">\n          <div class="gt2-nav-left"></div>\n          <div class="gt2-nav-center">\n            <a href="/"></a>\n          </div>\n          <div class="gt2-nav-right">\n            <div class="gt2-search"></div>\n          </div>\n        </nav>\n        <div class="gt2-search-overflow-hider"></div>\n      '),
b('nav > a[data-testid=AppTabBar_Explore_Link],\n         nav > a[href="/settings"]').appendTo(".gt2-nav-left"),b(".gt2-nav a[data-testid=AppTabBar_Explore_Link] > div").append(`
        <div class="gt2-nav-header">
          ${h("navExplore")}
        </div>
      `),b('.gt2-nav a[href="/settings"] > div').append(`
        <div class="gt2-nav-header">
          ${b('.gt2-nav a[href="/settings"]').attr("aria-label")}
        </div>
      `),b(`.gt2-nav a[href^='/${q().split("/")[0]}']`).addClass("active"),b("header h1 a[href='/'] svg").appendTo(".gt2-nav-center a"))})}function ba(){m("div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div > div:nth-child(1) input[data-testid=SearchBox_Search_Input]",()=>{b(".gt2-search").empty();b("div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div > div:nth-child(1)").prependTo(".gt2-search");b("body").addClass("gt2-search-added")})}function ca(a){let d=
window.innerWidth,c=".gt2-left-sidebar";if(!GM_getValue("opt_gt2").smallSidebars&&1350>=d||GM_getValue("opt_gt2").smallSidebars&&1230>=d)c="div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div";a.unshift('<div class="gt2-legacy-profile-info"></div>');m(c,()=>{if(!b(c).find(".gt2-legacy-profile-info").length)for(let e of a.slice().reverse())c.startsWith(".gt2")?b(c).prepend(e):b(`${c} > div:empty:not(.gt2-legacy-profile-info)`).after(e);1<b(".gt2-dashboard-profile").length&&b(".gt2-dashboard-profile").last().remove()})}
function da(){let a=K(),d=w()?"href":"data-href";return`
      <div class="gt2-dashboard-profile">
        <a ${d}="/${a.screenName}" class="gt2-banner" style="background-image: ${a.bannerUrl?`url(${a.bannerUrl}/600x200)`:"unset"};"></a>
        <div>
          <a ${d}="/${a.screenName}" class="gt2-avatar">
            <img src="${a.avatarUrl.replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_bigger")}"/>
          </a>
          <div class="gt2-user">
            <a ${d}="/${a.screenName}" class="gt2-name">${a.name.replaceEmojis()}</a>
            <a ${d}="/${a.screenName}" class="gt2-screenname">
              @<span >${a.screenName}</span>
            </a>
          </div>
          <div class="gt2-toggle-${w()?"acc-switcher-dropdown":"lo-nightmode"}">
            <div></div>
            ${t(w()?"caret":"moon")}
          </div>
          <div class="gt2-stats">
            <ul>
              <li>
                <a ${d}="/${a.screenName}">
                  <span>${h("statsTweets")}</span>
                  <span>${a.stats.tweets.humanize()}</span>
                </a>
              </li>
              <li>
                <a ${d}="/${a.screenName}/following">
                  <span>${h("statsFollowing")}</span>
                  <span>${a.stats.following.humanize()}</span>
                </a>
              </li>
              <li>
                <a ${d}="/${a.screenName}/followers">
                  <span>${h("statsFollowers")}</span>
                  <span>${a.stats.followers.humanize()}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `}function ea(){let a=GM_info.script.version;return`
      <div class="gt2-sidebar-notice gt2-update-notice">
        <div class="gt2-sidebar-notice-header">
          GoodTwitter 2
          <div class="gt2-sidebar-notice-close">
            <div></div>
            ${t("x")}
          </div>
        </div>
        <div class="gt2-sidebar-notice-content">
          ${t("tick")} ${h("updatedInfo").replace("$version$",`v${a}`)}<br />
          <a
            href="https://github.com/Bl4Cc4t/GoodTwitter2/blob/master/doc/changelog.md#${a.replace(/\./g,"")}"
            target="_blank">
            ${h("updatedInfoChangelog")}
          </a>
        </div>
      </div>
    `}function fa(){let a=q().match(/^intent\/(user|follow)/)?q().match(/screen_name=(\w+)/)[1]:q().split("/")[0].split("?")[0].split("#")[0];console.log(`rebuild: ${a}`);m([`a[href="/${a}/photo" i] img`,`a[href="/${a}/nft" i] img`,'div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2) [data-testid=UserDescription] [href="https://support.twitter.com/articles/20169222"]','div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2) [data-testid=UserDescription] [href="https://support.twitter.com/articles/20169199"]'].join(", "),
d=>{b(".gt2-legacy-profile-nav").length&&(b(".gt2-legacy-profile-banner, .gt2-legacy-profile-nav").remove(),b(".gt2-legacy-profile-info").empty());const c={banner:()=>b("a[href$='/header_photo'] img"),avatar:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("a[href$='/photo'] img, a[href$='/nft'] img").first(),screenName:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> [data-testid=UserName] > div:nth-child(1) > div [dir] > span:contains(@):not(:has(> *))").text().slice(1),
followsYou:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> [data-testid=UserName] > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2)"),name:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> [data-testid=UserName] > div:nth-child(1) > div > div:nth-child(1) > div"),automated:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> [data-testid=UserName] > div:nth-child(2)"),
joinDateHTML:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("div[data-testid=UserProfileHeader_Items] > span:last-child").html(),followingRnd:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find('a[href$="/following"] > span:first-child, > div:not(:first-child) div:nth-child(1) > [role=button]:first-child:last-child > span:first-child').first().text().trim(),
followersRnd:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find('a[href$="/followers"] > span:first-child, > div:not(:first-child) div:nth-child(2) > [role=button]:first-child:last-child > span:first-child').first().text().trim(),hasOnlyScreenName:()=>1==b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> [data-testid=UserName] > div:nth-child(1) > div > div").length,
avatarIsHex:()=>0<b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("a[href$='/nft']").length,description:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("div[data-testid=UserDescription]"),items:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("div[data-testid=UserProfileHeader_Items]"),
fyk:()=>b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> div:last-child:not(:nth-child(2)) > div:last-child:first-child")};b(".gt2-legacy-profile-banner").length||b("header").before(`
          <div class="gt2-legacy-profile-banner">
            ${c.banner().length?`<img src="${c.banner().attr("src").match(/(\S+)\/\d+x\d+/)[1]}/1500x500" />`:""}
          </div>
          <div class="gt2-legacy-profile-nav">
            <div class="gt2-legacy-profile-nav-left">
              <div class="gt2-legacy-profile-nav-avatar ${c.avatarIsHex()?"gt2-avatar-hex":""}">
                <img src="${c.avatar().length?c.avatar().attr("src").replace(/_(bigger|normal|(reasonably_)?small|\d*x\d+)/,"_400x400"):"https://abs.twimg.com/sticky/default_profile_images/default_profile.png"}" />
              </div>
              <div>
                <div class="gt2-legacy-profile-name">${c.name().html()}</div>
                <div class="gt2-legacy-profile-screen-name-wrap">
                  ${c.hasOnlyScreenName()?"":`
                    <div class="gt2-legacy-profile-screen-name">
                      @<span>${c.screenName()}</span>
                    </div>
                  `}
                  ${c.followsYou().length?c.followsYou().prop("outerHTML"):""}
                </div>
              </div>
            </div>
            <div class="gt2-legacy-profile-nav-center">
              <a href="/${c.screenName()}" title="">
                <div>${h("statsTweets")}</div>
                <div>0</div>
              </a>
              <a href="/${c.screenName()}/following" title="">
                <div>${h("statsFollowing")}</div>
                <div>${c.followingRnd()||0}</div>
              </a>
              <a href="/${c.screenName()}/followers" title="">
                <div>${h("statsFollowers")}</div>
                <div>${c.followersRnd()||0}</div>
              </a>
              <a href="/${c.screenName()}/likes" title="">
                <div>${h("statsLikes")}</div>
                <div>0</div>
              </a>
              <!--
                <a href="/${c.screenName()}/lists" title="">
                  <div>${h("navLists")}</div>
                  <div></div>
                </a>
                <a href="/${c.screenName()}/moments" title="">
                  <div>${h("statsMoments")}</div>
                  <div></div>
                </a>
              -->
            </div>
            <div class="gt2-legacy-profile-nav-right"></div>
          </div>
        `);L(c.screenName(),e=>{let f=e.data.user;e=f.legacy;m(".gt2-legacy-profile-info > :first",g=>b(g).parent().attr("data-profile-id",f.rest_id));for(let g of[[c.screenName(),"statuses_count"],["following","friends_count"],["followers","followers_count"],["likes","favourites_count"]])b(`.gt2-legacy-profile-nav-center a[href$="/${g[0]}"]`).attr("title",e[g[1]].humanize()).find("div:nth-child(2)").html(e[g[1]].humanizeShort());if(GM_getValue("opt_gt2").expandTcoShortlinks){let g=e.entities.description.urls.concat(e.entities.url?
e.entities.url.urls:[]);b('.gt2-legacy-profile-info a[href^="https://t.co"]').each(function(){b(this).attr("href",g.find(k=>k.url==b(this).attr("href").split("?")[0]).expanded_url)})}});m(`[href="/${q().match(/^intent\/(user|follow)/)?q().match(/screen_name=(\w+)/)[1]:q().split("/")[0].split("?")[0].split("#")[0]}/following" i]`,()=>{b(".gt2-legacy-profile-info").data("alreadyFound",!1);m(".gt2-legacy-profile-info",()=>{b(".gt2-legacy-profile-info .gt2-legacy-profile-screen-name").length||(b(".gt2-legacy-profile-info").append(`
              <div class="gt2-legacy-profile-name"></div>
              <div class="gt2-legacy-profile-screen-name-wrap">
                ${c.hasOnlyScreenName()?"":`
                  <div class="gt2-legacy-profile-screen-name">
                    @<span>${c.screenName()}</span>
                  </div>
                `}
                ${c.followsYou().length?c.followsYou().prop("outerHTML"):""}
              </div>
              ${c.automated().length?`<div class="gt2-legacy-profile-automated">${c.automated().prop("outerHTML")}</div>`:""}
              ${c.description().length?`<div class="gt2-legacy-profile-description">${c.description().parent().html()}</div>`:""}
              <div class="gt2-legacy-profile-items">
                ${c.items().length?c.items().html():""}
              </div>
              ${c.fyk().length?`<div class="gt2-legacy-profile-fyk">${c.fyk().prop("outerHTML")}</div>`:""}
            `),document.querySelector(".gt2-legacy-profile-info .gt2-legacy-profile-name").insertAdjacentHTML("afterbegin",c.name()[0].innerHTML),document.querySelector(".gt2-legacy-profile-info .gt2-legacy-profile-name [data-testid=icon-verified]")?.parentElement?.addEventListener("click",e=>{document.querySelector("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2) [data-testid=icon-verified]")?.dispatchEvent(new MouseEvent("click",{bubbles:!0}));
m("#layers > div:nth-child(2) > div > div > div:nth-child(2)",f=>{f=f[0].getBoundingClientRect();var g=e.target.getBoundingClientRect();let k=Math.max(20,g.left+g.width/2-f.width/2),l=innerWidth-20,p=g.bottom+10;g=Math.max(20,g.top-10-f.height);let y=innerHeight-20;document.querySelector(".gt2-style-verification")?.remove();document.head.insertAdjacentHTML("beforebegin",`
                      <style class="gt2-style-verification">
                        #layers > div:nth-child(2) > div > div > div:nth-child(2) {
                          left: ${Math.round(k+f.width<l?k:l)}px !important;
                          top: ${Math.round(p+f.height<y?p:g)}px !important;
                          position: fixed !important;
                        }
                      </style>
                    `)})}),GM_setValue("hasRun_InsertFYK",!1),m('a[href$="/followers_you_follow"] div[style*=background-image] + img',e=>{GM_getValue("hasRun_InsertFYK")||(b(".gt2-legacy-profile-fyk").html(b(e).parents('a[href$="/followers_you_follow"]').prop("outerHTML")),GM_setValue("hasRun_InsertFYK",!0))}))})});b(".gt2-legacy-profile-nav-right > div").length||b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> div:nth-child(1) > div:last-child").detach().appendTo(".gt2-legacy-profile-nav-right")});
m('body:not([data-gt2-path^="messages"]) [data-testid=empty_state_body_text] > *:not(a):first-child:last-child, [data-testid=emptyState] [href="https://help.twitter.com/rules-and-policies/twitter-rules"]',()=>{let d=b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2)").find("> div:nth-child(2) > div > div"),c={screenName:()=>d.find("> div:nth-last-child(1)").text().trim().slice(1),nameHTML:()=>1<d.find("> div").length?d.find("> div:nth-child(1)").html():
null};b("body").addClass("gt2-profile-not-found");b("header").before(`
        <div class="gt2-legacy-profile-banner">
          <img />
        </div>
        <div class="gt2-legacy-profile-nav">
          <div class="gt2-legacy-profile-nav-left">
            <div class="gt2-legacy-profile-nav-avatar">
              <img src="${"https://abs.twimg.com/sticky/default_profile_images/default_profile.png"}" />
            </div>
            <div>
              <a href="/${c.screenName()}" class="gt2-legacy-profile-name">${c.nameHTML()?c.nameHTML():`@${c.screenName()}`}</a>
              ${c.nameHTML()?`
                <div class="gt2-legacy-profile-screen-name-wrap">
                  <a href="/${c.screenName()}" class="gt2-legacy-profile-screen-name">
                  @<span>${c.screenName()}</span>
                  </a>
                </div>
              `:""}
            </div>
          </div>
          <div class="gt2-legacy-profile-nav-center">
            <a href="/${c.screenName()}">
              <div>${h("statsTweets")}</div>
              <div>0</div>
            </a>
            <a href="/${c.screenName()}/following">
              <div>${h("statsFollowing")}</div>
              <div>0</div>
            </a>
            <a href="/${c.screenName()}/followers">
              <div>${h("statsFollowers")}</div>
              <div>0</div>
            </a>
            <a href="/${c.screenName()}/likes">
              <div>${h("statsLikes")}</div>
              <div>0</div>
            </a>
          </div>
          <div class="gt2-legacy-profile-nav-right"></div>
        </div>
      `);m(".gt2-legacy-profile-info",()=>{b(".gt2-legacy-profile-info").append(`
          <a href="/${c.screenName()}" class="gt2-legacy-profile-name">${c.nameHTML()?c.nameHTML():`@${c.screenName()}`}</a>
          ${c.nameHTML()?`
            <div class="gt2-legacy-profile-screen-name-wrap">
              <a href="/${c.screenName()}" class="gt2-legacy-profile-screen-name">
                @<span>${c.screenName()}</span>
              </a>
            </div>
          `:""}
        `)})})}function ha(){m('body:not([data-switched-to-latest]) [data-testid=ScrollSnap-List] > div:nth-child(2) > [href="/home"][aria-selected=false]',a=>{a[0].click();document.body.setAttribute("data-switched-to-latest","")})}function ia(){let a=window.innerWidth;m('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)',
d=>{if(!b('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)').parents("section").hasClass("gt2-trends-handled")&&b('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)').parents("div[data-testid=sidebarColumn]").length){if(GM_getValue("opt_gt2").hideTrends){b('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)').parents("section").parent().parent().remove();
return}GM_getValue("opt_gt2").leftTrends&&(!GM_getValue("opt_gt2").smallSidebars&&1350<a||GM_getValue("opt_gt2").smallSidebars&&1230<a)&&(b(".gt2-trends").length&&b(".gt2-trends").remove(),b('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)').parents("section").parent().parent().detach().addClass("gt2-trends").appendTo(".gt2-left-sidebar"));
b('section:not(.gt2-trends-handled) div[data-testid=trend]:not(.gt2-trend-wrapped),\n                  section[aria-labelledby^=accessible-list]:not(.gt2-trends-handled) a[href="/explore/tabs/for-you"] > div > span:not(.gt2-trend-wrapped)').parents("section").addClass("gt2-trends-handled")}b(d).each(function(){let c=b(this).find("> div > div:nth-child(2) > span [dir]");if(c.length){b(this).addClass("gt2-trend-wrapped");let e=c.text(),f=encodeURIComponent(c.text().replace(/%/g,"%25")).replace(/'/g,
"%27").replace(/(^"|"$)/g,"");c.html(`<a class="gt2-trend" href="/search?q=${e.includes("#")?f:`%22${f}%22`}">${e}</a>`)}})})}function ja(a,d,c){GM_xmlhttpRequest({method:"GET",url:D("https://twitter.com/i/api/1.1/friends/following/list.json",{include_profile_interstitial_type:1,include_blocking:1,include_blocked_by:1,include_followed_by:1,include_want_retweets:1,include_mute_edge:1,include_can_dm:1,include_can_media_tag:1,skip_status:1,cursor:-1,user_id:d,count:3,with_total_count:!0}),headers:C(),
onload:e=>{if(200==e.status){e=JSON.parse(e.response);let f;f=4>e.total_count?h(`followedBy${e.total_count}`).replace("$p1$",0<e.users.length?e.users[0].name:"").replace("$p2$",1<e.users.length?e.users[1].name:"").replace("$p3$",2<e.users.length?e.users[2].name:""):h("followedBy4Plus").replace("$p1$",e.users[0].name).replace("$p2$",e.users[1].name).replace("$nr$",e.total_count-2);let g="";for(let k of e.users)g+=`<img src="${k.profile_image_url_https}" alt="${k.name}" />`;c(`
            <a class="gt2-blocked-profile-followers-you-know" href="/${a}/followers_you_follow">
              ${g}
              <span>
                ${f.replaceEmojis()}
              </span>
            </a>
          `)}else 401==e.status&&c("")}})}function ka(){let a=q().split("/")[0].split("?")[0].split("#")[0];b("body").addClass("gt2-page-profile-youre-blocked");L(a,d=>{let c=d.data.user;ja(a,c.rest_id,e=>{let f=c.legacy,g=new Date(f.created_at);var k=f.description.populateWithEntities(f.entities.description).replaceEmojis(),l=""!=f.location?`
                          <div class="gt2-blocked-profile-location">
                            ${t("location")}
                            <span>${f.location.replaceEmojis()}</span>
                          </div>`:null,p=f.url?`
                          <a href="${f.entities.url.urls[0][GM_getValue("opt_gt2").expandTcoShortlinks?"expanded_url":"url"]}" class="gt2-blocked-profile-url">
                            ${t("url")}
                            <span>${f.entities.url.urls[0].display_url}</span>
                          </a>`:null,y=`<div class="gt2-blocked-profile-joined-at">
                          ${t("calendar")}
                          <span>
                            ${h("joinDate").replace("$date$",g.toLocaleDateString(B(),{month:"long",year:"numeric"}))}
                          </span>
                        </div>`,I=c.legacy_extended_profile&&c.legacy_extended_profile.birthdate?(()=>{var r=c.legacy_extended_profile.birthdate;let U=new Date(Date.UTC(r.year||1970,r.month||1,r.day||1));if(!r.year||r.month||r.day){let H={};r.year&&(H.year="numeric");r.month&&(H.month="long");r.day&&(H.day="numeric");r=h("bornDate").replace("$date$",U.toLocaleDateString(B(),H))}else r=h("bornYear").replace("$year$",U.toLocaleDateString(B(),{year:"numeric"}));return`
                            <div class="gt2-blocked-profile-birthday">
                            ${t("balloon")}
                              <span>${r}</span>
                            </div>`})():null;for(let r of k.match(/(@[0-9A-Za-z_]+)/g)||[])k=k.replace(r,`<a href="/${r.slice(1)}">${r}</a>`);b("a[href$='/header_photo'] + div > div:nth-child(2)").after(`
          <div class="gt2-blocked-profile-description">${k}</div>
          <div class="gt2-blocked-profile-items">
            ${l?l:""}
            ${p?p:""}
            ${I?I:""}
            ${y}
          </div>
        `);b('.gt2-blocked-profile-items + div [href$="/following"]').length||b(".gt2-blocked-profile-items").after(`
            <div class="gt2-blocked-profile-ff">
              <a href="/${a}/following">
                <span>${f.friends_count.humanizeShort()}</span> ${h("statsFollowing")}
              </a>
              <a href="/${a}/followers">
                <span>${f.followers_count.humanizeShort()}</span> ${h("statsFollowers")}
              </a>
            </div>
          `);b(".gt2-blocked-profile-items + div").after(e);m(".gt2-legacy-profile-name",()=>{b(".gt2-legacy-profile-info .gt2-legacy-profile-fyk").length||b(".gt2-legacy-profile-info .gt2-legacy-profile-items").append(`
              ${k?`<div class="gt2-legacy-profile-description">${k}</div>`:""}
              ${l?`<div class="gt2-legacy-profile-item">${l}</div>`:""}
              ${p?`<div class="gt2-legacy-profile-item">${p}</div>`:""}
              ${I?`<div class="gt2-legacy-profile-item">${I}</div>`:""}
              <div class="gt2-legacy-profile-item">${y}</div>
              <div class="gt2-legacy-profile-fyk">${e}</div>
            `)});m(".gt2-legacy-profile-info > :first",r=>b(r).parent().attr("data-profile-id",c.rest_id))})})}function M(a,d,c){let e=b(a).is(".gt2-translate-tweet");GM_setValue("tmp_translatedTweetInfo",h("translatedTweetInfo"));let f=`https://twitter.com/i/api/1.1/strato/column/None/${e?`tweetId=${d}`:`profileUserId=${b(".gt2-legacy-profile-info").data("profile-id")}`},destinationLanguage=None,translationSource=Some(Google),feature=None,timeout=None,onlyCached=None/translation/service/translate${e?
"Tweet":"Profile"}`;GM_xmlhttpRequest({method:"GET",url:f,headers:C(e?{referer:`https://twitter.com/i/status/${d}`}:{}),onload:function(g){if("200"==g.status){g=JSON.parse(g.response);e||(g=g.profileTranslation);console.log(g);let k=g.translation;if(g.entities){if(c&&g.entities.urls){let l=g.entities.urls.find(p=>p.expanded_url.endsWith(c));l&&(k=k.replace(` ${l.url}`,""),g.entities.urls=g.entities.urls.filter(p=>!p.expanded_url.endsWith(c)))}k=k.populateWithEntities(g.entities)}b(a).addClass("gt2-hidden");
b(a).after(`
            <div class="gt2-translated-tweet-info">
              ${GM_getValue("tmp_translatedTweetInfo").replace("$lang$",g.localizedSourceLanguage).replace("$source$",`
                  <a href="https://translate.google.com">
                    ${t("google")}
                  </a>
                `)}
            </div>
            <div class="gt2-translated-tweet">
              ${k.replaceEmojis()}
            </div>
          `)}else console.error("Error occurred while translating."),console.error(f),console.error(g)}})}function V(){if(b("html").is("[data-minimalscrollbar]"))return 0;let a=b("<div/>").css({position:"absolute",top:"-100px",overflowX:"hidden",overflowY:"scroll"}).prependTo("body"),d=a[0].offsetWidth-a[0].clientWidth;a.remove();return d}function E(){let a={"rgb(255, 255, 255)":{bg:"#e6ecf0",elem:"rgb(255, 255, 255)",elemSel:"rgb(247, 249, 250)",gray:"rgb(91, 112, 131)",grayDark:"#e6ecf0",grayDark2:"rgb(196, 207, 214)",
grayLight:"rgb(101, 119, 134)",navbar:"#ffffff",text:"rgb(20, 23, 26)",text2:"white",shadow:"rgba(101, 119, 134, 0.15)",backdrop:"rgba(0, 0, 0, 0.4)"},"rgb(21, 32, 43)":{bg:"#10171e",elem:"rgb(21, 32, 43)",elemSel:"rgb(25, 39, 52)",gray:"rgb(101, 119, 134)",grayDark:"#38444d",grayDark2:"rgb(61, 84, 102)",grayLight:"rgb(136, 153, 166)",navbar:"#1c2938",text:"rgb(255, 255, 255)",text2:"white",shadow:"rgba(136, 153, 166, 0.15)",backdrop:"rgba(91, 112, 131, 0.4)"},"rgb(0, 0, 0)":{bg:"#000000",elem:"#000000",
elemSel:"rgb(21, 24, 28)",gray:"#657786",grayDark:"#38444d",grayDark2:"rgb(47, 51, 54)",grayLight:"rgb(110, 118, 125)",navbar:"rgb(21, 24, 28)",text:"rgb(217, 217, 217)",text2:"white",shadow:"rgba(255, 255, 255, 0.15)",backdrop:"rgba(91, 112, 131, 0.4)"}},d={"rgb(255, 255, 255)":{gray:"rgb(59, 76, 92)",grayDark:"rgb(170, 184, 194)",grayLight:"rgb(59, 76, 92)",text:"rgb(20, 29, 38)"},"rgb(21, 32, 43)":{elemSel:"rgb(24, 36, 48)",gray:"rgb(184, 203, 217)",grayDark:"rgb(56, 68, 88)",grayLight:"rgb(184, 203, 217)",
text2:"rgb(15, 20, 25)"},"rgb(0, 0, 0)":{bg:"rgb(5, 5, 5)",elem:"rgb(5, 5, 5)",elemSel:"rgb(14, 16, 18)",gray:"rgb(146, 156, 166)",grayDark:"rgb(61, 65, 69)",grayLight:"rgb(146, 156, 166)",text:"rgb(255, 255, 255)",text2:"rgb(15, 20, 25)"}},c={blue:["29, 161, 242","38, 74, 157","112, 200, 255"],green:["23, 191, 99","9, 102, 51","102, 211, 151"],red:["224, 36, 94","159, 12, 58","240, 152, 179"],redDark:["202, 32, 85","169, 36, 78","216, 137, 161"],yellow:["255, 173, 31","121, 80, 11","255, 203, 112"]};
if(void 0==GM_getValue("gt2_initialized")&&w())m('h2 > a[href="/i/keyboard_shortcuts"] span',()=>{GM_setValue("opt_display_userColor",b('a[href="/i/keyboard_shortcuts"]').css("color"));GM_setValue("opt_display_bgColor",b("body").css("background-color"));GM_setValue("opt_display_highContrast",!1);GM_setValue("opt_display_fontSize",b("html").css("font-size"));GM_setValue("gt2_initialized",!0);window.location.reload()});else{for(let [l,p]of Object.entries(GM_getValue("opt_gt2")))p&&b("body").addClass(`gt2-opt-${l.toKebab()}${"number"===
typeof p?`-${p}`:""}`);b("body").removeClass("gt2-acc-switcher-active");b(".gt2-style").length&&b(".gt2-style, .gt2-style-pickr").remove();let e=GM_getValue("opt_display_bgColor"),f=GM_getValue("opt_display_highContrast"),g=GM_getValue("opt_display_fontSize"),k=GM_getValue("opt_display_userColor");w()||(e=document.cookie.match(/night_mode=1/)?"rgb(21, 32, 43)":document.cookie.match(/night_mode=2/)?"rgb(0, 0, 0)":"rgb(255, 255, 255)",f=!1,g="15px",k="rgb(29, 161, 242)");"rgb(5, 5, 5)"==e&&(e="rgb(0, 0, 0)");
GM_getValue("opt_gt2").disableHexagonAvatars&&m("#hex-hw-shapeclip-clipconfig path",l=>b(l).parent().html(GM_getValue("opt_gt2").squareAvatars?'<rect cx="100" cy="100" ry="10" rx="10" width="200" height="200"></rect>':'<circle cx="100" cy="100" r="100" />').attr("transform","scale(0.005 0.005)"));b("html").prepend(`
        <style class="gt2-style">
          ${GM_getResourceText("css").replace("--bgColors:$;",Object.entries(Object.assign({},a[e],f?d[e]:{})).map(l=>`--color-${l[0].toKebab()}: ${l[1]};`).join(" ")).replace("--baseColors:$;",Object.entries(c).map(l=>[l[0].toKebab(),l[1][f?"rgb(255, 255, 255)"==e?1:2:0]]).map(l=>`--color-raw-${l[0]}: ${l[1]}; --color-${l[0]}: rgb(${l[1]});`).join(" ")).replace("$userColor",k.slice(4,-1)).replace("$globalFontSize",g).replace("$fontOverride",GM_getValue("opt_gt2").fontOverrideValue).replace("$colorOverride",
GM_getValue("opt_gt2").colorOverrideValue).replace("$scrollbarWidth",`${V()}px`)}
        </style>
        <style class="gt2-style-pickr">${GM_getResourceText("pickrCss")}</style>`)}b("gt2-nav").length||(w()?S():T())}function N(a){a=a.split("?")[0].split("#")[0];if(!W(a)){let d=b("div[data-testid=primaryColumn] > div > div:nth-last-child(1) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");d.find("> div:last-child:not(:first-child)").length||b("body").attr("data-gt2-prev-path")==a||b(".gt2-legacy-profile-nav-right > div").appendTo(d)}}function x(a,...d){return d.some(c=>c==
a.split("/")[0])}function F(a,d,c){return(null==d?!0:x(a,d))&&a.includes("/")&&c.some(e=>e==(e.includes("/")?a.split("/").slice(1).join("/"):a.split("/")[1]))}function W(a){return F(a,"i",["display","keyboard_shortcuts","flow","lists/add_member","report"])||F(a,"settings",["trends","profile"])||F(a,"compose",["tweet"])||F(a,"account",["add","switch"])||x(a,"search-advanced")||x(a,"intent")||a.match(/\/(photo|video)\/\d\/?$/)}function J(a,d){let c=()=>(d||q()).split("?")[0].split("#")[0],e=(g,k)=>
F(c(),g,k),f=W(c());console.log(`[${a}]${f?" [modal]":""} ${c()}`);b("body").attr(`data-gt2-path${f?"-modal":""}`,c());a=b("link[hreflang=default][data-rh=true]");a.length&&b("body").attr("data-gt2-path",a.attr("href"));(x(c(),"login")||!w()&&x(c(),""))&&window.location.reload();b("body").hasClass("gt2-css-inserted")||(E(),b("body").addClass("gt2-css-inserted"));m("main > div > div > div",()=>{b(".gt2-left-sidebar").length||b("main > div > div > div").prepend('<div class="gt2-left-sidebar"></div>');
b("main > div > div > div").find("h1[data-testid=error-detail]").length&&!c().startsWith("settings/gt2")?b("body").addClass("gt2-page-error"):f||b("body").removeClass("gt2-page-error");x(c(),"settings")&&(m('main a[href="/settings/about"]',Z),c().startsWith("settings/gt2")&&(P(),R()))});"i/moment_maker"==b("body").attr("data-gt2-prev-path")&&b(".gt2-nav").remove();b(".gt2-nav").length||(w()?S():T());f||(b(".gt2-nav-left > a").removeClass("active"),b(`.gt2-nav-left > a[href^='/${c().split("/")[0]}']`).addClass("active"));
x(c(),"search","explore")?(b(".gt2-search").empty(),b("body").removeClass("gt2-search-added")):f||ba();w()||b("body").addClass("gt2-not-logged-in");ia();GM_getValue("opt_gt2").hideFollowSuggestions&&2==(GM_getValue("opt_gt2").hideFollowSuggestionsLocSel&2)&&(a=GM_getValue("opt_gt2").hideFollowSuggestionsSel,1==(a&1)&&m('div[data-testid=sidebarColumn] section [href^="/i/topics/"]',g=>b(g).parents("section").parent().parent().remove()),2==(a&2)&&m("div[data-testid=sidebarColumn] aside [data-testid=UserCell]",
g=>b(g).parents("aside").parent().remove()));x(c(),"settings")&&!f?c().startsWith("settings/gt2")||(1005>window.innerWidth&&b("main section").remove(),b(".gt2-settings-header, .gt2-settings").remove()):f||b(".gt2-settings-header, .gt2-settings").remove();if(e(null,["status"])||c().startsWith("i/web/status/")){b("body").addClass("gt2-page-tweet");let g=location.pathname.match(/\/status\/(\d+)/);g&&G(g[1],k=>{m(`[data-testid=tweet][tabindex="-1"] [href*="${g[1]}"] time`,l=>{window.scroll(0,window.pageYOffset-
75);GM_getValue("opt_gt2").hideTweetAnalytics&&l[0].parentElement.parentElement.querySelectorAll(":scope > span").forEach(p=>p.classList.add("gt2-hidden"));k.source&&l[0].parentElement.insertAdjacentHTML("afterend",`<span class="gt2-tweet-source">${k.source}</span>`)})})}else f||b("body").removeClass("gt2-page-tweet");a=[];!GM_getValue(`sb_notice_ack_update_${GM_info.script.version}`)&&GM_getValue("opt_gt2").updateNotifications&&a.push(ea());a.push(da());if(!f||e("intent",["user","follow"]))!x(c(),
"","explore","home","hashtag","i","messages","notifications","places","search","settings","404")&&!e(null,"communities followers followers_you_follow following lists moments status topics".split(" "))||e("intent",["user","follow"])?(b("body").addClass("gt2-page-profile").removeClass("gt2-profile-not-found gt2-page-profile-youre-blocked"),b("[class^=gt2-blocked-profile-]").remove(),b(".gt2-tco-expanded").removeClass("gt2-tco-expanded"),GM_getValue("opt_gt2").legacyProfile&&(b("body").attr("data-gt2-prev-path")!=
c()&&b("a[href$='/photo'] img").data("alreadyFound",!1),fa()),!GM_getValue("opt_gt2").profileMediaRedirect||1!=c().split("/").length||document.body.dataset.hasOwnProperty("gt2PrevPath")&&document.body.dataset.gt2PrevPath.split("/")[0]==c().split("/")[0]||(m('[href$="/media"][aria-selected=false]',g=>g[0].click()),console.log("redirecting to /media")),GM_getValue("opt_gt2").leftMedia&&(!GM_getValue("opt_gt2").smallSidebars&&1350<window.innerWidth||GM_getValue("opt_gt2").smallSidebars&&1230<window.innerWidth)&&
m("[data-testid=sidebarColumn] a:nth-child(1) [data-testid=tweetPhoto]",g=>{b(".gt2-profile-media").length&&b(".gt2-profile-media").remove();g=b(g).parents("a[role=link]").parent().parent().parent().parent().parent();1==g.parent().children().length&&(g=g.parent());g.detach().addClass("gt2-profile-media").appendTo(".gt2-left-sidebar")})):(b("body").removeClass("gt2-page-profile"),b(".gt2-legacy-profile-banner,\n           .gt2-legacy-profile-nav,\n           .gt2-legacy-profile-info").remove());ca(a);
m('div[data-testid=placementTracking] div[data-testid$="-unblock"],\n                        [data-testid=emptyState] [href="https://support.twitter.com/articles/20172060"]',ka);"home"==c().split("/")[0]?GM_getValue("opt_gt2").forceLatest&&ha():document.body.removeAttribute("data-switched-to-latest");f||b("body").attr("data-gt2-prev-path",c())}if(!(q().match(/^login(\?.*)?$/)||!w()&&q().match(/^(\?.*)?$/))){if(window.location.host.startsWith("mobile."))if(GM_getValue("opt_gt2").mobileRedirect)window.location.href=
window.location.href.replace("//mobile.","//");else return;Number.prototype.humanize=function(){let a=this.toString().split(""),d="",c=1;for(let e=a.length-1;0<=e;e--)d=`${a[e]}${d}`,0==c++%3&&0<=e-1&&(d=`,${d}`);return d};Number.prototype.humanizeShort=function(){let a=this.toString();return 1E6<=this?(a=a.slice(0,-5),`${a.slice(0,-1)}${0!=a.slice(-1)?`.${a.slice(-1)}`:""}M`):1E4<=this?(a=a.slice(0,-2),`${a.slice(0,-1)}${0!=a.slice(-1)?`.${a.slice(-1)}`:""}K`):this.humanize()};String.prototype.toKebab=
function(){let a=this.toString().split("");return a.map((d,c)=>`${0<c&&(!isNaN(d)&&isNaN(a[c-1])||isNaN(d)&&!isNaN(a[c-1])||isNaN(d)&&d==d.toUpperCase())?"-":""}${d.toLowerCase()}`).join("")};String.prototype.replaceAt=function(a,d,c){return`${this.toString().slice(0,a)}${c}${this.toString().slice(a+d)}`};String.prototype.insertAt=function(a,d){return this.toString().replaceAt(a,0,d)};var X=new RegExp(`(${GM_getResourceText("emojiRegex")})`,"gu"),A=null;String.prototype.populateWithEntities=function(a){var d=
this.toString();let c=d;var e=[];if(a.urls)for(var f of a.urls)e.push({[f.indices[0]]:'<a href="',[f.indices[1]]:`" target="_blank">${f.display_url}</a> `});if(a.user_mentions)for(var g of a.user_mentions)f="@"==d.slice(g.indices[0],g.indices[0]+1)?0:1,e.push({[g.indices[0]+f]:`<a href="/${g.screen_name}">`,[g.indices[1]+f]:"</a> "});if(a.hashtags)for(var k of a.hashtags)g="#"==d.slice(k.indices[0],k.indices[0]+1)?0:1,e.push({[k.indices[0]+g]:`<a href="/hashtag/${k.text}">`,[k.indices[1]+g]:"</a> "});
for(g=0;null!=(k=X.exec(d));)if(!(65535>k[1].codePointAt(0))){g++;for(let l in e)f=Object.entries(e[l]),('<a href="'==f[0][1]||1!=g)&&f[0][0]>=k.index&&(e[l]={[parseInt(f[0][0])+1]:f[0][1],[parseInt(f[1][0])+1]:f[1][1]})}e=e.sort((l,p)=>parseInt(Object.keys(l)[0])-parseInt(Object.keys(p)[0]));d=0;for(let l of e)for(let [p,y]of Object.entries(l))c=c.insertAt(parseInt(p)+d,y),d+=y.length;if(GM_getValue("opt_gt2").expandTcoShortlinks){e=/href="(https:\/\/t\.co\/[^"]+)"/;let l;for(;null!=(l=e.exec(c));)c=
c.replace(new RegExp(`href="${l[1]}"`),`href="${a.urls.find(p=>p.url==l[1]).expanded_url}"`)}return c};String.prototype.replaceEmojis=function(){let a=this.toString().replace(/([\*#0-9])\s\u20E3/ug,"$1\u20e3").replace(/([\*#0-9])\uFE0F/ug,"$1"),d=a,c,e=0;for(;null!=(c=X.exec(a));){let g=c[1];var f=[];for(let k=0;k<g.length;k++)f.push(g.codePointAt(k).toString(16)),65535<g.codePointAt(k)&&k++;1<f.length&&f[1].match(/^FE0F$/i)&&f.pop();f=`<img src="https://abs-0.twimg.com/emoji/v2/svg/${f.join("-")}.svg" alt="${g}" class="gt2-emoji" />`;
d=d.replaceAt(c.index+e,g.length,f);e+=f.length-g.length}return d};var u={forceLatest:!1,biggerPreviews:!1,hideTranslateTweetButton:!1,tweetIconsPullLeft:!1,hidePromoteTweetButton:!1,showMediaWithContentWarnings:!1,showMediaWithContentWarningsSel:7,hideTweetAnalytics:!1,stickySidebars:!0,smallSidebars:!1,hideTrends:!1,leftTrends:!0,show5Trends:!1,legacyProfile:!1,squareAvatars:!1,disableHexagonAvatars:!1,enableQuickBlock:!1,leftMedia:!1,profileMediaRedirect:!1,hideFollowSuggestions:!1,hideFollowSuggestionsSel:7,
hideFollowSuggestionsLocSel:3,fontOverride:!1,fontOverrideValue:"Arial",colorOverride:!1,colorOverrideValue:"85, 102, 68",hideMessageBox:!0,rosettaIcons:!1,favoriteLikes:!1,birdIcon:!0,updateNotifications:!0,expandTcoShortlinks:!0,mobileRedirect:!0};void 0==GM_getValue("opt_gt2")&&GM_setValue("opt_gt2",u);if(JSON.stringify(Object.keys(GM_getValue("opt_gt2")))!=JSON.stringify(Object.keys(u))){var v=GM_getValue("opt_gt2");for(var z of Object.keys(u))Object.keys(v).includes(z)&&delete u[z];for(let a of Object.keys(v))Object.keys(u).includes(a)&&
delete v[a];Object.assign(v,u);GM_setValue("opt_gt2",v)}b("body").on("click",".gt2-toggle-settings",function(a){a.preventDefault();window.history.pushState({},"",b(this).attr("href"));P();R()});b("body").on("click","main section[aria-labelledby=root-header] div[role=tablist] a:not(.gt2-toggle-settings),\n                         main section[aria-labelledby=root-header] div[data-testid=loggedOutPrivacySection] a:not(.gt2-toggle-settings)",()=>{b(".gt2-settings-header, .gt2-settings").remove()});b("body").on("click",
".gt2-setting-toggle:not(.gt2-disabled)",function(){b(this).toggleClass("gt2-active");if(b(this).is("[data-setting-name]")){var a=b(this).attr("data-setting-name").trim(),d=a;let c=GM_getValue("opt_gt2");c[d]=!c[d];GM_setValue("opt_gt2",c);b("body").toggleClass(`gt2-opt-${a.toKebab()}`)}b(this).is("[data-sel]")&&(d=b(this).closest("[data-setting-name]").attr("data-setting-name"),a=GM_getValue("opt_gt2"),GM_setValue("opt_gt2",Object.assign(a,{[d]:a[d]^parseInt(b(this).attr("data-sel"))})));Q()});b("body").on("keyup",
".gt2-setting-input input",function(){let a=b(this).parent().attr("data-setting-name").trim(),d=b(this).val().trim();GM_setValue("opt_gt2",Object.assign(GM_getValue("opt_gt2"),{[a]:d}));document.documentElement.style.setProperty(`--${a.replace("Value","").toKebab()}`,d)});b("body").on("click",".gt2-settings-back",()=>window.history.back());GM_getValue("opt_gt2").hideTranslateTweetButton||m("[data-testid=tweet] [lang],\n                        [data-testid=tweet] + div > div:nth-child(2) [role=link] [lang]",
function(a){a=b(a);if(!a.siblings().length){var d=a.attr("lang"),c=B();d!=("en-GB"==c?"en":c)&&"und"!=d&&a.first().after(`
          <div class="gt2-translate-tweet">
            ${h("translateTweet")}
          </div>
        `)}});b("body")[0].addEventListener("click",function(a){if(b(a.target).is(".gt2-translate-tweet, .gt2-legacy-profile-info [data-testid=UserDescription] + [role=button] span")){a.preventDefault();console.log("translating tweet");var d=b(a.target).is(".gt2-translate-tweet")?a.target:b(a.target).parents("[role=button]")[0];if(b(d).parent().find(".gt2-translated-tweet").length)b(d).addClass("gt2-hidden"),b(d).parent().find(".gt2-translated-tweet, .gt2-translated-tweet-info").removeClass("gt2-hidden");
else{var c=b(d).parents("article[data-testid=tweet]").length?b(d).parents("article[data-testid=tweet]").find("> div > div > div > div > div > div:nth-child(1) a[href*='/status/'],\n               div[data-testid=tweet] + div > div:nth-child(3) a[href*='/status/']").attr("href").split("/")[3]:null;b(d).parents("[role=link]").parents("article[data-testid=tweet]").length?G(c,e=>M(d,e.quoted_status_id_str)):b(d).parents("article[data-testid=tweet]").find("[role=link] [lang]").length?G(c,e=>M(d,c,e.quoted_status_id_str)):
M(d,c)}}},!0);b("body")[0].addEventListener("click",function(a){b(a.target).is(".gt2-translated-tweet-info")&&(a.preventDefault(),b(a.target).parent().find(".gt2-translated-tweet, .gt2-translated-tweet-info").addClass("gt2-hidden"),b(a.target).prevAll(".gt2-translate-tweet, [role=button]").removeClass("gt2-hidden"))},!0);b("body").on("click",".gt2-nav .gt2-compose",()=>{b("header a[href='/compose/tweet'] > div").click()});b("body").on("click",".gt2-toggle-navbar-dropdown",()=>{console.log("navbar toggled");
let a=K();b("header nav > [data-testid=AppTabBar_More_Menu]").click();m("div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div ",d=>{if(!b("div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div").find("a[href='/explore']").length){var c=d[0].querySelector("[role=separator]").parentElement.outerHTML;d[0].insertAdjacentHTML("afterbegin",c);d=[{sel:`a[href='/${a.screenName}']`,name:"Profile"},{sel:"a[href$='/lists']",name:"Lists"},{sel:"a[href$='/bookmarks']",name:"Bookmarks"},
{sel:"a[href$='/communities']",name:"Communities"},{sel:"a[href='/explore']",name:"Explore"}];for(let e of d.reverse())b("header nav").find(e.sel).length&&(d=b("header nav").find(e.sel).clone(),d.children().append(`<span>${h(`nav${e.name}`)}</span>`),d.prependTo("div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div"));document.querySelectorAll("div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div [aria-expanded=false]").forEach(e=>{e.click();e.nextElementSibling.insertAdjacentHTML("afterend",
c)});b('<a href="/logout" class="gt2-toggle-logout">Logout</a>').appendTo("div[role=menu][style^='max-height: calc'].r-ipm5af > div > div > div")}})});b("body").on("click",".gt2-toggle-acc-switcher-dropdown",function(){b("body").addClass("gt2-acc-switcher-active");b("div[data-testid=SideNav_AccountSwitcher_Button]").click();b(".gt2-style-acc-switcher-dropdown").remove();let a=b(".gt2-toggle-acc-switcher-dropdown")[0].getBoundingClientRect();b("html").prepend(`
      <style class="gt2-style-acc-switcher-dropdown">
        #layers > div:nth-child(2) > div > div > div:nth-child(2) {
          left: ${Math.round(a.left)-274}px !important;
          top: ${Math.round(a.top)+35}px !important;
        }
      </style>
    `)});b("body").on("click",":not(.gt2-toggle-acc-switcher-dropdown):not(div[data-testid=SideNav_AccountSwitcher_Button])",function(a){a.target.closest('[d^="M22.25 12c0-1.43-.88"]')||setTimeout(function(){b("a[href='/i/flow/login']").length||(b("body").removeClass("gt2-acc-switcher-active"),document.querySelector(".gt2-style-verification")?.remove())},2E3)});b("body").on("click","div[data-testid=primaryColumn] > div > div:nth-child(2)",a=>b(a.currentTarget).addClass("gt2-compose-large"));b("body").on("click",
".gt2-toggle-lo-nightmode",()=>{let a=document.cookie.match(/night_mode=1/)?0:1;document.cookie="night_mode=; Max-Age=0;";let d=new Date;d.setDate(d.getDate()+500);document.cookie=`night_mode=${a}; expires=${d.toUTCString()}; path=/; domain=.twitter.com`;document.cookie=`night_mode=${a}; expires=${d.toUTCString()}; path=/; domain=.x.com`;window.location.reload()});b("body").on("click",".gt2-sidebar-notice-close",function(){b(this).parents(".gt2-sidebar-notice").hasClass("gt2-update-notice")&&GM_setValue(`sb_notice_ack_update_${GM_info.script.version}`,
!0);b(this).parents(".gt2-sidebar-notice").remove()});b("body").on("click",'div[data-testid=placementTracking] div[data-testid$="-unblock"]',()=>b("[class^=gt2-blocked-profile]").remove());b(document).on("click",".gt2-profile-not-found [data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(2) > div[role=button]",()=>b("body").removeClass("gt2-profile-not-found"));b(document).on("mouseover",".gt2-opt-expand-tco-shortlinks div:not([data-testid=placementTracking]) > div > article[data-testid=tweet]:not(.gt2-tco-expanded),\n  .gt2-opt-expand-tco-shortlinks.gt2-page-tweet [data-testid=primaryColumn] section > h1 + div > div > div:nth-child(1) article:not(.gt2-tco-expanded)",
function(){let a=b(this);a.addClass("gt2-tco-expanded");if(a.find('a[href^="http://t.co"], a[href^="https://t.co"], [data-testid="card.wrapper"]').length){var d=!a.find("time").length&&b("body").is(".gt2-page-tweet")?q().split("/")[2].split("?")[0].split("#")[0]:a.find("time").parent().attr("href").split("/status/")[1];G(d,c=>{a.find('a[href^="http://t.co"], a[href^="https://t.co"]').each(function(){b(this).attr("href",c.entities.urls.find(e=>e.url==b(this).attr("href").split("?")[0]).expanded_url)});
a.find('[data-testid="card.layoutSmall.media"] + *:not(a)').each(function(){b(this).wrap(`<a href="${c.entities.urls.find(e=>e.url==c.cards.players.find(f=>Object.values(f.images)[0].image_url.match(b(this).prev().find("img[src*=card_img]").attr("src").match(/card_img\/(\d+)/)[1])).url).expanded_url}"></a>`)})})}});b(document).on("mouseover",".gt2-opt-expand-tco-shortlinks.gt2-page-profile:not(.gt2-opt-legacy-profile) [data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(1):not(.gt2-tco-expanded), .gt2-opt-expand-tco-shortlinks [data-testid=UserCell]",
function(){let a=b(this);a.addClass("gt2-tco-expanded");if(a.find('a[href^="http://t.co"], a[href^="https://t.co"]').length){var d=a.is("[data-testid=UserCell]")?a.find("> div > div:nth-child(2) > div:nth-child(1) a").attr("href").slice(1):q().split("/")[0].split("?")[0].split("#")[0];L(d,c=>{c=c.data.user.legacy.entities;let e=[];c.description&&e.push(...c.description.urls);c.url&&e.push(...c.url.urls);a.find('a[href^="http://t.co"], a[href^="https://t.co"]').each(function(){b(this).attr("href",
e.find(f=>f.url==b(this).attr("href").split("?")[0].split("#")[0]).expanded_url)})})}});if(GM_getValue("opt_gt2").enableQuickBlock){let a;b("body").on("mouseover",'[data-testid$="-follow"]:not([data-gt2-qb-state])',d=>{let c=b(d.target).parents('[data-testid$="-follow"]');c.attr("data-gt2-qb-state","offer-pending");a=setTimeout(()=>{c.attr("data-gt2-qb-state","offer");c.find("> div > span").append(`
    			<span class="gt2-qb-block">${h("qbBlock")}</span>
    			<span class="gt2-qb-blocked">${h("qbBlocked")}</span>
    			<span class="gt2-qb-unblock">${h("qbUnblock")}</span>
  		  `)},3E3)});b("body").on("click",'[data-testid$="-follow"][data-gt2-qb-state=offer]',d=>{d.stopImmediatePropagation();let c=b(d.target).parents('[data-testid$="-follow"]'),e=c.attr("data-testid").slice(0,-7);O(e,!0,()=>{console.log(`quickblock: ${e}`);c.attr("data-gt2-qb-state","blocked")})});b("body").on("click",'[data-testid$="-follow"][data-gt2-qb-state=blocked]',d=>{d.stopImmediatePropagation();let c=b(d.target).parents('[data-testid$="-follow"]'),e=c.attr("data-testid").slice(0,-7);O(e,
!1,()=>{console.log(`quickunblock: ${e}`);c.removeAttr("data-gt2-qb-state");c.find("[class^=gt2-qb]").remove()})});b("body").on("mouseleave",'[data-testid$="-follow"][data-gt2-qb-state^=offer],\n\t\t\t\t\t\t\t\t  [data-testid$="-unfollow"][data-gt2-qb-state^=offer]',d=>{d=b(d.target).parents('[data-testid$="-follow"]');d.removeAttr("data-gt2-qb-state");d.find("[class^=gt2-qb]").remove();clearTimeout(a)})}b("body").on("click",'[data-testid$="-follow"]',a=>b(a.target).parents('[data-testid$="-follow"]').attr("data-gt2-just-clicked-follow",
1));b("body").on("mouseleave",'[data-testid$="-unfollow"][data-gt2-just-clicked-follow]',a=>b(a.target).parents('[data-testid$="-unfollow"]').removeAttr("data-gt2-just-clicked-follow"));b("body").on("click",".gt2-legacy-profile-nav-avatar",()=>b("div[data-testid=primaryColumn] > div > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2)").find('a[href$="/photo"] img, a[href$="/nft"] img').first().click());m('[data-testid=tweet] [href^="/"][href*="/photo/1"] [data-testid=tweetPhoto],\n                      [data-testid=tweet] [data-testid=previewInterstitial]',
a=>{if(GM_getValue("opt_gt2").showMediaWithContentWarnings&&7>GM_getValue("opt_gt2").showMediaWithContentWarningsSel){let d=b(a).closest("[data-testid=tweet]");if(b(a).closest("[aria-labelledby]").find("> div > div > div > div:nth-child(2)").length){let c=b("body").is(".gt2-page-tweet")?q().split("/")[2].split("?")[0].split("#")[0]:d.find("time").parent().attr("href").split("/status/")[1];Y(c,e=>{e=e.extended_entities.media.filter(f=>f.hasOwnProperty("sensitive_media_warning")).map(f=>["adult_content",
"graphic_violence","other"].reduce((g,k,l)=>g+(f.sensitive_media_warning[k]?Math.pow(2,l):0),0)).reduce((f,g)=>f|g);console.log(`cw id: ${c}, opt: ${GM_getValue("opt_gt2").showMediaWithContentWarningsSel} score: ${e}`);(e&GM_getValue("opt_gt2").showMediaWithContentWarningsSel)==e&&d.attr("data-gt2-show-media",1)})}}});GM_getValue("opt_gt2").hideTweetAnalytics&&m('[data-testid=tweet] [href$="/analytics"]',a=>a[0].parentElement.classList.add("gt2-hidden"));b("body").on("click",'[data-testid="accessibilityScreen"] > div:nth-child(3) label [aria-labelledby]',
function(){GM_setValue("opt_display_highContrast",!b(this).find("input").is("[checked]"));E()});m("body:not(.gt2-opt-color-override) [data-testid=SideNav_NewTweet_Button]",a=>{a=b(a).css("background-color");a!=GM_getValue("opt_display_userColor")&&(GM_setValue("opt_display_userColor",a),E())});(new MutationObserver(a=>{a.forEach(d=>{let c=d.target[d.attributeName]["background-color"];d.oldValue&&""!=c&&(GM_setValue("opt_display_bgColor",c),E())})})).observe(b("body")[0],{attributes:!0,attributeOldValue:!0,
attributeFilter:["style"]});(new MutationObserver(a=>{a.forEach(d=>{let c=d.target[d.attributeName]["font-size"];(d=d.oldValue?.match(/font-size: (\d+px);/))&&""!=c&&c!=d[1]&&(GM_setValue("opt_display_fontSize",c),E())})})).observe(b("html")[0],{attributes:!0,attributeOldValue:!0,attributeFilter:["style"]});GM_getValue("opt_gt2").hideMessageBox&&m('.gt2-opt-hide-message-box [data-testid=DMDrawer] path[d^="M12 19.344l-8.72"]',a=>{console.log("Minimized DMDrawer");b(a).parents("[role=button]").click()});
if(GM_getValue("opt_gt2").hideFollowSuggestions){function a(d){if(!d)return d;if(d.prev().length){d=d.prev();if(d.find("article").length)return;d.addClass("gt2-hidden")}else setTimeout(()=>{d=a(d)},100);return d}m(["topics/picker","connect_people","lists/suggested"].filter((d,c)=>(GM_getValue("opt_gt2").hideFollowSuggestionsSel&Math.pow(2,c))==Math.pow(2,c)).map(d=>`[data-testid=primaryColumn] section [href^="/i/${d}"]`).join(", "),d=>{d=b(d).parents("[data-testid=cellInnerDiv]").addClass("gt2-hidden");
d.next().find("div > div:empty").length&&d.next().addClass("gt2-hidden");for(let c=0;6>c;c++)d=a(d)})}m("[data-testid=tweet] [role=group]",a=>b(a).find("[role=button] *").attr("data-gt2-color-override-ignore",""));m('path[d^="M22.5 12.5c0-1.58-.875"]',a=>b(a).parents("svg").attr("data-gt2-color-override-ignore",""));m('[data-gt2-path-modal="i/display"] div:nth-last-child(2) > div > [role=radiogroup],\n                      [data-gt2-path="settings/display"] div:nth-last-child(2) > div > [role=radiogroup]',
a=>{a=b(a).parents("[aria-labelledby]");a.find("[name*=COLOR_PICKER]").parents("label").parent().find("*").attr("data-gt2-color-override-ignore","");a.find("[dir]:nth-child(3) + div:not([dir]) > div > div > div[dir] + div *").attr("data-gt2-color-override-ignore","")});m('[data-testid=cellInnerDiv] article,\n                      [data-testid=cellInnerDiv] a[href^="/i/status/"]',a=>b(a).parents("[data-testid=cellInnerDiv]").children().attr("data-gt2-divider-add-ignore",""));m('path[d^="M23.61.15c-.375"]',
a=>b(a).parents("[role=button]").attr("data-gt2-bell-full-color",""));m('path[d^="M23.24 3.26h-2.425V"]',a=>b(a).parents("[role=button]").removeAttr("data-gt2-bell-full-color",""));b(window).on("resize",()=>{let a=window.innerWidth;!GM_getValue("opt_gt2").smallSidebars&&1350>=a||GM_getValue("opt_gt2").smallSidebars&&1230>=a?b(".gt2-left-sidebar > *").each(function(){b(this).attr("data-gt2-detached-from-left-sidebar",1).detach().insertBefore("div[data-testid=sidebarColumn] > div > div:nth-child(2) > div > div > div > :last-child")}):
b("[data-gt2-detached-from-left-sidebar]").each(function(){b(this).removeAttr("data-gt2-detached-from-left-sidebar").detach().appendTo(".gt2-left-sidebar")})});(function(){let a=window.pageYOffset,d=(window.innerWidth-V())/3-15;b(window).on("scroll",()=>{let c=window.pageYOffset;1500<a&&0==c&&q().match(/^(?:search\?|explore\/?$)/)?window.scroll(0,a):(a<c?b("body").addClass("gt2-scrolled-down"):b("body").removeClass("gt2-scrolled-down"),a=c,c>d?b("body").addClass("gt2-scrolled-down-banner"):(b("body").removeClass("gt2-scrolled-down-banner"),
b(".gt2-legacy-profile-banner img").css("transform",`translate3d(0px, ${c/d*42}%, 0px)`)))})})();J("init");u="function"===typeof exportFunction?exportFunction:a=>a;v=unsafeWindow.wrappedJSObject||unsafeWindow;z=v.History.prototype;var la=u(z.pushState,v);z.pushState=u(function(){let a=2<arguments.length?arguments[2].slice(1):"???";N(a);la.apply(this,arguments);J("push",a)},v);var ma=u(z.replaceState,v);z.replaceState=u(function(){let a=2<arguments.length?arguments[2].slice(1):"???";N(a);ma.apply(this,
arguments);J("replace",a)},v);window.addEventListener("popstate",function(){N(q());J("pop",q())});var na=Range.prototype.selectNodeContents;Range.prototype.selectNodeContents=function(){arguments[0].textContent=arguments[0].textContent.replace(/&t=.*$/,"");na.apply(this,arguments)}}})(jQuery,waitForKeyElements);
