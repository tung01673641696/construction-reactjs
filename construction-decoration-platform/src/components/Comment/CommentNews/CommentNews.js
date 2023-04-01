import React, { useEffect, useState } from "react";
import "./CommentNews.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCommentNews } from "../../../redux/reducers/comment";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";

function CommentNews() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const params = useParams();
  const { listCommentNews, total_page } = useSelector(
    (state) => state.commentReducer
  );
  let size = 5;
  let id = params.id;
  const onChange = (e, p) => {
    setPage(p);
  };
  console.log(listCommentNews);
  useEffect(() => {
    dispatch(getCommentNews({ id, page, size }));
  }, [params, page]);
  return (
    <div className="comment-news">
      <p className="comment-news-add">Thêm bình luận</p>
      <div className="comment-news-input">
        <textarea
          name="comment"
          form="usrform"
          placeholder="Enter your comment here.."
        ></textarea>
      </div>
      <div className="comment-news-btn">
        <p>Post Comment</p>
      </div>
      {listCommentNews.map((item) => (
        <div className="comment-news-list">
          <p className="comment-news-name">{item.customer.full_name}</p>
          <p className="comment-news-text">{item.content}</p>
          <p className="comment-news-day">{item.created_date}</p>
        </div>
      ))}
      <Pagination
        count={total_page}
        shape="rounded"
        page={page}
        hidePrevButton
        className="pagination-btn-news"
        onChange={onChange}
      />
    </div>
  );
}

export default CommentNews;
