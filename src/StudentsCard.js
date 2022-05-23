import React from "react";
import data from './data/data.json';
import { ReactDOM } from "react-dom";

/* stuData is a property which contains all JSON data
array of student object
*/
const StudentsCard = ({stuData}) => {

    return (
        <div>
        <img src={stuData.profilePhoto} ></img>
        <p>{stuData.names.preferredName} {stuData.names.middleName[0]}. {stuData.names.surname}</p>
        <p>{stuData.username}</p>
        <p>Birthday : {stuData.dob}</p>
        <a href="">See More...</a>
        {/* 
        {data.map((st,i) => {
            return (
                <h1>{st.names.surname}</h1>
            )
        })}
        */}
        
        </div>
       /*
    <div className="card">
            <img src={img} alt={name} width="200px"/>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{birthdate}</p>
            <button type="button">See More...</button>
        </div>
    */
    )
}






export default StudentsCard;