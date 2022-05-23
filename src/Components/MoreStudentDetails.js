import React from "react";

import StudentList from "./StudentList";
import OneOnOneForm from "./OneOnOneForm";

const MoreStudentDetails = ({data, id, cohort, codewars, notes, certifications, scores}) => { 
   
    // console.log(data.codewars);
//    let codewarsList = [...new Set(data.map((student) => student.codewars.current))];
        
    
    // const percentOfGoal = ((codewars.current.value / codewars.goal.value)* 100).toFixed(2);
    //     console.log(percentOfGoal);

    //    const handleClick = (e) => {
    //        const { value } = e.target
    //        let seeOneOnOne = OneOnOneForm()
    //        setOneOnOneForm()
    //      }
      
      return (
        <div className="moreDetails-card">
             <div className="codewars">
           <h3>
             Codewars: 
           </h3>
           <p>Current Total: {}</p>
           <p>Last Week: {}</p>
           <p>Goal Total: {}</p>
           <p>Percentage of Goal Achieved: {}</p>
       
           <br></br>        
           </div>
           <div className="scores">
           <h3>
             Scores:
           </h3>
           <p>Assignments: {}</p>
           <p>Projects: {}</p>
           <p>Assessments: {}</p>
    
      
           <br></br>        
           </div>
           <div className="certifications">
           <h3>
             Certifications:
           </h3>
           <p>Resume: {}</p>
           <p>LinkedIn: {}</p>
           <p>Mock Interview: {}</p>
           <p>GitHub: {}</p>
  
         <br></br>        
          </div>    
           {/* <button onClick={() => {setShowMore(!showMore)}}> {showMore ? "show less..." : "show more..."}</button>
                  <br></br> */}
                  {/* {showMore ?  */}
                  < OneOnOneForm /> 
                {/* //   : null} */}
         {/* <button >1-on-1 Notes</button> */}
         <br></br>
        </div>
      );
    };
    
    export default MoreStudentDetails;