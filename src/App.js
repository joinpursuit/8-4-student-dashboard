import React, { useState } from "react";
import Cohart from "./Cohart";
import Students from "./Students";
import data from './data/data.json';
// how do you import the data.json for the cohart useState???


function App() {

  const [cohart, setCohart] = useState([]);




  return (
    <div>
      <h1>Student Dashboard</h1>
      <Students></Students>
      <Cohart></Cohart>
    </div>
  );
}

export default App;
