import React from "react";
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Memberships from './Memberships';
import Schedule from './Schedule';
import AboutUs from './AboutUs'
import Login from './Login'
// import NotFound from './NotFound';
import { BrowserRouter, Route} from "react-router-dom";
import { Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
import Logout from "./Logout";
import SignUp from  "./SignUp"
import Foot from "./Foot"
import Jiujitsu from "./Jiujitsu";
import Mbg from "./Mbg";






function App() {




  const [user, setUser] = useState(null);
  const [signUp, setSignUp] = useState(false)
  const handleSignupClick=() =>{
        setSignUp(!signUp)
    }
  

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
}
  function handleLogout(){
    setUser(null);
  }

  





  return (
    
    
    <div className = "navbar">
      
    <BrowserRouter>
    {user ? <Logout user={user} onLogout={handleLogout} />  :<Login onLogin={handleLogin} />}
    
    
  
      <NavBar user={user}/>
      
        <Routes>
          <Route path="/memberships" element={<Memberships user={user}/>}/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/jiujitsu" element={<Jiujitsu/>}/>
          <Route path="/mbg" element={<Mbg/>}/>
          <Route path="/signup" element={<SignUp handleSignupClick = {handleSignupClick} onLogin={handleLogin}/>}/>
          
        </Routes>
    </BrowserRouter>
    <Foot />
    
    
    </div>
    
   
  );
}

export default App;




