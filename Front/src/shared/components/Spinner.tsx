import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 18, color: "#fff", marginLeft: 20 }}
    spin
  />
);

const Spinner: React.FC = () => <Spin indicator={antIcon} />;

export default Spinner;
