import React from 'react';
import './NavBar.scss'
import {ShopOutlined,BookOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const NavBar = () => {
	const nav = [
		{
			id: 1, title: 'Quản lý store', path:'/admin/storeManage',icon: <ShopOutlined style={{fontSize:'19px'}}/>
		},
		{
			id: 2, title: 'Quản lý tin tức', path:'/admin/newsManage',icon: <BookOutlined style={{fontSize:'19px'}}/>
		},
		{
			id: 3, title: 'Quản lý dự án', path:'/admin/projectManage',icon: <BookOutlined style={{fontSize:'19px'}}/>
		},
		{
			id: 4, title: 'Quản lý hội nhóm', path:'/admin/groupManage',icon: <BookOutlined style={{fontSize:'19px'}}/>
		},
	]
	return (
		<div className={"nav"}>
			<div style={{color:'#fff',fontSize:"16px",marginTop:'10px'}}>
				{nav.map((it)=>(
					<Link to={it.path} state={it.title} className={"link"}>
						<div key={it.id} style={{display:'flex',alignItems:'center',gap:"15px",padding:'15px'}}>
							<span style={{lineHeight:'20px'}}>{it.icon}</span>
							<span>{it.title}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavBar;