import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import closeimg from "../../assets/close.svg";
import info from "../../assets/info.svg";
import location from "../../assets/svgs/location.svg";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import calender from "../../assets/svgs/calendar.svg";
import bike1 from "../../assets/Bikes/Honda 1.png";
import bike2 from "../../assets/Bikes/Honda 2.png";
import bike3 from "../../assets/Bikes/Honda 3.png";
import bike4 from "../../assets/Bikes/Honda 4.png";
import bike5 from "../../assets/Bikes/Honda 5.png";

const ModalWindow = ({
   isOpen,
   onClose,
   confirm,
   children,
   data,
   pickupdate,
   dropoffdate,
}) => {
   const [time, setTime] = useState("00:00");
   function onChange(time) {
      setTime(time);
   }
   const [time2, setTime2] = useState("00:00");
   function onChange2(time2) {
      setTime2(time2);
   }

   const [bike, setBike] = useState(bike1);
   useEffect(() => {
      if (data.model === "Honda CB500X") {
         setBike(bike1);
      } else if (data.model === "BMW F 850 GS") {
         setBike(bike2);
      } else if (data.model === "Triumph Tiger 1200") {
         setBike(bike3);
      } else if (data.model === "Suzuki V-Strom 650") {
         setBike(bike4);
      } else if (data.model === "BMW R 1250 GS") {
         setBike(bike5);
      }
   }, [data.model]);
   const date = pickupdate.substring(0, 16);
   const date2 = dropoffdate.substring(0, 16);

   // Form
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [age, setAge] = useState("");
   const [email, setEmail] = useState("");
   const [city, setCity] = useState("");
   const [address, setAddress] = useState("");
   const [subscribe, setSubscribe] = useState(false);

   if (!isOpen) {
      return null;
   }
   return ReactDOM.createPortal(
      <div className="modal-overlay fixed top-0 left-0 w-full   ">
         <div className="modal-content w-[900px] bg-gray-100 mt-[80px] overflow-auto  h-full border border-2">
            {children}
            <div className="flex flex-row bg-[color:var(--primary-color)] justify-between items-center py-4 px-3 ">
               <h2 className="block  text-white font-bold text-xl">
                  COMPLETE RESERVATION
               </h2>
               <div className="cursor-pointer" onClick={onClose}>
                  <img src={closeimg} alt="" />
               </div>
            </div>

            <div className="flex flex-col bg-blue-200">
               <div className="flex flex-row p-4">
                  <img src={info} alt="" />

                  <h1 className="px-2">
                     Upon completing this reservation enquiry, you will receive:
                  </h1>
               </div>
               <div>
                  <p className="px-4 mb-2">
                     Your rental voucher to produce on arrival at the rental
                     desk and a toll-free customer <br /> support number.
                  </p>
               </div>
            </div>
            <div className="flex md:flex-row flex-col">
               <div className="left flex flex-col space-y-4">
                  <div className="text-[color:var(--primary-color)] px-8 py-4 font-semibold">
                     <h1 className="text-lg">Location & Date</h1>
                  </div>
                  <div className="div1 flex flex-col px-4">
                     <div className="flex flex-row items-center">
                        <div>
                           <img src={location} alt="" />
                        </div>
                        <div className="px-2 text-black font-bold">
                           <h1>Pick-Up Date & Time</h1>
                        </div>
                     </div>
                     <div className="flex flex-row py-1 px-8 items-center">
                        <div>{date}/</div>
                        <div>
                           <TimePicker onChange={onChange} value={time} />
                        </div>
                     </div>
                  </div>
                  <div className="div2 flex flex-col px-4">
                     <div className="flex flex-row items-center">
                        <div>
                           <img src={location} alt="" />
                        </div>
                        <div className="px-2 text-black font-bold">
                           <h1>Drop-Off Date & Time</h1>
                        </div>
                     </div>
                     <div className="flex flex-row py-1 px-8 items-center">
                        <div>{date2}/</div>
                        <div>
                           <TimePicker onChange={onChange2} value={time2} />
                        </div>
                     </div>
                  </div>
                  <div className="div3 flex flex-col px-4">
                     <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px]">
                           <img src={calender} alt="" />
                        </div>
                        <div className="px-2 text-black font-bold">
                           <h1>Pick-Up Location</h1>
                        </div>
                     </div>
                     <div className="py-1 px-8">
                        <h1>{data.pickloaction}</h1>
                     </div>
                  </div>
                  <div className="div3 flex flex-col px-4">
                     <div className="flex flex-row items-center">
                        <div className="w-[24px] h-[24px]">
                           <img src={calender} alt="" />
                        </div>
                        <div className="px-2 text-black font-bold">
                           <h1>Drop-Off Location</h1>
                        </div>
                     </div>
                     <div className="py-1 px-8">
                        <h1>{data.droplocation}</h1>
                     </div>
                  </div>
               </div>
               <div className="right">
                  <div className=" px-8 py-4">
                     <h1 className="text-black font-bold text-lg">
                        Car -{" "}
                        <span className="text-[color:var(--primary-color)]">
                           {data.model}
                        </span>
                     </h1>
                  </div>
                  <div>
                     <img src={bike} alt="" className="w-[450px] h-full" />
                  </div>
               </div>
            </div>
            <div className="container w-full py-8">
               <form
                  onSubmit={confirm}
                  className=" bg-white p-6 shadow-md"
               >
                  <div className="flex flex-row justify-between space-x-3">
                     <div className="mb-4 w-full">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="firstName"
                        >
                           First Name
                        </label>
                        <input
                           type="text"
                           id="firstName"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           required
                        />
                     </div>
                     <div className="mb-4 w-full ">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="lastName"
                        >
                           Last Name
                        </label>
                        <input
                           type="text"
                           id="lastName"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           required
                        />
                     </div>
                  </div>
                  <div className="flex flex-row justify-between space-x-3">
                     <div className="mb-4 w-full">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="phoneNumber"
                        >
                           Phone Number
                        </label>
                        <input
                           type="tel"
                           id="phoneNumber"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           required
                        />
                     </div>
                     <div className="mb-4 w-full">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="age"
                        >
                           Age
                        </label>
                        <input
                           type="number"
                           id="age"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={age}
                           onChange={(e) => setAge(e.target.value)}
                           required
                        />
                     </div>
                  </div>

                  <div className="mb-4">
                     <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                  </div>
                  <div className="flex flex-row justify-between space-x-3">
                     <div className="mb-4 w-full">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="city"
                        >
                           City
                        </label>
                        <input
                           type="text"
                           id="city"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={city}
                           onChange={(e) => setCity(e.target.value)}
                           required
                        />
                     </div>
                     <div className="mb-4 w-full">
                        <label
                           className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="address"
                        >
                           Address
                        </label>
                        <input
                           type="text"
                           id="address"
                           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                           required
                        />
                     </div>
                  </div>

                  <div className="mb-4">
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           className="form-checkbox h-5 w-5 text-indigo-600"
                           checked={subscribe}
                           onChange={(e) => setSubscribe(e.target.checked)}
                        />
                        <span className="ml-2 text-gray-700">
                           {" "}
                           Please send me latest news and updates
                        </span>
                     </label>
                  </div>
                  <button
                     type="submit"
                     className="bg-[color:var(--primary-color)] hover:bg-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Reserve Now
                  </button>
               </form>
            </div>
         </div>
      </div>,
      document.getElementById("modal-root")
   );
};
export default ModalWindow;
