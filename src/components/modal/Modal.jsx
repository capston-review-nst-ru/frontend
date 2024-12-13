import React, { useState } from 'react';
import './modal.css';
import logo from '../../images/logo.svg';
import GetStarted from '../getStarted/GetStarted';
import Login from '../login/Login';
import FeelingStuck from '../feelingStuck/FeelingStuck';
import SubmitProject from '../submitProject/SubmitProject';
import OtpVerification from '../otpVerification/OtpVerification';
import { useNavigate } from 'react-router-dom';

const Modal = ({ content, onClose, setContent, setIsLoggedIn, setUserInfo, updateLoginState }) => {
  const mentors = ["Vishal Sharma", "Rishabh Sharma", "Rashmi Kumari", "Jai Gupta", "Swati Priya", "Shivam Gupta", "Narendra Kumar", "Aryan Singhal", "Rahul Kumar", "Nischal Gupta", "Ajay", "Kartik Katiyar", "Neeraj Rawat", "Uttam Kumar Mahato"];

  const navigate = useNavigate()

  const [formdata,setformdata] = useState({mentorName: mentors[0]})
  // Render content dynamically based on `content`
  const renderContent = () => {
    switch (content) {
      case 'register':
  return (
    <GetStarted 
      switchToOtp={() => setContent('switchOTP')} 
      setFormData={setformdata} 
      formData={formdata} 
      switchToLogin={() => setContent('login')} 
      onClose={onClose} 
    />
  );

      case 'login':
        return <Login switchToRegister={() => setContent('register')} onClose={onClose} updateLoginState={updateLoginState} />;
      case 'submitProject':
        return <SubmitProject />;
      case 'askQuery':
        return <FeelingStuck />;
      case 'switchOTP':
        return <OtpVerification onClose={onClose} formData={formdata} />;

      default:
        return null;
    }
  };

  return (
    <div className="modalContainer">
      <div className="modalOverlay" onClick={()=>{onClose()}}></div>
      <div className="modal">
        <div className="firstCard">
          <img src={logo} alt="Logo" />
          <button onClick={onClose} className="closeButton">&times;</button>
        </div>
        <div className="modalContentContainer">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
