(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4076],{41254:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/account/register",function(){return t(44047)}])},44047:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return register}});var r=t(52322);t(2784);var a=t(41234),l=t(15228),s=t(15297),i=t(21206),c=t(34037),o=t(54423),d=t(89374),m=t(995),registerPage=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{title:"Register",parent:"home"}),(0,r.jsx)("section",{className:"login-page section-big-py-space bg-light",children:(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(l.Z,{className:"row",children:(0,r.jsx)(s.Z,{lg:"4",className:"offset-lg-4",children:(0,r.jsxs)("div",{className:"theme-card",children:[(0,r.jsx)("h3",{className:"text-center",children:"Create account"}),(0,r.jsxs)(i.Z,{className:"theme-form",children:[(0,r.jsxs)("div",{className:"form-row row",children:[(0,r.jsxs)(c.Z,{className:"col-md-12",children:[(0,r.jsx)(o.Z,{htmlFor:"email",children:"First Name"}),(0,r.jsx)(d.Z,{type:"text",className:"form-control",id:"fname",placeholder:"First Name",required:!0})]}),(0,r.jsxs)(c.Z,{className:"col-md-12",children:[(0,r.jsx)(o.Z,{htmlFor:"review",children:"Last Name"}),(0,r.jsx)(d.Z,{type:"text",className:"form-control",id:"lname",placeholder:"Last Name",required:!0})]})]}),(0,r.jsxs)("div",{className:"form-row row",children:[(0,r.jsxs)(c.Z,{className:"col-md-12",children:[(0,r.jsx)(o.Z,{htmlFor:"email",children:"email"}),(0,r.jsx)(d.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,r.jsxs)(c.Z,{className:"col-md-12",children:[(0,r.jsx)(o.Z,{htmlFor:"review",children:"Password"}),(0,r.jsx)(d.Z,{type:"password",className:"form-control",id:"review",placeholder:"Enter your password",required:!0})]}),(0,r.jsx)(c.Z,{className:"col-md-12",children:(0,r.jsx)("a",{href:"#",className:"btn btn-normal",children:"create Account"})})]}),(0,r.jsx)("div",{className:"form-row row",children:(0,r.jsx)(s.Z,{md:"12",children:(0,r.jsxs)("p",{children:["Have you already account?"," ",(0,r.jsx)("a",{href:"/pages/account/login",className:"txt-default",children:"click"})," ","here to \xa0",(0,r.jsx)("a",{href:"/pages/account/login",className:"txt-default",children:"Login"})]})})})]})]})})})})})]}),register=()=>(0,r.jsx)(a.Z,{children:(0,r.jsx)(registerPage,{})})},995:function(e,n,t){"use strict";var r=t(52322);t(2784);var a=t(82308),l=t(15228),s=t(15297);n.Z=e=>{let{title:n,parent:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"breadcrumb-main ",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{className:"breadcrumb-contain",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:n}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:t})}),(0,r.jsx)("li",{children:(0,r.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:n})})]})]})})})})})})})}},36643:function(e,n,t){"use strict";t.d(n,{Z:function(){return header1}});var r=t(52322),a=t(2784),l=t(15228),s=t(15297),i=t(31173),c=t(21515);let o=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,n]=(0,a.useState)(!1),[t,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let handleScroll=()=>{n(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,a.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),n=await e.json();l(n)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,r.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,r.jsx)(c.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:o.map(e=>(0,r.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,r.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,r.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},d=t(63757),m=t(67138),u=t(11478),h=t(45817),f=t(69311),header1=e=>{let{cartPopupPosition:n,display:t,category:c,layoutLogo:o}=e,[x,v]=(0,a.useState)(!1),p=(0,a.useContext)(f.pl),{setLeftMenu:j,leftMenu:g}=p,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,a.useEffect)(()=>{let handleScroll=()=>{v(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,a.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)("header",{id:"stickyHeader",children:[(0,r.jsx)("div",{className:"mobile-fix-option"}),(0,r.jsx)(i.Z,{}),(0,r.jsx)(News_Slider,{}),(0,r.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,r.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,r.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:x?35:150},className:"category-header-2",children:(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"navbar-menu",children:[(0,r.jsxs)("div",{className:"category-left",children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"icon-block",children:(0,r.jsx)("ul",{children:(0,r.jsx)(m.Z,{})})})]}),(0,r.jsx)("div",{style:{},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("div",{className:"category-right",children:(0,r.jsx)(u.Z,{spanClass:""})})]})})})})})]})})}},11478:function(e,n,t){"use strict";var r=t(52322);t(2784),n.Z=e=>{let{spanClass:n}=e;return(0,r.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==n?"contact-block":""),children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,r.jsxs)("span",{className:n,children:["call us",(0,r.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,n,t){"use strict";var r=t(52322),a=t(2784),l=t(68382),s=t(69311);n.Z=()=>{let e=(0,a.useContext)(s.pl),{menuResponsive:n,setMenuResponsive:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"menu-overlay ".concat(n?"active":""),onClick:()=>{t(!n),document.body.style.overflow="visible"}}),(0,r.jsx)("div",{className:"menu-block",children:(0,r.jsxs)("nav",{id:"main-nav",children:[(0,r.jsx)("div",{className:"toggle-nav",onClick:()=>{t(!n),document.body.style.overflow="hidden"},children:(0,r.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,r.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(n?"menu-open":""),children:(0,r.jsx)(l.Z,{})})]})})]})}},41234:function(e,n,t){"use strict";var r=t(52322),a=t(2784),l=t(36643),s=t(94869),i=t(73922),c=t(66889),o=t(98635);n.Z=e=>{let{children:n}=e;return window.location.pathname,(0,a.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,r.jsx)(i.h,{children:n}),(0,r.jsx)(s.Z,{layoutLogo:"layout-2"})]})})})}},21515:function(e,n,t){var r=t(2784),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let l=r.forwardRef(function({style:e={},className:n="",autoFill:t=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:i=!1,direction:c="left",speed:o=50,delay:d=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:x,onCycleComplete:v,onMount:p,children:j},g){let[w,y]=r.useState(0),[N,b]=r.useState(0),[Z,E]=r.useState(1),[k,S]=r.useState(!1),C=r.useRef(null),L=g||C,P=r.useRef(null),O=r.useCallback(()=>{if(P.current&&L.current){let e=L.current.getBoundingClientRect(),n=P.current.getBoundingClientRect(),r=e.width,a=n.width;("up"===c||"down"===c)&&(r=e.height,a=n.height),t&&r&&a?E(a<r?Math.ceil(r/a):1):E(1),y(r),b(a)}},[t,L,c]);r.useEffect(()=>{if(k&&(O(),P.current&&L.current)){let e=new ResizeObserver(()=>O());return e.observe(L.current),e.observe(P.current),()=>{e&&e.disconnect()}}},[O,L,k]),r.useEffect(()=>{O()},[O,j]),r.useEffect(()=>{S(!0)},[]),r.useEffect(()=>{"function"==typeof p&&p()},[]);let _=r.useMemo(()=>t?N*Z/o:N<w?w/o:N/o,[t,w,N,Z,o]),M=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!i||i?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[e,l,s,i,c]),F=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),q=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":`${_}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":t?"auto":"100%"}),[l,c,_,d,m,t]),I=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),R=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,n)=>a.default.createElement(r.Fragment,{key:n},r.Children.map(j,e=>a.default.createElement("div",{style:I,className:"rfm-child"},e)))),[I,j]);return k?a.default.createElement("div",{ref:L,style:M,className:"rfm-marquee-container "+n},u&&a.default.createElement("div",{style:F,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:q,onAnimationIteration:v,onAnimationEnd:x},a.default.createElement("div",{className:"rfm-initial-child-container",ref:P},r.Children.map(j,e=>a.default.createElement("div",{style:I,className:"rfm-child"},e))),R(Z-1)),a.default.createElement("div",{className:"rfm-marquee",style:q},R(Z))):null});n.Z=l}},function(e){e.O(0,[7192,5515,6981,8771,3542,4869,9774,2888,179],function(){return e(e.s=41254)}),_N_E=e.O()}]);