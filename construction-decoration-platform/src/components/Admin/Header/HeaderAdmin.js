import React from 'react';
import avatar from "../../../assets/images/account/avatar.jpg";
import "./HeaderAdmin.scss"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const HeaderAdmin = () => {
	return (
		<div className={"Header"}>
			<div className={"left"}>
				<div className={"navLink"}>
					<Breadcrumbs/>
				</div>
			</div>
			<div>
				<div className={"right"}>
					<form>
						<input type="text" placeholder={"Nhập từ khóa"}/>
					</form>
					<div>
						<span>tiến</span>
						<img width={50} src={avatar} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderAdmin;