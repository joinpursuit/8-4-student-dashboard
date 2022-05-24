
const CohortList = ({ data, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

 const handleClick = (e) => {
    const { value } = e.target;
    if (value === "all") {
      setCohort(data);
      setHeading("All Students")
    } else {
      let selectedCohort = getCohort(data, value);
      setCohort(selectedCohort);
      setHeading(value.split(/([0-9]+)/).join(' '));
    }
  };
   
  const getCohort = (data, value) => {
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === value
    });
  };
  

  return (
    <div className="cohort">
      <h2>Choose a class by Start Date</h2>
      <ul>
        <button value="all" onClick={handleClick}>
          All Students
        </button>
        {newList.map((cohort) => {
          return (
            <div>
              <button className="button" value={cohort} onClick={handleClick}>
              {cohort.split(/([0-9]+)/).join(' ')}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;