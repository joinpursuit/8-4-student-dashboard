import StudentDetails from "./StudentDetails";

const StudentCard = ({data, list}) => {
    return data.map(student =>{
        return (
            <div className="card" id={student.id}>
                <img src={student.profilePhoto} alt={student.names.preferredName}/>
                <p>{student.names.preferredName} {student.names.surname}</p>
                <p>{student.username}</p>
                <p className="birthday"><span>Birthday:</span> {student.dob}</p>
                <button>Show More...</button>
                <StudentDetails student={student}/>
            </div>
        )
    }) 
}

export default StudentCard;