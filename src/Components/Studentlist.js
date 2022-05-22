import React from "react";
import Data from "./data/data.json"




return ({Data.map((data) => {
    return (
      <div>
        {data.names.preferredName} {data.names.middleName} {data.names.surname}
        <br></br>
        {data.username}
        <br></br>
        {data.dob}
        <p></p>
      </div>
    )
  })})
