import React,{useEffect,useState} from 'react';
import {Table} from "antd";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {changeStatusOrder} from '../../../redux/reducers/order'
import './TableOrderManage.scss'

const TableOrderManage = ({data,id}) => {
	// console.log('data',data)
	const [status,setStatus] = useState()
	useEffect(()=>{
		if(!id || id == 1){
			setStatus(2)
		}else if(id == 2){
			setStatus(3)
		}
	},[id])
	const dispatch = useDispatch()
	const { Column } = Table;
	const handleCancel = (dt) =>{
		const dataRs = {
			data:{
				id: dt,
				status:{
					status:6
				}
			},
			key: id
		}
		dispatch(changeStatusOrder(dataRs))
	}
	const handleConfirm = (dt) =>{
		const dataRs = {
			data:{
				id: dt,
				status:{
					status
				}
			},
			key: id
		}
		dispatch(changeStatusOrder(dataRs))
	}
	return (
		<Table style={{textAlignLast: 'center'}}
			   pagination={{
				   defaultPageSize: 10,
				   showSizeChanger: true,
				   pageSizeOptions: ['10', '20', '30']
			   }}
			   expandable={{
				   expandedRowRender: (record) => (
					   <>
						   <div style={{borderBottom: '0.5px solid #C4C4C4',paddingBottom:'20px'}}>
							   <div style={{display:'flex',gap:'100px'}}>
								   <div>
									   {record.details.map((x,index)=>(
										   <div key={index} style={{display:'flex',gap:'10px'}}>
											   <div>
												   <img
													   src={`${process.env.REACT_APP_API_URL}/${x?.product?.image_url[0].url}`}
													   alt="error"
													   style={{width:'70px',height:"70px"}}
												   />
											   </div>
											   <div style={{display:'flex',flexDirection:'column',textAlignLast:'left',flexGrow:'0.2',width:'180px'}}>
												   <p style={{margin:"0",color:'#006889',fontSize:'15px',fontWeight:'500'}}>{x?.product?.name}</p>
												   <span style={{fontSize:'12px',color:'#767676'}}>Code: {x?.product?.id}</span>
											   </div>
											   <div>
												   <div style={{display:'flex',flexDirection:"column",alignItems:'end'}}>
													   <span style={{fontSize:'12px'}}>x{x?.quantity}</span>
													   <span style={{fontSize:'13px',fontWeight:'500'}}>{x.price?.toLocaleString("de-DE")} VND</span>
												   </div>
											   </div>
										   </div>
									   ))}
								   </div>
								   <div style={{textAlignLast:'left'}}>
									   <p style={{fontSize:'15px',fontWeight:'600'}}>Thông tin giao hàng</p>
									   <div style={{display:'flex',flexDirection:'column'}}>
										   <span style={{color:'#006889',fontSize:'14px',fontWeight:'500'}}>{record?.address?.name}</span>
										   <span>{record?.address.address_detail?.address}</span>
										   <span>{record?.address?.phone}</span>
									   </div>
								   </div>
							   </div>
							   <div style={{display:'flex',flexDirection:'column'}}>
								   {/*<span style={{fontWeight:'500'}}>Phí ship: {record?.discount_detail.shipping_fee.toLocaleString("de-DE")} VND</span>*/}
								   <span style={{fontWeight:'500'}}>Tổng: {record?.discount_detail.total.toLocaleString("de-DE")} VND</span>
							   </div>
						   </div>
						   <div style={{display:"flex",justifyContent:'space-between',padding:'15px'}}>
							   <div style={{display:'flex',gap:'30px',fontSize:'16px',fontWeight:'500'}}>
								   <span style={{cursor:'pointer'}}>in đơn hàng</span>
								   <span className={`${id == 6?'off':''}`} onClick={()=>handleCancel(record.id)} style={{cursor:'pointer'}}>hủy đơn hàng</span>
							   </div>
							   <div >
							  	<span className={`${id == 3 || id == 6?'off':''}`} style={{padding:"14px 32px",
									background: 'rgba(0, 104, 137, 0.1)',
									borderRadius:'4px',
									color:'#006889',
									cursor:'pointer'
								}}
									  onClick={()=>handleConfirm(record.id)}
								>
									Xác nhận
								</span>
							   </div>
						   </div>
					   </>
				   ),
			   }}
			   dataSource={data}
			   rowKey={data => data?.id}
		>
			<Column title={"Mã"} dataIndex="code" key="code"/>
			<Column title={"Ngày đặt"}
					render={(value)=>(
						<span>{Moment(value.order_date).format("DD/MM/YYYY")}</span>
					)}
			/>
			<Column title={"Khách hàng"}
					render={(value)=>(
						<span>{value?.customer?.full_name}</span>
					)}
			/>
			<Column title={"Thanh toán"}
					render={(value)=>(
						<span>{value?.payment_method === 0 ? 'COD':'OnPay'}</span>
					)}
			/>
			<Column title={"Giao hàng"} dataIndex="user" key="user"/>
			<Column title={"Tổng tiền"}
					render={(value)=>(
						<span>{value?.discount_detail?.total?.toLocaleString("de-DE")}VND</span>
					)}
			/>

		</Table>
	);
};

export default TableOrderManage;