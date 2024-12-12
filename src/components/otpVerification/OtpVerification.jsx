import React from 'react';
import './otpVerification.css';

const OtpVerification = () => {
  return (
   <>
    <p className="modalHeader">Verify Email</p>
    <p className="modalSubHeader">OTP has been sent to 
        <a href="#" className="modalSubHeaderLink">learner@nst.rishihood.edu.in.</a>Please eneter the OTP to proceed
         </p>
    <form action="" className="modalFormContainer">
    <div className="otpInputContainer">
        <input type="text" name="otp" id="" className="otpCode" maxLength={1} />
        <input type="text" name="otp" id="" className="otpCode" maxLength={1} />
        <input type="text" name="otp" id="" className="otpCode"  maxLength={1}/>
        <input type="text" name="otp" id="" className="otpCode" maxLength={1} />
    </div>
        <input type="submit" value="Verify Email" className="modalSubmitButton" />
    </form>
    <p className="modalSubHeader">Didn't recieve OTP?
        <a href="#" className="modalSubHeaderLink">Click here to resend</a>
         </p>
   </>
  )
}

export default OtpVerification;