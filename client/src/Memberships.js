import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';


  

function Memberships({user}) {

    function handleGymChange(e) {
        SetFormData({
          ...formData,
          gym_id: e.target.value,
        });
      }

    const [pprice, setPprice] = useState("");
    const [showp, setShowp] = useState("");

        function handlePlanChange(e) {
            setPprice(e.target.value); // Update pprice based on selected option
            if (e.target.value === '1 Day Membership'){
                setShowp("$1.00")} 
            else if (e.target.value === '1 Month Membership'){
                setShowp("$150.00")} 
            else if (e.target.value === '3 Month Membership'){
                setShowp("$400.00")} 
            else if (e.target.value === '1 Year Membership'){
                setShowp("$1200.00")} 

                    SetFormData({
                    ...formData,
                    plan: e.target.value,
                    
                    });
                }
            



    const ProductDisplay = () => (
        <section>
          <div className="product">
            <img
              src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/341260897_241927845028189_3175328261831266190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qzJhyaEkV-QAX9dIxEI&_nc_ht=scontent-ord5-1.xx&oh=00_AfAA_pTCbJlcSpTauTEaCOTNInQIU_9RAyboy3xbaCJ88g&oe=6459996B"
              alt="The cover of Stubborn Attachments"
              height="360px"
              width="760px"
            />
            <div className="description">
            <h3>Chicago Fight Team </h3>
            <h5>$1.00</h5>
            </div>
          </div>
          <form action="/create-checkout-session" method="POST">
          {/* <div class="input">
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
               {/* </select>
             <label class="input-label">Membership Options</label>          
           </div> */} 
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
     
      
        const handleClick = () => {
          window.open("https://buy.stripe.com/bIY7tA2572Gx0vu5kk", "_blank");
        }

        const handleClick1 = () => {
            window.open("https://buy.stripe.com/bIYdRYfVX0yp0vudQR", "_blank");
          }

        const handleClick3 = () => {
            window.open("https://buy.stripe.com/dR629g4dfftj9207su", "_blank");
          }

        const handleClick1y = () => {
            window.open("https://buy.stripe.com/fZebJQfVX2Gx5PO6or", "_blank");
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
        // .then(navigate('/'))
        if (formData.plan === "1 Day Membership"){
            handleClick()
            navigate('/aboutUs')
        }
        if (formData.plan === "1 Month Membership"){
            handleClick1()
            navigate('/aboutUs')
        }
        if (formData.plan === "3 Month Membership"){
            handleClick3()
            navigate('/aboutUs')
        }
        if (formData.plan === "1 Year Membership"){
            handleClick1y()
            navigate('/aboutUs')
        }

        else {
            navigate('/')
        }
        // .then(onAddReview)
      }}
    //   function StripeCheckout() {
    //     return (
    //       <Elements stripe={stripePromise}>
    //         <CheckoutForm />
    //       </Elements>
    //     );
    //   }





  return (
    < >
    <div className='memberships'><div className="product">
            <img
              src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/341260897_241927845028189_3175328261831266190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qzJhyaEkV-QAX9dIxEI&_nc_ht=scontent-ord5-1.xx&oh=00_AfAA_pTCbJlcSpTauTEaCOTNInQIU_9RAyboy3xbaCJ88g&oe=6459996B"
              alt="The cover of Stubborn Attachments"
              height="360px"
              width="760px"
            />
            <div className="description">
            <h1>Chicago Fight Team </h1>
            {/* <h5>{pprice}</h5> */}
            </div></div>
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
        <button class="action-button" type='submit'>Purchase Membership</button>
        {isIncorrect ? <div>
            <h2>You need to LOG-IN or SIGN-UP before you get a Membership, Please Try Again!</h2>
        </div>: null}
      </div>
      </form>  
      {/* <h5>{pprice}</h5> */}
      <h2>{showp}</h2>

      {/* <button onClick={handleClick}>Go to Stripe</button> */}

      {/* {message ? <Message message={message} /> : <ProductDisplay />} */}
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


export default Memberships;