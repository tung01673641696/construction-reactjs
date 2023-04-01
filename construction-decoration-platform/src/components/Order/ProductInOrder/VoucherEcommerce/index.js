import { Radio } from 'antd';
import React, { useState } from 'react'

const VoucherEcommerce = ({ dataVoucher, handleAddVoucherExchange, setEditVoucherExchangeModal }) => {
    const [idVoucher, setIdVoucher] = useState();

    const onChangeAddress = (e) => {
        setIdVoucher(e.target.value);
    };

    const handleSelectVoucher = () => {
        handleAddVoucherExchange(idVoucher);
        setEditVoucherExchangeModal(false);
    };
  return (
    <div className="voucher-wrapper">
            <div className="voucher-inner">
                <div className="voucher-title">
                    <h2>Có thể chọn một voucher</h2>
                </div>
                <div className="list-voucher">
                    <Radio.Group onChange={onChangeAddress}>
                        {dataVoucher?.data?.can?.map((item) => {
                            return (
                                <Radio value={item}>
                                    <div className="voucher-item">
                                        <div className="name-voucher">
                                            <span>Miễn phí vận chuyển</span>
                                        </div>
                                        <div className="voucher-details">
                                            <div className="voucher-details-left">
                                                <span className="desc">{item.name}</span>
                                                <span className="expiry-date">HSD: ...</span>
                                            </div>
                                            {/* <div className="voucher-details-right">
                                            <span>Điều kiện</span>
                                        </div> */}
                                        </div>
                                    </div>
                                </Radio>
                            );
                        })}
                        {dataVoucher?.data.cant?.map((item) => {
                            return (
                                <Radio value={item.id} disabled>
                                    <div className="voucher-item">
                                        <div className="name-voucher">
                                            <span>Miễn phí vận chuyển</span>
                                        </div>
                                        <div className="voucher-details">
                                            <div className="voucher-details-left">
                                                <span className="desc">{item.name}</span>
                                                <span className="expiry-date">HSD: ...</span>
                                            </div>
                                            {/* <div className="voucher-details-right">
                                            <span>Điều kiện</span>
                                        </div> */}
                                        </div>
                                    </div>
                                </Radio>
                            );
                        })}
                    </Radio.Group>
                </div>
                <div className="action-select">
                    <button onClick={handleSelectVoucher}>Chọn</button>
                </div>
            </div>
        </div>
  )
}

export default VoucherEcommerce