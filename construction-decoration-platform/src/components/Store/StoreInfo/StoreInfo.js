import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyStore } from "../../../redux/reducers/store";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Modal,
  Row,
  Col,
  Typography,
} from "antd";
import GoogleMapReact from "google-map-react";

import "./StoreInfo.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const StoreInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyStore());
  }, []);

  const { loadingproduct, myStore } = useSelector(
    (state) => state.storeReducer
  );

  const { city } = useSelector((state) => state.addressReducer);

  // console.log(
  // "city",
  const cityOfUser = city.filter(
    (element) => element.id == myStore?.data?.address?.city?.id
    // return element
  );
  // );

  // console.log("myStore", myStore.data.address.district.name);

  const defaultProps = {
    center: {
      lat: 21.067108,
      lng: 105.8090125,
    },
    zoom: 11,
  };
  return (
    <div className="store-info">
      <span className="order-title">Thông Tin Cửa Hàng</span>
      <Form
        layout="horizontal"
        className="mt-5"

        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Cửa Hàng</Typography.Title>
          <Input
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
            // defaultValue={product.name}
            // onChange={(e) => setName(e.target.value)}
            disabled
            value={myStore.data.name}
            placeholder="Tên Cửa Hàng"
          />
        </Form.Item>

        <Form.Item>
          <Row justify="center" align="top">
            <Col span={8}>
              <Typography.Title level={5}>Tỉnh/Thành Phố</Typography.Title>

              <Select
                defaultValue={cityOfUser[0]?.name}
                disabled
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                  // width: "300px",
                }}
              >
                <Select.Option
                  className="p-2 pl-3"
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                  value="demo"
                >
                  Demo
                </Select.Option>
              </Select>
            </Col>

            <Col span={8} className="pr-2 pl-2">
              <Typography.Title level={5}>Quận/Huyện</Typography.Title>

              <Select
                defaultValue={myStore.data.address.district.name}
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                  // width: "300px",
                }}
                // defaultValue="dfsfas"
                disabled
              >
                <Select.Option
                  value="demo"
                  className="p-2 pl-3"
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                ></Select.Option>
              </Select>
            </Col>

            <Col span={8}>
              <Typography.Title level={5}>Phường/Xã/Trị Trấn</Typography.Title>

              <Select
                defaultValue={myStore.data.address.ward.name}
                disabled
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                  // width: "300px",
                }}
              >
                <Select.Option
                  value="demo"
                  className="p-2 pl-3"
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                >
                  Demo
                </Select.Option>
              </Select>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Địa Chỉ</Typography.Title>
          <Input
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
            // defaultValue={product.name}
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            value={myStore?.data?.address.address.split(",")[0]}
            placeholder="Địa Chỉ"
            disabled
          />
        </Form.Item>
        {/* 
        <Form.Item>
          <Typography.Title level={5}>
            {myStore.data?.address.address
              ? myStore.data?.address.address
              : myStore.data?.address}
          </Typography.Title> */}

        {/* <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div> */}
        {/* </Form.Item> */}

        <Form.Item>
          <Row justify="space-between" align="top">
            <Col span={11}>
              <Typography.Title level={5}>Email Liên Hệ</Typography.Title>
              <Input
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
                // defaultValue={product.name}
                // onChange={(e) => setName(e.target.value)}
                value={myStore?.data?.email}
                disabled
                placeholder="Email Liên Hệ"
              />
            </Col>

            <Col span={11}>
              <Typography.Title level={5}>
                Số Điện Thoại Liên Hệ
              </Typography.Title>

              <Input
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
                // defaultValue={product.name}
                // onChange={(e) => setName(e.target.value)}
                value={myStore?.data?.phone}
                disabled
                placeholder="Số Điện Thoại Liên Hệ"
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Mô tả</Typography.Title>
          <Input.TextArea
            rows={4}
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
            disabled
            value={myStore?.data?.des}
          />
        </Form.Item>

        {/* <Form.Item>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            uploadButton
          </Upload>
        </Form.Item> */}
        {/* <Button>Cập Nhật</Button> */}
      </Form>
    </div>
  );
};

export default StoreInfo;
