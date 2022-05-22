import StudentList from "./Components/StudentList";
import Cohort from "./Components/Cohort";
import StudentCard from "./Components/StudentCard";
import studentData from "./data/data.json";
import {useState} from "react";
function App() { 
  const [students, setStudents] = useState(studentData);
  console.log(studentData)
  return (
    <div>
      <h1>Student Dashboard</h1>

      <Cohort/>
      
      <StudentList studentData={ students } taco='taco'/>

    </div>
  );
}

export default App;
