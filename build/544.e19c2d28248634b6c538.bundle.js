(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[544],{1296:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(9526),r=i(3177);const n=e=>{const[t,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{const t=r.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),i(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Title:()=>g,default:()=>w});var a=i(9526),r=i(2326),n=i(9839),c=i(8253);const l=(0,r.ZP)(c.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,d=r.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,m=(0,r.ZP)(c.E.img)`
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
`;function o({setSelectedImg:e,selectedImg:t,images:i}){return a.createElement(l,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},a.createElement(d,{className:"backdrop"},a.createElement(m,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const h=i.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var s=i(1296);const g=r.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,u=r.ZP.div`
  background: url(${h}) no-repeat 50% 30%;
  height: 10rem;
  background-size: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    background: url(${h}) no-repeat 40% 20%;
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
`;function w(){const[e,t]=(0,a.useState)(null),{docs:i}=(0,s.Z)("images");return a.createElement("div",null,a.createElement(u,null,a.createElement(p,null,a.createElement(g,{style:{color:"white"}},"Gallery"))),a.createElement(n.Z,{setSelectedImg:t}),e&&a.createElement(o,{selectedImg:e,setSelectedImg:t,images:i}))}},9839:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var a=i(9526),r=i(1296),n=i(2326),c=i(8253);const l=n.ZP.ul`
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
`,d=(0,n.ZP)(c.E.li)`
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
`,m=(0,n.ZP)(c.E.img)`
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
`,o=({setSelectedImg:e})=>{const{docs:t}=(0,r.Z)("images");return a.createElement(l,null,t&&t.map((t=>a.createElement(d,{key:t.id,onClick:()=>e(t.url)},a.createElement(m,{src:t.url})))))}}}]);