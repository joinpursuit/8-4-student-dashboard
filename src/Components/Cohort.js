import React from "react";
import data from "../data/data.json"

const Cohort = () => {
    return(
        <>
            <button>{data.cohort.cohortCode.slice(0, -4)+ ` ` + data.cohort.cohortCode.slice(-4)}</button>
        </>
    )
}

export default Cohort