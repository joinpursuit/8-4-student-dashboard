import React, { useState } from 'react'
import StudentDropDown from './StudentDropDown'
export default function StudentCard({ student }) {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        if (show === false) {
            setShow(true)
        } else {
            setShow(false)
        }
        console.log(show)
    }

    return (
        <div className="sCards">
                <img className="box" src={student.profilePhoto} />&nbsp;
                <p className="cardInfo">{student.names.preferredName}&nbsp;{student.names.middleName[0]}.&nbsp;{student.names.surname}<br />
                    {student.username}<br /></p>
                    <p className="Bname"> Birthday: {student.dob}<br /></p>
                <button className="showB" onClick={handleClick}>{show ? "Show Less..." : "Show More..."}</button>
                {show ? <StudentDropDown
                    cTotal={student.codewars.current.total}
                    cLastWeek={student.codewars.current.lastWeek}
                    goalT={student.codewars.goal.total}
                    assignments={student.cohort.scores.assignments}
                    projects={student.cohort.scores.projects}
                    assessments={student.cohort.scores.assessments}
                    resume={student.certifications.resume}
                    linkedin={student.certifications.linkedin}
                    mockInterview={student.certifications.mockInterview}
                    github={student.certifications.github}
                /> : null}
        </div>
    )
}
// new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "long", day: "numeric" })

