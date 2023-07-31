import React from 'react'
import Hero from "../../src/components/Hero";
import BookingForm from "../../src/components/BookingForm";
import Services from "../../src/components/Services";
import RentalFleet from "../../src/components/RentalFleet";
import FAQ from "../../src/components/FAQ";
import Download from "../../src/components/Download";
const MainPage = () => {
  return (
    <div>
        
         <Hero />
         <div className="mt-10">
            <BookingForm idn="bookingForm" />
         </div>
         <Services />
         <RentalFleet />
         <FAQ />
         <Download />
    </div>
  )
}

export default MainPage