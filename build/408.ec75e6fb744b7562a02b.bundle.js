(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[408,785],{1296:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9526),a=n(181);const o=e=>{const[t,n]=(0,r.useState)([]);return(0,r.useEffect)((()=>{const t=a.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),n(t)}));return()=>t()}),[e]),{docs:t}}},1785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Title:()=>g,default:()=>p});var r=n(9526),a=n(2326),o=n(8253);const i=(0,a.ZP)(o.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,l=a.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,c=(0,a.ZP)(o.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:n}){return r.createElement(i,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},r.createElement(l,{className:"backdrop"},r.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=n.p+"Joy.jpg";var m=n(1296);const u=(0,r.lazy)((()=>Promise.all([n.e(216),n.e(839)]).then(n.bind(n,9839)))),g=a.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,h=a.ZP.div`
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
`,f=a.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function p(){const[e,t]=(0,r.useState)(null),{docs:n}=(0,m.Z)("images");return r.createElement("div",null,r.createElement(h,null,r.createElement(f,null,r.createElement(g,{style:{color:"white"}},"Gallery"))),r.createElement(r.Suspense,{fallback:r.createElement("div",{style:{color:"White"}},"Loading...")},r.createElement(u,{setSelectedImg:t}),e&&r.createElement(s,{selectedImg:e,setSelectedImg:t,images:n})))}},4408:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(9526),a=n(2326),o=n(1785);const i=n.p+"sponsorImage.jpg";var l=n(441);const c=(0,r.lazy)((()=>Promise.all([n.e(216),n.e(502)]).then(n.bind(n,3502)))),s=a.ZP.div`
  height: 100vh;
  background: url(${i}) no-repeat center center;
  background-size: cover;
  position: relative;
`,d=a.ZP.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,m=a.ZP.h4`
  color: #fff;
  margin: 3%;
`,u=a.ZP.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;function g(){return r.createElement(s,null,r.createElement(d,null,r.createElement(o.Title,{style:{color:"#fff"}},"To Our Sponsors"),r.createElement(m,{style:{textAlign:"center"}},"Thank you for supporting the ",r.createElement("em",null,"Dream"),"! We look forward to working with you again in the future!"),r.createElement(c,null),r.createElement(m,{style:{textAlign:"center"}},"“Keen to become part of the ",r.createElement("em",null,"Dream"),"! Help by hitting that sponsor's button below!"),r.createElement(l.Z,{className:"buttons"},r.createElement(u,{href:"https://www.gofundme.com/",target:"_blank"},"Sponsor The Dream"))))}},441:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9526);const a=n(2326).ZP.button`
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
`;function o({children:e}){return r.createElement(a,null,e)}}}]);