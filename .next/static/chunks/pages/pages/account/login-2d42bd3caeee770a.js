(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1811],{92703:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/account/login",function(){return n(3951)}])},3951:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return login}});var a=n(52322),r=n(2784),l=n(41234),s=n(995),i=n(15228),o=n(15297),c=n(54423),d=n(89374),m=n(5632),u=n(22171),h=n(94896),loginPage=()=>{let e=(0,m.useRouter)(),[t,n]=(0,r.useState)("test@gmail.com"),[l,f]=(0,r.useState)("test@123"),[x,p]=(0,r.useState)(localStorage.getItem("Name"));(0,r.useEffect)(()=>{localStorage.setItem("Name",x)},[x]);let loginAuth=async(t,n)=>{try{await u.ZP.signInWithEmailAndPassword(t,n).then(function(){p("Emay Walter"),setTimeout(()=>{e.push("/pages/account/checkout")},200)})}catch(e){setTimeout(()=>{h.Am.error("error",e)},200)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{title:"login",parent:"home"}),(0,a.jsx)("section",{className:"login-page section-big-py-space bg-light",children:(0,a.jsx)("div",{className:"custom-container",children:(0,a.jsx)(i.Z,{className:"row",children:(0,a.jsx)(o.Z,{xl:"4",lg:"6",md:"8",className:"offset-xl-4 offset-lg-3 offset-md-2",children:(0,a.jsxs)("div",{className:"theme-card",children:[(0,a.jsx)("h3",{className:"text-center",children:"Login"}),(0,a.jsxs)("form",{className:"theme-form",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)(c.Z,{htmlFor:"email",children:"Email"}),(0,a.jsx)(d.Z,{type:"text",value:t,onChange:e=>n(e.target.value),className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)(c.Z,{htmlFor:"review",children:"Password"}),(0,a.jsx)(d.Z,{type:"password",value:l,onChange:e=>f(e.target.value),className:"form-control",id:"review",placeholder:"Enter your password",required:!0})]}),(0,a.jsx)("a",{href:"#",className:"btn btn-normal",onClick:()=>loginAuth(t,l),children:"Login"}),(0,a.jsx)("a",{className:"float-end txt-default mt-2",href:"/pages/account/forget-password",id:"fgpwd",children:"Forgot your password?"})]}),(0,a.jsx)("p",{className:"mt-3",children:"Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."}),(0,a.jsx)("a",{href:"/pages/account/register",className:"txt-default pt-3 d-block",children:"Create an Account"})]})})})})})]})},login=()=>(0,a.jsx)(l.Z,{children:(0,a.jsx)(loginPage,{})})},995:function(e,t,n){"use strict";var a=n(52322);n(2784);var r=n(82308),l=n(15228),s=n(15297);t.Z=e=>{let{title:t,parent:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"breadcrumb-main ",children:(0,a.jsx)(r.Z,{children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{className:"breadcrumb-contain",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:t}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:n})}),(0,a.jsx)("li",{children:(0,a.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:t})})]})]})})})})})})})}},36643:function(e,t,n){"use strict";n.d(t,{Z:function(){return header1}});var a=n(52322),r=n(2784),l=n(15228),s=n(15297),i=n(31173),o=n(21515);let c=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,t]=(0,r.useState)(!1),[n,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),t=await e.json();l(t)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,a.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,a.jsx)(o.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:c.map(e=>(0,a.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,a.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,a.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},d=n(63757),m=n(67138),u=n(11478),h=n(45817),f=n(69311),header1=e=>{let{cartPopupPosition:t,display:n,category:o,layoutLogo:c}=e,[x,p]=(0,r.useState)(!1),v=(0,r.useContext)(f.pl),{setLeftMenu:g,leftMenu:j}=v,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,r.useEffect)(()=>{let handleScroll=()=>{p(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("header",{id:"stickyHeader",children:[(0,a.jsx)("div",{className:"mobile-fix-option"}),(0,a.jsx)(i.Z,{}),(0,a.jsx)(News_Slider,{}),(0,a.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,a.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,a.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:x?35:150},className:"category-header-2",children:(0,a.jsx)("div",{className:"custom-container",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"navbar-menu",children:[(0,a.jsxs)("div",{className:"category-left",children:[(0,a.jsx)(h.Z,{}),(0,a.jsx)("div",{className:"icon-block",children:(0,a.jsx)("ul",{children:(0,a.jsx)(m.Z,{})})})]}),(0,a.jsx)("div",{style:{},children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)("div",{className:"category-right",children:(0,a.jsx)(u.Z,{spanClass:""})})]})})})})})]})})}},11478:function(e,t,n){"use strict";var a=n(52322);n(2784),t.Z=e=>{let{spanClass:t}=e;return(0,a.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==t?"contact-block":""),children:(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,a.jsxs)("span",{className:t,children:["call us",(0,a.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(68382),s=n(69311);t.Z=()=>{let e=(0,r.useContext)(s.pl),{menuResponsive:t,setMenuResponsive:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"menu-overlay ".concat(t?"active":""),onClick:()=>{n(!t),document.body.style.overflow="visible"}}),(0,a.jsx)("div",{className:"menu-block",children:(0,a.jsxs)("nav",{id:"main-nav",children:[(0,a.jsx)("div",{className:"toggle-nav",onClick:()=>{n(!t),document.body.style.overflow="hidden"},children:(0,a.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,a.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(t?"menu-open":""),children:(0,a.jsx)(l.Z,{})})]})})]})}},41234:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(36643),s=n(94869),i=n(73922),o=n(66889),c=n(98635);t.Z=e=>{let{children:t}=e;return window.location.pathname,(0,r.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,a.jsx)(c.Z,{children:(0,a.jsx)("div",{children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,a.jsx)(i.h,{children:t}),(0,a.jsx)(s.Z,{layoutLogo:"layout-2"})]})})})}},21515:function(e,t,n){var a=n(2784),r=a&&"object"==typeof a&&"default"in a?a:{default:a};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let l=a.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:i=!1,direction:o="left",speed:c=50,delay:d=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:x,onCycleComplete:p,onMount:v,children:g},j){let[y,w]=a.useState(0),[N,b]=a.useState(0),[E,k]=a.useState(1),[S,Z]=a.useState(!1),C=a.useRef(null),L=j||C,P=a.useRef(null),I=a.useCallback(()=>{if(P.current&&L.current){let e=L.current.getBoundingClientRect(),t=P.current.getBoundingClientRect(),a=e.width,r=t.width;("up"===o||"down"===o)&&(a=e.height,r=t.height),n&&a&&r?k(r<a?Math.ceil(a/r):1):k(1),w(a),b(r)}},[n,L,o]);a.useEffect(()=>{if(S&&(I(),P.current&&L.current)){let e=new ResizeObserver(()=>I());return e.observe(L.current),e.observe(P.current),()=>{e&&e.disconnect()}}},[I,L,S]),a.useEffect(()=>{I()},[I,g]),a.useEffect(()=>{Z(!0)},[]),a.useEffect(()=>{"function"==typeof v&&v()},[]);let O=a.useMemo(()=>n?N*E/c:N<y?y/c:N/c,[n,y,N,E,c]),_=a.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!i||i?"paused":"running","--width":"up"===o||"down"===o?"100vh":"100%","--transform":"up"===o?"rotate(-90deg)":"down"===o?"rotate(90deg)":"none"}),[e,l,s,i,o]),M=a.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),q=a.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===o?"normal":"reverse","--duration":`${O}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":n?"auto":"100%"}),[l,o,O,d,m,n]),A=a.useMemo(()=>({"--transform":"up"===o?"rotate(90deg)":"down"===o?"rotate(-90deg)":"none"}),[o]),F=a.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>r.default.createElement(a.Fragment,{key:t},a.Children.map(g,e=>r.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,g]);return S?r.default.createElement("div",{ref:L,style:_,className:"rfm-marquee-container "+t},u&&r.default.createElement("div",{style:M,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:q,onAnimationIteration:p,onAnimationEnd:x},r.default.createElement("div",{className:"rfm-initial-child-container",ref:P},a.Children.map(g,e=>r.default.createElement("div",{style:A,className:"rfm-child"},e))),F(E-1)),r.default.createElement("div",{className:"rfm-marquee",style:q},F(E))):null});t.Z=l}},function(e){e.O(0,[7192,5515,6981,8771,3542,4869,9774,2888,179],function(){return e(e.s=92703)}),_N_E=e.O()}]);