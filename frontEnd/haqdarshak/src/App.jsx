import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Layout from './component/layout/Layout'
import Location from './component/Location/Location'
import Number from './component/contact/Number'
import NumberOption from './component/contactOption/NumberOption'
import PersonalDetailsForm from './component/Personal details/PersonalDetailForm'
import Welcome from './component/welcome/Welcome'
import Welcome2 from './component/welcome2/Welcome2'
import Language from './component/language/language'
import Sign from './component/accountMethodPrefered/accountMethod'
import Home from './component/homePage/Home'
import Yojana from './component/yojanaMethod/Yojana'
import Otp from './component/OTP/opt'
import NumberLogin from './component/Login with Number/numberLogin'


function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route  path="/" element={ <Home /> } />
          <Route  path="/loginMethod" element={ <Sign /> } />
          <Route  path="/login" element={ <NumberLogin /> } />
          <Route  path="/Yojana" element={ <Yojana /> } />
          <Route  path="/otp" element={ <Otp /> } />
          <Route  path="/language" element={ <Language /> } />
          <Route path="/Location" element = {<Location />} />
          <Route path="/contact" element = {<Number />} />
          <Route path="/otpOption" element = {<NumberOption />} />
          <Route path="/personalDetails" element = {<PersonalDetailsForm />} />
          <Route path="/getStarted" element = {<Welcome />} />
          <Route path="/getStarted2" element = {<Welcome2 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
