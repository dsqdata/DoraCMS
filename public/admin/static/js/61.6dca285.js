webpackJsonp([61],{1074:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:e.dataList,"tooltip-effect":"dark"},on:{"selection-change":e.handleMsgSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{prop:"contentId.stitle",label:e.$t("contentMessage.stitle"),width:"200"}}),e._v(" "),n("el-table-column",{attrs:{prop:"content",label:e.$t("contentMessage.content"),width:"280","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("cutWords")(t.row.content,20)))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"author",label:e.$t("contentMessage.author")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s("0"===t.row.utype?t.row.author?t.row.author.userName:e.$t("contentMessage.nimin"):t.row.adminAuthor?t.row.adminAuthor.userName:""))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"replyAuthor",label:e.$t("contentMessage.replyAuthor")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.replyAuthor?t.row.replyAuthor.userName:t.row.adminReplyAuthor?t.row.adminReplyAuthor.userName:""))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"date",label:e.$t("contentMessage.date")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.date))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("main.dataTableOptions"),width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""},on:{click:function(n){return e.replyContentMessage(t.$index,e.dataList)}}},[n("i",{staticClass:"fa fa-mail-reply",attrs:{"aria-hidden":"true"}})]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",plain:"",round:"",icon:"el-icon-delete"},on:{click:function(n){return e.deleteContentMessage(t.$index,e.dataList)}}})]}}])})],1)],1)},staticRenderFns:[]}},351:function(e,t,n){var a=n(6)(n(978),n(1074),null,null,null);e.exports=a.exports},978:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(126),s=(a=o)&&a.__esModule?a:{default:a};t.default={props:{dataList:Array,pageInfo:Object},data:function(){return{loading:!1,multipleSelection:[]}},methods:{handleMsgSelectionChange:function(e){if(e&&e.length>0){var t=e.map(function(e,t){return e._id});this.multipleSelection=t,this.$emit("changeMsgSelectList",t)}},replyContentMessage:function(e,t){var n=this,a=t[e];s.default.getOneContentMessage({id:a._id}).then(function(e){200===e.data.status?n.$store.dispatch("showContentMessageForm",{edit:!0,parentformData:e.data.data}):n.$message.error(e.data.message)}).catch(function(){n.$message({type:"info",message:n.$t("main.scr_modal_del_error_info")})})},deleteContentMessage:function(e,t){var n=this;this.$confirm(this.$t("main.del_notice"),this.$t("main.scr_modal_title"),{confirmButtonText:this.$t("main.confirmBtnText"),cancelButtonText:this.$t("main.cancelBtnText"),type:"warning"}).then(function(){return s.default.deleteContentMessage({ids:t[e]._id})}).then(function(e){200===e.data.status?(n.$store.dispatch("getContentMessageList",n.pageInfo),n.$message({message:n.$t("main.scr_modal_del_succes_info"),type:"success"})):n.$message.error(e.data.message)}).catch(function(e){n.$message({type:"info",message:n.$t("main.scr_modal_del_error_info")+e})})}}}}});