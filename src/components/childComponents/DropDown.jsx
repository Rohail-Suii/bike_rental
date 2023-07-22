import React from "react";

const DropDown = (props) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
          {props.label}<span className="text-red-600">*</span>
        </label>
        <select
          id={props.id}
          name="country"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          required
        >
          <option >{props.value1}</option>
          <option >{props.value2}</option>
          <option >{props.value3}</option>
          <option >{props.value4}</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
