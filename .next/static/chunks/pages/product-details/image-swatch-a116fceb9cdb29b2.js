(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8306],{82773:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product-details/image-swatch",function(){return a(38926)}])},38926:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return image_swatch}});var i=a(52322);a(2784);var r=a(41234),t=a(995),n=a(75316),l=a(54713),c=a(73235),d=a(15228),o=a(98410),m=a(81548),h=a(90592);function _templateObject(){let e=(0,c._)(["\n  query getProducts($id: Float!) {\n    product(id: $id) {\n      id\n      title\n      description\n      type\n      brand\n      category\n      price\n      new\n      sale\n      discount\n      stock\n      variants {\n        id\n        sku\n        size\n        color\n        image_id\n      }\n      images {\n        alt\n        src\n      }\n    }\n  }\n"]);return _templateObject=function(){return e},e}let x=(0,m.Ps)(_templateObject());var imageSwatchPage=()=>{var{loading:e,data:s}=(0,h.a)(x,{variables:{id:1}});return(0,i.jsx)("div",{className:"collection-wrapper",children:s&&s.product&&!e?(0,i.jsx)("div",{className:"custom-container",children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(o.Z,{item:s.product,bundle:!0,swatch:!0})})}):""})},image_swatch=()=>(0,i.jsx)("div",{className:"b-g-light",children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(t.Z,{title:"image swatch",parent:"product"}),(0,i.jsx)("section",{className:"section-big-pt-space bg-light",children:(0,i.jsx)(imageSwatchPage,{})}),(0,i.jsx)("div",{className:"custom-container",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(l.Z,{})]})})},98410:function(e,s,a){"use strict";var i=a(52322),r=a(2784),t=a(15297),n=a(1285),l=a(15228),c=a(23467),d=a(44657);s.Z=e=>{let{item:s,bundle:a,swatch:o}=e,[m,h]=(0,r.useState)({nav1:null,nav2:null}),x=r.useRef(),j=r.useRef();r.useEffect(()=>{h({nav1:x.current,nav2:j.current})},[s]);let{nav1:u,nav2:p}=m;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.Z,{lg:"5",children:[(0,i.jsx)(c.Z,{className:"product-slick",asNavFor:p,ref:e=>x.current=e,children:s&&s.images.map((e,s)=>(0,i.jsx)("div",{children:(0,i.jsx)(n.Z,{src:"/images/".concat(e.src),alt:"",className:"img-fluid  image_zoom_cls-0"})},s))}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(c.Z,{className:"slider-nav",asNavFor:u,ref:e=>j.current=e,slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,arrows:!1,adaptiveHeight:!0,children:s&&s.images.map((e,s)=>(0,i.jsx)("div",{children:(0,i.jsx)(n.Z,{src:"/images/".concat(e.src),alt:"",className:"img-fluid  image_zoom_cls-0"})},s))})})})]}),(0,i.jsx)(t.Z,{lg:"7",className:"rtl-text",children:(0,i.jsx)(d.Z,{item:s,changeColorVar:e=>{x.current.slickGoTo(e)},bundle:a,swatch:o})})]})}},75316:function(e,s,a){"use strict";var i=a(52322),r=a(2784),t=a(15228),n=a(15297),l=a(24903),c=a(57637),d=a(67606),o=a(35629),m=a(31205),h=a(21206),x=a(54423),j=a(89374);s.Z=()=>{let[e,s]=(0,r.useState)("1");return(0,i.jsx)("section",{className:"tab-product tab-exes creative-card creative-inner mb-0",children:(0,i.jsx)(t.Z,{children:(0,i.jsxs)(n.Z,{sm:"12",lg:"12",children:[(0,i.jsxs)(l.Z,{tabs:!0,className:"nav-material",id:"top-tab",role:"tablist",children:[(0,i.jsx)(c.Z,{children:(0,i.jsxs)(d.Z,{className:"1"===e?"active":"",onClick:()=>s("1"),children:["Description",(0,i.jsx)("div",{className:"material-border"})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)(d.Z,{className:"2"===e?"active":"",onClick:()=>s("2"),children:["Video",(0,i.jsx)("div",{className:"material-border"})]})}),(0,i.jsx)(c.Z,{children:(0,i.jsxs)(d.Z,{className:"3"===e?"active":"",onClick:()=>s("3"),children:["Write Review",(0,i.jsx)("div",{className:"material-border"})]})})]}),(0,i.jsxs)(o.Z,{className:"nav-material",activeTab:e,children:[(0,i.jsxs)(m.Z,{tabId:"1",children:[(0,i.jsx)("p",{className:"ps-0",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,i.jsxs)("div",{className:"single-product-tables",children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Febric"}),(0,i.jsx)("td",{children:"Chiffon"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Color"}),(0,i.jsx)("td",{children:"Red"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Material"}),(0,i.jsx)("td",{children:"Crepe printed"})]})]})}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Length"}),(0,i.jsx)("td",{children:"50 Inches"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Size"}),(0,i.jsx)("td",{children:"S, M, L .XXL"})]})]})})]})]}),(0,i.jsx)(m.Z,{tabId:"2",children:(0,i.jsx)("div",{className:"mt-3 text-center",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowFullScreen:!0})})}),(0,i.jsx)(m.Z,{tabId:"3",children:(0,i.jsx)(h.Z,{children:(0,i.jsxs)("div",{className:"form-row row",children:[(0,i.jsx)(n.Z,{md:"12",children:(0,i.jsxs)("div",{className:"media",children:[(0,i.jsx)(x.Z,{className:"mb-0",children:"Rating"}),(0,i.jsx)("div",{className:"media-body ms-3",children:(0,i.jsxs)("div",{className:"rating three-star",children:[(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})," ",(0,i.jsx)("i",{className:"fa fa-star"})]})})]})}),(0,i.jsxs)(n.Z,{md:"6",children:[(0,i.jsx)(x.Z,{htmlFor:"name",children:"Name"}),(0,i.jsx)(j.Z,{type:"text",className:"form-control",id:"name",placeholder:"Enter Your name",required:!0})]}),(0,i.jsxs)(n.Z,{md:"6",children:[(0,i.jsx)(x.Z,{htmlFor:"email",children:"Email"}),(0,i.jsx)(j.Z,{type:"text",className:"form-control",id:"email",placeholder:"Email",required:!0})]}),(0,i.jsxs)(n.Z,{md:"12",children:[(0,i.jsx)(x.Z,{htmlFor:"review",children:"Review Title"}),(0,i.jsx)(j.Z,{type:"text",className:"form-control",id:"review",placeholder:"Enter your Review Subjects",required:!0})]}),(0,i.jsxs)(n.Z,{md:"12",children:[(0,i.jsx)(x.Z,{htmlFor:"review",children:"Review Title"}),(0,i.jsx)("textarea",{className:"form-control",rows:4,placeholder:"Write Your Testimonial Here",id:"exampleFormControlTextarea1"})]}),(0,i.jsx)(n.Z,{md:"12",children:(0,i.jsx)("button",{className:"btn btn-normal",type:"submit",children:"Submit YOur Review"})})]})})})]})]})})})}}},function(e){e.O(0,[7192,5515,6981,8771,3467,7975,2785,6378,336,3542,4869,1163,6814,4657,9774,2888,179],function(){return e(e.s=82773)}),_N_E=e.O()}]);