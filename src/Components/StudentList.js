import React, { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentList(props) {
  const { studentData, cohortFilter, students } = props;
  console.log(studentData);
  console.log(props);
  return (
    <div>
      <h3>All Students</h3>
      <p>Total Students: {studentData.length} </p>
      {students.map((student) => {
        return (
          <section>
            <StudentCard student={student} />
          </section>
        );
      })}
    </div>
  );
}
