import React from 'react'
import CommonMain from '../CommonMain'
import HeaderPage from '../../../components/Admin/Page/HeaderPage'
import { Table } from 'antd';
import { Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Project() {
	const navigate = useNavigate()

  const data = [
    {
      id: 1,
      nameProject: "Dự Án 1",
      desc: "Mô tả 1"
    },
    {
      id: 2,
      nameProject: "Dự Án 2",
      desc: "Mô tả 2"
    },
    {
      id: 3,
      nameProject: "Dự Án 3",
      desc: "Mô tả 3"
    },
  ]

  return (
    <CommonMain>
      <HeaderPage 
        path="/admin/projectManage/createProject"
        title="Danh sách Dự Án"
        textButton="Tạo dự án"
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
				<Column title={"STT"}
					render={(item)=>(
						<span>{item.id}</span>
					)}
				/>
				<Column title={"Tên Dự Án"}
					render={(item)=>(
						<span>{item.nameProject}</span>
					)}
				/>	
				<Column title={"Mô tả dự án"}
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
								onClick={() => navigate(`/admin/projectManage/createProject/${item.id}`)}
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
  )
}

export default Project
