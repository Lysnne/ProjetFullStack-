import React, { useState, useEffect } from 'react';

import Router from './routes/Router';
import Footer from './components/Footer';


function App() {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUser = localStorage.getItem('loggedUser');//prendre les donnes du localstorage de l'utilisateur pour pouvoir les utiliser et initialiser l'état userInfo
    return savedUser ? JSON.parse(savedUser) : null; //Si aucune donnée n’est trouvée, l’état est null.
  });

  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth === "true"; 
  })
 

  return (
    <div className="d-flex flex-column" >
      <Router userInfo={userInfo} setUserInfo={setUserInfo}  auth={auth} setAuth={setAuth}/>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}
export default App;
