import {FcCheckmark} from "react-icons/fc";
import {ImCross} from "react-icons/im";

const StudentDetails = ({student}) => {
    return (
        <div className="details">
            <section>
                <h4>Codewars</h4>
                <p><span>Current Total: </span>{student.codewars.current.total}</p>
                <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                <p><span>Goal: </span>{student.codewars.goal.total}</p>
                <p><span>Percent of Goal Achieved: </span>{Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100)}%</p>
            </section>
            <section>
                <h4>Scores</h4>
                <p><span>Assignments: </span>{student.cohort.scores.assignments * 100}%</p>
                <p><span>Projects: </span>{student.cohort.scores.projects * 100}%</p>
                <p><span>Assessments: </span>{student.cohort.scores.assessments * 100}%</p>
            </section>
            <section>
                <h4>Certifications</h4>
                <p><span>Resume: </span>{student.certifications.resume ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span>LinkedIn: </span>{student.certifications.linkedin ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span>Mock Interview: </span>{student.certifications.mockInterview ? <FcCheckmark/> : <ImCross/>}</p>
                <p><span>GitHub: </span>{student.certifications.github ? <FcCheckmark/> : <ImCross/>}</p>
            </section>
        </div>
    )

}

export default StudentDetails;