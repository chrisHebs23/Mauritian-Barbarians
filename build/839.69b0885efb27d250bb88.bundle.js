(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[839],{9839:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var a=i(9526),l=i(1296),r=i(2326),h=i(8253);i(6083);r.F4`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;const c=r.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0;

  @media (max-width: 64rem) {
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
`,m=(0,r.ZP)(h.E.li)`
  height: 40vh;
  flex-grow: 1;
  margin: 1%;

  @media (max-height: 64rem) {
    li {
      height: 80vh;
    }
  }
`,o=(0,r.ZP)(h.E.img)`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  image-resolution: auto;
  vertical-align: bottom;
  @media (max-width: 64rem) {
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
      overflow: hide;
    }
  }
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,l.Z)("images");return a.createElement(c,null,t&&t.map((t=>a.createElement(m,{key:t.id,onClick:()=>e(t.url)},a.createElement(o,{src:t.url,alt:"gallery Images"})))))}}}]);