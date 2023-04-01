import React from "react";
import "./FooterBottom.scss";
import Social1 from "../../../../assets/images/footer/Social1.svg";
import Social2 from "../../../../assets/images/footer/Social2.svg";
import Social3 from "../../../../assets/images/footer/Social3.svg";
import Social4 from "../../../../assets/images/footer/Social4.svg";

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-container">
        <div className="footer-bottom-smiletech">
          © 2022 SmileTech. All rights reserved
        </div>
        <div className="footer-bottom-industry">Construction & Decoration Platform</div>
        <div className="footer-bottom-icon">
          <img src={Social1} alt="" />
          <img src={Social2} alt="" />
          <img src={Social3} alt="" />
          <img src={Social4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
