import { useState, useEffect } from "react";
import "./personalDetailsForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../URL";

function PersonalDetailForm() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    dob: "",
    gender: "",
    age: ",",
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
    // console.log(formErrors);
    if (isSubmit) {
      console.log(formValues);
    }
  }, [formValues, isSubmit]);

  const signup = () => {
    axios.post(`${baseUrl}signup`, formValues).then((res) => {
      alert(res.data.message);
      navigate("/getStarted");
    });
  };
  const PreviousPage = () =>{
    navigate("/otpOption")
    
  }
  return (
    <>
      <div className="background">
        <div className="container loginContainer">
          {isSubmit ? (
            <div className="ui message text-success fs-2">
              <h5 className="fs-3"> Signed Up successfully</h5>
            </div>
          ) : (
            console.log("Enter Details" + formValues)
          )}
          <button
            type="button"
            className="back-button "
            onClick={PreviousPage}
          >
            🡰
          </button>
          <h3 className="font ">Personal Details</h3>

          <form
            onSubmit={handleSubmit}
            className="form form-details form-group rounded-3 m-3 form-container w-100 align-item-center justify-content-center"
          >
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label className="labelField">Name</label>
                <div className="white w-80  m-4   ">
                  <input
                    className=" inputAdd  text-decoration-none"
                    type="text"
                    name="name"
                    required
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <hr />
                <label>Gender</label>
                <div className=" gender  w-80  m-4  ">
                  <label className="labelField">
                    <input
                      className="inputGender "
                      type="radio"
                      name="gender"
                      value="male"
                      required
                      checked={formValues.gender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      className="inputGender "
                      type="radio"
                      name="gender"
                      value="female"
                      required
                      checked={formValues.gender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      className="inputGender  "
                      type="radio"
                      name="gender"
                      value="other"
                      required
                      checked={formValues.gender === "other"}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
                <hr />
                <label className="labelField">Date of Birth</label>
                <div className="dobOption d-flex">
                  <div className="  ">
                    <input
                      className=" inputAdd "
                      type="date"
                      name="dob"
                      value={formValues.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <span className="orSpan">OR</span>
                  <div className=" age">
                    <input
                      className=" inputAdd "
                      type="number"
                      name="age"
                      value={formValues.age}
                      onChange={handleChange}
                      placeholder="AGE"
                    />
                  </div>
                </div>
              </div>
              <p className="quat"> This information helps us suggest schemes that are right for you. </p>

              <div className="text text-light">
                <button className="Next" onClick={signup}>
                  Next
                </button>
                <p className="terms"> By creating an account, I agreed to Haqdarshak's <a href="">Terms of Service </a> & <a href="">Privacy Policy</a>  </p>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDetailForm;
