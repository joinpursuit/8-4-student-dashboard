import React, { useState } from 'react'
import AllStudents from './components/AllStudents';
import Cohorts from './components/Cohorts';
import StudentCards from './components/StudentCards';
import data from "./data/data"
import './index.css';



export default function App() {
const [ cohort, setCohort] = useState(data)

  return (
    <div className="grid">
      <h1 className="title">Student Dashboard</h1>
   <AllStudents data = {cohort}/>
   <Cohorts data={data}  setCohort={setCohort}/>

    </div>
  )
}