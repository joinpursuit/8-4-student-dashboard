import AddNote from "./AddNote";

const Comments = ({student, comments, setComments}) => {
    // const handleCommenter = (e) => {
    //     commenter = e.target.value
    // }

    // const handleComment = (e) => {
    //     comment = e.target.value
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="comments">
            <h4>1-on-1 Notes</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Commenter Name: <input type='text' className="name" value=""  />
                </label>
                <br/>
                <br/>
                <label>
                    Comment: <input type='text' className="comment" value=""/>
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