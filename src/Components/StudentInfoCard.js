import React, { useState } from "react";
import CohortList from "./CohortList";

const StudentInfoCard = ({datas,names,username,dob,profilePhoto, dobreturn, cohort,filterCohort,onTrackToGraduate,codewars,
    certifications, showText, setShowText,notes}) => { //need all the info so I can use it in the return -- needs to be pass from - student list. 
//2/3/1979 --- February 3, 1979;



const onClick = () => {
    setShowText(!showText);
}

const Text = () => {
return (
<div>
    <h3>Codewars:</h3> 
    <p>Current Total: {codewars.current.total}</p> 
    <p>Last Week: {codewars.current.lastWeek}</p>
    <p>Goal: {codewars.goal.total}</p>
    <p>Percent of Goal Achieved: <span style={{color:"red"}}>  { (((codewars.current.total/codewars.goal.total)* 100).toFixed(0)  ) }</span>%</p>
    
    <h3>Scores:</h3> 
    <p>Assignments: {cohort.scores.assignments * 100}%</p> 
    <p>Project: {cohort.scores.projects * 100}%</p>
    <p>Assessments: {cohort.scores.assessments * 100}%</p>


    <h3>Certifications:</h3> 
    <p>Resume: {String(certifications.resume)}</p> 
    <p>Linkedin: {String(certifications.linkedin)}</p>
    <p>mockInterview: {String(certifications.mockInterview)}</p>
    <p>github: {String(certifications.github)}</p>

    {/* showText ? <Text/> : null */}


    <div>
    <form>
            <h3>1-on-1 Notes</h3>
        <label>Commenter Name</label> <input/>
        <br/>
        <label>Comment </label> <input/>
        <br/>
        <button>Add Note</button>
    </form>
    {/* <ul>
        {
            notes.map((e) => {
                return (
                   <li>{e}</li>
                )

            })

        }

    </ul> */}
    </div>


</div>
)
}


return (
    //need to make it into another conpoent - where it shows the 4 things - then this coponment bring it out base on HOW MANY STUDENT. 
    <>
    <img src = {profilePhoto}/>
    <p><strong>{names.preferredName} {names.middleName[0]}. {names.surname}</strong></p>
    <p>{username}</p>
    <p>Birthday: {dobreturn}</p>
    <p>{onTrackToGraduate}</p>
    
    {/* <p onClick={showMoreInfo}>{codewars.current.total}</p> */}
    {/* {showMoreInfo()} */}

<button onClick={onClick}>Show More</button>
{showText ? <Text/> : null}


{/* <button onClick={showMoreInfo}>Show More...</button> */}




    <br/><br/>
    {/* <p>{cohort.cohortCode}</p> */}
    {/* <li>Birthday:{dob}</li> */}
    
    {/* graduate is written ere.  */}
    </>
//maybe MAKE A FUNCTION THAT DOES THE BIRTHDAY CALUCATION. INTO STRING. 
)
}

export default StudentInfoCard;