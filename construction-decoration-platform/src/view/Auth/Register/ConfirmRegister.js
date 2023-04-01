import React from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import userApi from '../../../api/userApi'

const ConfirmRegister = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const token = searchParams.get('key');

    useEffect(() => {
        const sendToken = async () => {
            await userApi.confirmRegister({
                token: token.toString(),
            });
        };
        sendToken();
    }, [token]);

  return (
    <h3>
      Chúc mừng bạn đã đăng ký thành công. <Link to={'/'} >Bấm vào đây</Link> để đăng nhập
    </h3>
  )
}

export default ConfirmRegister
