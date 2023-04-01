import { Button, Col, Form, Input, message, Row, Select, Typography, Cascader, DatePickerProps, DatePicker, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../api/uploadImage";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { validateNumber } from "../../../utils/getValidMessage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from '@ckeditor/ckeditor5-build-classic'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";

import { listNews, newsDetail, updateNews } from "../../../redux/reducers/news";

import { getCategoryNews } from "../../../redux/reducers/news";
import newsApi from "../../../api/newsApi";

const EditNews = () => {
  const { detailNews, categoryNews } = useSelector((state) => state.newsReducer)
  const { id } = useParams()
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsDetail(id));
    dispatch(getCategoryNews());
  }, []);


  console.log("detailNew",detailNews)


  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();
  const [categoryId, setCategoryId] = useState();
  const [errorField, setErrorField] = useState({
    name: "",
    categoryid:"",
    desc: "",
    content: "",
    image_url: "",
  });

  //form update new product
  const [newsForm, setNewsForm] = useState({
    name: detailNews?.name,
    categoryid: detailNews?.news_categories?.name,
    desc: detailNews?.desc,
    content: "",
    image_url: "",
  });

  const {
    name,
    categoryid,
    desc,
    content,
    image_url,
  } = newsForm;


  const onChangeProductForm = (e) => {
    setNewsForm({ ...newsForm, [e.target.name]: e.target.value });
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

  console.log("errorField", errorField);

  const validate = () => {
    let nameErr = "";
    let categoryidErr = "";
    let descErr = "";
    let contentErr = "";
    let image_urlErr = "";

    if (!name) {
      nameErr = "Tên dự án không được để trống";
    }

    if (!selected) {
      categoryidErr = "Danh mục không được để trống";
    }

    if (!content) {
      contentErr = "Nội dung không được để trống";
    }

    if (!desc) {
      descErr = "Mô tả không được để trống";
    }


    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameErr ||
      categoryidErr ||
      descErr ||
      contentErr ||
      image_urlErr
    ) {
      setErrorField({
        name: nameErr,
        categoryid: categoryidErr,
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

    console.log("isvalid",isValid)
    if (isValid) {
      setErrorField({});

      let data = {
        name: name,
        des: desc,
        news_category_id: selected,
        content: newsForm.content,
        image_url: value.image_url,
      };

      console.log("data submit", data);

      try {
        const res = await dispatch(updateNews({id:detailNews.id, data:data}));

        if ((res.message = "Success")) {
          setNewsForm({});
          toast.success("Cập nhật tin tức thành công", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        return res;
      } catch (error) {
        toast.error("Cập nhật tin tức không thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  return (
    <div className="store-info">
      <span className="order-title">Chỉnh Sửa Tin Tức</span>
      <Form
        layout="horizontal"   
        onFinish={handleSubmit}
        className="mt-5"
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Tin Tức</Typography.Title>
          <Input
            onChange={onChangeProductForm}
            defaultValue={detailNews?.name}
            name="name"
            key={detailNews.id}
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

        <Form.Item>
          <Row justify="" align="top">
            <Col span={8}>
              <Typography.Title level={5}>Danh Mục</Typography.Title>

              <Select
                defaultValue={detailNews?.news_categories?.name}
                key={detailNews.id}
                onChange={(value) => setSelected(value)}
                name="categoryid"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                  width: "300px",
                }}
              >
                {categoryNews.map((style) => (
                  <Select.Option
                    value={style.id}
                    key={style.name}
                    className="p-2 pl-3"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "100%",
                    }}
                  >
                    {style.name}
                  </Select.Option>
                ))}
              </Select>

            </Col>
          </Row>

          {errorField.categoryid ? (
            <div className="text-danger">{errorField.categoryid}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Typography.Title level={5}>Mô Tả Tin Tức</Typography.Title>

          <Input.TextArea
            rows={4}
            placeholder="Mô Tả Tin Tức"
            // defaultValue={project.des}
            // key={project.id}
            key={detailNews.id}
            defaultValue={detailNews.des}
            onChange={onChangeProductForm}
            name="desc"
            // value={desc}
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
          <Typography.Title level={5}>Nội dung Tin Tức</Typography.Title>
        </Form.Item>

        <Form.Item>
          <CKEditor
            // config={{
            //   extraPlugins: [uploadPlugin]
            // }}
            editor={ClassicEditor}
            data={detailNews.content}
            name="content"
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

          {errorField.content && (
            <div className="text-danger">{errorField.content}</div>
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
            {detailNews.image_url && (
              <div className="ecommerce-img-shop">
                {detailNews.image_url.map((image, index) => (
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

export default EditNews;