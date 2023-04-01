import React, { useEffect } from "react";
import { useState } from 'react'
import "./SupplierAll.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import banner from "../../../assets/images/supplier/banner.jpg";
import avatar from "../../../assets/images/supplier/avatar.jpg";
import { supplierGetAll } from "../../../redux/reducers/supplier";
// import Pagination from "../../Pagination/Pagination";
import { getSupplierById } from "../../../redux/reducers/supplier";
import ButtonFor from "../../Button/ButtonFor/ButtonFor";
import ListSupplier from "../../../view/construction/ListSupplier";

import { Pagination } from "antd";

function SupplierAll() {
  const dispatch = useDispatch();
  const { supplierById } = useSelector((state) => state.supplierReducer);

  useEffect(() => {
    dispatch(getSupplierById({ page: 1, size: 4, id: 725 }));
  }, []);

  console.log("aaaaaaa", supplierById)
  // const handlePageClick = (e) => {
  //   // console.log("e", e.selected);
  //   dispatch(supplierGetAll({ page: e.selected + 1, size: 8 }));
  // };

  const [data, setData] = useState([
    {
      id: 725,
      name: "Nội thất",
      checked: true
    },
    {
      id: 726,
      name: "Kiến trúc",
      checked: false
    },
    {
      id: 727,
      name: "Vật tư",
      checked: false
    },
  ])

  const handleChange = (item) => {
    const newData = data.map((itemData) => {
      if (item.id === itemData.id) {
        dispatch(getSupplierById({ page: 1, size: 4, id: item.id }))

        return {
          ...itemData,
          checked: true
        }
      }
      else {
        return {
          ...itemData,
          checked: false
        }
      }
    })

    setData(newData)
  }

  return (
    <div className="supplier_all">
      <ButtonFor text="NHÀ CUNG CẤP" />

      <div className="supplier_all_menu">
        {data?.map((item, index) => (
          <button
            key={index}
            onClick={() => handleChange(item)}
            className={item.checked === true
              ? 'cate-btn active supplier_all_button'
              : 'cate-btn supplier_all_button'
            }
          >
            {item.name}
          </button>
        ))}


      </div>

      <div className="supplier_all_box">
        <ListSupplier supplierById={supplierById} />
      </div>
    </div>
  );
}

export default SupplierAll;
