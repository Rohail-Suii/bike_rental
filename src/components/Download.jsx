import React from "react";
import hero_bike from "../assets/bike-app.jpg";
import google from "../assets/svgs/googleapp.svg";
import app from "../assets/svgs/appstore.svg";
const Download = () => {
   //bg-gradient-to-r from-sky-500 to-blue-800
   return (
      <div className=" bg-gray-50 flex flex-row justify-between mt-15 px-5 py-4">
         <div className=" p-3 space-y-20">
            <div className="content flex flex-col ">
               <h1 className="text-[40px] text-black font-bold   text-left ">
                  Download our app to get <br /> most out of it
               </h1>
               <p className="text-left text-black mt-9">
                  Downloading an app is like opening a door to a world of
                  endless <br /> possibilities and convenience, where technology
                  becomes your trusted ally
               </p>
            </div>
            <div className="img flex flex-row space-x-5 mt-9 ">
               <img src={google} alt="" />
               <img src={app} alt="" />
            </div>
         </div>
         <div
            className="backgrou hidden lg:block rounded-3xl bg-contain bg-no-repeat bg-right w-[50%] h-[400px]"
            style={{ backgroundImage: `url(${hero_bike})` }}
         ></div>
      </div>
   );
};

export default Download;
