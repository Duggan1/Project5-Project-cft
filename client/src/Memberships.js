import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  );
  
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  

function Memberships({user}) {


    const [message, setMessage] = useState("");

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);
  

    const navigate = useNavigate()
    const [isIncorrect, setIsIncorrect] = useState(false)

    const toggleIncorrect =()=>{
        setIsIncorrect(!isIncorrect)
    }
    // function CheckoutForm() {
    //     const stripe = useStripe();
    //     const elements = useElements();
      
    //     const handleSubmitS = async (event) => {
    //       event.preventDefault();
    //       // Use the Stripe API to create a payment method and process the payment
    //     }
    

    const [formData, SetFormData] = useState({
        plan:"1 Day Membership",
        gym_id: "1",
  
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
        if (user === null){
        toggleIncorrect()
        } else {

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
      }}





  return (
    < >
    <div className='memberships'>
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
        {isIncorrect ? <div>
            <h2>You need to LOG-IN or SIGN-UP before you get a Membership, Please Try Again!</h2>
        </div>: null}
      </div>
      </form>

      {message ? <Message message={message} /> : <ProductDisplay />}
      {/* <form onSubmit={handleSubmitS}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
 */}


   

</div>
   </>
  );
}
// function StripeCheckout() {
//     return (
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     );
//   }

export default Memberships;