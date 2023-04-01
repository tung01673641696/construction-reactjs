import React from "react";
import { Link } from "react-router-dom";

import vourcher from "../../../../assets/images/account/vourcher.svg";
import shopinfo from "../../../../assets/images/account/shopinfo.svg";
import transferinfo from "../../../../assets/images/account/transferinfo.svg";
import addProduct from "../../../../assets/images/account/addProduct.svg";

import ordermana from "../../../../assets/images/account/ordermana.svg";

import productmana from "../../../../assets/images/account/productmana.svg";
import rate from "../../../../assets/images/account/rate.svg";
import return1 from "../../../../assets/images/account/return.svg";

const Seller = () => {
  return (
    <div>
      <p className="account-user-item-text">Bán Hàng</p>
      <Link to="/account/store">
        <div className="account-user-item">
          <img src={shopinfo} alt="" />
          <p>Thông tin cửa hàng</p>
        </div>
      </Link> 

      <Link to="/account/store/add-product">
        <div className="account-user-item">
          <img src={transferinfo} alt="" />
          <p>Thêm Sản Phẩm Vào Cửa Hàng</p>
        </div>
      </Link>

      <Link to="/account/product-management">
        <div className="account-user-item">
          <img src={productmana} alt="" />
          <p>Quản lý sản phẩm</p>
        </div>
      </Link>

      <Link to="/account/store/order-management">
        <div className="account-user-item">
          <img src={ordermana} alt="" />
          <p>Quản lý đơn hàng</p>
        </div>
      </Link>

      <Link to="/">
        <div className="account-user-item ">
          <img src={rate} alt="" />
          <p>Đánh giá của khách</p>
        </div>
      </Link>
      {/* <Link to="/">
        <div className="account-user-item ">
          <img src={return1} alt="" />
          <p>Yêu cầu trả hàng</p>
        </div>
      </Link> */}
      {/* <Link to="/">
        <div className="account-user-item ">
          <img src={vourcher} alt="" />
          <p>Ví voucher</p>
        </div>
      </Link> */}
    </div>
  );
};

export default Seller;
