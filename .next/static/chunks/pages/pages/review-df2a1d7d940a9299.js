(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5544],{26600:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/review",function(){return n(93280)}])},93280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return review}});var a=n(52322);n(2784);var r=n(41234),i=n(15297),s=n(1285),l=n(82308),d=n(15228),c=n(995);let o=[{img:"/images/avtar/1.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"},{img:"/images/avtar/2.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"},{img:"/images/avtar/3.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"},{img:"/images/avtar/1.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"},{img:"/images/avtar/2.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"},{img:"/images/avtar/3.jpg",name:"John Martin",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",date:"(21 Jannuary 2022 at 9:29AM )"}],ReviewList=e=>{let{review:t}=e;return(0,a.jsx)(i.Z,{lg:"4",md:"6",children:(0,a.jsxs)("div",{className:"review-box",children:[(0,a.jsx)(s.Z,{className:"img-fluid ",src:t.img,alt:"review"}),(0,a.jsx)("h5",{children:t.name}),(0,a.jsxs)("ul",{className:"rating-star",children:[(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})})]}),(0,a.jsx)("div",{className:"review-message",children:(0,a.jsx)("p",{children:t.desc})}),(0,a.jsx)("h6",{children:t.date})]})})};var revidewPage=()=>(0,a.jsxs)("div",{className:"bg-light",children:[(0,a.jsx)(c.Z,{title:"Review",parent:"home"}),(0,a.jsx)("section",{className:"review section-big-py-space",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(d.Z,{className:"review-block",children:o.map((e,t)=>(0,a.jsx)(ReviewList,{review:e},t))})})})]}),review=()=>(0,a.jsx)(r.Z,{children:(0,a.jsx)(revidewPage,{})})},995:function(e,t,n){"use strict";var a=n(52322);n(2784);var r=n(82308),i=n(15228),s=n(15297);t.Z=e=>{let{title:t,parent:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"breadcrumb-main ",children:(0,a.jsx)(r.Z,{children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{className:"breadcrumb-contain",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:t}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:n})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:t})})]})]})})})})})})})}},36643:function(e,t,n){"use strict";n.d(t,{Z:function(){return header1}});var a=n(52322),r=n(2784),i=n(15228),s=n(15297),l=n(31173),d=n(21515);let c=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,t]=(0,r.useState)(!1),[n,i]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),t=await e.json();i(t)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,a.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,a.jsx)(d.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:c.map(e=>(0,a.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,a.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,a.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},o=n(63757),m=n(67138),u=n(11478),h=n(45817),f=n(69311),header1=e=>{let{cartPopupPosition:t,display:n,category:d,layoutLogo:c}=e,[x,v]=(0,r.useState)(!1),p=(0,r.useContext)(f.pl),{setLeftMenu:y,leftMenu:g}=p,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,r.useEffect)(()=>{let handleScroll=()=>{v(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("header",{id:"stickyHeader",children:[(0,a.jsx)("div",{className:"mobile-fix-option"}),(0,a.jsx)(l.Z,{}),(0,a.jsx)(News_Slider,{}),(0,a.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,a.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,a.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:x?35:150},className:"category-header-2",children:(0,a.jsx)("div",{className:"custom-container",children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"navbar-menu",children:[(0,a.jsxs)("div",{className:"category-left",children:[(0,a.jsx)(h.Z,{}),(0,a.jsx)("div",{className:"icon-block",children:(0,a.jsx)("ul",{children:(0,a.jsx)(m.Z,{})})})]}),(0,a.jsx)("div",{style:{},children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)("div",{className:"category-right",children:(0,a.jsx)(u.Z,{spanClass:""})})]})})})})})]})})}},11478:function(e,t,n){"use strict";var a=n(52322);n(2784),t.Z=e=>{let{spanClass:t}=e;return(0,a.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==t?"contact-block":""),children:(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,a.jsxs)("span",{className:t,children:["call us",(0,a.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(68382),s=n(69311);t.Z=()=>{let e=(0,r.useContext)(s.pl),{menuResponsive:t,setMenuResponsive:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"menu-overlay ".concat(t?"active":""),onClick:()=>{n(!t),document.body.style.overflow="visible"}}),(0,a.jsx)("div",{className:"menu-block",children:(0,a.jsxs)("nav",{id:"main-nav",children:[(0,a.jsx)("div",{className:"toggle-nav",onClick:()=>{n(!t),document.body.style.overflow="hidden"},children:(0,a.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,a.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(t?"menu-open":""),children:(0,a.jsx)(i.Z,{})})]})})]})}},41234:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(36643),s=n(94869),l=n(73922),d=n(66889),c=n(98635);t.Z=e=>{let{children:t}=e;return window.location.pathname,(0,r.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,a.jsx)(c.Z,{children:(0,a.jsx)("div",{children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(i.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,a.jsx)(l.h,{children:t}),(0,a.jsx)(s.Z,{layoutLogo:"layout-2"})]})})})}},21515:function(e,t,n){var a=n(2784),r=a&&"object"==typeof a&&"default"in a?a:{default:a};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=a.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:i=!0,pauseOnHover:s=!1,pauseOnClick:l=!1,direction:d="left",speed:c=50,delay:o=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:x,onCycleComplete:v,onMount:p,children:y},g){let[j,w]=a.useState(0),[b,N]=a.useState(0),[E,k]=a.useState(1),[L,Z]=a.useState(!1),S=a.useRef(null),M=g||S,I=a.useRef(null),C=a.useCallback(()=>{if(I.current&&M.current){let e=M.current.getBoundingClientRect(),t=I.current.getBoundingClientRect(),a=e.width,r=t.width;("up"===d||"down"===d)&&(a=e.height,r=t.height),n&&a&&r?k(r<a?Math.ceil(a/r):1):k(1),w(a),N(r)}},[n,M,d]);a.useEffect(()=>{if(L&&(C(),I.current&&M.current)){let e=new ResizeObserver(()=>C());return e.observe(M.current),e.observe(I.current),()=>{e&&e.disconnect()}}},[C,M,L]),a.useEffect(()=>{C()},[C,y]),a.useEffect(()=>{Z(!0)},[]),a.useEffect(()=>{"function"==typeof p&&p()},[]);let O=a.useMemo(()=>n?b*E/c:b<j?j/c:b/c,[n,j,b,E,c]),P=a.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||s?"paused":"running","--pause-on-click":!i||s&&!l||l?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[e,i,s,l,d]),_=a.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),J=a.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":`${O}s`,"--delay":`${o}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":n?"auto":"100%"}),[i,d,O,o,m,n]),A=a.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),R=a.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>r.default.createElement(a.Fragment,{key:t},a.Children.map(y,e=>r.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,y]);return L?r.default.createElement("div",{ref:M,style:P,className:"rfm-marquee-container "+t},u&&r.default.createElement("div",{style:_,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:J,onAnimationIteration:v,onAnimationEnd:x},r.default.createElement("div",{className:"rfm-initial-child-container",ref:I},a.Children.map(y,e=>r.default.createElement("div",{style:A,className:"rfm-child"},e))),R(E-1)),r.default.createElement("div",{className:"rfm-marquee",style:J},R(E))):null});t.Z=i}},function(e){e.O(0,[7192,5515,6981,8771,3542,4869,9774,2888,179],function(){return e(e.s=26600)}),_N_E=e.O()}]);