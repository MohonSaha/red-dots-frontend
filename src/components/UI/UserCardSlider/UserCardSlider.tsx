import React from "react";
import Slider from "react-slick";
import "./UserCardSlider.css";

// Define the interface for item prop
interface UserCardSliderProps {
  item?: any;
}

const UserCardSlider: React.FC<UserCardSliderProps> = ({ item }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="UserCardSlider">
      <div className="item">
        <p>
          {item?.hasDiabetes === false
            ? "Diabetes Negative"
            : "Diabetes Positive"}
        </p>
      </div>

      <div className="item">
        <p>
          {item?.hasAllergies === false
            ? "Allergy Negative"
            : "Allergy Positive"}
        </p>
      </div>
      <div className="item">
        <p>Weight: {item?.weight === undefined ? "N/A" : `${item.weight}`}</p>
      </div>
      <div className="item">
        <p>Height: {item?.height === undefined ? "N/A" : `${item.height}`}</p>
      </div>
    </Slider>
  );
};

export default UserCardSlider;
