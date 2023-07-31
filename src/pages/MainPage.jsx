import React from 'react'
import Navbar from "../../src/components/Navbar";
import Hero from "../../src/components/Hero";
import BookingForm from "../../src/components/BookingForm";
import Services from "../../src/components/Services";
import RentalFleet from "../../src/components/RentalFleet";
import FAQ from "../../src/components/FAQ";
import Download from "../../src/components/Download";
import Footer from "../../src/components/Footer";
const MainPage = () => {
  return (
    <div>
        <Navbar />
         <Hero />
         <div className="mt-10">
            <BookingForm idn="bookingForm" />
         </div>
         <Services />
         <RentalFleet />
         <FAQ />
         <Download />
         <Footer/>
    </div>
  )
}

export default MainPage