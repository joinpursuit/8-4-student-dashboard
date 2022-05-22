import StudentCard from "./StudentCard";

const StudentList = ({data, title}) => {
    return (
        <div className="all-students">
            <h3>{title}</h3>
            <p className="total">Total Students: <span>{data.length}</span></p>
            <StudentCard data={data}/>
        </div>
    )
}

export default StudentList;