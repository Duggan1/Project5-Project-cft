import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "19px",
    width: "100px",
    margin: "0 6px 5px",
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
                    <br />
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
                    <br />
                    <NavLink
                        exact to="/jiujitsu"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        Jiu-Jitsu 
                    </NavLink>
                    <br />
                    <NavLink
                        exact to="/memberships"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                    >
                        Memberships
                    </NavLink>
                   
                    <br />
                    <NavLink
                        exact to="/aboutUs"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        About CFT 
                    </NavLink>
                    <br />
                    
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