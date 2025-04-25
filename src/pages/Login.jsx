import React, { useState } from 'react';
import '../styles/Login.css'
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
                localStorage.setItem("loggedUser", JSON.stringify(response.data));
                setAuth(true);
                navigate("/profile");
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Login failed", err);
            setError(true);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form-section'>
                <div className='login-form-wrapper'>
                    <h2>Bon retour</h2>
                    <form onSubmit={handleLogin}>
                        <div className='form-group'>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Mot de passe" 
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                      
                            <button id="login-button" hideHeader  type="submit">S'identifier</button>
                        </div>
                      
                        {error && <p className="error-message">Invalid credentials</p>}
                    </form>
                </div>
            </div>
            <div className='login-image-section'>
                <img src='../images/chair and laptop with statistic chart (1).png' alt="Login illustration"/>
            </div>
        </div>
    );
};

export default Login;