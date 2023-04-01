import React from "react";
import "./TransportOrder.scss";

function TransportOrder() {
  const log = () => {
    console.log("heee");
  };
  return (
    <div className="transport-order box-shadow">
      <div className="transport-order-checkbox">
        <input type="radio" id="huey" name="drone" value="huey" checked />
        <label for="huey">
          Giao hàng tiết kiệm (dự kiến nhận được sau 3 ngày, không kể ngày nghỉ)
        </label>
      </div>
      <div className="transport-order-checkbox">
        <input type="radio" id="huey1" name="drone" value="huey1" checked />
        <label for="huey1">Giao hàng nhanh (nhận trong 24h)</label>
      </div>
    </div>
  );
}

export default TransportOrder;
