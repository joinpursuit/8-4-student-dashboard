import React from 'react'

export default function Notes({ comment }) {
    const {commenter, text} = comment;
  return (
    <li>
        {commenter}-{text}
    </li>
  )
}
