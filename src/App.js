import React, { Fragment } from "react";
import {
   BrowserRouter as Router,
   Route,
   Navigate,
   Routes,
   Link ,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bikes from "./pages/Bikes";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import BookingForm from "./components/BookingForm";
const App = () => {
   return (
      <Router>
         <Navbar />
         <main>
            <Routes>
               <Route path="/" element={<MainPage />} exact></Route>
               <Route path="/about" element={<AboutPage />} exact></Route>
               <Route path="/bikes" element={<Bikes />} exact></Route>
               <Route path="/contact" element={<ContactPage />} exact></Route>
               <Route path="/team" element={<TeamPage />} exact></Route>
               <Route path="/bookingForm" element={<BookingForm/>} exact> </Route>

               {/* <Route
                  path="/:userId/places"
                  element={<UserPlaces />}
                  exact
               ></Route>
               <Route path="/places/new" element={<NewPlace />} exact></Route> */}
            </Routes>
         </main>
         <Footer />
      </Router>
   );
};

export default App;
