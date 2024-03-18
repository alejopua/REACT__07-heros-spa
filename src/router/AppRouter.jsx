import { Routes, Route } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'
import { LoginPages } from '../auth'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="login" element={<LoginPages />} />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }/>

      </Routes>
    </>
  )
}
