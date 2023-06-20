import React,{useState} from "react";
import './App.css'



function Schedule() {
  const [chiTown, setChiTown] = useState(true);

  const toggleGym = () => {
    setChiTown(!chiTown);
  };

  return (
    <div>
      {chiTown ? (
        <div className="sjs">
          <center>
            <button onClick={toggleGym}>
              Show me CFT Guadalajara's Schedule
            </button>
          </center>
          <center><div className="hajd">
            <div className="chiS"></div>
            </div>
          </center>
        </div>
      ) : (
        <div className="sjs">
          <center>
            <button onClick={toggleGym}>
              Show me CFT Chicago's Schedule
            </button>
          </center>
          <center>
            <div className="mexS"></div>
          </center>
        </div>
      )}
    </div>
  );
}

export default Schedule;
