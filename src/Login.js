import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


const sessionUser = []

function Login({ onLogin }) {
    const navigate = useNavigate()
    // const [session, setSession] = useState(false)
    const [username, setUsername] = useState("")
    const [_password, setPassword] = useState("")
    const [isIncorrect, setIsIncorrect] = useState(false)

    const toggleIncorrect =()=>{
        setIsIncorrect(!isIncorrect)
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, _password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user)
                    onLogin(user)
                    navigate('/') })

                
            }
            else {
                toggleIncorrect()
            }
        });
    }
    return (
        <div className="acct">
                    
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter Username here "
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
        type="password"
        // value={password}
        placeholder="Enter Password here "
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
        <button type="submit">Login</button>
        {isIncorrect ? <div>
            <h2>Username or Password Invalid, Please Try Again!</h2>
        </div>: null}
      </form> */}
      <center>
            <div className="cftlogo" ></div>
            </center>
            <a style={{margin :'0',fontSize:'smaller', color:'white'}} href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10898.71228899701!2d-87.8481573845455!3d41.75062915059737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e376fbe888c2b%3A0x5798ef4e6ee9bff0!2sChicago%20Fight%20Team!5e1!3m2!1sen!2sus!4v1778345867399!5m2!1sen!2sus"
     target="_blank">7750 Archer Rd, Justice, IL 60458</a><br></br>
            <a href="tel:+17082794734"style={{margin :'0',fontSize:'smaller', color:'white'}} > 1(773) 885-5700</a>
      </div>
    );
  }
  export default Login;

