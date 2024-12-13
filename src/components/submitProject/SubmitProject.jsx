import React, { useState } from "react";
import "./submitProject.css";
import axios from "axios";
import { toast } from "react-toastify";

const SubmitProject = () => {
  const [formDataInputs, setformDataInputs] = useState({
    githubUrl: "",
    hostedLink: "",
    videoFile: "example.com",
    query: "",
  });

  var handleVideoFileChange = async (e) => {
    if (e.target.files[0]) {
      var formData = new FormData();
      formData.append("video", e.target.files[0]);
      // console.log(e.target.files[0]);
      // var loading = toast.loading("Uploading Video..");
      var axres = await axios.post(
        "https://40c5-115-244-141-202.ngrok-free.app/UploadFile/upload",
        formData
      );
      // toast.update(loading, {
      //   autoClose: 2000,
      //   isLoading: false,
      //   type: "success",
      //   toastId: loading,
      // });
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
        />
      </form>
    </>
  );
};

export default SubmitProject;
