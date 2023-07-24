import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './childComponents/Button';
import search from '../assets/search.svg';
import ModalWindow from './childComponents/RegisterationModal';

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

const BookingForm = () => {
  const { date: pickupdate, showCalendar: showCalendar1, handleCalendarToggle: handleCalendarToggle1, handleDateChange: handlePickupdateChange } = useDatePicker();
  const { date: dropoffdate, showCalendar: showCalendar2, handleCalendarToggle: handleCalendarToggle2, handleDateChange: handleDropoffdateChange } = useDatePicker();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="mt-10 mb-10 border-t-4 mx-6 md:mx-12 shadow-2xl p-5">
      <div>
        <h1 className="text-center md:text-left mt-7 text-black font-bold text-xl">
          Book a bike
        </h1>
      </div>
      <br />
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
            id={1}
            name="bike"
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-400"
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
            id={3}
            name="Drop-of"
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
              value={pickupdate ? pickupdate.toDateString() : ''}
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
                inline
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="pickupdate"
            className="block text-left text-black font-semibold mb-2"
          >
            Drop-off<span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={dropoffdate ? dropoffdate.toDateString() : ''}
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
        <div className="mt-4 bg-black h-10">
          <Button text="Search" image={search} onClick={openModal} />
        </div>
      </div>

      {/* Create a modal window */}
      <ModalWindow isOpen={modalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </ModalWindow>
    </div>
  );
};

export default BookingForm;
