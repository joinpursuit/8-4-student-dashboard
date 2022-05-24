import React from "react";
import Notes from "./Notes";

export default function Form({ comments, setComments }) {
  //   const { data, } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { commenter, commenttext} = e.target;
    if (commenter.value && commenttext.value) {
    setComments([...comments, {commenter: commenter.value, text:commenttext.value}])
    commenter.value = "";
    commenttext.value = "";
    }
    // e.target.reset();
  };

  // console.log(comments)

  return (
    
      <div className="form">
        <h2>1-on-1</h2>
        <form onSubmit={handleSubmit}>
          <lable>
            Commenter Name
            <input type="text" name="commenter"></input>
          </lable>
          <br />
          <lable>
            Comments
            <input type="text" name="commenttext"></input>
          </lable>
          <br />
          <button className='note' type="submit">Add Note</button>
        </form>

        <section>
          <ul>
            {comments.map((comment) => 
              <Notes comment={comment} />
            )}
          </ul>
        </section>
      </div>
  
  );
}
