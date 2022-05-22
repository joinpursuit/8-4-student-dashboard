import React, { useState } from 'react'


export default function Cohorts({ data, cohort, setCohort }) {
  let newCohortList = [...new Set(data.map((person) => person.cohort.cohortCode))]

  const handleClick = (e) => {
    const { value } = e.target
    let filteredCohort = getSemester(data, value)
    setCohort(filteredCohort)
  }
  

  const getSemester = (data, semester) => {
    return data.filter((person) => {
   return person.cohort.cohortCode === semester
   
    })
  }
const year=()=>{
  data.filter((year)=>{
  return(
     year.cohort.cohortCode.split("").slice(0,-4).join("") +" "+year.cohort.cohortCode.slice(1).slice(-4)
  )
})
}

console.log(year)


  return (
    <div className="cohortL">

      <h3>Choose a Class by Start Date</h3>

      {newCohortList.map((semester) => {
        return (
          <li className="cList"><button className="cohortButton" value={semester} onClick={handleClick}>{semester}</button></li>
        )
      })}
    </div>
  )
}
