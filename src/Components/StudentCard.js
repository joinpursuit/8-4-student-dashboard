import React, { useState } from "react"

const StudentCard = ({names, username, dob, certifications, codewars, cohort}) => {

    const [studentDetails, setStudentDetails] = useState(false)

    const bday = new Date(dob)
    const bdayArr = bday.toDateString().split(" ")

    const handleonTrack = () => {
       
          return (
            certifications.resume === true &&
            certifications.linkedin === true &&
            certifications.github === true &&
            certifications.mockInterview === true &&
            codewars.current.total > 600
          )
      };

    const [buttonText, setButtonText] = useState("More Information...")

    const handleButtonText = (text) => setButtonText(text)

    return (
        <div>
            <h4>{names.preferredName} {names.middleName[0]}. {names.surname} </h4>
            <h5>{username}</h5>
            <h5>{bdayArr[1] + " " + bdayArr[2] + " " + bdayArr[3]}</h5>
            {handleonTrack() ?  (
              <div>
                <h5>On Track to Graduate</h5>
              </div>
            ): null}
            
            <button type="submit" onClick={() => {setStudentDetails(!studentDetails); handleButtonText("Show Less...")} }>
                {buttonText}
                </button>

                {studentDetails ? (
                  <div>
                    <h5>Codewars:</h5>
                    <p>Current Total: {codewars.current.total}</p>
                    <p>Last Week: {codewars.current.lastWeek} </p>
                    <p>Goal: {codewars.goal.total}</p>
                    <p style={((codewars.current.total/codewars.goal.total) * 100).toFixed() >= 100 ? {color: "green"} :((codewars.current.total/codewars.goal.total) * 100).toFixed() >= 50 ? {color: "yellow"} : ((codewars.current.total/codewars.goal.total) * 100).toFixed() < 50 ? {color:"red"} : null}>Percent of Goal Acheived: {((codewars.current.total/codewars.goal.total) * 100).toFixed()}%</p>
                    <h5>Scores:</h5>
                    <p>Assignments: {cohort.scores.assignments * 100}%</p>
                    <p>Projects: {cohort.scores.projects * 100}%</p>
                    <h5>Certifications:</h5>
                    <p>Resume: {certifications.resume ? "✔" : "×"}</p>
                    <p>Linkedin: {certifications.linkedin ? "✔" : "×"}</p>
                    <p>Github: {certifications.github ? "✔" : "×"}</p>
                    <p>Mock Interview: {certifications.mockInterview ? "✔" : "×"}</p>
                    <section>
                      <h5>1-on-1 Notes</h5>
                      <form>
                        <label>
                          Commenter Name: 
                          <input type="text"/>
                        </label>
                      </form>
                    </section>
                  </div>
                ) : null}
        </div>
    )
}

export default StudentCard 