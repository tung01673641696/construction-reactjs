import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import HeaderDetail from "../../layouts/headerDetail/HeaderDetail";
import { productDetail } from "../../../redux/reducers/product";
import DetailInfo from "../../../components/Product/DetailInfo/DetailInfo";
import CarouselDetail from "../../../components/Carousel/CarouselDetail/CarouselDetail";
import DetailMain from "../../../components/Product/DetailMain/DetailMain";
import Footer from "../../../view/layouts/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import StoreProductDetail from "../../../components/Store/StoreProductDetail/StoreProductDetail";
import DetailSlider from "../../../components/Product/DetailSlider/DetailSlider";
import { useParams } from "react-router-dom";
import Header from "../../layouts/header/Header";
import { Routes, Route } from "react-router-dom";
import { Spin } from 'antd';
import { Avatar, List, Switch } from 'antd';

import Skeleton from 'react-loading-skeleton';
import { getProductStore } from "../../../redux/reducers/store";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const [result, setResult] = useState();
  const [storeId, setStoreId] = useState();
  const { listImageDetail, detail, storeDetailId, loadingproduct } = useSelector(
    (state) => state.productReducer
  );

  console.log("listImageDetail",listImageDetail);

  const { listProductStore } = useSelector((state) => state.storeReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  useEffect(() => {
    dispatch(productDetail(params.id));
  }, [dispatch, params ]);

  useEffect(() => {
    dispatch(getProductStore({ id :storeDetailId, page: 1, size : 15 }));
  }, [storeDetailId, dispatch])
  
  return (
    <>
      <div className="product-detail">
        <HeaderDetail />

        {!detail.name ? (
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h1>Sản Phẩm Này Không Tồn Tại</h1>
          </div>
        ) : (
          <>
            {
              loadingproduct && <Skeleton />
            }
            <div className="product-detail-slider">
              <DetailSlider listImageDetail={listImageDetail} />
              <DetailInfo detail={detail} />
            </div>
            <StoreProductDetail storeDetailId={storeDetailId} />
            <p className="product-diffirent-text">Các sản phẩm khác của shop</p>
            {
              listProductStore.length === 0 ? <></> : <CarouselDetail size={15} page={1} id={storeDetailId} listProductStore={listProductStore}/>
            }
            <DetailMain />
          </>
        )}
      </div>
      <p className="product-diffirent-text">Bạn có thể thích</p>
            {
              listProductStore.length === 0 ? <></> : <CarouselDetail size={15} page={1} id={storeDetailId} listProductStore={listProductStore}/>
            }
      <Footer />
    </>
  );
}

export default ProductDetail;
