import React, { useState } from "react";
import "./welcome2.css";
import { useNavigate } from "react-router-dom";


const Welcome2 = ({ label }) => {
  const navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <>
      <div className="background">
        <div className="container loginContainer">
        
          <div className="welcome2">
            <h1 className="h1">हकदर्शक</h1>
            <h2 className="h2">Haqdarshak</h2>
          </div>
          <div className="welcome2">
            <div className="hero    m-3 rounded-pill p-2 ">
              <input
                className="welcomeCheckbox"
                type="checkbox"
                name="checkbox1"
                checked={checkedItems.checkbox1}
                onChange={handleCheckboxChange}
              />
              <label className="benifits">
                Find the benefits that are right for you or your business
              </label>
            </div>
            <div className="hero   m-3 p-2 rounded-pill">
              <input
                className="welcomeCheckbox"
                type="checkbox"
                name="checkbox2"
                checked={checkedItems.checkbox2}
                onChange={handleCheckboxChange}
              />
              <label className="benifits">Learn everything you need to apply</label>
            </div>
            <div className=" hero   p-2 m-3 rounded-pill">
              <input
                className="welcomeCheckbox"
                type="checkbox"
                name="checkbox3"
                checked={checkedItems.checkbox3}
                onChange={handleCheckboxChange}
              />
              <label className="benifits">Save schemes and track your bookings</label>
            </div>
          </div>
          <div className="text text-light">
            <div>
              <button className="getStarted">Get Started!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome2;
