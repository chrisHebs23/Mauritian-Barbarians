(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[720,785],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(9526),r=a(181);const i=e=>{const[t,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const t=r.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},8720:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(9526),r=a(4503),i=a(1785),o=a(2326),l=a(441);const c=o.ZP.div`
  margin: 0;
  text-align: center;
  background: none;
  background-size: 25rem;
  position: relative;
  min-height: 100vh;
  margin-bottom: -40px; /* Put negative height of the footer here */
  padding-bottom: 40px;
`,d=o.ZP.div`
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
`,m=o.ZP.form`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 70%;
  margin: 5% auto;

  @media (max-width: 30rem) {
    flex-direction: column;
    flex-wrap: none;
    margin: 0 auto;
  }
`,s=o.ZP.input`
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
`,g=o.ZP.textarea`
  width: 75%;
  text-align: center;
  padding: 0;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 64rem) {
    width: 90%;
    margin: 2% auto;
  }
`,u=o.ZP.div`
  flex-basis: 100%;
  height: 0;
  margin: 1%;
`,h=o.ZP.h4`
  margin: 5%;
`;function p(){return n.createElement(c,{className:"layer"},n.createElement(d,null,n.createElement(i.Title,null,"Contact Us"),n.createElement(h,null,"If you are keen to help the Mauritian Barbarians, or if you are a team scheduled to play in the Dubai 7’s, please contact us by filling out the form below:"),n.createElement(m,{className:"contact-form",onSubmit:function(e){e.preventDefault(),r.ZP.sendForm("service_diqj9q1","template_d26lj0z",e.target,"user_0MfYezeYOHPCRMX3zETiv").then((e=>{alert(e.text)}),(e=>{console.log(e.text)})),e.target.reset()}},n.createElement(s,{type:"text",name:"name",placeholder:"Name"}),n.createElement(s,{type:"text",name:"subject",placeholder:"Subject"}),n.createElement(s,{type:"email",name:"email",placeholder:"Email Address"}),n.createElement(g,{name:"message",placeholder:"Message",rows:"5",cols:"50"}),n.createElement(u,null),n.createElement(l.Z,{type:"submit",value:"Send",style:{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 2px"}},"Send"))))}},1785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>u,default:()=>b});var n=a(9526),r=a(2326),i=a(8253);const o=(0,r.ZP)(i.E.div)`
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
`,c=(0,r.ZP)(i.E.img)`
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
`;function d({setSelectedImg:e,selectedImg:t,images:a}){return n.createElement(o,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},n.createElement(l,{className:"backdrop"},n.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=a.p+"Joy.jpg";var s=a(1296);const g=(0,n.lazy)((()=>Promise.all([a.e(216),a.e(839)]).then(a.bind(a,9839)))),u=r.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,h=r.ZP.div`
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
`;function b(){const[e,t]=(0,n.useState)(null),{docs:a}=(0,s.Z)("images");return n.createElement("div",null,n.createElement(h,null,n.createElement(p,null,n.createElement(u,{style:{color:"white"}},"Gallery"))),n.createElement(n.Suspense,{fallback:n.createElement("div",{style:{color:"White"}},"Loading...")},n.createElement(g,{setSelectedImg:t}),e&&n.createElement(d,{selectedImg:e,setSelectedImg:t,images:a})))}},441:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(9526);const r=a(2326).ZP.button`
  background-color: #df54ad;
  width: auto;
  border: none;
  justify-self: center;
  align-self: center;
  margin-bottom: auto;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: #1a1e83;
    color: #fff;
  }
`;function i({children:e}){return n.createElement(r,null,e)}}}]);