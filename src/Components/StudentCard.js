import React from "react"

const StudentCard = ({names, username}) => {


    return (
        <div>
            <h4>{names.preferredName} {names.middleName[0]}. {names.surname} </h4>
            <h5>{username}</h5>
        </div>
    )
}

export default StudentCard 