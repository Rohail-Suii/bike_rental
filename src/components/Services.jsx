import React from "react";
import location from "../assets/location.png";
import operator from "../assets/operator.png";
import motorbike from "../assets/motorbike.png";

const Services = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-12 mt-12 md:mt-24 ">
      <div>
        <h6 className="text-2xl md:text-4xl text-center font-medium text-black p-6">Plan your trip now</h6>
        <h1 className="text-4xl md:text-6xl text-center font-semibold text-black p-6">Quick & easy bike rental</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12">
        <div className="flex flex-col justify-center items-center">
          <img src={motorbike} alt="" className="h-24 md:h-32 w-24 md:w-32" />
          <h1 className="text-xl md:text-2xl font-bold p-6 text-center text-black">Select Bike</h1>
          <p className=" text-center">
            We offer a wide range of bikes for all your driving needs. We have the perfect bike to meet your requirements.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={operator} alt="" className="h-24 md:h-32 w-24 md:w-32" />
          <h1 className="text-xl md:text-2xl font-bold p-6 text-center text-black">Contact Operator</h1>
          <p className=" text-center">
            Our knowledgeable and friendly operators are always ready to help with any questions or concerns.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={location} alt="" className="h-24 md:h-32 w-24 md:w-32 " />
          <h1 className="text-xl md:text-2xl font-bold p-6 text-center text-black">Let's Drive</h1>
          <p className=" text-center">
            Whether you're hitting the open road or exploring the city, we've got you covered with our wide range of bikes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
