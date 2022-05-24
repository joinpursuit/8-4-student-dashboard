const CohortList = ({ id, data, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) => student.cohort.cohortCode))];

  const handleClick = (e) => {
    const { value } = e.target;
    if (value === 'all') {
      setCohort(data);
      setHeading('All Students');
    } else {
      let filteredCohort = getCohort(data, value);
      setCohort(filteredCohort);
      setHeading(value);
    }
  };
  const getCohort = (data, semester) => {
    return data.filter(({ cohort }) => {
      return cohort.cohortCode === semester;
    });
  };
  const year = (year) => {
    console.log(year);
    return year.split('').slice(0, -4).join('') + ' ' + year.slice(1).slice(-4);
  };

  return (
    <div className="classYear">
      <h2>Choose a class by Start Date</h2>
      <ul>
        <li key={id}>
          <button value="all" onClick={handleClick}>
            All Students
          </button>
          {newList.map((cohort) => {
            return (
              <div>
                <button
                  className="btnYear"
                  value={cohort}
                  onClick={handleClick}
                >
                  {year(cohort)}
                </button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default CohortList;
