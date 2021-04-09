(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[785],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(9526),r=a(181);const n=e=>{const[t,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const t=r.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},1785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>h,default:()=>b});var i=a(9526),r=a(2326),n=a(8253);const c=(0,r.ZP)(n.E.div)`
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
`,o=(0,r.ZP)(n.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:a}){return i.createElement(c,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},i.createElement(l,{className:"backdrop"},i.createElement(o,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=a.p+"Joy.jpg";var m=a(1296);const g=(0,i.lazy)((()=>Promise.all([a.e(216),a.e(839)]).then(a.bind(a,9839)))),h=r.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,u=r.ZP.div`
  background: url(${d}) no-repeat 50% 30%;
  height: 10rem;
  background-size: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    background: url(${d}) no-repeat 40% 20%;
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
`;function b(){const[e,t]=(0,i.useState)(null),{docs:a}=(0,m.Z)("images");return i.createElement("div",null,i.createElement(u,null,i.createElement(p,null,i.createElement(h,{style:{color:"white"}},"Gallery"))),i.createElement(i.Suspense,{fallback:i.createElement("div",{style:{color:"White"}},"Loading...")},i.createElement(g,{setSelectedImg:t}),e&&i.createElement(s,{selectedImg:e,setSelectedImg:t,images:a})))}}}]);