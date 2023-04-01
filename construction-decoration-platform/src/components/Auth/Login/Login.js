import React from "react";
import "./Login.scss";
import { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
import LoginNormal from "./LoginNormal/LoginNormal";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../../view/layouts/header/Header";
import Footer from "../../../view/layouts/footer/Footer";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { loginFacebook, loginGoogle } from "../../../redux/reducers/user";

function Login() {
  const [username, setUsername] = useState(localStorage.username);
  const [password, setPassword] = useState(localStorage.password);

  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (response) => {
    
    var user = jwt_decode(response.credential);
    const data = {
      user: {
        email: user.email,
        familyName: user.family_name,
        givenName: user.given_name,
        id: user.sub,
        name: user.name,
        photo: user.name,
      },
    };
    dispatch(loginGoogle(data))
    navigate("/")
    };

  const responseFacebook = async (response) => {
    if (response.status !== 'unknown') {
        const data = {
            accessToken: response.accessToken,
            email: response.email,
            name: response.name,
            picture: response.picture,
            id: response.id,
        };

        if (data.id !== undefined) {
            dispatch(loginFacebook(data))
            navigate("/")
        }
    }
};

  console.log("checked",checked)
 
  return (
    <div className="login">
      <Header />

      <div className="login_content">
        <div className="login_box">
            <div className="login_box_title">
              <h3>ĐĂNG NHẬP</h3>
            </div>

            <div className="login_box_form">
              <div className="login_form_ele">
                <label>Email/Số điện thoại</label>
                <input
                  type="text"
                  placeholder="Nhập Email/Số điện thoại"
                  defaultValue={localStorage.username}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />{" "}
              </div>

              <div className="login_form_ele">
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
            </div>

            <div className="password">
              <div className="password-check">
                <input type="checkbox"
                  checked={checked}
                  onChange = {() => setChecked(!checked)} 
                />

                <label>Nhớ mật khẩu</label>
              </div>

              <div className="password-forgot">
                <Link to="/forgot-password">Quên mật khẩu ?</Link>
              </div>
            </div>

            <div className="login_link">
              <div className="login_link_child">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                    handleSubmit(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
              </div>

              <div className="login_link_child">
              <FacebookLogin
                appId="1884946481852695"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                    <button
                        style={{
                            background: '#6686CA',
                            fontSize: '14px',
                            height: '40px',
                            color: '#ffffff',
                            border: '1px solid #6686CA',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={renderProps.onClick}
                    >
                    <FacebookIcon />
                    Đăng nhập với Facebook
                  </button>
                )}
              />
              </div>
            </div>

            <div className="link_register">
              <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
            </div>
            
            <div className="login_button">
              <LoginNormal password={password} username={username} checked={checked}/>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login;
