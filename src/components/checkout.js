import React from "react"
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe('pk_test_51IOGCRKuQWMgw7CJULP1TG7A7QxmnArIzLmKnnvKWEDkG64jSCMy1j47lYNpHRZgXKiXyPjhvCp01IlEyaJEQ4ye00D0tDgZPo');


const ProductPage = () => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IfMUOKuQWMgw7CJ0wpdUCoR', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'payment',
          successUrl: 'https://salem-tailwind-profile.netlify.app/success',
          cancelUrl: 'https://salem-tailwind-profile.netlify.app/canceled',
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
      };

    return(

    <>
          <div className="w-1/2">
            <button 
            className="inline-block w-full px-4 py-3 font-semibold leading-none text-white bg-indigo-600 rounded hover:bg-indigo-700 md:rounded-l-none"
            role="link"
            type="button"
            onClick={handleClick}
            >Buy</button>
          </div>


    </>
)
}

export default ProductPage