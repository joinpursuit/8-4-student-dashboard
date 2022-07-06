const CohortList = ({ data, cohort, heading, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

  const handleClick = (event) => {
    const { value } = event.target;
    if (value === "all") {
      setCohort(data);
      setHeading("All Students")
    } else {
      let filteredCohort = getCohort(data, value);
      setCohort(filteredCohort);
      setHeading(value)
    }
  };
  const getCohort = (data, semester) => {
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === semester;
    });
  };

  return (
    <div id="cohortList">
      <h2>Choose a class by Start Date</h2>
      <div>
        <button value="all" onClick={handleClick}>
          All Students
        </button>
        {newList.map((cohort) => {
          return (
            <div>
              <button value={cohort} onClick={handleClick}>
                {cohort}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CohortList;

