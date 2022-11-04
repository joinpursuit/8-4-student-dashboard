import StudentDetails from "./StudentDetails";
import {useState} from "react";

const StudentCard = ({data}) => {
    const [show, setShow] = useState(false);
    //useState for comments here for every student
    //set it as an object not an array
    const [comments, setComments] = useState(data.notes);

    return (
        <div className="card" >
            <img src={data.profilePhoto} alt={data.names.preferredName}/>

            <p className="graduate">{(data.certifications.resume && data.certifications.linkedin && data.certifications.mockInterview && data.certifications.github && data.codewars.current.total > 600) ? 'On Track to Graduate' : ''}</p>

            <p>{data.names.preferredName} {data.names.middleName[0]}. {data.names.surname}</p>

            <p>{data.username}</p>

            <p className="birthday"><span>Birthday:</span> {data.dob}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Show Less...' : 'Show More...'}</button>

            {show ? <StudentDetails student={data} comments={comments} setComments={setComments} /> : null}
        </div>
    )
}

export default StudentCard;