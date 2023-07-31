import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "./childComponents/Button";
import search from "../assets/search.svg";
import ModalWindow from "./childComponents/RegisterationModal";

// Custom hook for handling date picker logic

const useDatePicker = () => {
   const [date, setDate] = useState(null);
   const [showCalendar, setShowCalendar] = useState(false);

   const handleCalendarToggle = () => {
      setShowCalendar(!showCalendar);
   };

   const handleDateChange = (date) => {
      setDate(date);
      setShowCalendar(false); // Hide the calendar after selecting a date
   };

   return { date, showCalendar, handleCalendarToggle, handleDateChange };
};

const BookingForm = ({ idn }) => {
   const {
      showCalendar: showCalendar1,
      handleCalendarToggle: handleCalendarToggle1,
   } = useDatePicker();
   const {
      showCalendar: showCalendar2,
      handleCalendarToggle: handleCalendarToggle2,
   } = useDatePicker();
   function handlePickupdateChange(date) {
      setPickupdate(date);
   }
   function handleDropoffdateChange(date) {
      setDropoffdate(date);
   }

   const [modalOpen, setModalOpen] = useState(false);
   const [confirmed , setConfirmed] = useState(false);
   const [pickupdate, setPickupdate] = useState("");
   const [dropoffdate, setDropoffdate] = useState("");
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);
   const confirmModal = () => {
      
      setConfirmed(true);
      setTimeout(() => {
         setConfirmed(false);
       }, 3000);
     
      closeModal();
   };

   const chosenbike = [
      {
         model: "Honda CB500X",
         pickloaction: "Lahore",
         droplocation: "Lahore",
      },
   ];
   const [selectedBike, setSelectedBike] = useState(chosenbike[0]);
   const [formSubmitted, setFormSubmitted] = useState(true);
   function handlesubmit(e) {
      e.preventDefault();

      // Perform validation checks here
      if (
         selectedBike.model === "Select your bike type" ||
         selectedBike.pickloaction === "Select pick up location" ||
         selectedBike.droplocation === "Select drop off location" ||
         !pickupdate ||
         !dropoffdate
      ) {
         setFormSubmitted(false);
         return;
      }

      // If all fields are filled, proceed with the submission
      console.log(selectedBike);
      setFormSubmitted(true);
      openModal();
   }

   return (
      <div
         id={idn}
         className="my-[220px] mb-10 border-t-4 mx-6 md:mx-12 shadow-2xl p-5"
      >
         <div>
            <h1 className="text-center md:text-left mt-7 text-black font-bold text-xl">
               Book a bike
            </h1>
            {!formSubmitted && (
               <p className="text-center md:text-left text-green-600 font-semibold mt-2">
                  All fields are required
               </p>
            )}
            {confirmed && (
               <p className="text-center md:text-left text-green-600 font-semibold mt-2">
                  Please check your email for confirmation
               </p>
            )}
         </div>
         <br />
         <form action="" onSubmit={handlesubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
               <div>
                  <label
                     htmlFor="bike"
                     className="block text-left text-black font-semibold mb-2"
                  >
                     Select Your Car Type
                     <span className="text-red-600">*</span>
                  </label>
                  <select
                     id="bike"
                     name="bike"
                     className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
                     onChange={(e) => {
                        selectedBike.model = e.target.value;
                        setSelectedBike(selectedBike);
                     }}
                     required
                  >
                     <option>Select your bike type</option>
                     <option>Honda CB500X</option>
                     <option>BMW F 850 GS</option>
                     <option>Triumph Tiger 1200</option>
                     <option>Suzuki V-Strom 650</option>
                     <option>BMW R 1250 GS</option>
                  </select>
               </div>
               <div>
                  <label
                     htmlFor="pickup"
                     className="block text-left text-black font-semibold mb-2"
                  >
                     Pick-up<span className="text-red-600">*</span>
                  </label>
                  <select
                     id={2}
                     name="pickup"
                     onChange={(e) => {
                        selectedBike.pickloaction = e.target.value;
                        setSelectedBike(selectedBike);
                     }}
                     className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
                     required
                  >
                     <option>Select pick up location</option>
                     <option>Islamabad</option>
                     <option>Kashmir</option>
                     <option>Monal</option>
                     <option>Mushk Puri</option>
                  </select>
               </div>
               <div>
                  <label
                     htmlFor="Drop-of"
                     className="block text-left text-black font-semibold mb-2"
                  >
                     Drop-off
                     <span className="text-red-600">*</span>
                  </label>
                  <select
                     id="Drop_off"
                     name="Drop-of"
                     onChange={(e) => {
                        selectedBike.droplocation = e.target.value;
                        setSelectedBike(selectedBike);
                     }}
                     className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
                     required
                  >
                     <option>Select drop off location</option>
                     <option>Islamabad</option>
                     <option>Kashmir</option>
                     <option>Monal</option>
                     <option>Mushk Puri</option>
                  </select>
               </div>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
               <div className="mb-4">
                  <label
                     htmlFor="pickupdate"
                     className="block text-left text-black font-semibold mb-2"
                  >
                     Pick-Up <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                     <input
                        type="text"
                        readOnly
                        value={pickupdate ? pickupdate.toDateString() : ""}
                        onClick={handleCalendarToggle1}
                        className="w-full px-3 py-2 pl-10 border border-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer"
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
                     <div className="absolute mt-[-330px] md:mt-2 bg-white border border-gray-300 shadow-lg">
                        <DatePicker
                           selected={pickupdate}
                           onChange={handlePickupdateChange}
                           dateFormat="MM/dd/yyyy"
                           inline
                        />
                     </div>
                  )}
               </div>
               <div className="mb-4">
                  <label
                     htmlFor="drop off"
                     className="block text-left text-black font-semibold mb-2"
                  >
                     Drop-off<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                     <input
                        type="text"
                        readOnly
                        value={dropoffdate ? dropoffdate.toDateString() : ""}
                        onClick={handleCalendarToggle2}
                        className="w-full px-3 py-2 pl-10 border border-gray-300 focus:outline-none focus:border-blue-500 cursor-pointer"
                        required
                     />
                     <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon
                           icon={faCalendarAlt}
                           className="text-gray-500"
                           onClick={handleCalendarToggle2}
                        />
                     </div>
                  </div>
                  {showCalendar2 && (
                     <div className="absolute mt-[-330px] md:mt-2 bg-white border border-gray-300 shadow-lg">
                        <DatePicker
                           selected={dropoffdate}
                           onChange={handleDropoffdateChange}
                           inline
                        />
                     </div>
                  )}
               </div>
               <div className="bg-black h-10 cursor-pointer">
                  <button type="submit" className="w-full">
                     <Button text="Search" image={search} />
                  </button>
               </div>
            </div>
         </form>

         <ModalWindow
            isOpen={modalOpen}
            onClose={closeModal}
            confirm={confirmModal}
            data={selectedBike}
            pickupdate={pickupdate.toString()}
            dropoffdate={dropoffdate.toString()}
         ></ModalWindow>
      </div>
   );
};

export default BookingForm;
