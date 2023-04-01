import React, { useEffect, useState, useRef } from "react";
import "./ShowAddress.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getCity,
  getDistrict,
  getWard,
} from "../../redux/reducers/address";

import { openNotification } from "../Alert/AlertProduct";
import { toast } from "react-toastify";

import addressApi from "../../api/addressApi";

import {
  deleteWhiteSpace,
  validatePhoneNumber,
  validateName,
} from "../../utils/getValidMessage";

import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/formSchema";

const schema = yup.object({
  name: formSchema.name,
  email: formSchema.email,
  phone: formSchema.phone,
  cities: formSchema.cities,
  district: formSchema.district_code,
  ward: formSchema.ward_code,
  unit: formSchema.address_detail
});


//fix loi dong bo state
function ShowAddress({ setShowAdd, showEdit }) {

  const navigate = useNavigate()
  //store
  const { city, district, ward } = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();

  console.log("city",city)
  console.log("district",district)
  console.log("ward",ward)

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState();
  const [cityAddress, setCityAddress] = useState();
  const [districtsAddress, setDistrictsAddress] = useState("");
  const [wardAddress, setWardAddress] = useState("");
  const [unit, setUnit] = useState("");

  const [cityAddressConvert, setCityAddressConvert] = useState("");
  const [districtsAddressConvert, setDistrictsAddressConvert] = useState("");
  const [wardAddressConvert, setWardAddressConvert] = useState("");

  const [dataForm, setDataForm] = useState({});

  const onChangeCity = (e) => {
    var index = e.target.selectedIndex
    var optionElement = e.target.childNodes[index]
    var ghn_id = optionElement.getAttribute('ghn_id');
    var name = optionElement.getAttribute('name');


    console.log("e",e)
    console.log("index",index)
    console.log("optionElement",optionElement)
    console.log("ghn_id",ghn_id)
    console.log("name",name)

    dispatch(getDistrict(e.target.value));
    setCityAddress({
      "city": {
        "id": parseInt(e.target.value),
        "name": name,
        "ghn_id": parseInt(ghn_id)
      },
    });
    setWardAddress([]);
    // setDistrictsAddress([]);
  };


  const onChangeDistricts = (e) => {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index]
    var ghn_id = optionElement.getAttribute('ghn_id');
    var name = optionElement.getAttribute('name');

    dispatch(getWard(e.target.value));

    setDistrictsAddress({
      "district": {
        "id": parseInt(e.target.value),
        "name": name,
        "ghn_id": parseInt(ghn_id)
      },
    });

    setWardAddress([]);
  };
  const onChangeWard = (e) => {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index]
    var ghn_id = optionElement.getAttribute('ghn_id');
    var name = optionElement.getAttribute('name');

    setWardAddress({
      "ward": {
        "id": parseInt(e.target.value),
        "name": name,
        "ghn_id": parseInt(ghn_id)
      }
    });
  };

  const districtFilter = district.find((c) => c.id == districtsAddress);
  const wardFilter = ward.find((c) => c.id == wardAddress);


  useEffect(() => {
    setCityAddressConvert(city[cityAddress - 1]);
    setDistrictsAddressConvert(districtFilter);
    setWardAddressConvert(wardFilter);
  }, [cityAddress, districtsAddress, wardAddress]);



  useEffect(() => {
    setDataForm({
      name: fullName,
      phone: phone,
      unit: unit,
      address_category: 0,
      default_address: 1,
      address_detail: {
        city: {
          id: cityAddress?.city?.id,
          name: cityAddress?.city?.name,
          ghn_id: cityAddress?.city?.ghn_id,
        },
        district: {
          id: districtsAddress?.district?.id,
          name: districtsAddress?.district?.name,
          ghn_id: districtsAddress?.district?.ghn_id,
        },
        ward: {
          id: wardAddress?.ward?.id,
          name: wardAddress?.ward?.name,
          ghn_id: wardAddress?.ward?.ghn_id,
        },
      },
    });
    // }
  }, [
    cityAddress,
    districtsAddress,
    wardAddress,
    cityAddress,
    districtsAddress,
    wardAddress,
    fullName,
    phone,
    unit,
  ]);

  useEffect(() => {
    (async function () {
      if (!districtFilter) return;

      // setWardAddressConvert(wardFilter);
      // setWardAddress(null);
      // setDataForm({...dataForm, });
      // setState({ ...state, address_detail.ward:  });
    })();
  }, [districtFilter]);

  const onChangeNewAddress = async (data) => {

    if (fullName.length === 0) {
      toast.error("Vui lòng nhập họ và tên")
      return;
    }
    if (!validateName(fullName)) {
      toast.error("Họ và tên không đúng định dạng")
      return;
    }
    if (!phone) {
      toast.error("Vui lòng nhập số điện thoại")
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error("Số điện thoại không đúng định dạng")
      return;
    }

    if (!cityAddress) {
      toast.error("Vui lòng chọn Tỉnh / Thành phố")
      return;
    }

    if (!districtsAddress) {
      toast.error("Vui lòng chọn Quận / Huyện")
      return;
    }

    if (!wardAddress) {
      toast.error("Vui lòng chọn Xã / Phường")
      return;
    }

    if (unit.length === 0) {
      toast.error("Vui lòng nhập địa chỉ cụ thể")
      return;
    }

    // if (isNaN(districtsAddress) || districtsAddress.length === 0) {
    //   setOpenDistrict(true);
    //   return;
    // }

    // if (!isNaN(districtsAddress)) {
    //   setOpenDistrict(false);
    // }

    // if (isNaN(wardAddress) || wardAddress.length === 0) {
    //   setOpenWard(true);
    //   return;
    // }

    // if (!isNaN(wardAddress)) {
    //   setOpenWard(false);
    // }

    try {
      const res = await addressApi.createNewAddress(data);
      if ((res.message = "Success")) {
        setDataForm({});
        toast.success("Thêm địa chỉ thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        setShowAdd(false);
      }
      return res;
    } catch (error) {
      toast.error("Thêm địa chỉ không thành công", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

  };

  const handleDefaultAddress = (e) => {
    setDataForm({ ...dataForm, default_address: e.target.checked ? 0 : 1 })
  }

  return (
    <>
      <div>
        <label>Họ và tên</label> <br />
        <input
          type="text"
          value={fullName}
          className="input_address"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Số điện thoại</label>
        <br></br>
        <input
          type="text"
          value={phone}
          className="input_address"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <br></br>

      <label>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</label> <br />
      <select id="cars" onChange={onChangeCity} value={cityAddress?.city?.id}>
        <option>Tỉnh / Thành phố</option>
        {city.map((item) => (
          <option 
            value={item.id}
            ghn_id={item.ghn_id}
            name={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>
      <br></br>

      <select
        id="cars"
        onChange={onChangeDistricts}
        value={districtsAddress?.district?.id}
      >
        <option>Quận / Huyện</option>
        {district.map((item) => (
          <option 
            value={item.id}
            ghn_id={item.ghn_id}
            name={item.name}
          >{item.name}</option>
        ))}
      </select>
      <br></br>

      <select id="cars" onChange={onChangeWard} value={wardAddress?.ward?.id}>
        <option> Phường / Xã</option>
        {ward.map((item) => (
          <option 
            value={item.id} 
            ghn_id={item.ghn_id}
            name={item.name} 
          >{item.name}</option>
        ))}
      </select>
      
      <br></br>
      <label>Địa chỉ cụ thể</label> <br />
      <input
        type="text"
        value={unit}
        className="input_address"
        onChange={(e) => setUnit(e.target.value)}
      />

      <div className="account-address-add-checkbox">
        <input type="checkbox" onChange={(e) => { handleDefaultAddress(e) }} />
        <label>Đặt làm địa chỉ mặc định</label>
      </div>
      <div className="account-address-add-btn">
        <div
          className="account-address-add-cancel"
          onClick={() => {
            setShowAdd(false);
          }}
        >
          TRỞ LẠI
        </div>
        <div
          className="account-address-add-confirm"
          onClick={() => {
            // setShowAdd(false);
            onChangeNewAddress(dataForm);
          }}
        >
          HOÀN THÀNH
        </div>
      </div>
    </>
  );
}

export default ShowAddress;
