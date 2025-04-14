import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import MarvelPage from '../heroes/pages/MarvelPage';
import DCPage from '../heroes/pages/DCPage';
import LoginPage from '../auth/pages/LoginPage';
import Navbar from '../ui/components/NavBar';

const AppRouter = () => {
  return (
    <>
    <Navbar />
      <Routes>
      <Route path="marvel" element={<MarvelPage />} />
      <Route path="dc" element={<DCPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="marvel" />} />
    </Routes>
    </>
    
  )
}

export default AppRouter
