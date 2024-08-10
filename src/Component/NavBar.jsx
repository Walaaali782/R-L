import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor:"rgb(0 0 0 / 74%)"}}>
        <Link className="home p-4 white" to="home">
          Register/Login
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" px-4 collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
       
          
          </ul>
    
          <div>
          <Link to="register" className="reg btn btn-outline-info mx-2">Register</Link>
          <Link to="login" className="btn btn-outline-info">Login</Link>
         </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;