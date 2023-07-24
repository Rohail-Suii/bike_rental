import React from "react";
import Button from "./childComponents/Button";
import hero_bike from "../assets/Hero-bike.png";
import check from "../assets/check.svg";
import arrow_down from "../assets/arrow_down.svg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full bg-black">
      <div className="lg:w-1/2 content flex flex-col justify-center px-6 py-8 lg:py-0">
        <div className="flex flex-col py-4 text-left">
          <h4 className="text-white text-lg font-semibold mb-4">Plan your trip now</h4>
          <h1 className="text-white text-2xl lg:text-4xl font-semibold mb-5">
            Save <span className="text-[color:var(--primary-color)]">big</span> with our <br /> bike rental
          </h1>
          <p className="text-white text-sm lg:text-base">
            Rent the bike of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options, and much more.
          </p>
        </div>
        <div className="flex flex-row space-x-4 mt-6">
          <Button text="Book Ride" image={check} />
          <Button text="Learn More" image={arrow_down} />
        </div>
      </div>
      <div className="lg:w-1/2 img w-full">
        <img src={hero_bike} alt="" />
      </div>
    </div>
  );
};

export default Hero;
