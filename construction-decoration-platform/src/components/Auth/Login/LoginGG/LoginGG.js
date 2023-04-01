import React, { useEffect } from "react";
import "./LoginGG.scss";
import GoogleLogin from "react-google-login";

const clientId = "520809129836-ml64aja6nhtbss9p4mml73otjjcumuh9.apps.googleusercontent.com";
function LoginGG() {
  const googleSuccess = async (res) => {
    console.log("In googlesuccess", res);
    // try {
    //   console.log("G sign in success", res);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const googleError = (err) => {
    console.error("Google sign in failed.", err);
  };

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse.scope),
  //   flow: "auth-code",
  // });

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Đăng nhập với Google"
      onSuccess={googleSuccess}
      onFailure={googleError}
      cssClass="my-google-button-class"
      cookiePolicy={"single_host_origin"}
      autoLoad={false}
      responseType="code"
    />
    // <GoogleLogin
    //   onSuccess={(credentialResponse,useOneTap) => {
    //     console.log(credentialResponse);
    //     console.log("onetop", useOneTap);
    //   }}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    //   cssClass="my-google-button-class"
    // />

    // <button onClick={() => login()}>Sign in with Google 🚀 </button>
  );
}

export default LoginGG;
