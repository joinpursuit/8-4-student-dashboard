import React, { useState } from "react";
import data from "./data/data"
import StudentCard from "./StudentCard";
// import MoreStudentDetails from "./MoreStudentDetails";

const OneOnOneForm = () => {
    const [commentorName, setCommentorName] = useState("");
    const [comment, setComment] = useState(data
        .filter((student) => student.notes.length > 0)
        .map((filteredStudent) => {
          return {
            commentorName: filteredStudent.notes[0].commentorName,
            text: filteredStudent.notes[0].comment,
          };
        })
    );

    const handleCommentorName = (e) => {
        const { value } = e.target;
        setCommentorName(value);
    }
  
    const handleComment = (e) => {
            const { value } = e.target;
            setComment(value);
    }

        const handleSubmit = (e) => {
            const { value } = e.target;
           handleCommentorName();
           handleComment()
          }

return (
    <div>
        <section className="notes-form">
        <h2>1-0n-1 Notes</h2>
        <form onSubmit={handleSubmit} >
        <p>Commentor Name: <input
            type="text"
            name="commentorName"
            value={ commentorName }
            placeholder=""
            onChange={ handleCommentorName }
          /></p>
          <p>Comment: <input
            type="text"
            name="comment"
            value={ comment }
            placeholder=""
            onChange={ handleComment }
          /></p>
          <button type="submit">Add Note</button>
        </form>      
        <ul>
        <div className="notes">
              <li>
             {commentorName} says, "{comment}";
             {/* <Form comments={comments} setComments={setComments}/> */}
              </li>
              <br></br>
            </div>  
        </ul>
        </section>
    </div>
)}



export default OneOnOneForm;
