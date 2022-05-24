import React, { useState } from "react";
import StudentCards from "./Components/StudentCards";
import CohortSelector from "./Components/CohortSelector";
import studentData from "./data/data.json" 





function App() {
  const [cohorts, setCohort] = useState(studentData)
  const [header, setHeader] = useState("All Students")
  
  return (
    <div className="grid">
      <h1 className="title">Student Dashboard</h1>
      <CohortSelector studentData={studentData} setCohort={setCohort} cohorts={cohorts} setHeader={setHeader}/>
      <StudentCards cohorts={cohorts} setCohort={setCohort} header={header}/>
    </div>
  );
}

export default App;