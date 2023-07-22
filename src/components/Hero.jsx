import React from "react";
import Button from "./childComponents/Button";
import hero_bike from "../assets/Hero-bike.png";
import check from "../assets/check.svg";
import arrow_down from "../assets/arrow_down.svg";
const Hero = () => {
  return (
    <div className="flex flex-row h-full bg-black">
      <div className="content flex flex-col  justify-center  px-6 ">
        <div className="flex flex-col py-4 text-left">
          <h4 className="text-white text-lg font-semibold">
            Plan your trip now
          </h4>
          <h1 className="text-white text-[40px] font-semibold">
            Save <span className="text-[color:var(--primary-color)]">big</span>{" "}
            with our <br />
            bike rental
          </h1>
          <p className="text-white">
            Rent the bike of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
        </div>
        <div className="flex flex-row ">
          <div className="mr-2">
            <Button text="Book Ride" image={check} />
          </div>
          <div>
            <Button text="Learn More" image={arrow_down}/>
          </div>
        </div>
      </div>
      <div className="img w-full ">
        <img src={hero_bike} alt=""  />
      </div>
    </div>
  );
};

export default Hero;
