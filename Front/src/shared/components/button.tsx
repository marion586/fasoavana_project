import React, { ReactNode } from "react";
type buttonProps = {
  handleClick: () => void;
  icon: ReactNode;
  text: string;
};
const Button = ({ handleClick, icon, text }: buttonProps) => {
  return (
    <button
      onClick={handleClick}
      className=" flex gap-3 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#9b9898] selection:lv-btn-primary  rounded-[3px] shadow-md"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
