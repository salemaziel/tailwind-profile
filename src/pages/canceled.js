import React from "react"
import {Link} from "gatsby"

const Cancelled = () => (
    <>
    
<section className="px-4 py-12 text-center">
  <img className="mx-auto max-w-auto md:max-w-sm" src="https://bootstrapshuffle.com/placeholders-2-0/pictures/error.svg" alt />
  <h2 className="mt-8 mb-2 text-5xl font-semibold font-heading">Cancelled!</h2>
  <Link to="/" className="inline-block px-8 py-4 font-semibold leading-none text-white bg-indigo-600 rounded shadow hover:bg-indigo-700">Return to the homepage</Link>
</section>


    </>
)

export default Cancelled