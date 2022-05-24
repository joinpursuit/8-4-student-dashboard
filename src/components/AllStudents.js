import React, { useState } from 'react'
import StudentCards from './StudentCards'
import App from '../App'

export default function AllStudents({ students, heading }) {

  return (
    <div className="cardContainer">
      <h3 className="dash">{heading}</h3>
      <p className="count">Total Students: {students.length}</p>
      <StudentCards students={students} />
    </div>
  )
}
