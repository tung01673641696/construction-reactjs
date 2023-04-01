import { Alert, notification } from "antd";

export const openNotification = (type, message) => {
  if (type === "error") {
    message = message
  }
  if (type === "success" ) {
    message = message;
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
