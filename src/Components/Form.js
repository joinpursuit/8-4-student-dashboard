import React, { useState } from "react";
import Notes from "./Notes";

export default function Form(props) {
  const { data } = props;
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
let results = [];
  const handleSubmit = (e) => {
      e.preventDefault();
    //   alert ("come on get to work")

         results.push(commenter)
        //  e.target.reset()
    
  }


  const handleCommenter = (e) => {
        const {value} = e.target;
        setCommenter(value);
  }
  
  const handleComment = (e) => {
    const {value} = e.target;
    setComment(value);
}



  
//   console.log(results)
  
  
  
  
  return (
    <fieldset>
      <div>
        <h2>1-on-1</h2>
        <form onSubmit={handleSubmit}>
          <lable>
            Commenter Name
            <input type="text" onChange={handleCommenter} value={commenter}></input>
          </lable>
          <br />
          <lable>
            Comments
            <input type="text" onChange={handleComment} value={comment}></input>
          </lable>
          <br />
          <button type="submit">Add Note</button>
        </form>

        <section>
            <ul>
          {data.filter((student) => student.notes.length > 0).map((filteredStudent) => (
              <li>{`${filteredStudent.notes[0].commenter} says, "${filteredStudent.notes[0].comment}"`} </li>
            ))}
            {results.map((result) => {
                return (
                    <Notes result={result}/>
                )
            })}

            </ul>
            
            
        </section>
      </div>
    </fieldset>
  );
}