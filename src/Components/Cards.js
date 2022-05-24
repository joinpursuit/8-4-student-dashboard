import StudentCard from "./StudentCard";

const Cards = ({ cohort, heading }) => {
    
  return (
    <ul className="cards">
      <h2>{heading}</h2>
      <p>Total Students: {cohort.length}</p>
        {cohort.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
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

export default Cards;