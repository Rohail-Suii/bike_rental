import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import RentalFleet from "./components/RentalFleet";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Hero />
         <div className="mt-10">
            <BookingForm idn="bookingForm" />
         </div>
         <Services />
         <RentalFleet />
      </div>
   );
}

export default App;
