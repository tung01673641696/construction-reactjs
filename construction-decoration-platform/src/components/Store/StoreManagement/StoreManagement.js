import React,{useEffect} from "react";
import "./StoreManagement.scss";

import Moment from "moment";
import { getOrderByStatus } from "../../../redux/reducers/order";
import Loading from "../../../components/Loading/Loading";

import { Tabs} from 'antd';
import TableOrderManage from './TableOrderManage';
import {useNavigate,useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const StoreManagement = () => {
    const tab=[
        {key: "1" , tab:'Chờ thanh toán'},
        {key: "2" , tab:'Chờ xác nhận'},
        {key: "3" , tab:'Đã xác nhận'},
        {key: "4" , tab:'Đang giao'},
        {key: "5" , tab:'Đã giao'},
        {key: "6" , tab:'Đã hủy'},
    ]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('key')
    const {loadingOrder,listOrderOfStore} = useSelector((state) => state.orderReducer);

    const onChange = (key) => {
        navigate(`/account/store/order-management?key=${key}`)
    };
    useEffect(()=>{
        dispatch(getOrderByStatus(!id?1:id ))
    },[id,loadingOrder,dispatch])

    console.log(listOrderOfStore)
  return (
      <div className="order-management">
        <span className="order-title">Quản lý đơn hàng</span>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          {tab.map((it)=>(
              <Tabs.TabPane tab={it?.tab} key={it.key}>
                <TableOrderManage data={listOrderOfStore} id={id}/>
              </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
  );
};

export default StoreManagement;
