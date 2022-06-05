import React, { useState } from "react";
import Student from "./Student";

const Students = ({ studentsInfo, classList}) => {
  let studentsList
  if(classList === "AllStudents"){
    studentsList = studentsInfo
  }else{
    studentsList = studentsInfo.filter((studentClass)=> studentClass.cohort.cohortCode === classList)
  }

  return (
    <div className="allStudents">
      <h2>{classList}</h2>
      <p>Total Students: {studentsList.length}</p>
     <div className = "students">
        {studentsList.map((student) => (  
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
