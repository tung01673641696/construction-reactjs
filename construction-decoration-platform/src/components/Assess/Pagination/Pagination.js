import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import "./Pagination.scss";
import Pagination from "@mui/material/Pagination";
import like from "../../../assets/images/product/like.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  setDecreaseAssessProduct,
  setIncreaseAssessProduct,
} from "../../../redux/reducers/page";

function PaginationDetail() {
  const { pageCommentProduct } = useSelector((state) => state.pageReducer);
  const { total_page, listAssess } = useSelector(
    (state) => state.assessReducer
  );
  const [page, setPage] = useState(pageCommentProduct);
  const dispatch = useDispatch();
  const onChange = (e, p) => {
    setPage(p);
    dispatch(setIncreaseAssessProduct(p));
  };

  return (
    <div className="pagination-detail">
      {listAssess.map((item) => (
        <div className="pagination-comment" key={item.id}>
          <div className="pagination-comment-detail">
            <p className="pagination-name-user">{item.customer.full_name}</p>
            <Rating name="read-only" value={item.rate} readOnly />
            <p className="pagination-text">{item?.des}</p>
          </div>
          <div className="pagination-like">
            <p>Cảm ơn</p>
            <img src={like} alt="" />
          </div>
        </div>
      ))}
      <div className="pagination-btn">
        <Pagination
          count={total_page}
          shape="rounded"
          page={page}
          hidePrevButton
          className="pagination-btn-pgn"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default PaginationDetail;
