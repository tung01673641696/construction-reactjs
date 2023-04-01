import React, { useEffect } from "react";
import "./SearchFilter.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import item from "../../../assets/images/product/item.jpg";
import { useParams } from "react-router-dom";
import { getListProduct } from "../../../redux/reducers/search";

function SearchFilter({ productList }) {
  const params = useParams();
  const dispatch = useDispatch();
  let name = params?.name;

  return (
    <>
      <div className="search-filter">
        <p>Sắp xếp:</p>
        <Link
          to={`/search/name=${params.name}&desc=false&page=${params.page}&size=12`}
        >
          Mới nhất
        </Link>
        {params.desc === "true" ? (
          <Link
            to={`/search/name=${params.name}&desc=false&page=${params.page}&size=12`}
          >
            Giá
          </Link>
        ) : (
          <Link
            to={`/search/name=${params.name}&desc=true&page=${params.page}&size=12`}
          >
            Giá
          </Link>
        )}
      </div>
      {productList?.length == 0 ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontBold: 600,
          }}
        >
          {" "}
          Không tìm thấy sản phẩm :({" "}
        </div>
      ) : (
        <div className="search-filter-list">
          {productList.map((product) => (
            <Link to={"/product/" + product?.id} key={`${product?.id}`}>
              <div className="search-filter-item">
                <div className="search-item-img">
                  {(product?.image_url?.length === 0  || !product?.image_url)? (
                    <img src={"item"} alt="Error" />
                  ) : (
                    <img
                      src={`${process.env.REACT_APP_API_URL}${product?.image_url[0].url}`}
                      alt="error"
                    />
                  )}
                </div>
                <div className="search-item-name">{product?.name}</div>
                <div className="search-item-price">
                  {product?.price?.toLocaleString("de-DE")} VNĐ
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchFilter;
