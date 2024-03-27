"use strict";exports.id=671,exports.ids=[671],exports.modules={6437:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(997),l=i(6689);let __WEBPACK_DEFAULT_EXPORT__=e=>{let s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let i=s.current;if(i){let s=i.parentElement,t=e.src;s.classList.add("bg-size"),i.style.display="none",s.setAttribute("style",`
        background-image: url(${t});
        background-size:cover; 
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `)}},[e.src]),t.jsx("img",{ref:s,...e,layout:"fill",alt:""})}},755:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(997),l=i(6689),a=i(6981),c=i(3118),n=i(7125),r=i.n(n),d=i(6681),o=i(5632),u=i(9097),m=i.n(u),p=i(6437);let __WEBPACK_DEFAULT_EXPORT__=e=>{let{cartItems:s,updateQty:i,removeFromCart:n}=(0,l.useContext)(c.A),u=(0,l.useContext)(d.$R),[h,x]=(0,l.useState)(!1),[j,N]=(0,l.useState)(1),[g,b]=(0,l.useState)("InStock"),v=(0,o.useRouter)(),[f,y]=(0,l.useState)(!1),_=[],{selectedCurr:k}=u,C=e.title.split(" ").join(""),minusQty=()=>{if(j>1){b("InStock");let s=j-1;N(s),i(e.item,s)}else x(!1),n(e)},plusQty=()=>{if(e.stock>=j){let s=j+1;N(s),i(e.item,s)}else b("Out of Stock !")},QuickView=()=>{y(!f)},clickProductDetail=()=>{v.push(`/product-details/${e.id}-${C}`)};return(0,l.useEffect)(()=>{s.filter(s=>{s.id===e.item.id&&N(s.qty)})}),(0,t.jsxs)(l.Fragment,{children:[t.jsx(r(),{className:"masonary-banner-main",children:(0,t.jsxs)("div",{className:"product-box",children:[(0,t.jsxs)("div",{className:"product-imgbox",children:[t.jsx("div",{className:"product-front",onClick:clickProductDetail,children:t.jsx(p.Z,{src:`/images/${e.images[0].src}`,className:"img-fluid",alt:"product"})}),(0,t.jsxs)("div",{className:"product-icon",children:[t.jsx("button",{onClick:()=>e.addCart(),children:t.jsx("i",{className:"ti-bag","aria-hidden":"true"})}),t.jsx("a",{onClick:()=>e.addWish(),children:t.jsx("i",{className:"ti-heart","aria-hidden":"true"})}),t.jsx("a",{href:"#","data-toggle":"modal","data-target":"#quick-view",title:"Quick View",onClick:()=>QuickView(),children:t.jsx("i",{className:"ti-search","aria-hidden":"true"})}),t.jsx("a",{href:"#",title:"Compare",onClick:()=>e.addCompare(),children:t.jsx("i",{className:"ti-reload","aria-hidden":"true"})})]}),e.newLabel&&t.jsx("div",{className:"new-label1",children:t.jsx("div",{children:"new"})}),e.sale&&t.jsx("div",{className:"on-sale1",children:"on sale"}),e.stock<=0?t.jsx("span",{children:"Out Of Stock"}):"","InStock"!==g?t.jsx("span",{children:"Out Of Stock"}):""]}),(0,t.jsxs)("div",{className:"product-detail detail-center1",children:[(0,t.jsxs)("ul",{className:"rating-star",children:[t.jsx("li",{children:t.jsx("i",{className:"fa fa-star"})}),t.jsx("li",{children:t.jsx("i",{className:"fa fa-star"})}),t.jsx("li",{children:t.jsx("i",{className:"fa fa-star"})}),t.jsx("li",{children:t.jsx("i",{className:"fa fa-star"})}),t.jsx("li",{children:t.jsx("i",{className:"fa fa-star"})})]}),t.jsx(m(),{href:`/product-details/${e.id}-${C}`,children:t.jsx("h6",{className:"price-title",children:e.title})}),(0,t.jsxs)("span",{className:"detail-price",children:[k.symbol,(e.price*k.value).toFixed(2),(0,t.jsxs)("span",{children:[k.symbol,((e.price-e.price*(e.discount/100))*k.value).toFixed(2)]})]})]}),(0,t.jsxs)("div",{className:"addtocart_btn",children:[t.jsx("button",{className:"add-button add_cart",title:"Add to cart",onClick:()=>{e.stock>0&&(x(!0),i(e,j))},children:"add to cart"}),t.jsx("div",{className:`qty-box cart_qty ${h?"open":""}`,children:(0,t.jsxs)("div",{className:"input-group",children:[t.jsx("button",{type:"button",className:"btn quantity-left-minus","data-type":"minus","data-field":"",onClick:minusQty,children:t.jsx("i",{className:"fa fa-minus","aria-hidden":"true"})}),t.jsx(a.Input,{type:"text",name:"quantity",value:j,className:"form-control input-number qty-input",onChange:()=>{}}),t.jsx("button",{type:"button",className:"btn quantity-right-plus","data-type":"plus","data-field":"",onClick:plusQty,children:t.jsx("i",{className:"fa fa-plus","aria-hidden":"true"})})]})})]})]})}),e.item.variants&&e.item.variants.map(e=>{!_.find(s=>s===e.size)&&e.size&&_.push(e.size)}),t.jsx(a.Modal,{className:"fade bd-example-modal-lg theme-modal show quick-view-modal",isOpen:f,toggle:()=>y(!f),centered:!0,size:"lg",children:(0,t.jsxs)(a.ModalBody,{children:[t.jsx("button",{type:"button",className:"close",onClick:()=>y(!f),children:t.jsx("span",{children:"\xd7"})}),(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-lg-6 col-xs-12",children:t.jsx("div",{className:"quick-view-img",children:t.jsx("img",{src:`/images/${(e?.item?.variants,e?.item?.images[0].src)}`,alt:"",className:"img-fluid"})})}),t.jsx("div",{className:"col-lg-6 rtl-text",children:(0,t.jsxs)("div",{className:"product-right",children:[t.jsx("h2",{children:e?.item?.title}),(0,t.jsxs)("h3",{children:[k.symbol,e?.item?.price*k.value]}),(0,t.jsxs)("div",{className:"border-product",children:[t.jsx("h6",{className:"product-title",children:"product details"}),t.jsx("p",{children:e?.item?.description})]}),(0,t.jsxs)("div",{className:"product-description border-product",children:[t.jsx("div",{className:"size-box",children:t.jsx("ul",{children:_.map((e,s)=>t.jsx("li",{children:t.jsx("a",{href:"#",onClick:e=>e.preventDefault(),children:e})},s))})}),"InStock"!==g?t.jsx("span",{className:"instock-cls",children:"Out Of Stock"}):"",t.jsx("h6",{className:"product-title",children:"quantity"}),t.jsx("div",{className:"qty-box",children:(0,t.jsxs)("div",{className:"input-group",children:[t.jsx("span",{className:"input-group-prepend",children:t.jsx("button",{type:"button",className:"btn quantity-left-minus",onClick:minusQty,children:t.jsx("i",{className:"ti-angle-left"})})}),t.jsx("input",{type:"text",name:"quantity",className:"form-control input-number",value:j,onChange:()=>i(e.item,j)}),t.jsx("span",{className:"input-group-prepend",children:t.jsx("button",{type:"button",className:"btn quantity-right-plus",onClick:plusQty,children:t.jsx("i",{className:"ti-angle-right"})})})]})})]}),(0,t.jsxs)("div",{className:"product-buttons",children:[t.jsx("a",{href:"#",className:"btn btn-normal",onClick:()=>e.addCart(),children:"add to cart"}),t.jsx("a",{href:"#",className:"btn btn-normal",onClick:()=>clickProductDetail(),children:"view detail"})]})]})})]})]})})]})}},9676:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(997),l=i(6689),a=i.n(l),c=i(9114),n=i(6981),r=i(755),d=i(8096),o=i.n(d),u=i(3118),m=i(9027),p=i(2459),h=i(9767),x={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let j=c.gql`
  query getProducts($type: CategoryType, $limit: Int!) {
    products(type: $type, limit: $limit) {
      items {
        id
        title
        type
        collection {
          collectionName
        }
      }
    }
  }
`,N=c.gql`
  query getCollection($collection: String) {
    collection(collec: $collection) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        image_id
        id
        alt
        src
      }
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=({type:e})=>{let{addToWish:s}=a().useContext(m.j),{addToCart:i}=a().useContext(u.A),{addToCompare:d}=a().useContext(h.S),[g,b]=(0,l.useState)("new products"),v=[];var{loading:f,data:y}=(0,c.useQuery)(j,{variables:{limit:235}}),{data:_}=(0,c.useQuery)(N,{variables:{collection:g}});let k=[];return e.map(e=>{_&&!f&&k.push(_?.collection.filter(s=>s.type===e))}),(0,t.jsxs)(t.Fragment,{children:[y&&y.products.items.map(s=>{e.map(e=>{s.type===e&&s.collection.map(e=>{let s=v.indexOf(e.collectionName);-1===s&&"special products"!==e.collectionName&&v.push(e.collectionName)})})}),t.jsx("section",{className:"section-pt-space",children:t.jsx("div",{className:"tab-product-main",children:t.jsx("div",{className:"tab-prodcut-contain",children:t.jsx(n.Nav,{tabs:!0,children:v.map((e,s)=>t.jsx(n.NavItem,{children:t.jsx(n.NavLink,{className:g===e?"active":"",onClick:()=>b(e),children:e})},s))})})})}),t.jsx("section",{className:"section-py-space pb-0 ratio_square",children:t.jsx("div",{className:"custom-container addtocart_count",children:t.jsx(n.Row,{children:t.jsx(n.Col,{className:"pe-0",children:t.jsx(n.TabContent,{activeTab:g,children:t.jsx(n.TabPane,{tabId:g,children:t.jsx("div",{className:"product product-slide-6 product-m no-arrow",children:t.jsx("div",{children:y&&y.products.items&&0!==y.products.items.length&&!f?t.jsx(o(),{...x,children:_&&k.map(e=>e.map((e,l)=>t.jsx("div",{children:t.jsx(r.Z,{newLabel:e.new,...e,item:e,addCart:()=>i(e),addWish:()=>s(e),addCompare:()=>d(e)})},l)))}):t.jsx(p.O,{})})})})})})})})})]})}},147:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(997),l=i(6689),a=i.n(l),c=i(9114),n=i(755),r=i(8096),d=i.n(r),o=i(3118),u=i(9027),m=i(6981),p=i(2459),h=i(9767),x={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let j=c.gql`
  query getCollection($collection: String) {
    collection(collec: $collection) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        image_id
        id
        alt
        src
      }
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=({type:e})=>{let{addToWish:s}=a().useContext(u.j),{addToCart:i}=a().useContext(o.A),{addToCompare:l}=a().useContext(h.S);var{loading:r,data:N}=(0,c.useQuery)(j,{variables:{collection:"special products"}}),g=[];return N&&N.collection&&N.collection.length>0&&!r&&g.push(N.collection.filter(s=>s.type===e)),(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"title4 section-my-space",children:(0,t.jsxs)("h4",{children:["trending ",t.jsx("span",{children:"product"})]})}),t.jsx("section",{className:" product  section-big-pb-space",children:t.jsx("div",{className:"custom-container  addtocart_count ",children:t.jsx(m.Row,{children:t.jsx(m.Col,{className:"pe-0",children:t.jsx("div",{className:"product-slide-6 no-arrow",children:N&&N.collection&&0!==N.collection.length&&!r?t.jsx(d(),{...x,children:N&&g.map(e=>e.map((e,a)=>t.jsx("div",{children:t.jsx(n.Z,{newLabel:e.new,...e,item:e,addCart:()=>i(e),addCompare:()=>l(e),addWish:()=>s(e)})},a)))}):t.jsx(p.O,{})})})})})})]})}}};