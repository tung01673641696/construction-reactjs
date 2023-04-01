import React from 'react';
import HeaderAdmin from "../../components/Admin/Header/HeaderAdmin";
import {Row,Col} from "antd"
import logo from "../../assets/images/home/logoConstruction.png";
import NavBar from "../../components/Admin/Nav/NavBar";
const CommonMain = ({children}) => {
	return (
		<div style={{height:'100%'}}>
			<Row>
				<Col span={5} >
					<div className={"logo"} style={{marginTop:'-19px'}}>
						<img width={120} src={logo} alt="" />
					</div>
					<div>
						<NavBar/>
					</div>
				</Col>
				<Col span={19}>
					<HeaderAdmin/>
					<main>
						{children}
					</main>
				</Col>
			</Row>
		</div>
	);
};

export default CommonMain;