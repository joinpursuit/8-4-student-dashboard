import Notes from "./Notes";
const Form = ({ comments, setComments }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { commenter, commenttext } = e.target;
    if (commenter.value && commenttext.value) {
      setComments([
        ...comments,
        { commenter: commenter.value, text: commenttext.value },
      ]);
      commenter.value = "";
      commenttext.value = "";
    }
  };

  return (
    <fieldset className="form">
      <div>
        <h2>1-on-1 Notes</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Comenter Name:
            <input type="text" name="commenter"></input>
          </label>
          <br />
          <label>
            Comments:
            <input type="text" name="commenttext"></input>
          </label>
          <br />
          <button type="submit">Add Note</button>
        </form>
        <section>
          <ul>
            {comments.map((comment) => (
              <Notes comment={comment} />
            ))}
          </ul>
        </section>
      </div>
    </fieldset>
  );
};

export default Form;
