
import CardContainer from "./Components /CardContainer";
import CohortList from "./Components /CohortList";
const data = require("./data/data.json") 
// console.log(data)


function App() {
  // const [students, setStudents] = useState(data)
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList data={data}/>
      <CardContainer data={data}/>
    </div>
  );
}

export default App;
