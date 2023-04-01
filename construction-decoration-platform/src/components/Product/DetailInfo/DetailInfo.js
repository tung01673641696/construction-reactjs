import React, { useState } from "react";
import "./DetailInfo.scss";

import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import AddCart from "../../Add/AddCart/AddCart";
import DetailDescribeProduct from "./DetailDescribeProduct";
import DetailCountProduct from "./DetailCountProduct";

function DetailInfo({ detail }) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count >= detail.quantity) {
      setCount(detail.quantity);
    } else {
      setCount(count + 1);
    }
  };
  const handleDecrease = () => {
    if (count === 1) {
      setCount(1);
    } else if (count >= detail.quantity) {
      setCount(detail.quantity);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="detail-info">
      <p className="detail-info-name">{detail.name} </p>
      <p className="detail-info-brands">
        Nhãn hiệu : <span>{detail?.category?.name}</span> 
        SKU{" "} <span>{detail?.category?.id}</span>
      </p>
      {/* <div className="line" style={{height:'1px'}}></div> */}
      <div className="detail-info-rating">
        <Rating
          name="simple-controlled"
          value={4}
          onChange={(event, newValue) => {
            //   setValue(newValue);
          }}
        />
        <p className="detail-info-buy">Đã bán : {detail.total_sold}</p>
      </div>
      <p className="detail-info-price">
        {" "}
        {detail.price?.toLocaleString("de-DE")} VNĐ
      </p>
      <p className="detail-info-discount">
        <span>
          {new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "VND",
          }).format(detail.original_price)}
        </span>{" "}
        Tiết kiệm:{" "}
        {new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "VND",
        }).format(`${detail.original_price - detail.price}`)}
      </p>
      <DetailCountProduct quantity={detail.quantity} />
      <DetailDescribeProduct detail={detail} />
      <div className="detail-info-quantity">
        <p>Số lượng</p>
        <div className="detail-info-count">
          <div onClick={() => handleDecrease()}>
            <HorizontalRuleIcon />
          </div>

          <div className="height-line"></div>
          <p>{count}</p>
          <div className="height-line"></div>
          <div onClick={() => handleIncrease()}>
            <AddIcon />
          </div>
        </div>
        <p>Có {detail.quantity} sản phẩm sẵn hàng</p>
      </div>
      <AddCart count={count} detail={detail}/>
    </div>
  );
}

export default DetailInfo;
