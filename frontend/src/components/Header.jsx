import React from 'react';
import Navbar from './Navbar'
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="layout">
                <a href="/" className="logo">Assetra</a>
            </div>
            <Navbar />
            <div className="header-right d-flex gap-3">
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Sign up</button>
            </div>
        </header>
    );
}

export default Header;