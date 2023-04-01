import React, { useEffect, useState } from "react";
import "./HeaderDropdown.scss";
import { token } from "../../../helpers/common";
import { Link } from "react-router-dom";
import bag from "../../../assets/images/header/bag.svg";
import profile from "../../../assets/images/header/profile.svg";
import favor from "../../../assets/images/header/favor.svg";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";

import { openNotification } from "../../Alert/Alert";

import ProfileLogin from "../../Profile/ProfileLogin/ProfileLogin";
import { useSelector } from "react-redux";
import { Drawer } from "antd";

import { Menu } from "antd";

import Login from "../../Auth/Login/Login";

function HeaderDropdown() {
  const [sideBar, setSideBar] = useState({ visible: false });

  const showDrawer = () => {
    setSideBar({ visible: true });
  };
  const onClose = () => {
    setSideBar({ visible: false });
  };
  const { listCart } = useSelector((state) => state.cartReducer);
  const { user, error } = useSelector((state) => state.userReducer);

  const test = () => {
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
      sum += listCart[i].products.length;
    }
    return sum;
  };

  const handleClick = () => {
    if (!user.auth) {
      openNotification("warning", "Bạn chưa đăng nhập");
    }
  };

  return (
    <div className="header-dropdown">
      <div className="header-nav-menu-mb">
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={showDrawer}
        >
          <MenuIcon />
        </IconButton> */}
        <Drawer
          title="Organic"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={sideBar.visible}
        >
          {/* <LeftMenu />
              <RightMenu /> */}
          {/* <HeaderNav /> */}
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <Link to="/">TRANG CHỦ</Link>
            </Menu.Item>

            <Menu.Item key="alipay">
              <Link to="/supplier">NHÀ CUNG CẤP</Link>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Link to="/supplier">NHÀ CUNG CẤP</Link>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Link to="/supplier">NHÀ CUNG CẤP</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
      {/* <div className="header-dropdown-favorits" onClick={handleClick}>
        <Link to="/favorites">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <img src={favor} alt="" />
            </Badge>
          </IconButton>
        </Link>
      </div> */}
      <div className="header-dropdown-bag" onClick={handleClick}>
        <Link to="/cart">
          <Badge badgeContent={test() === 0 ? "" : test()} color="error">
            <img src={bag} alt="" />
          </Badge>
        </Link>
      </div>
      <div className="header-dropdown-profile">
        {user.auth ? (
          <>
            <ProfileLogin />
            <Link to="/account">
              <img src={profile} alt="" />
            </Link>
          </>
        ) : (
          <div onClick={handleClick}>
            <Link to="/account">
              <img src={profile} alt="" />
            </Link>
          </div>
        )}
      </div>
      {/* {token ? <ProfileLogin /> : <></>} */}
    </div>
  );
}

export default HeaderDropdown;
