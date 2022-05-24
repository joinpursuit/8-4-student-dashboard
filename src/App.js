import Data from "./data/data.json";
import React, { useState } from "react";
import StudentList from "./Components/Studentlist";
import ClassList from "./Components/Classlist";

//pass literally everything through the app.js here. EVERYTHING

function App() {
  const [cohort, setCohort] = useState("All Students");

  return (
    <>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div id="container">
        <ClassList setCohort={setCohort} data={Data} />
        <StudentList cohort={cohort} data={Data}/>
      </div>
    </>
  );
}

export default App;
