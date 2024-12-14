import React, { useState } from "react";
import "./feelingStuck.css";
import axios from "axios";

const FeelingStuck = () => {
  const [text, setText] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("video", selectedFile);
      var axres = await axios.post(
        "https://backend-newton-capstone-eval.onrender.com/UploadFile/upload",
        formData
      );
      var filelink = axres.data.videoLink;
      setFileLink(filelink);
      if (!localStorage.getItem("token")) {
        alert("Please login first");
        return;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileLink && !text) {
      alert("Please enter a query or upload a file!");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-newton-capstone-eval.onrender.com/AskQuery/queries",
        {
          query: { query: text, file: fileLink || null },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.data) {
        setSuccessMessage("Query submitted successfully!");
        setIsSubmitted(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      console.log("Query submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  return (
    <>
      {successMessage && <h1>{successMessage}</h1>}
      <p className="modalHeader">Feeling Stuck</p>
      <p className="modalSubHeader">
        Don't hesitate! Take help from your mentor
      </p>
      <form className="modalFormContainer" onSubmit={handleSubmit}>
        <label htmlFor="modalQueryContainer" className="modalQueryLabel">
          Ask your queries:
        </label>
        <input
          type="text"
          id="modalQueryContainer"
          className="modalQueryContainer"
          name="query"
          required
          onChange={handleTextChange}
        />

        <label htmlFor="modalFileContainer" className="modalFileLabel">
          Attach files:
        </label>
        <input
          type="file"
          id="modalFileContainer"
          className="modalFileContainer"
          onChange={handleFileChange}
        />

        <input
          type="submit"
          value="Submit Query"
          className="modalSubmitButton"
          disabled={isSubmitted}
        />
      </form>
    </>
  );
};

export default FeelingStuck;
