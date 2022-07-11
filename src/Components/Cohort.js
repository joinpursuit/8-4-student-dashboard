import React from "react";

function Cohort(props) {
  const { studentData } = props;

  const cohortList = [
    ...new Set(studentData.map((student) => student.cohort.cohortCode)),
  ];

  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      
      <ul>
        <li>All Students</li>
       
        {cohortList.map((cohorts) => (
          <li onClick={cohorts}>{cohorts}</li>
        ))}
        </ul>
        
    </div>
  );
}

export default Cohort;
