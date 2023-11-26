import React, { Children } from "react";
import "./style.scss";
import { BsBox } from "react-icons/bs";

type Props = {
  data: any;
  children?: React.ReactNode;
};

const index = ({ data, children }: Props) => {
  return (
    <div className="card">
      <BsBox size={40} style={{ fontWeight: "bold" }} color="white" />
      <span className="card__user-type">REF-001</span>
      {children}
    </div>
  );
};

export default index;
