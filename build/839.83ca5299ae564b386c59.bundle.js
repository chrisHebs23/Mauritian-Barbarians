(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[839],{9839:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>n});var a=t(9526),h=t(1296),l=t(2326),m=t(8253);const r=l.ZP.ul`
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
`,d=(0,l.ZP)(m.E.li)`
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
`,c=(0,l.ZP)(m.E.img)`
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
`,n=({setSelectedImg:e})=>{const{docs:i}=(0,h.Z)("images");return a.createElement(r,null,i&&i.map((i=>a.createElement(d,{key:i.id,onClick:()=>e(i.url)},a.createElement(c,{src:i.url})))))}}}]);