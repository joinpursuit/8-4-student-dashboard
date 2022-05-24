import React, { useState } from "react";

const Student = ({ student, names, certifications, cohort, codewars }) => {
  const [revealed, setRevealed] = useState(false);
  const handleAdditionalInfo = (revealedStatus) => {
    setRevealed(!revealedStatus);
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(event.target)
  }

  const handleCommenter = (event) =>{
    const {value} = event.target

  }



  return (
    <section>
      <img src={student.profilePhoto} alt={names.preferredName} />
      <article className="student">
        <h3>
          {names.preferredName} {names.middleName.charAt(0)}. {names.surname}
        </h3>
        <p>{student.username}</p>
        <p>
          <span>Birthday: </span>
          {student.dob}
        </p>
          {!revealed ? (
            <p
            className="ShowMore"
            onClick={() => handleAdditionalInfo(revealed)}
            value={revealed}
            >
            Show More ...
          </p>) : (<p
              className="ShowMore"
              onClick={() => handleAdditionalInfo(revealed)}
              value={revealed}>
              Show Less ...</p> )}
              {/* {(certifications.resume && certifications.linkin && certifications.mockInterview && student.certifications.resume) ?
                  (<p className='graduationClass'>On Track To Graduate</p>):<p></p>
                }  */}
      </article>
          {revealed ? ( <div className="more">
              <article className="one">
                <h3>Codewars</h3>
                <p>Current Total: <span>{codewars.current.total}</span></p>
                <p>Last Week: <span>{codewars.current.lastWeek}</span></p>
                <p>Goal: <span>{codewars.goal.total}</span></p>
                <p>Percent of Goal Achieved</p>
              </article>
              <article className="two">
                <h3>Scores</h3>
                <p>Assignments: <span>{cohort.scores.assignments * 100}%</span></p>
                <p>Projects: <span>{cohort.scores.projects * 100}%</span></p>
                <p>Assessments: <span>{cohort.scores.assessments * 100}%</span></p>
              </article>
              <article className="three">
                <h3>Certifications</h3>
                {certifications.resume ?  <p>Resume: ✅ </p> : <p>Resume: ❌</p>}
                {certifications.linkedin ?  <p>LinkedIn: ✅</p> : <p>LinkedIn: ❌</p>}
                {certifications.mockInterview ?  <p>Mock Interview: ✅</p> : <p>Mock Interview: ❌</p>}
                {student.certifications.resume ?  <p>GitHub: ✅</p> : <p>Github: ❌</p>}
              </article>
            <article className="comments">
            <br></br>
            <h4>1-on-1 Notes</h4>
            <br></br>
            <form onSubmit ={handleSubmit}>
              <label>Commenter Name: <input id="values" name="values" type="text" onChange = {handleCommenter}/></label>
              <label>Comment: <input id="values" name="values" type="text" /></label>
              <button>Submit</button>
            </form>
            </article>
            </div>): null}
           

    </section>
  );
};
export default Student;
