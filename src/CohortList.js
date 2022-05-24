import React from "react";

const CohortList = ({ data, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];
  // console.log (data)

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

  const year = (year) => {
    // console.log(year)
    return year.split("").slice(0, -4).join("") + " " + year.slice(1).slice(-4);
  };

  return (
    <div className="cList">
      <h3>Choose a class by Start Date</h3>
      <li className="semester"><button className="cohortButton" value="all" onClick={handleClick}>
            All Students
          </button></li>
          {newList.map((cohort) => {
            return (
              <div>
                <li className="semester"><button className="cohortButton" value={cohort} onClick={handleClick}>
                  {year(cohort)}
                </button></li>
              </div>
            );
          })}
    </div>
  );
};

export default CohortList;
