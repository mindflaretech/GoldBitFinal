(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6706],{22365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/compare/compare-1",function(){return n(74019)}])},74019:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return compare_1}});var r=n(74512),a=n(32735),s=n(98448),l=n(997),i=n(90640),c=n(52461),o=n(28408),d=n(46631),m=n(46538),u=n(25280),h=n(58228),f=n(31294),comparePage=()=>{let{compareItems:e,removeFromComapre:t}=a.useContext(h.S),{addToCart:n}=a.useContext(f.A);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{title:"compare",parent:"home"}),(0,r.jsx)("section",{className:"compare-padding section-big-py-space bg-light",children:(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(i.Z,{sm:"12",children:e&&e.length>=0?(0,r.jsx)("div",{className:"compare-page",children:(0,r.jsx)("div",{className:"table-wrapper table-responsive",children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"th-compare",children:[(0,r.jsx)("td",{children:"Action"}),e.map((e,n)=>(0,r.jsx)("td",{className:"item-row",children:(0,r.jsx)(o.Z,{type:"button",className:"remove-compare",onClick:()=>t(e),children:"Remove"})},n))]})}),(0,r.jsxs)("tbody",{id:"table-compare",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"product-name",children:"Product Name"}),e.map((e,t)=>(0,r.jsx)("td",{className:"item-row",children:e.title},t))]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"product-name",children:"Product Image"}),e.map((e,t)=>(0,r.jsxs)("td",{className:"item-row",children:[(0,r.jsx)(d.Z,{src:"/images/".concat(e.images[0].src),alt:"product",className:"featured-image"}),(0,r.jsxs)("div",{className:"product-price product_price",children:[(0,r.jsx)("strong",{children:"On Sale: "}),(0,r.jsx)("span",{children:"$89,00"})]}),(0,r.jsxs)("form",{className:"variants clearfix",children:[(0,r.jsx)(m.Z,{type:"hidden"}),(0,r.jsx)(o.Z,{title:"Add to Cart",className:"add-to-cart btn btn-normal",onClick:()=>{n(e)},children:"Add to Cart"})]}),(0,r.jsx)("p",{className:"grid-link__title hidden",children:"Cut Dress"})]},t))]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"product-name",children:"Product Description"}),e.map((e,t)=>(0,r.jsx)("td",{className:"item-row",children:(0,r.jsx)("p",{className:"description-compare",children:e.description})},t))]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"product-name",children:"Availability"}),e.map((e,t)=>(0,r.jsx)("td",{className:"available-stock",children:(0,r.jsx)("p",{children:"Available In stock"})},t))]})]})]})})}):(0,r.jsx)("div",{className:"col-sm-12",children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[(0,r.jsx)("img",{src:"static/images/icon-empty-cart.png",className:"img-fluid mb-4",alt:""}),(0,r.jsx)("h3",{children:(0,r.jsx)("strong",{children:"Your Cart is Empty"})}),(0,r.jsx)("h4",{children:"Explore more shortlist some items."})]})})})})})})})]})},compare_1=()=>(0,r.jsx)(s.Z,{children:(0,r.jsx)(comparePage,{})})},25280:function(e,t,n){"use strict";var r=n(74512);n(32735);var a=n(67283),s=n(997),l=n(90640);t.Z=e=>{let{title:t,parent:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"breadcrumb-main ",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)("div",{className:"breadcrumb-contain",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:n})}),(0,r.jsx)("li",{children:(0,r.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:t})})]})]})})})})})})})}},22589:function(e,t,n){"use strict";n.d(t,{Z:function(){return header1}});var r=n(74512),a=n(32735),s=n(997),l=n(90640),i=n(89302),c=n(13395);let o=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,a.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),t=await e.json();s(t)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,r.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,r.jsx)(c.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:o.map(e=>(0,r.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,r.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,r.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},d=n(92314),m=n(17236),u=n(45909),h=n(88322),f=n(42701),header1=e=>{let{cartPopupPosition:t,display:n,category:c,layoutLogo:o}=e,[p,x]=(0,a.useState)(!1),v=(0,a.useContext)(f.pl),{setLeftMenu:j,leftMenu:g}=v,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,a.useEffect)(()=>{let handleScroll=()=>{x(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,a.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)("header",{id:"stickyHeader",children:[(0,r.jsx)("div",{className:"mobile-fix-option"}),(0,r.jsx)(i.Z,{}),(0,r.jsx)(News_Slider,{}),(0,r.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,r.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,r.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:p?35:150},className:"category-header-2",children:(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"navbar-menu",children:[(0,r.jsxs)("div",{className:"category-left",children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"icon-block",children:(0,r.jsx)("ul",{children:(0,r.jsx)(m.Z,{})})})]}),(0,r.jsx)("div",{style:{},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("div",{className:"category-right",children:(0,r.jsx)(u.Z,{spanClass:""})})]})})})})})]})})}},45909:function(e,t,n){"use strict";var r=n(74512);n(32735),t.Z=e=>{let{spanClass:t}=e;return(0,r.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==t?"contact-block":""),children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,r.jsxs)("span",{className:t,children:["call us",(0,r.jsx)("span",{children:"123-456-76890"})]})]})})}},88322:function(e,t,n){"use strict";var r=n(74512),a=n(32735),s=n(20778),l=n(42701);t.Z=()=>{let e=(0,a.useContext)(l.pl),{menuResponsive:t,setMenuResponsive:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"menu-overlay ".concat(t?"active":""),onClick:()=>{n(!t),document.body.style.overflow="visible"}}),(0,r.jsx)("div",{className:"menu-block",children:(0,r.jsxs)("nav",{id:"main-nav",children:[(0,r.jsx)("div",{className:"toggle-nav",onClick:()=>{n(!t),document.body.style.overflow="hidden"},children:(0,r.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,r.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(t?"menu-open":""),children:(0,r.jsx)(s.Z,{})})]})})]})}},98448:function(e,t,n){"use strict";var r=n(74512),a=n(32735),s=n(22589),l=n(95310),i=n(23654),c=n(19065),o=n(36675);t.Z=e=>{let{children:t}=e;return window.location.pathname,(0,a.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,r.jsx)(i.h,{children:t}),(0,r.jsx)(l.Z,{layoutLogo:"layout-2"})]})})})}},13395:function(e,t,n){var r=n(32735),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let s=r.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:s=!0,pauseOnHover:l=!1,pauseOnClick:i=!1,direction:c="left",speed:o=50,delay:d=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:p,onCycleComplete:x,onMount:v,children:j},g){let[b,y]=r.useState(0),[w,N]=r.useState(0),[E,k]=r.useState(1),[Z,S]=r.useState(!1),O=r.useRef(null),C=g||O,_=r.useRef(null),P=r.useCallback(()=>{if(_.current&&C.current){let e=C.current.getBoundingClientRect(),t=_.current.getBoundingClientRect(),r=e.width,a=t.width;("up"===c||"down"===c)&&(r=e.height,a=t.height),n&&r&&a?k(a<r?Math.ceil(r/a):1):k(1),y(r),N(a)}},[n,C,c]);r.useEffect(()=>{if(Z&&(P(),_.current&&C.current)){let e=new ResizeObserver(()=>P());return e.observe(C.current),e.observe(_.current),()=>{e&&e.disconnect()}}},[P,C,Z]),r.useEffect(()=>{P()},[P,j]),r.useEffect(()=>{S(!0)},[]),r.useEffect(()=>{"function"==typeof v&&v()},[]);let M=r.useMemo(()=>n?w*E/o:w<b?b/o:w/o,[n,b,w,E,o]),L=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!s||l?"paused":"running","--pause-on-click":!s||l&&!i||i?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[e,s,l,i,c]),T=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),I=r.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":`${M}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":n?"auto":"100%"}),[s,c,M,d,m,n]),A=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),R=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(j,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,j]);return Z?a.default.createElement("div",{ref:C,style:L,className:"rfm-marquee-container "+t},u&&a.default.createElement("div",{style:T,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:I,onAnimationIteration:x,onAnimationEnd:p},a.default.createElement("div",{className:"rfm-initial-child-container",ref:_},r.Children.map(j,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e))),R(E-1)),a.default.createElement("div",{className:"rfm-marquee",style:I},R(E))):null});t.Z=s},52461:function(e,t,n){"use strict";var r=n(32735),a=n(60216),s=n.n(a),l=n(40841),i=n.n(l),c=n(18015),o=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={bordered:s().bool,borderless:s().bool,className:s().string,cssModule:s().object,dark:s().bool,hover:s().bool,innerRef:s().oneOfType([s().func,s().string,s().object]),responsive:s().oneOfType([s().bool,s().string]),responsiveTag:c.iC,size:s().string,striped:s().bool,tag:c.iC};function Table(e){var t=e.className,n=e.cssModule,a=e.size,s=e.bordered,l=e.borderless,d=e.striped,m=e.dark,u=e.hover,h=e.responsive,f=e.tag,p=e.responsiveTag,x=e.innerRef,v=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,o),j=(0,c.mx)(i()(t,"table",!!a&&"table-"+a,!!s&&"table-bordered",!!l&&"table-borderless",!!d&&"table-striped",!!m&&"table-dark",!!u&&"table-hover"),n),g=r.createElement(void 0===f?"table":f,_extends({},v,{ref:x,className:j}));if(h){var b=(0,c.mx)(!0===h?"table-responsive":"table-responsive-".concat(h),n);return r.createElement(void 0===p?"div":p,{className:b},g)}return g}Table.propTypes=d,t.Z=Table}},function(e){e.O(0,[4474,9076,59,3398,6086,5310,9774,2888,179],function(){return e(e.s=22365)}),_N_E=e.O()}]);