import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// type Iprops = {
//   onBack: () => void;
// };
const BackButton = () => {
  const navigate = useNavigate();
  return <BiArrowBack size={25} onClick={() => navigate(-1)} />;
};

export default BackButton;
