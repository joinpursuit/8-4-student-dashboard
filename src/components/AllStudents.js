import React, { useState } from 'react'
import StudentCards from './StudentCards'
import App from '../App'

export default function AllStudents({data}) {
 
  return (
    <div className="cardContainer">
      <h3 className="dash">All Students</h3>
        <p className="count">Total Students: {data.length}</p>
        <StudentCards data={data}/>

      {/* {console.log(data)} */}
    </div>
  )
}
