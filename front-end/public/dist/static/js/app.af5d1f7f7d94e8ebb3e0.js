webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")({name:"App"},i,!1,function(t){a("r9Hn")},null,null).exports,n=a("/ocq"),o=a("Xxa5"),r=a.n(o),c=a("exGp"),d=a.n(c),v=a("mtWM"),m=a.n(v),u={name:"Main",data:function(){return{model:{recipient:"",subject:"",content:"",history:[]},deliveryStatus:"",send:"Send"}},methods:{clearValue:function(){this.model.recipient="",this.model.subject="",this.model.content="",this.send="Send"},sendmail:function(){var t=this;return d()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.send="Sending",(a=new FormData).append("subject",t.model.subject),a.append("recipient",t.model.recipient),a.append("content",t.model.content),e.next=7,m.a.post("http://localhost:3128/sendmail",a);case 7:"success"===e.sent.data.status?t.deliveryStatus="Email sent to "+t.model.recipient:t.deliveryStatus="Unable to send email to "+t.model.recipient,t.clearValue(),$("#mail-status").modal("show");case 11:case"end":return e.stop()}},e,t)}))()},loadHistory:function(){var t=this;m.a.get("http://localhost:3128/history").then(function(e){t.model.history=e.data.history})},showMail:function(t){this.model.recipient=t.recipient,this.model.subject=t.subject,this.model.content=t.content,$("#mail-details").modal("show")}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("ul",{staticClass:"nav nav-pills nav-fill mb-3",attrs:{id:"pills-tab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"pills-sendmail-tab","data-toggle":"pill",href:"#pills-sendmail",role:"tab","aria-controls":"pills-upload","aria-selected":"true"},on:{click:function(e){t.clearValue()}}},[t._v("New Email")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{id:"pills-history-tab","data-toggle":"pill",href:"#pills-history",role:"tab","aria-controls":"pills-verify","aria-selected":"false"},on:{click:function(e){t.loadHistory()}}},[t._v("\n          History")])])]),t._v(" "),a("div",{staticClass:"tab-content",attrs:{id:"pills-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"pills-sendmail",role:"tabpanel","aria-labelledby":"pills-sendmail-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendmail(e)}}},[a("div",{staticClass:"form-group",attrs:{align:"left"}},[a("label",{attrs:{for:""}},[t._v("To:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.recipient,expression:"model.recipient"}],staticClass:"form-control",attrs:{type:"email",required:"",placeholder:"eg. chanon.dpk@gmail.com"},domProps:{value:t.model.recipient},on:{input:function(e){e.target.composing||t.$set(t.model,"recipient",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",attrs:{align:"left"}},[a("label",{attrs:{for:""}},[t._v("Subject:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.subject,expression:"model.subject"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Enter Subject"},domProps:{value:t.model.subject},on:{input:function(e){e.target.composing||t.$set(t.model,"subject",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",attrs:{align:"left"}},[a("label",{attrs:{for:""}},[t._v("Content:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.content,expression:"model.content"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",required:"",placeholder:"Enter Content"},domProps:{value:t.model.content},on:{input:function(e){e.target.composing||t.$set(t.model,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",attrs:{align:"center"}},[a("button",{staticClass:"btn btn-success btn-light btn-large",attrs:{id:"send-button"}},[t._v("\n                          "+t._s(t.send))])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"mail-status"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body",attrs:{align:"left"}},[a("h6",[t._v(t._s(t.deliveryStatus))])]),t._v(" "),t._m(2)])])])]),t._v(" "),a("div",{staticClass:"tab-pane fade",attrs:{id:"pills-history",role:"tabpanel","aria-labelledby":"pills-history-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h3",[t._v("History")]),t._v(" "),a("table",{staticClass:"table"},[t._m(3),t._v(" "),a("tbody",[t._l(t.model.history,function(e){return[a("tr",[a("th",{key:e.id,attrs:{scope:"row"}},[t._v(t._s(e.datetime))]),t._v(" "),a("td",[t._v(t._s(e.recipient))]),t._v(" "),a("td",[t._v(t._s(e.subject))]),t._v(" "),a("td",[t._v(t._s(e.result)+" ")]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-success btn-large",on:{click:function(a){t.showMail(e)}}},[t._v("\n                      View")])])])]})],2)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"mail-details"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Subject: "+t._s(t.model.subject))]),t._v(" "),t._m(4)]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{align:"left"}},[a("h6",[t._v("To:"+t._s(t.model.recipient))]),t._v(" "),a("p",[t._v(t._s(t.model.content))])]),t._v(" "),t._m(5)])])])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-light bg-light"},[e("span",{staticClass:"navbar-brand mb-0 h1"},[this._v("Email Service")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Delivery Result")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                      Close")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Subject")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n                      Close")])])}]};var _=a("VU/8")(u,p,!1,function(t){a("tjKm")},"data-v-2e58a4e8",null).exports;s.a.use(n.a);var h=new n.a({routes:[{path:"/",name:"Main",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},r9Hn:function(t,e){},tjKm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.af5d1f7f7d94e8ebb3e0.js.map