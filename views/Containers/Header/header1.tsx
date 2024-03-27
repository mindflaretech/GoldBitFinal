import React, { Fragment, useContext, useState, useEffect } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import TopBar from "./widgets/TopBar";
import NewsSlider from "./widgets/News_Slider";
import Search from "./widgets/search";
import ShoppingCart from "./widgets/shopping-cart";
import Category from "./widgets/by-category";
import User from "./widgets/user-profile";
import WishList from "./widgets/whishlist";
import ContactUs from "./widgets/contact-us";
import Gift from "./widgets/gift";
import { NextPage } from "next";
import HorizaontalMenu from "../Menu/horizontal";
import MobileSearch from "./widgets/mobile-search";
import MobileSetting from "./widgets/mobile-setting";
import { MenuContext } from "helpers/menu/MenuContext";

interface header {
  cartPopupPosition: string;
  display: string;
  category: boolean;
  layoutLogo: string;
}

const Header: NextPage<header> = ({
  cartPopupPosition,
  display,
  category,
  layoutLogo,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const menuContext = useContext(MenuContext);
  const { setLeftMenu, leftMenu } = menuContext;
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("stickyHeader").classList.remove("sticky");
      else document.getElementById("stickyHeader").classList.add("sticky");
    } else document.getElementById("stickyHeader").classList.remove("sticky");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <header id="stickyHeader">
        <div className="mobile-fix-option"></div>
        <TopBar />
        <NewsSlider />
        <div
          style={{ backgroundColor: "#ffcc01", textAlign: "center" }}
          className="layout-header2"
        >
          <a
            style={{
              color: "#241f1c",
              textDecoration: "none",
              fontSize: 55,
              fontWeight: "bolder",
              fontStyle: "italic",
            }}
          >
            GOLD BIT
          </a>
          {/* <img
            src={`/images/${layoutLogo}/logo/logo.png`}
            alt="logo"
            style={{ width: 200, height: 100, backgroundColor: "white" }}
          /> */}
          {/* <Container>
            <Row>
              <Col md="12">
                <div className="main-menu-block">
                  <div
                    onClick={() => {
                      setLeftMenu(!leftMenu);
                      document.body.style.overflow = "hidden";
                    }}
                    className="sm-nav-block"
                  >
                    <span className="sm-nav-btn">
                      <i className="fa fa-bars"></i>
                    </span>
                  </div>
                  <div className="logo-block">
                    <a href="/#">
                      <Media
                        src={`/images/${layoutLogo}/logo/logo.png`}
                        className="img-fluid  "
                        alt="logo"
                      />
                    </a>
                  </div>
                  {/* <Search /> */}
          {/* <ShoppingCart
                    position={cartPopupPosition}
                    cartDisplay={display}
                    layout="layout2" */}
          {/* />
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
            backgroundColor: "black",
            zIndex: 1000,
            position: "fixed",
            top: isSticky ? 35 : 150, // Adjust the initial top position as needed
          }}
          className="category-header-2"
        >
          <div className="custom-container">
            <Row>
              <Col>
                <div className="navbar-menu">
                  <div className="category-left">
                    {/* <Category category={category} /> */}
                    <HorizaontalMenu />
                    <div className="icon-block">
                      <ul>
                        <WishList />
                      </ul>
                    </div>
                  </div>
                  <div
                    style={
                      {
                        // backgroundColor: "red",
                      }
                    }
                  >
                    {/* <ShoppingCart
                    position={cartPopupPosition}
                    cartDisplay={display}
                    layout="layout2"
                  /> */}
                    <User />
                  </div>
                  <div className="category-right">
                    <ContactUs spanClass="" />
                    {/* <Gift /> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
