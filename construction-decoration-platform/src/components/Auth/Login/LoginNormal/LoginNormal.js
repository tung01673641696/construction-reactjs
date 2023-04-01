import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LoginNormal.scss";
import userApi from "../../../../api/userApi";
import { Alert, notification } from "antd";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { openNotification } from "../../../Alert/AlertProduct";
import usePagination from "@mui/material/usePagination/usePagination";

// import { ToastContainer, toast } from 'react-toastify';
import { login, setError } from "../../../../redux/reducers/user";
import { useNavigate } from "react-router-dom";

function LoginNormal({ password, username, checked }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading ,user} = useSelector((state) => state.userReducer);


  const handleSubmit = async () => {
    const data = {
      user_name: username,
      password: password,
    };


    if (username.length === 0 || password.length === 0) {
      openNotification("error", "Vui lòng nhập đủ thông tin ");
      return;
    }
    try {
      const res = await dispatch(login(data));
      console.log("res",res)
      if(res?.payload?.data?.type === 3){
        navigate('/admin')
      }else if(res?.payload?.status === 200){
        navigate('/')
      }

    } catch (error) {
      console.log(error);
      openNotification("error", "đăng nhập thất bại");
    }

    if(checked) {
      localStorage.username = username
      localStorage.password = password
    }
  };

  return (
    <>
      {
        loading ? <div
          className="loginnormal"
          onClick={() => handleSubmit()}
        >
          Loading
        </div> : <div
          className="loginnormal"
          onClick={() => handleSubmit()}
        >
          Đăng Nhập
        </div>
      }

    </>
  );
}

export default React.memo(LoginNormal);
