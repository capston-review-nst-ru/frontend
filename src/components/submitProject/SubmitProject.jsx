import React from 'react';
import './submitProject.css';

const SubmitProject = () => {
  return (
   <>
    <p className="modalHeader">Submit your Project</p>
    <form action="" className="modalFormContainer">
        <label htmlFor="modalLinkContainer" className="modalLinkLabel">GitHub URL</label>
        <input type="url" id="modalLinkContainer" className="modalLinkContainer" required />

        <label htmlFor="modalHostedLinkContainer" className="modalHostedLinkLabel">Hosted Link</label>
        <input type="url" id="modalHostedLinkContainer" className="modalHostedLinkContainer" />

        <label htmlFor="modalFileContainer" className="modalFileLabel">Video Explanation</label>
        <input type="file" id="modalFileContainer" className="modalFileContainer" required />

        <label htmlFor="modalQueryContainer" className="modalQueryLabel">Ask your queries (Optional)</label>
        <input type="text" id="modalQueryContainer" className="modalQueryContainer" required />

        <input type="submit" value="Submit Project" className="modalSubmitButton" />
    </form>
   </>
  )
}

export default SubmitProject;