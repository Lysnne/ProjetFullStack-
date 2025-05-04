import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



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
        <div>
            <h2>Welcome to  {user ? user.username : ""}</h2>
            <button onClick={() => { setAuth(false); localStorage.removeItem("loggedUser"); navigate("/"); }}>Logout</button>
        </div>
    );
};

export default Profile;