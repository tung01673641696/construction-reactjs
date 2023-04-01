import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import onePayApi from '../../../api/onepayApi';

const PaymentOnepay = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const key = searchParams.get('vpc_MerchTxnRef');
    const type = searchParams.get('type');

    useEffect(() => {
        if (key !== null && type === '0') {
            const checkTransactionPackage = async () => {
                const res = await onePayApi.checkTransactionOrder({ payment_code: key.toString() });
            };
            checkTransactionPackage();
        }
    }, [key, type]);

    const handleToLogin = () => {
        if (key !== null && type === '0') {
            navigate('/');
        }
    };

  return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
        }}
    >
        Chúc mừng bạn đã đăng ký thành công.{' '}
        <button
            style={{
                background: '#ffffff',
                cursor: 'pointer',
                color: '#0000FF',
                border: "none"
            }}
            onClick={handleToLogin}
        >
            Bấm vào đây
        </button>{' '}
        để trở về.
        </div>
  )
}

export default PaymentOnepay
