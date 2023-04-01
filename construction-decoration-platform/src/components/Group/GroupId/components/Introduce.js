import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
const Introduce = () => {
  const { groupList, loading, groupDetails } = useSelector(
    (state) => state.groupReducer
  );
  return (
    <div className="GroupNew__Introduce">
        <div className="GroupNew__Introduce__C">
          <div className="GroupNew__Introduce__C__Title">
            <strong>Giới thiệu về nhóm này</strong>
          </div>
          <div className="GroupNew__Introduce__C__Des">{groupDetails.des}</div>
          <div className="GroupNew__Introduce__C__Status">
            {" "}
            <strong> Riêng Tư</strong> <br />
            Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ
            đăng.
          </div>
          <div className="GroupNew__Introduce__C__Created">
            <strong>Hoạt động</strong>
            <br />
            {groupDetails.created_date}
          </div>
        </div>
        <div className="GroupNew__Introduce__C">
          <div className="GroupNew__Introduce__C__Title">Thành viên</div>
          <div className="GroupNew__Introduce__C__Des">img</div>
          <div className="GroupNew__Introduce__C__Status">
            {" "}
            Riêng Tư <br />
            Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ
            đăng.
          </div>
          <div className="GroupNew__Introduce__C__Created">
            Hoạt động
            <br />
            {groupDetails.created_date}
          </div>
        </div>
      </div>
    )
}

export default Introduce