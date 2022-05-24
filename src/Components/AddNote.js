const AddNote = ({note}) =>{
    return (
        <div>
            <li>{note.commenter} says {note.comment}</li>
        </div>
    )
}

export default AddNote;