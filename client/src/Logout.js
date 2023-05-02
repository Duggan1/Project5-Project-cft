import React from "react";
import { useState } from "react";
// import {useNavigate} from 'react-router-dom'


function Logout({ onLogout, user }) {

  const [edit, setEdit] = useState(false)

  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState(user.password)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [age, setAge] = useState(user.age)
  // const navigate = useNavigate()

  function handleDelete() {
    fetch(`/user/${user.id}`, {
      method: "DELETE",
    }).then(() => onLogout());
  }


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  function handleEdit() {
    setEdit(!edit)
  }
  
  function editUser(e) {
    const Nuser = {
      id: user.id,
      username: username,
      password: password,
      email: email,
      phone: phone,
      age: age
    }
    e.preventDefault()
    fetch(`/user/${user.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(Nuser)})
      .then(r => {
        if (r.ok){
          console.log('success')
          handleEdit()
        } else {
          console.log('failure')
        }
      })
  }
  
  return (
    <>
      <header>
        <h2>Welcome, {user.username}!</h2>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleDelete}>Delete Account</button>
      </header>
  
      {edit ?
        <form class='ui form' onSubmit={editUser}>
          <div class='field'>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder={user.username} />
          </div>
          <div class='field'>
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder={user._password_hash} />
          </div>
          <div class='field'>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder={user.email} />
          </div>
          <div class='field'>
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" placeholder={user.phone} />
          </div>
          <div class='field'>
            <input onChange={(e) => setAge(e.target.value)} type="number" min="5" name="age" placeholder={user.age} />
          </div>
          <button class='fluid ui button' type="submit">Submit</button>
        </form>
      : null}
    </>
  );
}
export default Logout;