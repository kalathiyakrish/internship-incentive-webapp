import React, { useState } from "react";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import logo from '../Asset/logo2.png';

import '../CSS/LoginPage.css';

const MainPage = () => {
  const emailid = "kalathiya2007@gmail.com";
  const pass = "Admin@123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== emailid) {
      alert("Incorrect email or password.");
    }
    if (password !== pass) {
      alert("Incorrect email or password.");
    }

    if (email === emailid && password === pass) {
      window.location.href = "/select";
    }
  };

  return (
    <div className='LoginForm'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <img src={logo} alt="ikisha logo" />
          <hr />
          <label>Enter Email_Id: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email_Id"
            required
          />
          <hr />

          <label>Enter Password: </label>
          <div className="PasswordInputWrapper">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            {showPassword ? (
              <IoEye
                onClick={() => setShowPassword(!showPassword)}
                className="Open_eye"
              />
            ) : (
              <IoEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="Close"
              />
            )}
          </div>

          <div className="LoginPage_Buttons">
            <button type="submit">SUBMIT</button>
            <button type="reset">RESRT</button>
          </div>
        </form>
        
    </div>
  )
}

export default MainPage;
