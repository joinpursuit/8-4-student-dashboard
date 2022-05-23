import { useState } from 'react'

const ReadMoreReadLess = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {isReadMore ? text.slice(0, 5) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read more.." : "..Show less"}
      </span>
    </>
  )
}

export default ReadMoreReadLess;