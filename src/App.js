import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import UserOnbord from "./pages/userOnboard/UserOnbord";
import ProjectOnboard from "./pages/projectOnboard/ProjectOnboard";
import { ToastContainer } from "react-toastify";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="screen-warning">
          <div className="icon">⚠️</div>
          <p>
            Your screen size is too small to use this application effectively.
            Please switch to a device with a larger screen widthx.
          </p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-onboard" element={<UserOnbord />} />
            <Route path="/project-submission" element={<ProjectOnboard />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
