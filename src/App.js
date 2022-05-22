import Data from "./data/data.json";
import React from "react";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      {Data.map((data) => {
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
      })}
    </div>
  );
}

export default App;
