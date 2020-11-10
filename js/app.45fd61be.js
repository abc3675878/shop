(function(t){function e(e){for(var n,i,u=e[0],c=e[1],s=e[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function i(t){return u.p+"js/"+({about:"about",cart:"cart"}[t]||t)+"."+{about:"2d84044c",cart:"85a322ef"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var n=r("2b0e"),o=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(o["a"]);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-container",[r("b-row",[r("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),r("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1)]),r("b-col",{attrs:{cols:"12"}},[r("router-view")],1)],1)],1)],1)},i=[],u=r("2877"),c={},s=Object(u["a"])(c,a,i,!1,null,null,null),l=s.exports,p=(r("d3b7"),r("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("b-row",t._l(t.items,(function(e,n){return r("b-col",{key:n,attrs:{cols:"12",md:"6",lg:"3"}},[r("b-card",{attrs:{title:e.name,"img-src":e.img,"img-top":"","sub-title":"$"+e.price}},[r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(r){return t.addCard(e)}}},[r("font-awesome-icon",{attrs:{icon:["fas","shopping-cart"]}}),t._v(" 加入購物車")],1)],1)],1)})),1)],1)},f=[],m={name:"Home",data:function(){return{items:[{img:"https://e.ecimg.tw/items/DYAJCHA900AP7EG/000002_1604373280.jpg",name:"Apple Airpods Pro",price:6090},{img:"https://f.ecimg.tw/items/DYAJ93A900AXPNV/000002_1603176778.jpg",name:"Apple iPhone 12",price:28500},{img:"https://b.ecimg.tw/items/DGCN2JA900AUWBX/000002_1602499802.jpg",name:"GoPro Hero9",price:16800},{img:"https://c.ecimg.tw/items/DGBJDE1900AB40Y/000002_1604368410.jpg",name:"Nintendo Switch",price:9580}]}},methods:{addCard:function(t){this.$store.commit("addCart",t)}}},b=m,h=Object(u["a"])(b,d,f,!1,null,null,null),v=h.exports;n["default"].use(p["a"]);var g=[{path:"/",name:"Home",component:v,meta:{title:"網路行銷購物網"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"關於網路行銷購物網"}},{path:"/cart",name:"Cart",component:function(){return r.e("cart").then(r.bind(null,"b789"))},meta:{title:"我的購物車"}}],w=new p["a"]({routes:g});w.afterEach((function(t){document.title=t.meta.title}));var y=w,_=(r("a434"),r("2f62"));n["default"].use(_["a"]);var j=new _["a"].Store({state:{items:[]},mutations:{addCart:function(t,e){t.items.push(e)},delCart:function(t,e){t.items.splice(e,1)}},actions:{},modules:{}}),A=r("ecee"),P=r("ad3d"),O=r("c074"),C=r("b702");A["c"].add(O["a"],C["a"]),n["default"].component("font-awesome-icon",P["a"]),n["default"].config.productionTip=!1,new n["default"]({router:y,store:j,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.45fd61be.js.map