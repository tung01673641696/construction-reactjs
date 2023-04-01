import React, { useEffect, useState } from "react";
import "./AddressInfo.scss";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCity,
  deleteAddress,
  getListAddress,
} from "../../../redux/reducers/address";
import ShowAddress from "../../ShowAddress/ShowAddress";
import success from "../../../assets/images/account/defautl.svg";

function AddressInfo() {
  const [showAdd, setShowAdd] = useState(false);

  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch();
  const { listAddress } = useSelector((state) => state.addressReducer);
  useEffect(() => {
    dispatch(getCity());
    dispatch(getListAddress());
  }, [showAdd]);

  return (
    <div className="account-address text-title">
      {showAdd ? (
        <>
          <div className="account-address-title">THÊM ĐỊA CHỈ</div>
          <div className="account-address-add">
            <ShowAddress setShowAdd={setShowAdd} />
            {/* <div className="account-address-add-btn">
              <div
                className="account-address-add-cancel"
                onClick={() => {
                  setShowAdd(false);
                }}
              >
                TRỞ LẠI
              </div>
              <div className="account-address-add-confirm">HOÀN THÀNH</div>
            </div> */}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="account-address-title">SỔ ĐỊA CHỈ</div>
          <div
            className="account-address-btn"
            onClick={() => {
              setShowAdd(true);
            }}
          >
            <AddIcon color="black" />
            <p>Thêm địa chỉ</p>
          </div>
          {listAddress
            ? listAddress.map((item) => (
              <div className="account-address-item">
                <div className="account-address-name">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.name ? item.name : ""}
                    <span>
                      {item.default_address === 0 ? (
                        <div style={{
                          display: "flex",
                          marginLeft: "5px"
                        }}>
                          <img src={success} alt="" />
                          <div style={{
                            marginLeft: "5px"
                          }}>Địa chỉ mặc định</div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </span>
                  </p>
                  <div className="account-address-change">
                    <p>
                      <Link to={`edit-address/${item.id}`}>Chỉnh sửa</Link>
                    </p>
                    <p
                      onClick={() => {
                        dispatch(deleteAddress(item.id));
                      }}
                    >
                      Xóa
                    </p>
                  </div>
                </div>

                <div className="default-address">
                  <button>Đặt làm địa chỉ mặc định</button>
                </div>

                <div className="account-address-home">
                  Địa chỉ: {item?.address_detail?.address}
                </div>
                <div className="account-address-phone">
                  Điện thoại: {item.phone}
                </div>
              </div>
            ))
            : ""}
        </>
      )}

    </div>
  );
}

export default AddressInfo;
