import StudentCard from "./StudentCard";
import "./StudentList.css"

const StudentList = ({ data, heading }) => {
  const space = () => {
    if (!heading.includes("All")) {
      let i = heading.length;
      return `${heading.slice(0, i - 4)} ${heading.slice(i - 4)}`
    } else {
      return heading;
    }
  };
  return (
    <>
      <h2>{space()}</h2>
      <p>Total of Students: {data.length}</p>
      <ul className="student-list">
      {data.map(
        ({
          id,
          names,
          profilePhoto,
          username,
          dob,
          certifications,
          codewars,
          scores,
          cohort,
        }) => {
          return (
            <li key={id}>
              <StudentCard
                names={names}
                profilePhoto={profilePhoto}
                username={username}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                scores={scores}
                cohort={cohort}
              />
            </li>
          );
        }
      )}
    </ul>
    </>
  );
};
export default StudentList;
