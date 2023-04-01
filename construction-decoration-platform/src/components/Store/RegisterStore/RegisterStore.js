import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm, Controller, useFormContext } from "react-hook-form";

import {
  FormLabel,
  FormControl,
  InputLabel,
  Input,
  Box,
  Select,
  MenuItem,
  Modal,
  Button,
} from "@mui/material";

import {
  getCity,
  getDistrict,
  getWard,
  createNewAddress,
} from "../../../redux/reducers/address";

import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";

import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../../helpers/formSchema";

import uploadApi from "../../../api/uploadImage";
import { toast } from "react-toastify";
import * as yup from "yup";


import { registerStore } from "../../../redux/reducers/store";
import { openNotification } from "../../../../src/components/Alert/AlertProduct";
import "./RegisterStore.scss"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

const schema = yup.object({
  nameStore: formSchema.nameStore,
  email: formSchema.email,
  phoneNumber: formSchema.phone,
  desc: formSchema.desc,
  uploadImage: formSchema.uploadImage,
  cities: formSchema.cities,
  district: formSchema.district_code,
  ward: formSchema.ward_code,
});

const defaultValues = {
  address: "",
  email: "",
  nameStore: "",
  phoneNumber: "",
  desc: "",
};

const RegisterStore = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { city, district, ward, addAddress } = useSelector(
    (state) => state.addressReducer
  );

  useEffect(() => {
    dispatch(getCity());
  }, []);

  const dispatch = useDispatch();
  //set state Selected
  const [cityAddress, setCityAddress] = useState();
  const [districtsAddress, setDistrictsAddress] = useState("");
  const [wardAddress, setWardAddress] = useState("");


  //convert variable put to dataForm
  const [cityAddressConvert, setCityAddressConvert] = useState("");
  const [districtsAddressConvert, setDistrictsAddressConvert] = useState("");
  const [wardAddressConvert, setWardAddressConvert] = useState("");

  const [dataForm, setDataForm] = useState({});

  const onChangeCity = (e) => {

    var index = e.target.selectedIndex;
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
      address: {
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
  ]);

  useEffect(() => {
    (async function () {
      if (!districtFilter) return;
    })();
  }, [districtFilter]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [email, setEmail] = useState("")
  const [nameStore, setNameStore] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("")


  const onSubmit = () => {
    const data = {
      name: nameStore,
      email: email,
      phone: phoneNumber,
      desc: desc,

      address: {
        address: address,
        city: cityAddress.city,
        district: districtsAddress.district,
        ward: wardAddress.ward
      }
    }

    openNotification("success", "đăng kí thành công");

    dispatch(registerStore(data))

    console.log("data", data)
  };





  const [value, setValue] = React.useState([]);

  const useUpload = async (e) => {
    let formData = new FormData();

    console.log("formData", formData);
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

  return (
    <div>
      <p onClick={handleOpen} className="header-top-text-pc">
        TRỞ THÀNH NHÀ BÁN HÀNG
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="box-main-login">
            <div className="box-main-title">
              <p>Đăng Ký Bán Hàng</p>
            </div>

            <div className="box-main-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box_content">
                  <div className="box_item">
                    <FormControl
                      fullWidth={true}
                      margin="normal"
                      error={errors.nameStore}
                    >
                      <FormLabel htmlFor="nameStore">Tên cửa hàng</FormLabel>
                      <input
                        id="nameStore"
                        placeholder="Tên cửa hàng"
                        value={nameStore}
                        {...register("nameStore")}
                        control={control}
                        onChange={(e) => {
                          setNameStore(e.target.value);
                        }}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.nameStore?.message}
                      </p>
                    </FormControl>
                  </div>

                  <div className="box_item">
                    <FormControl fullWidth={true} error={errors.email} margin="normal">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <input
                        id="email"
                        placeholder="Email"
                        value={email}
                        {...register("email")}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        control={control}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.email?.message}
                      </p>
                    </FormControl>
                  </div>

                  <div className="box_item">
                    <FormControl fullWidth={true} error={errors.phoneNumber}>
                      <FormLabel htmlFor="phoneNumber">Số điện thoại</FormLabel>
                      <input
                        id="phoneNumber"
                        placeholder="Số điện thoại"
                        value={phoneNumber}
                        {...register("phoneNumber")}
                        control={control}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.phoneNumber?.message}
                      </p>
                    </FormControl>
                  </div>


                  <div className="box_item">
                    <FormControl fullWidth={true} error={errors.desc}>
                      <FormLabel htmlFor="desc">Mô tả cửa hàng</FormLabel>
                      <input
                        id="desc"
                        placeholder="Mô tả cửa hàng"
                        value={desc}
                        {...register("desc")}
                        control={control}
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.desc?.message}
                      </p>
                    </FormControl>
                  </div>

                  <div className="box_item">
                    <FormControl fullWidth={true} error={errors.address}>
                      <FormLabel htmlFor="address">Addrres</FormLabel>
                      <input
                        id="address"
                        placeholder="Địa chỉ cụ thể"
                        value={address}
                        {...register("desc")}
                        control={control}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.address?.message}
                      </p>
                    </FormControl>
                  </div>
                </div>

                <div className="box-content">
                  <FormControl fullWidth={true}>
                    <FormLabel>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</FormLabel>
                    <select
                      id="cars"
                      onChange={onChangeCity}
                      value={cityAddress?.city?.id}
                      style={{
                        height: "40px",
                        width: "100%",
                        paddingLeft: "10px",
                        border: "1px solid #c4c4c4",
                        borderRadius: "5px",
                      }}
                    >
                      <option>Tỉnh/Thành phố</option>
                      {city.map((item) => (
                        <option value={item.id}
                          name={item.name}
                          key={item.id}
                          ghn_id={item.ghn_id}
                        >{item.name}</option>
                      ))}
                    </select>
                    <br />
                    <select
                      id="cars"
                      onChange={onChangeDistricts}
                      value={districtsAddress?.district?.id}
                      style={{
                        height: "40px",
                        width: "100%",
                        paddingLeft: "10px",
                        border: "1px solid #c4c4c4",
                        borderRadius: "5px",
                      }}
                    >
                      <option>Quận/Huyện</option>
                      {district.map((item) => (
                        <option value={item.id}
                          name={item.name}
                          key={item.id}
                          ghn_id={item.ghn_id}

                        >{item.name}</option>
                      ))}
                    </select>
                    <br />
                    <select
                      id="cars"
                      onChange={onChangeWard}
                      value={wardAddress?.ward?.id}
                      style={{
                        height: "40px",
                        width: "100%",
                        paddingLeft: "10px",
                        border: "1px solid #c4c4c4",
                        borderRadius: "5px",
                      }}
                    >
                      <option> Phường/Xã</option>
                      {ward.map((item) => (
                        <option value={item.id}
                          name={item.name}
                          key={item.id}
                          ghn_id={item.ghn_id}
                        >{item.name}</option>
                      ))}
                    </select>
                  </FormControl>
                </div>

                <div className="box_images">
                  <FormControl fullWidth={true}>
                    <FormLabel>Ảnh đại diện</FormLabel>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <FormLabel htmlFor="idUpload">
                        <img
                          alt="Upload"
                          src={ImageUpload}
                          width="50px"
                          height="50px"
                        />
                      </FormLabel>
                      <input
                        onChange={useUpload}
                        type="file"
                        name="image_url"
                        accept="image/*"
                        id="idUpload"
                        style={{ display: "none" }}
                        layout="fill"

                      // multiple
                      />
                      {value.image_url && (
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          {value.image_url.map((image, index) => (
                            <img
                              src={`${process.env.REACT_APP_API_URL}/${image}`}
                              alt="error"
                              key={`${index}`}
                              width="50px"
                              height="50px"
                            />
                          ))}
                        </Box>
                      )}
                    </Box>
                  </FormControl>
                </div>



                <div className="box_button">
                  <Button
                    type="submit"
                    // onClick={() => onChangeNewAddress(dataForm)}
                    onClick={() => onSubmit()}
                  >
                    Đăng Ký
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default RegisterStore;
