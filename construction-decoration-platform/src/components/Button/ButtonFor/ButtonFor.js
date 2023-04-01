import React, { useEffect } from "react";
import "./ButtonFor.scss";
import arrowright from "../../../assets/images/home/arrowright.svg";
import arrowrightcolor from "../../../assets/images/home/arrowrightcolor.svg";
import arrowleft from "../../../assets/images/home/arrowleft.svg";
import arrowleftcolor from "../../../assets/images/home/arrowleftcolor.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setDecreaseSale,
  setIncreaseSale,
  setIncreaseYou,
  setDecreaseYou,
  setDecreaseDay,
  setIncreaseDay,
} from "../../../redux/reducers/page";
import { Divider } from 'antd';

function ButtonFor({ text, page,totalPage }) {
  // const dispatch = useDispatch();
  // const { pageSale, pageYou, pageDay } = useSelector(
  //   (state) => state.pageReducer
  // );
  // const { total_page } = useSelector((state) => state.productReducer);

  // useEffect(() => {}, [pageSale, dispatch]);
  // const lineWidth = 100 / total_page;
  // const translate = (pageSale - 1) * lineWidth;
  // const handleDecrease = () => {
  //   if (page === "you") {
  //     dispatch(setDecreaseYou());
  //   } else if (page === "day") {
  //     dispatch(setDecreaseDay());
  //   } else if (page === "sale") {
  //     dispatch(setDecreaseSale());
  //   }
  // };
  // const handleIncrease = () => {
  //   if (page === "you") {
  //     dispatch(setIncreaseYou());
  //   } else if (page === "day") {
  //     dispatch(setIncreaseDay());
  //   } else if (page === "sale") {
  //     dispatch(setIncreaseSale());
  //   }
  // };
  // const style = {
  //   width: `${lineWidth}%`,
  //   left: `${translate}%`,
  // };
  return (
    <div className="button-for">
      <div className="button-for-name">
        {/* <p className="button-for-tilte">{text}</p> */}
        <Divider plain>{text}</Divider>
      </div>
      
        {/* <div className="button-for-btn">
          {pageSale < 2 ? (
            <div className="button-for-btn-right">
              <img
                src={arrowleftcolor}
                alt=""
                className="button-for-btn-color"
                style={{
                  marginTop: "5px"
                }}
              />
              <img src={arrowleft} alt="" className="button-for-btn-white"/>
            </div>
          ) : (
            <div
              className="button-for-btn-right"
              onClick={() => {
                handleDecrease();
              }}
            >
              <img
                src={arrowleftcolor}
                alt=""
                className="button-for-btn-color"
                style={{
                  marginTop: "5px"
                }}
              />
              <img src={arrowleft} alt="" className="button-for-btn-white" />
            </div>
          )}
          {pageSale > total_page - 1 ? (
            <div className="button-for-btn-right">
              <img
                src={arrowrightcolor}
                alt=""
                className="button-for-btn-color"
                style={{
                  marginTop: "5px"
                }}
              />{" "}
              <img src={arrowright} alt="" className="button-for-btn-white" />
            </div>
          ) : (
            <div
              className="button-for-btn-right"
              onClick={() => {
                handleIncrease();
              }}
            >
              <img
                src={arrowrightcolor}
                alt=""
                className="button-for-btn-color"
                style={{
                  marginTop: "5px"
                }}
              />{" "}
              <img src={arrowright} alt="" className="button-for-btn-white" />
            </div>
          )}
        </div> */}
  
    </div>
  );
}

export default ButtonFor;
