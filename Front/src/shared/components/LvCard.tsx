import { FC, PropsWithChildren } from "react";
export const LvCard: FC<PropsWithChildren> = ({children}) => {
  return (
      <div className="mb-5 md:w-[99%]">
        <div className="card-lg">
            {children}
        </div>
      </div>
  );
};
//h-screen bg-white