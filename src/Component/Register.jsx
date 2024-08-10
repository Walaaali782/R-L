import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base } from "../Api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${Base}/users/signup`, formData)
      .then((res) => {
        console.log(res);
        if (res.data.message === "success") {
          navigate("/login"); // Redirect to login page on successful registration
        }
      })
      .catch((err) => console.log(err));
  };

  const handleButtonClick = () => {
    navigate("/login"); // Navigate to login page on button click
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button 
            type="submit" 
            className="reg btn btn-outline-info"
            onClick={handleButtonClick} // Attach the onClick handler here
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
