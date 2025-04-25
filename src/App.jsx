import React, { useState } from 'react';

import Router from './routes/Router'; 
import Footer from './components/Footer';


function App() {
  const [auth, setAuth] = useState(false);
  

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Router auth={auth} setAuth={setAuth} />
        <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}
export default App;
