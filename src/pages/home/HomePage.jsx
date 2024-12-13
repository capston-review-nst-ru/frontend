import React, { useState, useEffect } from 'react';
import './homePage.css';
import Nabvar from '../../components/navbar/Nabvar';
import logo from '../../images/logo.svg';
import logo2 from '../../images/logo 2.svg';
import Frame from '../../images/Frame.svg';
import Group from '../../images/Group.svg';
import github from '../../images/github.svg';
import Modal from '../../components/modal/Modal';
import axios from 'axios';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [countdown, setCountdown] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  const updateLoginState = (userName) => {
    setUserInfo(userName); // Set the user's name
    setIsLoggedIn(true); // Update logged-in state
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('onclose called');
    setIsModalOpen(false);
    setModalContent('');
  };

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      try {
        const response = await axios.get('https://backend-newton-capstone-eval.onrender.com/User/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.user.name);
        setUserInfo(response.data.user.name); // Set user info from the API
        setIsLoggedIn(true); // User is logged in
      } catch (error) {
        console.error('Error fetching user info', error);
        setIsLoggedIn(false);
      }
    }
    setIsLoading(false); // Set loading to false after API call
  };

  useEffect(() => {
    fetchUserInfo(); // Check if the user is logged in when the page loads
  }, []);

  useEffect(() => {
    const targetDate = new Date('2024-12-13T18:00:00'); // Target date and time (13th Dec 2024, 6:00 PM)

    const updateCountdown = () => {
      const now = new Date();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        setCountdown('Expired'); // If the countdown reaches 0
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      setCountdown(`${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`);
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Modal Component */}
      {isModalOpen && (
        <Modal
        content={modalContent}
        onClose={closeModal}
        setContent={setModalContent}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        updateLoginState={updateLoginState} // Pass the callback
      />
      
      )}

      <div className="homeMainContainer">
        <div className="circle"></div>
        <div className="homePageContentContainer">
          {isLoading ? ( // Display loader while loading
            <div className="loader">Loading...</div>
          ) : (
            <div className="cardContainer">
              <div className="topRow">
                <div className="firstCard">
                  <img src={logo} alt="" />
                  {!isLoggedIn ? (
                    <>
                      <p onClick={() => openModal('register')}>Register</p>
                      <p onClick={() => openModal('login')}>Login</p>
                    </>
                  ) : (
                    <p>Hello, {userInfo}</p> // Display user's name after login
                  )}
                  <p
                    onClick={() => isLoggedIn && openModal('submitProject')}
                    className={!isLoggedIn ? 'disabled' : ''}
                  >
                    Submit Project
                  </p>
                  <p
                    onClick={() => isLoggedIn && openModal('askQuery')}
                    className={!isLoggedIn ? 'disabled' : ''}
                  >
                    Ask Queries
                  </p>
                </div>
                <div className="secondCard">
                  <div className="secondCardContainer">
                    <div className="logo-name">
                      <img src={logo2} alt="" />
                      <p>Capstone</p>
                    </div>
                    <p>Submit within</p>
                    <h2 className="countdown">{countdown}</h2> {/* Countdown Timer */}
                  </div>
                </div>
                <div className="thirdCardContainer">
                  <div className="thirdCardContainerTopCard">
                    <h1>7</h1>
                    <p>Queries Resolved</p>
                  </div>
                  <div className="thirdCardContainerBottomCard">
                    <h1>110</h1>
                    <p>Submitted Projects</p>
                  </div>
                </div>
              </div>
              <div className="bottomRow">
                <div className="thirdCardContainer">
                  <div className="thirdCardContainerBottomCard">
                    <h1>14</h1>
                    <p>Mentors</p>
                  </div>
                  <div className="thirdCardContainerTopCard">
                    <h1>2</h1>
                    <p>Queries Raised</p>
                  </div>
                </div>
                <div className="firstCard">
                  <div className="img">
                    <img src={github} alt="" />
                  </div>
                  <div className="text">
                    <p>Push the code</p>
                    <span>Explore the branch of web-dev</span>
                  </div>
                </div>
                <div className="secondCard">
                  <div className="upper">
                    <img src={Group} alt="" />
                    <div className="text">
                      <p>Top Projects</p>
                      <span>NST Capstone Showcase</span>
                    </div>
                  </div>
                  <div className="lower">
                    <img src={Frame} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
