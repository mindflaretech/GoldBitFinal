"use strict";exports.id=3995,exports.ids=[3995],exports.modules={3995:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997),t=i(6689),r=i.n(t),c=i(6981),a=i(9114),o=i(1583),n=i(4212),d=i(7910),x=i(1294),m=i(4568),p=i(6532),h=i(8228);let u=a.gql`
  query getProducts($type: CategoryType!, $color: String!, $brand: [String!], $priceMax: Int!, $priceMin: Int!, $sortBy: ProductSort, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, color: $color, brand: $brand, priceMax: $priceMax, priceMin: $priceMin, sortBy: $sortBy, indexFrom: $indexFrom, limit: $limit) {
      total
      hasMore
      items {
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
  }
`,__WEBPACK_DEFAULT_EXPORT__=({cols:e,layoutList:s})=>{let{selectedCategory:i,selectedBrands:j,selectedColor:g,selectedPrice:v,setSelectedColor:N,setSelectedBrands:y,setLeftSidebarOpen:C,leftSidebarOpen:_}=(0,t.useContext)(d.f),{addToCart:w}=r().useContext(x.A),{addToWish:$}=r().useContext(m.j),{addToCompare:f}=r().useContext(h.S),[P,S]=(0,t.useState)(e),[R,E]=(0,t.useState)("ASC_ORDER"),[O,M]=(0,t.useState)(10),[b,k]=(0,t.useState)(s),[T,A]=(0,t.useState)(!1),{loading:B,data:F,fetchMore:D}=(0,a.useQuery)(u,{variables:{type:i,color:g,indexFrom:0,limit:O,priceMax:v.max,priceMin:v.min,brand:j,sortBy:R}}),handlePagination=()=>{A(!0),setTimeout(()=>D({variables:{indexFrom:F.products.items.length},updateQuery:(e,{fetchMoreResult:s})=>s?(A(!1),{products:{__typename:e.products.__typename,total:e.products.total,items:[...e.products.items,...s.products.items],hasMore:s.products.hasMore}}):e}),1e3)},removeBrand=e=>{let s=[...j];s.splice(j.indexOf(e),1),y(s)};return l.jsx(c.Col,{className:"collection-content",children:l.jsx("div",{className:"page-main-content",children:l.jsx(c.Row,{children:(0,l.jsxs)(c.Col,{sm:"12",children:[l.jsx(n.Z,{}),(0,l.jsxs)("div",{className:"collection-product-wrapper",children:[l.jsx(c.Row,{children:l.jsx(c.Col,{xs:"12",children:(0,l.jsxs)("ul",{className:"product-tags",children:[!!j.length&&j.map((e,s)=>l.jsx("li",{className:"me-1",children:(0,l.jsxs)("a",{className:"filter_tag",children:[e,l.jsx("i",{className:"ti-close",onClick:()=>removeBrand(e)})]})},s)),!!g.length&&l.jsx("li",{className:"me-1",children:g&&(0,l.jsxs)("a",{className:"filter_tag",children:[g,l.jsx("i",{className:"ti-close",onClick:()=>{N("")}})]})})]})})}),l.jsx("div",{className:"product-top-filter",children:(0,l.jsxs)(c.Row,{children:[l.jsx(c.Col,{xs:"12",children:l.jsx("div",{className:"filter-main-btn",children:(0,l.jsxs)("span",{className:"filter-btn",onClick:()=>{C(!_)},children:[l.jsx("i",{className:"fa fa-filter","aria-hidden":"true"})," Filter"]})})}),l.jsx(c.Col,{xs:"12",children:(0,l.jsxs)("div",{className:"product-filter-content",children:[l.jsx("div",{className:"search-count",children:(0,l.jsxs)("h5",{children:[F?`Showing Products 1-${F.products.items.length} of ${F.products.total}`:"loading"," Result"]})}),l.jsx("div",{className:"collection-view",children:(0,l.jsxs)("ul",{children:[l.jsx("li",{onClick:()=>{k(""),S(e)},children:l.jsx("i",{className:"fa fa-th grid-layout-view"})}),l.jsx("li",{onClick:()=>{k("list-view"),S("col-lg-12")},children:l.jsx("i",{className:"fa fa-list-ul list-layout-view"})})]})}),l.jsx("div",{className:"collection-grid-view",style:"list-view"===b?{opacity:0}:{opacity:1},children:(0,l.jsxs)("ul",{children:[l.jsx("li",{onClick:()=>S("col-lg-6"),children:l.jsx("img",{src:"/images/category/icon/2.png",alt:"",className:"product-2-layout-view"})}),l.jsx("li",{onClick:()=>S("col-lg-4"),children:l.jsx("img",{src:"/images/category/icon/3.png",alt:"",className:"product-3-layout-view"})}),l.jsx("li",{onClick:()=>S("col-lg-3"),children:l.jsx("img",{src:"/images/category/icon/4.png",alt:"",className:"product-4-layout-view"})})]})}),l.jsx("div",{className:"product-page-per-view",children:(0,l.jsxs)("select",{onChange:e=>M(parseInt(e.target.value)),children:[l.jsx("option",{value:"10",children:"10 Products Par Page"}),l.jsx("option",{value:"15",children:"15 Products Par Page"}),l.jsx("option",{value:"20",children:"20 Products Par Page"})]})}),l.jsx("div",{className:"product-page-filter",children:(0,l.jsxs)("select",{onChange:e=>E(e.target.value),children:[l.jsx("option",{value:"ASC_ORDER",children:"Sorting items"}),l.jsx("option",{value:"HIGH_TO_LOW",children:"High To Low"}),l.jsx("option",{value:"LOW_TO_HIGH",children:"Low To High"}),l.jsx("option",{value:"NEWEST",children:"Newest"}),l.jsx("option",{value:"ASC_ORDER",children:"Asc Order"}),l.jsx("option",{value:"DESC_ORDER",children:"Desc Order"})]})})]})})]})}),l.jsx("div",{className:`product-wrapper-grid ${b}`,children:l.jsx(c.Row,{children:F&&F.products&&F.products.items&&0!==F.products.items.length&&!B?F&&F.products.items.map((e,s)=>l.jsx("div",{className:P,children:l.jsx("div",{className:"product",children:l.jsx("div",{children:l.jsx(o.Z,{newLabel:e.new,...e,layout:b,item:e,addCompare:()=>f(e),addWish:()=>$(e),addCart:()=>w(e)})})})},s)):F&&F.products&&F.products.items&&0===F.products.items.length?l.jsx(c.Col,{xs:"12",children:l.jsx("div",{children:(0,l.jsxs)("div",{className:"col-sm-12 empty-cart-cls text-center",children:[l.jsx("img",{src:"/images/empty-search.jpg",className:"img-fluid mb-4",alt:""}),l.jsx("h3",{children:l.jsx("strong",{children:"Your Cart is Empty"})}),l.jsx("h4",{children:"Explore more shortlist some items."})]})})}):l.jsx(l.Fragment,{children:l.jsx(p.O,{})})})}),l.jsx("div",{className:"product-pagination loadmore-pagination",children:l.jsx("div",{className:"theme-paggination-block",children:l.jsx(c.Row,{children:l.jsx(c.Col,{xl:"12",md:"12",sm:"12",children:F&&F.products.hasMore&&(0,l.jsxs)(c.Button,{onClick:()=>handlePagination(),children:[T&&l.jsx(c.Spinner,{size:"sm",color:"light",children:" "}),"Load More"]})})})})})]})]})})})})}}};