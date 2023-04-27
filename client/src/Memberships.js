import React from "react";


function Memberships() {
  return (
    <>
   <h1>Memberships</h1>
   <div class="input">
           <select class="input-field" >
             <option class="input-field" id="1day" value = '1' >1 Day Membership</option> 
             <option class="input-field" id="1month" value ={ 2 }>1 Month Membership</option> 
             <option class="input-field" id="3month" value = "3" >3 Month Membership</option> 
             <option class="input-field" id="1year" value ="int(4)">1 Year Membership</option> {/* {formData.restaurant_id} */}
           </select>
         <label class="input-label">Membership Options</label>        
       </div>
   </>
  );
}

export default Memberships;