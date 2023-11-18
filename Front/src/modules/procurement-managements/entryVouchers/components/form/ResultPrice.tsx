/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
  label: string,
  amount: any
}

const ResultPrice = ({label , amount}: Props) => {
  return (
     <div className="flex flex-col gap-2">
          <label className="text-sm">
            {label}
          </label>
          <span className="  lv-input-custom md:h-[38px] md:w-[200px] text-[#677788] text-sm">
            {amount} Ar
          </span>
      </div>
  )
}

export default ResultPrice