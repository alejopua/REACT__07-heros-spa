import { Navigate ,Routes, Route } from 'react-router-dom'
import { Navbar } from "../../ui"
import { DCPages, MarvelPages, SearchPages, HeroPages } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
      <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DCPages />} />

        <Route path="search" element={<SearchPages />} />
        <Route path="hero/:id" element={<HeroPages />} />

        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      </div>
    </>
  )
}
