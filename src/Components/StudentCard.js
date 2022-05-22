

function StudentCard(props) {
    console.log(props.student)
    const { preferredName, middleName, surname } = props.student.names
    return (
      <div>
        <img src={props.student.profilePhoto} alt="" width='190' height='190'  />

        <h3>{ preferredName } {middleName [0]}. {surname} </h3>

        <h4>{props.student.username}</h4>

        <h4>Birthday: {props.student.dob}</h4>
         

      </div>
    );
  }
  
  export default StudentCard;
  