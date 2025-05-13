import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from '../pages/Home'
import AboutUs from '../pages/About'
import Market from '../pages/Market'
import Tools from '../pages/Tools'
import Support from '../pages/Support'
import NotFound from '../pages/errors/NotFound'
import Learn from '../pages/Learn'
import Login from '../pages/Login';
import InfoSupport from '../components/InfoSupport';
import Trade from '../pages/Trade';
import Profile from '../pages/Profile';
import Portfolio from '../pages/Portfolio';
import Header from '../components/Header';

const Router = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/Login";
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const savedUser = localStorage.getItem('loggedUser');//prendre les donnes du localstorage de l'utilisateur pour pouvoir les utiliser et initialiser l'état userInfo
    return savedUser ? JSON.parse(savedUser) : null;//Si aucune donnée n’est trouvée, l’état est null.
  });

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/market" element={<Market />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/support" element={<Support />} />
        <Route path="/infoSupport" element={<InfoSupport />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login auth={auth} setAuth={setAuth} />} />
        <Route path="/profile" element={<Profile  userInfo={userInfo} setUserInfo={setUserInfo} setAuth={setAuth}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
};



export default Router;
