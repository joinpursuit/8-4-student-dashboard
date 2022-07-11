import React from "react";

function StudentCard(props) {
  const { profilePhoto, username } = props.student;
  const { preferredName, middleName, surname} = props.student.names;
  
  

  return (
    <div className="studentPhoto">
      <img src={profilePhoto} alt={preferredName} />
      <section className="studentInfo">
        <h3>{preferredName} {middleName[0]}. {surname}</h3>
        <p>{username}</p>
      </section>
    </div>
  );
}

export default StudentCard;
