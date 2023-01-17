(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(766),t.b),l=i()(o()),u=s()(d);l.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    color: rgb(73, 4, 4);\n}\n\n@font-face {\n    font-family: 'FixedSys';\n    src: url("+u+") format('ttf')\n}\n\n.header {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: 'FixedSys';\n    background-color: darkgoldenrod;\n    width: 100vw;\n    height: 10vh;\n}\n\n.headingMenu {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.headingButton {\n    margin: 20px;\n    outline: none;\n    width: 100px;\n  height: 30px;\n  border: 2px solid rgb(73, 4, 4);\n  background: transparent;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n}\n\n.headingButton:hover{\n    background: transparent;\n    color: rgb(73, 4, 4);\n  }\n  .headingButton span {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .headingButton:before,\n  .headingButton:after {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton:before {\n    height: 0%;\n    width: 2px;\n  }\n  .headingButton:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton:hover:before {\n    height: 100%;\n  }\n  .headingButton:hover:after {\n    width: 100%;\n  }\n  .headingButton span:before,\n  .headingButton span:after {\n    position: absolute;\n    content: \"\";\n    right: 0;\n    bottom: 0;\n    background: rgb(73, 4, 4);\n    transition: all 0.3s ease;\n  }\n  .headingButton span:before {\n    width: 2px;\n    height: 0%;\n  }\n  .headingButton span:after {\n    width: 0%;\n    height: 2px;\n  }\n  .headingButton span:hover:before {\n    height: 100%;\n  }\n  .headingButton span:hover:after {\n    width: 100%;\n  }\n\n\n.main {\n    background-color: #B86E03;\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: rgb(73, 4, 4);\n}\n\n.welcomeMessage {\n    margin: 20px;\n\n}\n\n.adText {\n    padding: 20px;\n    width: 25%;\n    text-align: center;\n}\n\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 10vh;\n    background-color: darkgoldenrod;\n}",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},766:(n,e,t)=>{n.exports=t.p+"c79051f539825f0859aa.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(890),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let g=document.getElementById("content");g.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("div");e.classList.add("headingLogo"),e.setAttribute("id","buttonContainer"),e.innerHTML="<h1>The Jolly Badger</h1>",n.appendChild(e);const t=document.createElement("div");return t.classList.add("headingMenu"),t.setAttribute("id","headingMenu"),n.appendChild(t),n}()),function(){let n=document.getElementById("headingMenu"),e=document.createElement("button");e.innerHTML="Home",e.classList.add("headingButton"),n.appendChild(e);const t=document.createElement("button");t.innerHTML="Menu",t.classList.add("headingButton"),n.appendChild(t);const r=document.createElement("button");r.innerHTML="Contact",r.classList.add("headingButton"),n.appendChild(r)}(),g.appendChild(function(){const n=document.createElement("div");return n.classList.add("main"),n.setAttribute("id","mainContent"),n}()),function(){let n=document.getElementById("mainContent");const e=document.createElement("div");e.classList.add("welcomeMessage"),e.innerHTML="<h2>Welcome to The Jolly Badger</h2>",n.appendChild(e);const t=document.createElement("div");t.classList.add("adText"),t.innerHTML="<h3>The place for mediocre ale, depressing pub food and frequent fights.</h3>",n.appendChild(t);const r=document.createElement("div");r.classList.add("adText"),r.innerHTML="<p>Step in and experience the utter bleariness of life in Britain.</p>",n.appendChild(r)}(),function(){let n=document.getElementById("content");const e=document.createElement("div");e.classList.add("footer"),e.innerHTML="antero 2023",n.appendChild(e)}()})()})();