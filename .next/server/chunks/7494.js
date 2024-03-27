"use strict";exports.id=7494,exports.ids=[7494],exports.modules={7494:(e,i,o)=>{o.d(i,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=o(997),t=o(6689),l=o.n(t),d=o(3118),r=o(9027),n=o(9767),c=o(9114),a=o(1163),p=o(8096),u=o.n(p),_=o(2459),g={arrows:!0,dots:!1,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,adaptiveHeight:!0,responsive:[{breakpoint:1700,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!1}},{breakpoint:991,settings:{slidesToShow:4,slidesToScroll:4,infinite:!1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let T=c.gql`
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
`,__WEBPACK_DEFAULT_EXPORT__=({hoverEffect:e})=>{let{addToWish:i}=l().useContext(r.j),{addToCart:o}=l().useContext(d.A),{addToCompare:t}=l().useContext(n.S);var{loading:p,data:h}=(0,c.useQuery)(T,{variables:{collection:"special products"}});return s.jsx("div",{className:"product product-slide-6 product-m no-arrow ratio_asos",children:s.jsx("div",{children:h&&h.collection&&0!==h.collection.length&&!p?s.jsx(u(),{...g,children:h&&h.collection.map((l,d)=>s.jsx("div",{children:s.jsx(a.Z,{hoverEffect:e,newLabel:l.new,...l,item:l,addCart:()=>o(l),addCompare:()=>t(l),addWish:()=>i(l)})},d))}):s.jsx(_.O,{})})})}}};