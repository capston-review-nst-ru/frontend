import React, { useState } from "react";
import "./submitProject.css";
import axios from "axios";
import { toast } from "react-toastify";

const SubmitProject = () => {
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formDataInputs, setformDataInputs] = useState({
    githubUrl: "",
    hostedLink: "",
    videoFile: "exampple.com",
    query: "",
  });

  var handleVideoFileChange = async (e) => {
    if (e.target.files[0]) {
      var formData = new FormData();
      formData.append("video", e.target.files[0]);
      // console.log(e.target.files[0]);
      // var loading = toast.loading("Uploading Video..");
      var axres = await axios.post(
        "https://backend-newton-capstone-eval.onrender.com/UploadFile/upload",
        formData
      );
      // toast.update(loading, {
      //   autoClose: 2000,
      //   isLoading: false,
      //   type: "success",
      //   toastId: loading,
      // });
      setformDataInputs((prev) => ({
        ...prev,
        videoFile: axres.data.videoLink,
      }));
      if (axres.data) {
        setIsVideoUploaded(true);
      }
      console.log(axres.data);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setformDataInputs({
      ...formDataInputs,
      [name]: name === "videoFile" ? files[0] : value,
    });
  };
  var tosend = { responseSheet: formDataInputs };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      alert("Please login first");
      return;
    }
    const response = await fetch(
      "https://backend-newton-capstone-eval.onrender.com/Submission/submissions",
      {
        method: "POST",
        body: JSON.stringify(tosend),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setSuccessMessage("Submitted successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <>
      {successMessage && <h1>{successMessage}</h1>}
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
          onChange={handleVideoFileChange}
          accept="video/*"
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
          disabled={!isVideoUploaded}
        />
      </form>
    </>
  );
};

export default SubmitProject;
