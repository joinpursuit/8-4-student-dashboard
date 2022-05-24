import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import CohortList from './components/CohortList';
const data = require('./data/data.json');

function App() {
  const [cohort, setCohort] = useState(data);
  const [heading, setHeading] = useState('All Students');

  return (
    <div className="container">
      <h1 className="header">Student Dashboard</h1>
      <CohortList
        data={data}
        setCohort={setCohort}
        cohort={cohort}
        setHeading={setHeading}
      />
      <CardContainer
        className="cardContainer"
        data={cohort}
        setCohort={setCohort}
        heading={heading}
      />
    </div>
  );
}

export default App;
