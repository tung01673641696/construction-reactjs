import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../../redux/reducers/order";
import "./OrderDetails.scss";

import { StackSkeleton } from "../../Skeleton/StackSkeleton";

const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detailsOrder, loadingproduct } = useSelector(
    (state) => state.orderReducer
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params]);

  return (
    <div className="order-details box-shadow">
      <span className="order-title">Chi Tiết Đơn Hàng #{detailsOrder.id}</span>
      <div className="order-info">
        <div className="order-info-name">
          <div className="order-info-title">Người Nhận Hàng</div>
          <div>Địa Chỉ {detailsOrder.address?.address_detail.address}</div>
          <div>Số Điện Thoại</div>
        </div>
        <div className="order-info-name">
          <div className="order-info-title">Hình Thức Giao Hàng</div>
          <div>Giao Hàng Tiết Kiệm</div>
          <div>Miễn Phí Vận Chuyển</div>
        </div>{" "}
        <div className="order-info-name">
          <div className="order-info-title">Hình Thức Thanh Toán</div>
          <div>Thanh Toán Tiền Mặt Khi Nhận Hàng</div>
        </div>
        <div className="order-info-name">
          <div className="order-info-title">Trạng Thái Đơn Hàng</div>
          <div>Chưa Xác Nhận</div>
        </div>
      </div>
      {loadingproduct ? (
        <StackSkeleton value={1} height={300} spacing={"10px"}/>
      ) : (
        <div className="order-product">
          {detailsOrder.details?.map((item) => (
            <div className="order-product-item">
              <img
                src={`${process.env.REACT_APP_API_URL}/${item?.product.image_url[0].url}`}
                alt=""
              />
              <div className="order-product-item-content">
                <div className="order-product-item-name">
                  {" "}
                  {item?.product.name}
                </div>
                <div className="order-product-item-flex">
                  <div className="order-product-item-quantity">
                    x{item?.quantity}{" "}
                  </div>
                  <div className="order-product-item-price">
                    {item?.product.price.toLocaleString("de-DE")} VNĐ
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total-order">
            <div>Tổng tiền hàng</div>
            <div>
              {detailsOrder?.discount_detail?.product_price.toLocaleString(
                "de-DE"
              )}{" "}
              VNĐ
            </div>
          </div>
          <div className="total-order">
            <div>Tiền giảm</div>
            <div>
              {detailsOrder?.discount_detail?.reduce_product_price.toLocaleString(
                "de-DE"
              )}{" "}
              VNĐ
            </div>
          </div>
          <div className="total-order">
            <div>Phí ship</div>
            <div>
              {detailsOrder?.discount_detail?.shipping_fee.toLocaleString(
                "de-DE"
              )}{" "}
              VNĐ
            </div>
          </div>
          <div className="total-order">
            <div className="total-order-name">Tổng số tiền</div>
            <div className="total-order-name">
              {detailsOrder?.discount_detail?.total.toLocaleString("de-DE")} VNĐ
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
