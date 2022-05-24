import React, { useState } from "react";
import Students from "./compound/Students";
import ClassStartDates from "./compound/ClassStartDates";

const studentsInfo = require("./data/studentData.json");
const scheduleInfo = require("./data/scheduleData.json");

function App() {
const [classList,setClassList] = useState('AllStudents') 
  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <ClassStartDates scheduleInfo={scheduleInfo}  SetClassList ={setClassList}/>
        <Students studentsInfo={studentsInfo} />
      </main>
    </div>
  );
}

export default App;
