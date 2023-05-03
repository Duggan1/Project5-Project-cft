import React from "react";
// import InstagramEmbed from 'react-instagram-embed';
import './App.css';



function Home() {
  
  
    return (
      <div className = "home" >
        <h1>Welcome Home</h1>
        
            <h1>Chicago Fight Team</h1>
            <p>6528 S Lavernge Ave Chicago, Illinois</p>
            <p>1(773) 885-5700</p>
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
        
       </div>
    );
  }

export default Home;



