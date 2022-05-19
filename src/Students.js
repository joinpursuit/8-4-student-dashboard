import StudentsCard from "./StudentsCard";

const Students = ({cohart, setCohart}) => {



    return (
        <div className="students">
            <span>
            <h1>All Students</h1>
            <p># of Student </p>
            <StudentsCard></StudentsCard>
            </span>
        </div>
    )
}










export default Students;