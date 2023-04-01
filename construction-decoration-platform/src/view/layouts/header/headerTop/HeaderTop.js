import React, { useState } from "react";
import "./HeaderTop.scss";
import RegisterStore from "../../../../components/Store/RegisterStore/RegisterStore";

function HeaderTop() {
  
  return (
    <div className="header-top">
      <div className="header-top-text">
        <p className="header-top-text-pc">
          Need help ? 1 xxx(VIETNAM only) + 84 - xxxxxxxxxx(Outside VIETNAM)
          contact @Destruction.VN{" "}
        </p>
        <RegisterStore/>
        <p className="header-top-text-mobile">+ 84 - xxxxxxxxxx</p>
        {/* responsive mobile */}
        {/* <p className="header-top-mobile">+84-xxxxxxxxxx</p> */}
      </div>{" "}
      <div className="header-top-language">
        <select id="language">
          <option value="vietnamese"> Vietnamese </option>{" "}
          <option value="english"> English </option>{" "}
        </select>{" "}
        <select id="money">
          <option value="vnd"> VNĐ </option>
          <option value="usd"> USD </option>{" "}
        </select>{" "}
      </div>{" "}
    </div>
  );
}

export default HeaderTop;
