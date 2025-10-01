import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Home from './pages/inicio.tsx';
import ModulosPage from './pages/modulos.tsx';
import InfoPage from './pages/info.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="modulos" element={<ModulosPage />} />
          <Route path="info" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
