import React, { useState, useEffect } from "react";
import bike1img from "../assets/Bikes/Honda 1.png";
import bike2img from "../assets/Bikes/Honda 2.png";
import bike3img from "../assets/Bikes/Honda 3.png";
import bike4img from "../assets/Bikes/Honda 4.png";
import bike5img from "../assets/Bikes/Honda 5.png";
import key from "../assets/key.png";
import Button from "./childComponents/Button";
import { Link } from "react-router-dom";

const bikeData = [
  {
    image: bike1img,
    model: "Honda CB500X",
    year: "2020",
    engine: "471cc",
    mileage: "25kmpl",
    fuelCapacity: "17.7L",
  },
  {
    image: bike2img,
    model: "BMW F 850 GS",
    year: "2020",
    engine: "853cc",
    mileage: "25kmpl",
    fuelCapacity: "15L",
  },
  {
    image: bike3img,
    model: "Triumph Tiger 1200",
    year: "2020",
    engine: "1215cc",
    mileage: "25kmpl",
    fuelCapacity: "20L",
  },
  {
    image: bike4img,
    model: "Suzuki V-Strom 650",
    year: "2020",
    engine: "645cc",
    mileage: "25kmpl",
    fuelCapacity: "20L",
  },
  {
    image: bike5img,
    model: "BMW R 1250 GS",
    year: "2020",
    engine: "1254cc",
    mileage: "25kmpl",
    fuelCapacity: "20L",
  },
];

const RentalFleet = () => {
  const preloadImages = () => {
    bikeData.forEach((bike) => {
      const img = new Image();
      img.src = bike.image;
    });
  };

  // Call the preloadImages function in the useEffect hook.
  useEffect(() => {
    preloadImages();
  }, []);

  const [selectedBike, setSelectedBike] = useState(bikeData[0]);

  const handleBikeSelection = (index) => {
    setSelectedBike(bikeData[index]);
  };

  return (
    <div className="flex flex-col p-10 mt-16 ">
      <div className="content mb-1">
        <h1 className="text-black text-2xl md:text-4xl text-center font-semibold mb-3">Vehicle Models</h1>
        <h1 className="text-black text-3xl md:text-5xl text-center font-bold mb-3">Our rental fleet</h1>
        <p className="mb-10 text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          <br /> adventure or business trip
        </p>
      </div>
      <div className="row1 flex flex-col lg:flex-row justify-between">
        <div className="bikenames">
          <ul className="">
            {bikeData.map((bike, index) => (
              <li
                key={index}
                className="mb-3"
                onClick={() => handleBikeSelection(index)}
              >
                <input
                  type="radio"
                  id={`hosting-${index + 1}`}
                  name="hosting"
                  value={`hosting-${index + 1}`}
                  className="hidden peer"
                  required
                />
                <label htmlFor={`hosting-${index + 1}`} className="buttonStyle">
                  <div className="w-full text-center text-lg font-semibold">
                    {bike.model}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="images justify-center flex">
          <img src={selectedBike.image} alt="" className="md:w-[500px] md:my-0 md:h-[400px] w-[300px] h-[200px] my-4" />
        </div>
        <div className="renttable w-full lg:w-1/4">
          <h1 className="bg-[color:var(--primary-color)] p-4 text-center text-black ">$50 / rent per day</h1>
          <table className="border-collapse border border-slate-400 w-full">
            <tbody className="border-solid border-black ">
              <tr>
                <td className="border border-r-black px-5 py-3  h-1">
                  Modal
                </td>
                <td className="border px-5 py-3 ">{selectedBike.model}</td>
              </tr>
              <tr>
                <td className="border border-r-black  px-5 py-3 ">
                  Engine
                </td>
                <td className="border px-5 py-3">{selectedBike.engine}</td>
              </tr>
              <tr>
                <td className="border border-r-black  px-5 py-3">
                  Year
                </td>
                <td className="border px-5 py-3">
                  {selectedBike.year}
                </td>
              </tr>
              <tr>
                <td className="border border-r-black  px-5 py-3">
                  Mileage
                </td>
                <td className="border px-5 py-3">
                  {selectedBike.mileage}
                </td>
              </tr>
              <tr>
                <td className="border border-r-black  px-5 py-3">
                  Fuel
                </td>
                <td className="border px-5 py-3">
                  {selectedBike.fuelCapacity}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <Link to="/">
              <Button text="RENT NOW " image={key} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
