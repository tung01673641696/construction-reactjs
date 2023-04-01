import React from "react";
import "./ProfileLogin.scss";
import profile from "../../../assets/images/header/profile.svg";
import invoice from "../../../assets/images/header/invoice.svg";
import arrowright from "../../../assets/images/header/arrowright.svg";
import { Link } from "react-router-dom";

function ProfileLogin() {
  return (
    <div className="profile-login">
      <Link to="/account" className="profile-login-item">
        <img style={{
          width: '30px'
        }} src={profile} alt="" />
        <p> Tài khoản</p>
        <img style={{
          width: '14px'
        }} src={arrowright} alt="" className="profile-login-arrow" />
      </Link>
      <div className="line"></div>
      <Link to="/account/order-management" className="profile-login-item">
        <img style={{
          width: '30px'
        }} src={invoice} alt="" />
        <p> Đơn hàng</p>
        <img style={{
          width: '14px'
        }} src={arrowright} alt="" className="profile-login-arrow" />
      </Link>
      <div className="line"></div>
      <div
        className="profile-login-logout"
        onClick={() => {
          // localStorage.clear();
          localStorage.removeItem("access_Token")
          localStorage.removeItem("refresh_Token")
          localStorage.removeItem("user")
          window.location.reload();
        }}
      >
        <p>Đăng xuất</p>
      </div>
    </div>
  );
}

export default ProfileLogin;
