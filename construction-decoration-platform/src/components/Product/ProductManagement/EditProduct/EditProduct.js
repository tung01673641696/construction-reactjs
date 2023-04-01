import React, { useState } from "react";
import {
  Form,
  Select,
  DatePicker,
  Row,
  Col,
  Typography,
  Modal,
  Button,
  Input,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import ImageUpload from "../../../../assets/images/upload/uploadImage.jpg";

import { validateNumber } from "../../../../utils/getValidMessage";

import storeApi from "../../../../api/storeApi";
import uploadApi from "../../../../api/uploadImage";
import { useParams } from "react-router-dom";

import { productDetail } from "../../../../redux/reducers/product";
import { useEffect } from "react";
import { isFulfilled } from "@reduxjs/toolkit";
import { getMyStore } from "../../../../redux/reducers/store";


function EditProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { myStore } = useSelector((state) => state.storeReducer);

  const [nameProduct,setNameProduct] = useState()
  const [categoryId, setCategoryId]= useState()
  const [price, setPrice] = useState()
  const [priceSale, setPriceSale]= useState()
  const [sold, setSold]= useState()
  const [productExists, setProductExists]= useState()
  const [length, setLength]= useState()
  const [width, setWidth]= useState()
  const [height, setHeight]= useState()
  const [weight, setWeight]= useState()
  const [desc, setDesc]= useState()

  const { detail } = useSelector((state) => state.productReducer)
  const [product, setProduct] = useState(detail)
  const { categoryList } = useSelector((state) => state.categoryReducer)

  console.log("detail", detail)
  console.log("id", id)
  console.log("category",categoryList)

  useEffect(() => {
    dispatch(getMyStore())
    dispatch(productDetail(id))
  }, [id])

  useEffect(() => {
    setNameProduct(detail?.name)
    setCategoryId(detail?.category?.id)
    setPrice(detail?.original_price)
    setPriceSale(detail?.price)
    setSold(detail?.total_sold)
    setProductExists(detail?.quantity)
    setLength(detail?.size?.length)
    setWidth(detail?.size?.width)
    setHeight(detail?.size?.height)
    setWeight(detail?.size?.weight)
    setDesc(detail?.des)
  },[detail])
  
  let formData = new FormData();

  const [value, setValue] = useState([]);

  const [errorField, setErrorField] = useState({
    nameProduct: "",
    categoryId: "",
    price: "",
    priceSale: "",
    sold: "",
    productExists: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    desc: "",
    // image_url: "",
  });

  // const [newProductForm, setNewProductForm] = useState({
  //   nameProduct: product?.name,
  //   categoryId: product?.category?.name,
  //   price: product?.original_price,
  //   priceSale: product?.price,
  //   sold: product?.total_sold,
  //   productExists: product?.quantity,
  //   length: product?.size?.length,
  //   width: product?.size?.width,
  //   height: product?.size?.height,
  //   weight: product?.size?.weight,
  //   desc: product?.des,
  //   image_url: "",
  // })

  // const {
  //   nameProduct,
  //   categoryId,
  //   price,
  //   priceSale,
  //   sold,
  //   productExists,
  //   length,
  //   width,
  //   height,
  //   weight,
  //   desc,
  //   image_url,
  // } = newProductForm

  // const onChangeProductForm = (e) => {
  //   setNewProductForm({ ...newProductForm, [e.target.name]: e.target.value })
  // }

  const handleImage = async (e) => {
    for (const key of Object.keys(e.target.files)) {
      formData.append("files", e.target.files[key]);
    }
    try {
      const res = await uploadApi.uploadArray(formData);
      console.log("res", res)
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

  console.log("value", value)
  const validate = () => {
    let nameProductErr = "";
    let categoryIdErr = "";
    let priceErr = "";
    let priceSaleErr = "";
    let soldErr = "";
    let productExistsErr = "";
    let lengthErr = "";
    let widthErr = "";
    let heightErr = "";
    let weightErr = "";
    let descErr = "";
    // let image_urlErr = "";

    if (nameProduct.length <= 0) {
      nameProductErr = "Tên sản phẩm không được để trống";
    }

    if (!categoryId) {
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

    if (
      nameProductErr ||
      categoryIdErr ||
      priceErr ||
      priceSaleErr ||
      soldErr ||
      productExistsErr ||
      lengthErr ||
      widthErr ||
      heightErr ||
      weightErr ||
      descErr
      // image_urlErr
    ) {
      setErrorField({
        name: nameProductErr,
        category_id: categoryIdErr,
        original_price: priceErr,
        price: priceSaleErr,
        total_sold: soldErr,
        quantity: productExistsErr,
        description: descErr,
        // image_url: image_urlErr,
        height: heightErr,
        length: lengthErr,
        weight: weightErr,
        width: widthErr,
      });
      return false;
    }
    return true
  }

  const handleSubmit = async () => {
    const isValid = validate();
    console.log("isvalid", isValid)

    if (isValid) {
      setErrorField({});


      let data = {
        name: nameProduct,
        des: desc,
        category_id: categoryId,
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
      }

      try {
        const res = await storeApi.storeEditProduct({ id: id, data: data });
        if ((res.message = "Success")) {
          // setNewProductForm({});
          toast.success("Cập nhật sản phẩm thành công", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        return res;
      } catch (error) {
        toast.error("Cập nhật sản phẩm không thành công", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  }

  return (
    <div className="edit-product">
      <span className="order-title">Update Sản Phẩm</span>
      <Form
        onFinish={handleSubmit}
      >
        <Form.Item>
          <Typography.Title level={5}>Tên Sản Phẩm</Typography.Title>
          <Input
            // onChange={onChangeProductForm}
            name="nameProduct"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
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
                value={categoryId}
                onChange={(value) => setCategoryId(value)}
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
                // onChange={onChangeProductForm}
                onChange={(e) => setPrice(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="priceSale"
                value={priceSale}
                onChange={(e) => setPriceSale(e.target.value)}
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
              <Typography.Title level={5}>Số Lượng Có Sẵn</Typography.Title>
              <Input
                // onChange={onChangeProductForm}
                name="productExists"
                value={productExists}
                onChange={(e) => setProductExists(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="sold"
                value={sold}
                onChange={(e) => setSold(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
                // onChange={onChangeProductForm}
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
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
            // onChange={onChangeProductForm}
            onChange={(e) => setDesc(e.target.value)}
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
          {/* {errorField.image_url && (
            <div className="text-danger">{errorField.image_url}</div>
          )} */}
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
  )
};

export default EditProduct;



