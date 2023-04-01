import React, { useEffect } from "react";
import "./Account.scss";
import HeaderDetail from "../../layouts/headerDetail/HeaderDetail";
import Footer from "../../layouts/footer/Footer";
import AccountList from "../../../components/Auth/AccountList/AccountList";
import AccountInfo from "../../../components/Auth/AccountInfo/AccountInfo";
import AddressInfo from "../../../components/Auth/AddressInfo/AddressInfo";
import OrderManagement from "../../../components/Order/OrderManagement/OrderManagement";
import OrderDetails from "../../../components/Order/OrderDetails/OrderDetails";

import ProductManagement from "../../../components/Product/ProductManagement/ProductManagement";
import StoreInfo from "../../../components/Store/StoreInfo/StoreInfo";
import StoreManagement from "../../../components/Store/StoreManagement/StoreManagement";
import StoreAddProduct from "../../../components/Store/StoreAddProduct/StoreAddProduct";

import StoreAddNews from "../../../components/Store/StoreAddNews/StoreAddNews";


import Wrapper from "./Wrapper/Wrapper";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getMyInfo } from "../../../redux/reducers/user";
import NewsManage from "../../../components/News/NewsManage/NewsManage";
import CreateNews from "../../../components/News/CreateNews/CreateNews";
import Header from "../../layouts/header/Header";

import EditAddress from "../../../components/EditAddress/EditAddress";
import EditNews from "../../../components/News/EditNews/EditNews";
import EditProduct from "../../../components/Product/ProductManagement/EditProduct/EditProduct";
import FavoriteProduct from "../../product/FavoriteProduct";



function Account() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyInfo());
    }, []);

    return (
        <>
            {/* <HeaderDetail /> */}
            <Header />
            <div className="account-user">
                <div className="account-user-list">
                    <AccountList />
                </div>
                <div className="account-user-info">
                    <Wrapper>
                        <Routes>
                            <Route path="" element={<AccountInfo />} />
                            <Route path="/address" element={<AddressInfo />} />
                            <Route path="/address/edit-address/:id" element={<EditAddress />} />


                            <Route
                                path="/order-management"
                                element={<OrderManagement />}
                            />

                            <Route
                                path="/order-management/details/:id"
                                element={<OrderDetails />}
                            />

                            <Route
                                path="/product-management"
                                element={
                                    <ProductManagement />
                                }
                            />

                            <Route
                                path="/product-management/edit-product/:id"
                                element={
                                    <EditProduct />
                                }
                            />

                            <Route path="/favorite/product" element={<FavoriteProduct />} />

                            <Route
                                path="/store"
                                element={<StoreInfo />}
                            />
                            <Route
                                path="/store/order-management"
                                element={<StoreManagement />}
                            />
                            <Route
                                path="/store/add-product"
                                element={<StoreAddProduct />}
                            />

                            <Route
                                path="/news/create-news"
                                element={<StoreAddNews />}
                            />

                            <Route
                                path="/news/manage-news"
                                element={<NewsManage />}
                            />

                            <Route
                                path="/news/manage-news/edit-news/:id"
                                element={<EditNews />}
                            />

                            <Route
                                path="/news/create-news"
                                element={<CreateNews />}
                            />

                        </Routes>
                    </Wrapper>
                </div>
            </div>
            <Footer />
        </>
        // <div>Account</div>
    );
}

export default Account;
