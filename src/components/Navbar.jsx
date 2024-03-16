import React from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="pages">
        <Link to="">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="pages">
        <Link to="/employee">
          <button>Employee</button>
        </Link>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
