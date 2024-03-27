"use strict";exports.id=9449,exports.ids=[9449],exports.modules={9449:(e,s,a)=>{a.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=a(997),l=a(6689),t=a(8096),r=a.n(t),o=a(6981),c=a(9114),n=a(6681);let d=c.gql`
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
`,__WEBPACK_DEFAULT_EXPORT__=()=>{let[e,s]=(0,l.useState)({nav1:null,nav2:null}),a=(0,l.useRef)(null),t=(0,l.useRef)(null),h=(0,l.useContext)(n.$R),{selectedCurr:u}=h;var{loading:m,data:x}=(0,c.useQuery)(d,{variables:{collection:"hotdeal"}});(0,l.useEffect)(()=>{s({nav1:a.current,nav2:t.current})},[]);let{nav1:j,nav2:g}=e;return i.jsx("section",{className:"hot-deal b-g-white section-pb-space space-abjust",children:i.jsx("div",{className:"custom-container",children:(0,i.jsxs)(o.Row,{className:"hot-2",children:[i.jsx(o.Col,{lg:"12",children:i.jsx("div",{className:"title3 b-g-white text-center",children:i.jsx("h4",{children:"News"})})}),i.jsx(o.Col,{style:{width:"100%"},lg:"9",children:i.jsx("div",{className:"slide-1 no-arrow",children:i.jsx("div",{children:i.jsx("div",{className:"hot-deal-contain deal-abjust",children:(0,i.jsxs)(o.Row,{className:"row hot-deal-subcontain",children:[i.jsx(o.Col,{lg:"4",md:"4",children:i.jsx("div",{className:"hotdeal-right-slick border-0",children:i.jsx(r(),{asNavFor:j,ref:e=>t.current=e,slidesToShow:1,slidesToScroll:1,autoplay:!1,arrows:!1,fade:!0,infinite:!0,dots:!1,children:x&&x.collection[0].images.map((e,s)=>i.jsx("div",{children:i.jsx(o.Media,{src:`/images/${e.src}`,alt:"hot-deal",className:"img-fluid  "})},s))})})}),i.jsx(o.Col,{lg:"6",md:"6",children:i.jsx("div",{className:"hot-deal-center",children:(0,i.jsxs)("div",{children:[i.jsx("div",{children:i.jsx("h5",{children:"Stay Informed, Stay Ahead"})}),(0,i.jsxs)("div",{className:"rating",children:[i.jsx("i",{className:"fa fa-star"}),i.jsx("i",{className:"fa fa-star"}),i.jsx("i",{className:"fa fa-star"}),i.jsx("i",{className:"fa fa-star"}),i.jsx("i",{className:"fa fa-star"})]}),"logs",i.jsx("div",{children:i.jsx("p",{children:"It is a long established fact that a reader.Welcome to our News section, your trusted source for the latest updates, trends, and stories from around the world. Our dedicated team of journalists works tirelessly to bring you breaking news, insightful features, and in-depth analyses on a wide range of topics. Whether it's the latest technology innovations, financial market trends, or global events, we've got you covered. Join us in the pursuit of knowledge, and stay ahead of the curve with our carefully curated news articles. Your journey to being well-informed starts right here."})})]})})}),i.jsx(o.Col,{md:"2",children:i.jsx("div",{className:"hotdeal-right-nav",children:i.jsx(r(),{asNavFor:g,ref:e=>a.current=e,vertical:!0,arrows:!1,responsive:[{breakpoint:767,settings:{vertical:!1,slidesToShow:3}}],slidesToShow:2,swipeToSlide:!0,focusOnSelect:!0,verticalSwiping:!0,children:x&&x.collection[0].images.map((e,s)=>i.jsx("div",{style:{flexDirection:"column"},children:i.jsx(o.Media,{src:`/images/${e.src}`,alt:"hot-deal",className:"img-fluid  "})},s))})})})]})})})})})]})})})}}};