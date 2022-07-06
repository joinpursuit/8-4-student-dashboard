import React from "react";
import StudentCard from "./StudentCard";


const MoreStudentDetails = ({
  data, 
  id, 
  cohort, 
  codewars, 
  notes, 
  certifications, 
  scores}) => { 
    const checkCert = () => {
      if (
        certifications.resume === true &&
        certifications.linkedin === true &&
        certifications.github === true &&
        certifications.mockInterview === true
      ) {
        return <p className="grad">On track to Graduate</p>;
      }
    };
      
      return (
        <div className="moreDetails-card">
            <p>{checkCert()}</p>
             <div className="codewars">
           <h3>
             Codewars: 
           </h3>
           <p>Current Total: {codewars.current.total}</p>
           <p>Last Week: {codewars.current.lastWeek}</p>
           <p>Goal Total: {codewars.goal.total}</p>
           <p>Percentage of Goal Achieved: {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
              % </p>
           <br></br>        
           </div>
           <div className="scores">
           <h3>
             Scores:
           </h3>
           <p>Assignments: {cohort.scores.assignments * 100}% </p>
           <p>Projects: {cohort.scores.projects * 100}% </p>
           <p>Assessments: {cohort.scores.assessments * 100}% </p>
    
      
           <br></br>        
           </div>
           <div className="certifications">
           <h3>
             Certifications:
           </h3>
           <p>Resume: {certifications.resume ? "✓" : "x"} </p>
           <p>LinkedIn: {certifications.linkedin ? "✓" : "x"} </p>
           <p>Mock Interview: {certifications.mockInterview ? "✓" : "x"} </p>
           <p>GitHub: {certifications.github ? "✓" : "x"} </p>
  
         <br></br>        
       </div>    
         
                  {/* < OneOnOneForm /> 

         <br></br> */} 
        </div>
      );
    };
    
    export default MoreStudentDetails;