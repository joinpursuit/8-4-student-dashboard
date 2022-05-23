import React, { useState } from "react";

const StudentInfoCard = ({
  names,
  username,
  profilePhoto,
  dobreturn,
  cohort,
  onTrackToGraduate,
  codewars,
  certifications,
}) => {
  const [showText, setShowText] = useState(false);

  const onClick = () => {
    setShowText(!showText);
  };

  const checkForGrad = (onTrackToGraduate) => {
    if (onTrackToGraduate === "On Track to Graduate."){
        return (<p  style={{ color: "green" }}>On Track to Graduate.</p>)
    } else {
        return <p  style={{ color: "red" }}>Not On Track to Graduate.</p>
    }
};

  const Text = () => {
    const TextColorChange = () => {
      if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) > 100
      ) {
        return (
          <>
            <span style={{ color: "green" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      } else if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) >
          50 ||
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) < 100
      ) {
        return (
          <>
            <span style={{ color: "yellow" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      } else if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) < 50
      ) {
        return (
          <>
            <span style={{ color: "red" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      }
    };

    const checkResume = () => {
      if (String(certifications.resume) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkLinkedin = () => {
      if (String(certifications.linkedin) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkMockInterview = () => {
      if (String(certifications.mockInterview) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkGithub = () => {
      if (String(certifications.github) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };


    return (
      <div>
        <h3>Codewars:</h3>
        <p>Current Total: {codewars.current.total}</p>
        <p>Last Week: {codewars.current.lastWeek}</p>
        <p>Goal: {codewars.goal.total}</p>

        <p>Percent of Goal Achieved: {TextColorChange()} </p>

        <h3>Scores:</h3>
        <p>Assignments: {cohort.scores.assignments * 100}%</p>
        <p>Project: {cohort.scores.projects * 100}%</p>
        <p>Assessments: {cohort.scores.assessments * 100}%</p>

        <h3>Certifications:</h3>
        <p>Resume: {checkResume()} </p>
        <p>Linkedin: {checkLinkedin()}</p>
        <p>mockInterview: {checkMockInterview()}</p>
        <p>github: {checkGithub()}</p>

        <div>
          <form>
            <h3>1-on-1 Notes</h3>
            <label>Commenter Name</label> <input />
            <br />
            <label>Comment </label> <input />
            <br />
            <button>Add Note</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="StudentList">
      <img src={profilePhoto} />

      <div className="StudentListText">
        <p>
          <strong>
            {names.preferredName} {names.middleName[0]}. {names.surname}
          </strong>
        </p>
        <p>{username}</p>
        <p>Birthday: {dobreturn}</p>
        <p>{checkForGrad()}</p>

        <button onClick={onClick}>Show More</button>
        {showText ? <Text /> : null}

        <br />
        <br />
      </div>
    </div>
  );
};

export default StudentInfoCard;
