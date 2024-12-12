import React from 'react'
import './modal.css'
import logo from '../../images/logo.svg'

const Modal = () => {
    return (
        <>
            <div className="modalContainer">
                <div className="modalOverlay"></div>
                <div className="modal">
                <div className="firstCard">
                    <img src={logo} alt="" />
                    <p>Register</p>
                    <p>Login</p>
                    <p>Submit Project</p>
                    <p>Ask Queries</p>
                  </div>
                  <div className="modalContentContainer">

                  </div>
                </div>
            </div>
        </>
    )
}

export default Modal