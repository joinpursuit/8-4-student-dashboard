import StudentDetails from "./StudentDetails";
import {useState} from 'react';

const StudentCard = ({data}) => {
    // const [show, setShow] = useState(false);

    // const handleShow = (e) => {

    //     console.log(e.target.clicked)
    //     if(clicked === true){
    //         <StudentDetails data={data}/>
    //     }
    // }

    //use useState to toggle the show more; show more can be false by default and then you setState to true and with logic render the info

    return data.map(student =>{
        return (
            <div className="card" id={student.id}>
                <img src={student.profilePhoto} alt={student.names.preferredName}/>
                <p className="graduate">{(student.certifications.resume && student.certifications.linkedin && student.certifications.mockInterview && student.certifications.github) ? 'On Track to Graduate' : ''}</p>
                <p>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</p>
                <p>{student.username}</p>
                <p className="birthday"><span>Birthday:</span> {student.dob}</p>
        
                <button>Show More...</button>
                <StudentDetails student={student}/>
            </div>
        )
    }) 
}

export default StudentCard;