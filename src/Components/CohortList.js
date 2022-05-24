const CohortList = ({ data, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];
  let filteredCohort;
  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setCohort(data);
      setHeading("All Students")
    } else {
      filteredCohort = getCohort(data, value);
      setCohort(filteredCohort);
      setHeading(value)
    }
    
  };
  const getCohort = (data, semester) => {
    console.log(data.sort((a,b) => new Date(a.cohortStartDate) - new Date(b.cohortStartDate)))
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === semester;
    })
  };
 
  return (
    <div className="cohort-List">
      <h2>Choose a class by Start Date</h2>
      <ul>
        <button value="all" onClick={handleClick}>
          All Students
        </button>
        {newList.map((cohort) => {
          return (
            <div>
              <button value={cohort} onClick={handleClick}>
                {`${cohort.slice(0,cohort.length - 4)} ${cohort.slice(cohort.length - 4)}`}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;