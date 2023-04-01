import React, { useEffect } from "react";
import "./ForYou.scss";
// import imageError from "../../../assets/images/error/imageError.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setIncreaseYou, setDecreaseYou } from "../../../redux/reducers/page";
import { getproductForYou } from "../../../redux/reducers/product";
import { Link } from "react-router-dom";

import { ImageError } from "../../../utils/ImageError";

function ForYou({ page, size }) {
  const dispatch = useDispatch();
  const { productForYou, total_pageYou } = useSelector(
    (state) => state.productReducer
  );
  console.log(productForYou);
  useEffect(() => {
    dispatch(getproductForYou({ page, size }));
  }, [dispatch, page]);
  return (
    <div className="foryou-product">
      {productForYou.map((product) => (
        <Link to={"/product/" + product.id} key={`${product.name}`}>
          <div className="foryou-product-item">
            <div className="foryou-product-img">
              {product?.image_url == null ? (
                <img
                  src={ImageError}
                  alt="Error"
                  style={{
                    objectFit: "cover",
                    padding: "10px",
                  }}
                />
              ) : (
                <img
                  src={`${process.env.REACT_APP_API_URL}${product?.image_url[0]?.url}`}
                  alt="error"
                  style={{
                    objectFit: "cover",
                    padding: "10px",
                    borderRadius: "15px"
                  }}
                />
              )}
            </div>
            <div className="foryou-product-content">
              <p className="foryou-product-text">{product.name}</p>
              <p className="foryou-product-price">
                {product.price?.toLocaleString("de-DE")} VNĐ
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ForYou;
