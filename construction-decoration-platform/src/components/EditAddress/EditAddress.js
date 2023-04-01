import React, { useEffect, useState, useRef } from "react";
import "./EditAddress.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getCity,
  getDistrict,
  getWard,
  getOneAddress,
  editAddress
} from "../../redux/reducers/address";
import { toast } from "react-toastify";
import {
  deleteWhiteSpace,
  validatePhoneNumber,
  validateName,
} from "../../utils/getValidMessage";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//fix loi dong bo state
function EditAddress() {
  //store
  const { city, district, ward, oneAddress } = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getOneAddress(id))
  },[id])

  console.log("địa chỉ",oneAddress)

  const [fullName, setFullName] = useState(oneAddress?.name);
  const [phone, setPhone] = useState(oneAddress?.phone);
  const [cityAddress, setCityAddress] = useState(oneAddress?.address_detail?.city?.name);
  const [districtsAddress, setDistrictsAddress] = useState(oneAddress?.address_detail?.district?.name);
  const [wardAddress, setWardAddress] = useState(oneAddress?.address_detail?.ward?.name);
  const [unit, setUnit] = useState(oneAddress.unit);


  //convert variable put to dataForm
  const [cityAddressConvert, setCityAddressConvert] = useState("");
  const [districtsAddressConvert, setDistrictsAddressConvert] = useState("");
  const [wardAddressConvert, setWardAddressConvert] = useState("");

  console.log("cty",cityAddress)

  const { id } = useParams()
  const [data, setData] = useState();

  const onChangeCity = (e) => {
    var index = e.target.selectedIndex
    var optionElement = e.target.childNodes[index]
    var ghn_id = optionElement.getAttribute('ghn_id');
    var name = optionElement.getAttribute('name');

    dispatch(getDistrict(e.target.value));

    setCityAddress({
      "city": {
        "id": parseInt(e.target.value),
        "name": name,
        "ghn_id": parseInt(ghn_id)
      },
    });
    setWardAddress([]);
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

  console.log("datassss",data)

  useEffect(() => {
    const data = {
      id: oneAddress?.id,
      name: oneAddress?.name,
      phone: oneAddress?.phone,
      unit: oneAddress?.unit,
      address_category: oneAddress?.address_category,
      default_address: oneAddress?.default_address,
      address_detail: {
        city: {
          id: oneAddress?.address_detail?.city?.id,
          name: oneAddress?.address_detail?.city?.name,
          ghn_id: oneAddress?.address_detail?.city?.ghn_id,
        },
        district: {
          id: oneAddress?.address_detail?.district?.id,
          name: oneAddress?.address_detail?.district?.name,
          ghn_id: oneAddress?.address_detail?.district?.ghn_id,
        },
        ward: {
          id: oneAddress?.address_detail?.ward?.id,
          name: oneAddress?.address_detail?.ward?.name,
          ghn_id: oneAddress?.address_detail?.ward?.ghn_id,
        },
      },
    }
    setData(data);

    // }
  }, [oneAddress]);

  useEffect(() => {
    (async function () {
      if (!districtFilter) return;

      // setWardAddressConvert(wardFilter);
      // setWardAddress(null);
      // setDataForm({...dataForm, });
      // setState({ ...state, address_detail.ward:  });
    })();
  }, [districtFilter]);

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(
        oneAddress.default_address === 0 ? true : false
    )
  }, [oneAddress])


  const updateAddress = async (data) => {
    console.log("data", data)

    if (fullName.length === 0) {
      toast.error("Vui lòng nhập Họ và tên");
      return;
    }

    if (!validateName(fullName)) {
      toast.error("Họ và tên không đúng định dạng")
      return;
    }

    if (phone.length === 0) {
      toast.error("Vui lòng nhập số điện thoại");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      toast.error("Số điện thoại không đúng định dạng");
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

    // const res = await dispatch(editAddress({ id: oneAddress.id, data: data }));

    // if (res.type == "address/editAddress/fulfilled") {
    //   toast.success("Update địa chỉ thành công");
    //   toast.success("Chuyển tiếp sau 3 giây");
    //   navigate("/account/address/")
    // } else {
    //   toast.error("Update địa chỉ thất bại ");
    // }

  };

  return (
      <div className="account-address-add">
        <div>
          <label>Họ và tên</label> <br />
          <input
              type="text"
              key={oneAddress.id}
              defaultValue={oneAddress.name}
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
              key={oneAddress.id}
              defaultValue={oneAddress.phone}
              className="input_address"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
          />
        </div>
        <br></br>
        <label>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</label> <br />

        <select
            id="cars"
            onChange={onChangeCity}
            value={cityAddress}
        >
          {city.map((item) => (
              <option
                  value={item.id}
                  ghn_id={item.ghn_id}
              >
                {item.name}
              </option>
          ))}
        </select>
        <br></br>

        <select
            id="cars"
            onChange={onChangeDistricts}
            value={districtsAddress}
        >
          {district.map((item) => (
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

        <select id="cars"
                onChange={onChangeWard}
        >
          {ward.map((item) => (
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

        <label>Địa chỉ cụ thể</label> <br />
        <input
            type="text"
            defaultValue={oneAddress?.unit}
            className="input_address"
            onChange={(e) => setUnit(e.target.value)}
        />

        <div className="account-address-add-checkbox">
          <input type="checkbox"
                 checked={checked}
                 onChange={() => setChecked(!checked)}
          />
          <label>Đặt làm địa chỉ mặc định</label>
        </div>
        {/* test */}
        <div className="account-address-add-btn">
          <div
              className="account-address-add-cancel"
              onClick={() => navigate("/account/address/")}
          >
            TRỞ LẠI
          </div>
          <div
              className="account-address-add-confirm"
              onClick={() => updateAddress(data)}
          >
            CẬP NHẬT
          </div>
        </div>
      </div>
  );
}

export default EditAddress;
