import React, { useState } from "react";
import Notes from "./Notes";

function OneonOne(props) {
  const { data } = props;
  const [commentator, setCommentator] = useState("");
  const [comment, setComment] = useState("");
let results = [];
  const handleSubmit = (e) => {
      e.preventDefault();
      results.push(commentator)
    }
  const handleCommentator = (e) => {
        const {value} = e.target;
        setCommentator(value);
  }
  
  const handleComment = (e) => {
    const {value} = e.target;
    setComment(value);
}
return (
    <div className="form">
        <h2>1-on-1</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" onChange={handleCommentator} value={commentator}></input>
          </label>
          <br />
          <label>
            Comments
            <input type="text" onChange={handleComment} value={comment}></input>
          </label>
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
  );
}

export default OneonOne 
