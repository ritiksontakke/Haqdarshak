import React, { useState } from 'react' 
import './numberOption.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NumberOption = () => {
  const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionSelect = (event) => {
      setSelectedOption(event.target.value);
    };
    const PreviousPage = () =>{
      navigate("/contact")
    }
    const NextPage = () =>{
      if(selectedOption === "yes"){
      navigate("/personalDetails") }
      else {
        navigate("/otp")
      }
   }
  
  return (
   <>
     <div className="background">
     
     <div className="container loginContainer">
     <button type="button" onClick={PreviousPage} className=" back-button " >
     🡰
           </button>
       <h3 className="font ">Do you want to proceed without OTP verification?</h3>

       <form className="form form-group m-3 form-container w-100 align-item-center justify-content-center">
         <div className="ui divider"></div>
         <div className="ui form">
           <div className="field">
             <div className="white w-80  d-flex  m-4 rounded-pill p-3 ">
             <input
               className=" inputOption me-5"
               type="radio"
               value="yes"
               required
               checked={selectedOption === "yes"}
               onChange={handleOptionSelect}
             />
             <label>Yes</label>
             </div>
             <div className=" white w-80 d-flex m-4 p-3 rounded-pill">
             <input
               className=" inputOption me-5"
               type="radio"
               value="no"
               required
               checked={selectedOption === "no"}
               onChange={handleOptionSelect}
             />
             <label>No I want to complete OTP verification</label>
             </div>
           </div>
           <p className="quat"> Proceed without OTP if you live in an area with low network connectivity. </p>

           <div className="text text-light">
           
               <button className="Next text-decoration-none" onClick={NextPage}>Next</button>
           </div>
         </div>
       </form>
     </div>
   </div>
  
   </>
  )
}

export default NumberOption