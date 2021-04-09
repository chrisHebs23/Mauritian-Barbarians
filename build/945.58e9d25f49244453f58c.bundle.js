(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[945,785],{1296:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(9526),i=a(181);const r=e=>{const[t,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{const t=i.RZ.collection(e).orderBy("createdAt","desc").onSnapshot((e=>{let t=[];e.forEach((e=>{t.push({...e.data(),id:e.id})})),a(t)}));return()=>t()}),[e]),{docs:t}}},1785:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Title:()=>g,default:()=>f});var n=a(9526),i=a(2326),r=a(8253);const l=(0,i.ZP)(r.E.div)`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`,o=i.ZP.div`
  display: flex;
  justify-content: center;
  align-content: center;
`,c=(0,i.ZP)(r.E.img)`
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
`;function s({setSelectedImg:e,selectedImg:t,images:a}){return n.createElement(l,{onClick:t=>{t.target.classList.contains("backdrop")&&e(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},n.createElement(o,{className:"backdrop"},n.createElement(c,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})))}const m=a.p+"Joy.jpg";var d=a(1296);const u=(0,n.lazy)((()=>Promise.all([a.e(216),a.e(839)]).then(a.bind(a,9839)))),g=i.ZP.h1`
  margin: auto 0;
  color: Black;
  font-size: 4rem;
  text-align: center;
  margin: 0;
  @media (max-width: 30rem) {
    font-size: 3rem;
  }
`,h=i.ZP.div`
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
`,p=i.ZP.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 10rem;
  width: 98%;
  @media (max-width: 48rem) {
    background-size: 98%;
    height: auto;
  }
`;function f(){const[e,t]=(0,n.useState)(null),{docs:a}=(0,d.Z)("images");return n.createElement("div",null,n.createElement(h,null,n.createElement(p,null,n.createElement(g,{style:{color:"white"}},"Gallery"))),n.createElement(n.Suspense,{fallback:n.createElement("div",{style:{color:"White"}},"Loading...")},n.createElement(u,{setSelectedImg:t}),e&&n.createElement(s,{selectedImg:e,setSelectedImg:t,images:a})))}},7945:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var n=a(9526),i=a(2326),r=a(181);const l=e=>{const[t,a]=(0,n.useState)(0),[i,l]=(0,n.useState)(null),[o,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const t=r.tO.ref(e.name),n=r.RZ.collection("sponsors");t.put(e).on("state_change",(e=>{let t=e.bytesTransferred/e.totalBytes*100;a(t)}),(e=>{l(e)}),(async()=>{const e=await t.getDownloadURL(),a=(0,r.AB)();n.add({url:e,createdAt:a}),c(e)}))}),[e]),{progress:t,url:o,error:i}};var o=a(8253),c=a(2268);const s=(0,i.ZP)(o.E.div)`
  height: 5px;
  background: ${c.eo};
  margin-top: 20px;
`,m=({file:e,setFile:t})=>{const{progress:a,url:i}=l(e);return console.log(a,i),(0,n.useEffect)((()=>{i&&t(null)}),[i,t]),n.createElement(s,{initial:{width:0},animate:{width:a+"%"}})},d=i.ZP.form`
  /* margin: 30px auto 10px; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,u=i.ZP.label`
  width: 30px;
  height: 30px;
  border: 1px solid ${c.Zv};
  border-radius: 50%;
  /* margin: auto; */
  /* line-height: 30px; */
  background-color: ${c.eo};
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
    background: ${c.eo};
    color: #fff;
  }
`,g=i.ZP.span`
  margin: auto 0;
`,h=()=>{const[e,t]=(0,n.useState)(null),[a,i]=(0,n.useState)(null),r=["image/png","image/jpeg"];return n.createElement(d,null,n.createElement(u,null,n.createElement("input",{type:"file",onChange:e=>{let a=e.target.files[0];a&&r.includes(a.type)?(t(a),i("")):(t(null),i("Please select an image file (png or jpg)"))}}),n.createElement(g,null,"+")),n.createElement("div",{className:"output"},a&&n.createElement("div",{className:"error"},a),e&&n.createElement("div",null,e.name),e&&n.createElement(m,{file:e,setFile:t})))};var p=a(1296);const f=i.ZP.ul`
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
`,w=(0,i.ZP)(o.E.li)`
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
`,x=(0,i.ZP)(o.E.img)`
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
`,E=({setSelectedImg:e})=>{const{docs:t}=(0,p.Z)("sponsors");return n.createElement(f,null,t&&t.map((t=>n.createElement(w,{key:t.id,onClick:()=>e(t.url)},n.createElement(x,{src:t.url})))))};var b=a(1785),v=a(1070),y=a(5092);const k=i.ZP.div`
  margin-left: 2%;
`,Z=i.ZP.button`
  width: 10rem;
  margin: 5%;
  border: none;
  background-color: ${theme.PrimaryPink};
  color: #fff;
  text-align: center;
`;function P(){const[e,t]=(0,n.useState)(""),{currentUser:a,logout:i}=(0,v.a)(),r=(0,y.k6)();return n.createElement("div",null,n.createElement(b.Title,null,"Upload Sponsors Logo"),a.email,n.createElement(k,null,n.createElement(Z,{onClick:async function(){t("");try{await i(),r.push("/home")}catch{t("Failed to log out")}}},"Log Out")),n.createElement(h,null),n.createElement(E,null))}},2268:(e,t,a)=>{"use strict";a.d(t,{Zv:()=>n,eo:()=>i,qR:()=>r});const n="#1a1e83",i="#df54ad",r="#f018a2"}}]);