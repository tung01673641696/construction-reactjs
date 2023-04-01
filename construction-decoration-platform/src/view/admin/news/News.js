import React from 'react';
import CommonMain from "../CommonMain";
import "./News.scss";
import { Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { Button } from 'antd';
import ButtonFor from '../../../components/Button/ButtonFor/ButtonFor';
import HeaderPage from '../../../components/Admin/Page/HeaderPage';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { margin } from '@mui/system';

const News = () => {
	const navigate = useNavigate()

	const data = [
		{
			id: "1",
			title: "Tin tức 1",
			category: "danh mục 1",
			tag: "tag1",
			athor: "hoàng thanh tùng",
			date: "10/12/2022"
		},
		{
			id: "2",
			title: "Tin tức 2",
			category: "danh mục 2",
			tag: "tag2",
			athor: "hoàng thanh tùng",
			date: "10/12/2022"
		},
		{
			id: "3",
			title: "Tin tức 3",
			category: "danh mục 3",
			tag: "tag3",
			athor: "hoàng thanh tùng",
			date: "10/12/2022"
		},
	]

	return (
		<CommonMain>
			<HeaderPage 
				path="/admin/newsManage/createNews"
				title="Danh sách bài viết"
				textButton="Tạo bài viết"
			/>
			<Table
				style={{textAlignLast: 'center'}}
				pagination={{
				defaultPageSize: 10,
				showSizeChanger: true,
				pageSizeOptions: ['10', '20', '30']
				}}
				dataSource={data}
			>
				<Column title={"Tiêu đề"} 
					render={(item)=>(
						<span>{item.title}</span>
					)}
				/>
				<Column title={"Danh mục"}
					render={(item)=>(
						<span>{item.category}</span>
					)}
				/>	
				<Column title={"Tag"}
					render={(item)=>(
						<span>{item.tag}</span>
					)}
				/>
				<Column title={"Người viết"}
					render={(item)=>(
						<span>{item.athor}</span>
					)}
				/>
				<Column title={"Ngày hiển thị"}
					render={(item)=>(
						<span>{item.date}</span>
					)}
				/>

				<Column title={"Thao tác"}
					render={(item)=>(
						<div>
							<span className='edit'
								style={{
									background:'#006889',
									padding: '6px 10px',
									color:'#fff',
									borderRadius:'4px',
									marginRight: '5px',
								}}
								onClick={() =>navigate(`/admin/newsManage/createNews/${item.id}`)}
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

export default News;