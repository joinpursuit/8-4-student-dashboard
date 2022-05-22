import React from "react";
import Data from "../data/data.json";

const StudentList = () => {
  return (
    <div>
      {Data.map((data) => {
        return (
          <div>
            {data.names.preferredName} {data.names.middleName}{" "}
            {data.names.surname}
            <br></br>
            {data.username}
            <br></br>
            {data.dob}
            <br></br>
            <img src={data.profilePhoto} alt="picture"></img>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;