import StudentCard from "./StudentCard";

const StudentList = ({data, title}) => {
    return (
        <div className="all-students">
            <h3>{title}</h3>
            <p className="total">Total Students: <span>{data.length}</span></p>
            <div className="wrapper">
            { data.map(student => <StudentCard data={student} />) }
            </div>
        </div>
    )
}

export default StudentList;