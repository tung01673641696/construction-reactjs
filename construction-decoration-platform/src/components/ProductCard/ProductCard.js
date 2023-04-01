import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

import { ImageError } from "../../utils/ImageError";
const ProductCard = ({item}) => {
  return (
    <Link to={"/product/" + item.id} key={`${item.name}232`}>
      <div className="product-for-item">
        <div className="product-for-discount">-5%</div>
        <div className="product-for-img">
          {!item.image_url ? (
            <img
              src={ImageError}
              alt="error"
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src={`${process.env.REACT_APP_API_URL}/${item.image_url[0].url}`}
              alt=""
            />
          )}
        </div>
        <p className="product-for-text">{item.name}</p>
        <p className="product-for-price">
          {item.price?.toLocaleString("de-DE")} VND
          <span>{item.original_price?.toLocaleString("de-DE")} VND</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
