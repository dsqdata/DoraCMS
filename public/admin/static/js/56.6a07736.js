webpackJsonp([56],{1084:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:e.dataList,"tooltip-effect":"dark"},on:{"selection-change":e.handleUserSelect}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{prop:"userName",label:e.$t("regUser.userName"),width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"phoneNum",label:e.$t("regUser.phoneNum"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.countryCode&&t.row.phoneNum?n("div",[e._v(e._s(t.row.countryCode+" "+t.row.phoneNum))]):t.row.deviceId?n("div",[e._v(e._s(t.row.deviceId))]):n("div")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"group",label:e.$t("regUser.group")},scopedSlots:e._u([{key:"default",fn:function(t){return["0"==t.row.group?n("span",[e._v("普通用户")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"enable",label:e.$t("regUser.enable"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{class:t.row.enable?"fa fa-check-circle":"fa fa-minus-circle",style:t.row.enable?e.green:e.red})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"date",label:e.$t("regUser.date"),"show-overflow-tooltip":""}}),e._v(" "),n("el-table-column",{attrs:{prop:"email",label:e.$t("regUser.email"),"show-overflow-tooltip":""}}),e._v(" "),n("el-table-column",{attrs:{prop:"integral",label:e.$t("regUser.integral"),"show-overflow-tooltip":""}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("main.dataTableOptions"),width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""},on:{click:function(n){return e.editUserInfo(t.$index,e.dataList)}}},[n("i",{staticClass:"fa fa-edit"})]),e._v(" "),n("el-button",{attrs:{disabled:e.lockDel,size:"mini",type:"danger",plain:"",round:"",icon:"el-icon-delete"},on:{click:function(n){return e.deleteUser(t.$index,e.dataList)}}})]}}])})],1)],1)},staticRenderFns:[]}},360:function(e,t,n){var a=n(6)(n(987),n(1084),null,null,null);e.exports=a.exports},987:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,l=n(126),o=(a=l)&&a.__esModule?a:{default:a};t.default={props:{dataList:Array,pageInfo:Object},data:function(){return{green:{color:"#13CE66"},red:{color:"#FF4949"},lockDel:!0,loading:!1,tableData3:this.$store.getters.regUserList.docs,multipleSelection:[]}},methods:{handleUserSelect:function(e){if(e&&e.length>0){var t=e.map(function(e,t){return e._id});this.multipleSelection=t,this.$emit("changeUserSelectList",t)}},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},editUserInfo:function(e,t){var n=this,a=t[e];o.default.getOneRegUser({id:a._id}).then(function(e){200===e.data.status?n.$store.dispatch("showRegUserForm",{edit:!0,formData:e.data.data}):n.$message.error(e.data.message)}).catch(function(){n.$message({type:"info",message:n.$t("main.scr_modal_del_error_info")})})},deleteUser:function(e,t){var n=this;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return o.default.deleteRegUser({ids:t[e]._id})}).then(function(e){200===e.data.status?(n.$store.dispatch("getRegUserList",n.pageInfo),n.$message({message:n.$t("main.scr_modal_del_succes_info"),type:"success"})):n.$message.error(e.data.message)}).catch(function(e){n.$message({type:"info",message:n.$t("regUser.scr_modal_del_error_info")})})}}}}});