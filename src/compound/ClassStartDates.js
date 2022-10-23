import React from "react";
// import ClassStartDate from "./ClassStartDate";

const ClassStartDates = ({ scheduleInfo, setClassList, classList, studentsInfo }) => {
  //Handle Student Update
  const listOfClass = (e) => {
    const value = e.target.id;
    setClassList(value.split(' ').join(''))
    
  };
  // const classFilter =()=>{
  //   const studentFilter = studentsInfo.filter((student)=>classList === student.cohort.cohortCode)
  
  //   if(value === "AllStudents"){
  //     setStudentList(studentsInfo)
  //   }else{
  //     setStudentList(studentFilter)
  //   }
  // }

  return (
    <div className="class">
      <h2>Choose a Class by Start Date</h2>
      <h3 className="list">
        <ul>
          <li id='AllStudents' onClick={(e)=>{
            listOfClass(e)  
          }}>All Students</li>
          <hr></hr>
          {scheduleInfo.map((startDate) => {
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
