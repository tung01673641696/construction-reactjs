import React, { useEffect, useState } from "react";
import "./News.scss";
import HeaderDetail from "../../view/layouts/headerDetail/HeaderDetail";
import { listNews } from "../../redux/reducers/news";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { useParams, Link } from "react-router-dom";
import pedri from "../../assets/images/home/pedri.jpg";
import Footer from "../layouts/footer/Footer";
import IconNews from "../../components/IconNews/IconNews";
import CartNews from "../../components/CartNews/CartNews";
import Arrow from "../../assets/images/icons/back.png";
import PropTypes from "prop-types";
import Header from "../layouts/header/Header";
import HomeSearch from "../home/HomeSearch/HomeSearch";


function News() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const params = useParams();
  const { total_page } = useSelector((state) => state.newsReducer);
  const { listNew } = useSelector((state) => state.newsReducer);


  console.log("kkkkkk",listNew)

  const size = 10;
  useEffect(() => {
    dispatch(listNews({ page, size }));
  }, [page]);

  const onChange = (e, p) => {
    setPage(p);
    params.page = page
  };

  return (
    <>
      {/* <HeaderDetail /> */}
      <Header />
      <HomeSearch />
      <div className="news-page">
        <div className="news-page-title">Tin tức</div>

        <div className="news-page-list">
          {listNew?.data?.map((item) => (
            <CartNews
              item={item}
            />
          ))}
        </div>

        <div className="news-page-pagination">
          <Pagination
            count={total_page}
            shape="rounded"
            page={page}
            hidePrevButton
            className="pagination-btn-pgn"
            onPageChange={onChange}
          />
        </div>


      </div>
      <Footer />
    </>
  );
}

export default News;
