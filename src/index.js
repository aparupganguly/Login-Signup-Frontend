import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Forgotpsd from './Components/Forgotpsd';
import Signup from './Components/Signup';
import Loginpage from './Components/Loginpage';
import Otpauth from './Components/Otpauth';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <Router>
      <Routes>
  
      <Route path ="/" element={<App/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      <Route path ="/otp" element={<Otpauth/>}/>
      <Route path ="/login" element={<Loginpage/>}/>
      <Route path ="/forgotpsd" element={<Forgotpsd/>}/>


      </Routes>


    </Router>

);

