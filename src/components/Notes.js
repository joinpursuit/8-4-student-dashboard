import { React, useState, useEffect } from "react";

function Notes({studentId}) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [displayComment, setDisplayComment] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${studentId}`) || '[]');
    if (storedComments.length > 0) {
      setDisplayComment(storedComments);
    }
  }, [studentId]);
  

  useEffect(() => {
    localStorage.setItem(`comments_${studentId}`, JSON.stringify(displayComment));
  }, [studentId,displayComment]);

  const handleName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const generateKey = () => {
    return new Date().getTime();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert(`Please fill in the Name and Comment fields`);
    } else {
      const newComment = {
        key: generateKey(),
        name: name,
        comment: comment
      }
      setDisplayComment([...displayComment, newComment]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className='OneOnOne'>
      <hr />
      <h3>1-on-1 notes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleName}
            required
          />
    
        <label htmlFor='comment'>Note:</label>
        <textarea
            rows="5" 
            cols="45"
            type='text'
            name='comment'
            id='comment'
            value={comment}
            onChange={handleComment}
            required
          />
        
        <button className='NotesBtn' type='submit'>
          Add Note
        </button>
      </form>
      <ul>
        {displayComment.map(comment => (
          <li key={comment.key}>
            {comment.name} says, "{comment.comment}"
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
