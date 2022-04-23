
import { Box } from "@chakra-ui/react";
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

function Forgotpsd() {
  return (
    <>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url("https://data.1freewallpapers.com/detail/plant-leaves-dark.jpg")`,
        }}
      >
        <div className="App2">
          <p className="sign-text">Forgot Password?</p>
          <FormControl>
            <FormLabel className ="fl" htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          
        
          </FormControl>
          <div className="btn-primary3">

            <Link to ="/otp" className="btn-primary2">Send OTP</Link>
          </div>
          
           

         
        </div>
      </div>
    </>
  );
}

export default Forgotpsd;
