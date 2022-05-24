import React from 'react'

export default function Cohort(props) {
    const { studentData, setStudents } = props 
    console.log(studentData);

  return (
      <React.Fragment>
    
        <h3>Choose a class by start date</h3>
        
        <ul>
            <li> All Students</li>

            {studentData.map((student) => {
                // const { cohortCode } = student.cohort.cohortCode;

                return (
                 
                
           
               
            
            <li>
                <button>Winter 2026</button>
            </li>
        </ul>
        </React.Fragment>
    
  )
}
