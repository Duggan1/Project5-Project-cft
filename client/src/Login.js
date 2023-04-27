import React from "react";
import { useState } from "react";

const sessionUser = []

function Login({ onLogin }) {
    // const [session, setSession] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user)
                    onLogin(user) })

                // navigate('/')
            }
            // else {
            //     toggleModal()
            // }
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter Password here "
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
        type="text"
        // value={password}
        placeholder="Enter Password here "
        onChange={(e) => setPassword(e.target.value)}
      />
        <button type="submit">Login</button>
      </form>
    );
  }
  export default Login;