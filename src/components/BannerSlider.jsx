import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/BannerSlider.css";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="kowaja-img-slide banner"
          src="../assets/images/banners/Banner.png"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          className="kowaja-img-slide news"
          src="../assets/images/banners/News.png"
          alt="News 2"
        />
      </div>
    </Slider>
  );
};

export default BannerSlider;
