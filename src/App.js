import React, { useState } from "react";
import datas from "./data/data.json";
import StudentsList from "./Components/StudentsList"

//HOW DO I START IMPORT DATA

const App = () => {
    const [totalAmountOfStudents, setTotalAmountOfStudents] = useState(datas.length);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {/* studentlist is going to be ALL of the right side. display. */}
      <StudentsList datas={datas} totalAmountOfStudents={totalAmountOfStudents} setTotalAmountOfStudents={setTotalAmountOfStudents}/>
    </div>
  );
}

export default App;
