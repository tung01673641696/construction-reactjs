import React, { useEffect } from "react";
import { token } from "./common";
import { Outlet, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { login, getMyInfo } from "../redux/reducers/user";

function ProtectedRoutes() {
    const dispatch = useDispatch();

    const { user, loading } = useSelector((state) => state.userReducer);

    // useEffect(() => {
    //   dispatch(getMyInfo());
    // }, [user.auth]);


    // if (loading) {
    //     return <h1>Loading...</h1>;
    // }

    return user.auth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
