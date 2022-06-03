import React, { useState } from "react";
import StudentDetails from "./StudentDetails";

const StudentCard = (student) => {
  const {
    id,
    names,
    username,
    dob,
    profilePhoto,
    codewars,
    certifications,
    notes,
    cohort,
  } = student.student; //first student is the object and second student is the key
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <div className="card_body">
        <h2>
          {names.preferredName} {names.middleName[0]}. {names.surname}
        </h2>
        <h2>{username}</h2>
        <h2>Birthday:{dob}</h2>
        <div className="card_img">
          <img src={profilePhoto} alt="photo" height={200} width={200} />
        </div>
      </div>
      <div className="card_button">
        <button onClick={toggleReadMore}>
          {readMore ? "show more" : "show less"}
        </button>
      </div>
      <StudentDetails
        codewars={codewars}
        cohort={cohort}
        certifications={certifications}
      />
    </div>
  );
};

export default StudentCard;
