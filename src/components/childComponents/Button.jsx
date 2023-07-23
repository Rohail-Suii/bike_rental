import React from "react";

const Button = (props) => {
  return (
    <div className="flex flex-row justify-center  bg-[color:var(--primary-color)] px-7 py-4 text-white hover:scale-105 transform transition-all shadow-black md:shadow-black hover:shadow-2xl cursor-pointer ">
      <h1 className="mr-1 ">{props.text} </h1>
      <img src={props.image} alt="" 
      className="w-[24px] h-[24px]"/>
    </div>
  );
};

export default Button;
