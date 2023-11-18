import clsx from "clsx";

type Props = {
  label: string;
  value: number;
  bgColor?: string;
  height?: string;
  width?: string;
};
/**
 * Default Bg Color green (#84BB5A or succees)
 * @param Props
 * @returns JSX.Element
 */
const Box: React.FC<Props> = ({
  label,
  value,
  bgColor = "#84BB5A",
  height = "118px",
  width = "248.9px",
}) => {
  return (
    <div
      className={clsx(
        "rounded-[10px] flex justify-between items-center text-white"
      )}
      style={{backgroundColor: bgColor, width: width,height: height}}
    >
      <div className="ml-2">{label}</div>
      <div className=" basis-[50%] flex justify-center">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Box;
