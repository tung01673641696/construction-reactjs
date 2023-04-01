import React from "react";
import "./OrderOnePay.scss";
import momo from "../../../assets/images/cart/momo.svg";
import cash from "../../../assets/images/cart/cash.svg";

function OrderOnePay() {
  return (
    <div className="order-onepay box-shadow">
      <div className="order-onepay-checkbox">
        <input type="checkbox" />
        <img src={momo} alt="" />
        Thanh toán tiền mặt khi nhận hàng
      </div>
      <div className="order-onepay-checkbox">
        <input type="checkbox" />
        <img src={cash} alt="" />
        Thanh toán bằng Onepay
      </div>
    </div>
  );
}

export default OrderOnePay;
