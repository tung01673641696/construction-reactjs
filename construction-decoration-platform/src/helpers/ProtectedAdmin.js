import React, { useEffect } from "react";
import { token } from "./common";
import { Outlet, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";


const ProtectedAdmin = ({
	redirectPath = '/login',
	children,
}) => {
	const { user } = useSelector((state) => state.userReducer);
	console.log(user)
	if (user.data === "" || user?.data.type !== 3 ) {
		return <Navigate to={redirectPath}/>;
	}

	return children;
};

export default ProtectedAdmin
