import React, { useState } from "react";
import "./index.css";
import StudentList from "./Components/StudentList";
import StudentCard from "./Components/StudentCard";
import Cohort from "./Components/Cohort";
import Nav from "./Components/Nav";
import studentData from "./data/data.json";

function App() {

const [ students, setStudents ] = useState(studentData)
const [ cohortFilter, setCohortFilter ]  = useState('All Students')

  return (
    <>
      <Nav />
      <Cohort studentData={studentData} cohortFilter={cohortFilter} setCohortFilter={setCohortFilter} students={students} setStudents={setStudents}/>
      <StudentList studentData={studentData} cohortFilter={cohortFilter} setCohortFilter={setCohortFilter} students={students} setStudents={setStudents} StudentCard={<StudentCard />}/>

    </>
  );
}

export default App;
