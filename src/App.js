import React from "react";
import AllStudentCards from "../src/Components/AllStudentCards"
import CohortList from "./Components/CohortList";



function App() {
  return (
    <div>
      <h1>Student Dashboard </h1>
      <AllStudentCards/>
      <CohortList />
    </div>
  );
}

export default App;
