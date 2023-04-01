import React from "react";
import "./StickyProduct.scss";
import Shield from "../../assets/images/product/Shield.svg";
import banner from "../../assets/images/product/banner.svg";
function StickyProduct() {
  return (
    <div className="sticky-product">
      <div className="stick-product-ads">
        <div className="stick-product-ads-item">
          <img src={Shield} alt="" />
          <p>Cam kết chính hãng 100%</p>
        </div>
        <div className="stick-product-ads-item">
          <img src={Shield} alt="" />
          <p>Chứng nhận bởi Eplaza</p>
        </div>
        <div className="stick-product-ads-item">
          <img src={Shield} alt="" />
          <p>Hoàn tiền 100% nếu hàng giả</p>
        </div>
      </div>
      <div className="stick-product-banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default StickyProduct;
