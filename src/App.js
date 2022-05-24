import data from "./data/data.json";
import AllStudentCards from "./Components/AllStudentCards"
import CohortList from "./Components/CohortList";
import { useState } from "react";

function App() {
  const [students, setStudents]= useState(data)
  return (
    <div>
      <h1 className="header">Student Dashboard</h1>
      <AllStudentCards students= {students} setStudents= {setStudents}/>
      <CohortList students= {students} setStudents= {setStudents}/>
    </div>
  );
}

export default App;
