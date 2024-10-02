import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();


  const NextPage = () => {
    navigate("/getStarted2");
  };
  return (
    <>
      <div className="background">
        <div className="container loginContainer">
         
          <div className="welcome1">
            <h3 className=" h3  ">Welcome to</h3>
            <h1 className="h1">हकदर्शक</h1>
            <h2 className="h2">Haqdarshak</h2>

            <p className="para">Your profile has been created successfully!</p>
          </div>
          <div className="text text-light">
              <button type="submit" onClick={NextPage} style={{background:"white"}} className="Next text-decoration-none  text-dark"> Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
