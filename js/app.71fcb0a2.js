(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/adivina-tu-familiar/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0779":function(e,t,n){"use strict";var r=n("6353"),a=n.n(r);a.a},"0e20":function(e,t,n){e.exports=n.p+"img/dog-2.66d35eac.svg"},"0e66":function(e,t,n){e.exports=n.p+"img/guy-1.eb6094b7.svg"},"1e72":function(e,t,n){e.exports=n.p+"img/boy-2.bda8dd98.svg"},"2ea3":function(e,t,n){e.exports=n.p+"img/dog-1.1f9752c8.svg"},3083:function(e,t,n){e.exports=n.p+"img/grandmother.33a7be38.svg"},3349:function(e,t,n){e.exports=n.p+"img/lost-cat.51c55bff.svg"},"3c5f":function(e,t,n){e.exports=n.p+"img/celebration.1e694168.svg"},4260:function(e,t){String.prototype.replaceAt=function(){var e=null==arguments[2]?1:arguments[2];return this.substring(0,arguments[0])+arguments[1]+this.substring(arguments[0]+e)}},4531:function(e,t,n){e.exports=n.p+"img/mother.2935b810.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),s={},i=o.a.create(s);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["a"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)},l=[],u={name:"App",data:function(){return{}}},m=u,d=n("2877"),p=n("6544"),v=n.n(p),f=n("7496"),g=n("a75b"),b=Object(d["a"])(m,c,l,!1,null,null,null),h=b.exports;v()(b,{VApp:f["a"],VContent:g["a"]});var _=n("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":""}},[r("bubble",{attrs:{top:""}}),r("bubble",{attrs:{bottom:"",color:"#26a69a"}}),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("v-scroll-x-transition",[e.display_cover?r("div",{staticClass:"d-flex justify-center"},[r("img",{staticClass:"mx-auto",attrs:{src:n("7c58"),width:"80%"}})]):e._e()]),r("v-scroll-x-reverse-transition",[e.display_copy?r("h1",{staticClass:"text-center font-weight-bold mb-5"},[e._v(" ¿Adivinas qué familiar soy? ")]):e._e()]),r("v-scroll-x-transition",[e.display_copy?r("p",{staticClass:"text-center mb-5"},[e._v(" ¿Estás seguro? ")]):e._e()]),r("v-scroll-x-reverse-transition",[r("div",{staticClass:"d-flex justify-center"},[e.display_copy?r("v-btn",{attrs:{to:"/adivinar",dark:"",color:"red accent-2"}},[e._v(" ADIVINA ")]):e._e()],1)])],1)],1)],1)},x=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.position},[n("svg",{attrs:{width:"100%",height:"151",viewBox:"0 0 471 151",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M289.5 149.978C182.489 151.234 26.2139 83.9103 1 57.5V1H470V39.6169C468.006 98.072 396.511 148.722 289.5 149.978Z",fill:e.color}}),n("path",{attrs:{d:"M1 57.5C26.2139 83.9103 182.489 151.234 289.5 149.978C396.511 148.722 468.006 98.072 470 39.6169M1 57.5L470 39.6169M1 57.5V1H470V39.6169",stroke:e.color}})])])},C=[],V={props:{color:{type:String,default:"#ffca28"},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1}},computed:{position:function(){return"bubble "+(this.bottom?"bottom":(this.top,"top"))}}},j=V,M=(n("0779"),Object(d["a"])(j,w,C,!1,null,null,null)),S=M.exports,O={name:"Home",components:{Bubble:S},data:function(){return{display_cover:!1,display_copy:!1}},mounted:function(){var e=this;setTimeout((function(){e.display_cover=!0}),1200),setTimeout((function(){e.display_copy=!0}),2e3)}},E=O,T=n("8336"),P=n("62ad"),k=n("a523"),A=n("0fd9"),I=n("0789"),L=Object(d["a"])(E,y,x,!1,null,null,null),B=L.exports;v()(L,{VBtn:T["a"],VCol:P["a"],VContainer:k["a"],VRow:A["a"],VScrollXReverseTransition:I["d"],VScrollXTransition:I["e"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("bubble",{attrs:{top:""}}),n("bubble",{attrs:{bottom:"",color:"#26a69a"}}),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[e.ready?[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"font-weight-bold"},[e._v("PISTAS")])])],1),n("v-row",e._l(e.random_member.clues,(function(t,r){return n("v-col",{key:r,staticClass:"text-center",attrs:{cols:"12"}},[n("v-chip",{staticClass:"ma-2",attrs:{label:"",dark:"",color:"red accent-2"}},[e._v(" "+e._s(t.toUpperCase())+" ")])],1)})),1),n("v-row",[n("v-col",{staticClass:"text-center ",attrs:{cols:"12"}},[n("p",[e._v("¿Adivinaste?")])])],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"6",offset:"3"}},[n("v-select",{attrs:{items:e.possible_members,"item-text":"name","item-value":"id",label:"Soy ...",solo:""},on:{change:function(t){return e.chooseMember()}},model:{value:e.selected_member_id,callback:function(t){e.selected_member_id=t},expression:"selected_member_id"}})],1)],1)]:[n("h1",{staticClass:"text-center mb-5 spacing-3"},[e._v(" "+e._s(e.hideText(e.random_member.name))+" ")])]],2)],1),n("v-dialog",{attrs:{width:"300",persistent:""},model:{value:e.comodin.open,callback:function(t){e.$set(e.comodin,"open",t)},expression:"comodin.open"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[e.comodin.attemps<=2?[e._v(" Tienes poco tiempo ")]:[e._v(" Lo sentimos ")],n("v-chip",{staticClass:"ma-2",attrs:{dark:"",color:"red accent-2"}},[e._v(" "+e._s(e.comodin.timer)+" ")])],2),n("v-card-text",[e.comodin.attemps<=2?[e._v(" Estos son mis familiares cercanos: "),n("v-list",e._l(e.random_member.nears,(function(t,r){return n("v-list-item",{key:r},[n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t)+" ")])],1)],1)})),1)]:[e._v(" Has agotado todos tus comodines 😔 ")]],2)],1),n("v-progress-linear",{attrs:{color:"red accent-2",indeterminate:"",reactive:""},model:{value:e.comodin.progress,callback:function(t){e.$set(e.comodin,"progress",t)},expression:"comodin.progress"}})],1),n("v-speed-dial",{attrs:{fab:"",absolute:"",bottom:"",right:"",direction:"left",transition:"slide-x-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"amber lighten-1",dark:"",fab:""},on:{click:function(t){return e.showComodin()}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-account-question")])],1)]},proxy:!0}])})],1)},$=[],R=(n("c740"),n("4160"),n("caad"),n("b0c0"),n("5530")),N={members:[{id:1,name:"Luthor",clues:["A veces travieso","Soy Blanco","Hago reír"],nears:["Christopher","Che Dario"],img_path:"dog-2.svg"},{id:2,name:"Mau",clues:["Soy dormilón","A veces lloro","Me gusta comer"],nears:["María","Elena"],img_path:"cat-1.svg"},{id:3,name:"Tommy",clues:["Me gusta tomar sol","Bailarín","Soy juguetón"],nears:["Diter","Olinda"],img_path:"dog-happy.svg"},{id:4,name:"Luna",clues:["Me gusta comer","Soy rastreador","Amo dormir"],nears:["Manu","Liz"],img_path:"dog-1.svg"},{id:5,name:"Dixie",clues:["Chambeo en el mercado","No tengo miedo a nada","Orejas de avión"],nears:["Olinda","Manu"],img_path:"dog-2.svg"},{id:6,name:"Liam",clues:["Soy bailarín","Me gusta jugar","Veo dibujos en YouTube"],nears:["Eudes","Jessica"],img_path:"boy-1.svg"},{id:7,name:"Leandro",clues:["Me gusta jugar fútbol","Tengo una tablet","Sé contar en inglés"],nears:["Eudes","Jessica"],img_path:"boy-2.svg"},{id:8,name:"Randy",clues:["Sporting Cristal 💗","Gamer","Soy un cra"],nears:["Gladys","Elena"],img_path:"teenager-1.svg"},{id:9,name:"Mamá Polita",clues:["Siempre pienso en todos","Soy bien fuerte","No me gustan los flojos"],nears:["Lucha","Hilda","Walter","Gladys","Elena"],img_path:"grandmother.svg"}]},G={name:"Guess",components:{Bubble:S},data:function(){return{ready:!1,members:[],selected_member_id:"",random_member:{},possible_members:[],comodin:{attemps:0,open:!1,timer:5,interval:null}}},created:function(){this.members=N.members},mounted:function(){var e=this,t=setInterval((function(){e.random_member=e.members[Math.floor(Math.random()*e.members.length)]}),100);setTimeout((function(){clearInterval(t),e.generatePossibleMembers(Object(R["a"])({},e.random_member)),e.ready=!0}),3e3)},methods:{hideText:function(e){if(e){var t=Math.floor(e.length/2)+1,n=[];while(n.length<t){var r=Math.floor(Math.random()*e.length);n.includes(r)||n.push(r)}var a=e;return n.forEach((function(e){a=a.replaceAt(e,"*")})),a}return""},chooseMember:function(){this.$store.commit("SET_WANTED_MEMBER",this.random_member),this.$store.commit("SET_GUESSED_RIGHT",this.selected_member_id===this.random_member.id),this.$router.push("/adivinar/resultados")},generatePossibleMembers:function(e){var t=[],n=this.members.findIndex((function(t){return t.id==e.id}));-1!==n&&(e.name=this.hideText(e.name),t.push(e));while(t.length<3){var r=Math.floor(Math.random()*this.members.length);if(n!==r){var a=Object(R["a"])({},this.members[r]);a.name=this.hideText(a.name),t.push(a)}}this.possible_members=t},showComodin:function(){this.comodin.open=!0,this.comodin.attemps++;var e=this;e.comodin.interval=setInterval((function(){e.comodin.timer--}),1e3)}},watch:{"comodin.timer":function(e){0===e&&(clearInterval(this.comodin.interval),this.comodin.open=!1,this.comodin.timer=5)}}},H=G,U=(n("f3ac"),n("b0af")),J=n("99d9"),q=n("cc20"),W=n("169a"),X=n("132d"),Y=n("8860"),z=n("da13"),F=n("5d23"),Z=n("8e36"),K=n("b974"),Q=n("c73b"),ee=Object(d["a"])(H,D,$,!1,null,null,null),te=ee.exports;v()(ee,{VBtn:T["a"],VCard:U["a"],VCardText:J["a"],VCardTitle:J["b"],VChip:q["a"],VCol:P["a"],VContainer:k["a"],VDialog:W["a"],VIcon:X["a"],VList:Y["a"],VListItem:z["a"],VListItemContent:F["a"],VListItemTitle:F["b"],VProgressLinear:Z["a"],VRow:A["a"],VSelect:K["a"],VSpeedDial:Q["a"]});var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("bubble",{attrs:{top:""}}),n("bubble",{attrs:{bottom:"",color:"#26a69a"}}),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.guessed_right?"Yeeeeh!!! Adivinaste 🎉":"Ouhhh!!! No adivinaste 😔")+" ")])])],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("div",{staticClass:"d-flex justify-center"},[n("img",{staticClass:"mx-auto",attrs:{src:e.memberImagePath,width:"50%"}})])])],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h2",[e._v(" "+e._s(e.guessed_right?"Te acordaste de mí, soy "+e.wanted_member.name+" 🎉":"No te acordaste de mí, soy "+e.wanted_member.name+" 😔")+" ")])])],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"red accent-2",dark:"",to:"/adivinar"}},[e._v(" VOLVER A ADIVINAR ")])],1)],1)],1)],1)],1)},re=[],ae=n("2f62"),oe={name:"Guess",components:{Bubble:S},data:function(){return{members:[]}},created:function(){this.members=N.members},computed:Object(R["a"])({},Object(ae["b"])(["wanted_member","guessed_right"]),{memberImagePath:function(){return n("bb6e")("./".concat(this.wanted_member.img_path))}})},se=oe,ie=Object(d["a"])(se,ne,re,!1,null,null,null),ce=ie.exports;v()(ie,{VBtn:T["a"],VCol:P["a"],VContainer:k["a"],VRow:A["a"]}),r["a"].use(_["a"]);var le,ue=[{path:"/",name:"home",component:B},{path:"/adivinar",name:"guess",component:te},{path:"/adivinar/resultados",name:"guess_results",component:ce}],me=new _["a"]({mode:"history",base:"/adivina-tu-familiar/",routes:ue}),de=me,pe=n("ade3");r["a"].use(ae["a"]);var ve=new ae["a"].Store({state:{wanted_member:{},guessed_right:!1},mutations:(le={},Object(pe["a"])(le,"SET_WANTED_MEMBER",(function(e,t){e.wanted_member=t})),Object(pe["a"])(le,"SET_GUESSED_RIGHT",(function(e,t){e.guessed_right=t})),le),actions:{},getters:{}}),fe=n("f309");r["a"].use(fe["a"]);var ge=new fe["a"]({});n("4260");r["a"].config.productionTip=!1,new r["a"]({router:de,store:ve,vuetify:ge,render:function(e){return e(h)}}).$mount("#app")},6353:function(e,t,n){},"6d19":function(e,t,n){e.exports=n.p+"img/happy-cat.3dcaebb1.svg"},"7c58":function(e,t,n){e.exports=n.p+"img/family.617cf336.svg"},"88f0":function(e,t,n){e.exports=n.p+"img/sad-cat.ad6853dd.svg"},"8ec5":function(e,t,n){e.exports=n.p+"img/surprised-cat.224355fc.svg"},"8fc6":function(e,t,n){e.exports=n.p+"img/teenager-1.33ed43df.svg"},"96e0":function(e,t,n){e.exports=n.p+"img/girl-1.bcb94104.svg"},"9f96":function(e,t,n){e.exports=n.p+"img/father.752dcb41.svg"},b3ad:function(e,t,n){e.exports=n.p+"img/cat-2.a2af3676.svg"},bb6e:function(e,t,n){var r={"./boy-1.svg":"df0c","./boy-2.svg":"1e72","./cat-1.svg":"cde5","./cat-2.svg":"b3ad","./celebration.svg":"3c5f","./dog-1.svg":"2ea3","./dog-2.svg":"0e20","./dog-happy.svg":"cffb","./family.svg":"7c58","./father.svg":"9f96","./girl-1.svg":"96e0","./girl-2.svg":"ee72","./grandmother.svg":"3083","./guy-1.svg":"0e66","./happy-cat.svg":"6d19","./lost-cat.svg":"3349","./mother.svg":"4531","./sad-cat.svg":"88f0","./surprised-cat.svg":"8ec5","./teenager-1.svg":"8fc6","./teenager-2.svg":"e9df"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="bb6e"},cde5:function(e,t,n){e.exports=n.p+"img/cat-1.101e7004.svg"},cffb:function(e,t,n){e.exports=n.p+"img/dog-happy.01e2a18a.svg"},df0c:function(e,t,n){e.exports=n.p+"img/boy-1.3595b142.svg"},e953:function(e,t,n){},e9df:function(e,t,n){e.exports=n.p+"img/teenager-2.a7bd0a9c.svg"},ee72:function(e,t,n){e.exports=n.p+"img/girl-2.bfbe8a5a.svg"},f3ac:function(e,t,n){"use strict";var r=n("e953"),a=n.n(r);a.a}});
//# sourceMappingURL=app.71fcb0a2.js.map