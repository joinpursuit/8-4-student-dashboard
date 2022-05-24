import React, { useState } from 'react'
import AllStudents from './AllStudents'


export default function Cohorts({ data, cohort, setCohort, heading, setHeading }) {
  let newCohortList = [...new Set(data.map((person) => person.cohort.cohortCode))]

  const handleClick = (e) => {
    const { value } = e.target
    let filteredCohort = getSemester(data, value)
    setCohort(filteredCohort)
    if (value === "all") {
      setCohort(data);
      setHeading("All Students")
    } else {
      let filteredCohort = getSemester(data, value);
      setCohort(filteredCohort);
      setHeading(year(value))
      
    }
  };

  const getSemester = (data, semester) => {
    return data.filter((person) => { 
   return person.cohort.cohortCode === semester 
    })
  }

const year=(year)=>{
  console.log(year)
  return year.split("").slice(0,-4).join("") +" "+ year.slice(1).slice(-4)
}

  return (
    <div className="cohortL">
      <h2>Choose a Class by Start Date</h2>
      <ul className="cohortL"><button className="allButton" value="all" onClick={handleClick}>
          All Students
        </button>
      {newCohortList.map((semester) => {
        return (
        <li className="cList"><button className="cohortButton" value={semester} onClick={handleClick}>{year(semester)}</button></li>
        )
      })}
     
     </ul>
    </div>
  )
}
