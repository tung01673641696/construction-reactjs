import React from "react";
import { Spin, Space } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "48%",
        left: "48%",
      }}
    >
      {" "}
      <Spin size="large" />
    </div>
  );
};

export default Loading;
