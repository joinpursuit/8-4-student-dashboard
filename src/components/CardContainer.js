import StudentCard from './StudentCard';

const CardContainer = ({ data, heading }) => {
  return (
    <ul className="cardContainer">
      <h2>{heading}</h2>
      <h1>Total Students: {data.length}</h1>
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
            <li key={id}>
              <StudentCard
                names={names}
                profilePhoto={profilePhoto}
                username={username}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                cohort={cohort}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CardContainer;
