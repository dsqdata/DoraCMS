webpackJsonp([58],{1086:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dr-contentTagForm"},[a("el-dialog",{attrs:{xs:20,sm:20,md:6,lg:6,xl:6,title:t.$t("contentTag.form_title"),visible:t.dialogState.show,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.dialogState,"show",e)}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.dialogState.formData,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:t.$t("contentTag.name"),prop:"name"}},[a("el-input",{attrs:{size:"small"},model:{value:t.dialogState.formData.name,callback:function(e){t.$set(t.dialogState.formData,"name",e)},expression:"dialogState.formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("contentTag.comments"),prop:"comments"}},[a("el-input",{attrs:{size:"small",type:"textarea"},model:{value:t.dialogState.formData.comments,callback:function(e){t.$set(t.dialogState.formData,"comments",e)},expression:"dialogState.formData.comments"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v(t._s(t.dialogState.edit?t.$t("main.form_btnText_update"):t.$t("main.form_btnText_save")))])],1)],1)],1)],1)},staticRenderFns:[]}},354:function(t,e,a){var s=a(6)(a(981),a(1086),null,null,null);t.exports=s.exports},981:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s,n=a(126),o=(s=n)&&s.__esModule?s:{default:s};e.default={props:{dialogState:Object,groups:Array},data:function(){return{rules:{name:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("contentTag.name")}),trigger:"blur"},{min:1,max:12,message:this.$t("validate.rangelength",{min:1,max:12}),trigger:"blur"}],comments:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("main.comments_label")}),trigger:"blur"},{min:2,max:30,message:this.$t("validate.ranglengthandnormal",{min:2,max:30}),trigger:"blur"}]}}},methods:{confirm:function(){this.$store.dispatch("hideContentTagForm")},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a=e.dialogState.formData;e.dialogState.edit?o.default.updateContentTag(a).then(function(t){200===t.data.status?(e.$store.dispatch("hideContentTagForm"),e.$store.dispatch("getContentTagList"),e.$message({message:e.$t("main.updateSuccess"),type:"success"})):e.$message.error(t.data.message)}):o.default.addContentTag(a).then(function(t){200===t.data.status?(e.$store.dispatch("hideContentTagForm"),e.$store.dispatch("getContentTagList"),e.$message({message:e.$t("main.addSuccess"),type:"success"})):e.$message.error(t.data.message)})})}}}}});