import React, { useState } from "react";

const Student = ({ student, names, certifications, cohort, codewars }) => {
  const [revealed, setRevealed] = useState(false);
  const handleAdditionalInfo = (revealedStatus) => {
    setRevealed(!revealedStatus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [commenter, setCommenter] = useState('');

  const handleCommenter = (event) => {
    const { value } = event.target;
    setCommenter(value);
  };

  const [comment, setComment] = useState('')

  const handleComment = (event)=>{
    const {value} = event.target
    setComment(value)
  }
 
  const toGraduate = () => {
    if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.mockInterview &&
      certifications.github
    ) {
      alert("CONGRATULATIONS");
    }else if (
      !certifications.resume &&
      !certifications.linkedin &&
      !certifications.mockInterview &&
      !certifications.github
    ) {
      alert(
        `To Proceed to Commencement, Please Complete:\n1. Resume\n2. LinkedIn\n3. Mock Interview \n4. GitHub`
      );
    }else if (
      !certifications.resume &&
      certifications.linkedin &&
      certifications.mockInterview &&
      certifications.github
    ) {
      alert(`You're almost there. You are missing:\n1. Resume`);
    }else if (
      certifications.resume &&
      !certifications.linkedin &&
      certifications.mockInterview &&
      certifications.github
    ) {
      alert(`You're almost there. You are missing:\n1. LinkedIn`);
    }else if (
      certifications.resume &&
      certifications.linkedin &&
      !certifications.mockInterview &&
      certifications.github
    ) {
      alert(`You're almost there. You are missing:\n1. Mock Interview`);
    }else if (
      certifications.resume &&
      certifications.linkedin &&
      certifications.mockInterview &&
      !certifications.github
    ) {
      alert(`You're almost there. You are missing:\n1. GitHub`);
    }else if(
      !certifications.resume &&
      !certifications.linkedin &&
      certifications.mockInterview &&
      certifications.github
    ){
        alert(`Halfway there. You are missing:\n1. Resume\n2. LinkedIn`) 
    }else if(
      !certifications.resume &&
      certifications.linkedin &&
      !certifications.mockInterview &&
      certifications.github
    ){
        alert(`Halfway there. You are missing:\n1. Resume\n2. Mock Interview`) 
    }else if(
      !certifications.resume &&
      certifications.linkedin &&
      certifications.mockInterview &&
      !certifications.github
    ){
        alert(`Halfway there. You are missing:\n1. Resume\n2. GitHub`) 
    }else if(
      certifications.resume &&
      !certifications.linkedin &&
      !certifications.mockInterview &&
      certifications.github
    ){
        alert(`Halfway there. You are missing:\n1. LinkedIn\n2. Mock Interview`) 
    }else if(
      certifications.resume &&
      !certifications.linkedin &&
      certifications.mockInterview &&
      !certifications.github
    ){
        alert(`Halfway there. You are missing:\n1.LinkedIn\n2. GitHub`) 
    }else if(
      certifications.resume &&
      certifications.linkedin &&
      !certifications.mockInterview &&
      !certifications.github
    ){
        alert(`Halfway there. You are missing:\n1. Mock Interview\n2. GitHub`) 
    }else if(
      !certifications.resume &&
      !certifications.linkedin &&
      !certifications.mockInterview &&
      certifications.github
    ){
      alert(`To Proceed to Commencement, Please Complete:\n1. Resume\n2. LinkedIn\n3. Mock Interview`)
    }else if(
      !certifications.resume &&
      !certifications.linkedin &&
      certifications.mockInterview &&
      !certifications.github
    ){
      alert(`To Proceed to Commencement, Please Complete:\n1. Resume\n2. LinkedIn\n3. GitHub`)
    }else if(
      certifications.resume &&
      !certifications.linkedin &&
      !certifications.mockInterview &&
      !certifications.github
    ){
      alert(`To Proceed to Commencement, Please Complete:\n1. LinkedIn\n2. Mock Interview\n3. GitHub`)
    }
  };

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
          </p>
        ) : (
          <p
            className="ShowMore"
            onClick={() => handleAdditionalInfo(revealed)}
            value={revealed}
          >
            Show Less ...
          </p>
        )}
      </article>
      {certifications.resume &&
      certifications.linkedin &&
      certifications.mockInterview &&
      certifications.resume ? (
        <h4 className="graduationClass" onClick={toGraduate}>
          On Track To Graduate
        </h4>
      ) : (
        <h4 className="non-graduates" onClick={toGraduate}>
          Not on Track to Graduate
        </h4>
      )}
      {revealed ? (
        <div className="more">
          <article className="one">
            <h3>Codewars</h3>
            <p>
              Current Total: <span>{codewars.current.total}</span>
            </p>
            <p>
              Last Week: <span>{codewars.current.lastWeek}</span>
            </p>
            <p>
              Goal: <span>{codewars.goal.total}</span>
            </p>
            <p>
              Percent of Goal Achieved:{" "}
              {Math.round((codewars.current.total / codewars.goal.total) * 100)}
              %
            </p>
          </article>
          <article className="two">
            <h3>Scores</h3>
            <p>
              Assignments: <span>{cohort.scores.assignments * 100}%</span>
            </p>
            <p>
              Projects: <span>{cohort.scores.projects * 100}%</span>
            </p>
            <p>
              Assessments: <span>{cohort.scores.assessments * 100}%</span>
            </p>
          </article>
          <article className="three">
            <h3>Certifications</h3>
            {certifications.resume ? <p>Resume: ✅ </p> : <p>Resume: ❌</p>}
            {certifications.linkedin ? (
              <p>LinkedIn: ✅</p>
            ) : (
              <p>LinkedIn: ❌</p>
            )}
            {certifications.mockInterview ? (
              <p>Mock Interview: ✅</p>
            ) : (
              <p>Mock Interview: ❌</p>
            )}
            {student.certifications.resume ? (
              <p>GitHub: ✅</p>
            ) : (
              <p>Github: ❌</p>
            )}
          </article>
          <article className="comments">
            <br></br>
            <form onSubmit={handleSubmit}>
              <h4>1-on-1 Notes</h4>
              <br></br>
              <label>
                Commenter Name:
                <input
                  id="values"
                  value={commenter}
                  type="text"
                  onChange={handleCommenter}
                />
              </label>
              <label>
                Comment:
                <input id="values" value={comment} type="text" onChange={handleComment} />
              </label>
              <br></br>
              <button>Submit</button>
            </form>
          </article>
        </div>
      ) : null}
    </section>
  );
};
export default Student;
