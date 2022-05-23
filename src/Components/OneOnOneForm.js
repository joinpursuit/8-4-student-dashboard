import { useState }from "react";

const OneOnOneForm = () => {
    const [commentatorName, setCommentatorName] = useState("");
    const [comment, setComment] = useState("");


    const handleCommentatorName = (e) => {
        const { value } = e.target;
        setCommentatorName(value);
    }
  
    const handleComment = (e) => {
            const { value } = e.target;
            setComment(value);
    }

        const handleSubmit = (e) => {
            const { value } = e.target;
      
           handleCommentatorName();
           handleComment()
          }

return (
    <div>
        <section className="notes-form">
        <h2>1-0n-1 Notes</h2>
        <form onSubmit={handleSubmit} >
        <p>Commentator Name: <input
            type="text"
            name="commentatorName"
            value={ commentatorName }
            placeholder=""
            onChange={ handleCommentatorName }
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
             {commentatorName} says, "{comment}";
              </li>
              <br></br>
            </div>  
        </ul>
        </section>
    </div>
)

}

export default OneOnOneForm;