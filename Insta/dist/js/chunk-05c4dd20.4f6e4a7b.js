(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c4dd20"],{"41a3":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"d-inline-flex flex-wrap",attrs:{flat:""}},t._l(t.contacts,(function(a){return e("ContactCard",{key:a.id,attrs:{contact:a,bookmarked:t.bookmarked}})})),1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-4",attrs:{width:"400px"}},[e("v-card-title",[t._v(" "+t._s(t.contact.name)+" ")]),e("v-card-subtitle",[t._v(" "+t._s(t.contact.company)+" ")]),e("v-card-text",[t._v(" "+t._s(t.contact.email)+" "),t.bookmarked?t._e():e("v-btn",{attrs:{color:"pink",dark:"",absolute:"",bottom:"",right:"",fab:"",small:""},on:{click:t.bookmarkContact}},[e("v-icon",[t._v("mdi-bookmark-plus")])],1)],1)],1)},o=[],s=(e("96cf"),e("1da1")),i={props:["contact","bookmarked"],methods:{bookmarkContact:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("serverRequest",{action:"bookmark_contact",data:{contactId:t.contact.id,userId:t.$store.state.userId}});case 2:t.$store.commit("addBookmark",t.contact.id);case 3:case"end":return a.stop()}}),a)})))()}}},d=i,u=e("2877"),l=e("6544"),m=e.n(l),v=e("8336"),k=e("b0af"),p=e("99d9"),b=e("132d"),f=Object(u["a"])(d,c,o,!1,null,"baf99308",null),C=f.exports;m()(f,{VBtn:v["a"],VCard:k["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VIcon:b["a"]});var h={props:["contacts","bookmarked"],components:{ContactCard:C}},_=h,w=Object(u["a"])(_,n,r,!1,null,null,null);a["a"]=w.exports;m()(w,{VCard:k["a"]})},c93c:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title",[t._v(" Контакты ")]),e("v-divider"),e("v-card-text",[e("DisplayContacts",{attrs:{contacts:this.$store.state.contacts,bookmarked:!1}})],1)],1)},r=[],c=(e("96cf"),e("1da1")),o=e("41a3"),s=e("56d7"),i={components:{DisplayContacts:o["a"]},methods:{getContacts:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s["eventBus"].$emit("startLoading"),a.next=3,t.$store.dispatch("serverRequest",{action:"get_contacts",data:""});case 3:s["eventBus"].$emit("endLoading");case 4:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getContacts()}},d=i,u=e("2877"),l=e("6544"),m=e.n(l),v=e("b0af"),k=e("99d9"),p=e("ce7e"),b=Object(u["a"])(d,n,r,!1,null,"97f78bfa",null);a["default"]=b.exports;m()(b,{VCard:v["a"],VCardText:k["c"],VCardTitle:k["d"],VDivider:p["a"]})}}]);