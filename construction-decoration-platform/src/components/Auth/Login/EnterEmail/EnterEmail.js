import React from "react";
import "./Login.scss";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginGG from "./LoginGG/LoginGG";
import LoginFB from "./LoginFB/LoginFB";
import LoginNormal from "./LoginNormal/LoginNormal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { gapi } from "gapi-script";

import { Link } from "react-router-dom";


const clientId =
  "409140970351-sjjckifs4h71ssdemf55ikirpe2ake58.apps.googleusercontent.com";

function EnterEmail() {
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({ clientId: clientId, scope: "" });
  //   }
  //   gapi.load("client:auth2", start);
  // },[]);

  // console.log(gapi.auth.getToken().access_token);

  //style mui
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "50%",
    // height: "65%",
    width: "540px",
    height: "450px",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    paddingBottom: 4,
    paddingTop: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="auth-login">
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className="box-main-login">
            <div className="box-main-title mb-2 mt-2">
              <p>Quên Mật Khẩu</p>
            </div>
            <div className="box-main-form">
              <div style={{
                marginTop: "20px",

              }}>
                <label>Nhập Địa Chỉ Email</label> <br />
                <input
                  type="email"
                  placeholder="Nhập Địa Chỉ Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
            <div className="box-main-form-forget" onClick={handleClose}>
              {/* <ForgotPassword setOpen={setOpen} /> */}
            </div>
            {/* <p className="box-main-or">HOẶC</p> */}
            <div className="box-main-login-social">
              {/* not update */}
              {/* <LoginFB />
              <LoginGG /> */}
            </div>
          </div>

          <div className="box-main-login-normal">
            <div className="box-main-login-cancel" onClick={handleClose}>
              Hủy bỏ
            </div>
            <LoginNormal password={password} username={username} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EnterEmail;