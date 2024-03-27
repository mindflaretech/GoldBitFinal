"use strict";exports.id=1163,exports.ids=[1163],exports.modules={6437:(e,s,l)=>{l.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=l(997),i=l(6689);let __WEBPACK_DEFAULT_EXPORT__=e=>{let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let l=s.current;if(l){let s=l.parentElement,a=e.src;s.classList.add("bg-size"),l.style.display="none",s.setAttribute("style",`
        background-image: url(${a});
        background-size:cover; 
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `)}},[e.src]),a.jsx("img",{ref:s,...e,layout:"fill",alt:""})}},1163:(e,s,l)=>{l.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=l(997),i=l(6689),t=l.n(i),c=l(6981),r=l(6681),n=l(5632),d=l(8096),o=l.n(d),m=l(9097),u=l.n(m),h=l(6437);let __WEBPACK_DEFAULT_EXPORT__=({layout:e,id:s,item:l,title:d,newLabel:m,sale:x,price:p,discount:j,stock:g,images:N,addCart:b,addCompare:v,addWish:f,hoverEffect:k})=>{let y=(0,i.useContext)(r.$R),{selectedCurr:_}=y,[C,E]=(0,i.useState)(""),imgChange=e=>{E(e)},$=t().useRef(),P=(0,n.useRouter)(),[w,A]=(0,i.useState)(!1),[T,D]=(0,i.useState)(1),[R,S]=(0,i.useState)("InStock"),F=d.split(" ").join(""),changeColorVar=e=>{$.current.slickGoTo(e)},clickProductDetail=()=>{P.push(`/product-details/${s}-${F}`)};return console.log(N,"--------------- images -----------------"),(0,a.jsxs)(i.Fragment,{children:[(0,a.jsxs)("div",{className:"product-box",children:[(0,a.jsxs)("div",{className:"product-imgbox",children:[a.jsx("div",{style:{backgroundColor:"red",width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center"},className:"",onClick:clickProductDetail,children:a.jsx(h.Z,{src:`/images/${C||N[0].src}`,className:"img-fluid",alt:"product"})}),a.jsx("ul",{className:"product-thumb-list",children:N.map((e,s)=>a.jsx("li",{className:`grid_thumb_img ${e.src===C?"active":""}`,children:a.jsx("a",{children:a.jsx(h.Z,{src:`/images/${e.src}`,className:"img-fluid",onMouseEnter:()=>imgChange(e.src),alt:e.src,onClick:()=>{imgChange(e.src)}})})},s))}),a.jsx("div",{className:`product-icon ${k}`,children:a.jsx("button",{onClick:()=>b(),children:a.jsx("a",{style:{color:"black"},children:"Add to cart"})})}),m&&a.jsx("div",{className:"new-label1",children:a.jsx("div",{children:"new"})})]}),a.jsx("div",{className:"product-detail detail-inline ",children:(0,a.jsxs)("div",{className:"detail-title",children:[(0,a.jsxs)("div",{className:"detail-left",children:[(0,a.jsxs)("ul",{className:"rating-star",children:[a.jsx("i",{className:"fa fa-star"}),a.jsx("i",{className:"fa fa-star"}),a.jsx("i",{className:"fa fa-star"}),a.jsx("i",{className:"fa fa-star"}),a.jsx("i",{className:"fa fa-star"})]}),"list-view"===e?a.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}):"",a.jsx(u(),{href:`/product-details/${s}-${F}`,children:a.jsx("h6",{className:"price-title",children:d})})]}),(0,a.jsxs)("div",{className:"detail-right",children:[(0,a.jsxs)("div",{className:"check-price",children:[_.symbol,(p*_.value).toFixed(2)," "]}),a.jsx("div",{className:"price",children:(0,a.jsxs)("div",{className:"price",children:[_.symbol,((p-p*(j/100))*_.value).toFixed(2)]})})]})]})})]}),a.jsx(c.Modal,{className:"fade bd-example-modal-lg theme-modal show quick-view-modal",isOpen:w,toggle:()=>A(!w),centered:!0,size:"lg",children:(0,a.jsxs)(c.ModalBody,{children:[a.jsx("button",{type:"button",className:"close",onClick:()=>A(!w),children:a.jsx("span",{children:"\xd7"})}),(0,a.jsxs)("div",{className:"row",children:[a.jsx("div",{className:"col-lg-6 col-xs-12",children:a.jsx(o(),{ref:e=>$.current=e,children:l&&l.images.map((e,s)=>a.jsx("div",{children:a.jsx(c.Media,{src:`/images/${e.src}`,alt:"",className:"img-fluid  image_zoom_cls-0"})},s))})}),a.jsx("div",{className:"col-lg-6 rtl-text",children:(0,a.jsxs)("div",{className:"product-right",children:[a.jsx("h2",{children:l?.title}),(0,a.jsxs)("h3",{children:["$",l?.price]}),a.jsx("ul",{className:"color-variant",children:[].map((e,s)=>a.jsx("li",{className:e.color,title:e.color,onClick:()=>changeColorVar(s)},s))}),(0,a.jsxs)("div",{className:"border-product",children:[a.jsx("h6",{className:"product-title",children:"product details"}),a.jsx("p",{children:l?.description})]}),(0,a.jsxs)("div",{className:"product-description border-product",children:[a.jsx("div",{className:"size-box",children:a.jsx("ul",{children:[].map((e,s)=>a.jsx("li",{children:a.jsx("a",{href:"#",onClick:e=>e.preventDefault(),children:e})},s))})}),"InStock"!==R?a.jsx("span",{className:"instock-cls",children:R}):"",a.jsx("h6",{className:"product-title",children:"quantity"}),a.jsx("div",{className:"qty-box",children:(0,a.jsxs)("div",{className:"input-group",children:[a.jsx("span",{className:"input-group-prepend",children:a.jsx("button",{type:"button",className:"btn quantity-left-minus",onClick:()=>{T>1&&(D(T-1),S("InStock"))},children:a.jsx("i",{className:"ti-angle-left"})})}),a.jsx("input",{type:"text",name:"quantity",className:"form-control input-number",value:T,onChange:e=>{D(parseInt(e.target.value))}}),a.jsx("span",{className:"input-group-prepend",children:a.jsx("button",{type:"button",className:"btn quantity-right-plus",onClick:()=>{g>T?D(T+1):S("Out of Stock !")},children:a.jsx("i",{className:"ti-angle-right"})})})]})})]}),(0,a.jsxs)("div",{className:"product-buttons",children:[a.jsx("a",{href:"#",className:"btn btn-normal",onClick:()=>b(l,T),children:"add to cart"}),a.jsx("a",{href:"#",className:"btn btn-normal",onClick:()=>clickProductDetail(),children:"view detail"})]})]})})]})]})})]})}}};