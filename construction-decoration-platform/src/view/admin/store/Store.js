import React from 'react';
import CommonMain from "../CommonMain";
import HeaderPage from "../../../components/Admin/Page/HeaderPage";
import Moment from "moment";
import {Table} from "antd";
import {Link, useNavigate,useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const Store = () => {
	const {Column} = Table
	const location = useLocation()
	const navigate = useNavigate()
	const data = [
		{
			id: 1,
			name: "Emin",
			email:"tientd0111@gmail.com",
			phone:"0899813354",
			user_name: 'Tiến',
			address: 'Hà Nội',
			date: "01/11/2019"
		},
		{
			id: 2,
			name: "Ega Master",
			email:'daikafo3@gmail.com',
			phone:'0877778058',
			user_name: 'Trần Duy Tiến',
			address: 'Hà Nội',
			date: "13/09/2022"
		}
	]
	const { fakeData } = useSelector((state) => state.storeReducer);
	return (
		<CommonMain>
			<div>
				<HeaderPage title={"Danh sách cửa hàng"} textButton={"Tạo cửa hàng"} path={'/admin/storeManage/addStore'}/>
			</div>
			<Table style={{textAlignLast: 'center'}}
				   pagination={{
					   defaultPageSize: 10,
					   showSizeChanger: true,
					   pageSizeOptions: ['10', '20', '30']
				   }}
				   dataSource={fakeData}
				   rowKey={fakeData => fakeData?.id}
			>
				<Column title={"Mã"} dataIndex="id" key="id"/>

				<Column title={"Tên cửa hàng"}
						render={(value)=>(
							<span>{value?.name}</span>
						)}
				/>
				<Column title={"Email"}
						render={(value)=>(
							<span>{value?.email}</span>
						)}
				/>
				<Column title={"Số điện thoại"}
						render={(value)=>(
							<span>{value?.phone}</span>
						)}
				/>
				<Column title={""}
						render={(value)=>(
							<div style={{display:"flex",gap:'5px',alignItems:'center'}}>
								<span style={{
									background:'#006889',
									padding: '6px 10px',
									color:'#fff',
									borderRadius:'4px'
									}}
								  	// to={`/admin/storeManage/addStore/${value.id}`}
									  onClick={()=>navigate(`/admin/storeManage/addStore/${value.id}`)}
								>sửa</span>
								<span style={{
									background:'#FA6361',
									padding: '6px 10px',
									color:'#fff',
									borderRadius:'4px'
								}}>xóa</span>
							</div>
						)}
				/>
			</Table>
		</CommonMain>
	);
};

export default Store;