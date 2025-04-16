import React, { useState } from 'react';
import '../styles/Header.css'

import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login =({setAuth}) => {
    const [user , setUser] = useState({username: "", password:""});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({... user, [e.target.name]: e.target.value});
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8585/customer/signin/${user.username}/${user.password}`,);
            if (response.data) {
                setAuth(true);
                navigate("/");
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Login failed", err);
            setError(true);
        }
    };

    return (

       
        <div>

       
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <button id="login-button" type="submit">Login</button>
            </form>
            {error && <p style={{color: "red"}}>Invalid credentials</p>}
          

        </div>
    );
    
} ;
export default Login;