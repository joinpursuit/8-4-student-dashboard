import { useState } from "react"
const StudentCard = (props) => {
    const [showMore,setShowMore]= useState(false)

    const handleClick = () => {
        if(showMore === false){
setShowMore(true)
        }else{
            setShowMore(false)
        }
    }
    debugger
    const show = () => {
        if(showMore === true){
            return(
            <div>
          <section>
            <h3><span>CodeWars:</span></h3>
            <p>Current Total: {props.student.codewars.current.total}</p>
            <p>Last Week: {props.student.codewars.current.lastWeek}</p>
            <p>Goal: {props.student.codewars.goal.total}</p>
            <p>Percentage of Goal Achieved: {((props.student.codewars.current.total/props.student.codewars.goal.total)*100).toFixed(0)}%</p>
          </section>
          <section>
            <h3><span>Scores:</span></h3>
            <p>Assignments: {(props.student.cohort.scores.assignments)*100}%</p>
            <p>Projects: {(props.student.cohort.scores.projects)*100}%</p>
            <p>Assessments: {(props.student.cohort.scores.assessments)*100}%</p>
          </section>
          <section>
            <h3><span>Certification:</span></h3>
            <p>Resume: {props.student.certifications.resume ? "✅" : "❌"}</p>
            <p>LinkedIn: {props.student.certifications.linkedin ? "✅" : "❌"}</p>
            <p>Mock Interview: {props.student.certifications.mockInterview ? "✅" : "❌"}</p>
            <p>GitHub: {props.student.certifications.github ? "✅" : "❌"}</p>
          </section>
        </div>
      )
    }
  }

  const certCheck = () => {
    if(props.student.certifications.resume === true && props.student.certifications.linkedin === true && props.student.certifications.github === true && props.student.certifications.mockInterview === true){
      return (
        <p>On track to Graduate</p>
      )
    }
  }

    
    console.log(props)
    return(
        <div>
            <img className="studentPhoto" src = {props.student.profilePhoto} alt="Student"/>
            <br></br>
            <section className="studentCard">
            <strong>
            {props.student.names.preferredName} {props.student.names.middleName.charAt(0)}. {props.student.names.surname}
            </strong>
            <p>{certCheck()}</p>
            <h4>{props.student.username}</h4>
            <h4>Birthday: {props.student.dob}</h4>
            <br></br>
            <button onClick = {handleClick}>Show More...</button>
            <section>{show()}</section>

            </section>


        </div>
    )

}
export default StudentCard
