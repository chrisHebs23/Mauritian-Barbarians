(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[544],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(9526),n=a(181);const r=e=>{const[t,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const t=n.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>h,default:()=>b});var i=a(9526),n=a(2326),r=a(8253);const c=(0,n.ZP)(r.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,l=n.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,o=(0,n.ZP)(r.E.img)`
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
`;function d({setSelectedImg:e,selectedImg:t,images:a}){return i.createElement(c,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},i.createElement(l,{className:"backdrop"},i.createElement(o,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const s=a.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var m=a(1296);const g=(0,i.lazy)((()=>a.e(839).then(a.bind(a,9839)))),h=n.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,u=n.ZP.div`
  background: url(${s}) no-repeat 50% 30%;
  height: 10rem;
  background-size: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    background: url(${s}) no-repeat 40% 20%;
    background-size: 98%;
    height: auto;
  }
`,p=n.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function b(){const[e,t]=(0,i.useState)(null),{docs:a}=(0,m.Z)("images");return i.createElement("div",null,i.createElement(u,null,i.createElement(p,null,i.createElement(h,{style:{color:"white"}},"Gallery"))),i.createElement(i.Suspense,{fallback:i.createElement("div",{style:{color:"White"}},"Loading...")},i.createElement(g,{setSelectedImg:t}),e&&i.createElement(d,{selectedImg:e,setSelectedImg:t,images:a})))}}}]);