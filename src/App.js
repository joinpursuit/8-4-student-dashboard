import {useState} from 'react';
import data from "./data/data.json";
import StudentList from "./Components/StudentList"
import CohortList from "./Components/CohortList";

const App = () => {
  const [list, setList] = useState(data);
  // const [title, setTitle] = useState('All Students');

  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <StudentList data={list} />
      <CohortList data={data} setList={setList} />
    </div>
  );
}

export default App;
