(()=>{var e={};e.id=523,e.ids=[523],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2344:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(9812),r(1506),r(5866);var a=r(3191),s=r(8716),n=r(7922),l=r.n(n),i=r(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["pages",{children:["films",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9812)),"C:\\Users\\msk\\Desktop\\MStream\\mstream\\app\\pages\\films\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"C:\\Users\\msk\\Desktop\\MStream\\mstream\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\msk\\Desktop\\MStream\\mstream\\app\\pages\\films\\page.tsx"],u="/pages/films/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/pages/films/page",pathname:"/pages/films",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4215:(e,t,r)=>{Promise.resolve().then(r.bind(r,9155))},7650:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},730:()=>{},9155:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(326),s=r(7577),n=r(434),l=r(6226),i=r(4304);function o(){let[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(1),[c,d]=(0,s.useState)(1),[u,p]=(0,s.useState)(0),[m,x]=(0,s.useState)(""),[h,g]=(0,s.useState)([]);return(0,a.jsxs)("main",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white",children:[(0,a.jsxs)("nav",{className:"fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl",children:[a.jsx(n.default,{href:"/",className:"text-xl font-bold",children:"MSTREAM"}),(0,a.jsxs)("div",{className:"hidden md:flex space-x-6 items-center",children:[a.jsx(n.default,{href:"/pages/series",className:"hover:text-blue-400",children:"Serie"}),a.jsx(n.default,{href:"/pages/films",className:"hover:text-blue-400",children:"Films"})]})]}),a.jsx(i.Z,{className:"absolute inset-0 pointer-events-none",quantity:100}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow pt-20",children:[a.jsx("h1",{className:"text-5xl md:text-6xl font-extrabold",children:"Films"}),(0,a.jsxs)("h2",{className:"text-xl md:text-2xl mt-4",children:["Il y a actuellement ",u," films disponibles sur MS-Project"]}),a.jsx("input",{type:"text",placeholder:"Rechercher un film...",value:m,onChange:e=>x(e.target.value),className:"bg-gray-800 text-white px-4 py-2 rounded mt-4"})]}),a.jsx("div",{id:"films",className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4",children:h.map(e=>(0,a.jsxs)(n.default,{href:`/pages/watchfilms?id=${e.id}`,className:"relative group block rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700",children:[a.jsx(l.default,{src:e.image,alt:e.filmname,className:"w-full h-72 object-cover",width:300,height:450}),a.jsx("div",{className:"absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",children:(0,a.jsxs)("div",{className:"p-4 text-center text-white",children:[a.jsx("div",{className:"text-lg font-bold",children:e.filmname}),a.jsx("div",{className:"text-sm mt-2",children:e.description})]})})]},e.id))}),a.jsx("div",{className:"pagination flex gap-2 mt-4 justify-center",children:(()=>{let e=[];return r>1&&(e.push(a.jsx("button",{onClick:()=>o(1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:"1"},"first")),r>2&&e.push(a.jsx("button",{onClick:()=>o(r-1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:r-1},"prev"))),e.push(a.jsx("button",{className:"bg-blue-700 text-white py-2 px-4 rounded-lg cursor-default",children:r},"current")),r<c&&(r<c-1&&e.push(a.jsx("button",{onClick:()=>o(r+1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:r+1},"next")),e.push(a.jsx("button",{onClick:()=>o(c),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:c},"last"))),e})()}),a.jsx("div",{className:"fixed top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:a.jsx(l.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none",width:852,height:582,alt:"Illustration"})}),a.jsx("div",{className:"fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:a.jsx(l.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none w-full h-auto",width:852,height:582,alt:"Illustration"})})]})}},4304:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(326),s=r(7577);function n({className:e="",quantity:t=30,staticity:r=50,ease:n=50}){let l=(0,s.useRef)(null),i=(0,s.useRef)(null),o=(0,s.useRef)(null),c=(0,s.useRef)([]);!function(){let[e,t]=(0,s.useState)({x:0,y:0})}();let d=(0,s.useRef)({x:0,y:0}),u=(0,s.useRef)({w:0,h:0}),p=()=>{let e=Math.floor(Math.random()*u.current.w);return{x:e,y:Math.floor(Math.random()*u.current.h),translateX:0,translateY:0,size:Math.floor(2*Math.random())+1,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},m=(e,t=!1)=>{if(o.current){let{x:r,y:a,translateX:s,translateY:n,size:l,alpha:i}=e;o.current.translate(s,n),o.current.beginPath(),o.current.arc(r,a,l,0,2*Math.PI),o.current.fillStyle=`rgba(72, 66, 245, ${i})`,o.current.fill(),o.current.setTransform(1,0,0,1,0,0),t||c.current.push(e)}},x=()=>{o.current&&o.current.clearRect(0,0,u.current.w,u.current.h)},h=(e,t,r,a,s)=>{let n=(e-t)*(s-a)/(r-t)+a;return n>0?n:0},g=()=>{x(),c.current.forEach((e,t)=>{let a=parseFloat(h([e.x+e.translateX-e.size,u.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,u.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx,e.y+=e.dy,e.translateX+=(d.current.x/(r/e.magnetism)-e.translateX)/n,e.translateY+=(d.current.y/(r/e.magnetism)-e.translateY)/n,e.x<-e.size||e.x>u.current.w+e.size||e.y<-e.size||e.y>u.current.h+e.size?(c.current.splice(t,1),m(p())):m({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(g)};return a.jsx("div",{className:e,ref:i,"aria-hidden":"true",children:a.jsx("canvas",{ref:l})})}},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>l});var a=r(9510),s=r(7366),n=r.n(s);r(7272);let l={title:"Create Next App",description:"Generated by create next app"};function i({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:n().className,children:e})})}},9812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>n,default:()=>i});var a=r(8570);let s=(0,a.createProxy)(String.raw`C:\Users\msk\Desktop\MStream\mstream\app\pages\films\page.tsx`),{__esModule:n,$$typeof:l}=s;s.default;let i=(0,a.createProxy)(String.raw`C:\Users\msk\Desktop\MStream\mstream\app\pages\films\page.tsx#default`)},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,82,131,226],()=>r(2344));module.exports=a})();