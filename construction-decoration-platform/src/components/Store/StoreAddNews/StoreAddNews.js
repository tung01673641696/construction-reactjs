import { Button, Col, Form, Input, message, Row, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getMyStore } from "../../../redux/reducers/store";
import { getCategoryNews } from "../../../redux/reducers/news";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";

// import { Editor } from '@tinymce/tinymce-react';
import uploadApi from "../../../api/uploadImage";
import "./StoreAddNews.scss";
import newsApi from "../../../api/newsApi";

import { toast } from "react-toastify";

import { validateNumber } from "../../../utils/getValidMessage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from '@ckeditor/ckeditor5-build-classic'
import  ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";

const StoreAddNews = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyStore());
    dispatch(getCategoryNews());
  }, []);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const { categoryNews } = useSelector((state) => state.newsReducer);

  const { loadingproduct, myStore } = useSelector(
    (state) => state.storeReducer
  );
  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [errorField, setErrorField] = useState({
    nameNews: "",
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
    let descErr = "";
    let contentErr = "";
    let image_urlErr = "";
    let categoryIdErr = "";

    if (nameNews.length <= 0) {
      nameNewsErr = "Tên tin tức không được để trống";
    }

    if (!selected) {
      categoryIdErr = "Danh mục không được để trống";
    }

    if (desc.length <= 0) {
      descErr = "Mô tả không được để trống";
    }

    if (content.length <= 0) {
        contentErr = "Nội dung không được để trống";
    }

    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameNewsErr ||
      descErr ||
      contentErr ||
      image_urlErr
    ) {
      setErrorField({
        name: nameNewsErr,
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
      try {
        const res = await newsApi.storeCreateNews(data);
        // const res = '';
        if ((res.message = "Success")) {
          setNewsForm({});
          toast.success("Tạo mới tin tức thành công", {
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
      <span className="order-title">Thêm Tin Tức</span>
      <Form
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
        onFinish={handleSubmit}
        className="mt-5"
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Tin Tức</Typography.Title>
          <Input
            defaultValue={"Ten Tin Tuc"}
            onChange={onChangeProductForm}
            name="nameNews"
            value={nameNews}
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
                onChange={(value) => setSelected(value)}
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  height: "45px",
                  width: "300px",
                }}
              >
                {categoryNews.map((category) => (
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

          {/* <Input.TextArea
            rows={6}
            placeholder="Nội dung"
            onChange={onChangeNewsForm}
            name="content"
            value={content}
            className="p-2 pl-3"
            style={{
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
          {errorField.description && (
            <div className="text-danger">{errorField.description}</div>
          )} */}

                        {/* <Editor
                          apiKey="1032sm2g7xqskwuh950phcjn5mqmebmd2p0npg1babpnxax7"
                          scriptLoading={{ async: true }}
                            init={{
                              selector: 'textarea#open-source-plugins',
                              plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons',
                              menubar: 'file edit view insert format tools table help',
                              toolbar: 'outdent indent | bold italic underline | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | image | undo redo |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview | insertfile media link anchor codesample',
                              toolbar_sticky: true,
                              image_advtab: true,
                              importcss_append: true,
                              automatic_uploads: true,
                              images_upload_handler: async(blobInfo, success, failure) => {
                                const fileData = new FormData();
                                fileData.append('file', blobInfo.blob(), blobInfo.filename());
                                const res = await uploadApi.uploadSingle(fileData);
                                console.log('resss', res);
                                if(res.success) {
                                    // message.success(translate('Tai_len_thanh_cong'));
                                    success(res.url)
                                } else {
                                    if(res.error.message === "File too large") {
                                        // message.error(`${translate('Dung_luong_anh_khong_qua')} 5mb !`);
                                    } if(res.error.message === "Images Only!") {
                                        // message.error(`${translate('Chi_tai_len_dinh_dang_anh')} .jpg, .png, .jpeg !`);
                                    } else {
                                        // message.error(translate('Tai_len_that_bai'));
                                    }
                                }
                              },
                              height: 600,
                              image_caption: true,
                              quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                              noneditable_noneditable_class: 'mceNonEditable',
                              toolbar_mode: 'sliding',
                              contextmenu: 'link image imagetools table',
                              fontsize_formats: '10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px 26px 27px 28px 29px 30px',
                              content_style: 'body { font-family:Arial,sans-serif; font-size:13px }',
                              setup: function (editor) {
                                  editor.on('change', function () {
                                      editor.save();
                                  });
                              }
                            }}
                          /> */}
        </Form.Item>

        <Form.Item>
                <CKEditor
                    // config={{
                    //   extraPlugins: [uploadPlugin]
                    // }}
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
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
    </div>
  );
};

export default StoreAddNews;