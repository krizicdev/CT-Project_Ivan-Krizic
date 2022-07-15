import React from "react";
import "./style/Navbar.css";


const Navbar = () => {
  return (
    <div className="sidebar">
      <a className="a" href="/contacts" class="">
        Contacts
      </a>
      <a className="a" href="http://localhost:3000/" class="">
        My Profile
      </a>
      <a className="a" href="http://localhost:3000/" class="">
        Settings
      </a>


    </div>
  );
};

export default Navbar;
