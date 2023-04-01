import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ProductManagement.scss";
import EditProduct from "./EditProduct/EditProduct";
import DeleteProduct from "./DeleteProduct/DeleteProduct";

import ImageError from "../../../assets/images/error/imageerror.png";

import { Divider, Radio, Table, Space } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { storeGetProduct } from "../../../redux/reducers/store";
import storeApi from "../../../api/storeApi";
import Loading from "../../Loading/Loading";


const columns = [
  {
    title: "STT",
    key: "name",
    render: (id, record, index) => {
      console.log("record",record)
      ++index;
      return index;
    },
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "name",
  },
  {
    title: "Đã Bán",
    dataIndex: "total_sold",
  },
  {
    title: "Giá Bán",
    dataIndex: "price",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
  },
  {
    title: "Thao tác",
    key: "action",
    align: "center",  
    render: (_, record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Link to={`/account/product-management/edit-product/${record.id}`}>
            Sửa
          </Link>
          <DeleteProduct product={record} />
        </div>
    ),
    // dataIndex: "action",
  },
];


const ProductManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeGetProduct());
  }, []);


  const { loadingproduct, productsOfStore } = useSelector(
    (state) => state.storeReducer
  );

  console.log("productsOfStore",productsOfStore)

  if (loadingproduct) {
    return <Loading />;
  }

  const handleEditProduct = async (id, data) => {
    const res = await storeApi.storeEditProduct(id, data);
    if (res) {
      // window.location.reload();
      console.log("update success");
    }
    return res;
  };

  return (
    <div className="order-management">
      <span className="order-title">Quản Lý Sản Phẩm</span>
      <div className="order-table">
        <Table
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          columns={columns}
          dataSource={productsOfStore}
        />
        {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="">Tên Sản Phẩm</TableCell>
                <TableCell align="center">Đã Bán</TableCell>
                <TableCell align="center">Giá Bán</TableCell>
                <TableCell align="center">Số Lượng</TableCell>
                <TableCell align="center">Trạng Thái</TableCell>
                <TableCell align="center">Thao Tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productsOfStore.map((product, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row" align="">
                    <Link to={`/product/${product.id}`}>
                      <div
                        className="order-text-overflow"
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          width: "230px",
                          display: "flex",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
                        {!product.image_url ? (
                          <img
                            src={ImageError}
                            alt="error"
                            className="product-management-img"
                            style={{
                              layout: "fill",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${product?.image_url[0]?.url}`}
                            alt="error"
                            className="product-management-img"
                            style={{
                              layout: "fill",
                              objectFit: "cover",
                            }}
                          />
                        )}
                        <div
                          style={{
                            marginLeft: "10px",
                          }}
                        >
                          {product.name}
                        </div>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell align="center">{product?.total_sold}</TableCell>
                  <TableCell align="center">{product?.price}</TableCell>
                  <TableCell align="center">{product?.quantity}</TableCell>
                  <TableCell align="center">Chưa Xác Nhận</TableCell>
                  <TableCell align="center">
                    <div style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100%"
                    }}>
                      <EditProduct product={product} />
                      <DeleteProduct product={product} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
    </div>
  );
};

// export default ProductManagement;

export default React.memo(ProductManagement);
