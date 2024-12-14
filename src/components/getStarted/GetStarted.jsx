import React, { useState } from "react";
import "./GetStarted.css";
import axios from "axios";

const GetStarted = ({
  switchToLogin,
  switchToOtp,
  formData,
  setFormData,
  onClose,
}) => {
  const mentors = [
    "Vishal Sharma",
    "Rishabh Sharma",
    "Rashmi Kumari",
    "Jai Gupta",
    "Swati Priya",
    "Shivam Gupta",
    "Narendra Kumar",
    "Aryan Singhal",
    "Rahul Kumar",
    "Nishchal Gupta",
    "Ajay",
    "Kartik Katiyar",
    "Neeraj Rawat",
    "Uttam Kumar Mahato",
  ];

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      // Send OTP request
      const response = await axios.post(
        "https://backend-newton-capstone-eval.onrender.com/sendMail/otp",
        { to: formData.email }
      );
      if (response.status === 200) {
        console.log("OTP sent successfully to", formData.email);
        switchToOtp();
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(
        "Failed to send OTP. Please check your email address and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="modalHeader">Get Started</p>
      <p className="modalSubHeader">
        Already have an account?
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            switchToLogin();
          }}
          className="modalSubHeaderLink"
        >
          Login
        </a>
      </p>
      <form onSubmit={handleSubmit} className="modalFormContainer">
        <label htmlFor="name" className="modalNameLabel">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="modalNameContainer"
          value={formData?.name || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="modalEmailLabel">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="modalEmailContainer"
          value={formData?.email || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="modalPasswordLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="modalPasswordContainer"
          value={formData?.password || ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="mentor" className="modalOptionLabel">
          Mentor
        </label>
        <select
          id="mentorName"
          className="modalOptions"
          value={formData?.mentorName}
          onChange={handleChange}
          required
        >
          {mentors.map((mentor, idx) => (
            <option key={idx} value={mentor} className="modalOption">
              {mentor}
            </option>
          ))}
        </select>

        <label htmlFor="figmaLink" className="modalLinkLabel">
          Figma Link
        </label>
        <input
          type="url"
          id="figmaLink"
          className="modalLinkContainer"
          value={formData?.figmaLink}
          onChange={handleChange}
          required
        />

        <button type="submit" className="modalSubmitButton" disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </form>
    </>
  );
};

export default GetStarted;
