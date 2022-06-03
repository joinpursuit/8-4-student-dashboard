import React from "react";
// import CohortCard from "./CohortCard.js";
import semesters from "../data/semesters.json";

// const handleAllCohort = () => {};

const AllCohortList = ({ students }) => {
  //   const [isCohort, setIsCohort] = useState();
  console.log(students[0]); // gets the students array {students}
  return (
    <div>
      <h2 className="all-cohorts">All Cohorts</h2>
      <ul>
        {semesters.map((semester) => {
          return (
            <li>
              <a href="#">{semester.semester}</a>
            </li>
          );
        })}
      </ul>
      {/* filter by the event from the onClick */}
      {/* {students.map((student) => {
        return student.cohort.cohortCode;
      })} */}
    </div>
  );
};

export default AllCohortList;
