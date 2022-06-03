import React from "react";

const StudentDetails = (props) => {
  const { codewars, cohort, certifications } = props;

  return (
    <div>
      {/* display: flex; Student Details  */}
      <div className="codewars">
        <h2>Codewars</h2>
        <p>Current Total: {codewars.current.total}</p>
        <p>Last Week:{codewars.current.lastWeek}</p>
        <p>Goal:{codewars.goal.total}</p>
        <p>Percent of Goal Achieved:</p>
      </div>
      <div className="scores">
        <h2>Scores</h2>
        <p>Assignment: {cohort.scores.assignments}</p>
        <p>Projects: {cohort.scores.projects}</p>
        <p>Assessments: {cohort.scores.assessments}</p>
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <p>Resume: {certifications.resume ? "✅" : "❌"}</p>
        <p>LinkedIn: {certifications.linkedin ? "✅" : "❌"}</p>
        <p>Github: {certifications.github ? "✅" : "❌"}</p>
        <p>Mock Interview: {certifications.mockInterview ? "✅" : "❌"}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
