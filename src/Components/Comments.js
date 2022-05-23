import AddNote from "./AddNote";

const Comments = ({student, comment, setComment, commenter, setCommenter}) => {

    // const handleCommenter = (e) =>{
    //     const {value} = e.target;
    //     setCommenter([...commenter, value])
    // }

    // const handleComment = (e) =>{
    //     const {value} = e.target;
    //     setComment([...commenter, value])
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="comments">
            <h4>1-on-1 Notes</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Commenter Name: <input type='text' className="name" value={commenter} />
                </label>
                <br/>
                <br/>
                <label>
                    Comment: <input type='text' className="comment" value={comment}/>
                </label>
                <br/>
                <br/>
                <input type='submit' value="Add Note" className="note" />
            </form>
            <ul>
                {student.notes.map(note => <AddNote note={note} />)}
            </ul>  
        </div>
    )
}

export default Comments;