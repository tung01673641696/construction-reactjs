import { Button, Popconfirm, Table } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { deleteNews, listNews } from '../../../redux/reducers/news';
import HeaderDetail from '../../../view/layouts/headerDetail/HeaderDetail'
import uploadApi from '../../../api/uploadImage';
import { Link } from "react-router-dom";

import { getProject } from '../../../redux/reducers/project';
import { deleteProject } from '../../../redux/reducers/project';




const ManageProjects = () => {

    const getColumnSearchProps = (dataIndex) => ({
        render: (text, record, index) => {
            if (dataIndex === 'category') {
                return record.news_categories.name
                
            }
        },
        
    });



    const columns = [
        {
          title: "STT",
          key: "id",
          render: (id, record, index) => {
            ++index;
            return index;
          },
        },
        {
          title: "Tên Dự Án",
          dataIndex: "name",
        },
        {
          title: "Mô tả dự án",
          dataIndex: "des",
        },
        {
          title: "Thao tác",
          key: "action",
          align: "center",  
          render: (_, record) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                 <Link
                    type="primary"
                    // onClick={() => setIsModalOpen(true)}

                    style={{
                    padding: "6px 16px",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    height: "100%",
                    width: "64px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    }}

                    to={`edit-project/${record.id}`}
                >
                    Sửa
                </Link>

                <Popconfirm
                    title="Bạn có chắc muốn xóa không?"
                    onConfirm={() => {
                        dispatch(deleteProject(record.id))
                    }}
                >
                    <Button
                        type="primary" 
                        danger
                        // onClick={() => setVisible(true)}
                        style={{
                            padding: "6px 16px",
                            fontSize: "0.875rem",
                            lineHeight: 1.75,
                            height: "100%",
                            width: "64px",
                            marginRight: "5px",
                            borderRadius: "4px",
                        }}
                    >
                        Xoá
                    </Button>
                </Popconfirm>

                
              </div>
          ),
          // dataIndex: "action",
        },
      ];
      
      
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const size = 10;
    const { total_page, listNew } = useSelector((state) => state.newsReducer);

    

    useEffect(() => {
        dispatch(listNews({ page, size }))
    }, [dispatch])

    const { projectList } = useSelector((state) =>state.projectReducer);

    useEffect(() => {
      dispatch(getProject())
    },[])

  return (
    <div>
        <Table
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          columns={columns}
          dataSource={projectList}
        />
    </div>
  )
}

export default ManageProjects