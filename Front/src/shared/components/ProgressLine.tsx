import { Progress } from "antd"
import {FC} from "react"

type TProps = {
    widthClass?: string
    percent: number
    strokeColor?: string
}
export const ProgressLine:FC<TProps> = ({percent,strokeColor="#39BF46",widthClass="w-[70px]"}) => {
  return (
    <div className={`${widthClass} flex justify-end flex-col`}>
        <span className="text-center">{percent} %</span>
        <Progress className="!-mt-1" percent={percent} size="small" strokeColor={strokeColor} showInfo={false} />
    </div>
  )
}
