import React from "react";
import "./LoginFB.scss";
import FacebookLogin from "react-facebook-login";
import { Alert, notification } from "antd";
import FacebookIcon from "@mui/icons-material/Facebook";

function LoginFB() {
  const componentClicked = (response) => {
    console.log(response);
  };
  const openNotification = (type, message) => {
    const args = {
      message: "Thông báo!!",
      description: <Alert message={message} type={type} />,

      duration: 3,
    };
    notification.open(args);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const failedLogin = (response) => {
    localStorage.clear("user");
    openNotification("error", "Đăng nhập thất bại");
  };
  return (
    <FacebookLogin
      // appId="702295034509319"
      addId={process.env.REACT_APP_FACEBOOK_APP_ID}
      fields="name,email,picture"
      scope="public_profile,email"
      onClick={componentClicked}
      callback={responseFacebook}
      textButton="Đăng nhập với Facebook"
      cssClass="my-facebook-button-class"
      onFailure={failedLogin}
      icon={<FacebookIcon color="primary" style={{ marginRight: 5 , marginLeft: 10 }} />}
    />
  );
}

export default LoginFB;
