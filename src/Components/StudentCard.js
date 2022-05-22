import StudentDetails from "./StudentDetails";
import {useState} from 'react';

const StudentCard = ({data}) => {
    const [show, setShow] = useState(false);

    //once show is set to true it is true for all buttons not just one button; how to make it work for one button at a time??
    // const handleShow = (e) => {
    //     const {value} = e.target;
    //     console.log(value)

    //     data.forEach((person => {
    //         if(person.id === value){
    //             setShow(!show)
    //         }
    //     }))
    // }

    return data.map((student) =>{
        return (
            <div className="card" id={student.id}>
                <img src={student.profilePhoto} alt={student.names.preferredName}/>
                <p className="graduate">{(student.certifications.resume && student.certifications.linkedin && student.certifications.mockInterview && student.certifications.github && student.codewars.current.total > 600) ? 'On Track to Graduate' : ''}</p>
                <p>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</p>
                <p>{student.username}</p>
                <p className="birthday"><span>Birthday:</span> {student.dob}</p>
                <button value={student.id} onClick={() => setShow(!show)}>{show ? 'Show Less...' : 'Show More...'}</button>
                {show ? <StudentDetails student={student}/> : null}
            </div>
        )
    }) 
}

export default StudentCard;