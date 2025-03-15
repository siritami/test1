// ==UserScript==
// @name            manga comic downloader
// @namespace       https://baivong.github.io
// @version         3.4.7
// @icon            https://raw.githubusercontent.com/lelinhtinh/Userscript/master/manga_comic_downloader/icon.png
// @author          Zzbaivong
// @license         MIT; https://baivong.mit-license.org/license.txt
// @match           http://*.truyentranh8.com/*
// @match           https://*.truyentranh8.com/*
// @match           http://*.truyentranh8.net/*
// @match           https://*.truyentranh8.net/*
// @match           http://*.truyentranh8.org/*
// @match           https://*.truyentranh8.org/*
// @match           http://*.truyentranh86.com/*
// @match           https://*.truyentranh86.com/*
// @match           http://*.truyentranh869.com/*
// @match           https://*.truyentranh869.com/*
// @match           https://mangaxy.com/*
// @match           https://*.truyentranh.net/*
// @match           https://*.hamtruyen.com/*
// @match           https://*.hamtruyenmoi.com/*
// @match           https://*.a3manga.com/*
// @match           https://*.a3mnga.com/*
// @match           http://truyentranhtuan.com/*
// @match           https://truyentranhlh.net/*
// @match           https://truyenhay24h.com/*
// @match           https://thichtruyentranh.com/*
// @match           https://lxhentai.com/*
// @match           https://hentaivn.net/*
// @match           https://hentaivn.moe/*
// @match           https://otakusan.net/*
// @match           https://*.ngonphong.com/*
// @match           https://*.nettruyen.com/*
// @match           http://*.nettruyen.com/*
// @match           https://*.nettruyentop.com/*
// @match           http://*.nettruyentop.com/*
// @match           http://*.nettruyenonline.com/*
// @match           https://*.nettruyenonline.com/*
// @match           http://*.nettruyenapp.com/*
// @match           https://*.nettruyenapp.com/*
// @match           http://*.nettruyenpro.com/*
// @match           https://*.nettruyenpro.com/*
// @match           http://*.nettruyengo.com/*
// @match           https://*.nettruyengo.com/*
// @match           https://*.nettruyenmax.com/*
// @match           http://*.nettruyenmoi.com/*
// @match           https://*.nettruyenbb.com/*
// @match           https://*.kingtruyen.com/*
// @match           http://nhattruyen.com/*
// @match           http://nhattruyengo.com/*
// @match           http://*.hamtruyentranh.net/*
// @match           https://ttmanga.com/*
// @match           http://truyen.vnsharing.site/*
// @match           http://*.blogtruyen.com/*
// @match           https://*.blogtruyen.com/*
// @match           https://*.blogtruyenmoi.com/*
// @match           http://*.blogtruyen.vn/*
// @match           https://*.blogtruyen.vn/*
// @match           http://*.blogtruyen.top/*
// @match           https://*.blogtruyen.top/*
// @match           https://truyensieuhay.com/*
// @match           http://truyenqqvn.com/*
// @match           http://truyenqqvn.net/*
// @match           http://truyenqqtop.com/*
// @match           http://truyenqqpro.com/*
// @match           https://hentaicube.net/*
// @match           https://hentaicb.top/*
// @match           http://*.tuthienbao.com/*
// @match           https://vietcomic.net/*
// @match           https://hamtruyentranh.com/*
// @match           https://khotruyentranhz.com/*
// @match           https://truyenvn.com/*
// @match           https://truyenvn.vip/*
// @match           https://truyenvnpro.com/*
// @match           https://*.saytruyen.net/*
// @match           https://*.saytruyen.com/*
// @match           https://*.sayhentai.net/*
// @match           https://cocomic.net/truyen-tranh/*
// @require         https://code.jquery.com/jquery-3.6.0.min.js
// @require         https://unpkg.com/@zip.js/zip.js@2.7.41/dist/zip.min.js
// @require         https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js
// @require         https://cdn.jsdelivr.net/npm/web-streams-polyfill@2.0.2/dist/ponyfill.min.js
// @require         https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js
// @require         https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js?v=a834d46
// @require         https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require         https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@53bb1cde47a849dd166443a24b92f15432d7c40a/dist/es5/detectIncognito.min.js
// @resource        success https://unpkg.com/facebook-sound-kit@2.0.0/Low_Volume_-20dB/Complete_and_Success/Success_2.m4a
// @resource        error https://unpkg.com/facebook-sound-kit@2.0.0/Low_Volume_-20dB/Errors_and_Cancel/Error_2.m4a
// @noframes
// @connect         *
// @supportURL      https://github.com/lelinhtinh/Userscript/issues
// @run-at          document-start
// @grant           GM_addStyle
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @grant           GM.getResourceUrl
// @grant           GM_getResourceURL
// @grant           GM_registerMenuCommand
// @downloadURL https://raw.githubusercontent.com/siritami/test1/release/release/manga20comic20downloader.user.js
// @updateURL https://raw.githubusercontent.com/siritami/test1/release/release/manga20comic20downloader.meta.js
// ==/UserScript==
window._URL=window.URL||window.webkitURL;
jQuery(function(f){function p(a,b){function d(){var k=y.find("#mcd_noty_wrap");k.length&&(k.fadeOut(300,function(){k.remove();k=[]}),clearTimeout(I))}function c(){I=setTimeout(function(){d()},2E3)}var g=y.find("#mcd_noty_wrap");if(!g.length){g=f("<div>",{id:"mcd_noty_wrap"});var q=f("<div>",{id:"mcd_noty_content",class:"mcd_"+b,html:a}),t=f("<div>",{id:"mcd_noty_close",html:"&times;"});g=g.append(q).append(t);g.appendTo("body")}g.find("#mcd_noty_content").attr("class","mcd_"+b).html(a);g.fadeIn(300);
clearTimeout(I);y.on("click","#mcd_noty_wrap",function(){d()}).on("mouseenter","#mcd_noty_wrap",function(){clearTimeout(I)}).on("mouseleave","#mcd_noty_wrap",c);"warning"!==b&&"success"!==b&&c()}function v(a){return e.link.split(/\s*,\s*/).map(function(b){return b+a}).join(",")}function Y(){f(v('[href="'+e.href+'"]')).css({color:"red",textShadow:"0 0 1px red, 0 0 1px red, 0 0 1px red"});D=!0}function Z(){var a=f(v('[href="'+e.href+'"]'));D||a.css({color:"green",textShadow:"0 0 1px green, 0 0 1px green, 0 0 1px green"})}
function O(a){a.preventDefault();a.returnValue=""}function P(){Y();w=!1;window.removeEventListener("beforeunload",O);setTimeout(()=>{h.length||w||!Q||Q.play()},0)}function aa(){p("L\u1ed7i! Kh\u00f4ng t\u1ea3i \u0111\u01b0\u1ee3c <strong>"+n+"</strong>","error");P()}function l(){p("L\u1ed7i! <strong>"+n+"</strong> kh\u00f4ng c\u00f3 d\u1eef li\u1ec7u","error");P()}function ba(a){1>E&&(E=1);32<E&&(E=32);z=a.map(function(b){return{url:b,attempt:5}});A=z.length;ca();p("B\u1eaft \u0111\u1ea7u t\u1ea3i <strong>"+
n+"</strong>","warning");window.addEventListener("beforeunload",O)}function da(){document.title="[\u2026] "+R;p("<strong>"+n+"</strong> \u0111ang l\u1ea5y d\u1eef li\u1ec7u...","warning");h=h.filter(function(a){return-1===e.href.indexOf(a)});f(v('[href="'+e.href+'"]')).css({color:"orange",fontWeight:"bold",fontStyle:"italic",textDecoration:"underline",textShadow:"0 0 1px orange, 0 0 1px orange, 0 0 1px orange"})}function ea(){h=[];f(e.link).each(function(a,b){h[a]=f(b).attr("href")});e.reverse&&h.reverse()}
function fa(){p("Script \u0111\u00e3 <strong>s\u1eb5n s\u00e0ng</strong> l\u00e0m vi\u1ec7c","info");ea();y.on("click",e.link,function(a){if(a.ctrlKey||a.shiftKey){a.preventDefault();var b=f(this).attr("href");a.ctrlKey&&a.shiftKey?(h=h.filter(function(d){return-1===b.indexOf(d)}),f(v('[href="'+b+'"]')).css({color:"gray",fontWeight:"bold",fontStyle:"italic",textDecoration:"line-through",textShadow:"0 0 1px gray, 0 0 1px gray, 0 0 1px gray"})):(F||(h=[],F=!0),h.push(b),a=a.shiftKey?"violet":"purple",
f(v('[href="'+b+'"]')).css({color:a,textDecoration:"overline",textShadow:"0 0 1px "+a+", 0 0 1px "+a+", 0 0 1px "+a}))}}).on("keyup",function(a){if("Control"===a.key||"Shift"===a.key)a.preventDefault(),h.length&&F&&("Shift"===a.key&&(B=!0),J())})}function J(){w||K||(F||h.length||ea(),h.length&&(K=!0,f(v('[href$="'+h[0]+'"]')).trigger("contextmenu")))}function ha(){B=!0;J()}async function pa(a,b){p("T\u1ea3i ho\u00e0n t\u1ea5t <strong>"+b+"</strong>","info");try{const {isPrivate:d}=await detectIncognito();
if(d)throw"isPrivate";const c=streamSaver.createWriteStream(b,{size:a.size}),g=a.stream();if(window.WritableStream&&g.pipeTo)return g.pipeTo(c);window.writer=c.getWriter();const q=g.getReader(),t=()=>q.read().then(k=>k.done?window.writer.close():window.writer.write(k.value).then(t));t()}catch(d){console.warn(d),saveAs(a,b)}}function ia(){return n.replace(/\s+/g,"_").replace(/\u30fb/g,"\u00b7").replace(/(^_+|_+$)/,"")}function S(){B||(G=new TransformStream,ja=(new Response(G.readable)).blob(),L=new zip.ZipWriter(G.writable,
{zip64:!0}),T=new AbortController,C=T.signal,M=[]);A=H=u=0;z=[];w=D=!1;K&&(h.length?f(v('[href$="'+h[0]+'"]')).trigger("contextmenu"):F=K=!1);setTimeout(()=>{h.length||w||!U||U.play()},0)}async function ka(){p("T\u1ea1o file n\u00e9n c\u1ee7a <strong>"+n+"</strong>","warning");try{await Promise.all(M);await L.close();const a=await ja;pa(a,ia()+".cbz");Z();window.removeEventListener("beforeunload",O);document.title="[\u21d3] "+R;S()}catch(a){console.error(a),(C.reason==a||C.reason&&C.reason.code==
a.code)&&zip.terminateWorkers(),p("L\u1ed7i n\u00e9n d\u1eef li\u1ec7u c\u1ee7a <strong>"+n+"</strong>","error"),P(),document.title="[x] "+R,S()}}function la(a,b,d,c,g){0>=z[a].attempt?(H++,d(c,g)):setTimeout(function(){ma(a,b,d);z[a].attempt--},2E3)}function ma(a,b,d){var c=z[a].url,g=("0000"+u).slice(-4),q={};0===c.indexOf("//")&&(c=location.protocol+c);var t=(new URL(c)).hostname;V[t]?(q.referer=V[t],q.origin=V[t]):(q.referer=location.origin,q.origin=location.origin);GM.xmlHttpRequest({method:"GET",
url:c,responseType:"arraybuffer",headers:q,onload:function(k){var m=k.response;if(m.byteLength){var N=new DataView(m,0,5);m=N.getUint8(0,!0);N=N.getUint8(1,!0);switch(m.toString(16)+N.toString(16)){case "8950":m="png";break;case "4749":m="gif";break;case "ffd8":m="jpg";break;case "424d":m="bmp";break;case "5249":m="webp";break;default:m=null}}else m=null;if("gif"===m)return W();!m||100>k.response.byteLength||"OK"!==k.statusText&&""!==k.statusText?la(a,b,d,k,g):(g=g+"."+m,b(k.response,g))},onerror:function(k){la(a,
b,d,k,g)}})}function W(){p("\u0110ang t\u1ea3i xu\u1ed1ng <strong>"+H++ +"/"+A+"</strong>","warning");H<u||(H<A?ca():B?h.length?(Z(),S()):(B=!1,ka()):ka())}function ca(){var a=u+E,b="";a>A&&(a=A);B&&(b=ia()+"/");for(u;u<a;u++)ma(u,function(d,c){d=L.add(b+c,(new Response(d)).body,{signal:C,onend:W});M.push(d)},function(d,c){M.push(L.add(b+c+"_error.txt",(new Blob([d.statusText+"\r\n"+d.finalUrl])).stream(),{signal:C,onend:W}));p(d.statusText,"error");Y()})}function qa(a){return ra.some(function(b){return-1!==
a.indexOf(b)})}function sa(a){a=(new DOMParser).parseFromString("<!doctype html><body>"+a,"text/html");a=decodeURIComponent(a.body.textContent);a=a.trim();a=a.replace(/^.+(&|\?)url=/,"");a=a.replace(/(https?:\/\/)lh(\d)(\.bp\.blogspot\.com)/,"$1$2$3");a=a.replace(/(https?:\/\/)lh\d\.(googleusercontent|ggpht)\.com/,"$14.bp.blogspot.com");a=a.replace(/\?.+$/,"");-1!==a.indexOf("imgur.com")?a=a.replace(/(\/)(\w{5}|\w{7})(s|b|t|m|l|h)(\.(jpe?g|png|webp))$/,"$1$2$4"):-1!==a.indexOf("blogspot.com")?(a=
a.replace(/\/([^/]+-)?(Ic42)(-[^/]+)?\//,"/$2/"),a=a.replace(/\/(((s|w|h)\d+|(w|h)\d+-(w|h)\d+))?-?(c|d|g)?\/(?=[^/]+$)/,"/"),a+="?imgmax=16383"):a=a.replace(/(\?|&).+/,"");a=encodeURI(a);0===a.indexOf("//")&&(a=location.protocol+a);0!==a.search(/https?:\/\//)&&(a="http://"+a);-1!==a.search(/(i\.imgur\.com|\.blogspot\.com|\.fbcdn\.net|storage\.fshare\.vn)/i)&&0===a.indexOf("http://")&&(a=a.replace(/^http:\/\//,"https://"));return a}function x(a){var b=[];a.length?(f.each(a,function(d,c){c=c.replace(/^[\s\n]+|[\s\n]+$/g,
"");if(ta.some(function(g){return-1!==c.indexOf(g)}))b.push(c);else if(!qa(c)&&"undefined"!==typeof c&&!/[><"']/.test(c)&&(0!==c.indexOf(location.origin)&&(0!==c.indexOf("/")||0===c.indexOf("//"))||/^(\.(jpg|png)|webp|jpeg)$/.test(c.slice(-4)))){if(0!==c.indexOf("http")&&0!==c.indexOf("//"))c=location.origin+(0===c.indexOf("/")?"":"/")+c;else if(0===c.indexOf("http")||0===c.indexOf("//"))c=sa(c);else return;b.push(c)}}),ba(b)):l()}function na(a){var b=[];a.each(function(d,c){c=f(c);b[d]=(e.imgSrc?
c.attr(e.imgSrc):c.data("src")||c.data("original"))||c.attr("src")});x(b)}function ua(a,b){var d=f(a),c=e.name;e.href=d.attr("href");n=d.text().trim();"function"===typeof c?n=c(a,n):"string"===typeof c&&(n=f(c).text().trim()+" "+n);da();GM.xmlHttpRequest({method:"GET",url:e.href,onload:function(g){g=g.responseText;e.imgSrc||(g=g.replace(/[\s\n]+src[\s\n]*=[\s\n]*/gi," data-src="));g=g.replace(/^[^<]*/,"");g=f(g);if("function"===typeof b)b(g);else{var q="find";e.filter&&(q="filter");g=g[q](e.contents).find("img");
g.length?na(g):l()}},onerror:function(){aa()}})}function oa(){return w?(p("Ch\u1ec9 \u0111\u01b0\u1ee3c ph\u00e9p <strong>t\u1ea3i m\u1ed9t truy\u1ec7n</strong> m\u1ed7i l\u1ea7n","error"),!1):w=!0}function r(a){f(e.link).length&&(y.on("contextmenu",e.link,function(b){b.preventDefault();D=!1;oa()&&ua(b.currentTarget,a)}),fa())}function va(){r(function(a){var b=a.find('script:contains("htmlContent")');a=a.filter('script:contains("htmlContent")');b.length&&a.length?(a=a.text().match(/(CryptoJSAesDecrypt\(.+?(?:(;}|htmlContent\);)))/g),
b=new Function(b.text()+"function "+a[0]+"return "+a[1]),this.CryptoJS=CryptoJS,b.apply(this),(b=b().match(/(?<=(data-(lqz53ud|3dn5rc9)="))(.+?)(?=")/g))?(b=b.map(d=>{d=d.replace(/LqZ53ud|3Dn5rc9/g,".");d=d.replace(/pPdp7FG|gNa8fuX/g,":");return d=d.replace(/9pyrBcb|hT3k3S6/g,"/")}),x(b)):l()):l()})}function wa(){r(function(a){var b=a.find("#read-title").next("script");if(b.length){a=b.text().match(/var\s+slides_page_path\s*=\s*(.+?);/)[1];a=JSON.parse(a);b=[];if(1!=(0<a.length?2:1))b=a;else{var d,
c=b.length-1;for(a=0;a<c;a++)for(d=a+1;d<b.length;d++)if(b[d]<b[a]){var g=b[d];b[d]=b[a];b[a]=g}}x(b)}else l()})}function xa(){r(function(a){a=a.find("#dvContentChap").siblings("script").text();a=a.match(/GI2017\(([^;]+);/)[1];a=a.split(/[,']+/);f.post("/TH24Service.asmx/GetChapterImages",{PID:a[0],ChapNumber:a[1],cc18:a[2],name:"",s:0}).done(function(b){var d=[];f(b).find("string").each(function(c,g){d[c]=g.textContent.replace(/\.(jpe?g|png)\w*$/,".$1")});x(d)}).fail(function(){aa()})})}function ya(){r(function(a){a=
a.find("#content_read").next("script").text();a=a.match(/https?:\/\/[^"]+/g);a.length?x(a):l()})}function za(){var a=document.querySelector("#inner-listshowchapter");if(null!==a){p("wait a moment...","warning");setTimeout(()=>{a.scrollIntoView()},0);var b=new MutationObserver(function(d){d.forEach(function(c){"childList"===c.type&&c.target.querySelector(e.link)&&(r(),b.disconnect())})});b.observe(a,{attributes:!1,childList:!0,subtree:!1})}}function Aa(){var a=f(e.link);a.length&&(a.on("contextmenu",
function(b){b.preventDefault();D=!1;oa()&&(b=f(this),e.href=b.attr("href"),n=f("h1.title").first().attr("title")+" "+b.text().trim(),da(),GM.xmlHttpRequest({method:"GET",url:e.href,withCredentials:!0,headers:{host:"otakusan.net"},onload:function(){GM.xmlHttpRequest({method:"POST",url:"/Manga/UpdateView",responseType:"json",withCredentials:!0,headers:{host:"otakusan.net","content-length":14,"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},data:"chapId="+e.href.match(/\/(\d+)\/.+$/)[1],
onload:function(d){d=d.response;d.chapid?ba(JSON.parse(d.view)):l()}})}}))}),fa())}function Ba(){r(function(a){a=a.find("#divImage").siblings("script").first().text();if(/lstImages\.push\("([^"]+)"\)/.test(a)){for(var b=/lstImages\.push\("([^"]+)"\)/gi,d,c=[];d=b.exec(a);)c.push(decodeURIComponent(d[1]));x(c)}else l()})}function Ca(){r(function(a){a.find("#wrap_alertvip").length?l():(a=a.find(".content-chap-image").find("script:not([type]):first").text(),(a=/\bgetContentchap\('(.+?)','(.+?)'\)/.exec(a))?
f.ajax({type:"POST",url:"/Service.asmx/getContentChap",data:'{ sID: "'+a[1]+'",chuc:"'+a[2]+'" }',contentType:"application/json; charset=utf-8",dataType:"json",success:function(b){if(b.Message)l();else{b=JSON.parse(b.d);var d=b.des;b=b.id;b=b.substring(2,b.length-3);b=CryptoJS.enc.Utf8.parse(b.toLowerCase());var c=CryptoJS.enc.Utf8.parse("gqLOHUioQ0QjhuvI");d=CryptoJS.AES.decrypt(d,b,{iv:c,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8);d=f(d).filter("img");na(d)}},error:function(){l()}}):l())})}
function Da(){r(function(a){a=a.filter('script:not([src]):contains("Loadimage(i)")');a.length?(a=a.text().match(/data\s=\s'(.+?)';/))?(a=a[1],a=a.split("|"),x(a)):l():l()})}var E=4,ra="http://truyentranhtam.net/templates/main/images/gioithieubanbe3.png http://1.bp.blogspot.com/-U1SdU4_52Xs/WvLvn1OjvHI/AAAAAAAEugM/dLBgVGSeUN0bVy-FoFfIZvrCJ07YQew7wCHMYCw/s0/haybaoloi.png /public/images/loading.gif http://truyentranhlh.net/wp-content/uploads/2015/10/lhmanga.png /Content/Img/1eeef5d2-b936-496d-ba41-df1b21d0166a.jpg /Content/Img/d79886b3-3699-47b2-bbf4-af6149c2e8fb.jpg http://st.beeng.net/files/uploads/images/21/c8/21c8d2c3599c485e31f270675bc57e4c.jpeg 00k9jbV.gif".split(" "),
ta="proxy.truyen.cloud .ttmanga.com .fbcdn.net mangaqq.net mangaqq.com truyenqqvn.net truyenqqvn.com truyenqqtop.com truyenqqpro.com .upanhmoi.net qqtaku.com qqtaku.net trangshop.net .beeng.net .beeng.org forumnt.com hoitruyentranh.com hoihentai.com i02.hentaivn.net truyentop1.com anhnhanh.org truyenvua.xyz hamtruyen.vn .xem-truyen.com".split(" "),V={"i8.xem-truyen.com":"https://blogtruyenmoi.com","i.blogtruyen.com":"https://blogtruyen.com","truyen.cloud":"http://www.nettruyen.com","proxy.truyen.cloud":"http://www.nettruyen.com",
"i.netsnippet.com":"http://www.nettruyen.com/","forumnt.com":"http://www.nettruyen.com/","upload.forumnt.com":"http://www.nettruyen.com/","upload2.forumnt.com":"http://www.nettruyen.com/","upload.upanhmoi.net":"https://upanhmoi.net","upload2.upanhmoi.net":"https://upanhmoi.net","upload3.upanhmoi.net":"https://upanhmoi.net","upload4.upanhmoi.com":"https://upanhmoi.com","upload5.upanhmoi.com":"https://upanhmoi.com","upload6.upanhmoi.com":"https://upanhmoi.com","upload7.upanhmoi.com":"https://upanhmoi.com",
"upload8.upanhmoi.com":"https://upanhmoi.com","upload9.upanhmoi.com":"https://upanhmoi.com","img1.upanhmoi.net":"https://upanhmoi.net","img2.upanhmoi.net":"https://upanhmoi.net","proxy1.ttmanga.com":"https://ttmanga.com","proxy2.ttmanga.com":"https://ttmanga.com","proxy3.ttmanga.com":"https://ttmanga.com","cdn.lhmanga.com":"https://truyentranhlh.net","cdn1.lhmanga.com":"https://truyentranhlh.net","storage.fshare.vn":"https://truyentranh.net","ocumeo.com":"https://www.a3manga.com/","www.ocumeo.com":"https://www.a3manga.com/",
"mangaqq.net":"http://truyenqqpro.com/","mangaqq.com":"http://truyenqqpro.com/","truyenqq.net":"http://truyenqqpro.com/","truyenvua.xyz":"http://truyenqqpro.com/","i02.hentaivn.net":"https://hentaivn.net/","i1.hentaivn.net":"https://hentaivn.net/","i.imgur.com":"https://imgur.com/"};window.URL=window._URL;var U,Q;GM.getResourceUrl("success").then(function(a){U=new Audio(a)});GM.getResourceUrl("error").then(function(a){Q=new Audio(a)});var I,Ea={reverse:!0,link:"",name:"",contents:"",imgSrc:"",filter:!1,
init:r},n,X=location.host,R=document.title,y=f(document),G=new TransformStream,ja=(new Response(G.readable)).blob(),L=new zip.ZipWriter(G.writable,{zip64:!0}),T=new AbortController,C=T.signal,M=[],u=0,H=0,A=0,z=[],h=[],D=!1,w=!1,K=!1,F=!1,B=!1;streamSaver.mitm="https://lelinhtinh.github.io/stream/mitm.html";GM_registerMenuCommand("Download All Chapters",J);GM_registerMenuCommand("Download All To One File",ha);y.on("keydown",function(a){"KeyY"===a.code&&a.altKey&&(a.preventDefault(),a.shiftKey?ha():
J())});GM_addStyle("#mcd_noty_wrap{background:#fff;position:fixed;z-index:2147483647;right:20px;top:20px;min-width:150px;max-width:100%;padding:15px 25px;border:1px solid #ddd;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 1px 10px rgba(0,0,0,.35);cursor:pointer}#mcd_noty_content{color:#444}#mcd_noty_content strong{font-weight:700}#mcd_noty_content.mcd_info strong{color:#2196f3}#mcd_noty_content.mcd_success strong{color:#4caf50}#mcd_noty_content.mcd_warning strong{color:#ffc107}#mcd_noty_content.mcd_error strong{color:#f44336}#mcd_noty_content strong.centered{display:block;text-align:center}#mcd_noty_close{position:absolute;right:0;top:0;font-size:18px;color:#ddd;height:20px;width:20px;line-height:20px;text-align:center}#mcd_noty_wrap:hover #mcd_noty_close{color:#333}");
switch(X){case "truyentranh8.com":case "truyentranh8.net":case "truyentranh8.org":case "truyentranh869.com":case "truyentranh86.com":var e={link:"#ChapList a",name:function(a){return f(".breadcrumb li:last").text().trim()+" "+f(a).find("span, strong, h2").text().trim()},contents:"#reading-detail"};break;case "mangaxy.com":e={link:"#ChapList a",name:function(a){var b=f("h1.comics-title").text();a=f(a).find("div.episode-title").text();return`${b} ${a}`},contents:"#reading-detail"};break;case "truyentranh.net":case "www.truyentranh.net":e=
{reverse:!1,link:".chapter-list-item-box a",name:function(a){return f("h1").text().trim()+" "+f(a).text().trim()},contents:".manga-reading-box"};break;case "hamtruyen.com":case "www.hamtruyen.com":case "hamtruyenmoi.com":e={link:".list-chaps a",name:"h3.story-name",contents:".list-images"};break;case "m.hamtruyen.com":e={link:".list-chap a",name:".tentruyen",contents:"#content_chap"};break;case "a3manga.com":case "www.a3manga.com":case "a3mnga.com":case "www.a3mnga.com":case "www.ngonphong.com":e=
{link:".chapter-table a.text-capitalize",init:va};break;case "truyentranhtuan.com":e={link:".chapter-name a",init:wa};break;case "truyentranhlh.net":e={link:".list-chapters a",contents:"#chapter-content",name:function(a){return f(".series-name").text().trim()+" "+f(a).find(".chapter-name").text().trim()}};break;case "truyenhay24h.com":e={link:".nano .chapname a",name:".name_sp",init:xa};break;case "thichtruyentranh.com":e={reverse:!1,link:"#listChapterBlock .ul_listchap a",init:ya};break;case "lxhentai.com":e=
{link:'[style="max-height: 500px"] a',contents:'[class="text-center"]',name:function(a){return f(".grow.text-lg.ml-1.text-ellipsis.font-semibold:first").text().trim()+" "+f(a).find("span.text-ellipsis").text().trim()}};break;case "hentaivn.net":case "hentaivn.moe":e=[{link:".listing a",name:function(a){var b=f('h1[itemprop="name"]').find("a").text();b=b.split("-")[0].trim();a=f(a).find(".chuong_t").attr("title");a=a.split("-")[1].trim();return`${b} ${a}`},contents:"#image",init:za},{link:".episodes a",
name:'[itemprop="name"] b',contents:"#image"}];break;case "otakusan.net":e={link:".read-chapter a",name:"h1.header",init:Aa};break;case "www.nettruyen.com":case "nhattruyen.com":case "nhattruyengo.com":case "www.nettruyenapp.com":case "www.nettruyenpro.com":case "www.nettruyengo.com":case "www.nettruyenmoi.com":case "www.nettruyenmax.com":e={link:"#nt_listchapter .chapter a",name:".title-detail",contents:".reading-detail.box_doc",imgSrc:"data-original"};break;case "www.nettruyentop.com":case "www.nettruyenonline.com":case "www.nettruyenbb.com":case "kingtruyen.com":e=
{link:"#nt_listchapter .chapter a",name:".title-detail",contents:".readimg,.reading-detail.box_doc"};break;case "www.hamtruyentranh.net":e={link:"#examples a",name:function(a){a=f(a).clone();a.find("span").remove();return f(".title-manga").text().trim()+" "+a.text().trim()},contents:".each-page"};break;case "ttmanga.com":e={link:"#list-chapter a",init:Ba};break;case "truyen.vnsharing.site":e={link:"#manga-chaplist a",contents:".read_content"};break;case "blogtruyen.com":case "blogtruyen.vn":case "blogtruyen.top":case "blogtruyenmoi.com":case "www.blogtruyen.com":case "www.blogtruyen.vn":case "www.blogtruyen.top":e=
{link:"#list-chapters .title a",contents:"#content"};break;case "m.blogtruyen.com":case "m.blogtruyen.vn":case "m.blogtruyen.top":case "m.blogtruyenmoi.com":e={link:".list-chapter a",name:function(a){return f("h1.title").text().trim()+" "+f(a).find("span").text().trim()},contents:".content"};break;case "truyensieuhay.com":e={link:"#chapter-list-flag a",name:"h1",init:Ca};break;case "truyenqq.com":case "truyenqq.net":case "truyenqqtop.com":case "truyenqqpro.com":e={link:".works-chapter-list a",name:"h1",
contents:".chapter_content"};break;case "hentaicube.net":case "hentaicb.top":e={link:".wp-manga-chapter a",name:".post-title",contents:".reading-content",imgSrc:"data-src"};break;case "tuthienbao.com":case "www.tuthienbao.com":e={link:'a[id^="thread_title_"]',contents:".quotecontent"};break;case "vietcomic.net":e={link:'.chapter-list a:not([rel="nofollow"])',name:function(a,b){return f(".manga-info-text h1").text().trim()+" "+b},init:Da};break;case "hamtruyentranh.com":e={reverse:!1,link:"#chaps .chapter-title a:not([target])",
name:"h1",contents:".table-responsive",imgSrc:"id-source"};break;case "khotruyentranhz.com":e={link:"#chapters-list-content .chapter-list a",name:"h1",contents:".box-chapter-content"};break;case "truyenvn.com":case "truyenvn.vip":case "truyenvnpro.com":e={link:"#chapterList a",name:function(a){return f("h1.name").text().trim()+" "+f(a).find("span:first").text().trim()},contents:".content-text"};break;case "saytruyen.net":case "www.saytruyen.net":case "saytruyen.com":case "www.saytruyen.com":case "sayhentai.net":case "www.sayhentai.net":case "sayhentai.tv":e=
{link:".main-col .wp-manga-chapter a",name:".post-title h1",contents:"#chapter_content"};break;case "cocomic.net":e={link:".chapter-list .citem a",name:"h1",contents:".chapter-content"};break;default:e={}}Array.isArray(e)&&(X=/mobi|android|touch|mini/i.test(navigator.userAgent.toLowerCase()),e=e[X?1:0]);e&&(e=f.extend(Ea,e),e.init())});
