import React from 'react';
import './feelingStuck.css';

const FeelingStuck = () => {
  const mentors = ["Vishal Sharma", "Rishabh Sharma", "Rashmi Kumari", "Jai Gupta", "Swati Priya", "Shivam Gupta", "Narendra kumar","Aryan Singhal","Rahul kumar", "Nischal Gupta", "Ajay", "Kartik Katiyar", "Neeraj Rawat", "Uttam Kumar Mahato",  ]
  return (
   <>
    <p className="modalHeader">Feeling Stuck</p>
    <p className="modalSubHeader">Don't hesitate! Take help from your mentor
         </p>
    <form action="" className="modalFormContainer">
        <label htmlFor="modalOptionContainer" className="modalOptionLabel">Mentor</label>
        <select name="modelOptions" id="modelOptionContainer" className="modelOptions" required>
        {
                mentors.map((ele, idx)=>{
                    return(
                        <>
                        <option key={idx} value={ele} className="modalOption">{ele}</option>
                        </>
                    )
                })
            }
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