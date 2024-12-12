import React, { useState, useEffect } from 'react';
import './homePage.css';
import Nabvar from '../../components/navbar/Nabvar';
import logo from '../../images/logo.svg';
import logo2 from '../../images/logo 2.svg';
import Frame from '../../images/Frame.svg';
import Group from '../../images/Group.svg';
import github from '../../images/github.svg';
import Modal from '../../components/modal/Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(''); // Tracks which component to render in Modal
  const [content, setContent] = useState('register');
  const [countdown, setCountdown] = useState(''); // State for the countdown timer

  const openModal = (content) => {
    setModalContent(content); // Set the specific content to render
    setContent(modalContent);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  useEffect(() => {
    const targetDate = new Date('2024-12-20T23:59:59'); // Target date and time (20th Dec 2024)

    const updateCountdown = () => {
      const now = new Date();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        setCountdown('Expired'); // If the countdown reaches 0
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // Update the countdown state
      setCountdown(`${days} Days ${hours} hrs`);
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Modal Component */}
      {isModalOpen && <Modal content={modalContent} onClose={closeModal} setContent={setContent} />}

      <div className="homeMainContainer">
        <div className="circle"></div>
        <div className="homePageContentContainer">
          <div className="cardContainer">
            <div className="topRow">
              <div className="firstCard">
                <img src={logo} alt="" />
                <p onClick={() => openModal('register')}>Register</p>
                <p onClick={() => openModal('login')}>Login</p>
                <p onClick={() => openModal('submitProject')}>Submit Project</p>
                <p onClick={() => openModal('askQuery')}>Ask Queries</p>
              </div>
              <div className="secondCard">
                <div className="secondCardContainer">
                  <div className="logo-name">
                    <img src={logo2} alt="" />
                    <p>Capstone</p>
                  </div>
                  <p>Submit within</p>
                  <h2>{countdown}</h2> {/* Countdown Timer */}
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
