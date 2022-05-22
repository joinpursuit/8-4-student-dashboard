import React, { useReducer, useState } from "react";
import datas from "./data/data.json";
import StudentsList from "./Components/StudentsList"
import CohortList from "./Components/CohortList";

//HOW DO I START IMPORT DATA

const App = () => {
    const [totalAmountOfStudents, setTotalAmountOfStudents] = useState(datas.length);
    // this counting part needs to change. //add it as it goes. 
    const [uniStudentCohort,setuniStudentCohort] = useState([]);
    const [filterCohort, setFilterCohort] = useState("All students");

    // const [showText, setShowText] = useState(false);//global - soo all state change - needs to make it single/individual
    

  return (
    <div>
      <h1>Student Dashboard</h1>
      {/* studentlist is going to be ALL of the right side. display. */}
      <StudentsList datas={datas} totalAmountOfStudents={totalAmountOfStudents} setTotalAmountOfStudents={setTotalAmountOfStudents} uniStudentCohort= {uniStudentCohort} setuniStudentCohort={setuniStudentCohort} filterCohort={filterCohort}  />
    
      <CohortList datas={datas} uniStudentCohort= {uniStudentCohort} setuniStudentCohort={setuniStudentCohort} filterCohort={filterCohort} setFilterCohort={setFilterCohort}/>
    </div>
  );
}

export default App;
