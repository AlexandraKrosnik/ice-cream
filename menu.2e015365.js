parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i0CD":[function(require,module,exports) {
(()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-open]"),c=document.querySelector("[data-menu-close]"),d=document.querySelector("[data-mobMenu-close]"),o=document.querySelector("[data-close]"),n=document.querySelector("[data-close-two]"),a=document.querySelector("[data-close-three]"),l=document.querySelector("[data-close-four]"),r=document.querySelector("[data-close-five]"),i=()=>{if(document.documentElement.scrollWidth<1280){const c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)}};t.addEventListener("click",i),c.addEventListener("click",i),d.addEventListener("click",i),o.addEventListener("click",i),n.addEventListener("click",i),a.addEventListener("click",i),l.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 1280px)").addEventListener("change",c=>{c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
},{}]},{},["i0CD"], null)
//# sourceMappingURL=/ice-cream/menu.2e015365.js.map