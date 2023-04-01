import React from "react";
import "./IconNews.scss";
import chat from "../../assets/images/news/chat.svg";
import heart from "../../assets/images/news/heart.svg";
import eye from "../../assets/images/news/eye.svg";

function IconNews({ el }) {
  if (el) {
    return (
      <div className="news-page-img-icon">
        <div className="news-page-icon-item">
          <img src={heart} alt="" />
          <p style={{ color: "var(--orange-home)" }}>{el.total_like}</p>
        </div>
        <div className="news-page-icon-item">
          <img src={chat} alt="" />
          <p style={{ color: " #A7CDCC" }}>{el.total_comment}</p>
        </div>
        <div className="news-page-icon-item">
          <img src={eye} alt="" />
          <p style={{ color: " #014B56" }}>{el.total_seen}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="news-page-img-icon">
        <div className="news-page-icon-item">
          <img src={heart} alt="" />
          <p style={{ color: "var(--orange-home)" }}>{123}</p>
        </div>
        <div className="news-page-icon-item">
          <img src={chat} alt="" />
          <p style={{ color: " #A7CDCC" }}>{123}</p>
        </div>
        <div className="news-page-icon-item">
          <img src={eye} alt="" />
          <p style={{ color: " #014B56" }}>{123}</p>
        </div>
      </div>
    );
  }
}

export default IconNews;
