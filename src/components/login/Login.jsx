import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import Popup from '../popup/Popup'; // Import the Popup component

const Login = ({ switchToRegister, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setError(''); // Reset error state

    try {
      const response = await axios.post('https://backend-newton-capstone-eval.onrender.com/User/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Show success message
        setPopupMessage('Login Successful!');
        setShowPopup(true);

        // Close the modal and redirect to homepage after a short delay
        setTimeout(() => {
          onClose(); // Close the modal
          window.location.href = '/'; // Redirect to homepage
        }, 2000); // Delay to show the success message
      }
    } catch (error) {
      setPopupMessage('Invalid credentials, please try again!');
      setShowPopup(true);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <>
      <p className="modalHeader">Welcome Back</p>
      <p className="modalSubHeader">
        Don't have an account? 
        <a href="#" onClick={(e) => { e.preventDefault(); switchToRegister(); }} className="modalSubHeaderLink">
          Register
        </a>
      </p>
      <form onSubmit={handleSubmit} className="modalFormContainer">
        <label htmlFor="modalEmailContainer" className="modalEmailLabel">Email</label>
        <input
          type="email"
          id="modalEmailContainer"
          className="modalEmailContainer"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="modalPasswordContainer" className="modalPasswordLabel">Password</label>
        <input
          type="password"
          id="modalPasswordContainer"
          className="modalPasswordContainer"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       
        <button type="submit" className="modalSubmitButton" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>

        {error && <p className="errorMessage">{error}</p>} {/* Display error message */}
      </form>

      {/* Show the popup for success or error */}
      {showPopup && <Popup message={popupMessage} />}
    </>
  );
};

export default Login;
