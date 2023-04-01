import { Button, Col, Form, Input, message, Row, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../../api/uploadImage";
import "./AddGroup.scss";

import { toast } from "react-toastify";
import { RadioChangeEvent } from "antd";
import { Radio } from 'antd';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import  ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";
import CommonMain from "../../CommonMain";
import HeaderPage from "../../../../components/Admin/Page/HeaderPage";
import { useParams } from "react-router-dom";

const AddGroup = () => {
  const dispatch = useDispatch();
  const { id } = useParams()

  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [valuePrivacy, setValuePrivacy] = useState(1)

  const [errorField, setErrorField] = useState({
    nameGroup: "",
    privacy: "",
    desc: "",
    image_url: "",
  });

  //form update new product
  const [newsForm, setNewsForm] = useState({
    nameGroup: "",
    privacy: "",
    desc: "",
    image_url: "",
  });

  const {
    nameGroup,
    privacy,
    desc,
    image_url,
  } = newsForm;

  const onChangeProductForm = (e) => {
    setNewsForm({ ...newsForm, [e.target.name]: e.target.value });
  };

  const onChangeNewsForm = (e) => {
    setNewsForm({ ...newsForm, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = (file) => {
    setPreviewImage(file.thumbUrl);
    setPreviewVisible(true);
  };

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then( async (file) => {
            body.append("files", file);
            const res = await uploadApi.uploadSingle(body);
            console.log('resss', res);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            // fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            //   method: "post",
            //   body: body
            //   // mode: "no-cors"
            // })
            //   .then((res) => res.json())
            //   .then((res) => {
            //     resolve({
            //       default: `${API_URL}/${res.filename}`
            //     });
            //   })
            //   .catch((err) => {
            //     reject(err);
            //   });
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    // editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    //   return uploadAdapter(loader);
    // };
  }

  const handleImage = async (e) => {
    for (const key of Object.keys(e.target.files)) {
      formData.append("files", e.target.files[key]);
    }
    try {
      const res = await uploadApi.uploadArray(formData);
      if ((res.message = "Success")) {
        setValue({ ...value, [e.target.name]: res.url });
        toast.success("Upload ảnh thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Upload ảnh không thành công", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  console.log("errorField", errorField);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onChangePrivacy = (e) => {
    console.log('quyền riêng tư', e.target.value);
    setValuePrivacy(e.target.value);
  };

  const validate = () => {
    let nameGroupErr = "";
    let privacyErr = "";
    let descErr = "";
    let image_urlErr = "";

    if (!nameGroup) {
      nameGroupErr = "Tên hội nhóm không được để trống";
    }

    if (!privacy) {
      privacyErr = "Quyền riêng tư không được để trống";
    }

    if (!desc) {
        descErr = "Mô tả hội nhóm không được để trống";
    }

    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameGroupErr ||
      privacyErr ||
      descErr ||
      image_urlErr
    ) {
      setErrorField({
        nameGroup: nameGroupErr,
        privacy: privacyErr,
        desc: descErr,
        image_url: image_urlErr,

      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const isValid = validate();
    if (isValid) {
      setErrorField({});

      let data = {
        name: nameGroup,
        privacy: privacy,
        des: desc,
        image_url: value.image_url,
      };

      console.log("data submit",data);

      // try {
      //   const res = await newsApi.storeCreateNews(data);
      //   // const res = '';
      //   if ((res.message = "Success")) {
      //     setNewsForm({});
      //     toast.success("Tạo mới tin tức thành công", {
      //       position: toast.POSITION.BOTTOM_RIGHT,
      //     });
      //   }
      //   return res;
      // } catch (error) {
      //   toast.error("Cập nhật tin tức không thành công", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      // }
    }
  };

  return (
    <CommonMain>
      <HeaderPage title={`${!id ? "Thêm Hội Nhóm" : "Cập Nhật Hội Nhóm"}`}/>
      <Form
        className="add_group"
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
        onFinish={handleSubmit}
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Hội Nhóm</Typography.Title>
          <Input
            name="nameGroup"
            onChange={onChangeProductForm}
            // value={nameNews}
            defaultValue=""
            placeholder="Tên hội nhóm"
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.nameGroup ? (
            <div className="text-danger">{errorField.nameGroup}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Quyền Riêng Tư</Typography.Title>

          <Radio.Group onChange={onChangePrivacy} value={valuePrivacy}>
            <Radio value={1}>Công khai</Radio>
            <Radio value={2}>Riêng tư</Radio>
          </Radio.Group>
          
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Mô Tả Hội Nhóm</Typography.Title>

          <Input.TextArea
            rows={4}
            placeholder="Mô Tả hội nhóm"
            onChange={onChangeProductForm}
            name="desc"
            value={desc}
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.desc && (
            <div className="text-danger">{errorField.desc}</div>
          )}
        </Form.Item>

        <Form.Item>
          <p className="ecommerce-text-img">Hình ảnh</p>
          <div className="Store_Add_Product">
            <div className="ecommerce-create-img">
              <label htmlFor="img-create-ecommerce1">
                <img
                  alt="Upload"
                  src={ImageUpload}
                  width="50px"
                  height="50px"
                />
              </label>
              <input
                onChange={handleImage}
                type="file"
                name="image_url"
                accept="image/*"
                id="img-create-ecommerce1"
                style={{ display: "none" }}
                multiple
              />
            </div>
            {value.image_url && (
              <div className="ecommerce-img-shop">
                {value.image_url.map((image, index) => (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${image}`}
                    alt=""
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
          {errorField.image_url && (
            <div className="text-danger">{errorField.image_url}</div>
          )}
        </Form.Item>

        <Form.Item
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          >
            Đăng
          </Button>
        </Form.Item>
      </Form>
    </CommonMain>
  );
};

export default AddGroup;