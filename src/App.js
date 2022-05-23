import React, { useState } from "react";
import AllStudentCards from "../src/Components/AllStudentCards"
import CohortList from "./Components/CohortList";
import students from "../src/data/data.json"




function App() {

  const [currentStudents, setCurrentStudents] = useState(students)

  const [title, setTitle] = useState("All Students")



  return (
    <div>
      <h1>Student Dashboard </h1>
      <AllStudentCards students={students} currentStudents={currentStudents} title={title}/>
      <CohortList students={students} setCurrentStudents={setCurrentStudents} setTitle={setTitle}/>
    </div>
  );
}

export default App;
