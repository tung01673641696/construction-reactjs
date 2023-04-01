import React, { useEffect } from "react";
import "./SupplierTop.scss";
import cover from "../../../assets/images/product/cover.png";
import avatar from "../../../assets/images/product/avatar.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supplierGetAll } from "../../../redux/reducers/supplier";

function SupplierTop() {
  //not completed
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { supplierList } = useSelector((state) => state.supplierReducer);


  console.log('supplier', supplierList);

  useEffect(() => {
    dispatch(supplierGetAll({ page: 1, size: 8 }));
  }, []);
  return (
    <div className="supplier-top">
      {supplierList?.data?.map((item) => (
        <Link to={"/supplier/" + item.id} key={`${item.id}23s2`}>
          <div className="supplier-item">
            <div className="supplier-avatar">
              {item?.avatar ? (
                <img
                  style={{
                    borderRadius: "50%",
                  }}
                  src={`${process.env.REACT_APP_API_URL}/${item?.avatar}`}
                  alt="error"
                />
              ) : (
                <img src={avatar} alt="error" />
              )}
            </div>

            <div className="supplier-cover">
              {item?.image_url[0] ? (
                <img
                  src={`${process.env.REACT_APP_API_URL}/${item?.image_url[0]?.url}`}
                  alt="error"
                />
              ) : (
                <img src={cover} alt="" />
              )}
            </div>
            <div className="supplier-text">
              <p className="supplier-name">{item.name}</p>
              <div className="supplier-title ">
                <div className="truncateLongTexts">{item.des}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SupplierTop;
