import React, {useEffect, useState} from 'react';
import CommonMain from "../CommonMain";
import HeaderPage from "../../../components/Admin/Page/HeaderPage";
import FormComponent from "../../../components/Admin/FormComponent";
import {Controller, useForm} from "react-hook-form";
import { Form, Input, Button, Select } from "antd";
import "./AddStore.scss"
import {useDispatch,useSelector} from "react-redux"
import {getCity,getWard,getDistrict} from "../../../redux/reducers/address";
import {toast} from "react-toastify";
import uploadApi from "../../../api/uploadImage";
import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";
import {useParams} from 'react-router-dom'
// import {getAllStore} from "../../../redux/reducers/store";

// const fakeData = {
// 	id: 1,
// 	name: "Emin",
// 	email:"tientd0111@gmail.com",
// 	phone:"0899813354",
// 	user_name: 'Tiến',
// 	address: 'Hà Nội',
// 	date: "01/11/2019"
// }

const AddStore = () => {
	const {id} = useParams()
	const dispatch = useDispatch()
	const { Option } = Select;

	const { fakeData } = useSelector((state) => state.storeReducer);

	const dataRS = fakeData.find((x) => x.id == id)

	const { city, district, ward} = useSelector(
		(state) => state.addressReducer
	);

	const [cityAddress, setCityAddress] = useState(city);
	const [districtsAddress, setDistrictsAddress] = useState(district);
	const [wardAddress, setWardAddress] = useState(ward);
	const [specific,setSpecific] = useState()

	const [cityAddressConvert, setCityAddressConvert] = useState("");
	const [districtsAddressConvert, setDistrictsAddressConvert] = useState("");
	const [wardAddressConvert, setWardAddressConvert] = useState("");

	const [dataForm, setDataForm] = useState({});
	const [data,setData] = useState()

	useEffect(()=>{

		if(id){
			setData()
			dispatch(getDistrict(dataRS?.address.city.id))
			dispatch(getWard(dataRS?.address.district.id))
			setData(dataRS)
			setCityAddress(dataRS?.address.city.id)
			setDistrictsAddress(dataRS?.address.district.id)
			setWardAddress(dataRS?.address.ward.id)
			setSpecific(dataRS?.address.address)
		}
	},[dataRS])

	useEffect(() => {
		dispatch(getCity());
	}, []);
	const { handleSubmit, control,reset } = useForm();
	const handleChange = (data) => {
		dispatch(getDistrict(data));
		setCityAddress(data);
		setDistrictsAddress([]);
		// setWardd([]);
		setWardAddress([] )
	};
	const onChangeDistricts = (e) => {
		dispatch(getWard(e));
		setDistrictsAddress(e);
		setWardAddress([]);
	};
	const onChangeWard = (e) => {
		setWardAddress(e);
	};

	const districtFilter = district.find((c) => c.id === districtsAddress);
	const wardFilter = ward.find((c) => c.id === wardAddress);

	const found = city.find(obj => {
		return obj.id === cityAddress;
	});

	useEffect(() => {
		setCityAddressConvert(found);
		setDistrictsAddressConvert(districtFilter);
		setWardAddressConvert(wardFilter);
	}, [cityAddress, districtsAddress, wardAddress]);

	useEffect(() => {
		setDataForm({
			address: {
				address: specific,
				city: {
					id: cityAddressConvert?.id,
					name: cityAddressConvert?.name,
					ghn_id: cityAddressConvert?.ghn_id,
				},
				district: {
					id: districtsAddressConvert?.id,
					name: districtsAddressConvert?.name,
					ghn_id: districtsAddressConvert?.ghn_id,
				},
				ward: {
					id: wardAddressConvert?.id,
					name: wardAddressConvert?.name,
					ghn_id: wardAddressConvert?.ghn_id,
				},
			},
		});
		// }
	}, [
		cityAddressConvert,
		districtsAddressConvert,
		wardAddressConvert,
		cityAddress,
		districtsAddress,
		wardAddress,
		specific
	]);
	useEffect(() => {
		(async function () {
			if (!districtFilter) return;
		})();
	}, [districtFilter]);

	const [value, setValue] = React.useState([])
	const useUpload = async (e) => {
		let formData = new FormData();

		for (const key of Object.keys(e.target.files)) {
			formData.append("files", e.target.files[key]);
		}

		try {
			const res = await uploadApi.uploadArray(formData);
			setValue({ ...value, [e.target.name]: res.url });
			if ((res.message = "Success")) {
				toast.success("Upload ảnh thành thành công");
			}
		} catch (error) {
			toast.error("Upload ảnh không thành công");
		}
	};

	const onSubmit = (data) =>{
		data.image = value
		console.log('x',data,dataForm)
	}
	return (
		<CommonMain>
			<HeaderPage title={`${!id ? "Thêm cửa hàng": "Cập nhật cửa hàng"}`}/>
			<div className={"box-form"}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<div style={{display:'flex',paddingBottom:'10px',borderBottom:"1px solid #C4C4C4"}}>
							<span style={{fontSize:'16px',float:'left',fontWeight:'600'}}>Thông tin chung</span>
						</div>
						<div style={{display:'flex',width:'100%',justifyContent:'space-between',marginTop:'10px',marginBottom:'10px'}}>
							<FormComponent rules={{required: "Tên cửa hàng không để trống"}}
										   style={"calc"}
										   name={"name"}
										   defaultValue={id? dataRS.name : ''}
										   control={control}
										   placeholder={"Nhập tên cửa hàng "} label={"Tên cửa hàng"}/>
							<FormComponent rules={{required: "email không để trống",pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "email không đúng định dạng"
											}}}
										   style={"calc"}
										   name={"email"}
										   control={control}
										   placeholder={"nhập email"}
										   label={"Email"}
										   defaultValue={id? dataRS.email : ''}
							/>
						</div>
						<div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
							<FormComponent
										rules={{required: "Số điện thoại không được để trống",
										pattern:{
											value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
											message: "Số điện thoại không hợp lệ"
										}}}
										style={"calc"} name={"phone"} control={control}
										placeholder={"nhập số điện thoại"}
										label={"Số điện thoại"}
										defaultValue={id? dataRS.phone : ''}
							/>
							<FormComponent
										rules={{required: "Mô tả không được để trống"}}
										style={"calc"}
										name={"des"}
										control={control}
										label={"Mô tả cửa hàng"}
										defaultValue={id? dataRS.des : ''}

							/>
						</div>
					</div>
					<div style={{marginTop:'10px'}}>
						<div style={{display:'flex',paddingBottom:'10px',borderBottom:"1px solid #C4C4C4"}}>
							<span style={{fontSize:'16px',float:'left',fontWeight:'600'}}>Địa chỉ</span>
						</div>
						<div style={{justifyContent:'space-between',display:'flex',marginTop:'10px'}}>
							<div style={{width:"calc(100% / 2 - 10px)"}}>
								<span style={{float:"left"}}>Tỉnh/Thành phố</span>
								<Select
										defaultValue={dataRS?.address.city.id}
										value={cityAddress}
										name="city"
										style={{width:'100%'}}
										onChange={(e)=>handleChange(e)}

								>
									{city.map((it,index)=>(
										<Option value={it.id} key={index}>{it?.name}</Option>
									))}
								</Select>
							</div>
							<div style={{width:"calc(100% / 2 - 10px)"}}>
								<span style={{float:"left"}}>Quận/Huyện</span>
								<Select name="district"
										value={districtsAddress}
										onChange={(e)=>onChangeDistricts(e)}
										style={{width:'100%'}}
								>
									{district.map((item,index)=>(
										<Option value={item.id} key={index}>{item?.name}</Option>
									))}
								</Select>
							</div>
						</div>
						<div style={{justifyContent:'space-between',display:'flex',marginTop:'10px'}}>
							<div style={{width:"calc(100% / 2 - 10px)"}}>
								<span style={{float:"left"}}>Phường/Xã</span>
								<Select value={wardAddress} name="city"
										style={{width:'100%'}}
										onChange={(e)=>onChangeWard(e)}

								>
									{ward.map((it,index)=>(
										<Option value={it.id} key={index}>{it?.name}</Option>
									))}
								</Select>
							</div>
							<div style={{width:"calc(100% / 2 - 10px)",display:'flex',flexDirection:'column'}}>
								<span style={{textAlign:"left"}}>Địa chỉ cụ thể</span>
								<input
									defaultValue={id? dataRS.address.address : ''}
									style={{border:'1px solid #d9d9d9',fontSize:'18px',borderRadius:'6px'}}
									onChange={(e)=>setSpecific(e?.target?.value)}
									control={control}
								/>
							</div>
						</div>
					</div>
					<div style={{marginTop:'10px',display:'flex',flexDirection:'column',textAlign:'left'}}>
						<span style={{textAlign:"left"}}>Ảnh đại diện</span>
						<div style={{display:'flex',gap:'20px'}}>
							<label htmlFor="idUpload">
								<img
									alt="Upload"
									src={ImageUpload}
									width="50px"
									height="50px"
								/>
								<input
									onChange={useUpload}
									type="file"
									name="image_url"
									accept="image/*"
									id="idUpload"
									style={{ display: "none" }}
									layout="fill"
								/>
							</label>
							{value.image_url && (
								<div>
									{value.image_url.map((image, index) => (
										<img
											src={`${process.env.REACT_APP_API_URL}/${image}`}
											alt="error"
											key={index}
											width="50px"
											height="50px"
										/>
									))}
								</div>
							)}
						</div>
					</div>
					{/*<FormComponent name={"image"} control={control} type={"file"} label={"Ảnh"}/>*/}
					<span className={"buttonCreate"} onClick={handleSubmit(onSubmit)}>lưu</span>
				</form>
			</div>
		</CommonMain>
	);
};

export default AddStore;