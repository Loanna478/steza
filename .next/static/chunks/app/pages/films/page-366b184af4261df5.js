(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{4931:function(e,t,r){Promise.resolve().then(r.bind(r,3172))},3172:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(7437),a=r(2265),s=r(7138),l=r(6648),i=r(1422);function c(){let[e,t]=(0,a.useState)([]),[r,c]=(0,a.useState)(1),[o,u]=(0,a.useState)(1),[d,h]=(0,a.useState)(0),[x,f]=(0,a.useState)(""),[m,p]=(0,a.useState)([]);(0,a.useEffect)(()=>{(async()=>{await w(r),await g()})()},[r]),(0,a.useEffect)(()=>{p(e.filter(e=>e.filmname.toLowerCase().includes(x.toLowerCase())||e.description.toLowerCase().includes(x.toLowerCase())))},[x,e]);let g=async()=>{try{let e=await fetch("http://85.215.137.122:8081/getcountfilms");if(e.ok){let t=await e.json();h(t.totalFilms)}}catch(e){e instanceof Error?console.error("Erreur: ".concat(e.message)):console.error("Une erreur inconnue est survenue")}},w=async e=>{try{let r=await fetch("http://85.215.137.122:8081/getfilms?page=".concat(e));if(r.ok){let e=await r.json(),n=e.films.map(e=>({...e,filmname:e.filmname.length>15?e.filmname.substring(0,15)+"...":e.filmname,description:e.description.length>30?e.description.substring(0,30)+"...":e.description}));t(n),p(n),u(e.totalPages)}}catch(e){e instanceof Error?console.error("Erreur: ".concat(e.message)):console.error("Une erreur inconnue est survenue")}};return(0,n.jsxs)("main",{className:"flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white",children:[(0,n.jsxs)("nav",{className:"fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl",children:[(0,n.jsx)(s.default,{href:"/",className:"text-xl font-bold",children:"MSTREAM"}),(0,n.jsxs)("div",{className:"hidden md:flex space-x-6 items-center",children:[(0,n.jsx)(s.default,{href:"/pages/series",className:"hover:text-blue-400",children:"Serie"}),(0,n.jsx)(s.default,{href:"/pages/films",className:"hover:text-blue-400",children:"Films"})]})]}),(0,n.jsx)(i.Z,{className:"absolute inset-0 pointer-events-none",quantity:100}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow pt-20",children:[(0,n.jsx)("h1",{className:"text-5xl md:text-6xl font-extrabold",children:"Films"}),(0,n.jsxs)("h2",{className:"text-xl md:text-2xl mt-4",children:["Il y a actuellement ",d," films disponibles sur MS-Project"]}),(0,n.jsx)("input",{type:"text",placeholder:"Rechercher un film...",value:x,onChange:e=>f(e.target.value),className:"bg-gray-800 text-white px-4 py-2 rounded mt-4"})]}),(0,n.jsx)("div",{id:"films",className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4",children:m.map(e=>(0,n.jsxs)(s.default,{href:"/pages/watchfilms?id=".concat(e.id),className:"relative group block rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700",children:[(0,n.jsx)(l.default,{src:e.image,alt:e.filmname,className:"w-full h-72 object-cover",width:300,height:450}),(0,n.jsx)("div",{className:"absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",children:(0,n.jsxs)("div",{className:"p-4 text-center text-white",children:[(0,n.jsx)("div",{className:"text-lg font-bold",children:e.filmname}),(0,n.jsx)("div",{className:"text-sm mt-2",children:e.description})]})})]},e.id))}),(0,n.jsx)("div",{className:"pagination flex gap-2 mt-4 justify-center",children:(()=>{let e=[];return r>1&&(e.push((0,n.jsx)("button",{onClick:()=>c(1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:"1"},"first")),r>2&&e.push((0,n.jsx)("button",{onClick:()=>c(r-1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:r-1},"prev"))),e.push((0,n.jsx)("button",{className:"bg-blue-700 text-white py-2 px-4 rounded-lg cursor-default",children:r},"current")),r<o&&(r<o-1&&e.push((0,n.jsx)("button",{onClick:()=>c(r+1),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:r+1},"next")),e.push((0,n.jsx)("button",{onClick:()=>c(o),className:"bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors",children:o},"last"))),e})()}),(0,n.jsx)("div",{className:"fixed top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:(0,n.jsx)(l.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none",width:852,height:582,alt:"Illustration"})}),(0,n.jsx)("div",{className:"fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:(0,n.jsx)(l.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none w-full h-auto",width:852,height:582,alt:"Illustration"})})]})}},1422:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),a=r(2265);function s(e){let{className:t="",quantity:r=30,staticity:s=50,ease:l=50}=e,i=(0,a.useRef)(null),c=(0,a.useRef)(null),o=(0,a.useRef)(null),u=(0,a.useRef)([]),d=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),h=(0,a.useRef)({x:0,y:0}),x=(0,a.useRef)({w:0,h:0}),f=window.devicePixelRatio;(0,a.useEffect)(()=>(i.current&&(o.current=i.current.getContext("2d")),m(),N(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[]),(0,a.useEffect)(()=>{p()},[d.x,d.y]);let m=()=>{g(),b()},p=()=>{if(i.current){let e=i.current.getBoundingClientRect(),{w:t,h:r}=x.current,n=d.x-e.left-t/2,a=d.y-e.top-r/2;n<t/2&&n>-t/2&&a<r/2&&a>-r/2&&(h.current.x=n,h.current.y=a)}},g=()=>{c.current&&i.current&&o.current&&(u.current.length=0,x.current.w=c.current.offsetWidth,x.current.h=c.current.offsetHeight,i.current.width=x.current.w*f,i.current.height=x.current.h*f,i.current.style.width=x.current.w+"px",i.current.style.height=x.current.h+"px",o.current.scale(f,f))},w=()=>{let e=Math.floor(Math.random()*x.current.w);return{x:e,y:Math.floor(Math.random()*x.current.h),translateX:0,translateY:0,size:Math.floor(2*Math.random())+1,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o.current){let{x:r,y:n,translateX:a,translateY:s,size:l,alpha:i}=e;o.current.translate(a,s),o.current.beginPath(),o.current.arc(r,n,l,0,2*Math.PI),o.current.fillStyle="rgba(72, 66, 245, ".concat(i,")"),o.current.fill(),o.current.setTransform(f,0,0,f,0,0),t||u.current.push(e)}},v=()=>{o.current&&o.current.clearRect(0,0,x.current.w,x.current.h)},b=()=>{v();for(let e=0;e<r;e++)y(w())},j=(e,t,r,n,a)=>{let s=(e-t)*(a-n)/(r-t)+n;return s>0?s:0},N=()=>{v(),u.current.forEach((e,t)=>{let r=parseFloat(j([e.x+e.translateX-e.size,x.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,x.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(h.current.x/(s/e.magnetism)-e.translateX)/l,e.translateY+=(h.current.y/(s/e.magnetism)-e.translateY)/l,e.x<-e.size||e.x>x.current.w+e.size||e.y<-e.size||e.y>x.current.h+e.size?(u.current.splice(t,1),y(w())):y({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(N)};return(0,n.jsx)("div",{className:t,ref:c,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:i})})}}},function(e){e.O(0,[138,648,971,23,744],function(){return e(e.s=4931)}),_N_E=e.O()}]);