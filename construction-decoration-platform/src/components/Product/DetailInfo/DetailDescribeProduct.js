import React from "react";
import './DetailInfo.scss'

function DetailDescribeProduct({detail}) {
  return (
    <div className="detail-describe-product">
      <p className="describe-title">Mô tả :  </p>
      <p>
        {detail.des}
      </p>
    </div>
  );
}

export default DetailDescribeProduct;
