(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65fe78b5"],{"0d60":function(e,t,a){},1501:function(e,t){e.exports={messages:{CN:{desc:"高级表单常见于一次性输入和提交大批量数据的场景。",repository:"仓库管理",task:"任务管理",user:"用户管理",submit:"提交"},HK:{desc:"高級表單常見於一次性輸入和提交大批量數據的場景。",repository:"倉庫管理",task:"任務管理",user:"用戶管理",submit:"提交"},US:{desc:"Advanced forms are common in scenarios where large quantities of data are entered and submitted at one time.",repository:"Repository Manage",task:"Task Manage",user:"User Manage",submit:"submit"}}}},"184c":function(e,t,a){},2032:function(e,t,a){},"28b8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{staticClass:"card",attrs:{title:e.$t("repository"),bordered:!1}},[a("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),a("a-card",{staticClass:"card",attrs:{title:e.$t("task"),bordered:!1}},[a("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),a("a-card",{attrs:{title:e.$t("user"),bordered:!1}},[a("user-form")],1),a("footer-tool-bar",[a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v(e._s(e.$t("submit")))])],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.name",{rules:[{required:!0,message:e.$ta("input|name"),whitespace:!0}]}],expression:"['repository.name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|name")}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("domain")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.domain",{rules:[{required:!0,message:e.$ta("input|domain"),whitespace:!0},{validator:e.validate}]}],expression:"['repository.domain', {rules: [{ required: true, message: $ta('input|domain'), whitespace: true}, {validator: validate}]}]"}],attrs:{addonBefore:"http://",addonAfter:".github.io",placeholder:e.$ta("input|domain")}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("manager")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.manager",{rules:[{required:!0,message:e.$ta("select|manager")}]}],expression:"['repository.manager', {rules: [{ required: true, message: $ta('select|manager')}]}]"}],attrs:{placeholder:e.$ta("select|manager")}},[a("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),a("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),a("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("approval")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.auditor",{rules:[{required:!0,message:e.$ta("select|approval")}]}],expression:"['repository.auditor', {rules: [{ required: true, message: $ta('select|approval')}]}]"}],attrs:{placeholder:e.$ta("select|approval")}},[a("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),a("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("date")}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.effectiveDate",{rules:[{required:!0,message:e.$ta("select|date")}]}],expression:"['repository.effectiveDate', {rules: [{ required: true, message: $ta('select|date')}]}]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("type")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.type",{rules:[{required:!0,message:e.$ta("select|type")}]}],expression:"['repository.type', {rules: [{ required: true, message: $ta('select|type')}]}]"}],attrs:{placeholder:e.$ta("select|type")}},[a("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),a("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},n=[],i={name:"RepositoryForm",props:["showSubmit"],i18n:a("484d"),data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},validate:function(e,t,a){void 0!==t&&"iczer"!==t&&a("输入'iczer'试下？"),a()}}},l=i,c=(a("733a"),a("0c7c")),u=Object(c["a"])(l,o,n,!1,null,"1fda15e3",null),m=u.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.name",{rules:[{required:!0,message:e.$ta("input|name"),whitespace:!0}]}],expression:"['task.name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|name")}})],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("describe")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.description",{rules:[{required:!0,message:e.$ta("input|describe"),whitespace:!0}]}],expression:"['task.description', {rules: [{ required: true, message: $ta('input|describe'), whitespace: true}]}]"}],attrs:{placeholder:e.$ta("input|describe")}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("executor")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.executor",{rules:[{required:!0,message:e.$ta("select|executor")}]}],expression:"['task.executor', {rules: [{ required: true, message: $ta('select|executor')}]}]"}],attrs:{placeholder:e.$ta("select|executor")}},[a("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),a("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row"},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:e.$t("duty")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.manager",{rules:[{required:!0,message:e.$ta("select|duty")}]}],expression:"['task.manager', {rules: [{ required: true, message: $ta('select|duty')}]}]"}],attrs:{placeholder:e.$ta("select|duty")}},[a("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),a("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:e.$t("time")}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.time",{rules:[{required:!0,message:e.$ta("select|time")}]}],expression:"['task.time', {rules: [{ required: true, message: $ta('select|time')}]}]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:e.$t("type")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.type",{rules:[{required:!0,message:e.$ta("select|type")}]}],expression:"['task.type', {rules: [{ required: true, message: $ta('select|type')}]}]"}],attrs:{placeholder:e.$ta("select|type")}},[a("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),a("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},p=[],f={name:"TaskForm",props:["showSubmit"],i18n:a("c30d"),data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}}},v=f,b=(a("5b67"),Object(c["a"])(v,d,p,!1,null,"68e5928b",null)),y=b.exports,h=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("form",{attrs:{autoFormCreate:function(t){return e.form=t}}},[r("a-table",{attrs:{columns:t.dataColumns,dataSource:t.dataSource,pagination:!1},scopedSlots:t._u([t._l(["name","number","department"],(function(e,a){return{key:e,fn:function(s,o){return[o.editable?r("a-input",{key:e,staticStyle:{margin:"-5px 0"},attrs:{value:s,placeholder:t.columns[a].title},on:{change:function(a){return t.handleChange(a.target.value,o.key,e)}}}):[t._v(t._s(s))]]}}})),{key:"operation",fn:function(e,a){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v(t._s(t.$t("add")))]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:t.$t("deleteConfirm")},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v(t._s(t.$t("delete")))])])],1):r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v(t._s(t.$t("save")))]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.cancle(a.key)}}},[t._v(t._s(t.$t("cancel")))])],1)]:r("span",[r("a",{on:{click:function(e){return t.toggle(a.key)}}},[t._v(t._s(t.$t("edit")))]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:t.$t("deleteConfirm")},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v(t._s(t.$t("delete")))])])],1)]}}],null,!0)}),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:t.newMember}},[t._v(t._s(t.$t("newMember")))])],1)},g=[];a("4de4"),a("d81d");function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function w(e){if(Array.isArray(e))return $(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function k(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a("fb6a"),a("b0c0"),a("25f0");function _(e,t){if(e){if("string"===typeof e)return $(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?$(e,t):void 0}}function x(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e){return w(e)||k(e)||_(e)||x()}var q=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"number",key:"number",width:"20%",scopedSlots:{customRender:"number"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}],C=[{key:1,name:"小明",number:"001",editable:!1,department:"行政部"},{key:2,name:"李莉",number:"002",editable:!1,department:"IT部"},{key:3,name:"王小帅",number:"003",editable:!1,department:"财务部"}],N={name:"UserForm",i18n:a("88eb"),data:function(){return{columns:q,dataSource:C}},computed:{dataColumns:function(){var e=this;return this.columns.map((function(t){return t.title=e.$t("table."+t.key),t}))}},methods:{handleSubmit:function(e){e.preventDefault()},newMember:function(){this.dataSource.push({key:this.dataSource.length+1,name:"",number:"",department:"",editable:!0,isNew:!0})},remove:function(e){var t=this.dataSource.filter((function(t){return t.key!==e}));this.dataSource=t},saveRow:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!1,t.isNew=!1},toggle:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!t.editable},getRowByKey:function(e,t){var a=this.dataSource;return(t||a).filter((function(t){return t.key===e}))[0]},cancle:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!1},handleChange:function(e,t,a){var r=S(this.dataSource),s=r.filter((function(e){return t===e.key}))[0];s&&(s[a]=e,this.dataSource=r)}}},R=N,F=Object(c["a"])(R,h,g,!1,null,"96cbc5fc",null),T=F.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toolbar"},[a("div",{staticStyle:{float:"left"}},[e._t("extra")],2),a("div",{staticStyle:{float:"right"}},[e._t("default")],2)])},A=[],D={name:"FooterToolBar"},j=D,O=(a("7589"),Object(c["a"])(j,M,A,!1,null,"ee313258",null)),E=O.exports,U={name:"AdvancedForm",components:{FooterToolBar:E,UserForm:T,TaskForm:y,RepositoryForm:m},i18n:a("1501"),data:function(){return{loading:!1}},computed:{desc:function(){return this.$t("desc")}},methods:{validate:function(){this.$refs.repository.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)})),this.$refs.task.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}}},I=U,P=(a("db1a"),Object(c["a"])(I,r,s,!1,null,"d1a72f62",null)),K=P.exports;t["default"]=K},"484d":function(e,t){e.exports={messages:{CN:{input:"请输入",select:"请选择",name:"仓库名",domain:"仓库域名",manager:"仓库管理员",approval:"审批人员",date:"生效日期",type:"仓库类型"},HK:{input:"請輸入",select:"請選擇",name:"倉庫名",domain:"倉庫域名",manager:"倉庫管理員",approval:"審批人員",date:"生效日期",type:"倉庫類型"},US:{input:"Please enter",select:"Please select",name:"Repository Name",domain:"Repository Domain",manager:"Repository Manager",approval:"Approval Person",date:"Effective Date",type:"Repository Type"}}}},"5b67":function(e,t,a){"use strict";var r=a("184c"),s=a.n(r);s.a},"733a":function(e,t,a){"use strict";var r=a("8890"),s=a.n(r);s.a},7589:function(e,t,a){"use strict";var r=a("0d60"),s=a.n(r);s.a},8890:function(e,t,a){},"88eb":function(e,t){e.exports={messages:{CN:{add:"添加",delete:"删除",save:"保存",cancel:"取消",edit:"编辑",deleteConfirm:"是否要删除此行？",newMember:"新增成员",table:{name:"成员姓名",number:"工号",department:"所属部门",operation:"操作"}},HK:{add:"添加",delete:"刪除",save:"保存",cancel:"取消",edit:"編輯",deleteConfirm:"是否要刪除此行？",newMember:"新增成員",table:{name:"成員姓名",number:"工號",department:"所屬部門",operation:"操作"}},US:{add:"add",delete:"delete",save:"save",cancel:"cancel",edit:"edit",deleteConfirm:"Confirm to delete this row?",newMember:"new member",table:{name:"Member Name",number:"Job Number",department:"Department",operation:"Operation"}}}}},c30d:function(e,t){e.exports={messages:{CN:{input:"请输入",select:"请选择",name:"任务名",describe:"任务描述",executor:"执行人",duty:"责任人",time:"提醒时间",type:"任务类型"},HK:{input:"請輸入",select:"請選擇",name:"任務名",describe:"任務描述",executor:"執行人",duty:"責任人",time:"提醒時間",type:"任務類型"},US:{input:"Please enter",select:"Please select",name:"Task Name",describe:"Task Describe",executor:"Executor",duty:"Duty Person",time:"Reminder Time",type:"Task Type"}}}},db1a:function(e,t,a){"use strict";var r=a("2032"),s=a.n(r);s.a}}]);