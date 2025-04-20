import React from 'react';
import Navbar from './Navbar'

import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="layout">
                <a href="/" className="logo">Assetra</a>
            </div>
            <Navbar />
            <div className="header-right d-flex gap-3">
            
      <Link to = '/Login'>
          <button className=" btn-primary">Login</button>
          </Link>
                
            </div>
        </header>
    );
}

export default Header;