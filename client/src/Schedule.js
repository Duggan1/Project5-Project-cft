import React,{useState} from "react";
import './App.css'



function Schedule() {

    const [chiTown, setChiTown] = useState(true);

    const toggleGym = () => {
        setChiTown(!chiTown);
    };

    


  return (
    <div>
    { chiTown ? <div className="sjs">
        
        <center>
            <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/309841233_591565279477396_7528783065902489959_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ANUBBc5bZNYAX_vQAI2&_nc_ht=scontent-ord5-1.xx&oh=00_AfBmf440YhlputJljZVbjbSoXNbnvr73e-OGx9u6jhgNlQ&oe=645E45E8"alt="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/309841233_591565279477396_7528783065902489959_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ANUBBc5bZNYAX_vQAI2&_nc_ht=scontent-ord5-1.xx&oh=00_AfBmf440YhlputJljZVbjbSoXNbnvr73e-OGx9u6jhgNlQ&oe=645E45E8" />
        </center>
        <center><button onClick={toggleGym}>Show me the other CFT Location</button></center>
        
    </div> :  <div className="sjs">
    <center>
        <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/126602265_995271604291750_606995736896303960_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iJqSXA5d-KEAX8fLiTc&_nc_ht=scontent-ord5-1.xx&oh=00_AfA7qQoJG9xV_BxPMj7_1PkqNWvpnF0oegVUkEXyD25PZQ&oe=64830268" alt="https://www.facebook.com/CFTGDL/photos/pb.100063488503694.-2207520000./995271600958417/?type=3"/>
        
    </center>
    <center><button onClick={toggleGym}>Show me the other CFT Location</button></center>
   
</div> } </div>

   

  );
}

export default Schedule;