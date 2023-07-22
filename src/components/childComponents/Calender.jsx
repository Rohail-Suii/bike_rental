import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Calender = (props) => {
  const [pickupdate, setPickupdate] = useState(null);
  const [dropoffdate, setDropoffdate] = useState(null);
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const handleCalendarToggle1 = () => {
    setShowCalendar1(!showCalendar1);
  };
  const handleCalendarToggle2 = () => {
    setShowCalendar2(!showCalendar2);
  };
  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="pickupdate"
          className="block text-gray-700 font-bold mb-2"
        >
          Pick-Up <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            readOnly
            value={pickupdate ? pickupdate.toDateString() : ""}
            onClick={handleCalendarToggle1}
            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 cursor-pointer"
            required
          />
          <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-gray-500"
              onClick={handleCalendarToggle1}
            />
          </div>
        </div>
        {showCalendar1 && (
          <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded">
            <DatePicker
              selected={pickupdate}
              onChange={(date) => {
                setPickupdate(date);
                setShowCalendar1(false); // Hide the calendar after selecting a date
              }}
              inline
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calender;
