import React, { useState,useEffect } from "react";
import jd from './Images/jd.jpeg'
import horacio from './Images/horacio.jpeg'
import clou from './Images/clou.jpeg'
import team from './Images/341260897_241927845028189_3175328261831266190_n.jpeg'
import OGs from './Images/aboutheader.jpeg'
import cBelal from './Images/cBelal.jpeg'
// import jd2 from'./Images/jd2.jpeg'
import bjj from './Images/jiujitsuT.jpeg'
import oldHead from './Images/oldCft.jpeg'


export default function CFTImageReel() {

const [CFTImages, setCFTImages] = useState(clou);
useEffect(() => {
    const images = [cBelal,OGs,'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2015/11/horacio-gutierrez-ufc-fight-night-78.jpg',
                        team,'https://cst.brightspotcdn.com/dims4/default/78b48a8/2147483647/strip/true/resize/840x555!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FJdRT2W7BMkzX2V1RNYpAwtD-rpw%3D%2F0x0%3A6000x4000%2F6000x4000%2Ffilters%3Afocal%283000x2000%3A3001x2001%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F16273912%2Floutaylor_042719_03_1_of_1.jpg',
                        'https://cst.brightspotcdn.com/dims4/default/1d9b0d7/2147483647/strip/true/resize/840x555!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FlG8quCpb59CmN89loxzlqdMseeM%3D%2F0x0%3A5530x3798%2F5530x3798%2Ffilters%3Afocal%282765x1899%3A2766x1900%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F16273864%2Floutaylor_042719_10_1_of_1.jpg',
                        // jd2,
                        'https://images.tapology.com/gym_people/logos/4963/thumb/4963-roberto-ramirez.jpg?1656437404',
                         jd,'https://dmxg5wxfqgb4u.cloudfront.net/styles/card_advance_small_280x356/s3/2023-05/GettyImages-1488060577.jpg?itok=nqtoylPJ',bjj, clou,];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCFTImages(images[index]);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


 

      return (
        <div style={{borderRadius:'50%', marginLeft: '10px', marginRight: '5%'}}>
        <center style={{borderRadius:'50%',width:'200px',height:'200px',backgroundImage: `url(${oldHead})`,backgroundSize:'100% 100%'}} >
                <div style={{borderRadius:'50%',width:'200px',height:'200px',backgroundImage: `url(${CFTImages})`,backgroundSize:'100% 100%'}} >
                
                 {/* <GoogleMapsHelp/> */}
                </div>
                </center>
        </div>
      )
    }