import StudentCard from "./StudentCard";

const StudentList = ({data, list}) => {
    return (
        <div className="all-students">
            <h3>All Students</h3>
            <p className="total">Total Students: <span>{data.length}</span></p>
            <StudentCard data={data} list={list}/>
        </div>
    )
}

export default StudentList;