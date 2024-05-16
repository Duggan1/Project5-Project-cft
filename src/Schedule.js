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
        <div className="sche" >
          
          <center><div className="hajd">
            <div className="chiS"></div>
            </div>
          </center>
          <center>
            {/* <button onClick={toggleGym}>
              Show me CFT Guadalajara's Schedule
            </button> */}
          </center>
        </div>
      ) : (
        <div className="sche" >
          
            
          
          <center>
            <div className="mexS"></div>
          </center><center>
          <button onClick={toggleGym}>
              Show me CFT Chicago's Schedule
            </button></center>
        </div>
      )}
    </div>
  );
}

export default Schedule;
