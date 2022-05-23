import React, { useState } from "react";
import CohortList from "./CohortList";

const StudentInfoCard = ({datas,names,username,dob,profilePhoto, dobreturn, cohort,filterCohort,onTrackToGraduate,codewars,
    certifications,notes}) => { //need all the info so I can use it in the return -- needs to be pass from - student list. 
//2/3/1979 --- February 3, 1979;

const [showText, setShowText] = useState(false);// might needs to move it 

const onClick = () => {
    setShowText(!showText);
}

const Text = () => {
const percentColor = 0;

const TextColorChange = () => {
    if ((((codewars.current.total/codewars.goal.total)* 100).toFixed(0)) > 100) {
            return (<><span style={{color:"green"}}>  { (((codewars.current.total/codewars.goal.total)* 100).toFixed(0)  ) }</span>%</>)
        }else if ((((codewars.current.total/codewars.goal.total)* 100).toFixed(0)) > 50 || (((codewars.current.total/codewars.goal.total)* 100).toFixed(0)) < 100) {
            return (<><span style={{color:"yellow"}}>  { (((codewars.current.total/codewars.goal.total)* 100).toFixed(0)  ) }</span>%</>)
        } else if ((((codewars.current.total/codewars.goal.total)* 100).toFixed(0)) < 50) {
            return (<><span style={{color:"red"}}>  { (((codewars.current.total/codewars.goal.total)* 100).toFixed(0)  ) }</span>%</>)
        }
}


const checkResume = () => {
 if (String(certifications.resume) === 'true') {
     return (<span>&#10003;</span>)
 } else {return (<span>&#10539;</span>)}
}

const checkLinkedin = () => {
    if (String(certifications.linkedin) === 'true') {
        return (<span>&#10003;</span>)
    } else {return (<span>&#10539;</span>)}
   }

   const checkMockInterview = () => {
    if (String(certifications.mockInterview) === 'true') {
        return (<span>&#10003;</span>)
    } else {return (<span>&#10539;</span>)}
   }


   const checkGithub = () => {
    if (String(certifications.github) === 'true') {
        return (<span>&#10003;</span>)
    } else {return (<span>&#10539;</span>)}
   }


return (
<div>
    <h3>Codewars:</h3> 
    <p>Current Total: {codewars.current.total}</p> 
    <p>Last Week: {codewars.current.lastWeek}</p>
    <p>Goal: {codewars.goal.total}</p>
   
    <p>Percent of Goal Achieved: {TextColorChange()} </p>
    


    <h3>Scores:</h3> 
    <p>Assignments: {cohort.scores.assignments * 100}%</p> 
    <p>Project: {cohort.scores.projects * 100}%</p>
    <p>Assessments: {cohort.scores.assessments * 100}%</p>


    <h3>Certifications:</h3> 
    <p>Resume: {checkResume()} </p> 
    <p>Linkedin: {checkLinkedin()}</p>
    <p>mockInterview: {checkMockInterview()}</p>
    <p>github: {checkGithub()}</p>

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
    <div className="StudentList">
    <img src = {profilePhoto}/>
    
    <div className="StudentListText">
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

    </div>
       </div>
//maybe MAKE A FUNCTION THAT DOES THE BIRTHDAY CALUCATION. INTO STRING. 
)
}

export default StudentInfoCard;