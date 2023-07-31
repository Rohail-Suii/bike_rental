import React, { Fragment } from "react";
import {
   BrowserRouter as Router,
   Route,
   Navigate,
   Routes,
} from "react-router-dom";

import MainPage from "./pages/MainPage";

const App = () => {
   return (
      <Router>
         <MainPage />
         <main>
            <Routes>
               {/* <Route path="/" element={<MainPage />} exact></Route> */}

               {/* <Route
                  path="/:userId/places"
                  element={<UserPlaces />}
                  exact
               ></Route>
               <Route path="/places/new" element={<NewPlace />} exact></Route> */}
            </Routes>
         </main>
      </Router>
   );
};

export default App;
