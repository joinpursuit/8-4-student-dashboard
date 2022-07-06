import {useState} from "react";
import Container from "./Components/Container";
import CohortList from "./Components/CohortList";
import "./index.css"

const data = require("./data/data.json") 
// console.log(data)

function App() {
  const [cohort, setCohort] = useState(data)
  const [heading, setHeading] = useState("All Students")
  
  return (
    <div id="header">
      <h1>Student Dashboard</h1>
      <div id="stuff">

      <CohortList 
      data={data} 
      cohort={cohort} 
      setCohort={setCohort} 
      heading={heading}
      setHeading={setHeading}/>

      <Container 
      data={cohort} 
      setCohort={setCohort} 
      heading={heading}
      setHeading={setHeading}
      />
      </div>

    </div>
  );
}

export default App;