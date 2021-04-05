(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[424,544],{1296:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(9526),a=r(3177);const n=e=>{const[t,r]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const t=a.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),r(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Title:()=>u,default:()=>f});var i=r(9526),a=r(2326),n=r(9839),o=r(8253);const l=(0,a.ZP)(o.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,c=a.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,m=(0,a.ZP)(o.E.img)`
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
`;function d({setSelectedImg:e,selectedImg:t,images:r}){return i.createElement(l,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},i.createElement(c,{className:"backdrop"},i.createElement(m,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const s=r.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var h=r(1296);const u=a.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,g=a.ZP.div`
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
`;function f(){const[e,t]=(0,i.useState)(null),{docs:r}=(0,h.Z)("images");return i.createElement("div",null,i.createElement(g,null,i.createElement(p,null,i.createElement(u,{style:{color:"white"}},"Gallery"))),i.createElement(n.Z,{setSelectedImg:t}),e&&i.createElement(d,{selectedImg:e,setSelectedImg:t,images:r}))}},9839:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(9526),a=r(1296),n=r(2326),o=r(8253);const l=n.ZP.ul`
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
`,c=(0,n.ZP)(o.E.li)`
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
`,m=(0,n.ZP)(o.E.img)`
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
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,a.Z)("images");return i.createElement(l,null,t&&t.map((t=>i.createElement(c,{key:t.id,onClick:()=>e(t.url)},i.createElement(m,{src:t.url})))))}},3424:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var i=r(9526),a=r(2326),n=r(2544),o=r(1296),l=r(8253),c=r(2416),m=r(4180);const d=(0,a.ZP)(l.E.img)`
  width: 18rem;
  height: auto;
  margin: auto;

  @media (max-width: 42rem) {
    width: 13rem;
  }
  @media (max-width: 30rem) {
    width: 12rem;
  }
`,s=a.ZP.a`
  width: auto;
  height: auto;
`,h=(0,a.ZP)(c.ZP)`
  height: 35vh !important;
  width: 100% !important;

  @media (max-width: 30rem) {
    height: 25vh !important;
  }
  .slider-frame {
    height: 100% !important;
  }

  .slider-list {
    height: 100% !important;
    width: 100% !important;
    margin: auto;
  }

  .slider-slide {
    display: flex !important; // make us of Flexbox
    align-items: center; // does vertically center the desired content
    justify-content: center; // horizontally centers single line items
    text-align: center; // optional, but helps horizontally center text that breaks into multiple lines
  }

  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }

  button {
    fill: ${m.D0} !important;
  }
`,u=()=>{const{docs:e}=(0,o.Z)("sponsors");return i.createElement(h,{autoplay:!0,autoplayInterval:1e3,pauseOnHover:!0,wrapAround:!0},e.map((e=>i.createElement(s,{href:e.website,target:"_blank",key:e.id},i.createElement(d,{src:e.url})))))},g=r.p+"ddec8db826a31c1a38fb76c17a0ea70f.jpg";var p=r(441);const f=a.ZP.div`
  height: 100vh;
  background: url(${g}) no-repeat center center;
  background-size: cover;
  position: relative;
`,w=a.ZP.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,b=a.ZP.h4`
  color: #fff;
  margin: 3%;
`,x=a.ZP.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;function v(){return i.createElement(f,null,i.createElement(w,null,i.createElement(n.Title,{style:{color:"#fff"}},"To Our Sponsors"),i.createElement(b,{style:{textAlign:"center"}},"Thank you for supporting the ",i.createElement("em",null,"Dream"),"! We look forward to working with you again in the future!"),i.createElement(u,null),i.createElement(b,{style:{textAlign:"center"}},"“Keen to become part of the ",i.createElement("em",null,"Dream"),"! Help by hitting that sponsor's button below!"),i.createElement(p.Z,{className:"buttons"},i.createElement(x,{href:"https://www.gofundme.com/",target:"_blank"},"Sponsor The Dream"))))}},441:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var i=r(9526),a=r(2326),n=r(4180);const o=a.ZP.button`
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
`;function l({children:e}){return i.createElement(o,null,e)}}}]);