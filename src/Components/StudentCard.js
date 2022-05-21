

function StudentCard(props) {
    console.log(props.student)
    return (
      <div>
        <h1>{props.student.names.preferredName}</h1>
        <img src={props.student.profilePhoto} />  

      </div>
    );
  }
  
  export default StudentCard;
  