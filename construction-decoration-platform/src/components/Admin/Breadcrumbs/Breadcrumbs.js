import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
const Breadcrumbs = () => {
	const location = useLocation()
	console.log(location)
	return (
		<Breadcrumb >
			<Breadcrumb.Item href="">
				<span>{location.state}</span>
			</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Breadcrumbs;