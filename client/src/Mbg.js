import React, { useState, useEffect } from "react";

function Mbg() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/gyms")
      .then(response => response.json())
      .then(data => setGyms(data));
  }, []);

  return (
    <div className="mbg">
      <h1>Gyms</h1>
      <ul className="leftList">
        {gyms.map(gym => (
          <li key={gym.id}>
            <h2>{gym.city}</h2>
            <h4>{gym.address}</h4>
            <h5>{gym.phone}</h5>
            <ul>
              {gym.users.map(mem => (
                <li key={mem.id}>
                  <p>{mem.username}</p>
                </li>
              ))}
              </ul>
              <ul className="rightList">
              {gym.plans.map(plan => (
                <li >
                  <p>{plan}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mbg;
