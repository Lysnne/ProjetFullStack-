import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import Router from './routes/Router'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const hiddenRoutes = ['../pages/Login'];
  const hideHeaderFooter = hiddenRoutes.includes(location.pathname);
  console.log("Ruta actual:", location.pathname);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {!hideHeaderFooter && <Header />}
      <div style={{ marginTop: hideHeaderFooter ? '0' : '80px', flex: 1 }}>
        <Router auth={auth} setAuth={setAuth} />
      </div>
      {!hideHeaderFooter && <Footer style={{ marginTop: 'auto' }} />}
    </div>
  );
}
export default App;
