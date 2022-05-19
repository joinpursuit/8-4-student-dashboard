
const StudentCard = ({data}) => {
    return data.map(student =>{
        return (
            <div className="card" id={student.id}>
                <img src={student.profilePhoto} alt={student.names.preferredName}/>
                <p>{student.names.preferredName} {student.names.surname}</p>
                <p>{student.username}</p>
                <p>{student.dob}</p>
                <p>Show More...</p>
            </div>
        )
    }) 
}

export default StudentCard;