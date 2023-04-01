import React, { useState } from "react";
import "./DetailSlider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import ImageError from "../../../assets/images/error/imageerror.png";

function DetailSlider({ listImageDetail }) {
  const [count, setCount] = useState(0);
  // const width = (-450) * count;
  // setImg(
  //   `${process.env.REACT_APP_API_URL}${listImageDetail[index].url}`
  // );
  return (
    <>
      {!listImageDetail ? (
        <div className="detail-slider-main">
          <div className="detail-slider">
            <div className="detail-image">
              <img
                src={ImageError}
                alt="error"
                style={{
                  layout: "fill",
                  objectFit: "cover",
                }}
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="detail-slider-main">
          <div className="detail-slider">
            <div className="detail-image" style={{ objectFit: "contain" }}>
              {listImageDetail.map((item) => (
                <img
                  src={`${process.env.REACT_APP_API_URL}${item.url}`}
                  alt=""
                  key={`${item.url}`}
                />
              ))}
            </div>
          </div>
          <div className="detail-img-children">
            <div
              className="detail-btn-prev"
              onClick={() => {
                if (count === 0) {
                  setCount(listImageDetail.length - 1);
                } else {
                  setCount(count - 1);
                }
              }}
            >
              <ArrowBackIosNewIcon />
            </div>
            {listImageDetail.map((item, index) => (
              <div className={count === index ? "detail-img-active" : "detail-img-none"}
                onClick={() => { setCount(index); }}
                key={index}
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}${item.url}`}
                  alt=""
                />
              </div>
            ))}
            <div
              className="detail-btn-next"
              onClick={() => {
                if (count === listImageDetail.length - 1) {
                  setCount(0);
                } else {
                  setCount(count + 1);
                }
              }}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailSlider;
