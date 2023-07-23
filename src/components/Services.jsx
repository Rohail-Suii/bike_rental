import React from "react";
import location from "../assets/location.png";
import operator from "../assets/operator.png";
import motorbike from "../assets/motorbike.png";
const Services = () => {
   return (
      <div className="flex flex-col mx-12 mt-[230px] ">
         <div >
            <h6 className="text-[40px] font-medium">Plan your trip now</h6>
            <h1 className="text-[60px] font-semibold">Quick & easy bike rental</h1>
         </div>
         <div className="flex  flex-row space-x-28 mb-20 mt-[100px] mx-8">
            <div className="flex flex-col justify-center items-center">
               <img src={motorbike  }alt="" className="h-[90px] w-[90px]"/>
               <h1 className="text-xl font-bold p-6">Select Bike</h1>
               <p className="text-gray-500">
                  We offers a big range of bikes for all your driving needs. We
                  have the perfect car to meet your needs
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <img src={operator} alt="" className="h-[90px] w-[90px]"/>
               <h1 className="text-xl font-bold p-6">Contact Operator</h1>
               <p className="text-gray-500">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
               </p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <img src={location} alt="" className="h-[90px] w-[90px]"/>
               <h1 className="text-xl font-bold p-6">Let's Drive</h1>
               <p className="text-gray-500">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
               </p>
            </div>
         </div>
      </div>
   );
};

export default Services;
