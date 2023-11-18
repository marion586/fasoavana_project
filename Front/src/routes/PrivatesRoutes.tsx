import {lazy} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import MasterLayout from '@/shared/layouts/MasterLayout'
import { SuspenseView } from '@/shared/components/SuspenseView'
import AlertPage from '@/modules/alerts'
//import ProcurementPage from '@/modules/procurement-managements'

const PrivatesRoutes = () => {
  const SettingPage = lazy(() => import('../modules/settings-managements'))
  const StockPage = lazy(() => import('../modules/stocks-managements'))
  const HomePage = lazy(() => import('../modules/home'))
  const ProcurementPage = lazy(() => import('@/modules/procurement-managements'))
  return (
    <Routes>
       <Route element={<MasterLayout />}>
           <Route path="auth/*" element={<Navigate to='/home' replace={true}/>} />
           <Route 
               path='/' 
               element={ 
                <SuspenseView>
                  <HomePage />
                </SuspenseView>
              }
            />
             <Route 
               path='/home' 
               element={ 
                <SuspenseView>
                  <HomePage />
                </SuspenseView>
              }
            />
             <Route 
               path='setting/*' 
               element={ 
                <SuspenseView>
                  <SettingPage />
                </SuspenseView>
              }
            />
             <Route 
               path='stocks-management/*' 
               element={ 
                <SuspenseView>
                  <StockPage />
                </SuspenseView>
              }
            />
            <Route 
               path='alerts/*' 
               element={ 
                <SuspenseView>
                  <AlertPage />
                </SuspenseView>
              }
            />
             <Route 
               path='procurement/*' 
               element={ 
                <SuspenseView>
                  <ProcurementPage />
                </SuspenseView>
              }
            />
       </Route>
    </Routes>    
  )
}

export default PrivatesRoutes