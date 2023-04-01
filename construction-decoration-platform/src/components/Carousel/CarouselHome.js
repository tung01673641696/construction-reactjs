import "./CarouselHome.scss";
import { Carousel } from "react-bootstrap";
import React from "react";
import banner3 from "../../assets/images/carousel/banslide1.jpg";
import banner4 from "../../assets/images/carousel/banslide2.jpg";
import banner5 from "../../assets/images/carousel/banslide3.jpg";

function CarouselHome() {
  return (
    <div className="carousel-home">
      <Carousel  fade={true} style={{ position: 'relative' }}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
