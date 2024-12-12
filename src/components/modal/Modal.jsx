import React from 'react';
import './modal.css';
import logo from '../../images/logo.svg';
import GetStarted from '../getStarted/GetStarted';
import Login from '../login/Login';
import FeelingStuck from '../feelingStuck/FeelingStuck';
import SubmitProject from '../submitProject/SubmitProject';

const Modal = ({ content, onClose, setContent }) => {
  // Render content dynamically based on `content`
  const renderContent = () => {
    switch (content) {
      case 'register':
        return <GetStarted switchToLogin={() => setContent('login')} />;
      case 'login':
        return <Login switchToRegister={() => setContent('register')} />;
      case 'submitProject':
        return <SubmitProject />;
      case 'askQuery':
        return <FeelingStuck />;
      default:
        return null;
    }
  };

  return (
    <div className="modalContainer">
      <div className="modalOverlay" onClick={onClose}></div>
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
