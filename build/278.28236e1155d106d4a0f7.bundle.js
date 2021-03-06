(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[278,785],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(9526),n=a(181);const r=e=>{const[t,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const t=n.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},4278:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var i=a(9526),n=a(1785);const r=a.p+"founder1.png",l=a.p+"funny1.jpg",o=a.p+"founder3.png",c=a.p+"founder2.png",u=a.p+"funny3.jpg",d=a.p+"funny2.jpg";var s=a(2326);const m=s.ZP.div`
  height: 100%;
  @media (max-width: 48rem) {
    height: 100%;
  }
`,g=s.ZP.div`
  margin: 3% 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`,p=s.ZP.div`
  width: auto;
  height: 100%;
  border-radius: 2%;
  padding: 2%;
  margin: 2% 2%;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  background-color: #fefefe;
`,h=s.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${r}) no-repeat 50% 5%;
  &:hover {
    background: url(${l}) no-repeat 50% 5%;
    background-size: contain;
  }
`,f=s.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${o}) no-repeat 50% 5%;
  &:hover {
    background: url(${u}) no-repeat 50% 5%;
    background-size: contain;
  }
`,b=s.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${c}) no-repeat 50% 5%;
  &:hover {
    background: url(${d}) no-repeat 50% 5%;
    background-size: contain;
  }
`,E=s.ZP.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 2%;
`;function k(){return i.createElement(m,null,i.createElement(n.Title,null,"Founders"),i.createElement(g,null,i.createElement(p,null,i.createElement(h,null),i.createElement(E,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement(p,null,i.createElement(f,null),i.createElement(E,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement(p,null,i.createElement(b,null),i.createElement(E,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}},1785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>g,default:()=>f});var i=a(9526),n=a(2326),r=a(8253);const l=(0,n.ZP)(r.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,o=n.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,c=(0,n.ZP)(r.E.img)`
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
`;function u({setSelectedImg:e,selectedImg:t,images:a}){return i.createElement(l,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},i.createElement(o,{className:"backdrop"},i.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=a.p+"Joy.jpg";var s=a(1296);const m=(0,i.lazy)((()=>Promise.all([a.e(216),a.e(839)]).then(a.bind(a,9839)))),g=n.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,p=n.ZP.div`
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
`,h=n.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,i.useState)(null),{docs:a}=(0,s.Z)("images");return i.createElement("div",null,i.createElement(p,null,i.createElement(h,null,i.createElement(g,{style:{color:"white"}},"Gallery"))),i.createElement(i.Suspense,{fallback:i.createElement("div",{style:{color:"White"}},"Loading...")},i.createElement(m,{setSelectedImg:t}),e&&i.createElement(u,{selectedImg:e,setSelectedImg:t,images:a})))}}}]);