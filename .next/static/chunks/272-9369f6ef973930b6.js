"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{995:function(e,t,o){var l=o(52322);o(2784);var r=o(82308),n=o(15228),i=o(15297);t.Z=e=>{let{title:t,parent:o}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"breadcrumb-main ",children:(0,l.jsx)(r.Z,{children:(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)("div",{className:"breadcrumb-contain",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:t}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:o})}),(0,l.jsx)("li",{children:(0,l.jsx)("i",{className:"fa fa-angle-double-right"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:t})})]})]})})})})})})})}},36643:function(e,t,o){o.d(t,{Z:function(){return header1}});var l=o(52322),r=o(2784),n=o(15228),i=o(15297),s=o(31173),a=o(21515);let c=[{metal:"  Gold",rate:"  1800 per ounce",time:"  Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Gold",rate:" 1800 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Silver",rate:" 25 per ounce",time:" Oct 26, 2023, 12:00 PM"},{metal:" Platinum",rate:" 1000 per ounce",time:" Oct 26, 2023, 12:00 PM"}];var News_Slider=()=>{let[e,t]=(0,r.useState)(!1),[o,n]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("https://api.example.com/data"),t=await e.json();n(t)}catch(e){console.error("Error fetching data:",e)}};fetchData()},[]),(0,l.jsx)("div",{className:"scrolling-text-container ".concat(e?"sticky":""),style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:e?0:35},children:(0,l.jsx)(a.Z,{style:{height:35},speed:25,pauseOnHover:!0,children:c.map(e=>(0,l.jsxs)("span",{style:{color:"white"},children:[e.metal," Rate:"," ",(0,l.jsxs)("span",{style:{color:"red"},children:["$",e.rate]}),(0,l.jsxs)("span",{style:{color:"#adff2f"},children:[e.time," |\xa0"]})]},e.metal))})})},d=o(63757),m=o(67138),p=o(11478),u=o(45817),h=o(69311),header1=e=>{let{cartPopupPosition:t,display:o,category:a,layoutLogo:c}=e,[j,f]=(0,r.useState)(!1),g=(0,r.useContext)(h.pl),{setLeftMenu:y,leftMenu:x}=g,handleScroll=()=>{(window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=300?window.innerWidth<581?document.getElementById("stickyHeader").classList.remove("sticky"):document.getElementById("stickyHeader").classList.add("sticky"):document.getElementById("stickyHeader").classList.remove("sticky")};return(0,r.useEffect)(()=>{let handleScroll=()=>{f(window.scrollY>0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,r.useEffect)(()=>(window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}),[]),(0,l.jsx)(r.Fragment,{children:(0,l.jsxs)("header",{id:"stickyHeader",children:[(0,l.jsx)("div",{className:"mobile-fix-option"}),(0,l.jsx)(s.Z,{}),(0,l.jsx)(News_Slider,{}),(0,l.jsx)("div",{style:{backgroundColor:"#ffcc01",textAlign:"center"},className:"layout-header2",children:(0,l.jsx)("a",{style:{color:"#241f1c",textDecoration:"none",fontSize:55,fontWeight:"bolder",fontStyle:"italic"},children:"GOLD BIT"})}),(0,l.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",width:"100%",backgroundColor:"black",zIndex:1e3,position:"fixed",top:j?35:150},className:"category-header-2",children:(0,l.jsx)("div",{className:"custom-container",children:(0,l.jsx)(n.Z,{children:(0,l.jsx)(i.Z,{children:(0,l.jsxs)("div",{className:"navbar-menu",children:[(0,l.jsxs)("div",{className:"category-left",children:[(0,l.jsx)(u.Z,{}),(0,l.jsx)("div",{className:"icon-block",children:(0,l.jsx)("ul",{children:(0,l.jsx)(m.Z,{})})})]}),(0,l.jsx)("div",{style:{},children:(0,l.jsx)(d.Z,{})}),(0,l.jsx)("div",{className:"category-right",children:(0,l.jsx)(p.Z,{spanClass:""})})]})})})})})]})})}},11478:function(e,t,o){var l=o(52322);o(2784),t.Z=e=>{let{spanClass:t}=e;return(0,l.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==t?"contact-block":""),children:(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,l.jsxs)("span",{className:t,children:["call us",(0,l.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,t,o){var l=o(52322),r=o(2784),n=o(68382),i=o(69311);t.Z=()=>{let e=(0,r.useContext)(i.pl),{menuResponsive:t,setMenuResponsive:o}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"menu-overlay ".concat(t?"active":""),onClick:()=>{o(!t),document.body.style.overflow="visible"}}),(0,l.jsx)("div",{className:"menu-block",children:(0,l.jsxs)("nav",{id:"main-nav",children:[(0,l.jsx)("div",{className:"toggle-nav",onClick:()=>{o(!t),document.body.style.overflow="hidden"},children:(0,l.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,l.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(t?"menu-open":""),children:(0,l.jsx)(n.Z,{})})]})})]})}},48290:function(e,t,o){o.d(t,{Z:function(){return Masonry}});var l=o(52322),r=o(2784),n=JSON.parse('{"all":[{"type":"electronic","img":"portfolio/1.jpg"},{"type":"electronic","img":"portfolio/2.jpg"},{"type":"electronic","img":"portfolio/3.jpg"},{"type":"electronic","img":"portfolio/4.jpg"},{"type":"electronic","img":"portfolio/5.jpg"},{"type":"bags","img":"portfolio/6.jpg"},{"type":"fashion","img":"portfolio/7.jpg"},{"type":"fashion","img":"portfolio/8.jpg"},{"type":"bags","img":"portfolio/9.jpg"},{"type":"shoes","img":"portfolio/10.jpg"},{"type":"electronic","img":"portfolio/11.jpg"},{"type":"shoes","img":"portfolio/12.jpg"},{"type":"bags","img":"portfolio/13.jpg"},{"type":"watch","img":"portfolio/14.jpg"},{"type":"watch","img":"portfolio/15.jpg"},{"type":"shoes","img":"portfolio/16.jpg"},{"type":"watch","img":"portfolio/17.jpg"},{"type":"fashion","img":"portfolio/18.jpg"},{"type":"fashion","img":"portfolio/19.jpg"},{"type":"fashion","img":"portfolio/20.jpg"},{"type":"watch","img":"portfolio/21.jpg"},{"type":"bags","img":"portfolio/22.jpg"},{"type":"shoes","img":"portfolio/23.jpg"}]}'),i=o(82308),s=o(15228),a=o(15297),c=o(24903),d=o(57637),m=o(67606),p=o(35629),u=o(31205),h=o(97e3),j=o(2862);o(93355);let f=["all","fashion","bags","shoes","watch","electronic"];var Masonry=e=>{let{cols:t,masonryGrid:o,fluid:g}=e,[y,x]=(0,r.useState)("all");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("section",{className:"filter-section bg-light",children:[(0,l.jsx)("div",{className:"title6 bg-light",children:(0,l.jsx)("h4",{children:"portfolio"})}),(0,l.jsx)(i.Z,{fluid:g,children:(0,l.jsx)(s.Z,{className:"color-tab",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)("div",{className:"filter-container isotopeFilters",children:(0,l.jsx)(c.Z,{tabs:!0,children:f.map((e,t)=>(0,l.jsx)(d.Z,{className:"filter-button project_button",children:(0,l.jsx)(m.Z,{className:y===e?"active":"",onClick:()=>{x(e)},children:e.toUpperCase()})},t))})})})})})]}),(0,l.jsx)("section",{className:"portfolio-section portfolio-padding pt-0 port-col zoom-gallery bg-light",children:(0,l.jsx)(i.Z,{fluid:g,children:(0,l.jsx)(s.Z,{className:"isotopeContainer portfolio-3",children:(0,l.jsx)(p.Z,{activeTab:y,children:(0,l.jsx)(j.ri,{children:(0,l.jsx)(u.Z,{tabId:y,children:(0,l.jsx)(h.Z,{breakpointCols:{default:o,500:1},className:"my-masonry-grid masonry-with-dec ",columnClassName:"my-masonry-grid_column",children:n&&n.all.map((e,o)=>(0,l.jsx)(r.Fragment,{children:"all"!==y?e.type===y&&(0,l.jsx)("div",{className:t,children:(0,l.jsx)("div",{className:"overlay",children:(0,l.jsx)("div",{children:(0,l.jsx)(j.ck,{original:"/images/".concat(e.img),children:t=>{let{ref:o,open:r}=t;return(0,l.jsx)("img",{onClick:r,ref:o,src:"/images/".concat(e.img),alt:"portfolio-image"})}})})})}):(0,l.jsx)("div",{className:t,children:(0,l.jsx)("div",{className:"overlay",children:(0,l.jsx)("div",{children:(0,l.jsx)(j.ck,{original:"/images/".concat(e.img),children:t=>{let{ref:o,open:r}=t;return(0,l.jsx)("img",{onClick:r,ref:o,src:"/images/".concat(e.img),alt:"portfolio-image"})}})})})})},o))})})})})})})})]})}},41234:function(e,t,o){var l=o(52322),r=o(2784),n=o(36643),i=o(94869),s=o(73922),a=o(66889),c=o(98635);t.Z=e=>{let{children:t}=e;return window.location.pathname,(0,r.useEffect)(()=>{document.documentElement.classList.remove(localStorage.getItem("color")),localStorage.setItem("color","color-1"),document.documentElement.classList.add(localStorage.getItem("color"))},[]),(0,l.jsx)(c.Z,{children:(0,l.jsx)("div",{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(n.Z,{category:!1,cartPopupPosition:"top",display:"d-none",layoutLogo:"layout-2"}),(0,l.jsx)(s.h,{children:t}),(0,l.jsx)(i.Z,{layoutLogo:"layout-2"})]})})})}},97e3:function(e,t,o){var l=o(2784);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,l)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){var l;l=o[t],t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}let Masonry=class Masonry extends l.Component{constructor(e){let t;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),t=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});let o=1/0,l=t.default||2;for(let r in t){let n=parseInt(r),i=n>0&&e<=n;i&&n<o&&(o=n,l=t[r])}l=Math.max(1,parseInt(l)||1),this.state.columnCount!==l&&this.setState({columnCount:l})}itemsInColumns(){let e=this.state.columnCount,t=Array(e),o=l.Children.toArray(this.props.children);for(let l=0;l<o.length;l++){let r=l%e;t[r]||(t[r]=[]),t[r].push(o[l])}return t}renderColumns(){let{column:e,columnAttrs:t={},columnClassName:o}=this.props,r=this.itemsInColumns(),n=`${100/r.length}%`,i=o;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));let s=_objectSpread(_objectSpread(_objectSpread({},e),t),{},{style:_objectSpread(_objectSpread({},t.style),{},{width:n}),className:i});return r.map((e,t)=>l.createElement("div",_extends({},s,{key:t}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:t,breakpointCols:o,columnClassName:r,columnAttrs:n,column:i,className:s}=e,a=function(e,t){if(null==e)return{};var o,l,r=function(e,t){if(null==e)return{};var o,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),c=s;return"string"!=typeof s&&(this.logDeprecated('The property "className" requires a string'),void 0===s&&(c="my-masonry-grid")),l.createElement("div",_extends({},a,{className:c}),this.renderColumns())}};Masonry.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},t.Z=Masonry}}]);