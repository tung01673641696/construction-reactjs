import React, { useState } from "react";
import "./GroupCreateForm.scss";
import { useDispatch, useSelector } from "react-redux";
import uploadImg from "../../../../assets/images/upload/uploadImage.jpg";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
  Radio,
  Modal,
} from "antd";

import { openNotification } from "../../../Alert/AlertProduct";
import groupApi from "../../../../api/groupApi";
import uploadApi from "../../../../api/uploadImage";

const GroupCreateForm = () => {
  const [valueGr, setValueGr] = useState(0);
  const { user } = useSelector((state) => state.userReducer);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValueGr(e.target.value);
  };

  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const handleImage = async (e) => {
    const img = e.fileList[0].originFileObj;
    formData.append("files", img);
    setFileList({ img });
    try {
      const res = await uploadApi(formData);
      setValue(res.url)
      if ((res.message = "UPLOAD_SUCCESS")) {
        openNotification("success", "Upload ảnh thành thành công");
      }
    } catch (error) {
      console.log(error);
      openNotification("error", "Upload ảnh không thành công");
    }
  };

  const [newProductForm, setNewProductForm] = useState({
    nameProduct: "",
    desc: "",
  });

  const { nameProduct, desc } = newProductForm;

  const onChangeProductForm = (e) => {
    setNewProductForm({ ...newProductForm, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = (file) => {
    setPreviewImage(file.thumbUrl);
    setPreviewVisible(true);
  };

  console.log("value",value);

  const handleSubmit = async () => {
    let dataUserCreate = {
      id: user.data.id,
      name: user.data.full_name,
      avatar: user.data.avatar,
    };

    let dataRoom = {
      roomName: nameProduct,
      roomAvatar: value[0],
      ...dataUserCreate,
    };

    try {
      const createRoom = await groupApi.createRoomChat(dataRoom);
      console.log("create", createRoom);
      const res = await groupApi.createGroup({
        name: nameProduct,
        des: desc,
        status: valueGr,
        image_url: value[0],
        groupchatRoomId: createRoom.data.data.roomId,
      });
      const updateRoomChat = await groupApi.updateRoomChat(
        res.data.group_chatroom_id,
        {
          groupId: res.data.id,
        }
      );

      console.log("updateRoomChat", updateRoomChat);
      // console.log("createRoom", createRoom);
      // if ((res.message = "Success")) {
      //   openNotification("success", "Tạo nhóm thành công");
      //   setNewProductForm("");
      //   data = "";
      // }
      // return res.message;
    } catch (error) {
      console.log("error", error);
      // openNotification("error", "Tạo nhóm không thành công");
    }
  };

  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="GroupCreateForm">
      <div className="GroupCreateForm__C">
        <Form
          labelCol={
            {
              //   span: 4,
            }
          }
          wrapperCol={
            {
              //   span: 20
            }
          }
          layout="horizontal"
          // onValuesChange={onFormLayoutChange}
          // disabled={componentDisabled}
          onFinish={handleSubmit}
        >
          <Form.Item>
            <Row justify="space-between" align="top">
              <Col span={11} className=" d-flex flex-column align-start">
                <Typography.Title level={5}>Tên Hội Nhóm</Typography.Title>
                <Input
                  onChange={onChangeProductForm}
                  name="nameProduct"
                  value={nameProduct}
                  placeholder="Tên Hội Nhóm"
                />

                <Typography.Title level={5} className="pt-5">
                  Quyền riêng tư
                </Typography.Title>
                <Radio.Group onChange={onChange} value={valueGr}>
                  <Radio value={0}>Công khai</Radio>
                  <Radio value={1}>Riêng tư</Radio>
                </Radio.Group>
              </Col>

              <Col span={11}>
                <Form.Item>
                  <Typography.Title level={5}>Hình ảnh</Typography.Title>
                  <Upload
                    listType="picture-card"
                    // fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleImage}
                    beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
                  >
                    {uploadButton}
                  </Upload>

                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>

                  {/* <div className="">
                    <div className="">
                      <label htmlFor="img-create-ecommerce">
                        <img
                          alt="Upload"
                          src={uploadImg}
                          style={{
                            width: "70px",
                            height: "70px",
                          }}
                        />
                      </label>
                      <input
                        className="GroupCreateForm__Image"
                        onChange={handleImage}
                        type="file"
                        name="image_url"
                        accept="image/*"
                        id="img-create-ecommerce"
                        style={{ display: "none" }}
                        // multiple
                      />
                      {value.image_url && (
                        <div className="GroupCreateForm__Image__Log">
                          {value.image_url.map((image, index) => (
                            <div>
                              <img
                                src={`${process.env.REACT_APP_API_URL}/${image}`}
                                alt=""
                                key={index}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div> */}
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Typography.Title level={5}>Mô Tả</Typography.Title>

            <Input.TextArea
              rows={4}
              placeholder="Mô Tả"
              onChange={onChangeProductForm}
              name="desc"
              value={desc}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tạo
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default GroupCreateForm;
