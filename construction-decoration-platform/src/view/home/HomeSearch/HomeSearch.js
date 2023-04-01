import "./HomeSearch.scss";
import Search from "../../../components/Search/Search";
import { useSelector } from "react-redux";

import React from "react";
import { token } from "../../../helpers/common";
import Login from "../../../components/Auth/Login/Login";
import Register from "../../../components/Auth/Register/Register";
import backgroundImage from "../../../assets/images/home/bannerdesign.jpg";
import { openNotification } from "../../../components/Alert/Alert";

function HomeSearch() {
    //empty click to category-text move to link
    const { user, error } = useSelector((state) => state.userReducer);

    return (
        <div className="homesearch">
            <img
                className="home-backgroundImg"
                src={backgroundImage}
                alt="errorBackGroundImages"
            ></img>
            
            <div className="homesearch-list">
                {/* <p className="homesearch-list-title">
                    SÀN THƯƠNG MẠI ĐIỆN TỬ CHO XÂY DỰNG, THIẾT KẾ
                </p> */}
                {/* <Search /> */}
                {/* <div className="homesearch-list-category">
                    <a href="" className="homesearch-category-text">
                        Electrical
                    </a>
                    <a href="" className="homesearch-category-text">
                        Hardware
                    </a>
                    <a href="" className="homesearch-category-text">
                        Power Tools
                    </a>
                    <a href="" className="homesearch-category-text">
                        Chemical Products
                    </a>
                    <a href="" className="homesearch-category-text">
                        O Rings
                    </a>
                    <a href="" className="homesearch-category-text">
                        Construction
                    </a>
                </div> */}
                <div className="homesearch-btn">
                    <div className="desc-construction">
                        <p>NHÀ LÀ KHỞI NGUỒN CỦA MỌI ĐIỀU HẠNH PHÚC</p>
                        <span>Để mỗi ngày được sống đúng và đầy đủ trong tâm hồn. Vì chúng tôi hiểu rõ, mục đích cuối cùng cho những cố gắng để giúp bản thân hạnh phúc hơn!</span>
                    </div>
                    {/* {!user.auth ? (
                        <>
                            <Login />
                            <Register />
                        </>
                    ) : (
                        <></>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default HomeSearch;
