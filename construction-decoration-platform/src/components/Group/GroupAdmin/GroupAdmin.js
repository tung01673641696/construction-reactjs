import React from "react";
import "./GroupAdmin.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroup } from "../../../redux/reducers/group";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const GroupAdmin = () => {
  const dispatch = useDispatch();
  const { groupCreated, loading } = useSelector((state) => state.groupReducer);

  console.log("ad", groupCreated);

  return (
    <div className="group-admin">
      <p
        style={{
          marginTop: "10px",
        }}
      >
        NHÓM DO BẠN QUẢN LÝ{" "}
      </p>

      {groupCreated.data &&
        groupCreated.data.map((item) => (
          <Link to={"/group/" + item.id}>
            <div className="group-admin-item">
              <img src={`${process.env.REACT_APP_API_URL}${item.image_url}`} />
              <div className="group-admin-info">
                <p className="group-admin-info-name">{item.name}</p>
                <p className="group-admin-info-member">
                  {" "}
                  {item.total_member} thành viên{" "}
                </p>
                <p className="group-admin-info-create-data">
                  {
                    // moment(item.created_date).format();    // 08/29/2022
                  }
                </p>
              </div>
            </div>
          </Link>
        ))
      }
    </div >
  );
};

export default GroupAdmin;
