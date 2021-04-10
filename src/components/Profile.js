import React from 'react';

import Navbar from './layout/Navbar';
import Footer2 from './layout/Footer2';

import ProfilePic from '../images/profilepic.png';
import BGPic from '../images/wallhaven-45y613_m50.jpg';
import ViaDelWeb from '../images/Via-Del-Web_MAIN-LOGO-horizontal.png';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page bgBottom">
        <section className="relative block bgPic">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${BGPic})`
            }}
          >
            <span id="blackOverlay" className="absolute w-full h-full bg-black opacity-25"></span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl animate-fade-in-fwd">
              <div className="px-4 md:px-6">
                <div className="flex flex-wrap justify-center mb-32 md:mb-10">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="..."
                        src={ProfilePic}
                        className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                        style={{ maxWidth: '150px' }}
                      />
                    </div>
                  </div>

                  <div className="hidden w-full px-4 md:block lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="flex justify-center px-3 py-6 mt-32 sm:mt-0 md:block">
                      <a
                        className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-blue-700 rounded shadow outline-none active:bg-pink-600 hover:shadow-md hover:bg-blue-500 hover:text-white focus:outline-none sm:mr-2"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        href="#mailgo" 
                        data-address="salem" 
                        data-domain="viadelweb.com"
                        data-subject="Hey, let's connect!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect With Me
                      </a>
                    </div>
                  </div>
                  <div className="hidden w-full px-4 md:block lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://facebook.com/"
                            title="Salem on Facebook"
                            rel="noopener"
                            target="_blank"
                            className="text-blue-600"
                          >
                            <FaFacebook size="2rem" />
                          </a>
                        </span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://instagram.com/"
                            title="Salem on Instagram"
                            rel="noopener"
                            target="_blank"
                            className="text-red-700"
                          >
                            <FaInstagram size="2rem" />
                          </a>
                        </span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://linkedin.com/"
                            title="Salem on LinkedIn"
                            rel="noopener"
                            target="_blank"
                            className="text-blue-700"
                          >
                            <FaLinkedin size="2rem" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800 font-ubuntu">
                    Salem Aziel <br /> Mackintosh-Benitez
                  </h3>
                  <div className="my-2 text-sm font-bold leading-normal text-gray-500 uppercase font-ubuntu">
                    <div className="flex flex-row justify-center text-center">
                    <FaMapMarkerAlt size="1rem" className="mr-2" /> <span className=""> San Diego,
                    California</span>
                    </div>
                  </div>

                  <div className="mt-8 mb-2 font-bold text-gray-700 font-ubuntu">
                    <div className="justify-center w-3/4 mx-auto md:w-1/4">
                      <a
                        href="https://viadelweb.com"
                        rel="follow"
                        title="Link to Via Del Web website"
                      >
                        <img src={ViaDelWeb} alt="Via Del Web Logo" className="w-full" />
                      </a>
                    </div>
                    <i className="mr-2 text-lg text-gray-500 fas fa-briefcase"></i>
                    Owner &amp; Web Developer
                  </div>
                  {/*<div className="mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-university"></i>
                    Via Del Web - Website Design &amp; Digital Consultants
      </div>*/}
                </div>

                <div className="block w-full px-4 md:hidden lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4">
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://facebook.com/"
                            title="Salem on Facebook"
                            rel="noopener"
                            target="_blank"
                            className="text-blue-600"
                          >
                            <FaFacebook size="2rem" />
                          </a>
                        </span>
                      </div>
                      <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://instagram.com/"
                            title="Salem on Instagram"
                            rel="noopener"
                            target="_blank"
                            className="text-red-700"
                          >
                            <FaInstagram size="2rem" />
                          </a>
                        </span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide text-blue-700 uppercase">
                          <a
                            href="https://linkedin.com/"
                            title="Salem on LinkedIn"
                            rel="noopener"
                            target="_blank"
                            className="text-blue-700"
                          >
                            <FaLinkedin size="2rem" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="block w-full px-4 md:hidden lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    <div className="flex justify-center px-3 py-4 sm:mt-0 md:block">
                      <a
                        className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-blue-700 rounded shadow outline-none active:bg-pink-600 hover:shadow-md hover:bg-blue-500 hover:text-white focus:outline-none sm:mr-2"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        href="#mailgo" 
                        data-address="salem" 
                        data-domain="viadelweb.com"
                        data-subject="Hey, let's connect!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect With Me
                      </a>
                    </div>
                  </div>


                <div className="py-8 mt-5 text-center border-t border-gray-300 sm:mt-10 sm:py-10">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        I am a web developer, digital consultant, and small business owner currently
                        living in San Diego, CA. 
                        <br />
                        <br />
                        My interests range from web development to hiking.
                        I am also interested in running, politics, and technology.
                      </p>
                      {/*<a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}

export default Profile;
