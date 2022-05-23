import { useState } from 'react'
import StudentComments from './StudentComments'

const StudentForm = ({ student }) => {
  const [comment, setComment] = useState("");
  const [commentor, setCommentor] = useState("");
  const studentID = student.id;
  let studentIDComments = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCommentor("");
    // setComment("");
  }

  if(comment && commentor){
    studentIDComments.push({comment: comment, commentor: commentor});
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h3>Student Form:</h3>
        <label> Commenter Name:
          <input type='text' placeholder='add your name here' value={commentor} onChange={(e) => {
            setCommentor(e.target.value)
          }}>
          </input>
        </label>
        <br/>
        <label> 
          Comment:
          <br/>
          <input type='text' placeholder='add comment here' value={comment} onChange={(e) => {
            setComment(e.target.value);
          }}>
          </input>
        </label>
        <button type="submit">Submit</button>
        <StudentComments studentID={studentID} studentIDComments={studentIDComments} />     
      </form>
    </>
  )
}

export default StudentForm