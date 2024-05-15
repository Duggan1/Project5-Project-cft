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

            <a style={{ textAlign:'center' }}href="https://www.google.com/maps/place/8696+47th+St,+Lyons,+IL+60534/@41.8060748,-87.8398832,17z/data=!4m10!1m2!2m1!1schicago+fight+team++8696+w+47th+st+lyons+illinois+!3m6!1s0x880e361341753f5b:0x777f5a692510f0a6!8m2!3d41.8059629!4d-87.8363641!15sCjFjaGljYWdvIGZpZ2h0IHRlYW0gIDg2OTYgdyA0N3RoIHN0IGx5b25zIGlsbGlub2lzkgEQY29tcG91bmRfc2VjdGlvbuABAA!16s%2Fg%2F11bw4nfy1c?entry=ttu"
     target="_blank" >
                <span style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black', }}>
                8696 W 47th St Lyons, Illinois
                </span> </a>
                <a href="tel:+17082794734" style={{ textAlign:'center' }}>
                <span style={{background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black' }}>
                1(773) 885-5700
                </span>
            </a>

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



