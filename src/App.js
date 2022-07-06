import React, { useState } from 'react'
import AllStudents from './components/AllStudents';
import Cohorts from './components/Cohorts';
import Form from './components/Form';
import data from "./data/data"

import './index.css';

export default function App() {
  const [cohort, setCohort] = useState(data)
  const [heading, setHeading] = useState("All Students")
  
  return (
    <div className="grid">
      <a href='https://www.pursuit.org/'><img className="Logo" src={"https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/306/original/pursuit-monogram-purplebg.jpg"} /></a>
      <h1 className="title">Student Dashboard</h1>
      <AllStudents students={cohort} heading={heading} setHeading={setHeading} />
      <Cohorts data={data} setCohort={setCohort} heading={heading} setHeading={setHeading} />
      <cardContainer data={data} />
      <Form />
    </div>
  )
}

