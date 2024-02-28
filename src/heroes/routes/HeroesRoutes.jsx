import { useState, useEffect } from 'react';
import { Navigate ,Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from "../../ui"
import { DCPages, MarvelPages, SearchPages, HeroPages } from '../pages'

export const HeroesRoutes = () => {
  const location = useLocation();
  console.log({location});
  const [isSpecificRouteActive, setIsSpecificRouteActive] = useState(false);

  useEffect(() => {
    // Verificar si la ruta actual es una de las rutas específicas
    setIsSpecificRouteActive(
      location.pathname.startsWith('/marvel') ||
      location.pathname.startsWith('/dc') ||
      location.pathname.startsWith('/hero') ||
      location.pathname.startsWith('/search')
    );
  }, [location]);
  return (
    <>
      <div>
        <Navbar />
        {!isSpecificRouteActive && <h1>Explora las pestañas para interactuar con la aplicación.</h1>}
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
