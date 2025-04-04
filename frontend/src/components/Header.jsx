import React from 'react';
import Navbar from './Navbar'

function Header() {
    return (
        <header>
            <div className='layout'>
                <a href="/" className="logo">Assetra</a>
            </div>
            
            <Navbar />

            <div className="header-right">

                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Sign up</button>
            </div>
        </header>
    );
}

export default Header;
