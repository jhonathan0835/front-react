import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import MarvelPage from '../heroes/pages/MarvelPage';
import DCPage from '../heroes/pages/DCPage';
import LoginPage from '../auth/pages/LoginPage';
import Navbar from '../ui/components/NavBar';
import HeroesRoutes from '../routes/HeroesRoutes';

const AppRouter = () => {
  return (
    <>
      <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<HeroesRoutes />} />
    </Routes>
    </>
    
  )
}

export default AppRouter
