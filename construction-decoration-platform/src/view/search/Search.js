import React, { useEffect, useState } from "react";
import "./Search.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchFilter from "./searchFilter/SearchFilter";
import Footer from "../layouts/footer/Footer";
import { getListProduct } from "../../redux/reducers/search";
import Pagination from "@mui/material/Pagination";
import HeaderDetail from "../layouts/headerDetail/HeaderDetail";
import searchApi from "../../api/searchApi";
import Header from "../layouts/header/Header";

function Search() {
  const params = useParams();
  // const page = params.page;
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);

  const [page, setPage] = useState(params.page);
  const { categoryList } = useSelector((state) => state.categoryReducer);
  // const { total_page } = useSelector((state) => state.searchReducer);
  let size = params?.size;
  let desc = params?.desc;
  let name = params?.name;

  // useEffect(() => {
  //   dispatch(getListProduct({ name }));
  // }, [params, name]);

  useEffect(() => {
    const getAllProductList = async () => {
      const result = await searchApi.filter(name);
      if (result.status == 200) {
        setProductList(result.data.data);
      } else {
        setProductList([]);
      }
    };
    getAllProductList();
  }, [name]);

  // const { productList } = useSelector((state) => state.searchReducer);

  const onChange = (e, p) => {
    setPage(p);
    // params.page = page
  };

  return (
    <>
      {/* <HeaderDetail /> */}
      <Header />
      <div className="search-home1">
        <div className="search-home-title1">
          <p>Kết quả tìm kiếm cho "{params.name}"</p>
          <div>
            <Link to="/">Trang chủ</Link>
            <ArrowForwardIosIcon style={{ width: "15px" }} />
            <span> Kết quả tìm kiếm cho "{params.name}"</span>
          </div>
        </div>
        <div className="search-home-body1">
          {/* <div className="search-home-category">
            <p className="search-home-category-title">Danh mục sản phẩm</p>
            {categoryList.map((item) => (SSS
              <div style={{ marginBottom: '15px' }} key={`${item.id}`}>
                <Link
                  to={`/category/name=${item.name}&page=1&size=12&id=${item.id}`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div> */}
          <div className="search-home-list">
            <SearchFilter productList={productList}/>
            {/* <Pagination
              count={total_page}
              shape="rounded"
              page={page}
              hidePrevButton
              className="pagination-btn-pgn"
              onChange={onChange}
            /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
