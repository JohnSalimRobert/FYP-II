import React from "react";
import { Carousel } from "react-responsive-carousel";
import IMG1 from "../Ecommerce_banners/IMG_1.gif";
import IMG2 from "../Ecommerce_banners/IMG_2.gif";
import IMG3 from "../Ecommerce_banners/IMG_3.gif";
import IMG4 from "../Ecommerce_banners/IMG_4.gif";
import IMG5 from "../Ecommerce_banners/IMG_5.gif";
import { Link } from "react-router-dom";
// import IMG6 from "../Ecommerce_banners/IMG_6.jpg";
// import IMG7 from "../Ecommerce_banners/IMG_7.jpg";
// import IMG8 from "../Ecommerce_banners/IMG_8.jpg";
// import IMG9 from "../Ecommerce_banners/IMG_9.jpg";

export default function Carousel1() {
  return (
    <Carousel
      showArrows
      autoPlay
      showThumbs={false}
      infiniteLoop={true}
      autoFocus
    >
      <Link to={`/search/category/64039044da7e7e7b69e26024`}>
        <div className="carouselImg">
          <img alt="" src={IMG1} />
        </div>
      </Link>
      <Link to={`/search/category/6404a68a5ed7705ead15ebe2`}>
      <div className="carouselImg">
        <img alt="" src={IMG2} />
      </div>
      </Link>
      <Link to={`/search/category/6404ab166b71954cd5434dd6`}>
      <div className="carouselImg">
        <img alt="" src={IMG3} />
      </div>
      </Link>
      <Link to={`/search/category/642f731a58748f0355532f8f`}>
      <div className="carouselImg">
        <img alt="" src={IMG4} />
      </div>
      </Link>
      <Link to={`/search/category/642f747b58748f0355532fa3`}>
      <div className="carouselImg">
        <img alt="" src={IMG5} />
      </div>
      </Link>
      {/* <div className="carouselImg">
    <img alt="" src={IMG6} />
    </div>
    <div className="carouselImg">
    <img alt="" src={IMG7} />
    </div>
    <div className="carouselImg">
    <img alt="" src={IMG8} />
    </div>
    <div className="carouselImg">
    <img alt="" src={IMG9} />
    </div> */}
    </Carousel>
  );
}
