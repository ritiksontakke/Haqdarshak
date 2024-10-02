import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../URL";


const NumberLogin = () => {
 
  const navigate = useNavigate();
  const initialValues = {
   phn: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      console.log(formValues);
    }
  }, [formValues, isSubmit]);

  const contactUpdate = () =>{
    axios.post(`${baseUrl}login`,formValues)
 .then(res =>{
   alert(res.data.message)
  navigate("/getStarted")
 })
 .catch((error)=>{
  alert('user not found')
 })
}
const PreviousPage = () =>{
  navigate("/loginMethod")
  
}
  return (
    <>
      <div className="background">
        <div className="container loginContainer">
          <button
            type="button"
            className="back-button "
            onClick={PreviousPage}
          >
            🡰
          </button>
          <h3 className="font ">What is your mobile Number ?</h3>

          <form
            onSubmit={handleSubmit}
            className="form form-group m-3 form-container w-100 align-item-center justify-content-center"
          >
            <div className="ui form">
              <div className="field">
                <div className="white w-80  m-4 ">
                  <input
                    className=" inputAdd  text-decoration-none"
                    type="text"
                    name="phn"
                    required
                    value={formValues.phn}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
              <p className="quat"> This is used to create an account in your name on Haqdarshak app. </p>

              <div className="text text-light">
              <button className=" Next " onClick={contactUpdate}>Next</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NumberLogin;
