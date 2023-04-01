import React,{useEffect} from 'react';
import {Table} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {getFavoriteProduct,addFavoriteProduct} from "../../../redux/reducers/product";
import {useNavigate} from "react-router-dom"
const FavoriteProduct = () => {
    const navigate = useNavigate()
    const { Column } = Table;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getFavoriteProduct())
    },[dispatch])
    const {listFavoriteProduct} = useSelector((state)=> state.productReducer)
    const handleClick = (id) =>{
        dispatch(addFavoriteProduct({product_id: id}))
    }
    return (
        <div className="order-management">
            <span className="order-title">Danh sách sản phẩm yêu thích</span>
            <Table style={{textAlignLast: 'center',cursor:'pointer'}}
                   pagination={{
                       defaultPageSize: 10,
                       showSizeChanger: true,
                       pageSizeOptions: ['10', '20', '30']
                   }}
                   dataSource={listFavoriteProduct}
                   // onRow={(record, rowIndex) => {
                   //     return {
                   //         onClick: event => {
                   //             navigate(`/product/${record?.product?.id}`)
                   //         }, // click row
                   //     };
                   // }}
            >
                <Column title={"Mã"} render={(value)=>(
                    <span>{value?.product?.id}</span>
                )}
                />
                <Column title={"Ảnh"}
                        render={(value)=>(
                            <img
                                src={`${process.env.REACT_APP_API_URL}/${value?.product?.image_url[0].url}`}
                                alt="error"
                                style={{width:'70px',height:"70px"}}
                                onClick={()=>navigate(`/product/${value?.product?.id}`)}
                            />
                        )}
                />
                <Column title={"Tên sản phẩm"}
                        render={(value)=>(
                            <span onClick={()=>navigate(`/product/${value?.product?.id}`)}>{value?.product?.name}</span>
                        )}
                />
                <Column title={"Giá"}
                        render={(value)=>(
                            <span>{value?.product?.price.toLocaleString("de-DE")} VND</span>
                        )}
                />
                <Column title={""}
                        render={(value)=>(
                            <span style={{
                                background:"#17cc83",
                                padding:'4px 8px',
                                borderRadius:'3px',
                                color:'#fff'
                            }}
                            onClick={()=>handleClick(value.product.id)}
                            >xóa</span>
                        )}
                />
            </Table>
        </div>
    );
};

export default FavoriteProduct;