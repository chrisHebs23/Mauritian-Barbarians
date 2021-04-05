(()=>{"use strict";var e,t,r={1070:(e,t,r)=>{r.d(t,{a:()=>l,H:()=>i});var n=r(9526),a=r(181);const o=n.createContext();function l(){return(0,n.useContext)(o)}function i({children:e}){const[t,r]=(0,n.useState)(),[l,i]=(0,n.useState)(!0);(0,n.useEffect)((()=>a.I8.onAuthStateChanged((e=>{r(e),i(!1)}))),[]);const c={currentUser:t,login:function(e,t){return a.I8.signInWithEmailAndPassword(e,t)},logout:function(){return a.I8.signOut()},resetPassword:function(e){return a.I8.sendPasswordResetEmail(e)}};return n.createElement(o.Provider,{value:c},!l&&e)}},181:(e,t,r)=>{r.d(t,{I8:()=>o,tO:()=>l,RZ:()=>i,AB:()=>c});var n=r(3732);r(6464),r(9991),r(6957);const a={apiKey:"AIzaSyBU2vKRjhljC-ktqCU6JOrfZP1a41AQPm0",authDomain:"mb-website-d5f6f.firebaseapp.com",projectId:"mb-website-d5f6f",storageBucket:"mb-website-d5f6f.appspot.com",appId:"1:421298155459:web:83929697b405d5b5331776"};n.Z.apps.length||n.Z.initializeApp(a);const o=n.Z.auth(),l=n.Z.storage(),i=n.Z.firestore(),c=n.Z.firestore.FieldValue.serverTimestamp},8757:(e,t,r)=>{var n=r(9526),a=r(3961),o=r(2326),l=r(4180),i=r(8955),c=r(4641),s=r(6142);const d=o.ZP.footer`
  background-color: ${l.tE};
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
  justify-items: center;
`,m=o.ZP.div`
  width: 100%;
  grid-column: 1/2;
  display: flex;
  justify-content: center;

  @media (max-width: 30rem) {
    width: 100%;
  }

  ${s.r} {
    width: 2.5rem;
    height: 2.5rem;
    color: #fff;
    margin-right: 2%;

    &:hover {
      color: ${l.D0};
      transform: rotate(50deg);
    }
  }
`,u=o.ZP.p`
  color: #fff;
  font-size: 0.9rem;
  margin: auto;
  @media (max-width: 30rem) {
    grid-column: 2/4;
    font-size: 0.7rem;
  }
`;function p(){return n.createElement(d,null,n.createElement(m,null,n.createElement("a",{href:"https://www.facebook.com/MauritianBarbarians",target:"_blank"},n.createElement(i.x,null)),n.createElement("a",{href:"https://www.facebook.com/MauritianBarbarians",target:"_blank"},n.createElement(c.P,null)),n.createElement(c.P,null)),n.createElement(u,null,"© ",(new Date).getFullYear()," Mauritian Barbarians"))}var f=r(2210),b=r(5047),h=r(4515),g=(r(4039),r(565));const E=(0,o.ZP)(b.Z)`
  /* border-bottom: 0.5px solid grey; */
  box-shadow: 0 8px 4px -9px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`,v=(0,o.ZP)(b.Z.Brand)`
  width: 12rem;
  height: 5rem;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${f.Z});
  margin: 0;
  @media (max-width: 48rem) {
    margin-left: -3.5rem;
  }
`,w=o.ZP.h3`
  text-align: left;
  justify-items: left;
  margin-left: -3%;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 64rem) {
    display: none;
  }
`,x=(0,o.ZP)(h.Z)`
  width: 100%;
`,y=(0,o.ZP)(g.OL)`
  color: #000;
  text-decoration: none;
  margin: 0 auto;
  &:hover {
    color: ${l.D0};
    text-decoration: none;
  }
`;function P(e){return n.createElement(E,{expand:"lg",variant:"light"},n.createElement(v,{to:"/"}),n.createElement(w,null,"Mauritian ",n.createElement("br",null),"Barbarians"),n.createElement(b.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.createElement(b.Z.Collapse,{id:"basic-navbar-nav"},n.createElement(x,{className:"navbar listStyle"},n.createElement(y,{exact:!0,to:"/"},"Home"),n.createElement(y,{to:"/gallery"},"Gallery"),n.createElement(y,{to:"/sponsors"},"Sponsors"),n.createElement(y,{to:"/founders"},"Founders"),n.createElement(y,{to:"/contact"},"Contact Us"))))}var k=r(5092),Z=r(1070),A=r(6164),j=r.n(A);function z({component:e,...t}){const{currentUser:r}=(0,Z.a)();return n.createElement(k.AW,j()({},t,{render:t=>r?n.createElement(e,t):n.createElement(k.l_,{to:"/login"})}))}const S=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(685)]).then(r.bind(r,5685)))),C=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(544)]).then(r.bind(r,2544)))),B=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(424)]).then(r.bind(r,3424)))),_=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(474)]).then(r.bind(r,1474)))),I=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(720)]).then(r.bind(r,8720)))),O=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(479)]).then(r.bind(r,2479)))),T=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(945)]).then(r.bind(r,7945)))),W=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(201)]).then(r.bind(r,5201)))),$=(0,n.lazy)((()=>Promise.all([r.e(216),r.e(404)]).then(r.bind(r,9404)))),M=o.ZP.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;const D=function(){return n.createElement(M,null,n.createElement(g.VK,null,n.createElement(Z.H,null,n.createElement(P,null),n.createElement(k.rs,null,n.createElement(n.Suspense,{fallback:n.createElement("div",{style:{color:"White"}},"Loading...")},n.createElement(k.AW,{exact:!0,path:"/",component:S}),n.createElement(k.AW,{exact:!0,path:"/gallery",component:C}),n.createElement(k.AW,{exact:!0,path:"/sponsors",component:B}),n.createElement(k.AW,{exact:!0,path:"/founders",component:_}),n.createElement(k.AW,{exact:!0,path:"/contact",component:I}),n.createElement(z,{exact:!0,path:"/upload",component:O}),n.createElement(z,{exact:!0,path:"/logo",component:T}),n.createElement(k.AW,{path:"/login",component:W}),n.createElement(k.AW,{exact:!0,path:"/forgot-password",component:$}))),n.createElement(p,null))))};a.render(n.createElement(D,null),document.getElementById("root"))},4180:(e,t,r)=>{r.d(t,{tE:()=>n,D0:()=>a,qR:()=>o});const n="#1a1e83",a="#df54ad",o="#f018a2"},2210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"b9a4ea5f14719bd9d9d27fda05844612.png"}},n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={id:e,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.exports}a.m=r,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"."+{201:"de87cce713d5742125aa",404:"865843d476d30afedc3c",424:"8bec4a3b7c84a9aee708",474:"09fc886ee72a99f80dfd",479:"84d76f9bd6635209a36d",544:"77081eda6ebb3d125587",674:"1723cc3380c2609aa15a",685:"91869fa9155d07b6d8d1",720:"65d81a48f673f051f8c6",839:"83ca5299ae564b386c59",945:"ed5354e8dfe4ec7c0923"}[e]+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="react-webpack-boilerplate:",a.l=(r,n,o,l)=>{if(e[r])e[r].push(n);else{var i,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var m=s[d];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==t+o){i=m;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var u=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0},t=[[8757,216]];a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,a)=>{n=e[t]=[r,a]}));r.push(n[2]=o);var l=a.p+a.u(t),i=new Error;a.l(l,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,n[1](i)}}),"chunk-"+t,t)}};var r=e=>{},n=(n,o)=>{for(var l,i,[c,s,d,m]=o,u=0,p=[];u<c.length;u++)i=c[u],a.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(l in s)a.o(s,l)&&(a.m[l]=s[l]);for(d&&d(a),n&&n(o);p.length;)p.shift()();return m&&t.push.apply(t,m),r()},o=self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[];function l(){for(var r,n=0;n<t.length;n++){for(var o=t[n],l=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(l=!1)}l&&(t.splice(n--,1),r=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),r}o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var i=a.x;a.x=()=>(a.x=i||(e=>{}),(r=l)())})();a.x()})();