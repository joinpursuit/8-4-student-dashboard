import React from "react";
import Student from "./Student";

function Students({ studentsData, currentTitle }) {
  return (
    <>
      <div className='Students'>
        <div className='TitleWidget'>
          <h2>{currentTitle}</h2>
          <div>
            Total Students: <span>{studentsData.length}</span>
          </div>
        </div>
        {studentsData.map((student) => {
          return (
            <>
              <Student student={student} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Students;
