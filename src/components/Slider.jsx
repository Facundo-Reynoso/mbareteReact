import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Slider.css";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image src={Slider1} className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Slider2} className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Slider3} className="w-100" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
