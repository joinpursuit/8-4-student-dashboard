import React from 'react'

function StudentComments(prop) {
    const { studentID,studentIDComments} = prop;

    console.log(studentID)
    
    if(studentIDComments.length > 0){
        console.log("here");
        return (
            <>
                {studentIDComments.map((el) => (
                <li id={Math.floor(Math.random() * 10000) + 1}>
                    {el["commentor"]} says, "{el["comment"]}"
                </li>
                ))}        
            </>
        );

    }
  
}

export default StudentComments