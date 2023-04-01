import React from 'react';
import CommonMain from "../CommonMain";
import "./GroupMana.scss";
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { Button } from 'antd';
import HeaderPage from '../../../components/Admin/Page/HeaderPage';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GroupMana = () => {
	const navigate = useNavigate()

	const data = [
		{
			id: "1",
			nameGroup: "Nhóm cho vay lãi suất thấp",
			privacy: "private",
			desc: "Mô tả hội nhóm 1"
		},
		{
			id: "2",
			nameGroup: "Nhóm cho vay lãi suất cao",
			privacy: "public",
			desc: "Mô tả hội nhóm 2"
		},

	]

	return (
		<CommonMain>
			<HeaderPage 
				path="/admin/groupManage/createGroup"
				title="Danh sách hội nhóm"
				textButton="Tạo hội nhóm"
			/>
			<Table
				style={{textAlignLast: 'center'}}
				pagination={{
				defaultPageSize: 5,
				showSizeChanger: true,
				pageSizeOptions: ['5', '10', '15']
				}}
				dataSource={data}
			>
				<Column title={"STT"} 
					render={(item)=>(
						<span>{item.id}</span>
					)}
				/>
				<Column title={"Tên Hội Nhóm"}
					render={(item)=>(
						<span>{item.nameGroup}</span>
					)}
				/>	
				<Column title={"Quyền riêng tư"}
					render={(item)=>(
						<span>{item.privacy}</span>
					)}
				/>
				<Column title={"Mô tả hội nhóm"}
					render={(item)=>(
						<span>{item.desc}</span>
					)}
				/>
				<Column title={"Thao tác"}
					render={(item)=>(
						<div>
							<span
								style={{
									background:'#006889',
									padding: '6px 10px',
									color:'#fff',
									borderRadius:'4px',
									marginRight: '5px',
								}}
								onClick={() => navigate(`/admin/groupManage/createGroup/${item.id}`)}
							>
								Sửa
							</span>
							<span
								style={{
									background:'#FA6361',
									padding: '6px 10px',
									color:'#fff',
									borderRadius:'4px'
								}}
								type="danger"
							>
								Xóa
							</span>
						</div>
					)}
				/>
			</Table>
		</CommonMain>
	);
};

export default GroupMana;