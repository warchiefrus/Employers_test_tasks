(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-b9ee1e50":"ed9ad150","chunk-05c4597e":"6537c3ec","chunk-05c4dd20":"4f6e4a7b","chunk-14add243":"780fb81e","chunk-07c7c572":"f88d3e0c","chunk-5bc01288":"99d860da"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-b9ee1e50":1,"chunk-14add243":1,"chunk-07c7c572":1,"chunk-5bc01288":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-b9ee1e50":"6ec24605","chunk-05c4597e":"31d6cfe0","chunk-05c4dd20":"31d6cfe0","chunk-14add243":"c354d77a","chunk-07c7c572":"b911b4ff","chunk-5bc01288":"96e577e3"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Insta/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return M}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-overlay",{attrs:{value:e.overlay,"z-index":"9999"}},[n("v-progress-circular",{attrs:{indeterminate:"",size:64}})],1),"/register"!=this.$route.path&&"/login"!=this.$route.path?n("v-app-bar",{staticClass:"mx-0",attrs:{app:"",color:"blue-grey lighten-4",height:"48px"}},[n("div",{staticClass:"d-flex align-center"},[e._v(" Какойто проект ")]),n("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"ml-5",attrs:{text:"",to:"/",exact:"","active-class":"accent",draggable:"false"}},r),[n("v-icon",[e._v("mdi-contacts")])],1)]}}],null,!1,3154140181)},[n("span",[e._v("Контакты")])]),n("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"ml-5",attrs:{text:"",to:"/bookmarks",exact:"","active-class":"accent",draggable:"false"}},r),[n("v-icon",[e._v("mdi-bookmark")])],1)]}}],null,!1,1671394997)},[n("span",[e._v("Избранные")])]),n("v-spacer"),n("v-label",[e._v(e._s(this.$store.state.user))]),n("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{text:"",rounded:"",color:"error"},on:{click:e.logout}},r),[n("v-icon",{attrs:{dark:""}},[e._v("fas fa-sign-out-alt")])],1)]}}],null,!1,3478237087)},[n("span",[e._v("Выйти")])])],1):e._e(),n("v-main",[n("router-view")],1)],1)},o=[],c={name:"App",components:{},data:function(){return{overlay:!1}},methods:{startLoading:function(){this.overlay=!0},endLoading:function(){this.overlay=!1},logout:function(){this.$store.commit("userLogout"),this.$router.push("/login")}}},u=c,s=n("2877"),i=n("6544"),l=n.n(i),d=n("7496"),p=n("40dc"),f=n("8336"),h=n("132d"),m=n("24c9"),v=n("f6c4"),g=n("a797"),b=n("490a"),k=n("2fa4"),y=n("3a2f"),_=Object(s["a"])(u,a,o,!1,null,null,null),w=_.exports;l()(_,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:h["a"],VLabel:m["a"],VMain:v["a"],VOverlay:g["a"],VProgressCircular:b["a"],VSpacer:k["a"],VTooltip:y["a"]});n("b0c0"),n("d3b7");var x=n("8c4f"),S=n("2f62"),T=(n("96cf"),n("1da1")),O=n("bc3a"),P=n.n(O),j={namespaced:!1,actions:{serverLogin:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState,a=e.commit,o=null,n.next=4,P.a.post("".concat(r.srvPath,"login.php"),{request:t},{headers:{"Content-Type":"application/json"}}).then((function(e){if(e.data.error)o=!1;else switch(e.data.action){case"login_user":a("setUser",e.data),o=!0;break;case"logout_user":a("userLogout"),o=!0;break;case"register_user":o=!0;break}})).catch((function(e){M.$emit("showInfo","Ошибка соединения"),console.log(e),o=!1}));case 4:return n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()}}},A=j,C={namespaced:!1,actions:{serverRequest:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState,a=e.commit,o=null,n.next=4,P.a.post("".concat(r.srvPath,"postData.php"),{request:t},{headers:{"Content-Type":"application/json"}}).then((function(e){if(e.data.error)o=!1;else switch(e.data.action){case"get_contacts":console.log(e.data.result),a("updateContacts",e.data.result),o=!0;break;case"bookmark_contact":o=!0;break}})).catch((function(e){M.$emit("showInfo","Ошибка соединения"),console.log(e),o=!1}));case 4:return n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()}}},L=C;r["a"].use(S["a"]);var B="php/",E=new S["a"].Store({state:{user:null,userId:null,userToken:null,userBookmarks:[],isAuthenticated:!1,srvPath:B,contacts:[]},mutations:{setUser:function(e,t){e.user=t.user,e.userToken=t.userToken,e.userId=t.userId,e.userBookmarks=JSON.parse(t.userBookmarks),e.userToken?(e.isAuthenticated=!0,localStorage.setItem("userToken",JSON.stringify(t.userToken))):e.isAuthenticated=!1},userLogout:function(e){e.user=null,e.userToken=null,e.isAuthenticated=!1,localStorage.setItem("userToken","")},updateContacts:function(e,t){e.contacts=t},addBookmark:function(e,t){e.userBookmarks.push(t)}},actions:{},modules:{authActions:A,userActions:L}});r["a"].use(x["a"]);var I=[{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-b9ee1e50"),n.e("chunk-14add243"),n.e("chunk-07c7c572")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-b9ee1e50"),n.e("chunk-14add243"),n.e("chunk-5bc01288")]).then(n.bind(null,"73cf"))}},{path:"/",name:"contacts",component:function(){return Promise.all([n.e("chunk-b9ee1e50"),n.e("chunk-05c4dd20")]).then(n.bind(null,"c93c"))}},{path:"/bookmarks",name:"bookmarks",component:function(){return Promise.all([n.e("chunk-b9ee1e50"),n.e("chunk-05c4597e")]).then(n.bind(null,"b51b"))}}],V=new x["a"]({mode:"history",base:"/Insta/",routes:I});V.beforeEach((function(e,t,n){"login"===e.name||"register"===e.name||E.state.isAuthenticated?n():n({name:"login"})}));var $=V,N=n("f309");n("15f5"),n("5363");r["a"].use(N["a"]);var q=new N["a"]({}),M=new r["a"];r["a"].config.productionTip=!1,new r["a"]({router:$,store:E,vuetify:q,render:function(e){return e(w)}}).$mount("#app")}});