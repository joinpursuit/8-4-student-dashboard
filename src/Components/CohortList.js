import StudentCard from "./StudentCard";
const CohortList = (props) => {
     props.students.map((student) => {

return(
    <div>
    <h2>Chosse a Class by Start Date</h2>
    <ul>
        <li> All Students</li>
        <li></li>
    </ul>
    </div>
)
})
}
export default CohortList 