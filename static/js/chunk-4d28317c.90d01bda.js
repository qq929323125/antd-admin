(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d28317c"],{"4af3":function(t,e,i){"use strict";var c=i("9c9e"),n=i.n(c);n.a},7832:function(t,e,i){"use strict";var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exception-page"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config[t.type].img}})]),i("div",{staticClass:"content"},[i("h1",[t._v(t._s(t.config[t.type].title))]),i("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),i("div",{staticClass:"action"},[i("a-button",{attrs:{type:"primary"}},[t._v("返回首页")])],1)])])},n=[],s={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},a=s,o={name:"ExceptionPage",props:["type"],data:function(){return{config:a}}},p=o,r=(i("4af3"),i("0c7c")),l=Object(r["a"])(p,c,n,!1,null,"6e0501e0",null);e["a"]=l.exports},"9c9e":function(t,e,i){},a42a:function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("exception-page",{style:"margin-top: "+t.marginTop+"px; min-height: "+t.minHeight+"px",attrs:{type:"404"}})},n=[],s=i("5530"),a=i("7832"),o=i("2f62"),p={name:"Exp404",components:{ExceptionPage:a["a"]},inject:["layoutMinHeight"],computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])("setting",["multiPage"])),{},{marginTop:function(){return this.multiPage?-24:0},minHeight:function(){return this.multiPage?this.layoutMinHeight-32:this.layoutMinHeight}})},r=p,l=i("0c7c"),g=Object(l["a"])(r,c,n,!1,null,"7ed435c7",null);e["default"]=g.exports}}]);