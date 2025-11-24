import React from 'react';
import Navbar from './Navbar'

import '../styles/Header.css'
import { Link, useNavigate} from 'react-router-dom';


function Header({ auth, setAuth, setUserInfo }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        localStorage.setItem("auth", "false");
        setAuth(false);
        setUserInfo(null);
        navigate('/login');
    };

    return (
       <header>
            <div className="layout">
                <a href="/" className="logo">Assetra</a>
            </div>
            <Navbar auth={auth} setAuth={setAuth} />
            <div className="header-right d-flex gap-3">
                {!auth && (
                    <Link to='/login'>
                        <button className="btn-primary">Login</button>
                    </Link>
                )}
                {auth && (
                    <button className='btn-secondary' onClick={handleLogout}>Log out</button>
                )}
            </div>
        </header>
    );
}

export default Header;