(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[479,544],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(9526),l=a(3177);const i=e=>{const[t,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const t=l.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>g,default:()=>f});var n=a(9526),l=a(2326),i=a(9839),r=a(8253);const c=(0,l.ZP)(r.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,o=l.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,s=(0,l.ZP)(r.E.img)`
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
`;function d({setSelectedImg:e,selectedImg:t,images:a}){return n.createElement(c,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},n.createElement(o,{className:"backdrop"},n.createElement(s,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=a.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var u=a(1296);const g=l.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
`,h=l.ZP.div`
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
`,p=l.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,n.useState)(null),{docs:a}=(0,u.Z)("images");return n.createElement("div",null,n.createElement(h,null,n.createElement(p,null,n.createElement(g,{style:{color:"white"}},"Gallery"))),n.createElement(i.Z,{setSelectedImg:t}),e&&n.createElement(d,{selectedImg:e,setSelectedImg:t,images:a}))}},9839:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(9526),l=a(1296),i=a(2326),r=a(8253);const c=i.ZP.ul`
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
`,o=(0,i.ZP)(r.E.li)`
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
`,s=(0,i.ZP)(r.E.img)`
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
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,l.Z)("images");return n.createElement(c,null,t&&t.map((t=>n.createElement(o,{key:t.id,onClick:()=>e(t.url)},n.createElement(s,{src:t.url})))))}},2479:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var n=a(9526),l=a(9839),i=a(2326),r=a(3177);var c=a(8253),o=a(4180);const s=(0,i.ZP)(c.E.div)`
  height: 5px;
  background: ${o.D0};
  margin-top: 20px;
`,d=({file:e,setFile:t})=>{const{progress:a,url:l}=(e=>{const[t,a]=(0,n.useState)(0),[l,i]=(0,n.useState)(null),[c,o]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const t=r.tO.ref(e.name),n=r.RZ.collection("images");t.put(e).on("state_change",(e=>{let t=e.bytesTransferred/e.totalBytes*100;a(t)}),(e=>{i(e)}),(async()=>{const e=await t.getDownloadURL(),a=(0,r.AB)();n.add({url:e,createdAt:a}),o(e)}))}),[e]),{progress:t,url:c,error:l}})(e);return console.log(a,l),(0,n.useEffect)((()=>{l&&t(null)}),[l,t]),n.createElement(s,{initial:{width:0},animate:{width:a+"%"}})},m=i.ZP.form`
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
`,u=i.ZP.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${o.tE};
  border-radius: 50%;
  background-color: ${o.D0};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-self: center;
  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  &:hover {
    background: ${o.D0};
    color: #fff;
  }
`,g=i.ZP.span`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-self: center;
`,h=()=>{const[e,t]=(0,n.useState)(null),[a,l]=(0,n.useState)(null),i=["image/png","image/jpeg"];return n.createElement(m,null,n.createElement(u,null,n.createElement("input",{type:"file",onChange:e=>{let a=e.target.files[0];a&&i.includes(a.type)?(t(a),l("")):(t(null),l("Please select an image file (png or jpg)"))}}),n.createElement(g,null,"+")),n.createElement("div",{className:"output"},a&&n.createElement("div",{className:"error"},a),e&&n.createElement("div",null,e.name),e&&n.createElement(d,{file:e,setFile:t})))};var p=a(2544),f=a(1070),w=a(5092);const x=i.ZP.div`
  display: flex;
  margin: 0 40%;
`,E=i.ZP.button`
  width: 10rem;
  margin: 5%;
  border: none;
  background-color: ${o.D0};
  color: #fff;
  text-align: center;
`;function b(){const[e,t]=(0,n.useState)(""),{currentUser:a,logout:i}=(0,f.a)();let r=(0,w.k6)();return n.createElement("div",null,n.createElement(p.Title,null,"Upload Images"),n.createElement(x,null,n.createElement(E,{onClick:async function(e){t("");try{await i(),r.push("/login")}catch{t("Failed to log out")}}},"Log Out")),n.createElement(h,null),n.createElement(l.Z,null))}}}]);