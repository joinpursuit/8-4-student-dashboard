import StudentCard from "./StudentCard";

const CardContainer = ({ data }) => {
    
  return (
    <ul className="container">
      <h2>Start Date: </h2>
      <p>Total Students: </p>
        {data.map(({ names, profilePhoto, id, username, dob}) => {
        return (
          <div key={id}>
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
  );
};

export default CardContainer;

