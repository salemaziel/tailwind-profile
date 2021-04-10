import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGrinWink
} from "react-icons/fa"


function Footer2() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-blue-700">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
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
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-400">
                You know you want to <span aria-label="grinning wink emoji" role="img">😜</span>
              </h5>
              
              <div className="mt-6 mb-6 md:mb-0">
                <button
                  className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                  <FaTwitter />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-600 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                  <FaFacebook />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="flex fab fa-dribbble"></i>
                  <FaInstagram />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-gray-900 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                  <FaLinkedin />
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-bold text-white uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-400 hover:text-white"
                         href="https://salemaziel.com/about">About Me
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-400 hover:text-white"
                         href="https://salemaziel.com/blog">My Blog
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-400 hover:text-white"
                         href="https://www.github.com/salemaziel">Github
                      </a>
                    </li>
                    {/*<li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                         href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                      </a>
                    </li>*/}

                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block mt-2 mb-2 text-sm font-semibold text-white uppercase md:mt-0">
                    Other Resources
                  </span>
                  {/*<ul className="list-unstyled">
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                    </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                         href="https://creative-tim.com/terms">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                         href="https://creative-tim.com/privacy">Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                         href="https://creative-tim.com/contact-us">Contact Us
                      </a>
                    </li>
                  </ul>*/}

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-300">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://viadelweb.com"
                  className="text-gray-300 hover:text-white"
                >
                  Via Del Web, LLC
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer2