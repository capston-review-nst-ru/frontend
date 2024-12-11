import React from 'react';
import './userOnboard.css';
import { Link } from "react-router-dom";


const UserOnbord = () => {
  return (
   <>
   <div className="goBackButtonContainer">
    <Link to="/" className='goBackButton'>Go Back</Link>
   </div>
   <form action="" className="userForm">
    <label htmlFor="figmaLinkContainer" className="figmaLinkLabel">Figma Link</label>
    <input type="text" id="figmaLinkContainer" className="figmaLinkContainer" placeholder='Paste your link here'/>
    <br />
    <label htmlFor="studentNameContainer" className="studentNameLabel">Student Name</label>
    <input type="text" id="studentNameContainer" className="studentNameContainer" placeholder='Name'/>
    <br />
    <label htmlFor="mentorNameContainer" className="mentorNameLabel">Mentors</label>
    <select name="mentorNameContainer" id="mentorNameContainer" className="mentorNameContainer">
      <option value="Nischal Gupta">Select an option</option>
      <option value="Nischal Gupta">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Vishal Sharma">Rishabh Sharma</option>
      <option value="Rahul Kumar">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
      <option value="Rishabh Sharma">Rishabh Sharma</option>
    </select>
    <br />
    <label htmlFor="studenEmailContainer" className="studentEmailLabel">Student Email</label>
    <input type="email" id="studentEmailContainer" className="studentEmailContainer" placeholder='Email'/>
    <br />
    <label htmlFor="studentQueriesContainer" className="studentQueriesLabel">Any Queries ?</label>
    <textarea name="studentQueriesContainer" id="studentQueriesContainer" className="studentQueriesContainer" placeholder='Write your message here'></textarea>
    <br />
    <input type="button" value="Submit" className="submitButton" />
   </form>
   </>
  )
}

export default UserOnbord
