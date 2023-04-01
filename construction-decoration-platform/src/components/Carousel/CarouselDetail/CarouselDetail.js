import React, { useEffect, useState } from "react";
import "./CarouselDetail.scss";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { getProductStore } from "../../../redux/reducers/store";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CarouselDetail({listProductStore  }) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <ArrowBackIosNewIcon />
      </div>
    );
  }

  const settings = {
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="carousel-detail">
      {/* <p className="carousel-detail-title">Các sản phẩm khác của shop</p> */}
      <Slider {...settings}>
        {listProductStore?.map((item) => 
          {
            return <Link to={"/product/" + item.id}>
            <div className="card-carousel" key={`${item.name}`}>
              <div className="card-carousel-discount">-25%</div>
              <div className="card-carousel-img">
                <img src={`${process.env.REACT_APP_API_URL}${item.image_url[0].url}`} alt="" />
              </div>
              <p className="card-carousel-name">{item.name}</p>
              <p className="card-carousel-price">
                {item.price?.toLocaleString("de-DE")} VND
              </p>
            </div>
          </Link>
          }  
        )}
      </Slider>
    </div>
  );
}

export default CarouselDetail;
