import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JCtixH8cLyG8ShQ55zHMF0kGspd1MJXznJVDW2B5lHC5HYtvBTeASZpbQkjLy9IfR1PbCPE2k8vkQIWRlIa2lwn00v6qbiMb5";
  const tocken = tocken=>{
      console.log(tocken);
      alert('Payement effectué avec succés')
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