import React, { useState } from "react";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import "./App.css";

const data = require("./data/data.json");
//console.log(data)
function App() {
  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState("All Students")
  return (
    <div className="dashboard">
      <div className="cohort-list">
      <CohortList data={data} setCohort={setCohort} setHeading={setHeading} />
      </div>
      <div className="students-list">
      <h1>Student Dashboard</h1>
      <StudentList data={cohort} heading={heading} />
      </div>
    </div>
  );
}
export default App;
