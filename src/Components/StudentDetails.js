const StudentDetails = ({student}) => {
    return (
        <div className="details">
            <section>
                <h4>Codewars</h4>
                <p><span>Current Total: </span>{student.codewars.current.total}</p>
                <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                <p><span>Goal: </span>{student.codewars.goal.total}</p>
                <p><span>Percent of Goal Achieved: </span>1</p>
            </section>
            <section>
                <h4>Certifications</h4>
                <p><span>Resume: </span>{student.certifications.resume}</p>
                <p><span>LinkedIn: </span>1</p>
                <p><span>Mock Interview: </span>1</p>
                <p><span>GitHub: </span>1</p>
            </section>
        </div>
    )

}

export default StudentDetails;