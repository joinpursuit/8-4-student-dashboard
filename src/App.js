import React from "react";
import { useState } from "react";
import CardContainer from "./CardContainer";
import CohortList from "./CohortList";
import data from "./data/data.json"
import "./index.css";

const App = () => {

  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState("All Students")

  return (
    <div className="grid">
      <h1 className="header">Student Dashboard</h1>
    <CohortList cohort={cohort} setcohort={setCohort} setHeading={setHeading} data={data}/>
    <CardContainer data={data} setCohort={setCohort} heading={heading}/>
    </div>
  );
}

export default App;
