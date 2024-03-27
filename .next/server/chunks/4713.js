"use strict";exports.id=4713,exports.ids=[4713],exports.modules={4713:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=i(997),d=i(6689),o=i.n(d),r=i(9114),l=i(8096),n=i.n(l),a=i(6981),c=i(1163),p=i(2459),u=i(3118),h=i(9027),x=i(9767),g={arrows:!1,dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:5,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]};let _=r.gql`
  query getProducts($type: String!, $id: Int!) {
    relatedProducts(type: $type, id: $id) {
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
`,__WEBPACK_DEFAULT_EXPORT__=()=>{let{addToWish:e}=o().useContext(h.j),{addToCart:s}=o().useContext(u.A),{addToCompare:i}=o().useContext(x.S);var{loading:d,data:l}=(0,r.useQuery)(_,{variables:{type:"fashion",id:1}});return t.jsx("section",{className:"section-big-py-space  ratio_asos bg-light",children:(0,t.jsxs)("div",{className:"custom-container",children:[t.jsx(a.Row,{children:t.jsx(a.Col,{className:"product-related",children:t.jsx("h2",{children:"related products"})})}),l&&l.relatedProducts&&0!==l.relatedProducts.length&&!d?t.jsx(a.Row,{children:t.jsx(a.Col,{className:"product",children:t.jsx(n(),{...g,children:l&&l.relatedProducts.map((d,o)=>t.jsx("div",{children:t.jsx(c.Z,{newLabel:d.new,...d,item:d,addCart:()=>s(d),addCompare:()=>i(d),addWish:()=>e(d)})},o))})})}):t.jsx(p.O,{})]})})}}};