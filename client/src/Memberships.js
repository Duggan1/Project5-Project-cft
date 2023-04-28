import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Memberships({user}) {

    const navigate = useNavigate()

    const [formData, SetFormData] = useState({
        plan:"",
        gym_id: "",
  
      })
      function handleGymChange(e) {
        SetFormData({
          ...formData,
          gym_id: e.target.value,
        });
      }

      function handlePlanChange(e) {
        SetFormData({
          ...formData,
          plan: e.target.value,
        });
      }

      function handleSubmit(e){
        e.preventDefault()
        const newMembership = {
          plan : formData.plan,
          gym_id: formData.gym_id,
          user_id: user.id,

        }
        fetch('/memberships', { // our specific link needs to be added
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newMembership)
        })
        .then(response => response.json())
        .then(navigate('/'))
        // .then(onAddReview)
      }





  return (
    <>
    <form class="card-form" onSubmit={ handleSubmit }>
        
      
        <div class="input">
           <select class="input-field" onChange={handleGymChange}>
             <option class="input-field" id="chicago" value = '1' >Chicago IL, USA</option> 
             <option class="input-field" id="mexico" value ='2'>Guadalajara Jalisco, Mexico</option> 
           </select>
         <label class="input-label">Chicago Fight Team Locations</label>          
       </div> 
       <div class="input">
           <select class="input-field" onChange={handlePlanChange}>
           <option class="input-field" id="1day" value = '1 Day Membership' >1 Day Membership</option> 
             <option class="input-field" id="1month" value = '1 Month Membership'>1 Month Membership</option> 
             <option class="input-field" id="3month" value = '3 Month Membership' >3 Month Membership</option> 
             <option class="input-field" id="1year" value = '1 Year Membership'>1 Year Membership</option> {/* {formData.restaurant_id} */}
           </select>
         <label class="input-label">Membership Options</label>          
       </div>
       <div class="action">
        <button class="action-button" type='submit'>POST</button>
      </div>
      </form>






   


   </>
  );
}

export default Memberships;