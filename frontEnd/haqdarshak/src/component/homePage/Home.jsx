import react from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate= useNavigate()

  const NextPage = () =>{
      navigate("/language")
   }
  return (
    <>
      <div className="homeImg">
      <div className="homeText">
            <h1 className='haqHind'>हकदर्शक</h1>
            <h2 className='haqEng'>Haqdarshak</h2>
            <p className="para">Getting benifits is now easy!</p>

            <div className="text text-light">
            <button className=" Next" onClick={NextPage}>Next</button></div>
      </div>
      </div>
    </>
  );
}

export default Home;
