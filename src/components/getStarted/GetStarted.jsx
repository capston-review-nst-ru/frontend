import React from 'react';
import './GetStarted.css';

const GetStarted = ({ switchToLogin }) => {
  return (
   <>
    <p className="modalHeader">Get Started</p>
    <p className="modalSubHeader">Already have an account? 
    <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }} className="modalSubHeaderLink">
          Login
        </a>
         </p>
    <form action="" className="modalFormContainer">
        <label htmlFor="modalNameContainer" className="modalNameLabel">Name</label>
        <input type="text" id="modalNameContainer" className="modalNameContainer" required />

        <label htmlFor="modalEmailContainer" className="modalEmailLabel">Email</label>
        <input type="email" id="modalEmailContainer" className="modalEmailContainer" required />

        <label htmlFor="modalPasswordContainer" className="modalPasswordLabel">Password</label>
        <input type="password" id="modalPasswordContainer"  className="modalPasswordContainer" required />

        <label htmlFor="modalOptionContainer" className="modalOptionLabel">Mentor</label>
        <select name="modelOptions" id="modelOptionContainer" className="modelOptions" required>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
        </select>

        <label htmlFor="modalLinkContainer" className="modalLinkLabel">Figma Link</label>
        <input type="url" name="modalLinkContainer" id="modalLinkContainer" className="modalLinkContainer" required />
        <input type="submit" value="Send OTP" className="modalSubmitButton" />
    </form>
   </>
  )
}

export default GetStarted;