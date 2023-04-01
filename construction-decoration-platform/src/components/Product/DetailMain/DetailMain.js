import React from "react";
import "./DetailMain.scss";
import { useSelector } from "react-redux";
import StickyProduct from "../../Sticky/StickyProduct";
import { useParams } from "react-router-dom";
import AssessProduct from "../../Assess/AssessProduct/AssessProduct";

function DetailMain() {
  const { detailStore } = useSelector((state) => state.storeReducer);
  const {pageCommentProduct}  = useSelector((state) => state.pageReducer)
  const { listCommentProduct } = useSelector((state) => state.commentReducer);
  const params = useParams()
  // console.log(params.id)
  return (
    <div className="detail-main">
      <div className="detail-main-list">
        <div className="detail-info-product">
          <p className="detail-info-more">Xem thêm nội dung</p>
          <div className="detail-info-text">MÔ TẢ CHI TIẾT</div>
          <div className="detail-info-content">{detailStore?.content}</div>
        </div>
        <div className="detail-main-comment">
          <AssessProduct id={params.id}  page={pageCommentProduct} size={5}/>
        </div>
      </div>
      <div className="detail-product-sticky">
        <StickyProduct />
      </div>
    </div>
  );
}

export default DetailMain;
