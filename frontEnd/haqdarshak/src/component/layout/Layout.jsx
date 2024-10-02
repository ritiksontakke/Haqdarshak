import React from "react";
import { useState } from "react";
import "./layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Layout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <div className="app">
        <button className="back">back</button>
        <div className="content">
          <h2>Which language do you prefer?</h2>
        </div>
        <div className="white-box">
          <h2>Select a Language</h2>
          <div className="input">
            <label>
              <input
                type="radio"
                value="English"
                checked={selectedLanguage === "English"}
                onChange={handleLanguageSelect}
              />
              <span className="language">English</span>
            </label>
            <label>
              <input
                type="radio"
                value="Spanish"
                checked={selectedLanguage === "Spanish"}
                onChange={handleLanguageSelect}
              />
              <span className="language">Hindu</span>
            </label>
            <label>
              <input
                type="radio"
                value="French"
                checked={selectedLanguage === "French"}
                onChange={handleLanguageSelect}
              />
              <span className="language">Urdu</span>
            </label>
          </div>
          <div>Selected Language: {selectedLanguage || "None"}</div>
          <div>
           <Link to='/signUp'>click me</Link>
            
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
