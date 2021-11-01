import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price})=>{
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JCtixH8cLyG8ShQ55zHMF0kGspd1MJXznJVDW2B5lHC5HYtvBTeASZpbQkjLy9IfR1PbCPE2k8vkQIWRlIa2lwn00v6qbiMb5";
  const tocken = token=>{
      axios({
          url:'payment',
          method:'post',
          data:{
              amount:priceForStripe,
              token
          }
      }).then(response =>{
        alert('Payement effectué avec succés');
      }).catch(error=>{
        alert('Payement error', JSON.stringify(error));
        alert("Il y'a un problème avec ton paiement, Assurez-vous d'avoir une carte valide");
      })
  }
    return(
        <StripeCheckout 
            label="payer maintenant"
            name ="M2G Boutique"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg" 
            description={`Le total est égal à $${price}`}
            amount={priceForStripe}
            panelLabel ="Payer maintenant" 
            token={tocken}
            stripeKey={publishableKey}
        />
    )
};
export default StripeCheckoutButton;