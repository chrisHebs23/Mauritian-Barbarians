(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[945,544],{1296:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(9526),n=i(3177);const r=e=>{const[t,i]=(0,a.useState)([]);return(0,a.useEffect)((()=>{const t=n.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),i(t)}));return()=>t()}),[e]),{docs:t}}},2544:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Title:()=>g,default:()=>f});var a=i(9526),n=i(2326),r=i(9839),l=i(8253);const o=(0,n.ZP)(l.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,c=n.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,m=(0,n.ZP)(l.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:i}){return a.createElement(o,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},a.createElement(c,{className:"backdrop"},a.createElement(m,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=i.p+"684ec0b7c3ce77dc32f770ec902329a3.jpg";var h=i(1296);const g=n.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,u=n.ZP.div`
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
`,p=n.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,a.useState)(null),{docs:i}=(0,h.Z)("images");return a.createElement("div",null,a.createElement(u,null,a.createElement(p,null,a.createElement(g,{style:{color:"white"}},"Gallery"))),a.createElement(r.Z,{setSelectedImg:t}),e&&a.createElement(s,{selectedImg:e,setSelectedImg:t,images:i}))}},9839:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var a=i(9526),n=i(1296),r=i(2326),l=i(8253);const o=r.ZP.ul`
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
`,c=(0,r.ZP)(l.E.li)`
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
`,m=(0,r.ZP)(l.E.img)`
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
`,s=({setSelectedImg:e})=>{const{docs:t}=(0,n.Z)("images");return a.createElement(o,null,t&&t.map((t=>a.createElement(c,{key:t.id,onClick:()=>e(t.url)},a.createElement(m,{src:t.url})))))}},7945:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Z});var a=i(9526),n=i(2326),r=i(3177);var l=i(8253),o=i(4180);const c=(0,n.ZP)(l.E.div)`
  height: 5px;
  background: ${o.D0};
  margin-top: 20px;
`,m=({file:e,setFile:t})=>{const{progress:i,url:n}=(e=>{const[t,i]=(0,a.useState)(0),[n,l]=(0,a.useState)(null),[o,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const t=r.tO.ref(e.name),a=r.RZ.collection("sponsors");t.put(e).on("state_change",(e=>{let t=e.bytesTransferred/e.totalBytes*100;i(t)}),(e=>{l(e)}),(async()=>{const e=await t.getDownloadURL(),i=(0,r.AB)();a.add({url:e,createdAt:i}),c(e)}))}),[e]),{progress:t,url:o,error:n}})(e);return console.log(i,n),(0,a.useEffect)((()=>{n&&t(null)}),[n,t]),a.createElement(c,{initial:{width:0},animate:{width:i+"%"}})},s=n.ZP.form`
  /* margin: 30px auto 10px; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=n.ZP.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${o.tE};
  border-radius: 50%;
  /* margin: auto; */
  /* line-height: 30px; */
  background-color: ${o.D0};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  &:hover {
    background: ${o.D0};
    color: #fff;
  }
`,h=n.ZP.span`
  margin: auto 0;
`,g=()=>{const[e,t]=(0,a.useState)(null),[i,n]=(0,a.useState)(null),r=["image/png","image/jpeg"];return a.createElement(s,null,a.createElement(d,null,a.createElement("input",{type:"file",onChange:e=>{let i=e.target.files[0];i&&r.includes(i.type)?(t(i),n("")):(t(null),n("Please select an image file (png or jpg)"))}}),a.createElement(h,null,"+")),a.createElement("div",{className:"output"},i&&a.createElement("div",{className:"error"},i),e&&a.createElement("div",null,e.name),e&&a.createElement(m,{file:e,setFile:t})))};var u=i(1296);const p=n.ZP.ul`
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
`,f=(0,n.ZP)(l.E.li)`
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
`,w=(0,n.ZP)(l.E.img)`
  max-height: 100%;
  min-width: 45%;
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
`,x=({setSelectedImg:e})=>{const{docs:t}=(0,u.Z)("sponsors");return a.createElement(p,null,t&&t.map((t=>a.createElement(f,{key:t.id,onClick:()=>e(t.url)},a.createElement(w,{src:t.url})))))};var E=i(2544),v=i(1070),b=i(5092);const y=n.ZP.div`
  margin-left: 2%;
`,k=n.ZP.button`
  width: 10rem;
  margin: 5%;
  border: none;
  background-color: ${theme.primaryPink};
  color: #fff;
  text-align: center;
`;function Z(){const[e,t]=(0,a.useState)(""),{currentUser:i,logout:n}=(0,v.a)(),r=(0,b.k6)();return a.createElement("div",null,a.createElement(E.Title,null,"Upload Sponsors Logo"),i.email,a.createElement(y,null,a.createElement(k,{onClick:async function(){t("");try{await n(),r.push("/home")}catch{t("Failed to log out")}}},"Log Out")),a.createElement(g,null),a.createElement(x,null))}}}]);