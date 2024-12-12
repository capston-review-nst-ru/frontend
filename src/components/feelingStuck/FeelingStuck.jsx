import React from 'react';
import './feelingStuck.css';

const FeelingStuck = () => {
  return (
   <>
    <p className="modalHeader">Feeling Stuck</p>
    <p className="modalSubHeader">Don't hesitate! Take help from your mentor
         </p>
    <form action="" className="modalFormContainer">
        <label htmlFor="modalOptionContainer" className="modalOptionLabel">Mentor</label>
        <select name="modelOptions" id="modelOptionContainer" className="modelOptions" required>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
            <option value="Mentor" className="modalOption">Mentor</option>
        </select>

        <label htmlFor="modalQueryContainer" className="modalQueryLabel">Ask your queries:</label>
        <input type="text" id="modalQueryContainer" className="modalQueryContainer" required />

        <label htmlFor="modalFileContainer" className="modalFileLabel">Attach files:</label>
        <input type="file" id="modalFileContainer" className="modalFileContainer" required />

        <input type="submit" value="Submit" className="modalSubmitButton" />
    </form>
   </>
  )
}

export default FeelingStuck;