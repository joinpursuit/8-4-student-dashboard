import React from "react";
import Studentcard from "./Studentcard";
//import Data from "../data/data.json";

const StudentList = ({ data, cohort }) => {
  //const data = props.data;
  //const cohort = props.cohort;

  const students = data.filter((student) => {
    if (cohort === "All Students") {
      return true;
    }
    if (student.cohort.cohortCode === cohort) {
      return true;
    } else {
      return false;
    }
  });

  console.log(students);
  return (
    <div>
      <h2>{cohort}</h2>
      <h4>Total Students: </h4>
      {students.map((data) => {
        return <Studentcard data={data} />;
      })}
    </div>
  );
};

export default StudentList;
