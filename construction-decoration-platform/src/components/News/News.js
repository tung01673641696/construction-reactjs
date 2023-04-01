import React, { useEffect } from "react";
import "./News.scss";
import pedri from "../../assets/images/home/pedri.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listNews } from "../../redux/reducers/news";
import { setIncreaseNews, setDecreaseNews } from "../../redux/reducers/page";
import share from "../../assets/images/home/share.svg";
import CartNews from "../CartNews/CartNews";
function News({ size }) {
  const dispatch = useDispatch();
  const { listNew, loadingproduct } = useSelector((state) => state.newsReducer);
  const { pageNews } = useSelector((state) => state.pageReducer);

  console.log('listNew', listNew);

  useEffect(() => {
    // let size = 6;
    dispatch(listNews({ pageNews, size: 6 }));
  }, [pageNews, size]);
  // console.log("listNew", listNew.data.map((it) => {
  //   return it.name
  // }));
  // console.log("pageNews",pageNews);

  if (loadingproduct) {
    return <p>Không có tin tức.</p>;
  }

  return (
    <div className="news-page">

      <div className="news-page-list">
        {listNew?.data?.map((item) => (
          <CartNews item={item} />
        ))}
      </div>
    </div>
  );
}

export default News;
