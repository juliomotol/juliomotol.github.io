(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"0c74":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"anchor-header title is-2",attrs:{id:e.anchor}},[t("router-link",{attrs:{to:{name:this.$route.name,hash:"#"+e.anchor}}},[e._v("#")]),e._t("default")],2)},i=[],r={props:{anchor:{type:String,required:!0}}},n=r,o=t("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);a["a"]=l.exports},"1b59":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"contact content"},[t("h1",{staticClass:"title is-1"},[e._v(" Get in touch ")]),t("Anchorheader",{attrs:{anchor:"socail_accounts"}},[e._v(" Social Accounts ")]),t("p",[e._v(" You can find me in most social media sites (though I may not be active in posting). Hit me up if you ever like it or follow me to keep in the touch with the following social media site. ")]),e._m(0),t("Anchorheader",{attrs:{anchor:"send_a_message"}},[e._v(" Send a Message ")]),t("p",[e._v(" Got a question, project needed to made or a lovely message that you want to send? Fill up the form below and I'll respond as soon as I can. ")]),t("ValidationObserver",{ref:"inquiryForm",staticClass:"columns is-multiline is-variable is-2",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.sendMessage(a)}}},[t("div",{staticClass:"column is-half"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Name")]),t("ValidationProvider",{staticClass:"control",attrs:{name:"Name",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var s=a.errors,i=a.failed;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inquiryForm.name,expression:"inquiryForm.name"}],class:["input",i?"is-danger":""],attrs:{id:"name",type:"text",placeholder:"John Doe",disabled:e.inquiryForm.isLoading},domProps:{value:e.inquiryForm.name},on:{input:function(a){a.target.composing||e.$set(e.inquiryForm,"name",a.target.value)}}}),t("p",{class:["help",i?"is-danger":""]},[e._v(" "+e._s(s[0]||"")+" ")])]}}])})],1)]),t("div",{staticClass:"column is-half"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),t("ValidationProvider",{staticClass:"control",attrs:{name:"Email",rules:"required|email",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var s=a.errors,i=a.failed;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inquiryForm.email,expression:"inquiryForm.email"}],class:["input",i?"is-danger":""],attrs:{id:"email",type:"email",placeholder:"johndoe@mail.com",disabled:e.inquiryForm.isLoading},domProps:{value:e.inquiryForm.email},on:{input:function(a){a.target.composing||e.$set(e.inquiryForm,"email",a.target.value)}}}),t("p",{class:["help",i?"is-danger":""]},[e._v(" "+e._s(s[0]||"")+" ")])]}}])})],1)]),t("div",{staticClass:"column is-full"},[t("div",{staticClass:"field"},[t("label",{staticClass:"label",attrs:{for:"subject"}},[e._v("Subject")]),t("ValidationProvider",{staticClass:"control",attrs:{name:"Subject",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var s=a.errors,i=a.failed;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inquiryForm.subject,expression:"inquiryForm.subject"}],class:["input",i?"is-danger":""],attrs:{id:"subject",type:"text",disabled:e.inquiryForm.isLoading},domProps:{value:e.inquiryForm.subject},on:{input:function(a){a.target.composing||e.$set(e.inquiryForm,"subject",a.target.value)}}}),t("p",{class:["help",i?"is-danger":""]},[e._v(" "+e._s(s[0]||"")+" ")])]}}])})],1),t("div",{staticClass:"field"},[t("label",{staticClass:"label",attrs:{for:"message"}},[e._v("Message")]),t("ValidationProvider",{staticClass:"control",attrs:{name:"Message",rules:"required",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var s=a.errors,i=a.failed;return[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inquiryForm.message,expression:"inquiryForm.message"}],class:["textarea",i?"is-danger":""],attrs:{id:"message",disabled:e.inquiryForm.isLoading},domProps:{value:e.inquiryForm.message},on:{input:function(a){a.target.composing||e.$set(e.inquiryForm,"message",a.target.value)}}}),t("p",{class:["help",i?"is-danger":""]},[e._v(" "+e._s(s[0]||"")+" ")])]}}])})],1),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("button",{class:["button","is-primary",e.inquiryForm.isLoading?"is-loading":""],attrs:{disabled:e.inquiryForm.isLoading}},[e._v(" Send Message ")])])]),t("p",[e._v(" For further inquiries, email them to "),t("a",{attrs:{href:"mailto:julio.motol89@gmail.com",target:"_blank",rel:"noreferrer noopenner"}},[e._v("julio.motol89@gmail.com")]),e._v(". ")])])])],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"buttons"},[t("a",{staticClass:"button is-primary is-fb",attrs:{href:"https://www.facebook.com/juliomotol89",target:"_blank",rel:"noreferrer noopenner"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-facebook-square"})]),t("span",[e._v("Facebook")])]),t("a",{staticClass:"button is-primary is-instragram",attrs:{href:"https://www.instagram.com/julio.motol/",target:"_blank",rel:"noreferrer noopenner"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-instagram"})]),t("span",[e._v("Instagram")])]),t("a",{staticClass:"button is-primary is-github",attrs:{href:"https://github.com/juliomotol",target:"_blank",rel:"noreferrer noopenner"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-github-square"})]),t("span",[e._v("GitHub")])]),t("a",{staticClass:"button is-primary",attrs:{href:"https://stackoverflow.com/users/4672917/julio-motol",target:"_blank",rel:"noreferrer noopenner"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-stack-overflow"})]),t("span",[e._v("Stack Overflow")])])])}],r=(t("b0c0"),t("f3f3")),n=t("0c74"),o=t("9973"),l=t("7bb1"),u=t("2f62"),c=t("9d0f"),m=t("59ca"),d=t.n(m),f={extends:o["a"],components:{Anchorheader:n["a"],ValidationObserver:l["a"],ValidationProvider:l["b"]},data:function(){return{inquiryForm:{name:"",email:"",subject:"",message:"",isLoading:!1}}},methods:Object(r["a"])({sendMessage:function(){var e=this;this.$refs.inquiryForm.validate().then((function(a){a&&(e.inquiryForm.isLoading=!0,c["a"].collection("inquiries").add({name:e.inquiryForm.name,email:e.inquiryForm.email,subject:e.inquiryForm.subject,message:e.inquiryForm.message,isRead:!1,createdAt:d.a.firestore.FieldValue.serverTimestamp()}).catch((function(){e.showAlert({theme:"danger",title:"Opps...",message:'This wasn\'t supposed to happen. Try again or if the error persists, <a href="https://github.com/juliomotol/juliomotol.github.io-source/issues" target="_blank" rel="noreferrer noopenner">submit an issue</a>.'})})).then((function(){e.inquiryForm.name="",e.inquiryForm.email="",e.inquiryForm.subject="",e.inquiryForm.message="",e.inquiryForm.isLoading=!1,e.$refs.inquiryForm.reset(),e.showAlert({theme:"success",title:"Message Sent!",message:"I'll get back to you as soon as I can."})})))}))}},Object(u["b"])("alert",{showAlert:"show"}))},p=f,v=(t("5988"),t("2877")),g=Object(v["a"])(p,s,i,!1,null,null,null);a["default"]=g.exports},5988:function(e,a,t){"use strict";var s=t("dd3e"),i=t.n(s);i.a},b0c0:function(e,a,t){var s=t("83ab"),i=t("9bf2").f,r=Function.prototype,n=r.toString,o=/^\s*function ([^ (]*)/,l="name";!s||l in r||i(r,l,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(e){return""}}})},dd3e:function(e,a,t){}}]);
//# sourceMappingURL=contact.95074eea.js.map