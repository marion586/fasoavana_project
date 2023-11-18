import {Suspense,PropsWithChildren, FC} from 'react'
import TopBarProgress from "react-topbar-progress-indicator";
export const SuspenseView: FC<PropsWithChildren> = ({children}) => {
    TopBarProgress.config({
      barColors: {
            "0": "#fff",
            "1.0": "#fff"
      },
      barThickness: 1,
      shadowBlur: 5,
    })
    return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
  }

