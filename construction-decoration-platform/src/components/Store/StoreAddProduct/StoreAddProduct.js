import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getMyStore } from "../../../redux/reducers/store";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../../assets/images/upload/uploadImage.jpg";

import uploadApi from "../../../api/uploadImage";
import "./StoreAddProduct.scss";
import storeApi from "../../../api/storeApi";

import { toast } from "react-toastify";

import { validateNumber } from "../../../utils/getValidMessage";

const StoreAddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyStore());
  }, []);
  // const { categoryList } = useSelector((state) => state.categoryReducer);

  const categoryList = [
    {
      id: 1000,
      name: "Nội thất",
    },
    {
      id: 1001,
      name: "Vật liệu xây dựng",
    },
  ]

  console.log("categoryList",categoryList)

  const { loadingproduct, myStore } = useSelector(
    (state) => state.storeReducer
  );
  let formData = new FormData();
  const [value, setValue] = useState([]);
  const [selected, setSelected] = useState();

  console.log("selected",selected)

  const [previewImage, setPreviewImage] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState();

  const [errorField, setErrorField] = useState({
    nameProduct: "",
    price: "",
    priceSale: "",
    sold: "",
    productExists: "",
    code: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    desc: "",
    image_url: "",
  });

  //form update new product
  const [newProductForm, setNewProductForm] = useState({
    nameProduct: "",
    price: "",
    priceSale: "",
    sold: "",
    productExists: "",
    code: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    desc: "",
    image_url: "",
  });

  const {
    nameProduct,
    price,
    priceSale,
    sold,
    productExists,
    code,
    length,
    width,
    height,
    weight,
    desc,
    image_url,
  } = newProductForm;

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
    let nameProductErr = "";
    let categoryIdErr = "";
    let priceErr = "";
    let priceSaleErr = "";
    let soldErr = "";
    let productExistsErr = "";
    let codeErr = "";
    let lengthErr = "";
    let widthErr = "";
    let heightErr = "";
    let weightErr = "";
    let descErr = "";
    let image_urlErr = "";

    if (nameProduct.length <= 0) {
      nameProductErr = "Tên sản phẩm không được để trống";
    }

    if (!selected) {
      categoryIdErr = "Danh mục không được để trống";
    }

    if (!validateNumber(price) || price.length <= 0) {
      priceErr = "Giá tiền không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(priceSale) || priceSale.length <= 0) {
      priceSaleErr = "Giá tiền không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(productExists) || productExists.length <= 0) {
      productExistsErr =
        "Số lượng có sẵn không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(sold) || sold.length <= 0) {
      soldErr = "Số lượng đã bán không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(length) || length.length <= 0) {
      lengthErr = "Chiều dài không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(width) || width.length <= 0) {
      widthErr = "Chiều rộng không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(height) || height.length <= 0) {
      heightErr = "Chiều cao không được để trống hoặc không đúng định dạng";
    }

    if (!validateNumber(weight) || weight.length <= 0) {
      weightErr = "Cân nặng không được để trống hoặc không đúng định dạng";
    }

    if (desc.length <= 0) {
      descErr = "Mô tả không được để trống";
    }

    if (!value.image_url || value?.image_url?.length == 0) {
      image_urlErr = "Hình ảnh không được để trống";
    }

    if (
      nameProductErr ||
      categoryIdErr ||
      priceErr ||
      priceSaleErr ||
      soldErr ||
      productExistsErr ||
      codeErr ||
      lengthErr ||
      widthErr ||
      heightErr ||
      weightErr ||
      descErr ||
      image_urlErr
    ) {
      setErrorField({
        name: nameProductErr,
        category_id: categoryIdErr,
        original_price: priceErr,
        price: priceSaleErr,
        total_sold: soldErr,
        quantity: productExistsErr,
        description: descErr,
        image_url: image_urlErr,
        height: heightErr,
        length: lengthErr,
        weight: weightErr,
        width: widthErr,
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
        name: nameProduct,
        des: desc,
        category_id: selected,
        store_id: myStore?.data.id,
        total_sold: parseInt(sold),
        original_price: parseInt(price),
        price: parseInt(priceSale),
        quantity: parseInt(productExists),
        description: desc,
        parent_id: 1,
        size: {
          height: parseInt(height),
          length: parseInt(length),
          weight: parseInt(weight),
          width: parseInt(width),
        },
      };
      try {
        const res = await storeApi.storeCreateProduct(data);
        if ((res.message = "Success")) {
          setNewProductForm({});
          toast.success("Tạo mới sản phẩm thành công", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        return res;
      } catch (error) {
        toast.error("Tạo mới sản phẩm không thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  return (
    <div className="store-info">
      <span className="order-title">Thêm Sản Phẩm</span>
      <Form
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
        onFinish={handleSubmit}
        className="mt-5"
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Sản Phẩm</Typography.Title>
          <Input
            defaultValue={"Ten San Pham"}
            onChange={onChangeProductForm}
            name="nameProduct"
            value={nameProduct}
            placeholder="Tên sản phẩm"
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
                {categoryList.map((category) => (
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
          <Row justify="space-between" align="top">
            <Col span={11}>
              <Typography.Title level={5}>Giá </Typography.Title>
              <Input
                onChange={onChangeProductForm}
                name="price"
                value={price}
                placeholder="Giá"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.original_price ? (
                <div className="text-danger">{errorField.original_price}</div>
              ) : null}
            </Col>

            <Col span={11}>
              <Typography.Title level={5}>Giá Khuyến Mãi</Typography.Title>

              <Input
                onChange={onChangeProductForm}
                name="priceSale"
                value={priceSale}
                placeholder="Giá Khuyến Mãi"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.price ? (
                <div className="text-danger">{errorField.price}</div>
              ) : null}
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row justify="space-between" align="top">
            <Col span={11}>
              <Typography.Title level={5}>Số Lượng Có Sẵn </Typography.Title>
              <Input
                onChange={onChangeProductForm}
                name="productExists"
                value={productExists}
                placeholder="Số Lượng Có Sẵn"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.quantity ? (
                <div className="text-danger">{errorField.quantity}</div>
              ) : null}
            </Col>

            <Col span={11}>
              <Typography.Title level={5}>Đã Bán</Typography.Title>

              <Input
                onChange={onChangeProductForm}
                name="sold"
                value={sold}
                placeholder="Đã Bán"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.total_sold && (
                <div className="text-danger">{errorField.total_sold}</div>
              )}
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row justify="space-between" align="top">
            <Col span={11}>
              <Typography.Title level={5}>Chiều Dài (cm)</Typography.Title>
              <Input
                onChange={onChangeProductForm}
                name="length"
                value={length}
                placeholder="Chiều Dài"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.length && (
                <div className="text-danger">{errorField.length}</div>
              )}
            </Col>

            <Col span={11}>
              <Typography.Title level={5}>Chiều Rộng (cm)</Typography.Title>

              <Input
                onChange={onChangeProductForm}
                name="width"
                value={width}
                placeholder="Chiều Rộng"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.width && (
                <div className="text-danger">{errorField.width}</div>
              )}
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row justify="space-between" align="top">
            <Col span={11}>
              <Typography.Title level={5}>Chiều Cao (cm)</Typography.Title>
              <Input
                onChange={onChangeProductForm}
                name="height"
                value={height}
                placeholder="Chiều Cao"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.height && (
                <div className="text-danger">{errorField.height}</div>
              )}
            </Col>

            <Col span={11}>
              <Typography.Title level={5}>Cân Nặng (gam)</Typography.Title>

              <Input
                onChange={onChangeProductForm}
                name="weight"
                value={weight}
                placeholder="Cân Nặng"
                className="p-2 pl-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              />
              {errorField.weight && (
                <div className="text-danger">{errorField.weight}</div>
              )}
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

export default StoreAddProduct;
