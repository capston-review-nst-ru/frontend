import React, { useState } from 'react';
import './otpVerification.css';
import axios from 'axios';

const OtpVerification = ({ formData, setFormData, onClose, updateLoginState }) => {
    const [otp, setOtp] = useState(['', '', '', '']); // Use an array to hold the OTP characters
    const [error, setError] = useState(''); // State to handle error messages

    const handleChange = (e, idx) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 1) { // Allow only numeric input
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);

            // Automatically focus on the next input box if a digit is entered
            if (value && idx < 3) {
                const nextInput = document.getElementById(`otp-${idx + 1}`);
                if (nextInput) nextInput.focus();
            }
        }
        setError(''); // Clear error when user starts typing
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 4); // Get up to 4 characters
        if (/^\d{1,4}$/.test(pastedData)) {
            const newOtp = Array.from(pastedData).concat(Array(4 - pastedData.length).fill(''));
            setOtp(newOtp);
            // Automatically focus the last non-empty input
            const lastFilledIndex = pastedData.length - 1;
            if (lastFilledIndex >= 0) {
                const nextInput = document.getElementById(`otp-${lastFilledIndex}`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join(''); // Combine the array into a single string

        if (otpString.length !== 4) {
            setError('Please enter a 4-digit OTP.');
            return;
        }

        try {
            // Post OTP verification and registration
            const response = await axios.post(
                'https://backend-newton-capstone-eval.onrender.com/User/register-otp',
                { otp: Number(otpString), ...formData } // Include form data
            );
            if (response.status === 200) {
                console.log('User registered successfully');
                localStorage.setItem("token", response.data.token); // Store token
                const token = localStorage.getItem("token")
                if (token) {
                    try {
                        const response = await axios.get('https://backend-newton-capstone-eval.onrender.com/User/me', {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        const userName = response.data.user.name; // Get the user's name
                        // setUserInfo(response.data.user.name); // Set user info from the API
                        // setIsLoggedIn(true); // User is logged in
                        updateLoginState(userName);
                    } catch (error) {
                        console.error('Error fetching user info', error);
                    }
                }
                onClose(); // Redirect to home page
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError(error.response.data.message); // Set error for invalid OTP
        }
    };

    const resendOtp = async () => {
        try {
            const response = await axios.post('https://backend-newton-capstone-eval.onrender.com/sendMail/otp', { to: formData.email });
            if (response.status === 200) {
                console.log('OTP resent successfully');
                alert('OTP resent to your email.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            alert('Failed to resend OTP. Please try again later.');
        }
    };


    return (
        <>
            <p className="modalHeader">Verify Email</p>
            <p className="modalSubHeader">
                OTP has been sent to{' '}
                <a href="#" className="modalSubHeaderLink">
                    learner@nst.rishihood.edu.in.
                </a>{' '}
                Please enter the OTP to proceed.
            </p>
            <form onSubmit={handleSubmit} className="modalFormContainer">
                <div className="otpInputContainer" onPaste={handlePaste}>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <input
                            key={idx}
                            id={`otp-${idx}`} // Assign a unique ID for each input
                            type="text"
                            maxLength={1}
                            className="otpCode"
                            value={otp[idx]}
                            onChange={(e) => handleChange(e, idx)} // Pass the index to identify the input
                        />
                    ))}
                </div>
                {error && <p className="errorText">{error}</p>} {/* Display error message */}
                <input type="submit" value="Verify Email" className="modalSubmitButton" />
            </form>
            <p className="modalSubHeader">
                Didn't receive OTP?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); resendOtp(); }} className="modalSubHeaderLink">
                    Click here to resend
                </a>
            </p>

        </>
    );
};

export default OtpVerification;
