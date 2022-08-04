import React from "react";
import Slider from "react-slick";
import { SliderData } from "./SliderImage";
import SlickItem from "./SlickItem";
import "slick-carousel/slick/slick.css";
import "../assets/scss/slider.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="NextArrow" onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="PrevArrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}

class ReactCustomArrow extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "cubic-bezier(0.7, 0.2, 0.6, 0.45)",
      draggable: false,
      fade: true,
      pauseOnDotsHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 987,
          settings: {
            draggable: true,
            arrows: false,
            fade: false,
          },
        },
      ],
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {SliderData.map((item) => (
            <SlickItem key={item.id} image={item.image}></SlickItem>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ReactCustomArrow;
