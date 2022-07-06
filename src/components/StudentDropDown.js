import React from 'react'

export default function StudentDropDown({ cTotal, goalT, cLastWeek, resume, assignments, projects, assessments, linkedin, mockInterview, github }) {

    return (
        <div className="parent" >
            <section className="child" >
                <h3  className="showTitle">Codewars</h3>
                <p>Current Total:{cTotal}</p>
                <p>Last Week:{cLastWeek}</p>
                <p>Goal:{goalT}</p>
                <p>Percentage of Goal Achieved:{((cTotal / goalT) * 100).toFixed(0)}%</p>
            </section>

            <section className="child" >
                <h3 className="showTitle">Scores:</h3>
                <p>Assignments:{assignments}</p>
                <p>Projects:{projects}</p>
                <p>Assessments:{assessments}</p>
            </section>

            <section className="child" >
                <h3 className="showTitle">Certifications</h3>
                <p>Resume: {resume ? " ✓ " : "x"}</p>
                <p>Linked: {linkedin ? " ✓ " : "x"}</p>
                <p>Mock Interview: {mockInterview ? "✓" : "x"}</p>
                <p>Github: {github ? "✓" : "x"}</p>
            </section>
        </div >
    )
}
