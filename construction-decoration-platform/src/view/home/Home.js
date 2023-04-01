import "./Home.scss";

import React, { useEffect } from "react";

import Category from "../../components/Category/Category";
import ButtonFor from "../../components/Button/ButtonFor/ButtonFor";
import SupplierTop from "../../components/Supplier/SupplierTop/SupplierTop";
import News from "../../components/News/News";
import RegisterSale from "../../components/Auth/Register/RegisterSale/RegisterSale";
import CarouselHome from "../../components/Carousel/CarouselHome";
import BannerCategory from "../../components/Category/Banner/BannerCategory";
import ForYou from "../../components/Product/ForYou/ForYou";

import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import FixedNavbar from "../layouts/fixedNavbar/FixedNavbar";

import HomeSearch from "./HomeSearch/HomeSearch";
import Product from "../product/Product";

import Service from "../../components/Service/Service";
import ProjectAll from "../construction/ProjectAll/ProjectAll";
import ListSupplier from "../construction/ListSupplier";
import Project from "../construction/Project/Project";
import Furniture from "../../components/furniture/Furniture";

import Design from "../../components/Design/Design";


import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { pageSale, pageYou, total_pageYou } = useSelector(
    (state) => state.pageReducer
  );

  return (
    <div className="homepage">
      <Header />
      <HomeSearch />
      <Product page={pageSale} size={10} type={"best-seller"} /> 

      {/* <Category /> */}
      {/* <BannerCategory /> */}
      {/* <ButtonFor text={"Sản phẩm trong ngày"} page="sale" />
      <Product page={pageSale} size={10} type={"best-seller"} /> */}
      {/* <ButtonFor text={"Sản phẩm bán chạy"} page="sale" />
      <Product page={pageSale} size={10} type={"best-seller"} /> */}
      {/* <ButtonFor text={"Dành cho bạn"} page="you" totalPage={total_pageYou} />
      <ForYou page={pageYou} size={6} /> */}
      {/* <ButtonFor text={"SẢN PHẨM BÁN CHẠY"} />
      <Product page={pageSale} size={5} type={"best-seller"} /> */}

      <ButtonFor text={"THIẾT KẾ NỔI BẬT"} />
      <Design />

      <ButtonFor text={"DỊCH VỤ TẠI CONSTRUCTION"} />
      <Service />

      <ButtonFor text={"NỘI THẤT"} />
      
      <div className="homepage_fu">
        <h2>Ưu đãi khủng</h2>
        <Furniture />
        <h2>Nội thất bán chạy</h2>
        <Furniture />
      </div>

      {/* <ButtonFor text={"DỰ ÁN MỚI NHẤT"} />
      <ProjectAll /> */}
      {/* <Project /> */}
      {/* <CarouselHome /> */}
      {/* <ButtonFor text={"NHÀ CUNG CẤP"}/> */}
      {/* <ListSupplier /> */}
      {/* <SupplierTop /> */}

      {/* <ButtonFor text={"TIN TỨC"} page="supplier" totalPage={total_pageYou} /> */}
      {/* <News /> */}
      {/* <RegisterSale /> */}
      <Footer />
      <FixedNavbar />
    </div>
  );
}

export default Home;
