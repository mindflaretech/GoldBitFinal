(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9681],{35017:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/shortcodes/category",function(){return n(67324)}])},67324:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return category}});var i=n(52322),r=n(2784),s=n(41234),l=n(84088),a=n(40715),Features_CategoryPage=()=>(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("div",{className:"title6 ",children:(0,i.jsx)("h4",{children:"category with images"})}),(0,i.jsx)("section",{className:"rounded-category rounded-category-inverse",children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)("div",{className:"title6",children:(0,i.jsx)("h4",{children:"category with text"})}),(0,i.jsx)("section",{className:"box-category section-py-space",children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)("div",{className:"title6",children:(0,i.jsx)("h4",{children:"inverse category with img"})}),(0,i.jsx)("section",{className:"rounded-category",children:(0,i.jsx)(a.Z,{})})]}),o=n(995),category=()=>(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.Z,{parent:"Element",title:"Category"}),(0,i.jsx)(Features_CategoryPage,{})]})},995:function(e,t,n){"use strict";var i=n(52322);n(2784);var r=n(82308),s=n(15228),l=n(15297);t.Z=e=>{let{title:t,parent:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"breadcrumb-main ",children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)("div",{className:"breadcrumb-contain",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:n})}),(0,i.jsx)("li",{children:(0,i.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:t})})]})]})})})})})})})}},36643:function(e,t,n){"use strict";n.d(t,{Z:function(){return header1}});var i=n(52322),r=n(2784),s=n(15228),l=n(15297),a=n(31173),o=n(21515);let c=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),t=await e.json();s(t)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,i.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,i.jsx)(o.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:c.map(e=>(0,i.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,i.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,i.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},d=n(63757),m=n(67138),u=n(11478),h=n(45817),f=n(69311),header1=e=>{let{cartPopupPosition:t,display:n,category:o,layoutLogo:c}=e,[x,v]=(0,r.useState)(!1),g=(0,r.useContext)(f.pl),{setLeftMenu:p,leftMenu:j}=g,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,r.useEffect)(()=>{let handleScroll=()=>{v(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)("header",{id:"stickyHeader",children:[(0,i.jsx)("div",{className:"mobile-fix-option"}),(0,i.jsx)(a.Z,{}),(0,i.jsx)(News_Slider,{}),(0,i.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,i.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,i.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:x?35:150},className:"category-header-2",children:(0,i.jsx)("div",{className:"custom-container",children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"navbar-menu",children:[(0,i.jsxs)("div",{className:"category-left",children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"icon-block",children:(0,i.jsx)("ul",{children:(0,i.jsx)(m.Z,{})})})]}),(0,i.jsx)("div",{style:{},children:(0,i.jsx)(d.Z,{})}),(0,i.jsx)("div",{className:"category-right",children:(0,i.jsx)(u.Z,{spanClass:""})})]})})})})})]})})}},11478:function(e,t,n){"use strict";var i=n(52322);n(2784),t.Z=e=>{let{spanClass:t}=e;return(0,i.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==t?"contact-block":""),children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,i.jsxs)("span",{className:t,children:["call us",(0,i.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,t,n){"use strict";var i=n(52322),r=n(2784),s=n(68382),l=n(69311);t.Z=()=>{let e=(0,r.useContext)(l.pl),{menuResponsive:t,setMenuResponsive:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"menu-overlay ".concat(t?"active":""),onClick:()=>{n(!t),document.body.style.overflow="visible"}}),(0,i.jsx)("div",{className:"menu-block",children:(0,i.jsxs)("nav",{id:"main-nav",children:[(0,i.jsx)("div",{className:"toggle-nav",onClick:()=>{n(!t),document.body.style.overflow="hidden"},children:(0,i.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,i.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(t?"menu-open":""),children:(0,i.jsx)(s.Z,{})})]})})]})}},41234:function(e,t,n){"use strict";var i=n(52322),r=n(2784),s=n(36643),l=n(94869),a=n(73922),o=n(66889),c=n(98635);t.Z=e=>{let{children:t}=e;return window.location.pathname,(0,r.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,i.jsx)(c.Z,{children:(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(s.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,i.jsx)(a.h,{children:t}),(0,i.jsx)(l.Z,{layoutLogo:"layout-2"})]})})})}},84088:function(e,t,n){"use strict";var i=n(52322);n(2784);var r=n(82308),s=n(15228),l=n(15297),a=n(23467),o={dots:!1,infinite:!0,speed:300,slidesToShow:10,slidesToScroll:10,responsive:[{breakpoint:1700,settings:{slidesToShow:8,slidesToScroll:8}},{breakpoint:1367,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:800,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]};let c=[{title:"10% off"},{title:"under @99"},{title:"free shipping"},{title:"extra 10% off"},{title:"$79 cashback"},{title:"80% off"},{title:"on sale"},{title:"only $49"},{title:"under @150"},{title:"save money"},{title:"80% off"}];t.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{fluid:!0,children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{className:"ps-0",children:(0,i.jsx)("div",{className:"slide-10 no-arrow",children:(0,i.jsx)(a.Z,{...o,children:c.map(function(e,t){return(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("div",{className:"box-category-contain",children:(0,i.jsx)("h4",{children:e.title})})})},t)})})})})})})})},40715:function(e,t,n){"use strict";var i=n(52322);n(2784);var r=n(82308),s=n(15228),l=n(15297),a=n(1285),o=n(23467),c={dots:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:6,responsive:[{breakpoint:1367,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]};let d=[{img:"/images/layout-1/rounded-cat/1.png",category:"Silver"},{img:"/images/layout-1/rounded-cat/2.png",category:"Gold"},{img:"/images/layout-1/rounded-cat/3.png",category:"Platinum"}];t.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{children:(0,i.jsx)("div",{className:"slide-6 no-arrow",children:(0,i.jsx)(o.Z,{...c,children:d.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"category-contain",children:(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("div",{className:"img-wrapper",children:(0,i.jsx)(a.Z,{src:e.img,alt:"category",className:"img-fluid"})}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"btn-rounded",children:e.category})})]})})},t))})})})})})})},21515:function(e,t,n){var i=n(2784),r=i&&"object"==typeof i&&"default"in i?i:{default:i};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let s=i.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:s=!0,pauseOnHover:l=!1,pauseOnClick:a=!1,direction:o="left",speed:c=50,delay:d=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:x,onCycleComplete:v,onMount:g,children:p},j){let[y,w]=i.useState(0),[b,S]=i.useState(0),[N,k]=i.useState(1),[Z,E]=i.useState(!1),T=i.useRef(null),C=j||T,_=i.useRef(null),L=i.useCallback(()=>{if(_.current&&C.current){let e=C.current.getBoundingClientRect(),t=_.current.getBoundingClientRect(),i=e.width,r=t.width;("up"===o||"down"===o)&&(i=e.height,r=t.height),n&&i&&r?k(r<i?Math.ceil(i/r):1):k(1),w(i),S(r)}},[n,C,o]);i.useEffect(()=>{if(Z&&(L(),_.current&&C.current)){let e=new ResizeObserver(()=>L());return e.observe(C.current),e.observe(_.current),()=>{e&&e.disconnect()}}},[L,C,Z]),i.useEffect(()=>{L()},[L,p]),i.useEffect(()=>{E(!0)},[]),i.useEffect(()=>{"function"==typeof g&&g()},[]);let P=i.useMemo(()=>n?b*N/c:b<y?y/c:b/c,[n,y,b,N,c]),O=i.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!s||l?"paused":"running","--pause-on-click":!s||l&&!a||a?"paused":"running","--width":"up"===o||"down"===o?"100vh":"100%","--transform":"up"===o?"rotate(-90deg)":"down"===o?"rotate(90deg)":"none"}),[e,s,l,a,o]),M=i.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),F=i.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===o?"normal":"reverse","--duration":`${P}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":n?"auto":"100%"}),[s,o,P,d,m,n]),I=i.useMemo(()=>({"--transform":"up"===o?"rotate(90deg)":"down"===o?"rotate(-90deg)":"none"}),[o]),q=i.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>r.default.createElement(i.Fragment,{key:t},i.Children.map(p,e=>r.default.createElement("div",{style:I,className:"rfm-child"},e)))),[I,p]);return Z?r.default.createElement("div",{ref:C,style:O,className:"rfm-marquee-container "+t},u&&r.default.createElement("div",{style:M,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:F,onAnimationIteration:v,onAnimationEnd:x},r.default.createElement("div",{className:"rfm-initial-child-container",ref:_},i.Children.map(p,e=>r.default.createElement("div",{style:I,className:"rfm-child"},e))),q(N-1)),r.default.createElement("div",{className:"rfm-marquee",style:F},q(N))):null});t.Z=s}},function(e){e.O(0,[7192,5515,6981,8771,3467,3542,4869,9774,2888,179],function(){return e(e.s=35017)}),_N_E=e.O()}]);