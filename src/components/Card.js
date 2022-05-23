import React from 'react'
import ReadMoreReadLess from './ReadMoreReadLess';
import { BiX } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import StudentForm from './StudentForm';
import StudentComments from './StudentComments'

function Card({student}) {
    //> Destructuring the object 'student'
    const { id, names, username, dob, profilePhoto, certifications, codewars, cohort } = student;
    const { preferredName, middleName, surname } = names;
    const { resume, linkedin, github, mockInterview } = certifications;
    const { current, goal } = codewars
    const { scores } = cohort;

    let isGraduating;

    if (github === true && linkedin === true && mockInterview === true && resume === true && current['total'] > 600) {
        isGraduating = "visible";
    } else {
        isGraduating = "hidden"
    }

    return (
        <div key={id} id={id}>
            <ReadMoreReadLess> 
            <ul><img src={profilePhoto} alt={`${preferredName}-${surname}`}></img></ul>
            <ul>{preferredName} {middleName} {surname}</ul>
            <ul><span>Email:</span> {username} </ul>
            <ul><span>Birthday:</span> {dob} </ul>
            <ul className={isGraduating}>On Track to Guaduate</ul>

            {/* Below is hidden unless the togglebutton is hit */}
            {/* <div className="hiddenStudentData">
            <> */}
                <section id="codewars">
                    <h3>Codewars:</h3>
                    <ul><span>Current Total:</span> {current['total']}</ul>
                    <ul><span>Last Week:</span> {current['lastWeek']}</ul>
                    <ul><span>Goal:</span> {goal['total']}</ul>
                    <ul><span>Percent of Goal Achieved:</span> {((current['total'] / goal['total']) * 100).toFixed(0)}%</ul>
                </section>
                <section id="scores">
                    <h3>Scores:</h3>
                    <ul><span>Assignments:</span> {(scores.assignments * 100).toFixed(0)}%</ul>
                    <ul><span>Projects:</span> {(scores.projects * 100).toFixed(0)}%</ul>
                    <ul><span>Assessments:</span> {(scores.assessments * 100).toFixed(0)}%</ul>
                </section>
                <section id="certifications">
                    <h3>Certifications:</h3>
                    <ul><span>Resume:</span> {resume === true ? <BsCheck/> : <BiX/>}</ul>
                    <ul><span>LinkedIn:</span> {linkedin === true ? <BsCheck/> : <BiX/>}</ul>
                    <ul><span>Github:</span> {github === true ? <BsCheck/> : <BiX/>}</ul>
                    <ul><span>Mock Interview:</span> {mockInterview === true ? <BsCheck/> : <BiX/>}</ul>
                </section>
                
            {/* </div>
            </> */}
                <StudentForm student={student}/>
            </ReadMoreReadLess>
        </div>
    )
}

export default Card;