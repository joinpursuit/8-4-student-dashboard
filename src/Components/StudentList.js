import StudentCard from "./StudentCard";

const StudentList = ({ data, cohortName}) => {
  return (
    <div className="allStudents-box">
      <ul>
        <h2>{cohortName ? cohortName.slice(0, -4) + " " + cohortName.slice(-4) : "All Students"} </h2>
        <p>Total Students: {data.length}</p>
        {data.map(({ names, profilePhoto, id, username, dob }) => {
          return (
            <div className="student-card" key={id}>
              <StudentCard
                names={names}
                profilePhoto={profilePhoto}
                username={username}
                dob={dob}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default StudentList;
