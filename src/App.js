import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Forgotpsd from "./Components/Forgotpsd";
import Signup from "./Components/Signup";
import Loginpage from "./Components/Loginpage";
import Otpauth from "./Components/Otpauth";
import { Link } from "react-router-dom";

import {FaFacebook,FaGoogle} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {
  IconButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url("https://data.1freewallpapers.com/detail/plant-leaves-dark.jpg")`,
        }}
      >
        <div className="App">
          <p className="sign-text">Sign Up</p>
          <FormControl>
            <FormLabel className ="fl" htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
           <br>
           </br>
            <FormLabel className="fl2" htmlFor="psd">Password</FormLabel>
            <Input id="psd" type="psd" />
        
          </FormControl>
            <button className="btn-primary">Sign Up</button>
            <br></br>
            <p className="or" align="center">OR</p>
            <IconButton isRound="true" className="glg-btn" size="lg" icon={<FaGoogle />}/>
            <IconButton isRound="true" className="fb-btn" size="lg" icon={<FaFacebook />}/>
            <IconButton isRound="true" className="li-btn" size="lg" icon={<ImLinkedin />}/>

            <Link className="login-link" to ="/login">Already A User? Login!</Link>
        </div>
      </div>
    </>
  );
}

export default App;
