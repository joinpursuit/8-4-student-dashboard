import React, { useState } from "react";
import CardContainer from "./Components/CardContainer";
import CohortList from "./Components/CohortList";
import Form from "./Components/form";
const data = require("./data/data.json");
// console.log(data)

function App() {
  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState("All Students");
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
    <div className="page">
      <h1 className="nav"><marquee loop="100">Student Dashboard 👀</marquee></h1>
      <CohortList
        data={data}
        setCohort={setCohort}
        cohort={cohort}
        setHeading={setHeading}
      />
      <CardContainer data={cohort} setCohort={setCohort} heading={heading} />
      <Form comments={comments} setComments={setComments}/>
    </div>
  );
}

export default App;
