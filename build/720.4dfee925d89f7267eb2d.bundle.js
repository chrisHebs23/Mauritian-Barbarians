(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[720,544],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(9526),r=a(3177);const n=e=>{const[t,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const t=r.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},8720:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var i=a(9526),r=a(4503),n=a(2544),o=a(2326),s=a(441);const l=o.ZP.div`
  margin: 0;
  text-align: center;
  background: none;
  background-size: 25rem;
  position: relative;
  min-height: 100vh;
  margin-bottom: -40px; /* Put negative height of the footer here */
  padding-bottom: 40px;
`,c=o.ZP.div`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: linear-gradient(
    -45deg,
    rgba(238, 119, 82, 0.5),
    rgba(231, 60, 126, 0.5),
    rgba(35, 166, 213, 0.5),
    rgba(35, 213, 171, 0.5)
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  padding-bottom: 5%;
`,d=o.ZP.form`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (max-width: 30rem) {
    flex-direction: column;
    flex-wrap: none;
  }
`,m=o.ZP.input`
  width: 30rem;
  margin: 2%;
  padding: 0;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 30rem) {
    width: 90%;
    margin: 4% 0;
  }
`,u=o.ZP.textarea`
  width: 80%;
  text-align: center;
  padding: 0;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 64rem) {
    width: 90%;
    margin: 2% auto;
  }
`,h=o.ZP.div`
  flex-basis: 100%;
  height: 0;
  margin: 1%;
`,g=o.ZP.h4`
  margin: 5%;
`;function p(){return i.createElement(l,{className:"layer"},i.createElement(c,null,i.createElement(n.Title,null,"Contact Us"),i.createElement(g,null,"If you are keen to help the Mauritian Barbarians, or if you are a team scheduled to play in the Dubai 7’s, please contact us by filling out the form below:s"),i.createElement(d,{className:"contact-form",onSubmit:function(e){e.preventDefault(),r.ZP.sendForm("service_diqj9q1","template_d26lj0z",e.target,"user_0MfYezeYOHPCRMX3zETiv").then((e=>{alert(e.text)}),(e=>{console.log(e.text)})),e.target.reset()}},i.createElement(m,{type:"text",name:"name",placeholder:"Name"}),i.createElement(m,{type:"text",name:"subject",placeholder:"Subject"}),i.createElement(m,{type:"email",name:"email",placeholder:"Email Address"}),i.createElement(u,{name:"message",placeholder:"Message",rows:"5",cols:"50"}),i.createElement(h,null),i.createElement(s.Z,{type:"submit",value:"Send",style:{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 2px"}},"Send"))))}},2544:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>h,default:()=>f});var i=a(9526),r=a(2326),n=a(9839),o=a(8253);const s=(0,r.ZP)(o.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,l=r.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,c=(0,r.ZP)(o.E.img)`
  margin-top: 1%;
  width: auto;
  height: 90vh;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  @media (max-width: 64rem) {
    width: 90%;
    height: auto;
    margin-top: 5%;
  }
  @media (max-width: 48rem) {
    width: 100%;
    height: 100%;
    margin: 5%;
  }
`;function d({setSelectedImg:e,selectedImg:t,images:a}){return i.createElement(s,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},i.createElement(l,{className:"backdrop"},i.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=a.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var u=a(1296);const h=r.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,g=r.ZP.div`
  background: url(${m}) no-repeat 50% 30%;
  height: 10rem;
  background-size: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    background: url(${m}) no-repeat 40% 20%;
    background-size: 98%;
    height: auto;
  }
`,p=r.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,i.useState)(null),{docs:a}=(0,u.Z)("images");return i.createElement("div",null,i.createElement(g,null,i.createElement(p,null,i.createElement(h,{style:{color:"white"}},"Gallery"))),i.createElement(n.Z,{setSelectedImg:t}),e&&i.createElement(d,{selectedImg:e,setSelectedImg:t,images:a}))}},9839:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var i=a(9526),r=a(1296),n=a(2326),o=a(8253);const s=n.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;

  @media (max-width: 64rem) {
    ul {
      flex-direction: row;
    }

    li {
      height: auto;
      width: 100%;
    }

    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
`,l=(0,n.ZP)(o.E.li)`
  height: 40vh;
  flex-grow: 1;
  margin: 1%;

  @media (max-aspect-ratio: 1/1) {
    li {
      height: 30vh;
    }
  }
  @media (max-height: 64rem) {
    li {
      height: 80vh;
    }
  }
`,c=(0,n.ZP)(o.E.img)`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;

  @media (max-width: 64rem) {
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
      overflow: hide;
    }
  }
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,r.Z)("images");return i.createElement(s,null,t&&t.map((t=>i.createElement(l,{key:t.id,onClick:()=>e(t.url)},i.createElement(c,{src:t.url})))))}},441:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var i=a(9526),r=a(2326),n=a(4180);const o=r.ZP.button`
  background-color: ${n.D0};
  width: auto;
  border: none;
  justify-self: center;
  align-self: center;
  margin-bottom: auto;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: ${n.tE};
  }
`;function s({children:e}){return i.createElement(o,null,e)}},4503:(e,t,a)=>{"use strict";var i=a(3222),r=a(1728),n=null,o="https://api.emailjs.com";function s(e,t,a){return void 0===a&&(a={}),new Promise((function(r,n){var o=new XMLHttpRequest;for(var s in o.addEventListener("load",(function(e){var t=new i.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):n(t)})),o.addEventListener("error",(function(e){n(new i.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),a)o.setRequestHeader(s,a[s]);o.send(t)}))}function l(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}t.ZP={init:function(e,t){n=e,o=t||"https://api.emailjs.com"},send:function(e,t,a,i){var r={lib_version:"2.6.4",user_id:i||n,service_id:e,template_id:t,template_params:l(a)};return s(o+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},sendForm:function(e,t,a,i){var l;if("string"==typeof a&&(a=document.querySelector("#"!==(l=a)[0]&&"."!==l[0]?"#"+l:l)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",i||n),s(o+"/api/v1.0/email/send-form",c).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}}},3222:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;t.EmailJSResponseStatus=function(e){this.status=e.status,this.text=e.responseText}},1728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a}}]);