import React,{useState} from 'react'

export default function StudentCards({data}) {

  const[show, setShow] = useState(data)
 

  const handleClick=(data)=>{
   setShow(data.codewars)
}
   return data.map((student)=>{
        return(
          <div className="sCards">
            <img src={student.profilePhoto}/>&nbsp;
            <p>{student.names.preferredName}&nbsp;{student.names.middleName[0]}.&nbsp;{student.names.surname}</p>
            <p>{student.username}</p>
            <p>Birthday: {student.dob}</p>
            <button className="showB" onClick={handleClick}>Show More...</button>
          </div>
        )
      })
    };

