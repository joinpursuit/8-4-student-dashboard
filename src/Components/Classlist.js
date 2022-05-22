import React from "react";
//import data from "../data/data.json";

const ClassList = ({ data, setCohort }) => {
  let cohortList = [];
  for (let student of data) {
    if (cohortList.includes(student.cohort.cohortCode)) {
      continue;
    } else {
      cohortList.push(student.cohort.cohortCode);
    }
  }

  //console.log(cohortList);

  const handleCohort = (e) => setCohort(e.target.id);

  return (
    <div id="classList">
      <h1>Choose a Class by Start Date</h1>
      <div>
        <div>
          <h3 id="All Students" onClick={handleCohort} className="hoverPointer">
            All students
          </h3>
          <hr></hr>
        </div>
        {cohortList.map((cohort) => {
          return (
            <div key={cohort}>
              <h3 id={cohort} onClick={handleCohort} className="hoverPointer">
                {cohort}
              </h3>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassList;
