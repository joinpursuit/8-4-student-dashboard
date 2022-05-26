import React, { useState } from "react";
import Students from "./compound/Students";
import ClassStartDates from "./compound/ClassStartDates";

const studentsInfo = require("./data/studentData.json");
const scheduleInfo = require("./data/scheduleData.json");

function App() {
const [classList,setClassList] = useState('AllStudents') 
const [studentList, setStudentList] = useState(studentsInfo)

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <ClassStartDates scheduleInfo={scheduleInfo} classList={classList} setClassList ={setClassList} setStudentList ={setStudentList} studentsInfo={studentsInfo}/>
        <Students studentsInfo={studentList} classList ={classList}/>
      </main>
    </div>
  );
}

export default App;
