import data from "./data/data.json";
import StudentList from "./Components/StudentList"

const App = () => {
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <StudentList data={data}/>
    </div>
  );
}

export default App;
