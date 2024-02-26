import { Navigate ,Routes, Route } from 'react-router-dom'

import { DCPages, MarvelPages } from '../heroes'
import { LoginPages } from '../auth'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DCPages />} />

        <Route path="login" element={<LoginPages />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}