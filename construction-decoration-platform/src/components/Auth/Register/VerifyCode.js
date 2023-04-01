import React, { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import styled from "styled-components";
import userApi from "../../../api/userApi";
// import { openNotification } from "../../../../components/Alert/Alert";
import { ToastContainer, toast } from "react-toastify";

const StyledButton = styled.button`
  padding: 12.5px 0px 12.5px 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  border: none;
  background-color: #262f56;
  color: white;
  border-radius: 7px;
  &:hover {
    background-color: #262f38;
  }
`;

export const StyledSeconds = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.002em;
  color: rgba(255, 255, 255, 0.4);
`;

const StyledError = styled.div`
  margin-top: 13px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.004em;
  color: #ef6c65;
`;

const StyledReactInputVerificationCode = styled.div`
  display: flex;
  justify-content: center;

  --ReactInputVerificationCode-itemWidth: 40px;
  --ReactInputVerificationCode-itemHeight: 48px;
  --ReactInputVerificationCode-itemSpacing: 8px;

  .ReactInputVerificationCode__item {
    font-size: 16px;
    font-weight: 500;
    color: #fff;

    background: rgba(53, 67, 98, 1);
    border: 1px solid
      ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
    border-radius: 4px;
    box-shadow: none;
  }

  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
    border: 1px solid #36c6d9;
  }
`;
const VerifyCode = ({ email, setOpen }) => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState(null);

  //   const router = useRouter();

  async function handleVerify() {
    // console.log("Adsa");
    const res = await userApi.verifyCode(value);
    // console.log("res",res);
    if (res.message == "Success") {
      toast.success("Xác thực thành công");
      // router.push("/auth/signin");
      setOpen(false);
    } else {
      toast.error("Sai mã xác thực");
    }
  }
  return (
    <>
      {
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Nhập mã gửi về: {email}
        </p>
      }
      <StyledReactInputVerificationCode isInvalid={isInvalid}>
        <ReactInputVerificationCode
          value={value}
          placeholder={null}
          length={6}
          onChange={(newValue) => {
            setValue(newValue);

            if (newValue !== "") {
              setError(null);
            }
          }}
        />
      </StyledReactInputVerificationCode>

      {error && <StyledError>{error}</StyledError>}

      <StyledButton onClick={handleVerify}>Xác Nhận</StyledButton>
    </>
  );
};

export default VerifyCode;
