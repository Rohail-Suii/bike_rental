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
const App = () => {
   return (
      <Router>
         <Navbar />
         <main>
            <Routes>
               <Route path="/" element={<MainPage />} exact></Route>
               <Route path="/about" element={<AboutPage />} exact></Route>

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
