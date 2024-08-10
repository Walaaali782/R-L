import React, { useState, useEffect } from "react";
import axios from "axios";
import { Base } from "../Api"; // تأكد من مسار الـ API الصحيح

function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (token) {
      axios
        .get(`${Base}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserName(response.data.name);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        });
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2>Welcome, {userName}!</h2>
      </div>
    </div>
  );
}

export default Home;
