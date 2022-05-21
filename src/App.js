import React, { useState } from "react";
import Data from "./data/data.json";
import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";
import NavBar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="dashboard">
        <NavBar />
        <CohortList />
        <StudentList />
      </div>
    </div>
  );
}

export default App;
