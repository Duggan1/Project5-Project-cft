import React from "react";
import { useState } from "react";

const sessionUser = []

function Login({ onLogin }) {
    // const [session, setSession] = useState(false)
    const [username, setUsername] = useState("")
    const [_password, setPassword] = useState("")
    const [isIncorrect, setIsIncorrect] = useState(false)

    const toggleIncorrect =()=>{
        setIsIncorrect(!isIncorrect)
    }

    // if (session === false){
    
    // // const newUser = {
    // //   username: username,
    // //   password: password,
    // // }

    // sessionUser.push(newUser)
  
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
                    onLogin(user) })

                // navigate('/')
            }
            else {
                toggleIncorrect()
            }
        });
    }
    return (
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
      />
        <button type="submit">Login</button>
        {isIncorrect ? <div>
            <h2>Username or Password Invalid, Please Try Again!</h2>
        </div>: null}
      </form>
    );
  }
  export default Login;