import React from "react";
import { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodSelect = (event) => {
    setSelectedMethod(event.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(e.target.vaue==phn){
      navigate("/Location");
    }
  }
  const NextPage = () => {
    if(selectedMethod === "card" ){
      navigate("/Yojana")
    } else if(selectedMethod ==="register"){
      navigate("/Location");
    }else{
      navigate('/login')
    }
  };

  const PreviousPage = () => {
    navigate("/language");
  };

  return (
    <>
      <div className="background">
        <div className="container loginContainer">
          <button
            type="button"
            onClick={PreviousPage}
            className=" back-button "
          >
            🡰
          </button>
          <h3 className="font ">How do you want to login ?</h3>

          <form onSubmit={handleSubmit} className="form form-group m-3 form-container w-100 align-item-center justify-content-center">
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <div className="white w-80  d-flex  m-3 p-3 ">
                  <input
                    className=" input w-25 "
                    type="radio"
                    value="register"
                    required
                    checked={selectedMethod === "register"}
                    onChange={handleMethodSelect}
                  />
                  <label>Register me as a new user</label>
                </div>
                <div className=" white w-80 d-flex m-3 p-3 ">
                  <input
                    className=" input w-25 "
                    type="radio"
                    value="phn"
                    required
                    checked={selectedMethod === "phn"}
                    onChange={handleMethodSelect}
                  />
                  <label>Use my Phone Number</label>
                </div>
                <div className=" white w-80 d-flex p-3 m-3 ">
                  <input
                    className=" input w-25 "
                    type="radio"
                    value="card"
                    required
                    checked={selectedMethod === "card"}
                    onChange={handleMethodSelect}
                  />
                  <label>Use my Yojana Card</label>
                </div>
              </div>
              <div className="text text-light">
                <button
                  className="Next text-decoration-none"
                  onClick={NextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign;
