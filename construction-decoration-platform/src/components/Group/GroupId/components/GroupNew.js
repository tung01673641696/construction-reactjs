import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { getAllPosts } from "../../../../redux/reducers/group";
import GroupPosts from "./GroupPosts/GroupPosts";
const GroupNew = () => {
  const { loading, groupDetails, allPosts ,Posts } = useSelector(
    (state) => state.groupReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // 2 joined // 0 admin group
    if (groupDetails.role === 2 || groupDetails.role === 0) {
      dispatch(getAllPosts(groupDetails.id));
    }
  }, [Posts]);

  return (
    <div className="GroupNew">
      {groupDetails.role === 1 || groupDetails.role === 3 ? (
        <div>Group riêng tư </div>
      ) : (
        <GroupPosts />
      )}
    </div>
  );
};

export default GroupNew;
