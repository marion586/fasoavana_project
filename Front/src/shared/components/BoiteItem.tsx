import React, { Children } from "react";
import "./style.scss";
import { BsBox } from "react-icons/bs";
import { useNavigate } from "react-router";

type Props = {
  data: any;
  children?: React.ReactNode;
};

const BoiteItem = ({ data, children }: Props) => {
  console.log("dataaaa", data);
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`list`, { state: data })}>
      <BsBox size={40} style={{ fontWeight: "bold" }} color="white" />
      <span className="card__user-type" color="white">
        {data.reference}
      </span>
      <span className="card__user-type">{data.location}</span>
      {children}
    </div>
  );
};

export default BoiteItem;
