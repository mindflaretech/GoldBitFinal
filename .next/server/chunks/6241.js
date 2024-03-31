"use strict";exports.id=6241,exports.ids=[6241],exports.modules={6241:(e,s,l)=>{l.d(s,{Z:()=>Products_Detail_leftImagePage});var r=l(997),i=l(6689),a=l.n(i),c=l(6981),t=l(9114),d=l(8096),o=l.n(d),n=l(9151);let left_image_slick=({item:e})=>{let[s,l]=(0,i.useState)({nav1:null,nav2:null}),t=a().useRef(),d=a().useRef();a().useEffect(()=>{l({nav1:t.current,nav2:d.current})},[e]);let{nav1:m,nav2:u}=s;return(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Col,{lg:"1",sm:"2",xs:"12",children:r.jsx(c.Row,{children:r.jsx(c.Col,{children:r.jsx(o(),{className:"slider-right-nav",asNavFor:u,ref:e=>t.current=e,slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,vertical:!0,responsive:[{breakpoint:576,settings:{vertical:!1}}],children:e&&e.images.map((e,s)=>r.jsx("div",{children:r.jsx(c.Media,{src:`/images/${e.src}`,alt:"",className:"img-fluid  image_zoom_cls-0"})},s))})})})}),r.jsx(c.Col,{lg:"4",sm:"10",xs:"12",className:"order-up",children:r.jsx(o(),{className:"product-slick",asNavFor:m,ref:e=>d.current=e,children:e&&e.images.map((e,s)=>r.jsx("div",{children:r.jsx(c.Media,{src:`/images/${e.src}`,alt:"",className:"img-fluid  image_zoom_cls-0"})},s))})}),r.jsx(c.Col,{lg:"7",className:"rtl-text",children:r.jsx(n.Z,{item:e,bundle:!1,swatch:!1,changeColorVar:e=>{t.current.slickGoTo(e)}})})]})},m=t.gql`
  query getProducts($id: Float!) {
    product(id: $id) {
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
        alt
        src
      }
    }
  }
`,Products_Detail_leftImagePage=()=>{var{loading:e,data:s}=(0,t.useQuery)(m,{variables:{id:1}});return r.jsx("div",{className:"collection-wrapper",children:s&&s.product&&!e&&r.jsx("div",{className:"custom-container",children:r.jsx(c.Row,{className:"left-slick",children:r.jsx(left_image_slick,{item:s.product})})})})}}};