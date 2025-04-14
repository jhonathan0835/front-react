import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroesApp from './Heroes.tsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
