(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3655658d"],{"4a1f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"search-head"},[e("div",{staticClass:"search-input"},[e("a-input-search",{staticClass:"search-ipt",staticStyle:{width:"522px"},attrs:{placeholder:"请输入...",size:"large",enterButton:"搜索"}})],1),e("div",{staticStyle:{padding:"0 24px"}},[e("a-tabs",{attrs:{tabBarStyle:{margin:0},activeKey:t.activeKey},on:{change:t.navigate}},[e("a-tab-pane",{key:"1",attrs:{tab:"文章"}}),e("a-tab-pane",{key:"2",attrs:{tab:"应用"}}),e("a-tab-pane",{key:"3",attrs:{tab:"项目"}})],1)],1)]),e("div",{staticClass:"search-content"},[e("router-view")],1)])},r=[],c={name:"SearchLayout",computed:{activeKey:function(){switch(this.$route.path){case"/list/search/article":return"1";case"/list/search/application":return"2";case"/list/search/project":return"3";default:return"1"}}},methods:{navigate:function(t){switch(t){case"1":this.$router.push("/list/search/article");break;case"2":this.$router.push("/list/search/application");break;case"3":this.$router.push("/list/search/project");break;default:this.$router.push("/workplace")}}}},i=c,n=(e("8f37"),e("0c7c")),u=Object(n["a"])(i,s,r,!1,null,"7f15589b",null);a["default"]=u.exports},"8f37":function(t,a,e){"use strict";var s=e("fec0"),r=e.n(s);r.a},fec0:function(t,a,e){}}]);