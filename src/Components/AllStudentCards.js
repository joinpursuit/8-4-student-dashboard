import React from "react";
import StudentCard from "./StudentCard";

const AllStudentCards = ({
  currentStudents,
  title
}) => {

  return (
    <div className="column2">
      <h2>{title}</h2>
      <h4>Total Students: <span style={{color: "hotpink"}}> {currentStudents.length}</span></h4>
      <ul>
        {currentStudents.map(
          ({
            img,
            names,
            username,
            cohort,
            dob,
            certifications,
            codewars,
            profilePhoto,
            notes
          }) => {
            return (
              <div className="studentListItem">
              <li>
                <img className="image"
                  id={img}
                  src={profilePhoto}
                  alt={names.preferredName}
                  width={150}
                  height={150}
                ></img>
                <div className="studentInfo">
                <StudentCard
                  names={names}
                  username={username}
                  cohortCode={cohort.cohortCode}
                  dob={dob}
                  certifications={certifications}
                  codewars={codewars} 
                  cohort={cohort}
                  notes={notes}
                />
                </div>
              </li>
              </div>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default AllStudentCards;