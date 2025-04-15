import 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/About'
import Market from '../pages/Market'
import Tools from '../pages/Tools'
import Support from '../pages/Support'
import NotFound from '../pages/errors/NotFound'
import Learn from '../pages/Learn'
import InfoSupport from '../pages/InfoSupport';
import Achat from '../pages/Achat';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/market" element={<Market />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/support" element={<Support />} />
        <Route path="/infoSupport" element={<InfoSupport />} />
        <Route path="/achat" element={<Achat />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};



export default Router;
