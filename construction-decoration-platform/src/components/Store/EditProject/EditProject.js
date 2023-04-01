import { Button, Col, Form, Input, message, Row, Select, Typography, Cascader, DatePickerProps, DatePicker, Space } from "antd";
import React, { useState, useEffect } from "react";
import { createProject } from "../../../redux/reducers/project";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../api/uploadImage";
import "./EditProject.scss";
import ProjectApi from "../../../api/projectApi";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { validateNumber } from "../../../utils/getValidMessage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from '@ckeditor/ckeditor5-build-classic'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";
import { getCategoriesCity } from "../../../redux/reducers/project";

import { getSupplier } from "../../../redux/reducers/project";
import { getStyleType } from "../../../redux/reducers/project";
import { getProjectType } from "../../../redux/reducers/project";
import { getOneProject } from "../../../redux/reducers/project";
import { updateProject } from "../../../redux/reducers/project";
import moment from "moment";

const EditProject = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesCity())
    dispatch(getSupplier())
    dispatch(getStyleType())
    dispatch(getProjectType())
    dispatch(getOneProject(id))
  }, []);

  const { id } = useParams()
  const { categoryCity, supplier, typeStyle, typeProject, project } = useSelector((state) => state.projectReducer)

  console.log("project",project)

  const data = [
    {
      "value": 900,
      "label": "Kiến trúc",
      "children": [
        {
          "value": 901,
          "label": "Dịch vụ thiết kế kiến trúc"
        },
        {
          "value": 902,
          "label": "Dịch vụ thiết kế biệt thự"
        },
        {
          "value": 903,
          "label": "Dịch vụ thiết kế nhà phố"
        },
        {
          "value": 904,
          "label": "Dịch vụ thiết kế nhà cấp 4"
        }
      ]
    },
    {
      "value": 905,
      "label": "CẢI TẠO NHÀ",
      "children": [
        {
          "value": 906,
          "label": "Dịch Vụ Cải Tạo Nhà Trọn Gói"
        }
      ]
    },
    {
      "value": 907,
      "label": "NỘI THẤT",
      "children": [
        {
          "value": 908,
          "label": "Thiết kế nội thất chung cư"
        },
        {
          "value": 909,
          "label": "Thiết kế nội thất nhà phố"
        },
        {
          "value": 910,
          "label": "Thiết kế nội thất biệt thự"
        },
        {
          "value": 911,
          "label": "Thiết kế showroom"
        },
        {
          "value": 912,
          "label": "Thiết kế văn phòng"
        },
        {
          "value": 913,
          "label": "Thiết kế quán cafe"
        }
      ]
    }
  ];

  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  const [selectStyle, setSelectStyle] = useState();
  const [categoryId, setCategoryId] = useState();
  const [selectSupplier, setSelectSupplier] = useState();
  const [cityId, setCityId] = useState();

  const [time, setTime] = useState(); 

  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [errorField, setErrorField] = useState({
    name: "",
    categoryid:"",
    sup: "",
    cityid: "",
    constructionArea: "",
    area: "",
    desc: "",
    layoutFunction: "",
    content: "",
  });

  //form update new product
  const [newsForm, setNewsForm] = useState({
    name: project?.name,
    categoryid: "",
    sup: "",
    cityid: "",
    constructionArea: project?.construction_area,
    area: project?.area,
    desc: project?.desc,
    roomLayout: "",
    content: "",
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

  
  const onChange = (e) => {
    setCategoryId(e[2])
    console.log("datacate", e[2])
  };

  const onChangeDate = (e) => {
    setTime(moment(e._d).format('YYYY-MM-DD') )
    console.log("time",time)
  }

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
    let categoryIdErr = "";

    if (!name) {
      nameErr = "Tên dự án không được để trống";
    }

    if (!selected) {
      categoryIdErr = "Danh mục không được để trống";
    }
    if (!categoryId) {
      categoryidErr = "Kiểu dự án không được để trống";
    }

    if (!selectSupplier) {
      supErr = "Nhà cung cấp không được để trống";
    }


    if (!cityId) {
      cityidErr = "Vị trí không được để trống";
    }

    if (!constructionArea) {
      constructionAreaErr = "Khu vực xây dựng không được để trống";
    }

    if (!area) {
      areaErr = "Diện tích đất không được để trống";
    }

    if (!desc) {
      descErr = "Mô tả không được để trống";
    }

    if (!roomLayout.length) {
      roomLayoutErr = "Công năng bố trí không được để trống";
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
      contentErr
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
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const isValid = validate();

    console.log("isvalid",isValid)
    if (isValid) {
      setErrorField({});

      let data = {
        name: name,
        supplier_id: selectSupplier,
        city_id: cityId,
        construction_area: constructionArea,
        area: area,
        room_layout: roomLayout,
        des: desc,
        category_id: categoryId,
        content: newsForm.content,
        time_start: time
      };

      console.log("data submit", data);
      
      try {
        const res = await dispatch(updateProject({id:project.id, data:data}));
        if ((res.message = "Success")) {
          setNewsForm({});
          toast.success("Cập nhật dự án thành công", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        return res;
      } catch (error) {
        toast.error("Cập nhật dự án không thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  return (
    <div className="store-info">
      <span className="order-title">Chỉnh Sửa Dự Án</span>
      <Form
        layout="horizontal"   
        onFinish={handleSubmit}
        className="mt-5"
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Dự Án</Typography.Title>
          <Input
            defaultValue={project.name}
            name="name"
            onChange={onChangeProductForm}
            key={project.id}
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
                  defaultValue={project?.category?.name}
                  options={typeProject}
                  onChange={onChange}
                  placeholder="Chọn Kiểu Dự Án"
                  
                />
              </Form.Item>

          </div>

          <div className="content-ele">
            <Form.Item>
              <Row justify="" align="top">
                <Col span={8}>
                  <Typography.Title level={5}>Nhà Cung Cấp</Typography.Title>

                  <Select
                    defaultValue={project?.supplier_id?.company_name}
                    key={project.id}
                    name="supplier"
                    onChange={(value) => setSelectSupplier(value)}
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "45px",
                      width: "300px",
                    }}
                  >
                    {supplier.map((item) => (
                      <Select.Option
                        value={item.id}
                        key={item.company_name}
                        className="p-2 pl-3"
                        style={{
                          fontSize: "18px",
                          borderRadius: "5px",
                          height: "100%",
                        }}
                      >
                        {item.company_name}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </Row>
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Row justify="" align="top">
                <Col span={8}>
                  <Typography.Title level={5}>Vị Trí</Typography.Title>

                  <Select
                    defaultValue={project?.city_id?.name}
                    key={project.id}
                    onChange={(value) => setCityId(value)}
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "45px",
                      width: "300px",
                    }}
                  >
                    {categoryCity.map((category) => (
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
                    ))}
                  </Select>
                  {errorField.category_id ? (
                    <div className="text-danger">{errorField.category_id}</div>
                  ) : null}
                </Col>
              </Row>
            </Form.Item>
          </div>

          <div className="content-ele">
            <Form.Item>
              <Typography.Title level={5}>Khu Vực Xây Dựng</Typography.Title>
              <Input
                defaultValue={project?.construction_area}
                key={project?.id}
                onChange={onChangeProductForm}
                name="constructionArea"
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
                defaultValue={project?.area}
                key={project?.id}
                onChange={onChangeProductForm}
                name="area"
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
            defaultValue={project.des}
            key={project.id}
            onChange={onChangeProductForm}
            name="desc"
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
            defaultValue={project.room_layout}
            key={project.id}
            onChange={onChangeProductForm}
            name="roomLayout"
            placeholder="Công Năng Bố Trí"
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.layoutFunction ? (
            <div className="text-danger">{errorField.layoutFunction}</div>
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
            
            data={project.content}
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
            {project.image_url && (
              <div className="ecommerce-img-shop">
                {project.image_url.map((image, index) => (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${image.url}`}
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
            Cập Nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProject;