import AddNote from "./AddNote";
import {useState} from 'react';

const Comments = ({student}) => {
    const [commenter, setCommenter] = useState('')
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="comments">
            <h4>1-on-1 Notes</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Commenter Name: <input type='text' className="name" value={commenter} onChange={(e) => setCommenter(e.target.value)} />
                </label>
                <br/>
                <br/>
                <label>
                    Comment: <input type='text' className="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </label>
                <br/>
                <br/>
                <input type='submit' value="Add Note" className="note" />
            </form>
            <ul>
                {student.notes.map(note => <AddNote note={note} comment={comment} commenter={commenter} />)}
            </ul>  
        </div>
    )
}

export default Comments;