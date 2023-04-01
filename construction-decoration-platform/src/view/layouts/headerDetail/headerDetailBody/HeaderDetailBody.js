import React from "react";
import "./HeaderDetailBody.scss";
import { Link } from "react-router-dom";
import Search from "../../../../components/Search/Search";
import HeaderDropdown from "../../../../components/Nav/HeaderDropdown/HeaderDropdown";
import HeaderNav from "../../../../components/Nav/HeaderNav/HeaderNav";
import logo from '../../../../assets/images/home/logoConstruction.png'


function HeaderDetailBody() {
    return (
        <>
            <div className="header-detail-body">
                <Link to="/" className="vietindustry">
                <img width={120} src={logo} alt="" />
                </Link>
                <Search />
                <HeaderDropdown />
            </div>
            <div className="line"></div>
            <div className="header-detail-nav">
                <HeaderNav />
            </div>
            <div className="line"></div>
        </>
    );
}

export default HeaderDetailBody;
