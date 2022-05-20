const StudentCard = ({ names, profilePhoto, username, dob }) => {
  return (
    <div className="studentCard">
      <img src={profilePhoto} width="50px"></img>
      <h3>
        Name: {`${names.preferredName} ${names.middleName} ${names.surname}`}
      </h3>
      <p>Email: {username}</p>
      <p>Birthday: {dob}</p>
      <br></br>
      <button>Show more...</button>
    </div>
  );
};

export default StudentCard;
