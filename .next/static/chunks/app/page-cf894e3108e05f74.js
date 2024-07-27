(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2049:function(e,t,r){Promise.resolve().then(r.bind(r,9486))},9486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7437),a=r(6648),s=r(7138);function i(e){let{children:t,href:r,onClick:a}=e;return r?(0,n.jsxs)(s.default,{href:r,className:"inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group",children:[t,(0,n.jsx)("span",{className:"tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1",children:"->"})]}):(0,n.jsxs)("button",{onClick:a,className:"inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group",children:[t,(0,n.jsx)("span",{className:"tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1",children:"->"})]})}var l=r(1422),c=r(2265);function o(){let[e,t]=(0,c.useState)(!1);return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between bg-slate-900",children:[(0,n.jsxs)("nav",{className:"fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl",children:[(0,n.jsx)("a",{href:"/",className:"text-xl font-bold",children:"MSTREAM"}),(0,n.jsxs)("div",{className:"hidden md:flex space-x-6 items-center",children:[(0,n.jsx)("a",{href:"/pages/series",className:"hover:text-blue-400",children:"Serie"}),(0,n.jsx)("a",{href:"/pages/films",className:"hover:text-blue-400",children:"Films"})]}),(0,n.jsx)("button",{className:"md:hidden text-2xl",onClick:()=>t(!e),"aria-label":"Toggle menu"})]}),(0,n.jsx)("div",{className:"fixed top-[70px] left-1/2 transform -translate-x-1/2 bg-black/75 backdrop-blur-md text-white w-full md:w-3/4 max-w-5xl md:hidden transition-transform duration-300 ease-in-out ".concat(e?"translate-y-0 opacity-100":"translate-y-[-100%] opacity-0"),"aria-hidden":!e,children:(0,n.jsxs)("nav",{className:"flex flex-col space-y-4 p-6",children:[(0,n.jsx)("a",{href:"/",className:"hover:text-blue-400",children:"Home"}),(0,n.jsx)("a",{href:"/pages/price",className:"hover:text-blue-400",children:"Pricing"}),(0,n.jsx)("a",{href:"/pages/login",className:"hover:text-blue-400",children:"Login"}),(0,n.jsx)(i,{href:"/pages/register",children:"Register"})]})}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow pt-20",id:"home",children:[(0,n.jsx)("h1",{className:"text-5xl md:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200",children:"MSTREAM"}),(0,n.jsx)("div",{className:"max-w-3xl mx-auto mb-8",children:(0,n.jsx)("p",{className:"text-lg text-slate-400 text-center",children:"The best streaming platform for your favorite movies and series."})}),(0,n.jsx)(i,{href:"/pages/films",children:"Get Started"})]}),(0,n.jsx)(l.Z,{className:"absolute inset-0 pointer-events-none",quantity:100}),(0,n.jsx)("div",{className:"fixed top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:(0,n.jsx)(a.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none",width:852,height:582,alt:"Illustration"})}),(0,n.jsx)("div",{className:"fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none","aria-hidden":"true",children:(0,n.jsx)(a.default,{src:"https://cruip-tutorials.vercel.app/particle-animation/shape.svg",className:"max-w-none w-full h-auto",width:852,height:582,alt:"Illustration"})})]})}},1422:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),a=r(2265);function s(e){let{className:t="",quantity:r=30,staticity:s=50,ease:i=50}=e,l=(0,a.useRef)(null),c=(0,a.useRef)(null),o=(0,a.useRef)(null),u=(0,a.useRef)([]),d=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),h=(0,a.useRef)({x:0,y:0}),x=(0,a.useRef)({w:0,h:0}),f=window.devicePixelRatio;(0,a.useEffect)(()=>(l.current&&(o.current=l.current.getContext("2d")),m(),N(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[]),(0,a.useEffect)(()=>{p()},[d.x,d.y]);let m=()=>{g(),y()},p=()=>{if(l.current){let e=l.current.getBoundingClientRect(),{w:t,h:r}=x.current,n=d.x-e.left-t/2,a=d.y-e.top-r/2;n<t/2&&n>-t/2&&a<r/2&&a>-r/2&&(h.current.x=n,h.current.y=a)}},g=()=>{c.current&&l.current&&o.current&&(u.current.length=0,x.current.w=c.current.offsetWidth,x.current.h=c.current.offsetHeight,l.current.width=x.current.w*f,l.current.height=x.current.h*f,l.current.style.width=x.current.w+"px",l.current.style.height=x.current.h+"px",o.current.scale(f,f))},w=()=>{let e=Math.floor(Math.random()*x.current.w);return{x:e,y:Math.floor(Math.random()*x.current.h),translateX:0,translateY:0,size:Math.floor(2*Math.random())+1,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o.current){let{x:r,y:n,translateX:a,translateY:s,size:i,alpha:l}=e;o.current.translate(a,s),o.current.beginPath(),o.current.arc(r,n,i,0,2*Math.PI),o.current.fillStyle="rgba(72, 66, 245, ".concat(l,")"),o.current.fill(),o.current.setTransform(f,0,0,f,0,0),t||u.current.push(e)}},b=()=>{o.current&&o.current.clearRect(0,0,x.current.w,x.current.h)},y=()=>{b();for(let e=0;e<r;e++)v(w())},j=(e,t,r,n,a)=>{let s=(e-t)*(a-n)/(r-t)+n;return s>0?s:0},N=()=>{b(),u.current.forEach((e,t)=>{let r=parseFloat(j([e.x+e.translateX-e.size,x.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,x.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(h.current.x/(s/e.magnetism)-e.translateX)/i,e.translateY+=(h.current.y/(s/e.magnetism)-e.translateY)/i,e.x<-e.size||e.x>x.current.w+e.size||e.y<-e.size||e.y>x.current.h+e.size?(u.current.splice(t,1),v(w())):v({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(N)};return(0,n.jsx)("div",{className:t,ref:c,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:l})})}}},function(e){e.O(0,[138,648,971,23,744],function(){return e(e.s=2049)}),_N_E=e.O()}]);