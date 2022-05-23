import React from "react";
import Studentcard from "./Studentcard";
import {v4 as uuidv4} from 'uuid';
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

  //console.log(students);
  return (
    <div className="studentList">
      <h2>{cohort}</h2>
      <h4 className="totalStudents">Total Students: {students.length} </h4>
      {students.map((data) => {
        return <Studentcard data={data} key={data.id}/>;
      })}
    </div>
  );
};

export default StudentList;
