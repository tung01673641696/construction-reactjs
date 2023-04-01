import React from "react";
import { Link } from "react-router-dom";
import "./FooterTop.scss";
import Logo1 from "../../../../assets/images/footer/icon/Visa.svg";
import Logo2 from "../../../../assets/images/footer/icon/Stripe.svg";
import Logo3 from "../../../../assets/images/footer/icon/PayPal.svg";
import Logo4 from "../../../../assets/images/footer/icon/UnionPay.svg";
import Logo5 from "../../../../assets/images/footer/icon/JCB.svg";
import Logo6 from "../../../../assets/images/footer/icon/Mastercard.svg";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top-list">
        <p className="footer-top-title">Về chúng tôi</p>
        <div className="footer-top-content">
          <Link to="/article/introduce">Quy chế hoạt động</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/article/juridical">Hồ sơ pháp lý Nhà bán hàng</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/article/commodity">Chính sách hàng hóa</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/article/procedure">Quy trình đóng gói hàng hoá</Link>
        </div>
      </div>
      <div className="footer-top-list">
        <p className="footer-top-title">Chăm sóc khách hàng</p>
        <div className="footer-top-content">
          <Link to="/article/support">Hướng dẫn mua hàng</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/article/policy">Chính sách và quy trình xử lý đổi trả</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/article/complain">Chính sách giải quyết khiếu nại</Link>
        </div>
      </div>
      <div className="footer-top-list">
        <p className="footer-top-title">Hỗ trợ</p>
        <div className="footer-top-content">
          <Link to="/">Hotline: 1900 1033</Link>
        </div>
        <div className="footer-top-content">
          <Link to="/">Email: admin@construction.com</Link>
        </div>
      </div>
      <div className="footer-top-list">
        <p className="footer-top-title">Phương thức thanh toán</p>
        <div className="footer-top-icon">
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo1}/></Link>
          </div>
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo2}/></Link>
          </div>
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo3}/></Link>
          </div>
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo4}/></Link>
          </div>
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo5}/></Link>
          </div>
          <div className="footer-top-icon-ele">
            <Link to="/"><img src={Logo6}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
