(self.webpackChunkreact_webpack_boilerplate=self.webpackChunkreact_webpack_boilerplate||[]).push([[674],{1296:(t,r,n)=>{"use strict";n.d(r,{Z:()=>i});var e=n(9526),a=n(181);const i=t=>{const[r,n]=(0,e.useState)([]);return(0,e.useEffect)((()=>{const r=a.RZ.collection(t).orderBy("createdAt","desc").onSnapshot((t=>{let r=[];t.forEach((t=>{r.push({...t.data(),id:t.id})})),n(r)}));return()=>r()}),[t]),{docs:r}}},2674:(t,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>u});var e=n(9526),a=n(1296),i=n(2628),o=n.n(i),c=n(5701),p=n.n(c),s=n(6562),d={insert:"head",singleton:!1};p()(s.Z,d);s.Z.locals;function u(){const{docs:t}=(0,a.Z)("background");return e.createElement(o(),{images:t.map((t=>t.url)),duration:3,transition:2})}},6562:(t,r,n)=>{"use strict";n.d(r,{Z:()=>i});var e=n(352),a=n.n(e)()((function(t){return t[1]}));a.push([t.id,"#ReactBackgroundSlider > figure {\r\n  height: 100% !important;\r\n  width: 85% !important;\r\n  position: fixed !important;\r\n  top: 0 !important;\r\n  left: 7.5% !important;\r\n  color: transparent !important;\r\n  background-position: 50% !important;\r\n  background-repeat: no-repeat !important;\r\n  z-index: -1000 !important;\r\n  backface-visibility: hidden !important;\r\n}\r\n\r\n@media (max-width: 64rem) {\r\n  #ReactBackgroundSlider > figure {\r\n    height: 100% !important;\r\n    width: 100% !important;\r\n\r\n    top: 0 !important;\r\n    left: 0 !important;\r\n  }\r\n}\r\n",""]);const i=a}}]);