import { useState } from "react";
import MoreStudentDetails from "./MoreStudentDetails";

const StudentCard = ({ names, profilePhoto, username, dob }) => {
  let midNameInit = names.middleName.charAt(0);

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="student-card">
      <img src={profilePhoto} width="50px"></img>
      <h3>Name: {`${names.preferredName} ${midNameInit}. ${names.surname}`}</h3>
      <p>Email: {username}</p>
      <p>Birthday: {dob}</p>
      <br></br>
     <button onClick={() => {setShowMore(!showMore)}}> {showMore ? "show less..." : "show more..."}</button>
                  <br></br>
                  {showMore ? < MoreStudentDetails /> : null}
                  <p className="student-card-end">___________________________</p>
                  <br></br>
    </div>
  );
};

export default StudentCard;


