import axios from "axios";
import React, { useState } from "react";
import { Base } from "../Api";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate(); // Initializing useNavigate hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${Base}/users/signin`, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "login") {
          localStorage.setItem("userToken", response.data.token);
          localStorage.setItem("userName", response.data.name); // Store user name
          props.getUser();
          navigate("/home"); // Navigate to the Home page on successful login
        }
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
      });
  };

  // Add onClick handler for the button to navigate directly
  const handleLoginClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="reg btn btn-outline-info"
            onClick={handleLoginClick} // Attach the onClick handler to navigate to Home
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
