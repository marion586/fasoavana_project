import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router";
import BackButton from "./backButton";

type Props = {
  to: string;
  title: string;
  btnTitle?: string;
  showBtn?: boolean;
};

const LvHearder: FC<Props & PropsWithChildren> = ({
  to,
  title,
  btnTitle = "Ajouter",
  children,
  showBtn = true,
}) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(to);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <BackButton />
      <div className="text-[16px] font-semibold text-black">{title}</div>
      <div className={clsx("flex justify-end", { "gap-3": children })}>
        {children}
        {showBtn && (
          <button
            onClick={onNavigate}
            className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <AiOutlineUserAdd className="h-6 w-6" />
            <span>{btnTitle}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default LvHearder;
