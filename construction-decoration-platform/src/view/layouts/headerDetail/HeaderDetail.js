import React from "react";
import "./HeaderDetail.scss";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderDetailBody from "./headerDetailBody/HeaderDetailBody";

function HeaderDetail() {
    return (
        <div className="header">
            <HeaderTop />
            <HeaderDetailBody />
        </div>
    );
}

export default HeaderDetail;
