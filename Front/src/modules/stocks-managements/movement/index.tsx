import { LvCard } from "@/shared/components/LvCard"
import { Tabs } from "antd"
import clsx from "clsx"
import { ProgessTab } from "./pages/Pregress/ProgessTab"
import { TodoTab } from "./pages/Todo/TodoTab"
import { CompletedTab } from "./pages/Completed/CompletedTab"

const MouvementPage = () => {
  return (
   <LvCard>
     <div>
        <Tabs
          defaultActiveKey="1"
          size={"small"}
          style={{ marginBottom: 32 }}
          items={[
            {
                label: (
                  <span
                    className={clsx(
                      "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    )}
                  >
                    en attente
                  </span>
                ),
                key: "IN_PROGRESS",
                children: <ProgessTab />,
              },
              {
                label: (
                  <span
                    className={clsx(
                      "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    )}
                  >
                    en cours
                  </span>
                ),
                key: "TODO",
                children: <TodoTab />,
              },
              {
                label: (
                  <span
                    className={clsx(
                      "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    )}
                  >
                    traités
                  </span>
                ),
                key: "COMPLETED",
                children: <CompletedTab />,
              },
          ]}  
        />
    </div>
   </LvCard>
  )
}

export default MouvementPage