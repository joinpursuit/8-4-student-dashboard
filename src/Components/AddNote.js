const AddNote = ({note, comment, commenter}) =>{
    return (
        <div>
            <li>{note.commenter} says {note.comment}</li>
            {comment && commenter ? <li>{commenter} says {comment}</li> : null}
        </div>
    )
}

export default AddNote;