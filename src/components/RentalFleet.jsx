import React from "react";
import bike1img from "../assets/Bikes/Honda 1.png";
import bike2img from "../assets/Bikes/Honda 2.png";
import bike3img from "../assets/Bikes/Honda 3.png";
import bike4img from "../assets/Bikes/Honda 4.png";
import bike5img from "../assets/Bikes/Honda 5.png";
import key from "../assets/key.png";
import { useState } from "react";
import Button from "./childComponents/Button";
const RentalFleet = () => {
   const [bike1, setbike1] = useState({
      bike1: true,
      Model: "Honda CB500X",
      Year: "2020",
      Engine: "471cc",
      mileage: "25kmpl",
      fuelCapacity: "17.7L",
   });
   const [bike2, setbike2] = useState({
      bike2: false,
      Model: "BMW F 850 GS",
      Year: "2020",
      Engine: "853cc",
      mileage: "25kmpl",
      fuelCapacity: "15L",
   });
   const [bike3, setbike3] = useState({
      bike3: false,
      Model: "Triumph Tiger 1200",
      Year: "2020",
      Engine: "1215cc",
      mileage: "25kmpl",
      fuelCapacity: "20L",
   });
   const [bike4, setbike4] = useState({
      bike4: false,
      Model: "Suzuki V-Strom 650",
      Year: "2020",
      Engine: "645cc",
      mileage: "25kmpl",
      fuelCapacity: "20L",
   });
   const [bike5, setbike5] = useState({
      bike5: false,
      Model: "BMW R 1250 GS",
      Year: "2020",
      Engine: "1254cc",
      mileage: "25kmpl",
      fuelCapacity: "20L",
   });
   let bike = bike1img;
   let bikeModel = bike1.Model;
   let bikeYear = bike1.Year;
   let bikeEngine = bike1.Engine;
   let bikeMileage = bike1.mileage;
   let bikeFuelCapacity = bike1.fuelCapacity;
   if (bike1.bike1) {
      bike = bike1img;
      bikeModel = bike1.Model;
      bikeYear = bike1.Year;
      bikeEngine = bike1.Engine;
      bikeMileage = bike1.mileage;
      bikeFuelCapacity = bike1.fuelCapacity;
   }
   if (bike2.bike2) {
      bike = bike2img;
      bikeModel = bike2.Model;
      bikeYear = bike2.Year;
      bikeEngine = bike2.Engine;
      bikeMileage = bike2.mileage;
      bikeFuelCapacity = bike2.fuelCapacity;
   }
   if (bike3.bike3) {
      bike = bike3img;
      bikeModel = bike3.Model;
      bikeYear = bike3.Year;
      bikeEngine = bike3.Engine;
      bikeMileage = bike3.mileage;
      bikeFuelCapacity = bike3.fuelCapacity;
   }
   if (bike4.bike4) {
      bike = bike4img;
      bikeModel = bike4.Model;
      bikeYear = bike4.Year;
      bikeEngine = bike4.Engine;
      bikeMileage = bike4.mileage;
      bikeFuelCapacity = bike4.fuelCapacity;
   }
   if (bike5.bike5) {
      bike = bike5img;
      bikeModel = bike5.Model;
      bikeYear = bike5.Year;
      bikeEngine = bike5.Engine;
      bikeMileage = bike5.mileage;
      bikeFuelCapacity = bike5.fuelCapacity;
   }

   function handleButton1(e) {
      setbike1(values=>({
         ...values,
         bike1:true,}))
      setbike2(values=>({
         ...values,
         bike2:false,}))
      setbike3(values=>({
         ...values,
         bike3:false,}))
      setbike4(values=>({
         ...values,
         bike4:false,}))
      setbike5(values=>({
         ...values,
         bike5:false,}))

   }
   function handleButton2() {
      setbike1(values=>({
         ...values,
         bike1:false,}))
      setbike2(values=>({
         ...values,
         bike2:true,}))
      setbike3(values=>({
         ...values,
         bike3:false,}))
      setbike4(values=>({
         ...values,
         bike4:false,}))
      setbike5(values=>({
         ...values,
         bike5:false,}))

   }
   function handleButton3() {
      setbike1(values=>({
         ...values,
         bike1:false,}))
      setbike2(values=>({
         ...values,
         bike2:false,}))
      setbike3(values=>({
         ...values,
         bike3:true,}))
      setbike4(values=>({
         ...values,
         bike4:false,}))
      setbike5(values=>({
         ...values,
         bike5:false,}))
   }
   function handleButton4() {
      setbike1(values=>({
         ...values,
         bike1:false,}))
      setbike2(values=>({
         ...values,
         bike2:false,}))
      setbike3(values=>({
         ...values,
         bike3:false,}))
      setbike4(values=>({
         ...values,
         bike4:true,}))
      setbike5(values=>({
         ...values,
         bike5:false,}))
   }
   function handleButton5() {
      setbike1(values=>({
         ...values,
         bike1:false,}))
      setbike2(values=>({
         ...values,
         bike2:false,}))
      setbike3(values=>({
         ...values,
         bike3:false,}))
      setbike4(values=>({
         ...values,
         bike4:false,}))
      setbike5(values=>({
         ...values,
         bike5:true,}))
   }
   return (
      <div className="flex flex-col p-10 mt-16 ">
         <div className="content mb-8 ">
            <h1 className="text-[30px] font-semibold">Vehicle Models</h1>
            <h1 className="text-[50px] font-bold mb-3">Our rental fleet</h1>
            <p className="mb-10">
               Choose from a variety of our amazing vehicles to rent for your
               next <br /> adventure or business trip
            </p>
         </div>
         <div className="row1 flex flex-row justify-between">
            <div className="bikenames">
               <ul class="">
                  <div>
                     <li className="mb-3" onClick={handleButton1}>
                        <input
                           type="radio"
                           id="hosting-1"
                           name="hosting"
                           value="hosting-1"
                           class="hidden peer"
                           required
                        />
                        <label for="hosting-1" className="buttonStyle">
                           <div class="w-full text-center text-lg font-semibold">
                              Honda CB500X{" "}
                           </div>
                        </label>
                     </li>
                  </div>

                  <li className="mb-3" onClick={handleButton2}>
                     <input
                        type="radio"
                        id="hosting-2"
                        name="hosting"
                        value="hosting-2"
                        class="hidden peer"
                     />
                     <label for="hosting-2" className="buttonStyle">
                        <div class="w-full text-lg font-semibold">
                           BMW F 850 GS{" "}
                        </div>
                     </label>
                  </li>
                  <li className="mb-3" onClick={handleButton3}>
                     <input
                        type="radio"
                        id="hosting-3"
                        name="hosting"
                        value="hosting-3"
                        class="hidden peer"
                        required
                     />
                     <label for="hosting-3" className="buttonStyle">
                        <div class="w-full text-center text-lg font-semibold">
                           Triumph Tiger 1200{" "}
                        </div>
                     </label>
                  </li>
                  <li className="mb-3" onClick={handleButton4}>
                     <input
                        type="radio"
                        id="hosting-4"
                        name="hosting"
                        value="hosting-4"
                        class="hidden peer"
                        required
                     />
                     <label for="hosting-4" className="buttonStyle">
                        <div class="w-full text-center text-lg font-semibold">
                           Suzuki V-Strom 650{" "}
                        </div>
                     </label>
                  </li>
                  <li className="mb-3" onClick={handleButton5}>
                     <input
                        type="radio"
                        id="hosting-5"
                        name="hosting"
                        value="hosting-5"
                        class="hidden peer"
                        required
                     />
                     <label for="hosting-5" className="buttonStyle">
                        <div class="w-full text-center text-lg font-semibold">
                           BMW R 1250 GS{" "}
                        </div>
                     </label>
                  </li>
               </ul>
            </div>
            <div className="images">
               <img src={bike} alt="" className="w-[500px] h-[400px]" />
            </div>
            <div className="renttable ">
               <h1>$50 / rent per day</h1>
               <table class="border-collapse border border-slate-400 ">
                  <tbody className="border-solid border-black ">
                     <tr>
                        <td className="border border-r-black px-5 py-3 w-[100px]">
                          Modal
                        </td>
                        <td className="border px-5 py-3 w-[150px]">{bikeModel}</td>
                     </tr>
                     <tr>
                        <td className="border border-r-black  px-5 py-3 ">
                           Engine
                        </td>
                        <td className="border px-5 py-3">{bikeEngine}</td>
                     </tr>
                     <tr>
                        <td className="border border-r-black  px-5 py-3">
                           Year
                        </td>
                        <td className="border px-5 py-3">
                           {bikeYear}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-r-black  px-5 py-3">
                           Mileage
                        </td>
                        <td className="border px-5 py-3">
                           {bikeMileage}
                        </td>
                     </tr>
                     <tr>
                        <td className="border border-r-black  px-5 py-3">
                           Fuel
                        </td>
                        <td className="border px-5 py-3">
                           {bikeFuelCapacity}
                        </td>
                     </tr>
                  </tbody>
               </table>
               <Button text="RENT NOW " image={key} />
            </div>
         </div>
      </div>
   );
};

export default RentalFleet;
