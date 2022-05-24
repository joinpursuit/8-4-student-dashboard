import React, { useState } from "react";
import Student from "./Student";

const Students = ({ studentsInfo }) => {
  return (
    <div className="allStudents">
      <h2>All Students</h2>
      <p>Total Students: {studentsInfo.length}</p>
      {studentsInfo.map((student) => (
        
        <Student student={student} names = {student.names} certifications ={student.certifications} cohort = {student.cohort} codewars = {student.codewars} />
      ))}
    </div>
  );
};
export default Students;
