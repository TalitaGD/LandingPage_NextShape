import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';
import Home from '../App';
import QuemSomos from '../pages/QuemSomos';
import Produtos from '../pages/Produtos';
import Procedimento from '../pages/Procedimento';
import Telemedicina from '../pages/Telemedicina';

function AppRouter() {
  return (
    <StrictMode>
      <HeroUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/procedimento" element={<Procedimento />} />
            <Route path="/telemedicina" element={<Telemedicina />} />
          </Routes>
        </BrowserRouter>
      </HeroUIProvider>
    </StrictMode>
  );
}

export default AppRouter;


