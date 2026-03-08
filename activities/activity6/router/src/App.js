import React, { useState } from "react";
import {
 BrowserRouter,
 Routes,
 Route,
 Link
} from "react-router-dom";

import AboutThisSite from "./AboutThisSite";
import ContactUs from "./ContactUs";
import LoginPage from "./LoginPage";
import User from "./User";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";

const App = () => {

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleLogin = (from, navigate) => {
  setIsLoggedIn(true);
  navigate(from, { replace: true });
 };

 return (
  <>
   <BrowserRouter>

    <NavBar />

    <Routes>

     <Route path="/" element={<span></span>} />

     <Route
      path="/about"
      element={
       <PrivateRoute authorized={isLoggedIn}>
        <AboutThisSite />
       </PrivateRoute>
      }
     />

     <Route
      path="/contact"
      element={
       <PrivateRoute authorized={isLoggedIn}>
        <ContactUs />
       </PrivateRoute>
      }
     />

     <Route
      path="/login"
      element={<LoginPage onClick={handleLogin} />}
     />

     <Route
      path="/user/:username"
      element={<User />}
     />

    </Routes>

   </BrowserRouter>
  </>
 );
};

export default App;