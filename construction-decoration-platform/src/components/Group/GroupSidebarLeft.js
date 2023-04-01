import React from "react";
import GroupCreate from "./GroupCreate/GroupCreate";
import GroupAdmin from "./GroupAdmin/GroupAdmin";
import "./GroupSidebarLeft.scss";
import GroupJoin from "./GroupJoin/GroupJoin";
const GroupSidebarLeft = () => {
  return (
    <div className="group-sidebar-left">
      <GroupCreate />
      <GroupAdmin />
      <GroupJoin />
    </div>
  );
};

export default GroupSidebarLeft;
