import React from "react";
import { NextPage } from "next";
import Layouts from "../views/layouts/layout1";
import SliderBanner from "../views/layouts/layout1/slider";
import CollectionBanner from "../views/layouts/layout1/collection-banner";
import DiscountBanner from "../views/layouts/widgets/discount-banner";
import TabProduct from "../views/layouts/widgets/Tab-Product/TabProduct";
import CollectionBannerTwo from "../views/layouts/layout1/collection-banner-two";
import DealBanner from "../views/layouts/widgets/dealBanner";
import RatioSquare from "../views/layouts/widgets/ratio-square";
import CollectionBannerThree from "../views/layouts/layout1/collection-banner-three";
import HotDeal from "../views/layouts/layout1/hot-deal";
import Testimonial from "../views/layouts/widgets/testimonial";
import SpecialProduct from "../views/layouts/widgets/title-section";
import InstagramSection from "../views/layouts/widgets/instagram/instagram1";
import ContactBanner from "../views/layouts/widgets/contact-us";
import Category from "../views/layouts/widgets/roundedCategory";
import DiscountCoupon from "../views/layouts/widgets/discountCoupon";
import NewsLatter from "views/Containers/news-letter";
import PriceAPI from "views/Containers/Price-APIs";
// import Loader from "common/Loader";

const Home: NextPage = () => {
  return (
    // <Loader>
    <>
      {/* <NewsLatter /> */}
      <Layouts>
        <div
          className="bg-light"
          style={{ backgroundImage: `/public/images/background-image.jpeg` }}
        >
          {/* <SliderBanner /> */}
          {/* <CollectionBanner /> */}
          {/* <DiscountBanner /> */}
          {/* <TabProduct effect="icon-inline" /> */}
          {/* <CollectionBannerTwo /> */}
          <section className="deal-banner">{/* <DealBanner /> */}</section>
          <section className="rounded-category">
            <Category />
          </section>
          <SpecialProduct hoverEffect="icon-inline" />
          <HotDeal />
          <section className="testimonial testimonial-inverse">
            <Testimonial />
          </section>
          <ContactBanner />
        </div>
        <div>
        </div>
      </Layouts>
          {/* <PriceAPI /> */}
      {/* </Loader> */}
    </>
  );
};

export default Home;
