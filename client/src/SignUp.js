import React, {useState} from 'react'
// import {Route} from 'react-router-dom'
// import Home from './Home'
import {useNavigate} from 'react-router-dom'


function SignUp({handleSignupClick}) {

    const [session, setSession] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    if (session === false){
  
    const user = {
      username: username,
      password: password,
      email: email,
      phone: phone,
      age: age
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch("/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      })
      .then(r => {
        if (r.ok){
          r.json()
          .then( console.log('success'))
          setSession(!session)
        } else {
          console.log('failure')
        }
      })
        e.target.reset()
    }
    
    const setSignupState = (e) => {
        handleSignupClick(e)
    }
  
    return (
      <div>
      <div class="ui center aligned huge header" style={{margin:40}}>Welcome !</div>
      <div className="new-user-form">
        <div class="ui sizer vertical segment">
          <h2 class="ui center aligned large header" >Create a New Account</h2>
        </div>
        <form class='ui form' onSubmit={handleSubmit}>
          <div class='field'>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" />
          </div>
          <div class='field'>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          </div>
          <div class='field'>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
          </div>
          <div class='field'>
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone #" />
          </div>
          <div class='field'>
            <input onChange={(e) => setAge(e.target.value)} type="number" min="5" name="age" placeholder="Age" />
          </div>
            <button class='fluid ui button' type="submit">Submit</button>
        </form>
        <div class='ui basic buttons'>
            <button class="ui button" onClick={setSignupState}>Return to Login</button>
        </div>
      </div>
      </div>
    );
    }
    else {
        return (
            
            navigate('/')
            
        )
    }
}

export default SignUp;