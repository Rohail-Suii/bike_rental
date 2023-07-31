import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

import {
   faFacebook,
   faTwitter,
   faInstagram,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
      <footer className="bg-sky-500 p-4 text-white">
         <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
               <div className="col-span-1  w-fit">
                  <h4 className=" text-xl font-bold mb-4">Services</h4>
                  <a
                     href="#"
                     className="text-white cursor-pointer block mb-2"
                  >
                     <h1 className="hover:text-black ">
                         Bike Rentals
                     </h1>
                  </a>
                  
                  <a
                     href="#"
                     className="text-white  cursor-pointer block mb-2"
                  >
                     <h1 className="hover:text-black ">
                         Bike Tours
                     </h1>
                  </a>
                  <a
                     href="#"
                     className="text-white  cursor-pointer block mb-2"
                  >
                     <h1 className="hover:text-black ">
                         Bike Repair
                     </h1>
                  </a>
               </div>
               <div className="col-span-1 w-fit">
                  <h4 className="text-xl font-bold mb-4">Locations</h4>
                  <a
                     href="#"
                     className="text-white  cursor-pointer block mb-2"
                  >
                     <h1 className="hover:text-black ">
                         Lahore
                     </h1>
                    
                  </a>
                  <a
                     href="#"
                     className="text-white cursor-pointer block mb-2"
                  >
                      <h1 className="hover:text-black ">
                         Islamabad
                     </h1>
                  </a>
                  <a
                     href="#"
                     className="text-white  cursor-pointer block mb-2"
                  >
                      <h1 className="hover:text-black ">
                         Attock
                     </h1>
                  </a>
                  <a
                     href="#"
                     className="text-white  cursor-pointer block mb-2"
                  >
                      <h1 className="hover:text-black">
                         Kashmir
                     </h1>
                  </a>
               </div>
               <div className="col-span-1 items-center">
                  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                  <div className="flex flex-col  space-x-4">
                     <a href="#" className="text-white  cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="ml-3  hover:scale-105 transform transition-all" />
                     </a>
                     <a href="#" className="text-white cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} size="2x"  className="hover:scale-105 transform transition-all" />
                     </a>
                     <a href="#" className="text-white cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} size="2x"  className="hover:scale-105 transform transition-all"/>
                     </a>
                     <a
                        href="https://youtube.com/@cubershaway1"
                        className="text-white  cursor-pointer"
                     >
                        <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:scale-105 transform transition-all"/>
                     </a>
                  </div>
               </div>
               <div className="col-span-1">
                  <h4 className="text-xl font-bold mb-4">Subscription</h4>
                  <p className="text-white mb-2">
                     Subscribe to our newsletter for the latest updates and
                     offers.
                  </p>
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="bg-white text-black rounded px-2 py-1 mb-2"
                  />
                  <button className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 cursor-pointer">
                     Subscribe
                  </button>
               </div>
            </div>
            <div className="mt-8 text-center">
               <p className="text-white text-sm">
                  © {new Date().getFullYear()} Your Bike Rental. All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
