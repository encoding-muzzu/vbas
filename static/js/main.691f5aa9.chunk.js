(this.webpackJsonpvbas=this.webpackJsonpvbas||[]).push([[0],{129:function(e,t){},130:function(e,t){},131:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(13),r=a.n(s),i=(a(91),a(5)),l=a(12),o=a(16),d=a.n(o),j=a(29),b=a(21),u=function(e){return e.children},m=(a(30),a(10)),h=a(17),p=a(32),O=a.n(p),x="CAMERAACTION",f="LOGIN",g="DID",v="SYNCDATA",N="SUBORGS",y="REGISTER",C="GETDETAILS",w="ENROLLFACE",S="MARKATTENDEE",k="FACEEMBEDTYPE",F="MARKEMBEDTYPE",I="SUCCESS",R=function(e){return console.log(e),function(t){return t({type:I,payload:e})}},E=function(e,t){return function(t){O.a.post("http://202.140.138.33/api/api/vbas/UserLogin",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){var a;"200"===e.data.respcode?(localStorage.setItem("orgid",e.data.orgid),localStorage.setItem("did_from_login",e.data.did),localStorage.setItem("orgname",e.data.orgname),m.b.success(e.respdesc),t({type:f,payload:null===(a=e.data)||void 0===a?void 0:a.respcode})):m.b.error("Login Failed !!")})).catch((function(e){console.log(e)}))}},D=function(e){return function(t){O.a.post("http://202.140.138.33/api/api/vbas/GetSubOrganisationList?",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){var a;"200"===e.data.respcode?t({type:N,payload:null===(a=e.data)||void 0===a?void 0:a.suborgs}):m.b.error("Please Refrest Page")})).catch((function(e){console.log(e)}))}},A=function(e){return function(t){O.a.post("http://202.140.138.33/api/api/vbas/RegisterAttendee?",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){var a;"200"===e.data.respcode?(m.b.success(e.data.respdesc),t({type:y,payload:null===(a=e.data)||void 0===a?void 0:a.RegisterReducer})):m.b.error(e.data.respdesc)})).catch((function(e){console.log(e)}))}},L=function(e){return function(t){O.a.post("http://202.140.138.33/api/api/vbas/GetAttendeeDetails",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){"200"===e.data.respcode?t({type:C,payload:e.data.attendeesdetails[0]}):m.b.error(e.data.respdesc)})).catch((function(e){console.log(e)}))}},_=function(e){return function(t){O.a.post("http://202.140.138.33/api/api/vbas/EnrollAttendeeFace",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){"200"===e.data.respcode?t({type:w,payload:e.data}):m.b.error(e.data.respdesc)})).catch((function(e){console.log(e)}))}},T=a(2),M=function(e){var t=Object(c.useState)(""),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(b.a)(r,2),o=i[0],p=i[1],O=Object(l.g)(),x=Object(h.b)(),f=Object(h.c)((function(e){return e.vbas_store}));Object(c.useEffect)((function(){"200"===f.Login&&O.replace("/home")}),[f]);var g=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n,password:o,macid:"11:11:11:11:11",appver:"1.0",devtype:"1"},e.next=3,x(E(t));case 3:s(""),p("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)(u,{children:[Object(T.jsx)("section",{children:Object(T.jsx)("div",{className:"page-header section-height-100",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto",children:Object(T.jsxs)("div",{className:"card card-plain mt-4",children:[Object(T.jsxs)("div",{className:"card-header pb-0 text-left bg-transparent",children:[Object(T.jsx)("h3",{className:"font-weight-bolder text-info text-gradient",children:"Welcome back"}),Object(T.jsx)("p",{className:"mb-0",children:"Enter your email and password to sign in"})]}),Object(T.jsx)("div",{className:"card-body",children:Object(T.jsxs)("form",{role:"form text-left",children:[Object(T.jsx)("label",{children:"Email"}),Object(T.jsx)("div",{className:"mb-3",children:Object(T.jsx)("input",{type:"email",value:n,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Email","aria-label":"Email","aria-describedby":"email-addon",required:!0})}),Object(T.jsx)("label",{children:"Password"}),Object(T.jsx)("div",{className:"mb-3",children:Object(T.jsx)("input",{type:"password",value:o,onChange:function(e){return p(e.target.value)},className:"form-control",placeholder:"Password","aria-label":"Password","aria-describedby":"password-addon",required:!0})}),Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)("button",{onClick:g,type:"button",className:"btn bg-gradient-info w-100 mt-4 mb-0",children:"Sign in"})})]})})]})})}),Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsx)("div",{className:"oblique position-absolute top-0 h-100 d-md-block d-none me-n8",children:Object(T.jsx)("div",{className:"oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"})})})]})})}),Object(T.jsx)(m.a,{})]})},z=a(73),P=a.n(z),G=a(74),B=a.n(G),U=a(160),q=a(159),J=a(155),W=a(156),Y=a(157),H=a(158),K=a(58);var V=function(e){var t=Object(h.c)((function(e){return e.vbas_store})),a=Object(h.b)(),s=Object(c.useState)(""),r=Object(b.a)(s,2),l=r[0],o=r[1],p=Object(c.useState)({attdid:""}),f=Object(b.a)(p,2),g=f[0],v=f[1],N=localStorage.getItem("orgid"),y=n.a.useState(!1),C=Object(b.a)(y,2),w=C[0],S=C[1],F=Object(c.useState)(""),I=Object(b.a)(F,2),E=I[0],D=I[1],A=document.getElementById("snapSound"),M=Object(c.useState)(!1),z=Object(b.a)(M,2),G=(z[0],z[1]),V=Object(K.b)({loading:!0,indicator:Object(T.jsx)(K.a,{width:"50"})}),Z=(V.containerProps,V.indicatorEl,n.a.useRef(null)),X=n.a.useCallback((function(){null!=A&&A.play();var e,c=Z.current.getScreenshot({width:1920,height:1080}),n={txnid:localStorage.getItem("did_from_login"),image:c.slice(23)};D(c),a((e=n,R(!0),function(t){O.a.post("http://localhost:7000/embed",e,{headers:{"Content-Type":"application/json"}}).then((function(e){"200"===e.data.respcode?(m.b.success("Success"),t({type:k,payload:e.data})):m.b.error(e.data.respdesc),R(!1)})).catch((function(e){console.log(e),R(!1)}))})),t.FaceEmbedReducer.ftemplate&&G(!0)}),[Z]),Q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("did_from_login"),c={did:t,attdid:N+"-"+g.attdid},a(L(c));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){S(!1)},ee=function(e){if(e.files&&0!==e.files.length){var t=e.files[0];(function(e){return new Promise((function(t){var a="",c=new FileReader;c.readAsDataURL(e),c.onload=function(){a=c.result,t(a)}}))})(t).then((function(e){var c;t.base64=e,o(t),a((c=t.base64.slice(22),{type:x,payload:c}))})).catch((function(e){console.log(e)}))}},te=function(){var e=Object(j.a)(d.a.mark((function e(){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=localStorage.getItem("did_from_login"),n=[t.FaceEmbedReducer.data],s={did:c,attdid:N+"-"+g.attdid,fimg:E.slice(23),refimg:t.cameraRed.slice(1),ftemplate:n.toString()},console.log(s),a(_(s)),D(""),v({attdid:""}),"200"===t.EnrollFaceReducer.respcode&&m.b.success("success");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=[{size:13,field:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input1",children:"Organization ID"}),Object(T.jsx)("input",{type:"text",value:localStorage.getItem("orgid")+"-",className:"form-control",id:"Input1",placeholder:1234,readOnly:!0})]})}),Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input1",children:"Attendee ID Sequence"}),Object(T.jsx)("input",{type:"text",value:g.attdid,onChange:function(e){return v(Object(i.a)(Object(i.a)({},g),{},{attdid:e.target.value}))},className:"form-control",id:"Input1"})]})})]})}],ce=[{size:13,field:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input3",children:"Attendee Name"}),Object(T.jsx)("input",{type:"text",className:"form-control",id:"Input3",value:t.FaceGetDetails.attdname,placeholder:"Attendee Name",readOnly:!0})]})}),Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input4",children:"Attendee ID/Code"}),Object(T.jsx)("input",{type:"text",className:"form-control",id:"Input4",value:t.FaceGetDetails.attdcode,placeholder:"Attendee ID/Code",readOnly:!0})]})}),Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input5",children:"Class"}),Object(T.jsx)("input",{type:"text",className:"form-control",id:"Input5",value:t.FaceGetDetails.attdorg,placeholder:"Class Name",readOnly:!0})]})}),Object(T.jsx)("div",{className:"col-md-3",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input6",children:"Category"}),Object(T.jsx)("input",{type:"text",className:"form-control",id:"Input6",value:t.FaceGetDetails.attdcategory,placeholder:"Category",readOnly:!0})]})}),Object(T.jsx)("div",{className:"col-md-2 "}),Object(T.jsx)("div",{className:"col-md-4 ",children:Object(T.jsxs)("div",{className:"card-body cus-div",children:[l&&Object(T.jsx)("p",{children:"Image Uploaded"}),Object(T.jsx)("input",{accept:"image/*",style:{display:"none"},id:"icon-button-file",type:"file",capture:"environment",onChange:function(e){return ee(e.target)}}),Object(T.jsx)("label",{htmlFor:"icon-button-file",children:Object(T.jsx)(B.a,{fontSize:"large",color:"primary"})})]})}),Object(T.jsx)("div",{className:"col-md-4",children:Object(T.jsxs)("div",{className:"card-body cus-div",children:[Object(T.jsx)(U.a,{className:"w-100",color:"primary",onClick:function(e){e.preventDefault(),S(!0)},children:"Open Camera"}),Object(T.jsxs)(q.a,{open:w,onClose:$,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(T.jsx)(J.a,{id:"alert-dialog-title"}),Object(T.jsx)(W.a,{className:"p-0 px-3",children:Object(T.jsx)(Y.a,{id:"alert-dialog-description",style:{width:"580px",height:"500px",margin:"0px"},children:E?Object(T.jsx)("img",{src:"".concat(E),style:{borderRadius:"5px",marginLeft:"5px",width:"560px",height:"356px",bordeRadius:"5px"},alt:"no img"}):Object(T.jsxs)("div",{children:[Object(T.jsx)(P.a,{className:"w-100",width:350,height:300,ref:Z,screenshotFormat:"image/jpeg",videoConstraints:{width:1280,height:720,facingMode:"user"}}),Object(T.jsx)("button",{className:"btn bg-gradient-info w-50",style:{margin:"auto",justifyContent:"center",display:"flex",marginTop:"15px"},onClick:X,children:"  Capture photo"})]})})}),Object(T.jsxs)(H.a,{children:[Object(T.jsx)(U.a,{className:"btn bg-gradient-info w-50 mb-3 mx-3",onClick:$,color:"primary",children:"Submit"}),Object(T.jsx)(U.a,{className:"btn bg-gradient-info w-50 mb-3 mx-3",onClick:function(){D("")},color:"primary",children:"Re-Capture"})]})]})]})})]})}];return Object(T.jsxs)(u,{children:[t.isSuccess?"loading...":null,console.log(t.isSuccess),Object(T.jsx)("div",{className:"container-fluid py-4 ",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-12",children:Object(T.jsxs)("div",{className:"card ",children:[Object(T.jsx)("div",{className:"card-header pb-0 p-3",children:Object(T.jsx)("h6",{className:"mb-0",children:"Attendee Face Enrollment"})}),Object(T.jsxs)("div",{className:"card-body p-3",children:[Object(T.jsxs)("form",{children:[ae.map((function(e,t){return Object(T.jsx)("div",{className:"row",item:!0,xs:e.size,children:e.field},t)})),Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)("button",{type:"button",onClick:Q,className:"btn bg-gradient-info w-100 mt-1 mb-0",children:"Get Details"})})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("form",{children:[ce.map((function(e,t){return Object(T.jsx)("div",{className:"row",item:!0,xs:e.size,children:e.field},t)})),Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)("button",{type:"button",onClick:te,className:"btn bg-gradient-info w-100 mt-4 mb-0",children:"Enroll Face"})})]})]})]})})})}),Object(T.jsx)(m.a,{})]})},Z=(a(70),function(e){var t=Object(h.b)(),a=Object(h.c)((function(e){return e.vbas_store})),n=localStorage.getItem("did_from_login"),s=localStorage.getItem("orgid"),r=localStorage.getItem("orgname"),i=function(){var e,a={did:n,lastsyncdate:Date().toLocaleString().slice(0,24),syncflag:"0"};t((e=a,R(!0),function(t){O.a.post("http://202.140.138.33/api/api/vbas/SyncAttendeesData",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){"200"===e.data.respcode?(localStorage.setItem("syncdata",JSON.stringify(e.data.attendeesdetails)),console.table(e.data.attendeesdetails),t({type:v,payload:e.data.attendeesdetails})):m.b.error(e.data.respdesc),R(!1)})).catch((function(e){console.log(e),R(!1)}))}))};return Object(c.useEffect)((function(){i(),t((function(e){return e({type:f,payload:""})}))}),[]),Object(T.jsxs)(u,{children:[a.isSuccess?"loading...":null,Object(T.jsx)("div",{className:"container-fluid py-4",children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-12 col-xl-3",children:Object(T.jsxs)("div",{className:"card ",children:[Object(T.jsx)("div",{className:"card-header pb-0 p-3",children:Object(T.jsx)("h6",{className:"mb-0",children:"Device ID"})}),Object(T.jsx)("div",{className:"card-body p-3",children:Object(T.jsx)("h4",{className:"text-sm",children:n})})]})}),Object(T.jsx)("div",{className:"col-12 col-xl-3",children:Object(T.jsxs)("div",{className:"card ",children:[Object(T.jsx)("div",{className:"card-header pb-0 p-3",children:Object(T.jsx)("h6",{className:"mb-0",children:"Organization ID"})}),Object(T.jsx)("div",{className:"card-body p-3",children:Object(T.jsx)("h4",{className:"text-sm",children:s})})]})}),Object(T.jsx)("div",{className:"col-12 col-xl-3",children:Object(T.jsxs)("div",{className:"card ",children:[Object(T.jsx)("div",{className:"card-header pb-0 p-3",children:Object(T.jsx)("h6",{className:"mb-0",children:"Organization Name"})}),Object(T.jsx)("div",{className:"card-body p-3",children:Object(T.jsx)("h4",{className:"text-sm ",children:r})})]})}),Object(T.jsx)("div",{className:"col-12 col-xl-3",children:Object(T.jsx)("button",{className:"btn bg-gradient-info w-50 my-4",onClick:i,children:"Sync Data"})})]})}),Object(T.jsx)(m.a,{})]})}),X=a(78),Q=a(22),$=function(e){var t=Object(h.c)((function(e){return e.vbas_store})),a=(null===t||void 0===t||t.MarkEmbedRedcuer,Object(h.b)()),n=Object(c.useState)(""),s=Object(b.a)(n,2),r=(s[0],s[1],Object(c.useState)(!1)),i=Object(b.a)(r,2),l=(i[0],i[1],Object(c.useState)()),o=Object(b.a)(l,2),p=o[0],x=o[1],f=localStorage.getItem("did_from_login"),g=Object(c.useRef)(),v=Object(c.useRef)();Object(c.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="/vbas/models",Promise.all([Q.nets.tinyFaceDetector.loadFromUri(t),Q.nets.faceLandmark68Net.loadFromUri(t),Q.nets.faceRecognitionNet.loadFromUri(t)]).then(N);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(){navigator.getUserMedia({video:{}},(function(e){return g.current.srcObject=e}),(function(e){return console.error(e)}))},y=function(){var e=new Date,t=e.toISOString().split("T")[0],a=e.toTimeString().split(" ")[0];return"".concat(t," ").concat(a)},C=localStorage.getItem("attdcode");console.log(C);return Object(T.jsxs)(u,{children:[Object(T.jsx)("main",{className:"main-content mt-1 border-radius-lg",children:Object(T.jsx)("div",{className:"container-fluid py-4 ",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-12",children:Object(T.jsx)("div",{className:"card ",children:Object(T.jsxs)("div",{className:"card-body p-3",children:[Object(T.jsx)("h1",{style:{textAlign:"center",margin:"10px 0px 20px 0px"},children:"Mark Attendance"}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{id:"wrap_video",children:Object(T.jsxs)("div",{id:"video_box",children:[Object(T.jsx)("canvas",{ref:v,id:"video_overlays"}),Object(T.jsx)("div",{children:Object(T.jsx)("video",{id:"player",ref:g,onPlay:function(){var e={width:640,height:480},t=setInterval(Object(j.a)(d.a.mark((function a(){var c,n,s,r,i,l,o,j,b,u;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return x(t),v.current.innerHTML=null===Q||void 0===Q?void 0:Q.createCanvasFromMedia(g.current),Q.matchDimensions(v.current,e),.3,a.next=6,Q.detectAllFaces(g.current,new Q.TinyFaceDetectorOptions({scoreThreshold:.3})).withFaceLandmarks().withFaceDescriptors();case 6:n=a.sent,Q.resizeResults(n,e),null===(c=v.current)||void 0===c||c.getContext("2d").clearRect(0,0,e.width,e.height),Q.draw.drawDetections(v.current,n),s=JSON.parse(localStorage.getItem("syncdata")),r=[],i=Object(X.a)(s);try{for(i.s();!(l=i.n()).done;)o=l.value,j=o.ftemplate.slice(1,-1).split(","),console.log(o.attdcode),128===j.length&&(b=[Float32Array.from(j)],localStorage.setItem("attdcode",o.attdcode),r.push(new Q.LabeledFaceDescriptors(o.attdname+" "+o.attdcode.toString(),b)))}catch(d){i.e(d)}finally{i.f()}.6,u=new Q.FaceMatcher(r,.6),n.map((function(e){return u.findBestMatch(e.descriptor)})).forEach((function(e,t){var a=n[t].detection.box,c=e.toString();new Q.draw.DrawBox(a,{label:c}).draw(v.current)}));case 18:case"end":return a.stop()}}),a)}))),100)},autoPlay:!0,muted:!0,style:{borderRadius:"32px",background:"#E8E8E8",boxShadow:"inset 7px 7px 20px #c5c5c5, inset -2px -7px 16px #ffffff"}})}),Object(T.jsx)("button",{onClick:function(){var e,t={did:f,logs:[{refid:C,txntype:"1",aid:"2",sessionid:"0",timestamp:y()}]};a((e=t,function(t){O.a.post("http://202.140.138.33/api/api/vbas/SyncAttendanceLogs",e,{headers:{"Content-Type":"application/json",apikey:" "}}).then((function(e){"200"===e.data.logsack[0].respcode?(m.b.success("success"),t({type:S,payload:e.data})):m.b.error(e.data.logsack[0].respdesc)})).catch((function(e){console.log(e)}))})),clearInterval(p);for(var c=0;c<g.current.length;c++)g.current[c].Stop&&g.current[c].Stop()},className:"btn bg-gradient-info w-50 mx-2 my-3",children:"Mark Attendance"})]})})})]})})})})})}),Object(T.jsx)(m.a,{})]})},ee=function(){var e=Object(c.useState)({orgid:"",attendeName:"",idCode:"",email:"",number:"",nodal:"0",attendeCategory:"",gender:""}),t=Object(b.a)(e,2),a=t[0],n=t[1],s=Object(h.b)(),r=Object(h.c)((function(e){return e.vbas_store})),l=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("did_from_login"),s(D({did:t}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){l()}),[]);var o=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={orgid:localStorage.getItem("orgid"),did:localStorage.getItem("did_from_login"),attdcode:a.idCode,attdname:a.attendeName,attdcategory:a.attendeCategory,mobileno:a.number,email:a.email,isnodaloff:a.nodal,gender:a.gender},s(A(t)),n({orgid:"",attendeName:"",idCode:"",email:"",number:"",nodal:"0",attendeCategory:"",gender:""});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=[{size:12,field:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Select1",children:"School Organization Name"}),Object(T.jsx)("select",{className:"form-control",id:"Select1",onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{orgid:e.target.value}))},value:a.orgid,children:r.subOrgs.map((function(e){var t=e.orgid,a=e.orgname;return Object(T.jsx)("option",{value:t,children:a})}))})]})}),Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input1",children:"Attendee Name"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{attendeName:e.target.value}))},value:a.attendeName,className:"form-control",id:"Input1"})]})})]})},{size:12,field:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input2",children:"Attendee ID/Code"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{idCode:e.target.value}))},value:a.idCode,className:"form-control",id:"Input2"})]})}),Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input3",children:"Email"}),Object(T.jsx)("input",{type:"email",onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{email:e.target.value}))},value:a.email,className:"form-control",id:"Input3",placeholder:"abc@email.com"})]})})]})},{size:12,field:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Input4",children:"Mobile Number"}),Object(T.jsx)("input",{type:"number",value:a.number,onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{number:e.target.value}))},className:"form-control",id:"Input4",placeholder:"+91 8120 687 130"})]})}),Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{htmlFor:"Select2",children:"Attendee Category"}),Object(T.jsxs)("select",{className:"form-control",id:"Select2",onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{attendeCategory:e.target.value}))},value:a.attendeCategory,children:[Object(T.jsx)("option",{value:"1",children:"Attendee"}),Object(T.jsx)("option",{value:"2",children:"Student"}),Object(T.jsx)("option",{value:"3",children:"Staff"}),Object(T.jsx)("option",{value:"4",children:"Employee"})]})]})})]})},{size:12,field:Object(T.jsxs)("div",{className:"col-md-6",children:[Object(T.jsx)("label",{className:"custom-control-label",children:"Gender"}),Object(T.jsxs)("div",{className:"form-check",children:[Object(T.jsx)("input",{value:a.gender,onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{gender:"M"}))},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"customRadio1"}),Object(T.jsx)("label",{className:"custom-control-label",for:"customRadio1",children:"Male"})]}),Object(T.jsxs)("div",{className:"form-check mb-3",children:[Object(T.jsx)("input",{value:a.gender,onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{gender:"G"}))},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"customRadio2"}),Object(T.jsx)("label",{className:"custom-control-label",for:"customRadio2",children:"Female"})]})]})},{size:12,field:Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:"col-md-6",children:Object(T.jsxs)("div",{className:"form-check",children:[Object(T.jsx)("input",{value:a.nodal,onChange:function(e){return n(Object(i.a)(Object(i.a)({},a),{},{nodal:"1"}))},className:"form-check-input",type:"checkbox",defaultValue:!0,id:"fcustomCheck1",defaultChecked:!0}),Object(T.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Is Nodal Officer"})]})})})}];return Object(T.jsxs)(u,{children:[Object(T.jsx)("div",{className:"container-fluid py-4",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"col-12",children:Object(T.jsxs)("div",{className:"card ",children:[Object(T.jsx)("div",{className:"card-header pb-0 p-3",children:Object(T.jsx)("h6",{className:"mb-0",children:"Attendee Registration"})}),Object(T.jsx)("div",{className:"card-body p-3",children:Object(T.jsxs)("form",{children:[p.map((function(e,t){return Object(T.jsx)("div",{className:"row",item:!0,xs:e.size,children:e.field},t)})),Object(T.jsx)("div",{className:"text-center",children:Object(T.jsx)("button",{type:"button",onClick:o,className:"btn bg-gradient-info w-100 mt-4 mb-0",children:"Register"})})]})})]})})})}),Object(T.jsx)(m.a,{})]})},te=function(){return Object(T.jsx)("nav",{className:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","navbar-scroll":"true",children:Object(T.jsx)("div",{className:"container-fluid py-1 px-3",children:Object(T.jsx)("div",{className:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar",children:Object(T.jsx)("ul",{className:"navbar-nav  justify-content-end",children:Object(T.jsx)("li",{className:"nav-item d-xl-none ps-3 d-flex align-items-center",children:Object(T.jsx)("a",{href:"javascript:;",className:"nav-link text-body p-0",id:"iconNavbarSidenav",children:Object(T.jsxs)("div",{className:"sidenav-toggler-inner",children:[Object(T.jsx)("i",{className:"sidenav-toggler-line"}),Object(T.jsx)("i",{className:"sidenav-toggler-line"}),Object(T.jsx)("i",{className:"sidenav-toggler-line"})]})})})})})})})},ae=a(37),ce=function(e){var t=Object(l.g)(),a=[{text:"Home",active:"active",icon:"",onClick:function(){return t.push("/home")},url:"/home"},{text:"Registration",active:"active",icon:"",onClick:function(){return t.push("/registration")},url:"/registration"},{text:"Face Enrollment",active:"active",icon:"",onClick:function(){return t.push("/face_enrollment")},url:"/face_enrollment"},{text:"Mark Attendance",active:"active",icon:"",onClick:function(){return t.push("/mark_attendance")},url:"/mark_attendance"}];return Object(T.jsx)(u,{children:Object(T.jsxs)("aside",{className:"sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-left ms-3",id:"sidenav-main",children:[Object(T.jsxs)("div",{className:"sidenav-header",children:[Object(T.jsx)("i",{className:"fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none","aria-hidden":"true",id:"iconSidenav"}),Object(T.jsxs)("a",{className:"navbar-brand m-0",children:[Object(T.jsx)("img",{src:"./assets/img/logo-ct.png",className:"navbar-brand-img h-100",alt:"..."}),Object(T.jsx)("span",{className:"ms-1 font-weight-bold",children:"VBAS"})]})]}),Object(T.jsx)("hr",{className:"horizontal dark mt-0"}),Object(T.jsxs)("div",{className:"collapse navbar-collapse  w-auto",id:"sidenav-collapse-main",children:[Object(T.jsx)("ul",{className:"navbar-nav",children:a.map((function(e,t){var a=e.text,c=(e.active,e.icon,e.url);return Object(T.jsx)("li",{className:"nav-item",style:{marginTop:"20px"},children:Object(T.jsxs)(ae.b,{exact:!0,to:c,activeClassName:"active",className:"nav-link",children:[Object(T.jsx)("div",{className:"icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center",children:Object(T.jsxs)("svg",{width:"12px",height:"12px",viewBox:"0 0 45 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(T.jsx)("title",{children:"shop "}),Object(T.jsx)("g",{id:"Basic-Elements",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:Object(T.jsx)("g",{id:"Rounded-Icons",transform:"translate(-1716.000000, -439.000000)",fill:"#FFFFFF",fillRule:"nonzero",children:Object(T.jsx)("g",{id:"Icons-with-opacity",transform:"translate(1716.000000, 291.000000)",children:Object(T.jsxs)("g",{id:"shop-",transform:"translate(0.000000, 148.000000)",children:[Object(T.jsx)("path",{className:"color-background",d:"M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z",id:"Path",opacity:"0.598981585"}),Object(T.jsx)("path",{className:"color-background",d:"M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z",id:"Path"})]})})})})]})}),Object(T.jsx)("span",{className:"nav-link-text ms-1",children:a})]})})}))}),Object(T.jsx)("br",{})]}),Object(T.jsx)("div",{className:"sidenav-footer mx-3 mt-3 pt-3",children:Object(T.jsxs)("div",{className:"card card-background shadow-none card-background-mask-secondary",id:"sidenavCard",children:[Object(T.jsx)("div",{className:"full-background",style:{backgroundImage:'url("../assets/img/curved-images/white-curved.jpeg")'}}),Object(T.jsx)("div",{className:"card-body text-left p-3 w-100",children:Object(T.jsxs)("div",{className:"docs-info",children:[Object(T.jsx)("h6",{className:"text-white up mb-0",children:"Powered By Syntizen"}),Object(T.jsx)("br",{}),Object(T.jsx)("button",{onClick:function(){localStorage.clear(),t.push("/login")},className:"btn btn-white btn-sm w-100 mb-0",children:"Sign Out"})]})})]})})]})})},ne=function(e){return localStorage.getItem("orgid")||e.history.replace("/login"),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ce,{}),Object(T.jsxs)("main",{className:"main-content mt-1 border-radius-lg",children:[Object(T.jsx)(te,{}),Object(T.jsxs)(l.d,{children:[Object(T.jsx)(l.b,{path:"/home",exact:!0,strict:!0,component:Z}),Object(T.jsx)(l.b,{exact:!0,path:"/registration",render:function(e){return Object(T.jsx)(ee,Object(i.a)({},e))}}),Object(T.jsx)(l.b,{exact:!0,path:"/face_enrollment",render:function(e){return Object(T.jsx)(V,Object(i.a)({},e))}}),Object(T.jsx)(l.b,{exact:!0,path:"/mark_attendance",render:function(e){return Object(T.jsx)($,Object(i.a)({},e))}})]})]})]})},se=function(){return Object(T.jsx)(u,{children:Object(T.jsxs)(l.d,{children:[Object(T.jsx)(l.b,{path:"/login",exact:!0,strict:!0,name:"Login",render:function(e){return Object(T.jsx)(M,Object(i.a)({},e))}}),Object(T.jsx)(l.b,{path:"/",strict:!0,name:"Layouts",render:function(e){return Object(T.jsx)(ne,Object(i.a)({},e))}}),Object(T.jsx)(l.a,{to:"/404",from:"*"})]})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},ie=a(39),le={cameraRed:[],Login:{},Did:"",SynData:[],subOrgs:[],RegisterReducer:{},FaceGetDetails:{},EnrollFaceReducer:[],MarkAttendeReducer:[],FaceEmbedReducer:"",MarkEmbedRedcuer:[],isSuccess:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case x:return Object(i.a)(Object(i.a)({},e),{},{cameraRed:c});case f:return Object(i.a)(Object(i.a)({},e),{},{Login:c});case v:return Object(i.a)(Object(i.a)({},e),{},{SynData:c});case N:return Object(i.a)(Object(i.a)({},e),{},{subOrgs:c});case g:return Object(i.a)(Object(i.a)({},e),{},{Did:c});case y:return Object(i.a)(Object(i.a)({},e),{},{RegisterReducer:c});case C:return Object(i.a)(Object(i.a)({},e),{},{FaceGetDetails:c});case w:return Object(i.a)(Object(i.a)({},e),{},{EnrollFaceReducer:c});case S:return Object(i.a)(Object(i.a)({},e),{},{MarkAttendeReducer:c});case k:return Object(i.a)(Object(i.a)({},e),{},{FaceEmbedReducer:c});case C:return Object(i.a)(Object(i.a)({},e),{},{GetDetails:c});case F:return Object(i.a)(Object(i.a)({},e),{},{MarkEmbedRedcuer:c});case I:return Object(i.a)(Object(i.a)({},e),{},{isSuccess:c});default:return e}},de=Object(ie.combineReducers)({vbas_store:oe}),je=a(79),be=a(80),ue=Object(ie.createStore)(de,Object(be.composeWithDevTools)(Object(ie.applyMiddleware)(je.a)));r.a.render(Object(T.jsx)(h.a,{store:ue,children:Object(T.jsx)(ae.a,{children:Object(T.jsx)(se,{})})}),document.getElementById("root")),re()},70:function(e,t,a){},91:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.691f5aa9.chunk.js.map