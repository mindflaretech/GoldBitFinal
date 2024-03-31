"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{10949:function(e,s,i){var t=i(74512),n=i(32735);s.Z=e=>{let s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let i=s.current;if(i){let s=i.parentElement,t=e.src;s.classList.add("bg-size"),i.style.display="none",s.setAttribute("style","\n        background-image: url(".concat(t,");\n        background-size:cover; \n        background-position: center;\n        background-repeat: no-repeat;\n        display: block;\n        "))}},[e.src]),(0,t.jsx)("img",{ref:s,...e,layout:"fill",alt:""})}},42564:function(e,s,i){var t=i(74512),n=i(32735),l=i(67283),a=i(997),c=i(90640),d=i(46631),r=i(89302),o=i(92314),u=i(17236),m=i(79266),h=i(56793),x=i(82245),p=i(45909),j=i(46582),v=i(88322),N=i(45350),b=i(24526),g=i(42701);s.Z=e=>{let{cartPopupPosition:s,display:i,category:f,categoryHeaderClass:y,layoutLogo:k}=e,C=(0,n.useContext)(g.pl),{setLeftMenu:Z,leftMenu:S}=C;return(0,t.jsx)(n.Fragment,{children:(0,t.jsxs)("header",{children:[(0,t.jsx)("div",{className:"mobile-fix-option"}),(0,t.jsx)(r.Z,{}),(0,t.jsx)("div",{className:"layout-header1",children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(c.Z,{md:"12",children:(0,t.jsxs)("div",{className:"main-menu-block",children:[(0,t.jsxs)("div",{className:"menu-left",children:[(0,t.jsx)("div",{className:"sm-nav-block",onClick:()=>{Z(!S),document.body.style.overflow="hidden"},children:(0,t.jsx)("span",{className:"sm-nav-btn",children:(0,t.jsx)("i",{className:"fa fa-bars"})})}),(0,t.jsx)("div",{className:"brand-logo",children:(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(d.Z,{src:"/images/".concat(k,"/logo/logo.png"),className:"img-fluid",alt:"logo-header"})})})]}),(0,t.jsxs)("div",{className:"menu-right",children:[(0,t.jsx)("div",{className:"toggle-block",children:(0,t.jsx)(v.Z,{})}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"icon-nav",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)(o.Z,{}),(0,t.jsx)(u.Z,{}),(0,t.jsx)(N.Z,{}),(0,t.jsx)(b.Z,{})]}),(0,t.jsx)(m.Z,{position:s,cartDisplay:i,layout:"layout2"})]})})]})]})})})})}),(0,t.jsx)("div",{className:"category-header ".concat(y),children:(0,t.jsx)("div",{className:"custom-container",children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{className:"navbar-menu",children:[(0,t.jsxs)("div",{className:"category-left",children:[(0,t.jsx)(h.Z,{category:f}),(0,t.jsx)(x.Z,{})]}),(0,t.jsxs)("div",{className:"category-right",children:[(0,t.jsx)(p.Z,{spanClass:""}),(0,t.jsx)(j.Z,{})]})]})})})})})]})})}},18048:function(e,s,i){var t=i(74512),n=i(32735),l=i(46538),a=i(26622),c=i(42665),d=i(31294),r=i(26273),o=i(87693),u=i(35837),m=i(89218),h=i.n(m),x=i(10949);s.Z=e=>{var s,i,m,p,j,v;let{cartItems:N,updateQty:b,removeFromCart:g}=(0,n.useContext)(d.A),f=(0,n.useContext)(o.$R),[y,k]=(0,n.useState)(!1),[C,Z]=(0,n.useState)(1),[S,w]=(0,n.useState)("InStock"),_=(0,u.useRouter)(),[T,O]=(0,n.useState)(!1),q=[],{selectedCurr:z}=f,Q=e.title.split(" ").join(""),minusQty=()=>{if(C>1){w("InStock");let s=C-1;Z(s),b(e.item,s)}else k(!1),g(e)},plusQty=()=>{if(e.stock>=C){let s=C+1;Z(s),b(e.item,s)}else w("Out of Stock !")},QuickView=()=>{O(!T)},clickProductDetail=()=>{_.push("/product-details/".concat(e.id)+"-"+"".concat(Q))};return(0,n.useEffect)(()=>{N.filter(s=>{s.id===e.item.id&&Z(s.qty)})}),(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(r.Z,{className:"masonary-banner-main",children:(0,t.jsxs)("div",{className:"product-box",children:[(0,t.jsxs)("div",{className:"product-imgbox",children:[(0,t.jsx)("div",{className:"product-front",onClick:clickProductDetail,children:(0,t.jsx)(x.Z,{src:"/images/".concat(e.images[0].src),className:"img-fluid",alt:"product"})}),(0,t.jsxs)("div",{className:"product-icon",children:[(0,t.jsx)("button",{onClick:()=>e.addCart(),children:(0,t.jsx)("i",{className:"ti-bag","aria-hidden":"true"})}),(0,t.jsx)("a",{onClick:()=>e.addWish(),children:(0,t.jsx)("i",{className:"ti-heart","aria-hidden":"true"})}),(0,t.jsx)("a",{href:"#","data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:()=>QuickView(),children:(0,t.jsx)("i",{className:"ti-search","aria-hidden":"true"})}),(0,t.jsx)("a",{href:"#",title:"Compare",onClick:()=>e.addCompare(),children:(0,t.jsx)("i",{className:"ti-reload","aria-hidden":"true"})})]}),e.newLabel&&(0,t.jsx)("div",{className:"new-label1",children:(0,t.jsx)("div",{children:"new"})}),e.sale&&(0,t.jsx)("div",{className:"on-sale1",children:"on sale"}),e.stock<=0?(0,t.jsx)("span",{children:"Out Of Stock"}):"","InStock"!==S?(0,t.jsx)("span",{children:"Out Of Stock"}):""]}),(0,t.jsxs)("div",{className:"product-detail detail-center1",children:[(0,t.jsxs)("ul",{className:"rating-star",children:[(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-star"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-star"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-star"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-star"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{className:"fa fa-star"})})]}),(0,t.jsx)(h(),{href:"/product-details/".concat(e.id)+"-"+"".concat(Q),children:(0,t.jsx)("h6",{className:"price-title",children:e.title})}),(0,t.jsxs)("span",{className:"detail-price",children:[z.symbol,(e.price*z.value).toFixed(2),(0,t.jsxs)("span",{children:[z.symbol,((e.price-e.price*(e.discount/100))*z.value).toFixed(2)]})]})]}),(0,t.jsxs)("div",{className:"addtocart_btn",children:[(0,t.jsx)("button",{className:"add-button add_cart",title:"Add to cart",onClick:()=>{e.stock>0&&(k(!0),b(e,C))},children:"add to cart"}),(0,t.jsx)("div",{className:"qty-box cart_qty ".concat(y?"open":""),children:(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("button",{type:"button",className:"btn quantity-left-minus","data-type":"minus","data-field":"",onClick:minusQty,children:(0,t.jsx)("i",{className:"fa fa-minus","aria-hidden":"true"})}),(0,t.jsx)(l.Z,{type:"text",name:"quantity",value:C,className:"form-control input-number qty-input",onChange:()=>{}}),(0,t.jsx)("button",{type:"button",className:"btn quantity-right-plus","data-type":"plus","data-field":"",onClick:plusQty,children:(0,t.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})]})})]})]})}),e.item.variants&&e.item.variants.map(e=>{!q.find(s=>s===e.size)&&e.size&&q.push(e.size)}),(0,t.jsx)(a.Z,{className:"fade bd-example-modal-lg theme-modal show quick-view-modal",isOpen:T,toggle:()=>O(!T),centered:!0,size:"lg",children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("button",{type:"button",className:"close",onClick:()=>O(!T),children:(0,t.jsx)("span",{children:"\xd7"})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-xs-12",children:(0,t.jsx)("div",{className:"quick-view-img",children:(0,t.jsx)("img",{src:"/images/".concat((null==e?void 0:null===(s=e.item)||void 0===s?void 0:s.variants)?null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.images[0].src:null==e?void 0:null===(m=e.item)||void 0===m?void 0:m.images[0].src),alt:"",className:"img-fluid"})})}),(0,t.jsx)("div",{className:"col-lg-6 rtl-text",children:(0,t.jsxs)("div",{className:"product-right",children:[(0,t.jsx)("h2",{children:null==e?void 0:null===(p=e.item)||void 0===p?void 0:p.title}),(0,t.jsxs)("h3",{children:[z.symbol,(null==e?void 0:null===(j=e.item)||void 0===j?void 0:j.price)*z.value]}),(0,t.jsxs)("div",{className:"border-product",children:[(0,t.jsx)("h6",{className:"product-title",children:"product details"}),(0,t.jsx)("p",{children:null==e?void 0:null===(v=e.item)||void 0===v?void 0:v.description})]}),(0,t.jsxs)("div",{className:"product-description border-product",children:[(0,t.jsx)("div",{className:"size-box",children:(0,t.jsx)("ul",{children:q.map((e,s)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),children:e})},s))})}),"InStock"!==S?(0,t.jsx)("span",{className:"instock-cls",children:"Out Of Stock"}):"",(0,t.jsx)("h6",{className:"product-title",children:"quantity"}),(0,t.jsx)("div",{className:"qty-box",children:(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("span",{className:"input-group-prepend",children:(0,t.jsx)("button",{type:"button",className:"btn quantity-left-minus",onClick:minusQty,children:(0,t.jsx)("i",{className:"ti-angle-left"})})}),(0,t.jsx)("input",{type:"text",name:"quantity",className:"form-control input-number",value:C,onChange:()=>b(e.item,C)}),(0,t.jsx)("span",{className:"input-group-prepend",children:(0,t.jsx)("button",{type:"button",className:"btn quantity-right-plus",onClick:plusQty,children:(0,t.jsx)("i",{className:"ti-angle-right"})})})]})})]}),(0,t.jsxs)("div",{className:"product-buttons",children:[(0,t.jsx)("a",{href:"#",className:"btn btn-normal",onClick:()=>e.addCart(),children:"add to cart"}),(0,t.jsx)("a",{href:"#",className:"btn btn-normal",onClick:()=>clickProductDetail(),children:"view detail"})]})]})})]})]})})]})}},42797:function(e,s,i){var t=i(16608),n=i(74512),l=i(32735),a=i(54117),c=i(493),d=i(60160),r=i(93636),o=i(70025),u=i(997),m=i(90640),h=i(86714),x=i(9763),p=i(18048),j=i(3766),v=i(31294),N=i(24568),b=i(76532),g=i(58228);function _templateObject(){let e=(0,t._)(["\n  query getProducts($type: CategoryType, $limit: Int!) {\n    products(type: $type, limit: $limit) {\n      items {\n        id\n        title\n        type\n        collection {\n          collectionName\n        }\n      }\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,t._)(["\n  query getCollection($collection: String) {\n    collection(collec: $collection) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n    }\n  }\n"]);return _templateObject1=function(){return e},e}var f={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let y=(0,a.Ps)(_templateObject()),k=(0,a.Ps)(_templateObject1());s.Z=e=>{let{type:s}=e,{addToWish:i}=l.useContext(N.j),{addToCart:t}=l.useContext(v.A),{addToCompare:a}=l.useContext(g.S),[C,Z]=(0,l.useState)("new products"),S=[];var{loading:w,data:_}=(0,c.a)(y,{variables:{limit:235}}),{data:T}=(0,c.a)(k,{variables:{collection:C}});let O=[];return s.map(e=>{T&&!w&&O.push(null==T?void 0:T.collection.filter(s=>s.type===e))}),(0,n.jsxs)(n.Fragment,{children:[_&&_.products.items.map(e=>{s.map(s=>{e.type===s&&e.collection.map(e=>{let s=S.indexOf(e.collectionName);-1===s&&"special products"!==e.collectionName&&S.push(e.collectionName)})})}),(0,n.jsx)("section",{className:"section-pt-space",children:(0,n.jsx)("div",{className:"tab-product-main",children:(0,n.jsx)("div",{className:"tab-prodcut-contain",children:(0,n.jsx)(d.Z,{tabs:!0,children:S.map((e,s)=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(o.Z,{className:C===e?"active":"",onClick:()=>Z(e),children:e})},s))})})})}),(0,n.jsx)("section",{className:"section-py-space pb-0 ratio_square",children:(0,n.jsx)("div",{className:"custom-container addtocart_count",children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(m.Z,{className:"pe-0",children:(0,n.jsx)(h.Z,{activeTab:C,children:(0,n.jsx)(x.Z,{tabId:C,children:(0,n.jsx)("div",{className:"product product-slide-6 product-m no-arrow",children:(0,n.jsx)("div",{children:_&&_.products.items&&0!==_.products.items.length&&!w?(0,n.jsx)(j.Z,{...f,children:T&&O.map(e=>e.map((e,s)=>(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{newLabel:e.new,...e,item:e,addCart:()=>t(e),addWish:()=>i(e),addCompare:()=>a(e)})},s)))}):(0,n.jsx)(b.O,{})})})})})})})})})]})}},86007:function(e,s,i){var t=i(16608),n=i(74512),l=i(32735),a=i(54117),c=i(493),d=i(18048),r=i(3766),o=i(31294),u=i(24568),m=i(997),h=i(90640),x=i(76532),p=i(58228);function _templateObject(){let e=(0,t._)(["\n  query getCollection($collection: String) {\n    collection(collec: $collection) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        image_id\n        id\n        alt\n        src\n      }\n    }\n  }\n"]);return _templateObject=function(){return e},e}var j={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let v=(0,a.Ps)(_templateObject());s.Z=e=>{let{type:s}=e,{addToWish:i}=l.useContext(u.j),{addToCart:t}=l.useContext(o.A),{addToCompare:a}=l.useContext(p.S);var{loading:N,data:b}=(0,c.a)(v,{variables:{collection:"special products"}}),g=[];return b&&b.collection&&b.collection.length>0&&!N&&g.push(b.collection.filter(e=>e.type===s)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"title4 section-my-space",children:(0,n.jsxs)("h4",{children:["trending ",(0,n.jsx)("span",{children:"product"})]})}),(0,n.jsx)("section",{className:" product  section-big-pb-space",children:(0,n.jsx)("div",{className:"custom-container  addtocart_count ",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(h.Z,{className:"pe-0",children:(0,n.jsx)("div",{className:"product-slide-6 no-arrow",children:b&&b.collection&&0!==b.collection.length&&!N?(0,n.jsx)(r.Z,{...j,children:b&&g.map(e=>e.map((e,s)=>(0,n.jsx)("div",{children:(0,n.jsx)(d.Z,{newLabel:e.new,...e,item:e,addCart:()=>t(e),addCompare:()=>a(e),addWish:()=>i(e)})},s)))}):(0,n.jsx)(x.O,{})})})})})})]})}}}]);