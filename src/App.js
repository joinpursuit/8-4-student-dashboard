import {useState} from 'react';
import data from "./data/data.json";
import StudentList from "./Components/StudentList"
import CohortList from "./Components/CohortList";

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <StudentList data={data} list={list}/>
      <CohortList data={data} setList={setList}/>
    </div>
  );
}

export default App;
