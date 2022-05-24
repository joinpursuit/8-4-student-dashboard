import React from "react";
import { stringify } from "uuid";
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

  const cohortMaker = () => {
    let testObj = [];
    for (let cohort of cohortList) {
      const year = cohort.slice(cohort.length - 4);
      const season = cohort.slice(0, cohort.length - 4);
      let sortKey;
      // eslint-disable-next-line default-case
      switch (season) {
        case "Spring":
          sortKey = year * 10 + 1;
          break;
        case "Summer":
          sortKey = year * 10 + 2;
          break;
        case "Fall":
          sortKey = year * 10 + 3;
          break;
        case "Winter":
          sortKey = year * 10 + 4;
          break;
      } // WHOOPS
      testObj.push({
        season: season,
        year: year,
        key: sortKey,
        code: cohort,
      });
    }
    testObj.sort((a, b) => {
      return a.key - b.key;
    });
    return testObj;
  };

  let cohortArray = cohortMaker();
  console.log(cohortArray);

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
        {cohortArray.map((cohort) => {
          return (
            <div key={cohort.code}>
              <h3
                id={cohort.code}
                onClick={handleCohort}
                className="hoverPointer"
              >
                {cohort.season} {cohort.year}
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
