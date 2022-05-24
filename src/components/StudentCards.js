import React from 'react'
import Cohorts from './Cohorts'
import StudentCard from './StudentCard'

export default function StudentCards({ students }) {


  return (
    <div>
      {students.map((student) =>
        <StudentCard student={student} />
      )}
    </div>
  )
}


















