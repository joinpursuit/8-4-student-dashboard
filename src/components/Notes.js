import { React, useState } from "react";

function Notes() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState([]);

  const handleName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !comment) {
      alert(`Please fill in the Name and Comment fields`);
    } else {
      setResult([
        ...result,
        <li key={generateKey(name)}>{name + ` says,  "` + comment + `"`}</li>,
      ]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className='OneOnOne'>
      <hr />
      <h3>1-on-1 notes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Commenter Name
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleName}
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor='comment'>
          Comment
          <input
            type='text'
            name='comment'
            id='comment'
            value={comment}
            onChange={handleComment}
            required
          />
        </label>
        <br />
        <br />
        <button className='NotesBtn' type='submit'>
          Add Note
        </button>
      </form>
      <ul>{result}</ul>
    </div>
  );
}

export default Notes;
