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





function App() {

  const [user, setUser] = useState(null);

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
    {/* {user ? <h2>Welcome, {user.username}!</h2> :<Login handleLogin={handleLogin} />} */}
    {/* <Logout handleLogout={handleLogout}/>  */}
    
  
      {/* <NavBar /> */}
      
        <Routes>
          <Route path="/memberships" element={<Memberships />}/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/signup" element={<SignUp setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
    
    
    </div>
    
   
  );
}

export default App;




