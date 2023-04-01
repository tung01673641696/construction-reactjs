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

const News = () => {
  return (
    <div>
      <p className="account-user-item-text">Tin tức</p>
      <Link to="/account/news/manage-news/">
        <div className="account-user-item">
          <img src={shopinfo} alt="" />
          <p>Quản lý tin tức</p>
        </div>
      </Link> 

      <Link to="/account/news/create-news">
        <div className="account-user-item">
          <img src={transferinfo} alt="" />
          <p>Thêm tin tức</p>
        </div>
      </Link>
    </div>
  );
};

export default News;
