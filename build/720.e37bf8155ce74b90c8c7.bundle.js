(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[720,544],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(9526),i=a(3177);const n=e=>{const[t,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{const t=i.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},8720:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(9526),i=a(4503),n=a(2544),s=a(2326),o=a(441),c=a(2210);const l=s.ZP.div`
  height: 100vh;
  margin: 0;
  text-align: center;
  background: none;
  background: url(${c.Z}) no-repeat center center;
  background-size: 25rem;
`,d=s.ZP.div`
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
  height: 100%;
`,m=s.ZP.form`
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
`,u=s.ZP.input`
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
`,h=s.ZP.textarea`
  width: 80%;
  text-align: center;
  padding: 0;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 64rem) {
    width: 85%;
    margin: 4% auto;
  }
`,g=s.ZP.div`
  flex-basis: 100%;
  height: 0;
  margin: 1%;
`,p=s.ZP.h4`
  margin: 5%;
`;function f(){return r.createElement(l,{className:"layer"},r.createElement(d,null,r.createElement(n.Title,null,"Contact Us"),r.createElement(p,null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm."),r.createElement(m,{className:"contact-form",onSubmit:function(e){e.preventDefault(),i.ZP.sendForm("service_diqj9q1","template_d26lj0z",e.target,"user_0MfYezeYOHPCRMX3zETiv").then((e=>{console.log(e.text)}),(e=>{console.log(e.text)})),e.target.reset()}},r.createElement(u,{type:"text",name:"name",placeholder:"Name"}),r.createElement(u,{type:"text",name:"subject",placeholder:"Subject"}),r.createElement(u,{type:"email",name:"email",placeholder:"Email Address"}),r.createElement(h,{name:"message",placeholder:"Message",rows:"5",cols:"50"}),r.createElement(g,null),r.createElement(o.Z,{type:"submit",value:"Send",style:{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 2px"}},"Send"))))}},2544:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>h,default:()=>f});var r=a(9526),i=a(2326),n=a(9839),s=a(8253);const o=(0,i.ZP)(s.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,c=i.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,l=(0,i.ZP)(s.E.img)`
  margin-top: 1%;
  width: 60%;
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
`;function d({setSelectedImg:e,selectedImg:t,images:a}){return r.createElement(o,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},r.createElement(c,{className:"backdrop"},r.createElement(l,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=a.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var u=a(1296);const h=i.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
`,g=i.ZP.div`
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
`,p=i.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,r.useState)(null),{docs:a}=(0,u.Z)("images");return r.createElement("div",null,r.createElement(g,null,r.createElement(p,null,r.createElement(h,{style:{color:"white"}},"Gallery"))),r.createElement(n.Z,{setSelectedImg:t}),e&&r.createElement(d,{selectedImg:e,setSelectedImg:t,images:a}))}},9839:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(9526),i=a(1296),n=a(2326),s=a(8253);const o=n.ZP.ul`
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
`,c=(0,n.ZP)(s.E.li)`
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
`,l=(0,n.ZP)(s.E.img)`
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
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,i.Z)("images");return r.createElement(o,null,t&&t.map((t=>r.createElement(c,{key:t.id,onClick:()=>e(t.url)},r.createElement(l,{src:t.url})))))}},441:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(9526),i=a(2326),n=a(4180);const s=i.ZP.button`
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
`;function o({children:e}){return r.createElement(s,null,e)}},4503:(e,t,a)=>{"use strict";var r=a(3222),i=a(1728),n=null,s="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(i,n){var s=new XMLHttpRequest;for(var o in s.addEventListener("load",(function(e){var t=new r.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):n(t)})),s.addEventListener("error",(function(e){n(new r.EmailJSResponseStatus(e.target))})),s.open("POST",e,!0),a)s.setRequestHeader(o,a[o]);s.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}t.ZP={init:function(e,t){n=e,s=t||"https://api.emailjs.com"},send:function(e,t,a,r){var i={lib_version:"2.6.4",user_id:r||n,service_id:e,template_id:t,template_params:c(a)};return o(s+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},sendForm:function(e,t,a,r){var c;if("string"==typeof a&&(a=document.querySelector("#"!==(c=a)[0]&&"."!==c[0]?"#"+c:c)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(a);var l=new FormData(a);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",r||n),o(s+"/api/v1.0/email/send-form",l).then((function(e){return i.UI.successState(a),e}),(function(e){return i.UI.errorState(a),Promise.reject(e)}))}}},3222:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;t.EmailJSResponseStatus=function(e){this.status=e.status,this.text=e.responseText}},1728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a}}]);