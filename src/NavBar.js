import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const linkStyles = {
    display: "block",
    padding: "12px",
    width: "100px",
    maxWidth: "15%",
    // margin: "0 6px ",
    background: "rgb(9, 8, 8)",
    textDecoration: "none",
    color: "red",
    
  };
function NavBar({user}) {

    return (
                <div className="navbar">
                <div className="navLink" >
                    <NavLink
                        exact
                        to="/"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                    >
                        Home
                    </NavLink>
                   
                    <NavLink
                        exact
                        to="/schedule"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                    >
                        Schedule
                    </NavLink>
                    
                    <NavLink
                        exact to="/jiujitsu"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        Jiu-Jitsu 
                    </NavLink>
                   
                    <NavLink
                        exact to="/memberships"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                    >
                        Memberships
                    </NavLink>
                   
                    
                    <NavLink
                        exact to="/aboutUs"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        About CFT 
                    </NavLink>
                   
                    
                    {user ? null :
                    <NavLink
                        exact to="/signup"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        Sign Up
                    </NavLink>}

                </div>
                </div>
            
        
    )
}

export default NavBar;