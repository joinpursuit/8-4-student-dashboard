import StudentCard from "./StudentCard";

const CardContainer = ({ data, heading }) => {
  // console.log(data)
    
  return (
    <ul className="cardContainer">
      <h2 className="dash">{heading}</h2>
      <p className="count">Total Students: {data.length}</p>
        {data.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
        return (
          <div key={id}>
            <StudentCard
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
      })}
    </ul>
  );
};

export default CardContainer;

