import React, { useEffect, useState } from "react";
import "./ChangeOrder.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getCity,
  deleteAddress,
  getListAddress,
} from "../../../redux/reducers/address";

import ModalAddress from "./ModalAddress/ModalAddress";

function ChangeOrder({ setAddress }) {
  const dispatch = useDispatch();
  const [addressDefault, setAddressDefault] = useState();
  const { listAddress, addAddressSelect } = useSelector(
    (state) => state.addressReducer
  );
  useEffect(() => {
    dispatch(getCity());
    dispatch(getListAddress());
  }, [dispatch]);

  useEffect(() => {
    if (listAddress) {
      const filterAddress = listAddress.find((it) => it.default_address === 0);
      setAddressDefault(filterAddress);
    }
  }, []);

  // console.log("addressDefault", addressDefault);

  useEffect(() => {
    setAddress(addressDefault);
  }, [addressDefault])

  return (
    <div className="change-order-main box-shadow">
      {addressDefault && (
        <>
          <div className="change-order-text">
            <p className="change-order-home">Địa Chỉ Nhận Hàng</p>
            <ModalAddress setAddressDefault={setAddressDefault} />
          </div>
          <div className="change-order-text">
            <p className="change-order-name">
              {addressDefault.name} | {addressDefault.phone}
            </p>
          </div>
          <div className="change-order-text">
            <p className="change-order-detail">
              {addressDefault.address_detail.address}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ChangeOrder;
