(function(e){function n(n){for(var t,a,c=n[0],u=n[1],l=n[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,n=0;n<i.length;n++){for(var r=i[n],t=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(t=!1)}t&&(i.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={admin:0},i=[];function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=u;i.push([1,"chunk-vendors"]),r()})({1:function(e,n,r){e.exports=r("aa5a")},"810b":function(e,n,r){"use strict";var t=r("f3f3"),o=r("7bb1"),i=r("4c93");Object(o["c"])("email",i["a"]),Object(o["c"])("required",Object(t["a"])({},i["b"],{message:"{_field_} is required"}))},aa5a:function(e,n,r){"use strict";r.r(n);r("e623"),r("e379"),r("5dc8"),r("37e1");var t=r("2b0e"),o=r("8c4f");t["default"].use(o["a"]);var i=[],a=new o["a"]({base:"//admin",routes:i,linkActiveClass:"is-active"}),c=a,u=r("2f62");t["default"].use(u["a"]);var l=new u["a"].Store({state:{},mutations:{},actions:{},modules:{}}),s=r("0ff2"),f=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("body",{ref:"app"},[r("h1",[e._v("Hello Admin!")])])},d=[],p={},b=p,v=r("2877"),g=Object(v["a"])(b,f,d,!1,null,null,null),h=g.exports;r("ddb8"),r("810b");t["default"].use(s["a"]),t["default"].config.productionTip=!1,new t["default"]({router:c,store:l,render:function(e){return e(h)}}).$mount("#app")},ddb8:function(e,n,r){"use strict";var t=r("9483");Object(t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})}});
//# sourceMappingURL=admin.e821f9a3.js.map