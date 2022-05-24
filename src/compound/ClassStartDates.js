import React, { useState } from "react";
// import ClassStartDate from "./ClassStartDate";

const ClassStartDates = ({ scheduleInfo, setClassList }) => {
  const listOfClass= (e) =>{
    const value = e.target
    console.log(value)
  }
  return (
    <div className="class">
      <h2>Choose a Class by Start Date</h2>
      <h3 className="list">
        <ul>
        <li>All Students</li>
        <hr></hr>
        {scheduleInfo.map((startDate) => {
          return (<><li onClick ={listOfClass} value={startDate}>{startDate}</li>
                    <hr></hr>
                  </>)
        })}
        </ul>
      </h3>
    </div>
  );
};
export default ClassStartDates;
