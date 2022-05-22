import React from "react";
//import Data from "../data/data.json";

const StudentList = ({ data, cohort }) => {
  //const data = props.data;
  //const cohort = props.cohort;

  const students = data.filter((student) => {
    if (cohort === "All") {
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
      {students.map((data) => {
        return (
          <div id={data.id} key={data.id}>
            {data.names.preferredName} {data.names.middleName}{" "}
            {data.names.surname}
            <br></br>
            {data.username}
            <br></br>
            {data.dob}
            <br></br>
            <img src={data.profilePhoto} alt="student"></img>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
