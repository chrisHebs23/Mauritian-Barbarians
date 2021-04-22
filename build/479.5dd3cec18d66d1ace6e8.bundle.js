(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[479,785,839],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(9526),l=a(181);const i=e=>{const[t,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const t=l.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},1785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>g,default:()=>p});var n=a(9526),l=a(2326),i=a(8253);const r=(0,l.ZP)(i.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,c=l.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,o=(0,l.ZP)(i.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:a}){return n.createElement(r,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},n.createElement(c,{className:"backdrop"},n.createElement(o,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const d=a.p+"Joy.jpg";var m=a(1296);const u=(0,n.lazy)((()=>Promise.all([a.e(216),a.e(839)]).then(a.bind(a,9839)))),g=l.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,h=l.ZP.div`
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
`,f=l.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function p(){const[e,t]=(0,n.useState)(null),{docs:a}=(0,m.Z)("images");return n.createElement("div",null,n.createElement(h,null,n.createElement(f,null,n.createElement(g,{style:{color:"white"}},"Gallery"))),n.createElement(n.Suspense,{fallback:n.createElement("div",{style:{color:"White"}},"Loading...")},n.createElement(u,{setSelectedImg:t}),e&&n.createElement(s,{selectedImg:e,setSelectedImg:t,images:a})))}},9839:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(9526),l=a(1296),i=a(2326),r=a(8253);a(6083);i.F4`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;const c=i.ZP.ul`
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
`,o=(0,i.ZP)(r.E.li)`
  height: 40vh;
  flex-grow: 1;
  margin: 1%;

  @media (max-height: 64rem) {
    li {
      height: 80vh;
    }
  }
`,s=(0,i.ZP)(r.E.img)`
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
`,d=({setSelectedImg:e})=>{const{docs:t}=(0,l.Z)("images");return n.createElement(c,null,t&&t.map((t=>n.createElement(o,{key:t.id,onClick:()=>e(t.url)},n.createElement(s,{src:t.url,alt:"gallery Images"})))))}},2479:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var n=a(9526),l=a(9839),i=a(2326),r=a(181);const c=e=>{const[t,a]=(0,n.useState)(0),[l,i]=(0,n.useState)(null),[c,o]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const t=r.tO.ref(e.name),n=r.RZ.collection("images");t.put(e).on("state_change",(e=>{let t=e.bytesTransferred/e.totalBytes*100;a(t)}),(e=>{i(e)}),(async()=>{const e=await t.getDownloadURL(),a=(0,r.AB)();n.add({url:e,createdAt:a}),o(e)}))}),[e]),{progress:t,url:c,error:l}};var o=a(8253),s=a(2268);const d=(0,i.ZP)(o.E.div)`
  height: 5px;
  background: ${s.eo};
  margin-top: 20px;
`,m=({file:e,setFile:t})=>{const{progress:a,url:l}=c(e);return console.log(a,l),(0,n.useEffect)((()=>{l&&t(null)}),[l,t]),n.createElement(d,{initial:{width:0},animate:{width:a+"%"}})},u=i.ZP.form`
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
`,g=i.ZP.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${s.Zv};
  border-radius: 50%;
  background-color: ${s.eo};
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
    background: ${s.eo};
    color: #fff;
  }
`,h=i.ZP.span`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-self: center;
`,f=()=>{const[e,t]=(0,n.useState)(null),[a,l]=(0,n.useState)(null),i=["image/png","image/jpeg"];return n.createElement(u,null,n.createElement(g,null,n.createElement("input",{type:"file",onChange:e=>{let a=e.target.files[0];a&&i.includes(a.type)?(t(a),l("")):(t(null),l("Please select an image file (png or jpg)"))}}),n.createElement(h,null,"+")),n.createElement("div",{className:"output"},a&&n.createElement("div",{className:"error"},a),e&&n.createElement("div",null,e.name),e&&n.createElement(m,{file:e,setFile:t})))};var p=a(1785),b=a(1070),w=a(5092);const E=i.ZP.div`
  display: flex;
  margin: 0 40%;
`,x=i.ZP.button`
  width: 10rem;
  margin: 5%;
  border: none;
  background-color: ${s.eo};
  color: #fff;
  text-align: center;
`;function y(){const[e,t]=(0,n.useState)(""),{currentUser:a,logout:i}=(0,b.a)();let r=(0,w.k6)();return n.createElement("div",null,n.createElement(p.Title,null,"Upload Images"),n.createElement(E,null,n.createElement(x,{onClick:async function(e){t("");try{await i(),r.push("/login")}catch{t("Failed to log out")}}},"Log Out")),n.createElement(f,null),n.createElement(l.default,null))}},2268:(e,t,a)=>{"use strict";a.d(t,{Zv:()=>n,eo:()=>l,qR:()=>i});const n="#1a1e83",l="#df54ad",i="#f018a2"}}]);