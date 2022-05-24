import React from 'react'
import StudentCard from './StudentCard';

export default function StudentList(props) {
    console.log(props)
  return (
    <div>{props.studentData.map(student => <StudentCard student={student}/>)}
      <h3>All Students</h3>
      <h2>Total Students: </h2>
    </div>
  )
}
