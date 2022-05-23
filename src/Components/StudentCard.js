import React, { useState } from "react"

const StudentCard = ({names, username, dob, certifications, codewars, cohort, notes}) => {

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

    const [buttonText, setButtonText] = useState(false)

    // const handleButtonText = (text) => {
    //   setButtonText(text)
    // }

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [submitButton, setSubmitButton] = useState("")

    const handleInput1 = (event) => {
      setInput1(event.target.value)
    }

    const handleInput2 = (event) => {
      setInput2(event.target.value)
    }

    const handleSubmitButton = (event) => {
      event.preventDefault()
      return (
        <li>
        {setSubmitButton({input1} + "says," + {input2})} 
      </li>
      )
    }

    return (
        <div>
            <h4>{names.preferredName} {names.middleName[0]}. {names.surname} </h4>
            <h5>{username}</h5>
            <h5>Birthday: {bdayArr[1] + " " + bdayArr[2] + ", " + bdayArr[3]}</h5>
            {handleonTrack() ?  (
              <div>
                <h5>On Track to Graduate</h5>
              </div>
            ): null}
            
            <button type="submit" onClick={() => {setStudentDetails(!studentDetails); setButtonText(!buttonText)} }>
                {buttonText ? "Show Less..." : "Show More..."}
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
                    <section className="section1">
                      <form>
                      <h5>1-on-1 Notes</h5>
                        <label>
                          Commenter Name: 
                          <input type="text"value={input1} onChange={handleInput1}/>
                        </label>
                        <br></br>
                        <label>
                          Comment:
                          <input type="text" value={input2} onChange={handleInput2}/>
                        </label>
                        <br></br>
                        <input type="submit" value="Add Note"/>
                      </form>
                      <ul>
                        {handleSubmitButton}
                        {notes.map(({commenter, comment})=>{ return(
                          <li>
                            {commenter} says, {comment} 
                          </li>
                        )
                        })}
                      </ul>
                    </section>
                  </div>
                ) : null}
        </div>
    )
}

export default StudentCard 