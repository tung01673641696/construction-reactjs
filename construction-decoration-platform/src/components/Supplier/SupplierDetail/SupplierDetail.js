import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import storeApi from "../../../api/storeApi";
// import "./SupplierAll.scss";
// import banner from "../../../assets/images/supplier/banner.jpg";
// import avatar from "../../../assets/images/supplier/avatar.jpg";
// import { supplierGetAll } from "../../../redux/reducers/supplier";

import ProductCard from "../../ProductCard/ProductCard";
import { StackSkeleton } from "../../Skeleton/StackSkeleton";
function SupplierDetail() {
  const params = useParams();
  const [productsOfStore, setProductsOfStore] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(false);
  console.log("params", params);

  useEffect(() => {
    // dispatch(supplierGetAll({ page: 1, size: 8 }));
    window.scrollTo(0, 0);
    const storeGetProducts = async (id) => {
      const result = await storeApi.getProduct(id, 1, 6);
      if (result.status === 200) {
        setLoadingProduct(true);
        setProductsOfStore(result.data);
        setLoadingProduct(false);
      } else {
        setProductsOfStore([]);
      }
    };
    storeGetProducts(params.id);
  }, []);

  console.log("productsOfStore", productsOfStore);

  return (
    <div className="supplier">
      <h2 className="supplier_title">Sản phẩm của nhà cung cấp</h2>
      <div
        className="supplier_link"
        style={{
          marginBottom: "30px",
        }}
      >
        <Link to="/">Trang chủ</Link>

        <Link to="/supplier">Nhà cung cấp</Link>
      </div>

      <div className="product-for">
        {loadingProduct ? (
          <StackSkeleton value={8} height={320} />
        ) : productsOfStore?.data == 0 ? (
          <h4
            style={{
              textAlign: "center",
              width: "100%",
              height: "300px",
            }}
          >
            Hiện tại shop chưa có sản phẩm{" "}
          </h4>
        ) : (
          <div className="product-for-list">
            {productsOfStore?.data?.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SupplierDetail;
