import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

 return (
  <nav>
   <Link to="/about">About</Link> |{" "}
   <Link to="/contact">Contact Us</Link> |{" "}
   <Link to="/user/Ned">User</Link> |{" "}
   <Link to="/login">Login</Link>
  </nav>
 );
};

export default NavBar;