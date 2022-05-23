
import React , { useState} from "react";
import StudentsCard from "./StudentsCard";
import data from './data/data.json';

const Students = () => {
    const [cohart, setCohart] = useState([])

    


    return (
        <div className="students">
            <span>
            <h1>All Students</h1>
            <p>Total students : {data.length}</p>
            </span>
            {/* iterate throygh the data.json for each person return that data to the StudentCard component */}
            {data.map((person) => {return <StudentsCard stuData={person}></StudentsCard>})}
    
            
        </div>
    )

   
}




export default Students;