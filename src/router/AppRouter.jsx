import { Navigate ,Routes, Route } from 'react-router-dom'
import { MarvelPages } from '../heroes/pages/MarvelPages'
import { DCPages } from '../heroes/pages/DCPages'
import { LoginPages } from '../auth/pages/LoginPages'
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
