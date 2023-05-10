import React, { useState } from "react";
// import InstagramEmbed from 'react-instagram-embed';
import './App.css';



function Home() {

    const [chiTown, setChiTown] = useState(true);

    const toggleGym = () => {
        setChiTown(!chiTown);
    };
  
  
    return (
      <div className = "home" >
        
        {chiTown ?
        <div>
        <h1>Welcome Home</h1>
        
            <h1>Chicago Fight Team</h1>
            <p>6528 S Lavernge Ave Chicago, Illinois</p>
            <p>1(773) 885-5700</p>
            <button onClick={toggleGym}>Take me to Guadalajara</button>
            <center>
                <iframe
                    src="https://www.instagram.com/chicagofightteam/embed"
                    width="440"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                    

                ></iframe>
                </center>
                </div> : <div>
        <h1>Welcome Home</h1>
        
            <h1>Chicago Fight Team </h1>
            <h2>Guadalajara</h2>
            <p>Calle Federico E. Ibarra #955 Colonia Jardines de Alcalde, 44220 Guadalajara, Jalisco</p>
            <p>+523315387680</p>
            <button onClick={toggleGym}>Take me to Chicago</button>
            <center>
                <iframe
                    src="https://www.instagram.com/cft_guadalajara_official/embed"
                    width="440"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                    

                ></iframe>
                </center>
                </div> 
        
       }</div>
    );
  }

export default Home;



