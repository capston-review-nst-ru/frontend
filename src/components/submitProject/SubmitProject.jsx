import React, { useState } from "react";
import "./submitProject.css";

const SubmitProject = () => {
  const [formData, setFormData] = useState({
    githubUrl: "",
    hostedLink: "",
    videoFile: null,
    query: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "videoFile" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <p className="modalHeader">Submit your Project</p>
      <form action="" className="modalFormContainer" onSubmit={handleSubmit}>
        <label htmlFor="modalLinkContainer" className="modalLinkLabel">
          GitHub URL
        </label>
        <input
          type="url"
          id="modalLinkContainer"
          name="githubUrl"
          className="modalLinkContainer"
          required
          onChange={handleChange}
        />

        <label
          htmlFor="modalHostedLinkContainer"
          className="modalHostedLinkLabel"
        >
          Hosted Link
        </label>
        <input
          type="url"
          id="modalHostedLinkContainer"
          name="hostedLink"
          className="modalHostedLinkContainer"
          onChange={handleChange}
        />

        <label htmlFor="modalFileContainer" className="modalFileLabel">
          Video Explanation
        </label>
        <input
          type="file"
          id="modalFileContainer"
          name="videoFile"
          className="modalFileContainer"
          required
          onChange={handleChange}
        />

        <label htmlFor="modalQueryContainer" className="modalQueryLabel">
          Ask your queries (Optional)
        </label>
        <input
          type="text"
          id="modalQueryContainer"
          name="query"
          className="modalQueryContainer"
          onChange={handleChange}
        />

        <input
          type="submit"
          value="Submit Project"
          className="modalSubmitButton"
        />
      </form>
    </>
  );
};

export default SubmitProject;
