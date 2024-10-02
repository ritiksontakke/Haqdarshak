import React from "react";
import { useState, useEffect, useRef } from "react";
import "./yojana.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Yojana = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const PreviousPage = () => {
    navigate("/loginMethod");
  };
  const NextPage = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="yojanaBackground">
        <div className="container loginContainer">
          <button
            type="button"
            className="  back-button  "
            onClick={PreviousPage}
          >
            🡰
          </button>
          <h3 className="yojanaFont ">Scan QR from Yojana Card to login</h3>

          <div className="qrImg">
            <img
              className="img"
              src="https://www.dummies.com/wp-content/uploads/324172.image0.jpg"
              alt=""
            />
          </div>

          <div className="white bg-light w-80  d-flex  m-2  onClick={handelImageClicked}">
            <label className="imgLable">
              Upload Image from Gallery{" "}
              <input
                type="file"
                placeholder="choose image"
                style={{ visibility: "hidden" }}
              />
            </label>
          </div>

          <form className=" orNumber form-group rounded-3 m-3 form-container w-100 align-item-center justify-content-center">
            <div className="ui ">
              <div className="field">
                <h5 className="orYojana">OR</h5>
                <div className="text text-light">
                  <button className=" NextYojana " onClick={NextPage}>
                    Use Phone Number
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Yojana;
