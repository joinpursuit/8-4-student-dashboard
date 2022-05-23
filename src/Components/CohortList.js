import StudentList from "./StudentList";

const CohortList = ({ data, cohort, setCohort, setCohortName }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

  //   handleClickAllStudents = (e) => {
  //     const { value } = e.target;
  //     setCohortName(cohortName);
  //   }

  const handleClick = (e) => {
    const { value } = e.target;
    let filteredCohort = getCohort(data, value);
    setCohort(filteredCohort);
    setCohortName(value);
  };
  const getCohort = (data, semester) => {
    return data.filter((student) => {
      return student.cohort.cohortCode === semester;
    });
  };

  return (
    <div className="side-bar">
      <h2>Choose by Session</h2>
      <ul>
        <li className="all-students">
          <button onClick={() => {setCohortName("")}}value="All Students">All Students</button>
        </li>
        <br></br>
        {newList.map((cohort) => {
          return (
            <div className="cohort-list">
              <li>
                <button value={cohort} onClick={handleClick}>
                  {cohort.slice(0, -4) + " " + cohort.slice(-4)}
                </button>
              </li>
              <br></br>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;

