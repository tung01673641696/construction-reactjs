import React, { useEffect, useState } from "react";
import "./CartNews.scss";
import { Link, Routes, Route } from "react-router-dom";
import IconNews from "../IconNews/IconNews";

function CartNews({item}) {

    return (

			<div className="news-page-all">
				<Link to={"/news/" + item.id}>
					<div className="news-page-item box-shadow">
						<div className="news-page-item-title">
							<p className="news-page-name">
								{item.name}
							</p>
							<p className="news-page-des" maxlength="2">
								{item.des}
							</p>
							<p>
								<span>{item.author} tác giả</span> 
								<span>{item.timeline} {item.created_date.substring(17,19)} phút trước</span>
							</p>
						</div>
						<div className="news-page-img">
							<img src={item.image_url.length === 0 ? "" : `${process.env.REACT_APP_API_URL}${item.image_url[0].url}`} alt="" />
							<IconNews/>
						</div>
					</div>
				</Link>
			</div>
    )
}

export default CartNews