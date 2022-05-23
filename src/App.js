import React, {useState} from "react";
import StudentList from "./Components/StudentList.js";
import CohortList from "./Components/CohortList.js";

const data = require("./data/data.json") 


function App() {
  const [cohort, setCohort] = useState(data);
  const [cohortName, setCohortName] = useState("");

  
  return (
    <div className="main">  
      <h1 className="nav-bar">Student Dashboard</h1>
      <StudentList data={cohort}  cohortName={cohortName}/>
      <CohortList data={data} setCohort={setCohort} cohort={cohort} setCohortName={setCohortName}/>
      <footer></footer>
    </div>
  );
}

export default App;

