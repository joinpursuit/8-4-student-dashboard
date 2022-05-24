import React from "react";
import Student from "./Student";

const StudentContainer = ({ data, heading }) => {
  return (
    <ul className="container">
      <h2>{heading}</h2>
      <p>Total Students: {data.length}</p>
      {data.map(
        ({
          names,
          profilePhoto,
          id,
          username,
          dob,
          certifications,
          codewars,
          cohort,
        }) => {
          return (
            <div key={id}>
              <Student
                names={names}
                profilePhoto={profilePhoto}
                username={username}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                cohort={cohort}
              />
            </div>
          );
        }
      )}
    </ul>
  );
};

export default StudentContainer;