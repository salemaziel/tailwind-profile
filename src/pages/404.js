import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer2 from '../components/layout/Footer2';
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <>
    <Navbar transparent />

    <section className="px-4 py-12">
      <div className="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-left">
        <div className="order-1 w-full px-2 mt-10 lg:w-1/2 lg:pr-10 lg:mt-0 lg:order-none">
          <h2 className="mb-4 text-4xl font-semibold font-heading">Page not found</h2>
          <p className="mb-6 text-gray-600">
            Sorry bruh, this page you're look for doesn't exist.
          </p>
          <Link className="inline-block px-8 py-4 font-semibold leading-none text-white bg-blue-700 rounded shadow hover:bg-blue-500" to="/">
          Return to the homepage »
          </Link>
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <img src="https://bootstrapshuffle.com/placeholders-2-0/pictures/error.svg" alt />
        </div>
      </div>
    </section>

    <Footer2 />
  </>
);

export default NotFoundPage;
