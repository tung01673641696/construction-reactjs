import React, { useEffect, useState } from "react";
import "./StoreProductDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import avatar1 from "../../../assets/images/product/avatar1.png";
import { getDetailStore } from "../../../redux/reducers/store";
import storeApi from "../../../api/storeApi";

function StoreProductDetail({ storeDetailId }) {
  const dispatch = useDispatch();
  const { detailStore } = useSelector((state) => state.storeReducer);
  useEffect(() => {
    dispatch(getDetailStore(storeDetailId));
  }, [storeDetailId]);

  return (
    <div className="store-product-detail">
      <div className="store-avatar">
        <img src={avatar1} alt="" />
        <div className="store-avatar-name">
          <p className="store-name-detail">{detailStore?.name}</p>
          <p className="store-name-phone">{detailStore?.phone}</p>
        </div>
      </div>
      <div className="store-item-name">
        <p>
          Sản phẩm <span>{detailStore?.product_quantity}</span>
        </p>
        <p>
          Tham gia: <span>6 tháng</span>
        </p>
      </div>
      <div className="store-item-name">
        <p>
          Đánh giá: <span>{detailStore?.rate}</span>
        </p>
        <p>
          Người theo dõi: <span>{detailStore?.follow_quantity}</span>
        </p>
      </div>
      <div className="store-item-name">
        <p>
          Hội nhóm <span>{detailStore?.user}</span>
        </p>
        <a href="">Xem danh sách</a>{" "}
      </div>
    </div>
  );
}

export default StoreProductDetail;
