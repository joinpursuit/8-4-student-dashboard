import React, { useState } from "react";
import AllStudentCards from "../src/Components/AllStudentCards"
import CohortList from "./Components/CohortList";
import students from "../src/data/data.json"
import "../src/App.css"



function App() {

  const [currentStudents, setCurrentStudents] = useState(students)

  const [title, setTitle] = useState("All Students")



  return (
    <>
    <h1 className="header">Student Dashboard </h1>
    <div className="body">
      <CohortList students={students} setCurrentStudents={setCurrentStudents} setTitle={setTitle}/>
      <AllStudentCards students={students} currentStudents={currentStudents} title={title}/>
    </div>
    </>
  );
}

export default App;
