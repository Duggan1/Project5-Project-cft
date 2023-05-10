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
                    
      <form onSubmit={handleSubmit}>
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
      </form>
      <center>
            <div className="cftlogo" ></div>
            </center>
      </div>
    );
  }
  export default Login;