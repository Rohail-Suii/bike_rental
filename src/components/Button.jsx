import React from "react";

const Button = (props) => {
  return (
    <div className="bg-[color:var(--primary-color)] px-7 py-4 text-white shadow-blue-900 md:shadow-blue-900 hover:shadow-2xl cursor-pointer rounded-md">
      <h1>{props.text.name}</h1>
    </div>
  );
};

export default Button;
