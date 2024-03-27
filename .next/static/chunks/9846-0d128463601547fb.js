"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9846],{11478:function(e,s,a){var i=a(52322);a(2784),s.Z=e=>{let{spanClass:s}=e;return(0,i.jsx)("div",{className:"d-xxl-flex d-none ".concat("contact-item"!==s?"contact-block":""),children:(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("i",{className:"fa fa-volume-control-phone"}),(0,i.jsxs)("span",{className:s,children:["call us",(0,i.jsx)("span",{children:"123-456-76890"})]})]})})}},45817:function(e,s,a){var i=a(52322),l=a(2784),c=a(68382),n=a(69311);s.Z=()=>{let e=(0,l.useContext)(n.pl),{menuResponsive:s,setMenuResponsive:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"menu-overlay ".concat(s?"active":""),onClick:()=>{a(!s),document.body.style.overflow="visible"}}),(0,i.jsx)("div",{className:"menu-block",children:(0,i.jsxs)("nav",{id:"main-nav",children:[(0,i.jsx)("div",{className:"toggle-nav",onClick:()=>{a(!s),document.body.style.overflow="hidden"},children:(0,i.jsx)("i",{className:"fa fa-bars sidebar-bar"})}),(0,i.jsx)("ul",{id:"main-menu",className:"sm pixelstrap sm-horizontal ".concat(s?"menu-open":""),children:(0,i.jsx)(c.Z,{})})]})})]})}},21820:function(e,s,a){var i=a(52322);a(2784);var l=a(82308),c=a(15228),n=a(15297),t=a(2380);s.Z=()=>{let{t:e}=(0,t.$)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(n.Z,{md:"12",lg:"8",children:(0,i.jsxs)("div",{className:"deal-banner-containe",children:[(0,i.jsx)("h2",{children:e("deal")}),(0,i.jsx)("h1",{children:e("dealText")})]})}),(0,i.jsx)(n.Z,{md:"12",lg:"4",children:(0,i.jsx)("div",{className:"deal-banner-containe",children:(0,i.jsx)("div",{className:"deal-btn",children:(0,i.jsx)("a",{className:"btn-white",children:"View more"})})})})]})})})}},61120:function(e,s,a){var i=a(73235),l=a(52322),c=a(2784),n=a(15228),t=a(15297),r=a(24903),d=a(57637),o=a(67606),m=a(35629),x=a(31205),h=a(1285),j=a(32288),u=a(79278),p=a(81548),N=a(90592),v=a(23467),b=a(96681),f=a(61466),g=a(39097),k=a.n(g),y=a(69027),C=a(89767),w=a(5632);function _templateObject(){let e=(0,i._)(["\n  query getProducts($type: CategoryType, $limit: Int!) {\n    products(type: $type, limit: $limit) {\n      items {\n        id\n        title\n        collection {\n          collectionName\n        }\n      }\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  query getCollection($collection: String) {\n    collection(collec: $collection) {\n      id\n      title\n      price\n      discount\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n    }\n  }\n"]);return _templateObject1=function(){return e},e}var Z={dots:!1,infinite:!0,speed:300,arrows:!1,slidesToShow:5,centerPadding:"15px",responsive:[{breakpoint:1470,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:820,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};let S=(0,p.Ps)(_templateObject()),_=(0,p.Ps)(_templateObject1());s.Z=()=>{let e=(0,c.useContext)(b.$R),{selectedCurr:s}=e,[a,i]=(0,c.useState)("new products"),[p,g]=(0,c.useState)(!1),[T,q]=(0,c.useState)(1),[O,Q]=(0,c.useState)("InStock"),$=(0,w.useRouter)(),{addToWish:F}=(0,c.useContext)(y.j),{addToCart:P}=(0,c.useContext)(f.A),{addToCompare:I}=(0,c.useContext)(C.S),V=[],z=[],D=(0,c.useRef)(),R=[],changeColorVar=e=>{D.current.slickGoTo(e)},minusQty=()=>{T>1&&(q(T-1),Q("InStock"))},plusQty=e=>{e>T?q(T+1):Q("Out of Stock !")},changeQty=e=>{q(parseInt(e.target.value))},QuickView=()=>{g(!p)},clickProductDetail=e=>{$.push("/product-details/".concat(e.id)+"-"+"".concat(e.titleProps))};var{loading:A,data:E}=(0,N.a)(S,{variables:{type:"ALL",limit:235}}),{data:L}=(0,N.a)(_,{variables:{collection:a}});return(0,l.jsx)("section",{className:"ratio_square",children:(0,l.jsx)("div",{className:"custom-container  section-pb-space",children:(0,l.jsxs)("div",{className:"b-g-white px-3 pb-3",children:[E&&!A&&E.products.items.map(e=>{e.collection.map(e=>{let s=R.indexOf(e.collectionName);-1===s&&R.push(e.collectionName)})}),(0,l.jsx)(n.Z,{children:(0,l.jsxs)(t.Z,{className:"p-0",children:[(0,l.jsx)("div",{className:"theme-tab product",children:(0,l.jsx)(r.Z,{tabs:!0,className:"tab-title media-tab",children:R.slice(0,4).map((e,s)=>(0,l.jsx)(d.Z,{children:(0,l.jsx)(o.Z,{className:a===e?"active":"",onClick:()=>i(e),children:e})},s))})}),(0,l.jsx)("div",{className:"tab-content-cls",children:(0,l.jsx)(m.Z,{activeTab:a,children:(0,l.jsx)(x.Z,{tabId:a,children:(0,l.jsx)(v.Z,{...Z,children:L&&L.collection.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"media-banner media-banner-1 border-0",children:[(0,l.jsx)("div",{className:"media-banner-box",children:(0,l.jsxs)("div",{className:"media",children:[(0,l.jsx)(k(),{href:"/product-details/".concat(e.id,"-").concat(e.title.split(" ").join("")),children:(0,l.jsx)("img",{src:"/images/".concat(e.images[0]?e.images[0].src:"pro3/3.jpg"),width:"80",height:"80",className:"img-fluid ",alt:"banner"})}),(0,l.jsx)("div",{className:"media-body",children:(0,l.jsx)("div",{className:"media-contant",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"product-detail",children:[(0,l.jsxs)("ul",{className:"rating",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]}),(0,l.jsx)(k(),{href:"/product-details/".concat(e.id,"-").concat(e.title.split(" ").join("")),children:(0,l.jsx)("p",{children:e.title})}),(0,l.jsxs)("h6",{children:[" ",s.symbol,((e.price-e.price*(e.discount/100))*s.value).toFixed(2)," ",(0,l.jsxs)("span",{children:[s.symbol,(e.price*s.value).toFixed(2)]})]})]}),(0,l.jsxs)("div",{className:"cart-info",children:[(0,l.jsx)("button",{onClick:()=>P(e),children:(0,l.jsx)("i",{className:"ti-bag"})}),(0,l.jsx)("a",{onClick:()=>F(e),children:(0,l.jsx)("i",{className:"ti-heart","aria-hidden":"true"})}),(0,l.jsx)("a",{href:"#",title:"Quick View",onClick:()=>QuickView(),children:(0,l.jsx)("i",{className:"ti-search","aria-hidden":"true"})}),(0,l.jsx)("a",{href:"#",title:"Compare",onClick:()=>I(e),children:(0,l.jsx)("i",{className:"fa fa-exchange","aria-hidden":"true"})})]})]})})})]})}),(0,l.jsx)("div",{className:"media-banner-box",children:(0,l.jsxs)("div",{className:"media",children:[(0,l.jsx)(h.Z,{src:"/images/".concat(e.images[1]?e.images[1].src:"pro3/3.jpg"),width:"80",height:"80",className:"img-fluid ",alt:"banner"}),(0,l.jsx)("div",{className:"media-body",children:(0,l.jsx)("div",{className:"media-contant",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"rating",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]}),(0,l.jsx)("a",{href:"/product-details/".concat(e.id,"-").concat(e.title.split(" ").join("")),children:(0,l.jsx)("p",{children:e.title})}),(0,l.jsxs)("h6",{children:[" ",s.symbol,((e.price-e.price*(e.discount/100))*s.value).toFixed(2)," ",(0,l.jsxs)("span",{children:[s.symbol,(e.price*s.value).toFixed(2)]})]})]})})})]})}),(0,l.jsx)("div",{className:"media-banner-box",children:(0,l.jsxs)("div",{className:"media",children:[(0,l.jsx)(h.Z,{src:"/images/".concat(e.images[2]?e.images[2].src:"pro3/3.jpg"),width:"80",height:"80",className:"img-fluid ",alt:"banner"}),(0,l.jsx)("div",{className:"media-body",children:(0,l.jsx)("div",{className:"media-contant",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"rating",children:[(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"}),(0,l.jsx)("i",{className:"fa fa-star"})]}),(0,l.jsx)("a",{href:"/product-details/".concat(e.id,"-").concat(e.title.split(" ").join("")),children:(0,l.jsx)("p",{children:e.title})}),(0,l.jsxs)("h6",{children:[" ",s.symbol,((e.price-e.price*(e.discount/100))*s.value).toFixed(2)," ",(0,l.jsxs)("span",{children:[s.symbol,(e.price*s.value).toFixed(2)]})]})]})})})]})})]}),(0,l.jsx)(j.Z,{className:"fade bd-example-modal-lg theme-modal show quick-view-modal",isOpen:p,toggle:()=>g(!p),centered:!0,size:"lg",children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)("button",{type:"button",className:"close",onClick:()=>g(!p),children:(0,l.jsx)("span",{children:"\xd7"})}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-xs-12",children:(0,l.jsx)(v.Z,{ref:e=>D.current=e,children:e&&e.images.map((e,s)=>(0,l.jsx)("div",{children:(0,l.jsx)(h.Z,{src:"/images/".concat(e.src),alt:"",className:"img-fluid  image_zoom_cls-0"})},s))})}),(0,l.jsx)("div",{className:"col-lg-6 rtl-text",children:(0,l.jsxs)("div",{className:"product-right",children:[(0,l.jsx)("h2",{children:null==e?void 0:e.title}),(0,l.jsxs)("h3",{children:["$",null==e?void 0:e.price]}),(0,l.jsx)("ul",{className:"color-variant",children:z.map((e,s)=>(0,l.jsx)("li",{className:e.color,title:e.color,onClick:()=>changeColorVar(s)},s))}),(0,l.jsxs)("div",{className:"border-product",children:[(0,l.jsx)("h6",{className:"product-title",children:"product details"}),(0,l.jsx)("p",{children:null==e?void 0:e.description})]}),(0,l.jsxs)("div",{className:"product-description border-product",children:[(0,l.jsx)("div",{className:"size-box",children:(0,l.jsx)("ul",{children:V.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:e})},s))})}),"InStock"!==O?(0,l.jsx)("span",{className:"instock-cls",children:O}):"",(0,l.jsx)("h6",{className:"product-title",children:"quantity"}),(0,l.jsx)("div",{className:"qty-box",children:(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("span",{className:"input-group-prepend",children:(0,l.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:minusQty,children:(0,l.jsx)("i",{className:"ti-angle-left"})})}),(0,l.jsx)("input",{type:"text",name:"quantity",className:"form-control input-number",value:T,onChange:changeQty}),(0,l.jsx)("span",{className:"input-group-prepend",children:(0,l.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:()=>plusQty(e.stock),children:(0,l.jsx)("i",{className:"ti-angle-right"})})})]})})]}),(0,l.jsxs)("div",{className:"product-buttons",children:["s",(0,l.jsx)("a",{href:"#",className:"btn btn-normal",onClick:()=>P(e,T),children:"add to cart"}),(0,l.jsx)("a",{href:"#",className:"btn btn-normal",onClick:()=>clickProductDetail(e),children:"view detail"})]})]})})]})]})})]},a))})})})})]})})]})})})}}}]);