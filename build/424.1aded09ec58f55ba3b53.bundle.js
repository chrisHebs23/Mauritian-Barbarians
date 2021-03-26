(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[424,544],{1296:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(9526),a=i(3177);const n=e=>{const[t,i]=(0,r.useState)([]);return(0,r.useEffect)((()=>{const t=a.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),i(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Title:()=>g,default:()=>f});var r=i(9526),a=i(2326),n=i(9839),l=i(8253);const c=(0,a.ZP)(l.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,o=a.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,m=(0,a.ZP)(l.E.img)`
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
`;function d({setSelectedImg:e,selectedImg:t,images:i}){return r.createElement(c,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},r.createElement(o,{className:"backdrop"},r.createElement(m,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const s=i.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var h=i(1296);const g=a.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
`,u=a.ZP.div`
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
`,p=a.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,r.useState)(null),{docs:i}=(0,h.Z)("images");return r.createElement("div",null,r.createElement(u,null,r.createElement(p,null,r.createElement(g,{style:{color:"white"}},"Gallery"))),r.createElement(n.Z,{setSelectedImg:t}),e&&r.createElement(d,{selectedImg:e,setSelectedImg:t,images:i}))}},9839:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(9526),a=i(1296),n=i(2326),l=i(8253);const c=n.ZP.ul`
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
`,m=(0,n.ZP)(l.E.img)`
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
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,a.Z)("images");return r.createElement(c,null,t&&t.map((t=>r.createElement(o,{key:t.id,onClick:()=>e(t.url)},r.createElement(m,{src:t.url})))))}},3424:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var r=i(9526),a=i(2326),n=i(2544),l=i(1296),c=i(8253),o=i(2416);const m=(0,a.ZP)(c.E.img)`
  width: 18rem;
  height: auto;
  margin: auto;
  @media (max-width: 30rem) {
    width: 10rem;
  }
`,d=a.ZP.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-self: center;
  align-self: center;
  margin-bottom: 10%;
`,s=(0,a.ZP)(o.ZP)`
  height: 70% !important;
  width: 100% !important;

  @media (max-width: 30rem) {
    height: 50% !important;
  }

  .slider-frame {
    height: 90% !important;
  }

  .slider-list {
    margin: 5% 20% !important;
  }

  .slider-slide {
    display: flex !important;
    justify-self: center;
    align-items: center;
    width: 100% !important;
    height: auto !important;
  }
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    margin-top: 5%;
  }
`,h=()=>{const{docs:e}=(0,l.Z)("sponsors");return r.createElement(s,{autoplay:!0},e.map((e=>r.createElement(d,{href:e.website,target:"_blank",key:e.id},r.createElement(m,{src:e.url})))))},g=i.p+"ddec8db826a31c1a38fb76c17a0ea70f.jpg",u=a.ZP.div`
  height: 100vh;
  background: url(${g}) no-repeat center center;
  background-size: cover;
`,p=a.ZP.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  background-size: cover;
`,f=a.ZP.h4`
  color: #fff;
  margin: 2%;
`;function w(){return r.createElement(u,null,r.createElement(p,null,r.createElement(n.Title,{style:{color:"#fff"}},"To Our Sponsors"),r.createElement(f,{style:{textAlign:"center"}},"Thank you for supporting the ",r.createElement("em",null,"Dream"),"! We look forward to working with you again in the future!"),r.createElement(h,null)))}}}]);