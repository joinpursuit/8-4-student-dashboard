import { useState } from "react";

const Comments = () => {
    const [username,setUsername] = useState("");
    const [comment, setComment] = useState("");
    let [note, setNote] = useState("");
    const getUsername = (e) => {
        let userName = e.target.value;
        setUsername(userName);
        console.log(username); 
    }
    const getComment = (e) => {
        let userComment = e.target.value;
        setComment(userComment);
        console.log(comment);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNote(`${username}: ${comment}`);
    }

    return (
        <>
    <form  value = {note} onSubmit = {handleSubmit} >
        <h3>1-on-1 Notes</h3>
        <label> Comenter Name </label>
        <input type="text" onChange={getUsername}></input>
        <br/>
        <label> Comment </label>
        <input type="text" onChange={getComment}></input>
        <br />
        <button type="submit">Add Note</button>
    </form>
    <ul>
    <li>
    <p>{note}</p>
    </li>
    </ul>
    </>
    )
  
};
export default Comments;