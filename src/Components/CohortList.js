// import Cohort from "./CohortList";
import React from "react";
const CohortList = ({ data, cohort, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setCohort(data);
      setHeading("All Students");
    } else {
      let filteredCohort = getCohort(data, value);
      setCohort(filteredCohort);
      setHeading(value);
    }
  };
  const getCohort = (data, semester) => {
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === semester;
    });
  };

  return (
    <div className="">
      <h2>Choose a class by Start Date</h2>
      <ul>
        <li className="cList">
          <button className="butt" value="all" onClick={handleClick}>
            All Students
          </button>
        </li>
        {newList.map((cohort) => {
          return (
            <div>
              <li className="cList">
              <button  className = "butt" value={cohort} onClick={handleClick}>
                {cohort}
              </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;

//

// let cohorts = data.map((student) => student.cohort.cohortCode)
