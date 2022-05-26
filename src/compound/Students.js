import React, { useState } from "react";
import Student from "./Student";

const Students = ({ studentsInfo, classList }) => {
  return (
    <div className="allStudents">
      <h2>{classList}</h2>
      <p>Total Students: {studentsInfo.length}</p>
     <div className = "students">
        {studentsInfo.map((student) => (
          
        <>
        <Student student={student} names = {student.names} certifications ={student.certifications} cohort = {student.cohort} codewars = {student.codewars} />
      </>
        
      ))
      }
       </div>
    </div>
  );
};
export default Students;
