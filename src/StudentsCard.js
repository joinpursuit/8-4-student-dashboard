import React from "react";

const StudentsCard = ({}) => {

    return (
        <div className="card">
            <img src={img} alt={name} width="200px"/>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{birthdate}</p>
            <button type="button">See More...</button>
        </div>
    )
}






export default StudentsCard;