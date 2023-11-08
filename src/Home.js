import React, { useState } from "react";
// import InstagramEmbed from 'react-instagram-embed';
import './App.css';



function Home() {

    const [chiTown, setChiTown] = useState(true);

    const toggleGym = () => {
        setChiTown(!chiTown);
    };
  
  
    return (
      <div  >
        
        {chiTown ?
        <div className = "home">
        <h2>Welcome Home</h2>
        
            <h1>Chicago Fight Team</h1>

            <p style={{ textAlign:'center' }}>
                <span style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black', }}>
                6528 S Lavernge Ave Chicago, Illinois
                </span>
            </p>
            <p style={{ textAlign:'center' }}>
                <span style={{background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black' }}>
                1(773) 885-5700
                </span>
            </p>

            {/* <p>6528 S Lavernge Ave Chicago, Illinois</p>
            <p></p> */}


            
            <button onClick={toggleGym}>Take me to Guadalajara</button>
            <center>
                <iframe
                    class="igh"
                    src="https://www.instagram.com/chicagofightteam/embed"
                    width="440"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                    

                ></iframe>
                </center>
                </div> : <div className="home2"><div className="fish">
        <h2>Welcome Home</h2>
        
            <h1>Chicago Fight Team </h1>
            <h2>Guadalajara</h2>
            <p>Calle Federico E. Ibarra #955 Colonia Jardines de Alcalde, 44220 Guadalajara, Jalisco</p>
            <p>+523315387680</p>
            <button onClick={toggleGym}>Take me to Chicago</button>
            <center>
                <iframe
                    class="igh"
                    src="https://www.instagram.com/cft_guadalajara_official/embed"
                    width="440"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                    

                ></iframe>
                </center>
                </div></div> 
        
       }</div>
    );
  }

export default Home;



