import React from 'react'
import './homePage.css'
import Nabvar from '../../components/navbar/Nabvar'
import logo from '../../images/logo.svg'
import logo2 from '../../images/logo 2.svg'
import Frame from '../../images/Frame.svg'
import Group from '../../images/Group.svg'
import github from '../../images/github.svg'
import Modal from '../../components/modal/Modal'
const HomePage = () => {
  return (
    <>
   {/* <Modal /> */}
        <div className="homeMainContainer">
          <div className="circle"></div>
            <div className="homePageContentContainer">
              <div className="cardContainer">
                <div className="topRow">
                  <div className="firstCard">
                    <img src={logo} alt="" />
                    <p>Register</p>
                    <p>Login</p>
                    <p>Submit Project</p>
                    <p>Ask Queries</p>
                  </div>
                  <div className="secondCard">
                    <div className='secondCardContainer' >
                      <div className="logo-name">
                        <img src={logo2} alt="" />
                        <p>Capstone</p>
                      </div>
                    <p>Submit within</p>
                    <h2>3 Days 10 hrs</h2>

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
                        <span>NST Capstone Showcae</span>
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
  )
}

export default HomePage