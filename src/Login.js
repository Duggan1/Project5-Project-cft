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
            <a style={{margin :'0',fontSize:'smaller', color:'white'}} href="https://www.google.com/maps/place/Chicago+Fight+Team/@41.7506136,-87.8378791,626m/data=!3m2!1e3!4b1!4m6!3m5!1s0x880e376fbe888c2b:0x5798ef4e6ee9bff0!8m2!3d41.7506136!4d-87.8378791!16s%2Fg%2F11y51wy25m?hl=en&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
     target="_blank">7750 Archer Rd, Justice, IL 60458</a><br></br>
            <a href="tel:+17082794734"style={{margin :'0',fontSize:'smaller', color:'white'}} > 1(773) 885-5700</a>
      </div>
    );
  }
  export default Login;

