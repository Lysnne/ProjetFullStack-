import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Router from './routes/Router'; 
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <Router />
        <Footer />
      </div>

  );
}

export default App;
