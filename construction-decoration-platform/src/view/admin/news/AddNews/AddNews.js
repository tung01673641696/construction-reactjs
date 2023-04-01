import { Button, Col, Form, Input, message, Row, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../../api/uploadImage";
import "./AddNews.scss";
import newsApi from "../../../../api/newsApi";

import { toast } from "react-toastify";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import  ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";
import CommonMain from "../../CommonMain";
import HeaderPage from "../../../../components/Admin/Page/HeaderPage";
import { useParams } from "react-router-dom";

const AddNews = () => {
  const dispatch = useDispatch();
  const { id } = useParams()

  const category = [
    {
      id: 1,
      title: "Danh mục 1"
    },
    {
      id: 2,
      title: "Danh mục 2"
    },
    {
      id: 3,
      title: "Danh mục 3"
    },
  ]


  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [errorField, setErrorField] = useState({
    nameNews: "",
    category: "",
    desc: "",
    content: "",
    image_url: "",
  });

  //form update new product
  const [newsForm, setNewsForm] = useState({
    nameNews: "",
    desc: "",
    content: "",
    image_url: "",
  });

  const {
    nameNews,
    desc,
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

  const validate = () => {
    let nameNewsErr = "";
    let categoryIdErr = "";
    let descErr = "";
    let contentErr = "";
    let image_urlErr = "";

    if (!nameNews) {
      nameNewsErr = "Tên tin tức không được để trống";
    }

    if (!selected) {
      categoryIdErr = "Danh mục không được để trống";
    }

    if (!desc) {
      descErr = "Mô tả không được để trống";
    }

    if (!content) {
        contentErr = "Nội dung không được để trống";
    }

    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameNewsErr ||
      categoryIdErr ||
      descErr ||
      contentErr ||
      image_urlErr
    ) {
      setErrorField({
        name: nameNewsErr,
        category: categoryIdErr,
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
    if (isValid) {
      setErrorField({});

      let data = {
        name: nameNews,
        des: desc,
        news_category_id: selected,
        content: newsForm.content,
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
      <HeaderPage title={`${!id ? "Thêm Tin Tức" : "Cập Nhật Tin Tức"}`}/>
      <Form
        className="add_news"
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
        onFinish={handleSubmit}
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Tin Tức</Typography.Title>
          <Input
            name="nameNews"
            onChange={onChangeProductForm}
            // value={nameNews}
            defaultValue=""
            placeholder="Tên tin tức"
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
                defaultValue="Chọn Danh Mục"
                value={selected}
                onChange={(value) => setSelected(value)}
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                }}
              >
                {category.map((item) => (
                  <Select.Option
                    key={item.id}
                    className="p-2 pl-3"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      height: "100%",
                    }}
                  >
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
              {errorField.category ? (
                <div className="text-danger">{errorField.category}</div>
              ) : null}
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
          <Typography.Title level={5}>Nội dung</Typography.Title>
        </Form.Item>

        <Form.Item>
                <CKEditor
                    // config={{
                    //   extraPlugins: [uploadPlugin]
                    // }}
                    editor={ ClassicEditor }
                    data="<p>Nhập nội dung tin tức</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setNewsForm({...newsForm, content: data})
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
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

export default AddNews;