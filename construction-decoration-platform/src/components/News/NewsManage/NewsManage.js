import { Button, Popconfirm, Table } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { deleteNews, listNews } from '../../../redux/reducers/news';
import HeaderDetail from '../../../view/layouts/headerDetail/HeaderDetail'
import uploadApi from '../../../api/uploadImage';

const NewsManage = () => {

    const getColumnSearchProps = (dataIndex) => ({
        render: (text, record, index) => {
            console.log("text",text)
            console.log("record",record)
            console.log("index",index)
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
          title: "Tên Tin Tức",
          dataIndex: "name",
        },
        {
          title: "Mô Tả",
          dataIndex: "des",
        },
        {
          title: "Danh mục",
          dataIndex: "category",
          ...getColumnSearchProps('category')
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
                 <Link to={`/account/news/manage-news/edit-news/${record.id}`}
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
                >
                    Sửa
                </Link>

                <Popconfirm
                    title="Bạn có chắc muốn xóa không?"
                    onConfirm={() => {
                        dispatch(deleteNews(record.id))
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
    const { total_page, listNew ,detailNews } = useSelector((state) => state.newsReducer);

    console.log("listNew",listNew)

    useEffect(() => {
        dispatch(listNews({ page, size }))

    }, [])

  return (
    <div>
        <Table
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          columns={columns}
          dataSource={listNew.data}
        />
    </div>
  )
}

export default NewsManage