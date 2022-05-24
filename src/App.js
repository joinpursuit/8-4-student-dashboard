import React, {useState} from "react";
import Cards from "./Components/Cards";
import CohortList from "./Components/CohortList";
import data from "./data/data.json";
import OneonOne from "./Components/1on1";


function App() {
  const [cohort, setCohort] = useState(data)
  const [heading, setHeading] = useState("All Students")
  
  return (
    <div className="App">
      <h1 className="header">Student Dashboard</h1>
      <CohortList data={data} setCohort={setCohort} cohort={cohort} setHeading={setHeading}/>
      <Cards data={data} cohort={cohort} setCohort={setCohort} heading={heading}/>
      <OneonOne data={data}/>
      </div>
  );
}

export default App;
