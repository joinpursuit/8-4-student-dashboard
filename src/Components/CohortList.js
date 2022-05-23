import React from "react";


const CohortList = ({students, setCurrentStudents, setTitle}) => {

        const noDuplicates = []
        students.forEach((student) => {
            if(!noDuplicates.includes(student.cohort.cohortCode)){
                noDuplicates.push(student.cohort.cohortCode)
            }
        })

        const handleStudents = (cohort) => {
            setCurrentStudents(students.filter((student)=>student.cohort.cohortCode === cohort))
        }

        const handleAllStudents = () => {
            setCurrentStudents(students)
            setTitle("All Students")
        }
        

    return(
        <div>
            <h2>Choose A Class By Start Date</h2>
            <ul>
                <li onClick={handleAllStudents}>
                    All Students
                </li>
                {noDuplicates.map((cohort)=>{
                    return(
                        <li key="cohortlist" onClick={()=>{handleStudents(cohort); setTitle(cohort.slice(0,-4) + " " + cohort.slice(-4))}}>
                           {cohort.slice(0,-4) + " " + cohort.slice(-4)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CohortList