import { Alert, notification } from "antd";

export const openNotification = (type, message) => {
  if (type === "error") {
    message = "Sai Tài Khoản Hoặc Mật Khẩu";
  }
  if (type === "success") {
    message = "Đăng Nhập Thành Công !";
  }
  if (type === "warning") {
    message = message;
  }

  const args = {
    message: "Thông báo!!",
    description: <Alert message={message} type={type} />,
    duration: 3,
  };
  notification.open(args);
};
