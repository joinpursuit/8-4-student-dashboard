import { useState } from "react";
import data from './data/data.json';
import ClassCategories from './components/ClassCategories';
import StudentCards from "./components/StudentCards";

const App = () => {
  let matchingStudents = [];
  const [term, setTerm] = useState("");

  let allCohorts = [];

  data.forEach(el => {
    let cohort = el.cohort['cohortCode'];
    let indexNum = cohort.length - 4

    allCohorts.push(cohort.substring(0, indexNum) + " " + cohort.substring(indexNum)); //> splits the categories season and year
  })

  let uniqueCohorts = [...new Set(allCohorts)];


  return (
    <>
    <div className="header">
      <h1>Student Dashboard</h1>
    </div>
      
      <div className='class-categories-section'>
        <ClassCategories uniqueCohorts={uniqueCohorts} setTerm={setTerm}/>
      </div>
      
      <div className='student-cards-section'>
        <StudentCards term={term} data={data} matchingStudents={matchingStudents}/>
      </div>
      
    </>
  );
}

export default App;
