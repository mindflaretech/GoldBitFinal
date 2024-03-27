import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

interface CollectionBannerProps {
  img: string;
  title: string;
  subTitle: string;
  btn: string;
  category: string;
}

interface Banners {
  banner: CollectionBannerProps;
}

const banners = [
  {
    img: "/images/layout-2/collection-banner/7.jpg",
    title: "save up to 30% off",
    subTitle: `women<span>fashion</span>`,
    btn: "shop now",
    category: "FASHION",
  },
];

const CollectionBannerList: React.FC<Banners> = ({ banner }) => {
  return (
    <Col>
      <div className="collection-banner-main banner-5 p-center">
        <div className="collection-img">
          <Media src={banner.img} className="bg-img  " alt="banner" />
        </div>
        <div className="collection-banner-contain ">
          <div className="sub-contain">
            <h3>{banner.title}</h3>
            <h4 dangerouslySetInnerHTML={{ __html: banner.subTitle }}></h4>
            <div className="shop">
              <Link
              className="btn btn-normal"
                href={{
                  pathname: "/collections/leftsidebar/",
                  query: {
                    category: banner.category,
                  },
                }}>
                {banner.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const CollectionBannerTwo: NextPage = () => {
  return (
    <section className="collection-banner section-pb-space ">
      <div className="custom-container">
        <Row>
          {banners.map((banner, i) => (
            <CollectionBannerList banner={banner} key={i} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CollectionBannerTwo;
