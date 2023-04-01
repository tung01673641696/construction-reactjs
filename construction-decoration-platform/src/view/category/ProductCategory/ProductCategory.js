import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";
import Footer from "../../layouts/footer/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeaderDetail from "../../layouts/headerDetail/HeaderDetail";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { listProductCategory } from "../../../redux/reducers/category";
import CategoryFilter from "./Filter/CategoryFilter";
import Header from "../../layouts/header/Header";

function ProductCategory() {
  const params = useParams();
  let id = params.id;
  let arrange = params?.arrange;
  const { total_pages, listproductCategory, categoryList } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const onChange = (e, p) => {
    setPage(p);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProductCategory({ id, page }));
  }, [page, params]);

  console.log("categoryList", categoryList);
  console.log("params", params.name);

  const checkActived = (category) => {
    if (category == params.name) {
      return "hidden_actived";
    }
  };

  return (
    <>
      {/* <HeaderDetail /> */}
      <Header />
      <div className="search-home">
        <div className="search-home-title">
          {/* <p>Kết quả tìm kiếm cho "{params.name}"</p> */}
          {/* <div> */}
          {/* <Link to="/" >Category</Link> */}
          {/* <ArrowForwardIosIcon style={{ width: "15px" , marginRight: "5px" , marginLeft: "5px"}} /> */}
          {/* </div> */}
          <div className="search-home-category">
            <p className="search-home-category-title">Tất Cả Danh Mục</p>
            <div className="search-home-active">
              <ArrowForwardIosIcon
                style={{ width: "15px", marginRight: "", marginLeft: "" }}
              />
              {params.name}
            </div>
            {categoryList.map((item) => (
              <div
                style={{ marginTop: "15px", paddingLeft: "15px" }}
                key={`${item.id}`}
                className={checkActived(item.name)}
              >
                <Link
                  to={`/category/name=${item.name}&page=1&size=12&id=${item.id}&notArrange=true`}
                >
                  <ArrowForwardIosIcon
                    style={{
                      width: "15px",
                      marginLeft: "",
                      display: "none",
                    }}
                  />
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="search-home-body">
          <div className="search-home-list">
            {/* <SearchFilter /> */}
            <CategoryFilter />
            <Pagination
              count={total_pages}
              shape="rounded"
              page={page}
              hidePrevButton
              className="pagination-btn-pgn"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductCategory;
