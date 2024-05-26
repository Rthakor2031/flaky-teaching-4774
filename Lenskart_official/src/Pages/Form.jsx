import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setEmailOrPhone(e.target.value);
    setIsValid(validateInput(e.target.value));
  };

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  return (
    <div className="screen-container">
      <div className="screen-slider">
        <div className="top-section">
          <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In" className="sign-in-image"/>
        </div>
        <div className="main-section">
          <div className="wrapper">
            <div>Sign In</div>
          </div>
          <div className="field-container">
            <div className="left-positioned"></div>
            <input
              placeholder="Mobile / Email"
              type="text"
              name="emailOrPhone"
              className="field-input"
              value={emailOrPhone}
              onChange={handleChange}
            />
            {!isValid && (
              <div className="subtext">Please enter a valid Email or Mobile Number</div>
            )}
          </div>
          <span className="main-container">
            <div tabIndex="0" id="whatsapp-updates" className="checkbox"></div>
            <label>
              <div className="flex-center">
                <span className="whatsapp-text">Get updates on Whatsapp</span>
                <img width="25" src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png" alt="Whatsapp"/>
              </div>
            </label>
          </span>
          <button
            id="sign-in-button"
            type="button"
            className="button-wrapper"
            disabled={!isValid || emailOrPhone === ''}
          >
            Sign In
          </button>
          <div className="spacer"></div>
          <div className="info-text">
            New member? <button className="edit-btn">Create an Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
