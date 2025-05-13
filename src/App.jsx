import React, { useState } from 'react';

import Router from './routes/Router'; 
import Footer from './components/Footer';


function App() {
  

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Router />
        <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}
export default App;
