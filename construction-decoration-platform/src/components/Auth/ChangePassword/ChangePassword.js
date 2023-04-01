import React, { useEffect } from "react";
import { useState } from "react";

import "./ChangePassword.scss";
import Header from "../../../view/layouts/header/Header";
import Footer from "../../../view/layouts/footer/Footer";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/images/forgotPassword/arrow.svg"

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { openNotification } from "../../Alert/AlertProduct";

import { SnackbarAlert } from "../../Alert/SnackBar";

import userApi from "../../../api/userApi";
import { changePassword } from "../../../redux/reducers/user";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [ searchParams ] = useSearchParams()
  const token = searchParams.get('key')
  const navigate = useNavigate()

  console.log("token",token)
  // const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  // const [openOldPassword, setOpenOldPassword] = useState(false);
  // const [openNewPassword, setOpenNewPassword] = useState(false);
  // const [openNewPasswordConfirm, setOpenNewPasswordConfirm] = useState(false);
  // const [openComparePw, setOpenComparePw] = useState(false);

  // const [openValidatePw, setOpenValidatePw] = useState(false);




  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     // return;
  //   }
  //   setOpenOldPassword(false);
  //   setOpenNewPassword(false);
  //   setOpenNewPasswordConfirm(false);
  //   setOpenComparePw(false);
  // };

  const handleSubmit = async () => {
  //   if (oldPassword.length === 0) {
  //     setOpenOldPassword(true);
  //     return;
  //   }
  //   if (newPassword.length === 0) {
  //     setOpenNewPassword(true);
  //     return;
  //   }
    // if (!validatePw(newPassword)) {
    //   setOpenValidatePw(true);
    //   return;
    // }
    // if (newPasswordConfirm.length === 0) {
    //   setOpenNewPasswordConfirm(true);
    //   return;
    // }

    // if (newPassword !== newPasswordConfirm) {
    //   setOpenComparePw(true);
    //   // openNotification("error", "Mật khẩủ không trùng nhau");
    //   return;
    //   // openNo
    // }
    const data = {
      token: token,
      password: newPassword,
    };

    console.log("data",data)

    try {
      const res = await userApi.confirmPassword(data);
      console.log("res", res);
      if (res.status == 200) {
        openNotification("success", "Đổi mật khẩu thành công");
        navigate("/")
      } else {
        openNotification("error", "Đổi mật khẩu thất bại");
      }

      return res;
    } catch (error) {
      openNotification("error", "Đổi mật khẩu không thành công");
    }
  };
  return (
    <div className='change_password'>
      <Header />

      <div className="form">
        <div className="form_box">
          <div className='link'>
            <Link to="/login"><img src={Arrow} /><span>Trở lại Đăng nhập</span></Link>
          </div>

          <div className="title">
            <h3>Đổi mật khẩu</h3>
          </div>



          <div className="content">
            <div className="content_child">
              <input
                type="text"
                placeholder="Nhập mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

         

          <button
            className="button" 
            onClick={() => handleSubmit()}>
              Tiếp tục
          </button>
        </div>
      </div>

      <Footer />
    </div>
  //   <div className="change-password">

  //       <Box sx={{ ...style }}>
  //         <div className="box-main-login">
  //           <div
  //             className="box-main-title"
  //             style={{
  //               marginTop: "10px",
  //             }}
  //           >
  //             <p>Đổi Mật Khẩu</p>
  //           </div>
  //           <div className="box-main-form">
  //             <div>
  //               <label>Mật Khẩu Hiện Tại</label>
  //               <input
  //                 type="password"
  //                 placeholder="Mật Khẩu Hiện Tại"
  //                 value={oldPassword}
  //                 onChange={(e) => {
  //                   setOldPassword(e.target.value);
  //                 }}
  //               />{" "}
  //             </div>
  //             <div>
  //               <label>Mật khẩu Mới</label> <br />
  //               <input
  //                 value={newPassword}
  //                 onChange={(e) => {
  //                   setNewPassword(e.target.value);
  //                 }}
  //                 type="password"
  //                 placeholder="Nhập Mật Khẩu Mới"
  //                 style={{ marginBottom: "10px" }}
  //               />{" "}
  //             </div>
  //             <div>
  //               <label>Nhập Lại Mật khẩu Mới</label>
  //               <input
  //                 value={newPasswordConfirm}
  //                 onChange={(e) => {
  //                   setNewPasswordConfirm(e.target.value);
  //                 }}
  //                 type="password"
  //                 placeholder="Nhập Lại Mật Khẩu Mới"
  //                 style={{ marginBottom: "10px" }}
  //               />{" "}
  //             </div>
  //           </div>
  //         </div>
  //         <div className="box-main-login-normal">
  //           <div className="box-main-login-cancel" onClick={handleFormClose}>
  //             Hủy bỏ
  //           </div>
  //           <div
  //             className="box-main-login-cancel box-main-login-approve"
  //             onClick={() => handleSubmit()}
  //             style={{
  //               color: "white",
  //             }}
  //           >
  //             Xác nhận
  //           </div>
  //           <Snackbar
  //             open={openOldPassword}
  //             onClose={handleClose}
  //             autoHideDuration={3000}
  //             message={"Vui lòng nhập mật khẩu hiện tại"}
  //             action={action}
  //             sx={{
  //               marginBottom: "40px",
  //               marginLeft: "3px",
  //             }}
  //           />
  //           <Snackbar
  //             open={openNewPassword}
  //             onClose={handleClose}
  //             autoHideDuration={3000}
  //             message={"Vui lòng nhập mật khẩu mới"}
  //             action={action}
  //             sx={{
  //               marginBottom: "40px",
  //               marginLeft: "3px",
  //             }}
  //           />
  //           <Snackbar
  //             open={openNewPasswordConfirm}
  //             onClose={handleClose}
  //             autoHideDuration={3000}
  //             message={"Vui lòng nhập lại mật khẩu mới"}
  //             action={action}
  //             sx={{
  //               marginBottom: "40px",
  //               marginLeft: "3px",
  //             }}
  //           />
  //           <Snackbar
  //             open={openComparePw}
  //             onClose={handleClose}
  //             autoHideDuration={3000}
  //             message={"Mật khẩủ và nhập lại mật khẩu không trùng nhau"}
  //             action={action}
  //             sx={{
  //               marginBottom: "40px",
  //               marginLeft: "3px",
  //             }}
  //           />
  //           <Snackbar
  //             open={openValidatePw}
  //             onClose={handleClose}
  //             autoHideDuration={3000}
  //             message={"Mật khẩu không đủ mạnh"}
  //             action={action}
  //             sx={{
  //               marginBottom: "40px",
  //               marginLeft: "3px",
  //             }}
  //           />

  //           {/* <SnackbarAlert
  //             handleOpen={openOldPassword}
  //             message={"Vui lòng nhập mật khẩu hiện tại"}
  //           />
  //           <SnackbarAlert
  //             handleOpen={openNewPassword}
  //             message={"Vui lòng nhập mật khẩu mới"}
  //           /> */}
  //         </div>
  //       </Box>
  //     </Modal>
  //   </div>
  );
}

export default ChangePassword;
