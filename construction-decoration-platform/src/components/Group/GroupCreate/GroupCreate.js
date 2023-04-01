import React from "react";
import "./GroupCreate.scss";
import item from "../../../assets/images/group/global-search.png";
import { Link } from "react-router-dom";

const GroupCreate = () => {
  const handleCreate = () => {};
  return (
    <div className="group-create">
      <p>Nhóm </p>
      <div className="group-discover">
        <img src={item} />
        <p> Khám phá</p>
      </div>
      <div className="btn-create-group">
        <Link to="/group/create" className="nav-link">
          + Tạo mới nhóm
        </Link>
      </div>
    </div>
  );
};

export default GroupCreate;
