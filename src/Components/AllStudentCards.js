import React from "react";
import StudentCard from "./StudentCard";

const AllStudentCards = ({
  currentStudents,
  title
}) => {

  return (
    <div>
      <h2>{title}</h2>
      <h4>Total Students: {currentStudents.length}</h4>
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
          }) => {
            return (
              <li>
                <StudentCard
                  names={names}
                  username={username}
                  cohortCode={cohort.cohortCode}
                  dob={dob}
                  certifications={certifications}
                  codewars={codewars} 
                  cohort={cohort}
                />
                <img
                  id={img}
                  src={profilePhoto}
                  alt={names.preferredName}
                  width={50}
                  height={50}
                ></img>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default AllStudentCards;
