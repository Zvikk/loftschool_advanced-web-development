!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=8)}({2:function(e,t,r){},3:function(e,t){var r;(r=Array.prototype.slice.call(document.querySelectorAll(".skill"))).length,r.forEach(function(e){var t,r,n,o,i=e.querySelector(".skills__circle--above"),l=(t=0,r=565,n=!0,o=Math.floor(Math.random()*(r-t+1))+t,n&&0==o?1:o);i.setAttribute("stroke-dashoffset",l)})},8:function(e,t,r){"use strict";r.r(t);r(2),r(3),function(){var e=document.querySelector(".header");window.scrollY>100?e.classList.add("is-fixed"):e.classList.remove("is-fixed"),window.addEventListener("wheel",function(t){window.scrollY>100?e.classList.add("is-fixed"):e.classList.remove("is-fixed")})}();document.querySelector(".header__nav-btn").addEventListener("click",function(e){this.classList.toggle("is-active")})}});