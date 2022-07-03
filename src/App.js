import { React, useState } from "react";
import Cohort from "./components/Cohort";
import Students from "./components/Students";
import Data from "./data/data.json";

function App() {
  const initialSate = [...Data];
  const [studentsData, setStudentsData] = useState([...initialSate]);
  const [currentTitle, setCurrentTitle] = useState("All Students");
  const [showMore, setShowMore] = useState([]);
  const [linkName, setLinkName] = useState(
    !showMore ? "Show Less..." : "Show More... "
  );

  return (
    <div className='container'>
      <div className='Header'>
        <h1>Student Dashboard</h1>
      </div>
      <Cohort
        studentsData={studentsData}
        setStudentsData={setStudentsData}
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        initialSate={initialSate}
      />
      <Students
        showMore={showMore}
        setShowMore={setShowMore}
        linkName={linkName}
        setLinkName={setLinkName}
        studentsData={studentsData}
        setStudentsData={setStudentsData}
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
      />
    </div>
  );
}

export default App;
