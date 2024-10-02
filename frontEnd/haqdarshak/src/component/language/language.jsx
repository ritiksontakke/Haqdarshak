
import React from "react";
import { useState, useEffect } from "react";
import "./language.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";


const Language = () => {
  const navigate= useNavigate()

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const NextPage = () =>{
    navigate("/loginMethod")
    
 }
 
 const PreviousPage = () =>{
  navigate("/")
}


  return (
    <>
      <div className="background">
     
        <div className="container loginContainer">
        <button type="button" onClick={PreviousPage} className="back-button  " >
        🡰
              </button>
          <h3 className="font ">Which language do you prefer ?</h3>

          <form className="form form-group m-3 form-container  align-item-center justify-content-center">
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <div className="white w-80  d-flex  m-4 rounded-pill p-3 ">
                <input
                  className=" input w-25 me-5"
                  type="radio"
                  value="English"
                  required
                  checked={selectedLanguage === "English"}
                  onChange={handleLanguageSelect}
                />
                <label>English:</label>
                </div>
                <div className=" white w-80 d-flex m-4 p-3 rounded-pill">
                <input
                  className=" input w-25 me-5"
                  type="radio"
                  value="Hindi"
                  required
                  checked={selectedLanguage === "Hindi"}
                  onChange={handleLanguageSelect}
                />
                <label>हिन्दी</label>
                </div>
                <div className=" white w-80 d-flex p-3 m-4 rounded-pill">
                <input
                  className=" input w-25 me-5"
                  type="radio"
                  value="urdu"
                  required
                  checked={selectedLanguage === "urdu"}
                  onChange={handleLanguageSelect}
                />
                <label>Urdu:</label>
                </div>
              </div>
              <p className="quat"> This allows you to experience the app in a language of your preference. </p>
              <div className="text text-light">
                  <button className="Next text-decoration-none" onClick={NextPage}>Next</button>
                {/* <Link to="/signUp">
                </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Language;
