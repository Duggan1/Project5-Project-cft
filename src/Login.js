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
            <a style={{margin :'0',fontSize:'smaller', color:'white'}} href="https://www.google.com/maps/place/8696+47th+St,+Lyons,+IL+60534/@41.8060748,-87.8398832,17z/data=!4m10!1m2!2m1!1schicago+fight+team++8696+w+47th+st+lyons+illinois+!3m6!1s0x880e361341753f5b:0x777f5a692510f0a6!8m2!3d41.8059629!4d-87.8363641!15sCjFjaGljYWdvIGZpZ2h0IHRlYW0gIDg2OTYgdyA0N3RoIHN0IGx5b25zIGlsbGlub2lzkgEQY29tcG91bmRfc2VjdGlvbuABAA!16s%2Fg%2F11bw4nfy1c?entry=ttu"
     target="_blank">8696 W 47th St Lyons, Illinois</a><br></br>
            <a href="tel:+17082794734"style={{margin :'0',fontSize:'smaller', color:'white'}} > 1(773) 885-5700</a>
      </div>
    );
  }
  export default Login;