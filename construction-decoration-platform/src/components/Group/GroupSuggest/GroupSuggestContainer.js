import React from "react";
import IGroup from "../../../assets/images/group/group.png";
import GroupSuggest from "./GroupSuggest";
const GroupSuggestContainer = () => {
  return (
    <div className="group-content-chat">
      <img
        src={IGroup}
        alt="error"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      >
        <GroupSuggest />
      </div>
    </div>
  );
};

export default GroupSuggestContainer;
