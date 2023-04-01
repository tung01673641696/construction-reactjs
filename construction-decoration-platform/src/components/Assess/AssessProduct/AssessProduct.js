import React, { useEffect } from "react";
import "./AssessProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getassessRating,
  getassessProduct,
} from "../../../redux/reducers/assess";
import Star from "../../../assets/images/product/Star.svg";
import Pagination from "../Pagination/Pagination";
import {
  setDecreaseAssessProduct,
  setIncreaseAssessProduct,
} from "../../../redux/reducers/page";

function AssessProduct({ page, size, id }) {
  const dispatch = useDispatch();
  const { pageCommentProduct } = useSelector((state) => state.pageReducer);
  const {  ratingProduct } = useSelector(
    (state) => state.assessReducer
  );
  useEffect(() => {
    // const size = 5
    dispatch(getassessRating(id));
    dispatch(getassessProduct({ pageCommentProduct, size, id }));
  }, [pageCommentProduct, id, page, size]);
  return (
    <div className="assess-product">
      <div className="assess-product-title">
        <p>ĐÁNH GIÁ SẢN PHẨM</p>
      </div>
      <div className="assess-product-rating">
        <div className="assess-rating-sum">
          <p className="avg-rating">{ratingProduct?.rate_average}</p>
          <p className="sum-rating">{ratingProduct?.sum} đánh giá</p>
        </div>
        <div className="assess-rating-stars">
          <div className="assess-rating-stars-list">
            <div className="assess-rating-stars-item">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <div className="assess-rating-stars-item">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <div className="assess-rating-stars-item">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <div className="assess-rating-stars-item">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <div className="assess-rating-stars-item">
              <img src={Star} alt="" />
            </div>
          </div>
          <div className="assess-rating-stars-line">
            <div className="assess-rating-line-5"></div>
            <div className="assess-rating-line-4"></div>
            <div className="assess-rating-line-3"></div>
            <div className="assess-rating-line-2"></div>
            <div className="assess-rating-line-1"></div>
          </div>
        </div>
        <div className="assess-rating-total">
          <div>12</div>
          <div>5</div>
          <div>0</div>
          <div>1</div>
          <div>0</div>
        </div>
      </div>
      <Pagination/>
    </div>
  );
}

export default AssessProduct;
