import React, { useState,useEffect } from "react";
// import InstagramEmbed from 'react-instagram-embed';
import './App.css';
import ZOOM1 from './Images/ZOOM1.png'
import ZOOM2 from './Images/ZOOM2.png'
import ZOOM3 from './Images/ZOOM3.png'
import GoogleMapsHelp from './GoogleMapsHelp.js'




function Home() {

    const [chiTown, setChiTown] = useState(true);
    
    const [gooogleMapsI, setGooogleMapsI] = useState(ZOOM1);
    useEffect(() => {
        const images = [ZOOM1, ZOOM3, ZOOM2,];
        let index = 0;
    
        const interval = setInterval(() => {
          index = (index + 1) % images.length;
          setGooogleMapsI(images[index]);
        }, 3000);
    
        return () => clearInterval(interval); // Clear interval on component unmount
      }, []);
    const toggleGym = () => {
        setChiTown(!chiTown);
    };

    
  
  
    return (
      <div  >
        
        {chiTown ?
        <div className = "home" style={{marginBottom:'30px'}}>
       <div className="flex" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '30px' }}>
        
        <GoogleMapsHelp /><h2 style={{background: 'rgba(255, 255, 255, 0.5)'}}>Home to World Champions</h2>
      </div>
            <h1>Chicago Fight Team</h1>



<div style={{marginBottom:'0px',marginTop:'50px'}}>
            <a style={{ textAlign:'center' , marginTop:'30px' }}
            
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10898.71228899701!2d-87.8481573845455!3d41.75062915059737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e376fbe888c2b%3A0x5798ef4e6ee9bff0!2sChicago%20Fight%20Team!5e1!3m2!1sen!2sus!4v1778344651037!5m2!1sen!2sus"
          
     target="_blank" >
                <span style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black'}}>
                7750 Archer Rd, Justice, IL 60458
                </span> </a>
                <br></br>
        
               
</div>
            {/* <p>6528 S Lavernge Ave Chicago, Illinois</p>
            <p></p> */}

<center>
                <div style={{border:'black solid 3px',borderRadius:'10%',width:'55%',height:'300px',backgroundImage: `url(${gooogleMapsI})`,backgroundSize:'100% 100%'}} >
                
                 {/* <GoogleMapsHelp/> */}
                </div>
                </center>

                <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10898.71228899701!2d-87.8481573845455!3d41.75062915059737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e376fbe888c2b%3A0x5798ef4e6ee9bff0!2sChicago%20Fight%20Team!5e1!3m2!1sen!2sus!4v1778344651037!5m2!1sen!2sus"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'center', marginBottom:'30px' 
            }}
          >
            Get Directions
          </button>
        </a>
            



            {/* <button onClick={toggleGym}>Take me to Guadalajara</button> */}
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



                {/* <a href="tel:+17082794734" style={{ textAlign:'center' }}>
                <span style={{background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black' }}>
                1(773) 885-5700
                </span>
                     </a> */}
                {/* //////////////////////////////////////// */}
               <div style={{background: 'rgba(255, 255, 255, 0.5)', width:'85%', margin:'7.5%', borderRadius:'20%'}} className=" shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">Get Started Today</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
              Schedule your training session at Chicago Fight Team today! 
              </p>
            </div>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
            <button 
              style={{
                padding: '10px 20px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center', marginBottom:'30px' 
              }}
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            ><a  style={{
                color: 'white', 
              }}href="tel:+17738855700" className="hover:underline">Call Us</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>



                
               
                
                
                
                
                
                
                
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



