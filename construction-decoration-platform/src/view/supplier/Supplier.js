import React, { useEffect } from "react";
import "./Supplier.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderDetail from "../layouts/headerDetail/HeaderDetail";
import Footer from "../layouts/footer/Footer";
import banner from "../../assets/images/supplier/banner.jpg";
import avatar from "../../assets/images/supplier/avatar.jpg";
import { supplierGetAll } from "../../redux/reducers/supplier";
// import Pagination from "@mui/material/Pagination";
import { Routes, Route } from "react-router-dom";

import Pagination from "../../components/Pagination/Pagination";

import SupplierAll from "../../components/Supplier/SupplierAll/SupplierAll";
import SupplierDetail from "../SupplierDetail/SupplierDetail"
import Header from "../layouts/header/Header";
import HomeSearch from "../home/HomeSearch/HomeSearch";
function Supplier() {
  const dispatch = useDispatch();

  return (
    <>
      {/* <HeaderDetail /> */}
      <Header />
      <Routes>
        <Route path="" element={<SupplierAll />} />
        <Route path=":id" element={<SupplierDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Supplier;
