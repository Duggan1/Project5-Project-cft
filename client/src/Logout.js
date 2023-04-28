import React from "react";


function Logout({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
export default Logout;