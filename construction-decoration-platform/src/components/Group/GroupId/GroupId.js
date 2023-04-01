import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGroupDetail } from "../../../redux/reducers/group";
import GroupNew from "./components/GroupNew";

import "./GroupId.scss";
import Introduce from "./components/Introduce";
import Member from "./components/Member";

import groupApi from "../../../api/groupApi";
import GroupChat from "./components/GroupChat";

const GroupId = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { groupList, loading, groupDetails } = useSelector(
    (state) => state.groupReducer
  );

  const { user } = useSelector((state) => state.userReducer);

  // console.log("user",user);

  const common = [
    {
      id: 1,
      title: "Bài viết",
      component: <Introduce />,
      isActive: true,
      classNames: "Group__Id__Container__El__Active",
    },
    {
      id: 2,
      title: "Giới thiệu",
      component: <Introduce />,
      isActive: false,
      classNames: "",
    },
    {
      id: 3,
      title: "Thành viên",
      component: <Introduce />,
      isActive: false,
      classNames: "",
    },
    {
      id: 4,
      title: "Nhóm chat",
      component: <Introduce />,
      isActive: false,
      classNames: "",
    },
  ];

  //1 = default index
  const [activeIndex, setActiveIndex] = useState(common);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getGroupDetail(params.id));
  }, [params.id]);

  const handleChange = (id) => {
    const newData = [...activeIndex];

    newData.map((el) => {
      if (el.id === id) {
        el.isActive = true;
        el.classNames = "Group__Id__Container__El__Active";
      } else {
        el.isActive = false;
        el.classNames = "";
      }
    });

    setActiveIndex(newData);
  };

  console.log("data", groupDetails);
  // console.log("common", activeIndex);

  const sendRequest = async () => {
    if (groupDetails.group_chatroom_id) {
      const data = {
        team_id: groupDetails.id,
        team_name: groupDetails.name,
      };
      // const dataUser = {
      //   id: user.data.id,
      //   name: user.data.full_name,
      //   avatar: user.data.avatar,
      // };
      const res = await groupApi.joinGroup(data);

      // const joinRoom = await groupApi.joinRoomChat(
      //   data.group_chatroom_id,
      //   dataUser
      // );

      console.log("res", res);
      // console.log("joinRoom", joinRoom);
    }
    console.log("As");
  };

  return (
    <div className="Group__Id">
      <div className="Group__Id__Image">
        <img
          src={`${process.env.REACT_APP_API_URL}${groupDetails?.image_url}`}
          alt="error"
          style={{
            height: "370px",
            width: "100%",
          }}
        />
      </div>
      <div className="Group__Id__Container">
        <div className="Group__Id__Container__Name">{groupDetails.name}</div>
        <div className="Group__Id__Container__C">
          {groupDetails.status === 1 ? (
            <div>
              <div> Nhóm Riêng Tư </div>
              <div> {groupDetails.total_member} Thành viên</div>
            </div>
          ) : (
            <div>
              <div> Nhóm Công Khai </div>
              <div> {groupDetails.total_member} Thành viên</div>
            </div>
          )}
          <div
            className="btn"
            style={{
              background: "#F87E0A",
              color: "#fff",
              textAlign: "center",
            }}
            onClick={() => sendRequest()}
          >
            {groupDetails.role == 1 && "Chờ phê duyệt"}
            {groupDetails.role == 2 && "Thành viên"}
            {groupDetails.role == 3 && "Chưa tham gia"}
            {groupDetails.role == 0 && "Quản lý "}
          </div>
        </div>
        <div className="Group__Id__Container__El">
          <div className="Group__Id__Container__Map">
            {activeIndex.map((ele, index) => (
              <div className="Group__Id__Container__El__C">
                <div
                  className={ele.classNames}
                  onClick={() => handleChange(ele.id)}
                >
                  {ele.title}
                </div>
              </div>
            ))}
          </div>
          {activeIndex.map((ele, index) => (
            <div className="">
              <div className="Group__Id__Container__El__C__Active">
                {ele.isActive ? ele.component : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupId;
