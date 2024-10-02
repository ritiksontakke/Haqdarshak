import React from "react";
import { useState, useEffect } from "react";
import "./location.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseUrl } from "../../../URL";


const Location = () => {

  const navigate = useNavigate();
  const initialValues = {
    district: "",
    state: "",
    pinCode: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(formValues);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const AddressUpdate = () =>{
    axios.post(`${baseUrl}address`,formValues)
 .then(res =>{
   alert(res.data.message)
  navigate("/contact")
 })
 .catch((error)=>{
  alert('Something went wrong!')
 })
}
const PreviousPage = () =>{
  navigate("/loginMethod")
  
}

  return (
    <>
      <div className="background ">
        <div className="container loginContainer" >
          <button
            type="button"
            className="back-button "
            onClick={PreviousPage}
          >
           🡰
          </button>
          <h3 className="font ">Where are you from ?</h3>

          <form onSubmit={handleSubmit}  className="form form-group m-3 form-container w-100 align-item-center justify-content-center">
            <div className="ui form">
              <div className="field">
                <div className="white w-80  m-3   ">
                  <label className="labelField">State</label>
                  <input
                    className=" inputAdd  text-decoration-none"
                    id="inputAdd"
                    type="text"
                    name="state"
                    required
                    value={formValues.state}
                    onChange={handleChange}
                  />
                </div>
                <div className=" white w-80  m-3  ">
                  <label className="labelField">Dictrict</label>
                  <input
                    className=" inputAdd"
                    type="text"
                    name="district"
                    required
                    value={formValues.district}
                    onChange={handleChange}
                  />
                </div>
                <div className=" white w-80   m-3 ">
                  <label className="labelField">Pin Code</label>
                  <input
                    className=" inputAdd "
                    type="number"
                    name="pinCode"
                    required
                    value={formValues.pinCode}
                    onChange={handleChange}
                  />
                </div>
               
              </div>
              <p className="quat"> This is used to give the information more accurate to your area.  </p>

              <div className="text text-light">
               
              <button className=" Next" onClick={AddressUpdate}>Next</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Location;
