(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[474,544],{1296:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(9526),r=i(3177);const n=e=>{const[t,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{const t=r.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),i(t)}));return()=>t()}),[e]),{docs:t}}},1474:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var a=i(9526),r=i(2544);const n=i.p+"74be6ea9810013648d1e049a62dbb7d7.png",l=i.p+"72e6dc36eb24c94b2874759023517a89.jpg",c=i.p+"e8409c1945401023f4dd8e4fc5e9646e.png",o=i.p+"45e2da109110d79f16057a817a00fe26.png",d=i.p+"93ebaff1abdea57cc576cb931b563413.jpg",u=i.p+"e2bed284144271d43f79f40d3183547a.jpg";var m=i(2326);const s=m.ZP.div`
  height: 100%;
`,g=m.ZP.div`
  margin: 3% 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`,h=m.ZP.div`
  width: auto;
  height: 100%;
  border-radius: 2%;
  padding: 2%;
  margin: 1% 1%;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  background-color: #fefefe;
`,p=m.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${n}) no-repeat 50% 5%;
  &:hover {
    background: url(${l}) no-repeat 50% 5%;
    background-size: contain;
  }
`,b=m.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${c}) no-repeat 50% 5%;
  &:hover {
    background: url(${d}) no-repeat 50% 5%;
    background-size: contain;
  }
`,f=m.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url(${o}) no-repeat 50% 5%;
  &:hover {
    background: url(${u}) no-repeat 50% 5%;
    background-size: contain;
  }
`,w=m.ZP.div`
  text-align: center;
  margin: 2%;
`;function x(){return a.createElement(s,null,a.createElement(r.Title,null,"Founders"),a.createElement(g,null,a.createElement(h,null,a.createElement(p,null),a.createElement(w,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),a.createElement(h,null,a.createElement(b,null),a.createElement(w,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),a.createElement(h,null,a.createElement(f,null),a.createElement(w,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}},2544:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Title:()=>g,default:()=>b});var a=i(9526),r=i(2326),n=i(9839),l=i(8253);const c=(0,r.ZP)(l.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,o=r.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,d=(0,r.ZP)(l.E.img)`
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
`;function u({setSelectedImg:e,selectedImg:t,images:i}){return a.createElement(c,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},a.createElement(o,{className:"backdrop"},a.createElement(d,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=i.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var s=i(1296);const g=r.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
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
`;function b(){const[e,t]=(0,a.useState)(null),{docs:i}=(0,s.Z)("images");return a.createElement("div",null,a.createElement(h,null,a.createElement(p,null,a.createElement(g,{style:{color:"white"}},"Gallery"))),a.createElement(n.Z,{setSelectedImg:t}),e&&a.createElement(u,{selectedImg:e,setSelectedImg:t,images:i}))}},9839:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var a=i(9526),r=i(1296),n=i(2326),l=i(8253);const c=n.ZP.ul`
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
`,o=(0,n.ZP)(l.E.li)`
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
`,d=(0,n.ZP)(l.E.img)`
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
`,u=({setSelectedImg:e})=>{const{docs:t}=(0,r.Z)("images");return a.createElement(c,null,t&&t.map((t=>a.createElement(o,{key:t.id,onClick:()=>e(t.url)},a.createElement(d,{src:t.url})))))}}}]);