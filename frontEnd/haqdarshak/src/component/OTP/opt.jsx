import React, { useEffect, useRef, useState } from "react";
import "./otp.css";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  const PreviousPage = () => {
    navigate("/contact");
  };
  const NextPage = () => {
    navigate("/personalDetails");
  };

  return (
    <>
      <div className="background" style={{height:"768px"}}>
        <div className="container loginContainer">
          <button
            type="button"
            onClick={PreviousPage}
            className=" back-button "
          >
            🡰
          </button>
          <h3 className="font ">
             What is the OTP?
          </h3>

          <form className="form form-group  form-container w-100 align-item-center justify-content-center">
            <div className="ui form">
              <div className="otpBody text text-light">
                <input
                  className=" otpInput  text-decoration-none"
                  required
                  type="text"
                />
                <input
                  className=" otpInput  text-decoration-none"
                  type="text"
                  required
                />
                <input
                  className=" otpInput  text-decoration-none"
                  type="text"
                  required
                />
                <input
                  className=" otpInput  text-decoration-none"
                  type="text"
                  required
                />
              </div>
                <p className="otpPara" style={{textAlignl:"center"}}>We have sent an OTP your monile number</p>
              <button className="Next text-decoration-none" onClick={NextPage}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
