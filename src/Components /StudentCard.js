import { useState } from "react";
const StudentCard = ({
  names,
  profilePhoto,
  username,
  dob,
  certifications,
  codewars,
  cohort,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    showMore === false ? setShowMore(true) : setShowMore(false);
  };

  const show = () => {
    if (showMore === true) {
      return (
        <div className="extra">
          <section className="code">
            <h3>
              <span>CodeWars:</span>
            </h3>
            <p>Current Total: {codewars.current.total}</p>
            <p>Last Week: {codewars.current.lastWeek}</p>
            <p>Goal: {codewars.goal.total}</p>
            <p>
              Percentage of Goal Achieved:{" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
              %
            </p>
          </section>
          <section className="scores">
            <h3>
              <span>Scores:</span>
            </h3>
            <p>Assignments: {cohort.scores.assignments * 100}%</p>
            <p>Projects: {cohort.scores.projects * 100}%</p>
            <p>Assessments: {cohort.scores.assessments * 100}%</p>
          </section>
          <section className="ceritifcation">
            <h3>
              <span>Certification:</span>
            </h3>
            <p>Resume: {certifications.resume ? "✓" : "x"}</p>
            <p>LinkedIn: {certifications.linkedin ? "✓" : "x"}</p>
            <p>Mock Interview: {certifications.mockInterview ? "✓" : "x"}</p>
            <p>GitHub: {certifications.github ? "✓" : "x"}</p>
          </section>
        </div>
      );
    }
  };

  const checkCert = () => {
    if (
      certifications.resume === true &&
      certifications.linkedin === true &&
      certifications.github === true &&
      certifications.mockInterview === true
    ) {
      return <p className="grad">On track to Graduate</p>;
    }
  };

  return (
    <div className="studentCard">
      <img src={profilePhoto} width="50px"></img>
      <h3>
        Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}
      </h3>
      <p>{checkCert()}</p>
      <p>Email: {username}</p>
      <p>Birthday: {dob}</p>
      <br></br>
      <button className="showMoreButton" onClick={handleClick}>
        {show ? "Show less..." : "Show more..."}
      </button>
      <section>{show()}</section>
    </div>
  );
};

export default StudentCard;

//useState(true) on Showmore buttonn
