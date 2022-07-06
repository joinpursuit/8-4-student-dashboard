import React, {useState} from "react";
import CardContainer from "./Components/CardContainer";
import CohortList from "./Components/CohortList";
import Form from "./Components/Form";
const data = require("./data/data.json") 
// console.log(data)




function App() {
  const [cohort, setCohort] = useState(data)
  const [heading, setHeading] = useState("All Students")
  
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList data={data} setCohort={setCohort} cohort={cohort} setHeading={setHeading}/>
      <CardContainer data={cohort} setCohort={setCohort} heading={heading}/>
      <Form data={data}/>
    </div>
  );
}

export default App;