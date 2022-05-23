import React, { useEffect, useState } from "react";
//import {v4 as uuidv4} from 'uuid';

const Studentcard = ({ data }) => {
  const bday = new Date(data.dob);
  //console.log(new Intl.DateTimeFormat('en-US', {dateStyle:'long'}).format(bday));

  const [moreInfo, setMoreInfo] = useState(false);
  const handleInfo = () => setMoreInfo((prev) => !prev);
  const [graduate, setGraduate] = useState("");
  const [notes, setNotes] = useState(data.notes);

  const handleNotes = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          commenter: e.target.commenter.value,
          comment: e.target.comment.value,
        },
      ];
    });
  };

  useEffect(() => {
    if (
      data.certifications.resume &&
      data.certifications.linkedin &&
      data.certifications.github &&
      data.certifications.mockInterview &&
      data.codewars.current.total > 600
    ) {
      setGraduate(true);
    } else {
      setGraduate(false);
    }
  }, [data]); // <--- dependency causes useEffect to be called again. Otherwise it works
  // on load, but not if another cohort is chosen (mostly)

  return (
    <div className="card" id={data.id}>
      <div className="photo">
        <img className="picture" src={data.profilePhoto} alt="student"></img>
      </div>
      <div className="text">
        {data.names.preferredName} {data.names.middleName} {data.names.surname}
        <br></br>
        {data.username}
        <br></br>
        Birthday :{" "}
        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(bday)}
        <br></br>
        {graduate && <div className="readyToGrad">On Track to Graduate</div>}
      </div>
      <div className="moreInfo">
        {!moreInfo ? (
          <strong onClick={handleInfo} className="hoverPointer">
            Show more...
          </strong>
        ) : (
          <div>
            <strong onClick={handleInfo} className="hoverPointer">
              Show less...
            </strong>
            <div className="infoBox">
              <div className="codewars">
                <h2>Codewars</h2>
                <p>Current Total: {data.codewars.current.total}</p>
                <p>Last Week: {data.codewars.current.lastWeek}</p>
                <p>Goal: {data.codewars.goal.total}</p>
                <p>
                  Percent of Goal Achieved:{" "}
                  {Math.round(
                    (data.codewars.current.total / data.codewars.goal.total) *
                      100
                  )}
                  %
                </p>
              </div>
              <div className="scores">
                <h2>Scores</h2>
                <p>Assignments: {data.cohort.scores.assignments * 100}%</p>
                <p>Projects: {data.cohort.scores.projects * 100}%</p>
                <p>Assessments: {data.cohort.scores.assessments * 100}%</p>
              </div>
              <div className="certifications">
                <h2>Certifications</h2>
                <p>Resume: {data.certifications.resume ? "✅" : "❌"}</p>
                <p>LinkedIn: {data.certifications.linkedin ? "✅" : "❌"}</p>
                <p>Mock Interview: {data.certifications.github ? "✅" : "❌"}</p>
                <p>GitHub: {data.certifications.mockInterview ? "✅" : "❌"}</p>
              </div>
            </div>
            <section className="notes">
              <h4>1-on-1 Notes</h4>
              <form className="addComment" onSubmit={handleNotes}>
                <label htmlFor="commenter">Commenter Name </label>
                <input type="text" name="commenter" id="commenter"></input>
                <br></br>
                <label htmlFor="comment">Comment </label>
                <input type="text" name="comment" id="comment"></input>
                <input type="submit"></input>
              </form>
              <div>
                {notes &&
                  notes.map((note) => {
                    return (
                      <p>
                        {note.commenter} says {note.comment}
                      </p>
                    );
                  })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Studentcard;
