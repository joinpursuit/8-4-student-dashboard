import React, { useState } from "react";
import AllStudentCard from "./Components/AllStudentCard";
import CohortList from "./Components/CohortList";
import Form from "./Components/Form";
const data = require("./data/data.json"); // importing a json data to be used

function App() {
  const [cohort, setCohort] = useState(data)
  const [heading, setHeading] = useState("All Students")
  const [comments, setComments] = useState(
    data
      .filter((student) => student.notes.length > 0)
      .map((filteredStudent) => {
        return {
          commenter: filteredStudent.notes[0].commenter,
          text: filteredStudent.notes[0].comment,
        };
      })
  );
  return (
    <div className="grid">
      <h1 className="title">Student Dashboard</h1>
      <CohortList data={data} setCohort={setCohort} cohort={cohort} setHeading={setHeading} />
      <AllStudentCard data={cohort} setCohort={setCohort} heading={heading} />
      <Form comments={comments} setComments={setComments}/>
      
    </div>
  );
}

export default App;
