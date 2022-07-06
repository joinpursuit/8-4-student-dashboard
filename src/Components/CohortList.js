const CohortList = ({ data, cohort, heading, setCohort, setHeading }) => {
  let newList = [...new Set(data.map((student) =>  student.cohort.cohortCode))];
  
const seasonArr = newList
const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];

const regexp = /(.+)(\d{4})/;
const someFunction = (s) => {
   return [...s].sort((lhs, rhs) => {
     const [seasonL, yearL] = regexp.exec(lhs).slice(1);
     const [seasonR, yearR] = regexp.exec(rhs).slice(1);
     return +yearL - +yearR || seasons.indexOf(seasonL) - seasons.indexOf(seasonR);
   });
}
let sortedArr = someFunction(seasonArr);
// console.log(sortedArr);
// https://stackoverflow.com/questions/72341613/javascript-how-to-sort-an-array-of-strings-that-has-seasons-and-years

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
        {sortedArr.map((cohort) => {
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

