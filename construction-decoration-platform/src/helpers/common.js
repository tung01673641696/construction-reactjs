import { notification } from "antd";
import Snackbar from "@mui/material/Snackbar";
export const openNotification = (type, message) => {
  const args = {
    message: "Thông báo!!",
    description: (
      <Snackbar
        // open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        // action={action}
      />
    ),
    duration: 3,
  };
  notification.open(args);
};

export const token = localStorage.getItem("access_Token");
export const refreshToken = localStorage.getItem("refresh_Token");
