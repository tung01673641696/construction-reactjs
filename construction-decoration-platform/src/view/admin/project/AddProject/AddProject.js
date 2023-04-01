import { Button, Col, Form, Input, message, Row, Select, Typography, Cascader, DatePickerProps, DatePicker, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../../api/uploadImage";
import "./AddProject.scss";
import ProjectApi from "../../../../api/projectApi";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";

import { useParams } from "react-router-dom";
import moment from "moment";
import CommonMain from "../../CommonMain";
import HeaderPage from "../../../../components/Admin/Page/HeaderPage";


const AddProject = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();
  const [categoryId, setCategoryId] = useState();
  const [selectSupplier, setSelectSupplier] = useState();
  const [cityId, setCityId] = useState();
  const [time, setTime] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [errorField, setErrorField] = useState({
    name: "",
    categoryid: "",
    sup: "",
    cityid: "",
    constructionArea: "",
    area: "",
    desc: "",
    roomLayout: "",
    content: "",
    image_url: "",
  });

  //form update new product
  const [newsForm, setNewsForm] = useState({
    name: "",
    categoryid: "",
    sup: "",
    cityid: "",
    constructionArea: "",
    area: "",
    desc: "",
    roomLayout: "",
    content: "",
    image_url: "",
  });

  const {
    name,
    categoryid,
    sup,
    cityid,
    constructionArea,
    area,
    desc,
    roomLayout,
    content,
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
          loader.file.then(async (file) => {
            body.append("files", file);
            const res = await uploadApi.uploadSingle(body);
            console.log('resss', res);

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

  const onChangeDate = (e) => {
    setTime(moment(e._d).format('YYYY-MM-DD'))
  }

  console.log("errorField", errorField);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const validate = () => {
    let nameErr = "";
    let categoryidErr = "";
    let supErr = "";
    let cityidErr = "";
    let constructionAreaErr = "";
    let areaErr = "";
    let descErr = "";
    let roomLayoutErr = "";
    let contentErr = "";
    let image_urlErr = "";
    let categoryIdErr = "";

    if (!name) {
      nameErr = "Tên dự án không được để trống";
    }



    if (!categoryId) {
      categoryIdErr = "Kiểu dự án không được để trống";
    }
    // if (!categoryId) {
    //   categoryidErr = "Loại dự án không được để trống";
    // }

    if (!selectSupplier) {
      supErr = "Nhà cung cấp không được để trống";
    }

    if (!cityId) {
      cityidErr = "Vị trí không được để trống";
    }

    if (constructionArea.length <= 0) {
      constructionAreaErr = "Khu vực xây dựng không được để trống";
    }

    if (area.length <= 0) {
      areaErr = "Diện tích đất không được để trống";
    }

    if (desc.length <= 0) {
      descErr = "Mô tả không được để trống";
    }

    if (roomLayout.length <= 0) {
      roomLayoutErr = "Công năng bố trí không được để trống";
    }

    if (content.length <= 0) {
      contentErr = "Nội dung không được để trống";
    }


    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameErr ||
      supErr ||
      cityidErr ||
      categoryidErr ||
      constructionAreaErr ||
      areaErr ||
      roomLayoutErr ||
      descErr ||
      contentErr ||
      image_urlErr
    ) {
      setErrorField({
        name: nameErr,
        sup: supErr,
        cityid: cityidErr,
        categoryid: categoryidErr,
        constructionArea: constructionAreaErr,
        area: areaErr,
        roomLayout: roomLayoutErr,
        description: descErr,
        content: contentErr,
        image_url: image_urlErr,

      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const isValid = validate();

    console.log("isvalid", isValid)
    if (isValid) {
      setErrorField({});

      let data = {
        name: name,
        category_id: categoryId,
        supplier_id: selectSupplier,
        city_id: cityId,
        construction_area: constructionArea,
        area: area,
        time_start: time,
        des: desc,
        room_layout: roomLayout,
        content: content,

      };

      console.log("data submit", data);

      // try {
      //   const res = await ProjectApi.createProject(data);
      //   // const res = '';
      //   if ((res.message = "Success")) {
      //     setNewsForm({});
      //     toast.success("Tạo mới dự án thành công", {
      //       position: toast.POSITION.BOTTOM_RIGHT,
      //     });
      //   }
      //   return res;
      // } catch (error) {
      //   toast.error("Tạo mới dự án không thành công", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      // }
    }
  };

  return (
    <CommonMain>
      <HeaderPage 
        title={`${!id ? "Thêm Dự Án" : "Chỉnh sửa dự án"}`}
      />
      <Form
        className="add_project"
        layout="horizontal"
        onFinish={handleSubmit}
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Dự Án</Typography.Title>
          <Input
            defaultValue={"Ten Du An"}
            onChange={onChangeProductForm}
            name="name"
            value={name}
            placeholder="Tên Dự Án"
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.name ? (
            <div className="text-danger">{errorField.name}</div>
          ) : null}
        </Form.Item>


        <div className="content">
          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Kiểu Dự Án</Typography.Title>

              <Cascader
                placeholder="Chọn Kiểu Dự Án"
              />
            </Form.Item>

            {errorField.categoryid ? (
              <div className="text-danger">{errorField.categoryid}</div>
            ) : null}
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Nhà Cung Cấp</Typography.Title>

              <Select
                defaultValue="Chọn nhà cung cấp"
                onChange={(value) => setSelectSupplier(value)}
              >
                {/* {supplier.map((item) => (
                  <Select.Option
                    value={item.id}
                    key={item.company_name}
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "100%",
                    }}
                  >
                    {item.company_name}
                  </Select.Option>
                ))} */}
              </Select>
              {errorField.sup ? (
                <div className="text-danger">{errorField.sup}</div>
              ) : null}
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Vị Trí</Typography.Title>

              <Select
                defaultValue="Chọn Vị Trí"
                onChange={(value) => setCityId(value)}
              >
                {/* {categoryCity.map((category) => (
                  <Select.Option
                    value={category.id}
                    key={category.id}
                    className="p-2 pl-3"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "100%",
                    }}
                  >
                    {category.name}
                  </Select.Option>
                ))} */}
              </Select>
              {errorField.cityid ? (
                <div className="text-danger">{errorField.cityid}</div>
              ) : null}
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Khu Vực Xây Dựng</Typography.Title>
              <Input
                defaultValue={"Khu vưc xay dung"}
                onChange={onChangeProductForm}
                name="constructionArea"
                value={constructionArea}
                placeholder="320M2"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.constructionArea ? (
                <div className="text-danger">{errorField.constructionArea}</div>
              ) : null}
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Diện Tích Đất</Typography.Title>
              <Input
                defaultValue={"Dien tich dat"}
                onChange={onChangeProductForm}
                name="area"
                value={area}
                placeholder="Rộng 9M * Dài 10M"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.area ? (
                <div className="text-danger">{errorField.area}</div>
              ) : null}
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Thời Điểm Triển Khai</Typography.Title>
              <DatePicker
                onChange={onChangeDate}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Typography.Title level={5}>Mô Tả Dự Án</Typography.Title>

          <Input.TextArea
            rows={4}
            placeholder="Mô Tả Dự Án"
            onChange={onChangeProductForm}
            name="desc"
            value={desc}
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.description && (
            <div className="text-danger">{errorField.description}</div>
          )}
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Công Năng Bố Trí</Typography.Title>
          <Input.TextArea
            rows={2}
            onChange={onChangeProductForm}
            name="roomLayout"
            value={roomLayout}
            placeholder="Công Năng Bố Trí"
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.roomLayout ? (
            <div className="text-danger">{errorField.roomLayout}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Nội dung Dự Án</Typography.Title>
        </Form.Item>

        <Form.Item>
          <CKEditor
            // config={{
            //   extraPlugins: [uploadPlugin]
            // }}
            editor={ClassicEditor}
            data="<p>Nhập nội dung dự án</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setNewsForm({ ...newsForm, content: data })
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          {errorField.content ? (
            <div className="text-danger">{errorField.content}</div>
          ) : null}
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

export default AddProject;