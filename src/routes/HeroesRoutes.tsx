import Navbar from '../ui/components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import MarvelPage from '../heroes/pages/MarvelPage';
import DCPage from '../heroes/pages/DCPage';
import SearchPage from '../heroes/pages/SearchPage';
import HeroPage from '../heroes/pages/HeroPage';

const HeroesRoutes = () => {
  return (
    <>
     <Navbar />
     <div className='container'>
     <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
    </Routes> 
     </div>
    </>
  )
}

export default HeroesRoutes
