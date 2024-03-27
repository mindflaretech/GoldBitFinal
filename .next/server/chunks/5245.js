exports.id=5245,exports.ids=[5245],exports.modules={5245:(e,i,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(i,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),t=s(6689),c=s(9114),l=s(6981);s(2241);var o=s(3571),d=e([o]);o=(d.then?(await d)():d)[0];let n=c.gql`
  query getProducts($type: CategoryType) {
    products(type: $type) {
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
`,m=["FLOWER","FASHION","BAGS","SHOES","WATCH"],__WEBPACK_DEFAULT_EXPORT__=({cols:e})=>{let[i,s]=(0,t.useState)("FLOWER");var{loading:a,data:d}=(0,c.useQuery)(n,{variables:{type:i,indexFrom:0}});return r.jsx("section",{className:"portfolio-section grid-portfolio ratio2_3 portfolio-padding section-big-pt-space bg-light",children:(0,r.jsxs)("div",{className:"container-lg",children:[r.jsx("div",{className:"text-center",children:r.jsx(l.Nav,{tabs:!0,children:m.map((e,a)=>r.jsx(l.NavItem,{className:"filter-button project_button",children:r.jsx(l.NavLink,{className:i===e?"active":"",onClick:()=>{s(e)},children:e})},a))})}),d&&!a&&r.jsx(l.Row,{className:"zoom-gallery portfolio-2",children:r.jsx(l.TabContent,{activeTab:i,children:r.jsx(l.TabPane,{tabId:i,children:r.jsx(o.Gallery,{children:d&&d.products&&d.products.items.map((i,s)=>r.jsx("div",{className:e,children:r.jsx("div",{className:"overlay",children:r.jsx("div",{className:"border-portfolio",children:r.jsx(o.Item,{original:`/images/${i.images[0].src}`,width:"1024",height:"768",children:({ref:e,open:s})=>(0,r.jsxs)("a",{href:"#",onClick:s,children:[r.jsx("div",{className:"overlay-background",children:r.jsx("i",{className:"ti-plus","aria-hidden":"true"})}),r.jsx("img",{ref:e,src:`/images/${i.images[0].src}`,alt:"portfolio-image"})]})})})})},s))})})})})]})})};a()}catch(e){a(e)}})},2241:()=>{}};