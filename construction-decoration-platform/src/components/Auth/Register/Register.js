
import React, { useState } from "react";
import "./Register.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import userApi from "../../../api/userApi";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StepBar from "../../StepBar/StepBar";
import back from "../../../assets/images/icons/back.png";


import { Collapse } from "antd";
import VerifyCode from "./VerifyCode";

import { validateEmail } from "../../../utils/getValidMessage";

import Header from "../../../view/layouts/header/Header";
import Footer from "../../../view/layouts/footer/Footer";
import { toast } from "react-toastify";

function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [watchStep, setWatchStep] = useState(1);
  const { Panel } = Collapse;
  const [textInput, setTextInput] = useState("");
  const [showVerifyCode, setShowVerifyCode] = useState(false);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const data = {
    user_name: email,
    email: email,
    full_name: fullName,
    password: password,
    phone: phone
  };

  const emailformat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const submitForm = async () => {
    if (fullName.length === 0) {
      toast.error("Vui lòng nhập Họ và tên");
      return;
    }

    if (phone.length === 0) {
      toast.error("Vui lòng nhập số điện thoại");
      return;
    }

    if (email.length === 0) {
      toast.error("Vui lòng nhập địa chỉ email");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email không đúng định dạng");
      return;
    }

    if (password.length === 0) {
      toast.error("Vui lòng nhập mật khẩu");
      return;
    }
    if (confirmPassword.length === 0) {
      toast.error("Vui lòng xác thực mật khẩu");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Xác nhận mật khẩu không giống nhau");
      return;
    }

    if (
      phone.length !== 10 &&
      (
        !phone.startsWith("0") ||
        !phone.startsWith("3", 1) ||
        !phone.startsWith("5", 1) ||
        !phone.startsWith("7", 1) ||
        !phone.startsWith("8", 1) ||
        !phone.startsWith("9", 1)
      )
    ) {
      toast.error("Số điện thoại không đúng");
      return;
    }

    try {
      const registerData = await userApi.registerToken(data);

      console.log('registerData', registerData);

      if (registerData.message == "Success") {
        toast.success("Đăng kí thành công,mời bạn vào gmail để xác thực");
        // setShowVerifyCode(!showVerifyCode);
      }

      if (registerData.errors == "CUSTOMER_HAD_EXIST_BUT_NOT_ACTIVE") {
        toast.error("Tài khoản đã tồn tại");
      }
      if (registerData.errors == "CUSTOMER_MAIL_EXIST_OR_PHONE") {
        toast.error("Email hoặc số điện thoại đã tồn tại");
      }
      if (registerData.errors == "CUSTOMER_EXIST") {
        toast.error("Tài khoản đã được đăng ký");
        // router.push("/auth/signin");

      } else {
        // setShowVerifyCode(!showVerifyCode);
      }
      return registerData;
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="register">
      <Header />

      <div className="register_content">
        <div className="register_box">
          <div className="register_box_title">
            <h3>ĐĂNG KÝ</h3>
          </div>

          <div className="register_box_form">
            <div className="register_form_ele">
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder="Họ và tên"
                value={fullName}
                required
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>


            <div className="register_form_ele">
              <label>Số điện thoại</label>
              <input
                type="tel"
                pattern="^\+84(7\d|8\d|9\d)\d{9}$"
                required
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="register_form_ele">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                placeholder="Email"
                required
              />
            </div>

            <div className="register_form_ele">
              <label>Mật khẩu </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Nhập mật khẩu"
                style={{ marginBottom: "10px" }}
              />{" "}
            </div>

            <div className="register_form_ele">
              <label>Nhập lại mật khẩu </label>
              <input
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                style={{ marginBottom: "10px" }}
                type="password"
                placeholder="Nhập lại mật khẩu"
              />{" "}
            </div>
          </div>

          <button
            className="handle-register"
            onClick={() => {
              submitForm();
            }}
          >
            Đăng ký
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}


export default Register

