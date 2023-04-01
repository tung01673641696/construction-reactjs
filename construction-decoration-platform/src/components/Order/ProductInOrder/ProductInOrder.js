import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, message, Modal, Skeleton } from "antd";
import { useEffect } from "react";
import { getListAddress } from "../../../redux/reducers/address";
import voucherApi from "../../../api/voucherApi";
import orderApi from "../../../api/orderApi";
import ChangeAddress from "./ChangeAddress";
import { applyVoucherEcommerce, applyVoucherStore, checkoutCart } from "../../../redux/reducers/order";
import formatCash from "../../../utils/formatCash";
import VoucherStore from "./VoucherStore";
import VoucherEcommerce from "./VoucherEcommerce";
import onePayApi from "../../../api/onepayApi";
import "./ProductInOrder.scss"

const ProductInOrder = () => {

  const { dataCheckout, loadingCheckoutCart } = useSelector((state) => state.orderReducer);
  const { listAddress } = useSelector((state) => state.addressReducer);
    const [customerId, setCustomerId] = useState(0);
    const [editVoucherEcommerceModal, setEditVoucherEcommerceModal] = useState(false);
    const [editAddressModal, setEditAddressModal] = useState(false);
    const [editVoucherModal, setEditVoucherModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [dataVoucherExchange, setDataVoucherExchange] = useState();
    const [dataVoucher, setDataVoucher] = useState();
    const [paymentItems, setPaymentItems] = useState([
        {
            id: 'onepay',
            name: 'Ví OnePay',
            active: false,
        },
        {
            id: 'cod',
            name: 'Thanh toán khi nhận hàng',
            active: true,
        },
    ]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addressReplace, setAddressReplace] = useState();

    const dataCart = localStorage.getItem("cart") === null ? [] : JSON.parse(localStorage.getItem("cart"));
console.log(dataCart);
    useEffect(() => {
    dispatch(getListAddress())
    }, [])

  useEffect(() => {
    const addressDefault = listAddress.find((item) => item.default_address === 0);
    setAddressReplace(addressDefault);
    setCustomerId(addressDefault?.customer_id);
}, [listAddress]);
useEffect(() => {
    const ship = Promise.all(
      dataCart.map( async (item) => {
        const data = {
          ship_unit_id: item.ship_unit_id,
          from_district: item?.address.district.ghn_id,
          to_district: addressReplace?.address_detail.district.ghn_id,
          to_ward_code: addressReplace?.address_detail.ward.ghn_id,
          products: item?.products.map((item) => {
            return {
                ...item,
            };
        }),
        }
        const res = await orderApi.getFeeShip(data);
        return res;

      })
    )

    const response = ship.then(async (value) => {
      const lastData = {
          orders: dataCart.map((item, index) => {
              return {
                  ...item,
                  ship_price: value[index]?.data[0]?.total,
              };
          }),
      };
      console.log("lastdata", lastData);

      dispatch(checkoutCart(lastData));
    });
  }, [addressReplace])

const handleAddVoucher = async (value) => {
    const tpData = {
        orders: dataCheckout.orders.map((item) => {
            if (item.id === value.store_id) {
                return {
                    ...item,
                    voucher_id: value.id,
                };
            } else {
                return {
                    ...item,
                };
            }
        }),
        all_product_price: dataCheckout.all_product_price,
        all_shipping_fee: dataCheckout.all_shipping_fee,
        total_price: dataCheckout.total_price,
    };

    dispatch(applyVoucherStore(tpData));
};




  const handleChangeAddress = (value) => {
    setEditAddressModal(false);
    const tpAddress = listAddress.find((item) => item.id === value);
    setAddressReplace(tpAddress);
};

const handleChoosePayment = (item) => {
    setPaymentItems(
        paymentItems.map((itemPay) => {
            if (itemPay.id === item.id) {
                return {
                    ...itemPay,
                    active: true,
                };
            } else {
                return {
                    ...itemPay,
                    active: false,
                };
            }
        }),
    );
    setPaymentMethod(item.id);
};

const handleChooseVoucher = async (value) => {
    const data = {
        store_id: value.id,
        customer_id: customerId,
        products: value.products.map((item) => {
            return {
                id: item.id,
                quantity: item.quantity,
                price: item.price,
            };
        }),
    };

    const res = await voucherApi.getVoucherStore(data, 1);
    setDataVoucher(res);
    setEditVoucherModal(true);
};

const handleAddVoucherExchange = async (value) => {
    const tpData = {
        orders: dataCheckout.orders,
        all_product_price: dataCheckout.all_product_price,
        all_shipping_fee: dataCheckout.all_shipping_fee,
        total_price: dataCheckout.total_price,
        voucher_ecommerce: value.id,
        reduce_all_product_price: dataCheckout.reduce_all_product_price,
    };

    dispatch(applyVoucherEcommerce(tpData));
};

const handleChangeVoucherExchange = async () => {
    const data = {
        customer_id: customerId,
        orders: dataCheckout.orders.map((item) => {
            return {
                products: item.products,
            };
        }),
    };
    const res = await voucherApi.getVoucherStore(data, 2);

    setDataVoucherExchange(res);
    setEditVoucherEcommerceModal(true);
};

const handleSubmitCheckout = async () => {
    const lastDataCheckout = {
        ...dataCheckout,
        address: addressReplace,
        receiver: addressReplace.name,
        payment_method: paymentMethod === 'onepay' ? 1 : 0,
    };

    if (paymentMethod === 'onepay') {
        const res = await orderApi.checkoutOrder(lastDataCheckout);
        if (res?.data?.order_id !== undefined || res?.data?.order_id.length !== 0) {
            const dataCheckoutOnepay = {
                order: {
                    Id: res?.data?.order_id.toString(),
                    amount: dataCheckout.total_price,
                    customerId: addressReplace.customer_id.toString(),
                    type: 0,
                },
                transactionType: 'domestic',
            };
            const resOnepay = await onePayApi.checkoutOnePay(dataCheckoutOnepay);
            if (resOnepay.message === 'error') {
                // message.error(t('text.Payment_failed'));
            } else {
                window.location.href = resOnepay.url;
            }
        }
    }
    if (paymentMethod === 'cod') {
        const res = await orderApi.checkoutOrder(lastDataCheckout);
        if (res?.data?.order_id !== undefined) {
            message.success('Đặt hàng thành công');
        } else {
            message.error('Đặt hàng thất bại');
        }
    }
};

  return (
    <div className="payment-cart-wrapper" id="payment-cart">
    <div className="inner">
        <div className="payment-header">
            <div className="header-action">
                <div className="back-to-cart">
                    {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                    <span
                        onClick={() => {
                            navigate('/cart');
                        }}
                    >
                        Trở lại giỏ hàng
                    </span>
                </div>
                <div className="header-title">Thanh toán</div>
                <div className="header-right"></div>
            </div>
            <div className="header-address">
                <Skeleton loading={false}>
                    <div className="address-details">
                        <div className="address-title">
                            {/* <img src={images.locationIcon} alt="Location" /> */}
                            <span>Địa chỉ nhận hàng</span>
                        </div>
                        <span>{addressReplace?.name}</span>
                        <span>{addressReplace?.address_detail.address}</span>
                    </div>
                </Skeleton>
                <div className="action-replace">
                    <button onClick={() => setEditAddressModal(true)}>Thay đổi</button>
                </div>
            </div>
        </div>
        <div className="payment-main">
            <div className="payment-cart">
                <div className="product-payment-header">
                    <div className="title">
                        <span>Sản phẩm</span>
                    </div>
                    <div className="type"></div>
                    <div className="price">Đơn giá</div>
                    <div className="quantity">Số lượng</div>
                    <div className="cost">Thành tiền</div>
                </div>
                <div className="store-group">
                    {dataCheckout?.orders?.map((storeItem) => {
                        return (
                            <div key={storeItem?.id} className="list-store">
                                <div className="store-header">
                                    <span>{storeItem.name}</span>
                                    <div className="chat-group">
                                        {/* <FontAwesomeIcon icon={faMessage} /> */}
                                        <span>Chat ngay</span>
                                    </div>
                                </div>
                                <div className="store-product">
                                    <div className="list-product">
                                        {storeItem?.products?.map((item) => {
                                            return (
                                                <div className="product-item">
                                                    <div className="image-name-group">
                                                        <img
                                                            src={`${process.env.REACT_APP_API_URL}${item?.image_url[0]?.url}`}
                                                            alt="Avatar"
                                                        />
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <div className="type-group">
                                                        <span></span>
                                                    </div>
                                                    <div className="price-group">
                                                        {formatCash(item.price.toString())}đ
                                                    </div>
                                                    <div className="quantity-group">{item.quantity}</div>
                                                    <div className="cost-group">
                                                        {formatCash((item.price * item.quantity).toString())}đ
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="voucher-group">
                                        <div className="voucher">
                                            <div></div>
                                            <div className="voucher-title">Voucher của Shop</div>
                                            <span className="price-voucher">
                                                {storeItem.hasOwnProperty('reduce_product_price')
                                                    ? `Giá trị voucher: ${formatCash(storeItem?.reduce_product_price.toString())} đ`
                                                    : ''}
                                            </span>
                                            <span
                                                className="voucher-action"
                                                onClick={() => handleChooseVoucher(storeItem)}
                                            >
                                                Chọn voucher khác
                                            </span>
                                        </div>
                                    </div>
                                    <div className="delivery-group">
                                        <div className="note-group">
                                            <label>Lời nhắn:</label>
                                            <Input placeholder="Lưu ý cho người bán ..." />
                                        </div>
                                        <div className="delivery-details">
                                            <label>Đơn vị vận chuyển:</label>
                                            <div className="delivery">
                                                <div className="delivery-header">
                                                    <span>Giao hàng nhanh</span>
                                                    <span>Thay đổi</span>
                                                    <span>{formatCash(storeItem?.ship_price?.toString())}đ</span>
                                                </div>
                                                <span>Nhận hàng vào 28-30/9</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <p>
                                            Tổng số tiền sản phẩm:
                                            <span>{formatCash(storeItem?.all_store_price?.toString())} đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="voucher-exchange">
                    <div className="block-header"></div>
                    <div className="voucher-btn" 
                    onClick={handleChangeVoucherExchange}
                    >
                        {/* <FontAwesomeIcon icon={faGift} /> */}
                        Thêm voucher tổng sàn
                    </div>
                </div>
                <div className="payment-method">
                    <div className="top-payment">
                        <h3>Phương thức thanh toán</h3>
                        {paymentItems.map((item) => {
                            return (
                                <div
                                    onClick={() => handleChoosePayment(item)}
                                    className="action-payment"
                                    style={item.active ? { color: '#ee4d2d', borderColor: '#ee4d2d' } : {}}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="payment-bottom">
            <div className="my-cart__right-wrapper">
                <div className="my-cart__right">
                    <div className="order-summary">
                        <span className="order-summary__title">Tóm tắt đơn hàng</span>
                        <div className="order-summary__group">
                            <label>Thành tiền</label>
                            <span className="money">
                                {formatCash(dataCheckout?.all_product_price?.toString())}
                            </span>
                        </div>
                        <div className="order-summary__group">
                            <label>Phí vận chuyển</label>
                            <span className="money">
                                {formatCash(dataCheckout?.all_shipping_fee?.toString())} đ
                            </span>
                        </div>
                        <div className="order-summary__group">
                            <label>Giảm giá</label>
                            <span className="money">
                                {dataCheckout?.hasOwnProperty('reduce_all_product_price')
                                    ? formatCash(dataCheckout?.reduce_all_product_price?.toString())
                                    : 0}
                                đ
                            </span>
                        </div>
                        <div className="total-money">
                            <div className="total-money__number">
                                <label>Tổng cộng:</label>
                                <span className="total-money__number-price">
                                    {formatCash(dataCheckout?.total_price?.toString())} đ
                                </span>
                            </div>
                            <span className="total-money__vat">Đã bao gồm VAT nếu có</span>
                        </div>
                        <div className="voucher-code">
                                <input type="text" placeholder="Nhập mã giảm giá" />
                            </div>
                    </div>
                </div>
                <div className="order-action">
                    <button 
                    onClick={handleSubmitCheckout}
                    >Thanh toán</button>
                </div>
                <div className="payment-method">
                    {/* <span>Chúng tôi chấp nhận:</span> */}
                    <div className="payment-method__group">
                        {/* <img src={images.CODImage} alt="Avatar" />
                        <img src={images.visaImage} alt="Avatar" />
                        <img src={images.masterCardImage} alt="Avatar" />
                        <img src={images.atmImage} alt="Avatar" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Modal
        centered
        title="Đổi địa chỉ"
        footer={null}
        onCancel={() => setEditAddressModal(false)}
        visible={editAddressModal}
    >
        <ChangeAddress handleChangeAddress={handleChangeAddress} listAddress={listAddress} />
    </Modal>

    <Modal
        name="modal-voucher-store"
        centered
        title="Chọn Voucher"
        footer={null}
        onCancel={() => setEditVoucherModal(false)}
        visible={editVoucherModal}
    >
        <VoucherStore
            dataVoucher={dataVoucher}
            handleAddVoucher={handleAddVoucher}
            setEditVoucherModal={setEditVoucherModal}
        />
    </Modal>
    <Modal
        name="modal-voucher-exchange"
        centered
        title="Chọn Voucher"
        footer={null}
        onCancel={() => setEditVoucherEcommerceModal(false)}
        visible={editVoucherEcommerceModal}
    >
        <VoucherEcommerce
            dataVoucher={dataVoucherExchange}
            handleAddVoucherExchange={handleAddVoucherExchange}
            setEditVoucherExchangeModal={setEditVoucherEcommerceModal}
        />
    </Modal>
</div>
  );
};

export default ProductInOrder;
