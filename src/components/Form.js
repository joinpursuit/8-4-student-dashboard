import React, {useState} from 'react'


function Form() {
    const[comments, setComments] = useState([])
    const handleSubmit= (event) =>{
        event.preventDefault()
        const {commenter, commentText} = event.target
        if (commenter.value && commentText.value){
            setComments([...comments, {commenter: commenter.value, text:commentText.value}])
        }
    }
  return (
    <div className="sdbForm">
        <h2>1-on-1 Notes</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>Commenter Name<input type="text" name="commenter"></input></label>
            <br />
            <br />
            <label>Comment<input type="text" name="commentText"></input></label><br />      
            <button type="submit">Add A Note</button>
        </form>
        <section>
            <p>this is a test</p>
            <ul>
            
               {comments.map((comment)=>{
                return   <li>{comment.commenter}-{comment.text}</li>
               })}
            </ul>
        </section>
        
    </div>
  )
}

export default Form