import React from "react";

import Button from "./childComponents/Button";
import DropDown from "./childComponents/DropDown";
import Calender from "./childComponents/Calender";
const BookingForm = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-row px-5 mt-[210px] mb-4 mx-6 shadow-2xl  border-t-2">
      <div>
      <h1 className=" text-left justify-center mt-7 text-[color:var(--primary-color)] font-semibold text-xl">Book A Bike</h1>
      </div>
      
      <div className="grid grid-cols-3 space-x-3">
        <div className="">
          <DropDown
            label="Select Your Car Type"
            id={1}
            value1="bike 1"
            value2="bike 2"
            value3="bike 3"
            value4="bike 4"
          />
        </div>
        <div>
          <DropDown
            label="Drop-of "
            id={2}
            value1="bike 1"
            value2="bike 2"
            value3="bike 3"
            value4="bike 4"
          />
        </div>
        <div>
          <DropDown
            label="Pick-up "
            id={3}
            value1="bike 1"
            value2="bike 2"
            value3="bike 3"
            value4="bike 4"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 space-x-3">
        <div className=" ">
          <Calender />
        </div>
        <div>
          <Calender />
        </div>
        <div className="mt-4">
          <Button text="Search" />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
