import React from "react";
import StudentCard from "./StudentCard.js";

const AllStudents = (students) => {
  // console.log(students.students); // gets the students array {students}
  return (
    <div className="all-students">
      <h2>All Students</h2>
      <h3>Total Count:{students.students.length}</h3>
      {students.students.map((student) => {
        return <StudentCard key={student.id} student={student} />;
      })}
    </div>
  );
};

export default AllStudents;
