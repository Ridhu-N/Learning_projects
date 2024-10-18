import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div className="container" style={{marginTop:'20px',justifyContent:'start'}}>
      <div className="row">
        <div className="col-2">
          <img src="" alt="logo" />
        </div>
        <div className="col-2">
          <Link to="/" style={{ textDecoration: "none",color: "#3A1212" ,borderBottom:'3px solid #FF2625'}}>
            Home
          </Link>
        </div>
        <div className="col-2">
          {" "}
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "black" }}
          >
            Exercises
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
