import React from "react";
import "./RegisterSale.scss";
import item from "../../../../assets/images/home/z3342565043937_5e1ce63d0c3c33fb18440129ba311268.jpg";
function RegisterSale() {
  return (
    <div className="register-sale">
      <div className="register-sale-text">
        <p>
          <strong>ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI TỪ CHÚNG TÔI</strong>
        </p>
        <div className="register-sale-input">
          <input type="email" placeholder="Email" />
          <div className="register-sale-btn">ĐĂNG KÝ</div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSale;
