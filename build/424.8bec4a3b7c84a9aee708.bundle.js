(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[424,544],{1296:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(9526),a=r(181);const i=e=>{const[t,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const t=a.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),r(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Title:()=>u,default:()=>f});var n=r(9526),a=r(2326),i=r(8253);const o=(0,a.ZP)(i.E.div)`
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
`,c=(0,a.ZP)(i.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:r}){return n.createElement(o,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},n.createElement(l,{className:"backdrop"},n.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=r.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var m=r(1296);const h=(0,n.lazy)((()=>r.e(839).then(r.bind(r,9839)))),u=a.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,g=a.ZP.div`
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
`,p=a.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,n.useState)(null),{docs:r}=(0,m.Z)("images");return n.createElement("div",null,n.createElement(g,null,n.createElement(p,null,n.createElement(u,{style:{color:"white"}},"Gallery"))),n.createElement(n.Suspense,{fallback:n.createElement("div",{style:{color:"White"}},"Loading...")},n.createElement(h,{setSelectedImg:t}),e&&n.createElement(s,{selectedImg:e,setSelectedImg:t,images:r})))}},3424:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(9526),a=r(2326),i=r(2544),o=r(1296),l=r(8253),c=r(2416),s=r(4180);const d=(0,a.ZP)(l.E.img)`
  width: 18rem;
  height: auto;
  margin: auto;

  @media (max-width: 42rem) {
    width: 13rem;
  }
  @media (max-width: 30rem) {
    width: 12rem;
  }
`,m=a.ZP.a`
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
    fill: ${s.D0} !important;
  }
`,u=()=>{const{docs:e}=(0,o.Z)("sponsors");return n.createElement(h,{autoplay:!0,autoplayInterval:1e3,pauseOnHover:!0,wrapAround:!0},e.map((e=>n.createElement(m,{href:e.website,target:"_blank",key:e.id},n.createElement(d,{src:e.url})))))},g=r.p+"ddec8db826a31c1a38fb76c17a0ea70f.jpg";var p=r(441);const f=a.ZP.div`
  height: 100vh;
  background: url(${g}) no-repeat center center;
  background-size: cover;
  position: relative;
`,b=a.ZP.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,w=a.ZP.h4`
  color: #fff;
  margin: 3%;
`,k=a.ZP.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;function y(){return n.createElement(f,null,n.createElement(b,null,n.createElement(i.Title,{style:{color:"#fff"}},"To Our Sponsors"),n.createElement(w,{style:{textAlign:"center"}},"Thank you for supporting the ",n.createElement("em",null,"Dream"),"! We look forward to working with you again in the future!"),n.createElement(u,null),n.createElement(w,{style:{textAlign:"center"}},"“Keen to become part of the ",n.createElement("em",null,"Dream"),"! Help by hitting that sponsor's button below!"),n.createElement(p.Z,{className:"buttons"},n.createElement(k,{href:"https://www.gofundme.com/",target:"_blank"},"Sponsor The Dream"))))}},441:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(9526),a=r(2326),i=r(4180);const o=a.ZP.button`
  background-color: ${i.D0};
  width: auto;
  border: none;
  justify-self: center;
  align-self: center;
  margin-bottom: auto;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: ${i.tE};
  }
`;function l({children:e}){return n.createElement(o,null,e)}}}]);