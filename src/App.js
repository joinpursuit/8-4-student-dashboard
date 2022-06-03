import React from "react";
import students from "./data/data.json";
import AllStudents from "./Components/AllStudents.js";
import AllCohortList from "./Components/AllCohortList.js";
import "./Components/style.css";

function App() {
  return (
    <>
      <h1 className="header">Student Dashboard</h1>
      <div>
        <AllCohortList students={students} />
      </div>
      <section>
        <div>
          <AllStudents students={students} />
        </div>
      </section>
    </>
  );
}

export default App;
