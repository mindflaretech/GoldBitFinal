"use strict";exports.id=7590,exports.ids=[7590],exports.modules={7590:(e,i,s)=>{s.d(i,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=s(997),l=s(6689),o=s.n(l),c=s(9114),n=s(6981),a=s(1163),r=s(8096),d=s.n(r),p=s(3118),m=s(9027),u=s(9767),h=s(2459),x={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let j=c.gql`
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
`,v=c.gql`
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
`,__WEBPACK_DEFAULT_EXPORT__=({effect:e})=>{let{addToWish:i}=o().useContext(m.j),{addToCart:s}=o().useContext(p.A),{addToCompare:r}=o().useContext(u.S),[T,g]=(0,l.useState)("new products"),N=[];var{loading:b,data:_}=(0,c.useQuery)(j,{variables:{limit:235}}),{data:y}=(0,c.useQuery)(v,{variables:{collection:T}});return(0,t.jsxs)(t.Fragment,{children:[_&&_.products.items.map(e=>{e.collection.map(e=>{let i=N.indexOf(e.collectionName);-1===i&&""!==e.collectionName&&"special products"!==e.collectionName&&N.push(e.collectionName)})}),t.jsx("section",{className:"section-pt-space",children:t.jsx("div",{className:"tab-product-main",children:t.jsx("div",{className:"tab-prodcut-contain",children:t.jsx(n.Nav,{tabs:!0,children:N.map((e,i)=>t.jsx(n.NavItem,{children:t.jsx(n.NavLink,{className:T===e?"active":"",onClick:()=>g(e),children:e})},i))})})})}),t.jsx("section",{className:"section-py-space ratio_asos product",children:t.jsx("div",{className:"custom-container",children:t.jsx(n.Row,{children:t.jsx(n.Col,{className:"pe-0",children:t.jsx(n.TabContent,{activeTab:T,children:t.jsx(n.TabPane,{tabId:T,children:t.jsx("div",{className:"product product-slide-6 product-m no-arrow",children:t.jsx("div",{children:y&&y.collection.length&&!b?t.jsx(d(),{...x,children:y&&y.collection.map((l,o)=>t.jsx("div",{children:t.jsx(a.Z,{hoverEffect:e,newLabel:l.new,...l,item:l,addCart:()=>s(l),addCompare:()=>r(l),addWish:()=>i(l)})},o))}):t.jsx(h.O,{})})})})})})})})})]})}}};