import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css'



const Profile = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
   
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (!auth) {
            navigate("/");  
        }
    }, [auth, navigate]);

    return (
        <div className='login-container'>
            <h2 className='title'>Welcome to  {user ? user.username : ""}</h2>
            <div className='chart1'> 
                <div className='chartss'>
                <button onClick={() => { setAuth(false); localStorage.removeItem("loggedUser"); navigate("/"); }} className='btn-primary '>Logout</button>

                </div>
            </div>
           
        </div>
    );
};

export default Profile;