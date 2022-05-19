import React from "react";
import StudentCard from "./StudentCard"
import data from "../data/data.json"

const AllStudentCards = () => {

        // let imgData 
        // fetch(`https://fakeface.rest/face/json`)
        // .then((response) => response.json())
        // .then((json) => {
        //     json.map((element) => {
        //         imgData = element["image_url"]
        //     }))

return(
    <div>
        <h2>All Students</h2>
        <h4>Total Students: {data.length}</h4>
        <ul>
            {data.map(({img, names, username, cohortCode})=>{
                return(
                    <li>
                        <StudentCard key={cohortCode} names={names} username={username}/>
                        <img id={img} src="https://fakeface.rest/thumb/view" alt={names.preferredName} width={50} height={50}></img>
                    </li>
                )
            })}
        </ul>
    </div>
)

}

export default AllStudentCards