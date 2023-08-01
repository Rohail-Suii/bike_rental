import React from "react";
import { useState } from "react";
import bike_logo from "../assets/bike-logo.jpeg";
import Button from "./childComponents/Button";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import register from "../assets/register.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   const navlinks = [
      {
         id: 1,
         name: "Home",
         path: "/",
      },
      {
         id: 2,
         name: "About",
         path: "/about",
      },
      {
         id: 3,
         name: "Bike Models",
         path: "/bikes",
      },
     
      {
         id: 5,
         name: "Our Team",
         path: "/team",
      },
      {
         id: 6,
         name: "Contact",
         path: "/contact",
      },
   ];
   //   bg-[color:var(--primary-color)]
   return (
      <div className="flex flex-row justify-between items-center p-2 m-5 navbar space-x-2">
         <div className="flex flex-row cursor-pointer">
            <img
               src={bike_logo}
               alt="logo"
               className="w-20 h-13 rounded-full"
            />
            <h6 className="px-3">
               <span className="font-bold text-xl">Bike</span> <br /> Rental
            </h6>
         </div>
         <div>
            <ul className="lg:flex hidden flex-row ">
               {navlinks.map((item) => (
                  <li
                     key={item.id}
                     className="mr-4 font-semibold hover:text-[color:var(--primary-color)] hover:scale-105 transform transition-all"
                  >
                     <Link to={item.path}><h1 className="hover:text-[color:var(--primary-color)]">{item.name}</h1></Link>
                  </li>
               ))}
            </ul>
         </div>
         <div className="md:flex flex-row  hidden  items-center ">
            <a
               className="mx-5 font-semibold hover:text-[color:var(--primary-color)] hover:scale-105 transform transition-all"
               href="#"
            >
               Sign In
            </a>

            <Button text="Register" image={register}></Button>
         </div>
         <div className="md:flex lg:hidden justify-end items-center ">
            <img
               src={toggle ? close : menu}
               alt=""
               className="w-[24px] h-[24px] object-contain bg-stone-700"
               onClick={() => setToggle((prev) => !prev)}
            />
            <div
               className={`${toggle ? "flex" : "hidden"} p-6
        absolute top-20 right-0 mx-4 
        my-2 min-w-[140px] rounded-xl sidebar`}
            >
               <ul className="flex flex-col text-right space-y-3 bg-white items-center">
                  {navlinks.map((item) => (
                     <li
                     key={item.id}
                     className="mr-4  font-semibold hover:text-[color:var(--primary-color)] hover:scale-105 transform transition-all"
                  >
                     <Link to={item.path}><h1 className="hover:text-[color:var(--primary-color)] ">{item.name}</h1></Link>
                  </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
