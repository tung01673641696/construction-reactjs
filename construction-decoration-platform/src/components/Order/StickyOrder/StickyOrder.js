import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./StickyOrder.scss";

import cartApi from "../../../api/cartApi";
import { useSelector, useDispatch } from "react-redux";
import { getCartAll, removerCart } from "../../../redux/reducers/cart";
import { getListAddress } from "../../../redux/reducers/address";
import { useNavigate } from "react-router-dom";
import { openNotification } from "../../Alert/Alert";

import orderApi from "../../../api/orderApi";

function StickyOrder({orderCountPrice}) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { listCart } = useSelector((state) => state.cartReducer);
  const { listAddress } = useSelector((state) => state.addressReducer);
  const [data, setData] = useState();


  const test = () => {
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
      sum += listCart[i].products.length;
    }
    return sum;
  };

  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
      for (let j = 0; j < listCart[i].products.length; j++) {
        sum += listCart[i].products[j].price * listCart[i].products[j].quantity;
      }
    }
    return sum;
  };
  const test1 = {
    // ship_unit_id: listCart[0]?.ship_unit_id,
    // from_district: listCart[0]?.address.district.ghn_id,
    // to_district: listAddress[0]?.address_detail.district.ghn_id,
    // to_ward_code: listAddress[0]?.address_detail.ward.ghn_id,
    insurance_value: totalPrice(),
    coupon: null,
    products: listCart[0]?.products,
    type: 5,
  };

  useEffect(() => {
    dispatch(getCartAll());
    dispatch(getListAddress());
  }, []);

  console.log("listCartCheckOut", listCart);
  console.log("listAddress", listAddress);

  // console.log("data", test1.products);

  const getAllOrderDetails = () => {
    let sum = [];
    for (let i = 0; i < listCart.length; i++) {
      for (let j = 0; j < listCart[i].products.length; j++) {
        // sum += listCart[i].products[j].price * listCart[i].products[j].quantity;
        sum.push(listCart[i].products[j].id_order_detail);
      }
    }
    return sum;
  };
  const newArr = listCart.map(
    ({ address, avatar, name, ship_unit_id, ...rest }) => {
      return {
        store_id: rest.id,
        products: [
          ...rest.products.map((result) => {
            return {
              product_id: result.id,
              quantity: result.quantity,
              price: result.price,
            };
          }),
        ],
      };
    }
  );

  const handleSubmit1 = async () => {
    const res = await orderApi.getFeeShip(test1);
    console.log(res);
  };

  useEffect(() => {
    setData({
      address: {
        name: listAddress[0]?.name,
        phone: listAddress[0]?.phone,
        address_detail: {
          city: {
            id: listAddress[0]?.address_detail.city.id,
            name: listAddress[0]?.address_detail.city.name,
            ghn_id: listAddress[0]?.address_detail.city.ghn_id,
          },
          district: {
            id: listAddress[0]?.address_detail.district.id,
            name: listAddress[0]?.address_detail.district.name,
            ghn_id: listAddress[0]?.address_detail.district.ghn_id,
          },
          ward: {
            id: listAddress[0]?.address_detail.ward.id,
            name: listAddress[0]?.address_detail.ward.name,
            ghn_id: listAddress[0]?.address_detail.ward.ghn_id,
          },
          coordinates: {
            lng: 105.83416,
            lat: 21.027763,
          },
          address: listAddress[0]?.address_detail.address,
        },
      },
      payment_method: 0,
      list_product: newArr,

      //error total_price
      // total_price: totalPrice(),
    });
  }, [listAddress]);

  const checkOutProduct = async () => {
    if (listCart.length <= 0) {
      openNotification("warning", "Hãy Chọn Sản Phẩm Cần Mua ");
      navigate("/", { replace: true });
    }
    if (listAddress.length === 0) {
      openNotification("warning", "Hãy Thêm Sổ Địa Chỉ ");
      navigate("/account/address", { replace: true });
    }
    const res = await cartApi.checkOut(data);

    if (res) {
      await dispatch(removerCart({ id: getAllOrderDetails() }));
      navigate("/account/order-management", { replace: true });
    }
  };

  return (
    <div className="sticky-order">
      <div className="order-total" onClick={handleSubmit1}>
        Đơn Hàng Gồm ({test()} Sản Phẩm)
      </div>
      <div className="order-details">
        {listCart.map((item) =>
          item.products.map((product) => (
            <div className="order-flex">
              <div className="order-test">
                {product.quantity} x{" "}
                <Link
                  to={`/product/${product.id}`}
                  className="order-details-link"
                >
                  {product.name}
                </Link>
              </div>
              <div className="order-details-price">
                {new Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price * product.quantity)}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="order-total-price">
        {" "}
        <div className="order-total-price-sub">{"Tạm Tính"}</div>
        <div className="order-total-price-sub">
          {new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "VND",
          }).format(totalPrice())}
        </div>
      </div>
      <div className="order-total-price">
        {" "}
        <div className="order-total-price-sub">{"Phí Vận Chuyển"}</div>
        <div className="order-total-price-sub">
          {new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "VND",
          }).format(30000)}
        </div>
      </div>
      <div className="order-total-price">
        {" "}
        <div className="order-total-price-sub">{"Được Giảm Giá"}</div>
        {new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "VND",
        }).format(-30000)}
      </div>
      <div className="order-total-price">
        <div className="order-total-price-sub">{"Tổng Cộng: "}</div>

        {new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "VND",
        }).format(totalPrice())}
      </div>
      <div className="order-checkout" onClick={() => checkOutProduct()}>
        Đặt Hàng
      </div>
    </div>
  );
}

export default StickyOrder;
