import React, { useEffect } from "react";
import "./NewsDetail.scss";
import HeaderDetail from "../../layouts/headerDetail/HeaderDetail";
import Footer from "../../layouts/footer/Footer";
import { newsDetail } from "../../../redux/reducers/news";
import pedri from "../../../assets/images/home/pedri.jpg";
import IconNews from "../../../components/IconNews/IconNews";
import { useDispatch, useSelector } from "react-redux";
import CommentNews from "../../../components/Comment/CommentNews/CommentNews";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Header from "../../layouts/header/Header";

function NewsDetail() {
  const params = useParams();
  let id = params.id
  const { detailNews } = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsDetail(id));
  }, [id]);

  console.log('detailNews', detailNews);
  return (
    <>
      {/* <HeaderDetail /> */}
      <Header />
      <div className="news-page-detail">
        <div className="news-page-detail-title">
          {detailNews.name}
        </div>
        <div className="news-page-detail-des mt-30 mb-30">
         {detailNews.des}
        </div>
        <div className="news-page-detail-img">
        <img src={detailNews?.image_url?.length === 0 || detailNews.image_url === undefined ? "" : `${process.env.REACT_APP_API_URL}${detailNews?.image_url[0]?.url}`} alt="" />
        </div>
        <div className="news-page-detail-content">
         {parse(`${detailNews?.content}`)}
        </div>
        <div className="news-page-detail-user mt-30">
          <div className="news-user-from">
            <p className="news-user-from-date">5 Tháng 10, 2021 - 8:16 pm</p>
            <p className="news-user-from-name">Viết bởi John Abraham</p>
            <a href="/">Trở về</a>
          </div>
          <IconNews />
        </div>
      </div>
        <CommentNews />
      <Footer />
    </>
  );
}

export default NewsDetail;
