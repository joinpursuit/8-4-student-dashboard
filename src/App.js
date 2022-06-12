import data from "./data/data.json";
import CohortList from "./Components/CohortList";
import { useState } from "react";
import StudentList from "./Components/StudentList";

function App() {
  const [students, setStudents]= useState(data)
  return (
    <div>
      <h1 className="header">Student Dashboard</h1>
      <StudentList students= {students} setStudents= {setStudents}/>
      <CohortList students= {students} setStudents= {setStudents}/>
    </div>
  );
}
export default App;
