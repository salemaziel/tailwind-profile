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

<section className="px-4 py-12">
  <div className="flex flex-wrap -mx-4">
    <div className="px-4 mb-4 lg:w-1/2 lg:mb-0"><img className="rounded shadow" src="https://bootstrapshuffle.com/placeholders-2-0/pictures/paper.jpg" alt /></div>
    <div className="px-4 lg:w-1/2">
      <h2 className="mb-4 text-4xl font-semibold font-heading">All Purpose Paper 80gsm - 500 sheets - 10 Reams</h2>
      <p className="mb-6 leading-relaxed text-gray-400">Premium quality home and office paper for all printing and copying machines. It is a flexible paper capable of switching from one machine to another with great print results.</p>
      <div className="mb-6">
        <button className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-gray-400 rounded-full" />
        <button className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-gray-300 rounded-full" />
        <button className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-gray-100 rounded-full" />
      </div>
      <div className="flex mb-6">
        <span className="text-2xl">$10</span>
        <div className="flex flex-wrap ml-4">
          <div className="w-1/2">
            <input className="block w-full px-4 py-2 leading-snug text-gray-700 border border-gray-200 rounded appearance-none bg-gray-50 focus:bg-white focus:border-gray-500 md:rounded-r-none focus:outline-none" type="number" defaultValue={1} />
          </div>
          <div className="w-1/2">
            <button 
            className="inline-block w-full px-4 py-3 font-semibold leading-none text-white bg-indigo-600 rounded hover:bg-indigo-700 md:rounded-l-none"
            role="link"
            type="button"
            onClick={handleClick}
            >Buy</button>
          </div>
        </div>
      </div>
    </div>

  </div>

  
</section>



<section className="px-4 py-12">
  <h2 className="mb-8 text-4xl font-semibold text-center font-heading">Our products</h2>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
      <div className="relative rounded shadow">
        <img src="https://bootstrapshuffle.com/placeholders-2-0/pictures/paper.jpg" alt />
        <div className="px-5 py-4 border-b">
          <h3 className="mb-1 text-3xl font-semibold font-heading"><a href="#">Digital Paper</a></h3>
          <p className="leading-relaxed text-gray-400">Premium quality home and office paper for all printing and copying machines.</p>
        </div>
        <div className="px-5 py-3">
          <span className="text-2xl">$9,99</span>
        </div>
      </div>
    </div>
    <div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
      <div className="relative rounded shadow">
        <img src="https://bootstrapshuffle.com/placeholders-2-0/pictures/paper.jpg" alt />
        <div className="px-5 py-4 border-b">
          <h3 className="mb-1 text-3xl font-semibold font-heading"><a href="#">Copier Paper</a></h3>
          <p className="leading-relaxed text-gray-400">Premium quality home and office paper for all printing and copying machines.</p>
        </div>
        <div className="px-5 py-3">
          <span className="text-2xl">$9,99</span>
        </div>
      </div>
    </div>
    <div className="w-full px-4 mb-8 lg:w-1/3 lg:mb-0">
      <div className="relative rounded shadow">
        <img src="https://bootstrapshuffle.com/placeholders-2-0/pictures/paper.jpg" alt />
        <div className="px-5 py-4 border-b">
          <h3 className="mb-1 text-3xl font-semibold font-heading"><a href="#">All Purpose paper</a></h3>
          <p className="leading-relaxed text-gray-400">Premium quality home and office paper for all printing and copying machines.</p>
        </div>
        <div className="px-5 py-3">
          <span className="text-2xl">$9,99</span>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
)
}

export default ProductPage