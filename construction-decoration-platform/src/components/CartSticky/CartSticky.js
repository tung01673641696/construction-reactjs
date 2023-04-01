import React, { useState } from "react";
import "./CartSticky.scss";
import COD from "../../assets/images/cart/COD.svg";
import Master from "../../assets/images/cart/Master.svg";
import ATM from "../../assets/images/cart/ATM.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Visa from "../../assets/images/cart/Visa.svg";

function CartSticky({checkout, handleCheckoutCart}) {
  const navigate = useNavigate();
  const { listCart } = useSelector((state) => state.cartReducer);
  const test = () => {
    let sum = 0;
    for (let i = 0; i < checkout.length; i++) {
      for (let j = 0; j < checkout[i].products.length; j++) {
        sum += checkout[i].products[j].price * checkout[i].products[j].quantity;
      }
    }
    return sum;
  };

  return (
    <div className="cart-page-sticky">
      {/* <div className="cart-page-total box-shadow"> */}
        {/* <p className="cart-page-total-title">Tóm Tắt Đơn Hàng</p> */}
        {/* <div className="cart-page-total-price">
          <p>Thành tiền</p>
          <p>
            {" "}
            {new Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "VND",
            }).format(test())}
          </p>
        </div> */}
        {/* <div className="cart-page-total-price">
          <p>Phí vận chuyển</p>
          <p>0 VNĐ</p>
        </div>
        <div className="cart-page-total-price">
          <p>Được giảm giá</p>
          <p>0 VNĐ</p>
        </div> */}
        {/* <div className="h-line"></div>
        <div className="cart-page-total-price" style={{ marginTop: "10px" }}>
          <p>Tổng giá</p>
          <p className="total-price-cart">
            {new Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "VND",
            }).format(test())}
          </p>
        </div> */}
        {/* <input type="" placeholder="Nhập mã giảm giá" /> */}
      {/* </div> */}
      <div
        className="cart-page-sticky-btn"
        onClick={handleCheckoutCart}
      >
        TIẾN HÀNH ĐẶT HÀNG
      </div>
      <div className="cart-page-guess-accept">
        <p>Chúng tôi chấp nhận:</p>
        <div className="cart-page-accept-icon">
          <img src={COD} alt="" />
          <img src={Visa} alt="" />
          <img src={Master} alt="" />
          <img src={ATM} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CartSticky;
