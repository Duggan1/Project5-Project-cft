import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "red",
  };

function NavBar() {

    return (

                <div className="header2">
                    <div>
                        <div className="cftlogo" ></div>
                        <h1>CFT Header</h1>
                    </div>
                    
                
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
                    <NavLink
                        exact to="/signup"
                        className="submit ui teal button"
                        style={linkStyles}
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        Sign Up
                    </NavLink>

                </div>
                </div>
            
        
    )
}

export default NavBar;