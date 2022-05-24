import { useState } from 'react';

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
    if (showMore === false) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  const checkCert = () => {
    if (
      certifications.resume === true &&
      certifications.linkedin === true &&
      certifications.github === true &&
      certifications.mockInterview === true
    ) {
      return <p>On track to Graduate</p>;
    }
  };

  const show = () => {
    if (showMore === true) {
      return (
        <div>
          <section>
            <h4>Codewars:</h4>
            <h4>Current Total: {codewars.current.total}</h4>
            <h4>Last Week: {codewars.current.lastWeek}</h4>
            <h4>Goal: {codewars.goal.total}</h4>
            <h4>
              Percent of Goal Achieved:{' '}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed()}
              %
            </h4>
          </section>
          <section>
            <h4>Scores</h4>
            <h4>Assignments: {cohort.scores.assignments * 100}%</h4>
            <h4>Projects: {cohort.scores.projects * 100}%</h4>
            <h4>Assessments: {cohort.scores.assessments * 100}%</h4>
          </section>
          <section>
            <h4>Certifications</h4>
            <h4>Resume {certifications.resume ? '✓' : 'x'}</h4>
            <h4>linkedin {certifications.linkedin ? '✓' : 'x'}</h4>
            <h4>Mock Interview {certifications.mockInterview ? '✓' : 'x'}</h4>
            <h4>GitHub {certifications.github ? '✓' : 'x'}</h4>
          </section>
        </div>
      );
    }
  };

  return (
    <div className="studentCard">
      <img src={profilePhoto} alt="student"></img>
      <h3>
        Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}
      </h3>
      <h4>{checkCert()}</h4>
      <h3>Email: {username}</h3>
      <h3>Birthday: {dob}</h3>
      <br></br>
      <button onClick={handleClick}>Show more...</button>
      <section>{show()}</section>
    </div>
  );
};

export default StudentCard;
