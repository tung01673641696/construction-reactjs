import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../redux/reducers/user";

import avatar from "../../../assets/images/account/avatar.jpg";
import "./AccountInfo.scss";
import ChangePassword from "../ChangePassword/ChangePassword";
import { validateName } from "../../../utils/getValidMessage";
import { validateDate } from "../../../utils/getValidMessage";
import { useEffect } from "react";
import { updateInfoUser } from "../../../redux/reducers/user";

function AccountInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log("user.data", user.data);

  const [fullname, setFullname] = useState(user.data.full_name);
  const [date, setDate] = useState(user.data.date_of_birth)
  const [error, setError] = useState({})

  console.log("hhhh",fullname)
  const data = {
    full_name: fullname,

  }

  const handleUpdateInfo = () => {
    dispatch(updateInfoUser(user.data.id,data))
  }

  console.log(date)

  return (
    <div className="account-user-info">
      <p className="account-user-info-title"> THÔNG TIN TÀI KHOẢN </p>
      <div className="account-info-main box-shadow">
        {user.data.avatar ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/${user.data.avatar}`}
            alt="error"
          />
        ) : (
          <img src={avatar} alt="" />
        )}{" "}
        <div className="account-info-main-form">
          <label>Họ và tên</label>
          <br />
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/> 

          <div className="error">
            {
              validateName(fullname) ? null : (<div>Nhập sai cú pháp</div>)
            }
          </div>
          <br />
          <label>Email</label>
          <br />
          <input type="text" value={user.data.email} disabled />
          <br />
          <div className="account-form-input">
            <div className="account-form-item account-form-mr">
              <label>Số điện thoại</label>
              <br />
              <input
                className=""
                type="text"
                value={user.data.phone}
                disabled
              />
              <br />
            </div>
            <div className="account-form-item">
              {/* <label>Ngày sinh</label>
              <br />
              <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
              <div className="error">
                {
                  validateDate(date) ? null : (<div>Nhập sai cú pháp</div>)
                }
              </div>
              <br /> */}
            </div>
          </div>
          <label>Giới tính</label>
          <div className="account-form-radio">
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Name</label>

            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Nữ</label>

            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Khác</label>
          </div>
          {/* <div className="account-form-change" onClick={handleOpen}>
            Đổi mật khẩu
          </div> */}
          {/* <ChangePassword /> */}
          {/* need button when press update */}
          <div className="account-user-info-btn" onClick={handleUpdateInfo}>Cập nhật</div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
