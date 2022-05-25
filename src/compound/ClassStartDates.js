import React, { useState } from "react";
// import ClassStartDate from "./ClassStartDate";

const ClassStartDates = ({ scheduleInfo, setClassList, classList }) => {
  const listOfClass = (e) => {
    console.log(e);
    const year = e.target.id;
    console.log(year);

    // console.log(scheduleInfo[1].replace(/" "/g, ""))
  };
  return (
    <div className="class">
      <h2>Choose a Class by Start Date</h2>
      <h3 className="list">
        <ul>
          <li>All Students</li>
          <hr></hr>
          {scheduleInfo.map((startDate) => {
            console.log(startDate);
            return (
              <>
                <li
                  onClick={(e) => {
                    listOfClass(e);
                  }}
                  id={startDate}
                  value={startDate}
                >
                  {startDate}
                </li>
                <hr></hr>
              </>
            );
          })}
        </ul>
      </h3>
    </div>
  );
};
export default ClassStartDates;
