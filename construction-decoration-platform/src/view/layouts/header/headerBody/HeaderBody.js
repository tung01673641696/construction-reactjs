import React from "react";
import "./HeaderBody.scss";
import HeaderNav from "../../../../components/Nav/HeaderNav/HeaderNav";
import { Link } from "react-router-dom";
import HeaderDropdown from "../../../../components/Nav/HeaderDropdown/HeaderDropdown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Icon, { BellOutlined } from '@ant-design/icons';
import logo from '../../../../assets/images/home/logoConstruction.png'
import { display } from "@mui/system";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import DropdownCategory from "../../../../components/Search/DropdownCategory";
import { useSelector } from "react-redux";
import Register from "../../../../components/Auth/Register/Register";
import Login from "../../../../components/Auth/Login/Login";
function HeaderBody() {
  const { user, error } = useSelector((state) => state.userReducer);

  return (
    <div className="header-body">
      {/* <div className="header-body-home" style={{
        marginLeft: "30px"
      }}>
        <div>
          <Link to="/" className="vietindustry">
              <img width={120} src={logo} alt="" />
          </Link>
        </div>
        <HeaderNav />
      </div>
      <HeaderDropdown /> */}
      <div className="header-logo">
          <Link to="/" className="vietindustry">
              <img width={140} src={logo} alt="" />
          </Link>
      </div>
      <div className="header-center">
        <div className="header-search">
          <div className="search-group">
            {/* <SearchOutlined/> */}
            <input type={'text'} placeholder="Tìm kiếm ..." />
          </div>
          <div className="category-drop">
            <SearchOutlined className="category-drop-icon"/>
          </div>
        </div>
        
        <div className="header-nav">
          <HeaderNav />
        </div>
      </div>
      <div className="profile-action">
        {!user.auth ? (
            <>
                <Link to="/login">
                  <span className="login_button" 
                        style={{
                          display:"block",
                          marginBottom:"35px"
                        }}>Đăng Nhập
                  </span>
                </Link>
                {/* <Login /> */}
                <Link to="/register">
                <span className="login_button" 
                        style={{
                          display:"block",
                          marginBottom:"35px"
                        }}>Đăng Ký
                  </span>
                </Link>
            </>
        ) : (
            <>
            <HeaderDropdown />
            {/* <div className="profile-name">
          <span>Ich Ngoc</span>
          <div className="icon-group">
            <ShoppingCartOutlined />
            <BellOutlined />
          </div>  
        </div>
        <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/avatar-review-1_(1).jpeg" alt="Error" />  */}
            </>
        )}
      </div>
      
    </div>
  );
}

export default HeaderBody;
