import StudentCard from "./StudentCard";

const StudentList = ({data}) => {
    return (
        <div className="all-students">
            <h3>All Students</h3>
            <p>Total Students: {data.length}</p>
            <StudentCard data={data}/>
        </div>
    )
}

export default StudentList;