import React from "react";
import data from "../data/data.json"
import Cohort from "../Components/Cohort"

const CohortList = () => {

        // noDuplicates = []
        // data.forEach((element) => {
        //     if(noDuplicates.includes(element)){
        //         noDuplicates.push(element)
        //     }
        // })


    return(
        <div>
            <h2>Choose A Class By Start Date</h2>
            <ul>
                <li>
                    <button value="All Students"></button>
                </li>
                {data.map(()=>{
                    return(
                        <li key="cohortlist">
                            <Cohort />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CohortList