import React from "react";
import "./GroupSuggest.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "moment";
import photo from "../../../assets/images/group/photo.png";


const GroupSuggest = () => {
  const { groupList, loading } = useSelector((state) => state.groupReducer);

  return (
    <div className="GroupSuggest">
      <div className="GroupSuggest__Title">Gợi Ý Cho Bạn</div>
      <div className="GroupSuggest__Box">
        <div className="GroupSuggest__Box__Item">
          {groupList.data &&
            groupList.data.map((item) => (
              <Link to={`${item.id}`} key={item.id}>
                <div className="GroupSuggest__Box__Item__C">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${item.image_url}`}
                    alt="error"
                    style={{
                      width: "210px",
                      height: "205px",
                    }}
                  />
                  <p className="GroupSuggest__Box__Item__Name">{item.name}</p>
                  <p className="GroupSuggest__Box__Item__Member">
                    {item.total_member} thành viên{" "}
                  </p>
                  <p className="GroupSuggest__Box__Item__Join">Tham Gia</p>
                </div>
              </Link>
            ))}
        </div>
        
      </div>

    </div>
  );
};

export default GroupSuggest;
