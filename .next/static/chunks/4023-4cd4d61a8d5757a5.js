(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4023,378,3901,7702,6442,336],{74782:function(e,t,n){"use strict";var r=n(2784),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},SVG=function(e){var t=e.animate,n=void 0===t||t,a=e.animateBegin,i=e.backgroundColor,o=void 0===i?"#f5f6f7":i,l=e.backgroundOpacity,s=void 0===l?1:l,c=e.baseUrl,d=void 0===c?"":c,u=e.children,f=e.foregroundColor,m=e.foregroundOpacity,p=e.gradientRatio,g=void 0===p?2:p,v=e.gradientDirection,h=e.uniqueKey,y=e.interval,b=e.rtl,w=e.speed,E=e.style,x=void 0===E?{}:E,O=e.title,C=void 0===O?"Loading...":O,k=e.beforeMask,_=void 0===k?null:k,N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=h||Math.random().toString(36).substring(6),M=j+"-diff",S=j+"-animated-diff",L=j+"-aria",P="0; "+(void 0===y?.25:y)+"; 1",R=(void 0===w?1.2:w)+"s";return(0,r.createElement)("svg",__assign({"aria-labelledby":L,role:"img",style:__assign(__assign({},x),void 0!==b&&b?{transform:"scaleX(-1)"}:null)},N),C?(0,r.createElement)("title",{id:L},C):null,_&&(0,r.isValidElement)(_)?_:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+M+")",style:{fill:"url("+d+"#"+S+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:M},u),(0,r.createElement)("linearGradient",{id:S,gradientTransform:"top-bottom"===(void 0===v?"left-right":v)?"rotate(90)":void 0},(0,r.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:s},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-g+"; "+-g+"; 1",keyTimes:P,dur:R,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"50%",stopColor:void 0===f?"#eee":f,stopOpacity:void 0===m?1:m},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-g/2+"; "+-g/2+"; "+(1+g/2),keyTimes:P,dur:R,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:s},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+g),keyTimes:P,dur:R,repeatCount:"indefinite",begin:a})))))},ContentLoader=function(e){return e.children?(0,r.createElement)(SVG,__assign({},e)):(0,r.createElement)(ReactContentLoaderFacebook,__assign({},e))},ReactContentLoaderFacebook=function(e){return(0,r.createElement)(ContentLoader,__assign({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=ContentLoader},21515:function(e,t,n){var r=n(2784),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function({style:e={},className:t="",autoFill:n=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:s="left",speed:c=50,delay:d=0,loop:u=0,gradient:f=!1,gradientColor:m="white",gradientWidth:p=200,onFinish:g,onCycleComplete:v,onMount:h,children:y},b){let[w,E]=r.useState(0),[x,O]=r.useState(0),[C,k]=r.useState(1),[_,N]=r.useState(!1),j=r.useRef(null),M=b||j,S=r.useRef(null),L=r.useCallback(()=>{if(S.current&&M.current){let e=M.current.getBoundingClientRect(),t=S.current.getBoundingClientRect(),r=e.width,a=t.width;("up"===s||"down"===s)&&(r=e.height,a=t.height),n&&r&&a?k(a<r?Math.ceil(r/a):1):k(1),E(r),O(a)}},[n,M,s]);r.useEffect(()=>{if(_&&(L(),S.current&&M.current)){let e=new ResizeObserver(()=>L());return e.observe(M.current),e.observe(S.current),()=>{e&&e.disconnect()}}},[L,M,_]),r.useEffect(()=>{L()},[L,y]),r.useEffect(()=>{N(!0)},[]),r.useEffect(()=>{"function"==typeof h&&h()},[]);let P=r.useMemo(()=>n?x*C/c:x<w?w/c:x/c,[n,w,x,C,c]),R=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"}),[e,i,o,l,s]),q=r.useMemo(()=>({"--gradient-color":m,"--gradient-width":"number"==typeof p?`${p}px`:p}),[m,p]),T=r.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${P}s`,"--delay":`${d}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":n?"auto":"100%"}),[i,s,P,d,u,n]),A=r.useMemo(()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"}),[s]),B=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(y,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,y]);return _?a.default.createElement("div",{ref:M,style:R,className:"rfm-marquee-container "+t},f&&a.default.createElement("div",{style:q,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:T,onAnimationIteration:v,onAnimationEnd:g},a.default.createElement("div",{className:"rfm-initial-child-container",ref:S},r.Children.map(y,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e))),B(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:T},B(C))):null});t.Z=i},73712:function(e,t,n){"use strict";var r=n(2784),a=n(13980),i=n.n(a),o=n(72779),l=n.n(o),s=n(85701),c=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","close"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={children:i().node,className:i().string,close:i().object,closeAriaLabel:i().string,cssModule:i().object,tag:s.iC,toggle:i().func,wrapTag:s.iC};function ModalHeader(e){var t,n=e.className,a=e.cssModule,i=e.children,o=e.toggle,d=e.tag,u=void 0===d?"h5":d,f=e.wrapTag,m=void 0===f?"div":f,p=e.closeAriaLabel,g=e.close,v=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,c),h=(0,s.mx)(l()(n,"modal-header"),a);return!g&&o&&(t=r.createElement("button",{type:"button",onClick:o,className:(0,s.mx)("btn-close",a),"aria-label":void 0===p?"Close":p})),r.createElement(m,_extends({},v,{className:h}),r.createElement(u,{className:(0,s.mx)("modal-title",a)},i),g||t)}ModalHeader.propTypes=d,t.Z=ModalHeader}}]);