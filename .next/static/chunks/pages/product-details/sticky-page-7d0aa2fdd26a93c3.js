(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{73514:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/sticky-page",function(){return n(41270)}])},41270:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return sticky_page}});var r=n(74512);n(32735);var a=n(98448),i=n(25280),s=n(95112),l=n(45729),o=n(16608),c=n(997),d=n(90640),m=n(54117),u=n(493);function _templateObject(){let e=(0,o._)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return _templateObject=function(){return e},e}let h=(0,m.Ps)(_templateObject());var stickySubPage=()=>{var{data:e}=(0,u.a)(h,{variables:{id:1}});return(0,r.jsx)("div",{className:"collection-wrapper",children:(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsxs)(c.Z,{className:"block",children:[(0,r.jsx)(d.Z,{lg:"5",children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(d.Z,{className:"product_img_scroll image-scroll",children:(0,r.jsx)("div",{children:e&&e.product.images.map((e,t)=>(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/".concat(e.src),alt:"",className:"img-fluid"})})},t))})})})}),e&&(0,r.jsx)(d.Z,{lg:"7",className:"rtl-text"})]})})})},sticky_page=()=>(0,r.jsx)("div",{className:"b-g-light",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{title:"stick page",parent:"product"}),(0,r.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,r.jsx)(stickySubPage,{})}),(0,r.jsx)("div",{className:"custom-container",children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(l.Z,{})]})})},95112:function(e,t,n){"use strict";var r=n(74512),a=n(32735),i=n(997),s=n(90640),l=n(60160),o=n(93636),c=n(70025),d=n(86714),m=n(9763),u=n(68905),h=n(6512),f=n(46538);t.Z=()=>{let[e,t]=(0,a.useState)("1");return(0,r.jsx)("section",{className:"tab-product tab-exes creative-card creative-inner mb-0",children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(s.Z,{sm:"12",lg:"12",children:[(0,r.jsxs)(l.Z,{tabs:!0,className:"nav-material",id:"top-tab",role:"tablist",children:[(0,r.jsx)(o.Z,{children:(0,r.jsxs)(c.Z,{className:"1"===e?"active":"",onClick:()=>t("1"),children:["Description",(0,r.jsx)("div",{className:"material-border"})]})}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(c.Z,{className:"2"===e?"active":"",onClick:()=>t("2"),children:["Video",(0,r.jsx)("div",{className:"material-border"})]})}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(c.Z,{className:"3"===e?"active":"",onClick:()=>t("3"),children:["Write Review",(0,r.jsx)("div",{className:"material-border"})]})})]}),(0,r.jsxs)(d.Z,{className:"nav-material",activeTab:e,children:[(0,r.jsxs)(m.Z,{tabId:"1",children:[(0,r.jsx)("p",{className:"ps-0",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,r.jsxs)("div",{className:"single-product-tables",children:[(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Febric"}),(0,r.jsx)("td",{children:"Chiffon"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Color"}),(0,r.jsx)("td",{children:"Red"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Material"}),(0,r.jsx)("td",{children:"Crepe printed"})]})]})}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Length"}),(0,r.jsx)("td",{children:"50 Inches"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Size"}),(0,r.jsx)("td",{children:"S, M, L .XXL"})]})]})})]})]}),(0,r.jsx)(m.Z,{tabId:"2",children:(0,r.jsx)("div",{className:"mt-3 text-center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0})})}),(0,r.jsx)(m.Z,{tabId:"3",children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"form-row row",children:[(0,r.jsx)(s.Z,{md:"12",children:(0,r.jsxs)("div",{className:"media",children:[(0,r.jsx)(h.Z,{className:"mb-0",children:"Rating"}),(0,r.jsx)("div",{className:"media-body ms-3",children:(0,r.jsxs)("div",{className:"rating three-star",children:[(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})," ",(0,r.jsx)("i",{className:"fa fa-star"})]})})]})}),(0,r.jsxs)(s.Z,{md:"6",children:[(0,r.jsx)(h.Z,{htmlFor:"name",children:"Name"}),(0,r.jsx)(f.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:!0})]}),(0,r.jsxs)(s.Z,{md:"6",children:[(0,r.jsx)(h.Z,{htmlFor:"email",children:"Email"}),(0,r.jsx)(f.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,r.jsxs)(s.Z,{md:"12",children:[(0,r.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,r.jsx)(f.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your Review Subjects",required:!0})]}),(0,r.jsxs)(s.Z,{md:"12",children:[(0,r.jsx)(h.Z,{htmlFor:"review",children:"Review Title"}),(0,r.jsx)("textarea",{className:"form-control",rows:4,placeholder:"Write Your Testimonial Here",id:"exampleFormControlTextarea1"})]}),(0,r.jsx)(s.Z,{md:"12",children:(0,r.jsx)("button",{className:"btn btn-normal",type:"submit",children:"Submit YOur Review"})})]})})})]})]})})})}},68980:function(e,t,n){"use strict";var r=n(32735),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},SVG=function(e){var t=e.animate,n=void 0===t||t,a=e.animateBegin,i=e.backgroundColor,s=void 0===i?"#f5f6f7":i,l=e.backgroundOpacity,o=void 0===l?1:l,c=e.baseUrl,d=void 0===c?"":c,m=e.children,u=e.foregroundColor,h=e.foregroundOpacity,f=e.gradientRatio,p=void 0===f?2:f,x=e.gradientDirection,v=e.uniqueKey,g=e.interval,y=e.rtl,j=e.speed,b=e.style,w=void 0===b?{}:b,N=e.title,E=void 0===N?"Loading...":N,k=e.beforeMask,Z=void 0===k?null:k,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),C=v||Math.random().toString(36).substring(6),O=C+"-diff",R=C+"-animated-diff",S=C+"-aria",L="0; "+(void 0===g?.25:g)+"; 1",P=(void 0===j?1.2:j)+"s";return(0,r.createElement)("svg",__assign({"aria-labelledby":S,role:"img",style:__assign(__assign({},w),void 0!==y&&y?{transform:"scaleX(-1)"}:null)},_),E?(0,r.createElement)("title",{id:S},E):null,Z&&(0,r.isValidElement)(Z)?Z:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+O+")",style:{fill:"url("+d+"#"+R+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:O},m),(0,r.createElement)("linearGradient",{id:R,gradientTransform:"top-bottom"===(void 0===x?"left-right":x)?"rotate(90)":void 0},(0,r.createElement)("stop",{offset:"0%",stopColor:s,stopOpacity:o},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-p+"; "+-p+"; 1",keyTimes:L,dur:P,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"50%",stopColor:void 0===u?"#eee":u,stopOpacity:void 0===h?1:h},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-p/2+"; "+-p/2+"; "+(1+p/2),keyTimes:L,dur:P,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"100%",stopColor:s,stopOpacity:o},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+p),keyTimes:L,dur:P,repeatCount:"indefinite",begin:a})))))},ContentLoader=function(e){return e.children?(0,r.createElement)(SVG,__assign({},e)):(0,r.createElement)(ReactContentLoaderFacebook,__assign({},e))},ReactContentLoaderFacebook=function(e){return(0,r.createElement)(ContentLoader,__assign({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=ContentLoader},13395:function(e,t,n){var r=n(32735),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:i=!0,pauseOnHover:s=!1,pauseOnClick:l=!1,direction:o="left",speed:c=50,delay:d=0,loop:m=0,gradient:u=!1,gradientColor:h="white",gradientWidth:f=200,onFinish:p,onCycleComplete:x,onMount:v,children:g},y){let[j,b]=r.useState(0),[w,N]=r.useState(0),[E,k]=r.useState(1),[Z,_]=r.useState(!1),C=r.useRef(null),O=y||C,R=r.useRef(null),S=r.useCallback(()=>{if(R.current&&O.current){let e=O.current.getBoundingClientRect(),t=R.current.getBoundingClientRect(),r=e.width,a=t.width;("up"===o||"down"===o)&&(r=e.height,a=t.height),n&&r&&a?k(a<r?Math.ceil(r/a):1):k(1),b(r),N(a)}},[n,O,o]);r.useEffect(()=>{if(Z&&(S(),R.current&&O.current)){let e=new ResizeObserver(()=>S());return e.observe(O.current),e.observe(R.current),()=>{e&&e.disconnect()}}},[S,O,Z]),r.useEffect(()=>{S()},[S,g]),r.useEffect(()=>{_(!0)},[]),r.useEffect(()=>{"function"==typeof v&&v()},[]);let L=r.useMemo(()=>n?w*E/c:w<j?j/c:w/c,[n,j,w,E,c]),P=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||s?"paused":"running","--pause-on-click":!i||s&&!l||l?"paused":"running","--width":"up"===o||"down"===o?"100vh":"100%","--transform":"up"===o?"rotate(-90deg)":"down"===o?"rotate(90deg)":"none"}),[e,i,s,l,o]),q=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof f?`${f}px`:f}),[h,f]),M=r.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===o?"normal":"reverse","--duration":`${L}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":n?"auto":"100%"}),[i,o,L,d,m,n]),F=r.useMemo(()=>({"--transform":"up"===o?"rotate(90deg)":"down"===o?"rotate(-90deg)":"none"}),[o]),I=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(g,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e)))),[F,g]);return Z?a.default.createElement("div",{ref:O,style:P,className:"rfm-marquee-container "+t},u&&a.default.createElement("div",{style:q,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:M,onAnimationIteration:x,onAnimationEnd:p},a.default.createElement("div",{className:"rfm-initial-child-container",ref:R},r.Children.map(g,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e))),I(E-1)),a.default.createElement("div",{className:"rfm-marquee",style:M},I(E))):null});t.Z=i}},function(e){e.O(0,[4474,9076,59,3398,3766,4973,224,9611,6086,5310,1583,7908,9774,2888,179],function(){return e(e.s=73514)}),_N_E=e.O()}]);