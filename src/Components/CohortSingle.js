import React, { useState } from "react";
import CohortList from "./CohortList";

const CohortSingle = ({cohortUniList}) => {

const loopCohortUniList = () => {
    for (let i = 0; i < cohortUniList.length; i++){
        return (cohortUniList[i])
    }
}


return (
    // {loopCohortUniList()}
   console.log("apple")
)

}

export default CohortSingle;
