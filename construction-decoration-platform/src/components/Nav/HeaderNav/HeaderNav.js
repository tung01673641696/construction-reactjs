import React from "react";
import "./HeaderNav.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Cascader } from "antd";
import Navbar from "../../Menu/Navbar/Navbar";

function HeaderNav() {

  return (
    <div className="header-navbar">
      {/* <div className="header-link">
        <Link to="/">Trang chủ</Link>
      </div>
      <div className="header-link">
        <Link to="/supplier">NHÀ CUNG CẤP</Link>
      </div>
      <div className="header-link">
        <Link to="/group">HỘI NHÓM</Link>
      </div>

      <div className="header-link">
        <Link to="/construction">KIẾN TRÚC</Link>
      </div>     
      <div className="header-link">
        <Link to="/renovator">NHÀ CẢI TẠO</Link>
      </div> */}

      <Navbar />

    </div>
  );
}

export default HeaderNav;
