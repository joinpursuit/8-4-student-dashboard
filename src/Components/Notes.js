const Notes = ({ comment }) => {
  const { commenter, text } = comment;
  return (
    <li>
      {commenter} - {text}
    </li>
  );
};

export default Notes;