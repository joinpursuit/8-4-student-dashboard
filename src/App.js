import React, { useReducer, useState } from "react";
import "./App.css";
import datas from "./data/data.json";
import StudentsList from "./Components/StudentsList";
import CohortList from "./Components/CohortList";

const App = () => {
  const [totalAmountOfStudents, setTotalAmountOfStudents] = useState(
    datas.length
  );
  const [uniStudentCohort, setuniStudentCohort] = useState([]);
  const [filterCohort, setFilterCohort] = useState("All students");

  return (
    <main>
      <h1>Student Dashboard</h1>
      <div className="FullList">
        <StudentsList
          datas={datas}
          totalAmountOfStudents={totalAmountOfStudents}
          setTotalAmountOfStudents={setTotalAmountOfStudents}
          uniStudentCohort={uniStudentCohort}
          setuniStudentCohort={setuniStudentCohort}
          filterCohort={filterCohort}
        />
      </div>

      <CohortList
        datas={datas}
        uniStudentCohort={uniStudentCohort}
        setuniStudentCohort={setuniStudentCohort}
        filterCohort={filterCohort}
        setFilterCohort={setFilterCohort}
      />
    </main>
  );
};

export default App;
