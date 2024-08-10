
import React, { Component, useState } from "react";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
import './App.css';


 function App () {

  const [user, setUser] = useState(null)
  
  function getUserData(){
    let encodedToken = localStorage.getItem("userToken");
      let decodedToke= jwtDecode(encodedToken);
      setUser(decodedToke)
      console.log(decodedToke);
  }


    return (
      <div>

      

       <NavBar/>

        <div className="contianer ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
      

            <Route path="register" element={<Register/>}></Route>
            <Route path="login" element={ <Login getUser={getUserData}/>}></Route>

           
          </Routes>
        </div>

<Footer />

      </div>
    );
  }

  export default App;
